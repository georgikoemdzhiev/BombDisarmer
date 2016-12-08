#pragma strict

public var targetListOfObjects : GameObject[];
public var bombDisarmingPlan : GameObject;

function Start () {
	
}

function Update () {

}

function GenerateRandomPlan() {
	var randomTarget = Random.Range(0,targetListOfObjects.Length);
	bombDisarmingPlan.transform.position.x = 
	targetListOfObjects[randomTarget].transform.position.x;

	bombDisarmingPlan.transform.position.z = 
	targetListOfObjects[randomTarget].transform.position.z;

	Debug.Log ("Random targer index: " + randomTarget);
}