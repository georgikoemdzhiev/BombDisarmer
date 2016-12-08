#pragma strict

var PressButtonText: Text;
var gameDisarmingInterface: Image;

function Start () {
//	ObjDisable();
}

function Update () {
	if (Input.GetKeyDown ("o")){
		print ("space key was pressed");
		PressButtonText.enabled = false;
		gameDisarmingInterface.gameObject.active = true;
	}
        
}

function OnTriggerEnter() {
	PressButtonText.enabled = true;
	Debug.Log("OnTriggerEnter");
}

function OnTriggerExit() {
	PressButtonText.enabled = false;
	Debug.Log("OnTriggerExit");
}
