#pragma strict

public var targetListOfObjects : GameObject[];
public var bombDisarmingPlan : GameObject;

function Start () {
	
}

function Update () {

}

/**
* Method to generate a random positon of the bomb disarming plan
*/
function GenerateRandomPlan() {
	var randomTarget = Random.Range(0,targetListOfObjects.Length);
	bombDisarmingPlan.transform.position.x = 
	targetListOfObjects[randomTarget].transform.position.x;

	bombDisarmingPlan.transform.position.z = 
	targetListOfObjects[randomTarget].transform.position.z;

	Debug.Log ("Random targer index: " + randomTarget);
}