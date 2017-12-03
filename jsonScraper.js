
// NOTE: THIS WILL NOT WORK UNLESS YOU HAVE REQUEST, CHEERIO, AND BLUEBIRD INSTALLED.
// THOSE PROJECTS ARE CURRENTLY NOT IN PACKAGE.JSON -- THEY MUST BE INSTALLED MANUALLY!

// ---------------------------------------------------------------------------------

// const request = require('request');
// const cheerio = require('cheerio');
// var Promise = require('bluebird');

// const myJson = require('./data.json');

// function getShit() { // String subsectionTag -- either "events" or "announcements"
//   var arrayOfTags = ['announcements', 'events'];

//   var finalObj = {};

//   for (let section of arrayOfTags) {
//     var promiseArray = [];

//     console.log(section);
//     for (let entry of myJson[section]) {
//       if (entry == undefined) {
//         continue;
//       }
//       let urlToRequest = entry.more_info;
//       console.log(urlToRequest);
      
//       var myPromise = new Promise((resolve, reject) => {
//         let entryClone = entry;
//         let sectionCLone = section;
//         let urlToRequestClone = urlToRequest;
//         request.get(urlToRequestClone, (err, response, html) => {
//           if (err) {
//             console.log(err); 
//             return reject();
//           } else {
//             console.log(`request for ${urlToRequestClone} success`);
//             let $ = cheerio.load(html);
//             let text = $('p.emailText').text();
//             console.log(text.trim());
//             entryClone.more_info_text = text;
//             return resolve(entryClone);
//           }

//         });
//       }); // end of promise obj
//       promiseArray.push(myPromise);
//       // 
//     } // end of entry loop

//     Promise.all(promiseArray)
//       .then(entries => {
//         finalObj[section] = entries;
//         console.log(JSON.stringify(finalObj));
//       });

//   } // end of section loop

//   // console.log('GOT HERE');
//   // console.log(finalObj);
// } // end of function

// getShit();
