$(document).ready(() => {
  console.log('doc is ready :3c');


  // Hide the "full info" text for now -- it should only pop up when an element is clicked
  $('.ele-more-info, .ele-more-info-text').hide();

  // Now, show the page to the viewer

  $('div.hidden').fadeIn(1000).removeClass('hidden');


  $('.announcement-ele').on('click', function(ele) {
    console.log('click registered');
    let moreInfoLink = ele.currentTarget.children.item(3).innerHTML;
    let moreInfoText = ele.currentTarget.children.item(4).innerHTML;
    console.log(moreInfoText);
    
    $('body').append('<div id="more-info-area">');
    $('#more-info-area').text(moreInfoText);

    // console.dir(ele);
    // console.dir(ele.currentTarget.children);
    // console.dir(ele.currentTarget.children.item(4).innerHTML);
  });

// 'p.ele-more-info-text'


  $('.event-ele').on('click', function(ele) {
    console.log('click registered');
    let moreInfoLink = ele.currentTarget.children.item(4).innerHTML;
    let moreInfoText = ele.currentTarget.children.item(5).innerHTML;
    console.log(moreInfoText);
  });


});