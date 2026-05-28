// קוד זה יש להדביק ב-Google Apps Script

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = e.parameter;

    sheet.appendRow([
      new Date(),
      data.full_name,
      data.email,
      data.phone,
      data.team,
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: err.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// הריצו את הפונקציה הזו מה-Editor לבדיקה (לא את doPost)
function testSetup() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

  if (sheet.getLastRow() === 0) {
    sheet.appendRow(['תאריך', 'שם מלא', 'אימייל', 'טלפון', 'נבחרת']);
  }

  sheet.appendRow([new Date(), 'בדיקה', 'test@test.com', '050-0000000', 'ברזיל']);
  Logger.log('הצלחה! בדקו את הגיליון.');
}
