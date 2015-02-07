
// Define spreadsheet URL.
var mySpreadsheet = 'https://docs.google.com/a/generalassemb.ly/spreadsheets/d/1NJcX5igCVTgBvpo31AAC5oGkI09jzXAfCbPkyICLEzg/edit#gid=313396534';


// Load top twenty shoutouts 
$('#Top5').sheetrock({
  url: mySpreadsheet,
  sql: "select A,B,D order by A desc",
  chunkSize: 10,
  headersOff: true,
})
