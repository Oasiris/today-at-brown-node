$(document).ready(() => {
  console.log('doc is ready :3c');

  let popupWindowIsActive = false;


  // Hide the "full info" text for now -- it should only pop up when an element is clicked
  $('.ele-more-info, .ele-more-info-text').hide();

  // Now, show the page to the viewer

  $('div.hidden').fadeIn(1000).removeClass('hidden');

  // HELPER FUNCTIOn

  function formatMoreInfoText(shortInfo, moreInfo) {
    if (moreInfo == "") {
      moreInfo = shortInfo + '\n\n<b>Click the link for more information.</b>';
    }
    moreInfo = moreInfo.replace(/\n/g, "<br>");

    if (moreInfo.trim().indexOf('<br>') == 0) {
      console.log('GOTEM', moreInfo);
      moreInfo = moreInfo.slice(4);
    } else {
      console.log('no');
      console.log(moreInfo.trim().indexOf('<br>'));
    }
    return moreInfo;
  }

  // ON CLICK DIV

  $('.announcement-ele').on('click', function(ele) {
    if (popupWindowIsActive) {
      $('#more-info-area').remove();
    }

    console.log('click registered');
    let fullInfo = ele.currentTarget.children;
    console.log('wassup');
    console.log(fullInfo);
    let title = fullInfo.item(0).innerHTML;
    let fromTo = fullInfo.item(1).innerHTML;
    let info = fullInfo.item(2).innerHTML;
    let moreInfoLink = fullInfo.item(3).innerHTML;
    let moreInfoText = fullInfo.item(4).innerHTML;

    console.log(moreInfoText);
    moreInfoText = formatMoreInfoText(info, moreInfoText)

    let myString = `
        <div id="more-info-area">
          <h2>${title}</h2>
          <h3>${fromTo}</h3>
          <p>${moreInfoText}</p>
          <div class="m-i-button-area">
            <button type="button" onclick="window.open('${moreInfoLink}')">Link to brown.edu</button>
            <button type="button">Add to Calendar</button>
            <button type="button" class="more-info-exit-btn">Back</button>
          </div>
      </div>
    `;
    $('#header-background').append(myString);
    popupWindowIsActive = true;

    $('.more-info-exit-btn').on('click', function(ele) {
      console.log('clicked button!!!');
      $('#more-info-area').remove();
    });
  });


// 'p.ele-more-info-text'


  $('.event-ele').on('click', function(ele) {
    if (popupWindowIsActive) {
      $('#more-info-area').remove();
    }

    console.log('click registered');
    let fullInfo = ele.currentTarget.children;
    let title = fullInfo.item(0).innerHTML;
    let time = fullInfo.item(1).innerHTML;
    let location = fullInfo.item(2).innerHTML;
    console.log(fullInfo.item(3).innerHTML);
    let info = fullInfo.item(3).innerHTML;
    let moreInfoLink = fullInfo.item(4).innerHTML;
    let moreInfoText = fullInfo.item(5).innerHTML;
    console.log(title, time, location, info, moreInfoLink, moreInfoText);

    console.log(moreInfoText);
    moreInfoText = formatMoreInfoText(info, moreInfoText);

    let myString = `
        <div id="more-info-area">
          <h2>${title}</h2>
          <h3>${time}</h3>
          <h4>${location}</h4>
          <p>${moreInfoText}</p>
          <div class="m-i-button-area">
            <button type="button" onclick="window.open('${moreInfoLink}')">Link to brown.edu</button>
            <button type="button">Add to Calendar</button>
            <button type="button" class="more-info-exit-btn">Back</button>
          </div>
      </div>
    `;
    $('#header-background').append(myString);
    popupWindowIsActive = true;

    $('.more-info-exit-btn').on('click', function(ele) {
      console.log('clicked button!!!');
      $('#more-info-area').remove();
    });
  });
});