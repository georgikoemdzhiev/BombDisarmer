#pragma strict

var PressButtonText: Text;
var gameDisarmingInterface: Image;
private var isBombDisarmingInterfaceVisible = false;
private final var COLOUR_SEQUENCE_LENGHT = 5;
private var colourSequenceArr = new Array(5);
function Start () {
	for(var i = 0; i < COLOUR_SEQUENCE_LENGHT; i++) {
		colourSequenceArr[i] = PlayerPrefs.GetInt("BDPCODE" + i, 0);
	}
	
	DebutColourSequence();
}

function Update () {
	if (Input.GetKeyDown ("o")){
		print ("space key was pressed");
		PressButtonText.enabled = false;
		gameDisarmingInterface.gameObject.active = true;
		isBombDisarmingInterfaceVisible = true;
	}
        
}

function OnTriggerEnter() {
	PressButtonText.enabled = true;
	Debug.Log("OnTriggerEnter");
}

function OnTriggerExit() {
	PressButtonText.enabled = false;
	Debug.Log("OnTriggerExit");
}


function isBombInterfaceVisible(){
	return isBombDisarmingInterfaceVisible;
}

function DebutColourSequence(){
	
	Debug.Log("Wire combo: " + GetColourNameFromInArray(colourSequenceArr));
}

function GetColourNameFromInArray(arr){
	// Index for RED = 0
	// Index for GREEN = 1
	// Index for BLUE = 2
	// Index for Yellow = 3
	// Index for Orange = 4
	var stringColourSequence = "";
	for (var value : int in arr) {
		if(value == 0) {
			stringColourSequence += "Red";
		}else if(value == 1){
			stringColourSequence += "Green";
		}else if(value == 2){
			stringColourSequence += "Blue";
		}else if(value == 3){
			stringColourSequence += "Yellow";
		}else{
			stringColourSequence += "Orange";
		}
    }
	
	return (stringColourSequence);
}
