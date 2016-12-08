#pragma strict
import UnityEngine.SceneManagement;
import UnityEngine.UI;

var player: Transform;
var goToNextSceneText: Text;
var gameManager: GameObject;

private var timer: float = 5.0;
private var distanceAllowed = 1.5;
private var showBDP = false;
private final var COLOUR_SEQUENCE_LENGHT = 5;
private var bombDisarmingColourSequenceArr = new Array ();

function Start () {
	goToNextSceneText.enabled = false;
}

function Update () {
	var distance = Vector3.Distance(transform.position, player.position);
	Debug.Log( "Player is close: " + distance.ToString());
	//Check if the player is close to the bomb and clicks the left mouse button
	if(distance <= 3){
		// Stop the timer since the player has found the bomb...
		gameManager.GetComponent.<startGame>().StopTime();
		//Save the best time to the player preferences
		SaveBestTime(gameManager.GetComponent.<startGame>().GetTimeValue());
		// Show text 'Press the mouse left button in order to go show the bomb disarming plan
		goToNextSceneText.enabled = true;
		if(Input.GetMouseButtonUp(0)){
			GenerateBombDisarmingPlanColourSequence();
			showBDP = true;
		}
		
	}else if (distance >= 10 && distance <= 15){
		gameManager.GetComponent.<startGame>().StartTime();
		showBDP = false;
		goToNextSceneText.enabled = false;
	}
	
	if(showBDP){
		timer -= Time.deltaTime;
		if(timer <= 0){
			Debug.Log("Load the next leval");
			SceneManager.LoadScene ("BombDisarmingScene");
			timer = 0;
		}
	}
}

function OnGUI() {
	
	var centeredStyle = GUI.skin.GetStyle("Label");
    centeredStyle.alignment = TextAnchor.UpperCenter;
	if(showBDP){
		GUI.Label (Rect (Screen.width/2-50, Screen.height/2-25, 200, 50), GetColourNameFromInArray(bombDisarmingColourSequenceArr) + " " + timer.ToString("0"), centeredStyle);
	}
}

function SaveBestTime(currentTimeValue) {
	// check if the previous value is less than the current one...
	var previousValue: float = PlayerPrefs.GetFloat("BESTTIME", 0);
	var current: float = currentTimeValue;
	if (previousValue < current) {
		PlayerPrefs.SetFloat("BESTTIME", currentTimeValue);
	}
}

function GenerateBombDisarmingPlanColourSequence() {
	
	for(var i = 0; i < COLOUR_SEQUENCE_LENGHT; i++) {
		// Generate random colour/integer in range 0 to COLOUR_SEQUENCE_LENGHT variable
		var colourIndex = Random.Range(0, COLOUR_SEQUENCE_LENGHT);
		bombDisarmingColourSequenceArr.Push(colourIndex);
		//Save to PlayerPrefs
		PlayerPrefs.SetInt("BDPCODE" + i, colourIndex);
	}
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