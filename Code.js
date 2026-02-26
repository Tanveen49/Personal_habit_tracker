// The sheet name where data will be stored. Change if your sheet has a different name.
const SHEET_NAME = "Sheet1";

/**
 * Serves the HTML file of the web app.
 * This function runs when you visit the web app's URL.
 */
function doGet(e) {
  return HtmlService.createHtmlOutputFromFile('Index.html')
    .setTitle('Habit Tracker')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.DEFAULT);
}

/**
 * Logs the submitted habit data to the Google Sheet.
 * This function is called from the client-side JavaScript.
 * @param {string} username The user's name.
 * @param {string} email The user's email.
 * @param {string} habit The habit being tracked.
 * @param {string} notes Additional notes for the habit.
 * @return {string} A success message.
 */
function logHabit(username, email, habit, notes) {
  try {
    // Get the active spreadsheet and the specific sheet by name
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
    
    // Check if the sheet exists
    if (!sheet) {
      throw new Error(Sheet with name "${SHEET_NAME}" not found.);
    }

    // Create the new row of data in the correct order
    const newRow = [
      new Date(), // TimeStamp
      username,   // UserName
      habit,      // Habit
      notes,      // Notes
      email       // Email
    ];

    // Append the row to the sheet
    sheet.appendRow(newRow);

    return "Habit logged successfully! ✅";
  } catch (error) {
    // Log the error for debugging and return a user-friendly message
    console.error("Error in logHabit: " + error.toString());
    return "Error: Could not log habit. " + error.message;
  }
}
