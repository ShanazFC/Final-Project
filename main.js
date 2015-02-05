// Name animation for index.html page 

$("#js-rotating").Morphext({
    // The [in] animation type. Refer to Animate.css for a list of available animations.
    animation: "fadeOut",
    // An array of phrases to rotate are created based on this separator. Change it if you wish to separate the phrases differently (e.g. So Simple | Very Doge | Much Wow | Such Cool).
    separator: ",",
    // The delay between the changing of each phrase in milliseconds.
    speed: 2600
});

$("#js-rotating2").Morphext({
    // The [in] animation type. Refer to Animate.css for a list of available animations.
    animation: "fadeOut",
    // An array of phrases to rotate are created based on this separator. Change it if you wish to separate the phrases differently (e.g. So Simple | Very Doge | Much Wow | Such Cool).
    separator: ",",
    // The delay between the changing of each phrase in milliseconds.
    speed: 2300
});



// Define spreadsheet URL.
var mySpreadsheet = 'https://docs.google.com/a/generalassemb.ly/spreadsheets/d/1Xcxwo0_02QPcv5Gi6jK5xY2erytvLr-FQVS8r_genA8/edit#gid=1694942771';


// Load top twenty shoutouts 
$('#Top5').sheetrock({
  url: mySpreadsheet,
  sql: "select B,C,D order by A desc",
  chunkSize: 5,
  headersOff: true,
})

$('#AdamBray').sheetrock({
  url: mySpreadsheet,
  sql: "select D,B where C = 'Adam Bray' order by A desc",
  chunkSize: 20,
  headersOff: true,
})
 

// Load top twenty shoutouts 
$('#AdamRaveret').sheetrock({
  url: mySpreadsheet,
  sql: "select D,B where C = 'Adam Ravaret' order by A desc",
  chunkSize: 20,
  headersOff: true,
})



// Load top twenty shoutouts 
$('#Alfonso').sheetrock({
  url: mySpreadsheet,
  sql: "select D,B where C = 'Alfonso' order by A desc",
  chunkSize: 20,
  headersOff: true,
})


// Load top twenty shoutouts 
$('#Faz').sheetrock({
  url: mySpreadsheet,
  sql: "select D,B where C = 'Faz' order by A desc",
  chunkSize: 20,
  headersOff: true,
})



// Load top twenty shoutouts 
$('#Jeff').sheetrock({
  url: mySpreadsheet,
  sql: "select D,B where C = 'Jeff' order by A desc",
  chunkSize: 20,
  headersOff: true,
})



// Load top twenty shoutouts 
$('#Jesse').sheetrock({
  url: mySpreadsheet,
  sql: "select D,B where C = 'Jesse' order by A desc",
  chunkSize: 20,
  headersOff: true,
})


// Load top twenty shoutouts 
$('#Kendrick').sheetrock({
  url: mySpreadsheet,
  sql: "select D,B where C = 'Kendrick' order by A desc",
  chunkSize: 20,
  headersOff: true,
})

// Load top twenty shoutouts 
$('#Matt').sheetrock({
  url: mySpreadsheet,
  sql: "select D,B where C = 'Matt' order by A desc",
  chunkSize: 20,
  headersOff: true,
})

// Load top twenty shoutouts 
$('#Paul').sheetrock({
  url: mySpreadsheet,
  sql: "select D,B where C = 'Paul' order by A desc",
  chunkSize: 20,
  headersOff: true,
})

// Load top twenty shoutouts 
$('#Pat').sheetrock({
  url: mySpreadsheet,
  sql: "select D,B where C = 'Pat' order by A desc",
  chunkSize: 20,
  headersOff: true,
})


// Load top twenty shoutouts 
$('#Rachael').sheetrock({
  url: mySpreadsheet,
  sql: "select D,B where C = 'Rachael' order by A desc",
  chunkSize: 20,
  headersOff: true,
})

// Load top twenty shoutouts 
$('#Sean').sheetrock({
  url: mySpreadsheet,
  sql: "select D,B where C = 'Sean' order by A desc",
  chunkSize: 20,
  headersOff: true,
})

// Load top twenty shoutouts 
$('#Seth').sheetrock({
  url: mySpreadsheet,
  sql: "select D,B where C = 'Seth' order by A desc",
  chunkSize: 20,
  headersOff: true,
})

// Load top twenty shoutouts 
$('#Shanaz').sheetrock({
  url: mySpreadsheet,
  sql: "select D,B where C = 'Shanaz' order by A desc",
  chunkSize: 20,
  headersOff: true,
})

// Load top twenty shoutouts 
$('#Tess').sheetrock({
  url: mySpreadsheet,
  sql: "select D,B where C = 'Tess' order by A desc",
  chunkSize: 20,
  headersOff: true,
})


// Load top twenty shoutouts 
$('#Tim').sheetrock({
  url: mySpreadsheet,
  sql: "select D,B where C = 'Tim' order by A desc",
  chunkSize: 20,
  headersOff: true,
})
