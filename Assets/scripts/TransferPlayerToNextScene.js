#pragma strict
import UnityEngine.SceneManagement;
import UnityEngine.UI;

var player: Transform;
var goToNextSceneText: Text;
var gameManager: GameObject;

private var timer: float = 5.0;
private var distanceAllowed = 1.5;
private var showBDP = false;
private var colourCodes = ["YellowYellowRedGreenBlue",
							"ReedGreenBlueYellowRed",
							"BlueYellowYellowBlueYellow",
							"YellowGreenGreenYellowBlue",
							"GreenBlueYellowGreenBlue"];
private var bombDisarmingPlan = "";
function Start () {
	goToNextSceneText.enabled = false;
}

function Update () {
	var distance = Vector3.Distance(transform.position, player.position);
	//Debug.Log( "Player is close: " + distance.ToString());
	//Check if the player is close to the bomb and clicks the left mouse button
	if(distance <= 2){
		// Stop the timer since the player has found the bomb...
		gameManager.GetComponent.<startGame>().StopTime();
		//Save the best time to the player preferences
		SaveBestTime(gameManager.GetComponent.<startGame>().GetTimeValue());
		// Show text 'Press the mouse left button in order to go show the bomb disarming plan
		goToNextSceneText.enabled = true;
		if(Input.GetMouseButtonUp(0)){
			bombDisarmingPlan = colourCodes[Random.Range(0, colourCodes.length)];
			// Save the code in the player preferences...
			PlayerPrefs.SetString("BDPCODE", bombDisarmingPlan);
			showBDP = true;
		}
		
	}else if (distance > 2 && distance <= 4){
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
		GUI.Label (Rect (Screen.width/2-50, Screen.height/2-25, 200, 50), bombDisarmingPlan + " " + timer.ToString("0"), centeredStyle);
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