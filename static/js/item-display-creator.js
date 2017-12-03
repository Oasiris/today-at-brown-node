function buildTags(data){
  var tag_counter = {};
  for(var i = 0; i < data.announcements.length; i++){
    const tag = data.announcements[i].tag
    if(tag_counter.hasOwnProperty(tag)){
      data.announcements[i].id = tag + "" + tag_counter[tag];
      tag_counter[tag]++;
    } else {
      data.announcements[i].id = tag + "0";
      tag_counter[tag] = 1;
    }
  }
  for(var i = 0; i < data.events.length; i++){
    const tag = data.events[i].tag
    if(tag_counter.hasOwnProperty(tag)){
      data.events[i].id = tag + "" + tag_counter[tag];
      tag_counter[tag]++;
    } else {
      data.events[i].id = tag + "0";
      tag_counter[tag] = 1;
    }
  }
  data.tags = tag_counter;
}


module.exports = {
  buildTags
};
