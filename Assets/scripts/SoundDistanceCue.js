#pragma strict

var bombDisarmingPlan: GameObject;
var gameManager: GameObject;

function Start () {

}

function Update () {
	var sqrDistance = (bombDisarmingPlan.transform.position - transform.position).sqrMagnitude;
	// increase the pitch if player is getting closser...
	
	if(sqrDistance < 15000) {
		gameManager.GetComponent.<AudioSource>().pitch = 1.0;
	}
	
	if(sqrDistance < 8000) {
		gameManager.GetComponent.<AudioSource>().pitch = 1.2;
	}
	
	if(sqrDistance < 3000) {
		gameManager.GetComponent.<AudioSource>().pitch = 1.4;
	}
	
	if(sqrDistance < 2000) {
		gameManager.GetComponent.<AudioSource>().pitch = 1.6;
	}
	
	if(sqrDistance < 1200) {
		gameManager.GetComponent.<AudioSource>().pitch = 1.8;
	}
	
	if(sqrDistance < 800) {
		gameManager.GetComponent.<AudioSource>().pitch = 2.0;
	}
	
	if(sqrDistance < 200) {
		gameManager.GetComponent.<AudioSource>().pitch = 2.2;
	}
	
	if(sqrDistance < 100) {
		gameManager.GetComponent.<AudioSource>().pitch = 2.5;
	}
	
	Debug.Log ("Distance to the BDP:  " + sqrDistance);
}