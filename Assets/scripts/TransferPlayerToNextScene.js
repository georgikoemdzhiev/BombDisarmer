#pragma strict
import UnityEngine.SceneManagement;
var player: Transform;
//var gameDisarmingPlan: Transform;


private var distanceAllowed = 1.5;

function Start () {

}

function Update () {
	var distance = Vector3.Distance(transform.position, player.position);
	//Debug.Log( "Player is close: " + distance.ToString());
	//Check if the player is close to the bomb and clicks the left mouse button
	if(distance <= 2 && Input.GetMouseButtonUp(0)){
		Debug.Log("Load the next leval");
		SceneManager.LoadScene ("BombDisarmingScene");
	}

}