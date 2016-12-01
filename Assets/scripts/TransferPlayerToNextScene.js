#pragma strict
import UnityEngine.SceneManagement;
import UnityEngine.UI;

var player: Transform;
var goToNextSceneText: Text;
//var gameDisarmingPlan: Transform;


private var distanceAllowed = 1.5;

function Start () {
	goToNextSceneText.enabled = false;
}

function Update () {
	var distance = Vector3.Distance(transform.position, player.position);
	//Debug.Log( "Player is close: " + distance.ToString());
	//Check if the player is close to the bomb and clicks the left mouse button
	if(distance <= 2){ 
	// Show text 'Press the mouse left button in order to go to the bext scene
	goToNextSceneText.enabled = true;
		if(Input.GetMouseButtonUp(0)){
			Debug.Log("Load the next leval");
			SceneManager.LoadScene ("BombDisarmingScene");
		}
	}
}