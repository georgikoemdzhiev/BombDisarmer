#pragma strict

var bombDisarmingPlan: GameObject;
var gameManager: GameObject;

function Start () {

}

function Update () {
	var sqrDistance = (bombDisarmingPlan.transform.position - transform.position).sqrMagnitude;
	Debug.Log ("Distance to the BDP" + sqrDistance);
}