// Copyright 2012, <OWNER>: License details can be found in LICENSE.markdown.

Object.prototype.foreach = function( callback ) {
  for( var k in this ) {
    if(this.hasOwnProperty(k)) {
     callback( k, this[ k ] );
    }
  }
}

Array.prototype.foreach = function( callback ) {
  for( var k=0; k<this .length; k++ ) {
    callback( k, this[ k ] );
  }
}

function displayTime() {
  var clock = document.querySelector('#clock');
  clock.innerText = Date();
}


function processVisitsWithUrl(url) {
  console.log(url);
}

function main() {
  /*var clock = document.createElement('p');
  clock.id = "clock";
  clock.innerText = Date();
  document.body.appendChild(clock);
  setInterval(displayTime, 1000);*/


  //chrome.history.getVisits({url: url}, processVisitsWithUrl(url));

var substituteList = {
  "http://www.google.de" : "http://www.yahoo.de",
  "http://www.heise.de" : "http://www.golem.de",
  "http://www.microsoft.com" : "http://www.linux.org",
  "http://schlumpf.de" : "http://www.test.de"
};

substituteList.foreach( function( from, to ) {

  chrome.history.getVisits({url:from}, function(visitItems){
    //console.log(historyItemUrl); // here you can access it.
    //console.log( from + ' substituded with ' + to );
    //console.log(visitItems);
     if ( visitItems.length > 0 ) {
        console.log( from + ' substituded with ' + to );

        for (var i = 0; i < visitItems.length; i++) {
          // substitute all occurences of that url
          //chrome.history.deleteUrl(visitItems[0], from);

          chrome.history.deleteUrl({
              url: from
          });

          console.log(visitItems[i] + from + " removed");
         // chrome.history.addUrl(object details, function callback)

          chrome.history.addUrl({
              url: to
          });

          console.log("added "+ to +" instead");

        }

     }


  });

});



//var historyItemUrl = "http://www.google.de";




}

// Kick things off once the plugin's content loads.
document.addEventListener("DOMContentLoaded", function () {
  main();
  //console.log("test");
});
