// Saves options to localStorage.
function save_options() {
  var range = document.getElementById("berrymount");
  var enough = range.value;
  localStorage["enough_berry"] = enough;

  // Update status to let user know options were saved.
  var status = document.getElementById("feedberry");
  if(enough != 100)
  {
  	status.innerHTML = "You are able to handle " + enough + "% of Berry.";
  }
  else
  {
  	status.innerHTML = "You are ready for the full Berry experience.";
  }
}

// Restores select box state to saved value from localStorage.
function restore_options() {
  var enough = localStorage["enough_berry"];
  if (!enough) {
    enough = 50;
  }
  
  var range = document.getElementById("berrymount");
  range.value = enough;
 	
  var status = document.getElementById("feedberry");

    if(enough != 100)
  	{
  		status.innerHTML = "You are currently experiencing " + enough + "% of Berry.";
	}
	else
	{
		status.innerHTML = "You are currently experiencing 100% of pure undiluted Berry.";
	}
}

function changeFeedberry(){
	var range = document.getElementById("berrymount");
  var enough = range.value;

  var status = document.getElementById("feedberry");


	if(enough != 100)
	{
	 	status.innerHTML = "Save settings to begin enjoying " + enough + "% of Berry.";
	}
	else
	{
	 	status.innerHTML = "Save settings for the full Berry experience.";
	}

}
document.addEventListener('DOMContentLoaded', restore_options);
document.querySelector('#save').addEventListener('click', save_options);
document.getElementById("berrymount").addEventListener('change', changeFeedberry);

