// Define spreadsheet URL.
var mySpreadsheet = 'https://docs.google.com/a/generalassemb.ly/spreadsheets/d/1Xcxwo0_02QPcv5Gi6jK5xY2erytvLr-FQVS8r_genA8/edit#gid=1694942771';



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



// Load top twenty shoutouts 
$('#Top5').sheetrock({
  url: mySpreadsheet,
  sql: "select B,C,D order by A desc",
  chunkSize: 5,
  headersOff: true,
})


var peeps = ["#AdamBray", "#AdamRaveret", "#Alfonso", "#Faz", "#Jeff", "#Jesse", "#Kendrick", "#Matt", "#Paul", "#Pat", "#Rachael", "#Sean", "#Seth", "#Shanaz", "#Tess", "#Tim"]

var actualName = ["Adam Bray", "Adam Raveret", "Alfonso", "Faz", "Jeff", "Jesse", "Kendrick", "Matt", "Paul", "Pat", "Rachael", "Sean", "Seth", "Shanaz", "Tess", "Tim"]

for(var i=0; i<peeps.length; i++){
    shoutouts(peeps[i], actualName[i]);
}

function shoutouts(name, actualName) {
    $(name).sheetrock({
  url: mySpreadsheet,
  sql: "select D,B where C = " + "'" + actualName + "'" + "order by A desc",
  chunkSize: 10,
  headersOff: true,
})

}