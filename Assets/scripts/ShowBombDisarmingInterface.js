#pragma strict

var PressButtonText: Text;
var gameDisarmingInterface: Image;
var gameOver: Image;

private var isGameOver = false;
private var isBombDisarmingInterfaceVisible = false;
private final var COLOUR_SEQUENCE_LENGHT = 5;
private var colourSequenceArr = new Array(5);
private var currentCode = 0;

function Start () {
	for(var i = 0; i < COLOUR_SEQUENCE_LENGHT; i++) {
		colourSequenceArr[i] = PlayerPrefs.GetInt("BDPCODE" + i, 0);
	}
	
	DebugColourSequence();
}


function Update () {
	if (Input.GetKeyDown ("o")){
		print ("space key was pressed");
		PressButtonText.enabled = false;
		gameDisarmingInterface.gameObject.active = true;
		isBombDisarmingInterfaceVisible = true;
	}
	
	// Check if the user presses the left mouse button
	if(Input.GetMouseButton(0) && isGameOver){
        Debug.Log("Transfer player to scene one. Play again.");
		SceneManager.LoadScene ("BombSearchScene");
	}
	
	if(isBombDisarmingInterfaceVisible){
		
		//Check if the player wins
		if(currentCode == 5){
			print("YOU WIN!");
		}else{
			// Check for the exact colour sequence
			if (Input.GetKeyDown (KeyCode.Keypad0) || Input.GetKeyDown (KeyCode.Alpha0)){
				print ("Number 0 key is pressed");
				CheckPlayerInputForKey(0);
			}else if(Input.GetKeyDown (KeyCode.Keypad1) || Input.GetKeyDown (KeyCode.Alpha1)){
				print ("Number 1 key is pressed");
				CheckPlayerInputForKey(1);
			}else if(Input.GetKeyDown (KeyCode.Keypad2) || Input.GetKeyDown (KeyCode.Alpha2)){
				print ("Number 2 key is pressed");
				CheckPlayerInputForKey(2);
			}else if(Input.GetKeyDown (KeyCode.Keypad3) || Input.GetKeyDown (KeyCode.Alpha3)){
				print ("Number 3 key is pressed");
				CheckPlayerInputForKey(3);
			}else if(Input.GetKeyDown (KeyCode.Keypad4) || Input.GetKeyDown (KeyCode.Alpha4)){
				print ("Number 4 key is pressed");
				CheckPlayerInputForKey(4);
			}
		}
		
	}
	
	//print("Current code index: " + currentCode);
        
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

function DebugColourSequence(){
	
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

function CheckPlayerInputForKey(key){

	if(colourSequenceArr[currentCode] == key){
		currentCode++;
	}else{
		gameOver.gameObject.active = true;
		isGameOver = true;
		print ("Wrong colour! GameOver!");
	}
	
}
