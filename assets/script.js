var skybox;  // Global variable

function toggle_skybox(){
  // Purpose: toggle between the two types of skyboxes
  if(skybox == ''){
      apply_skybox('night');
  } else {
      apply_skybox('main');
  }
}

function apply_skybox(new_skybox){
  //Purpose: given a skybox; change the current stylesheet to reflect it
  //Get the body element
  var body = document.getElementsByTagName('body')[0];
  // Use the skybox
  skybox = new_skybox;
  body.className = new_skybox;
};


function is_it_night(){
  // Returns a boolean
  // Return true if it is night
  // Return false if it is day
  var current_hour = (new Date()).getHours();

  // It is night when it after 6PM (18th hour)
  if(current_hour > 18){
    return true;
  }
  // And its is night when it is before 6AM (6th hour)
  if(current_hour < 6){
    return true;
  }

  return false;
}


if(is_it_night()) {
  apply_skybox('night');
}
else {
  apply_skybox('main');
}


