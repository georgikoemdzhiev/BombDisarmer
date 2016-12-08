#pragma strict
private final var COLOUR_SEQUENCE_LENGHT = 5;
private var colourSequenceArr = new Array(5);
function Start () {
	//Debug.Log("Wire combo: " + PlayerPrefs.GetString("BDPCODE"));
	
	for(var i = 0; i < COLOUR_SEQUENCE_LENGHT; i++) {
		colourSequenceArr[i] = PlayerPrefs.GetInt("BDPCODE" + i, 0);
	}
	
	DebutColourSequence();
}

function Update () {

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