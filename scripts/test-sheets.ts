/**
 * Local connection test for Google Sheets (Google_sheets_setup.md Part 5).
 * Run: npx tsx --env-file=.env.local scripts/test-sheets.ts
 * Do not deploy this script as a production endpoint.
 */
import {
  appendRow,
  getSpreadsheetInfo,
  isGoogleSheetsConfigured,
  readRows,
} from "../lib/google-sheets";

async function test() {
  console.log("--- Testing Google Sheets Connection ---\n");

  if (!isGoogleSheetsConfigured()) {
    console.error(
      "❌ Missing env: GOOGLE_SERVICE_ACCOUNT_EMAIL, GOOGLE_PRIVATE_KEY, GOOGLE_SHEET_ID"
    );
    process.exit(1);
  }

  const tab = process.env.GOOGLE_SHEET_TAB_NAME || "Sheet1";
  console.log("Tab:", tab);

  try {
    const info = await getSpreadsheetInfo();
    console.log("✅ Spreadsheet found:", info.title);
    console.log("   Tabs:", info.sheets?.map((s) => s.name).join(", "));
    const hasTab = info.sheets?.some((s) => s.name === tab);
    if (!hasTab) {
      console.error(`❌ Tab "${tab}" not found in spreadsheet. Create it or fix GOOGLE_SHEET_TAB_NAME.`);
      process.exit(1);
    }
  } catch (error) {
    console.error("❌ Failed to read spreadsheet info:", error);
    process.exit(1);
  }

  try {
    const result = await appendRow([
      new Date().toISOString(),
      "Test Entry",
      "Test Firm",
      "test@example.com",
      "",
      "",
      "",
      "",
      "",
      "This is a test row from the development environment.",
      "Human Rights Experts",
    ]);
    console.log("✅ Row written:", result.updatedRange);
  } catch (error) {
    console.error("❌ Failed to write row:", error);
    process.exit(1);
  }

  try {
    const result = await readRows();
    console.log(`✅ Read ${result.rows.length} rows (including header)`);
    console.log("   Last row:", result.rows[result.rows.length - 1]);
  } catch (error) {
    console.error("❌ Failed to read rows:", error);
    process.exit(1);
  }

  console.log("\n--- All tests passed ---");
}

test();
