﻿#pragma strict
var player: Transform;
var startGameBtn: Transform;
 
private var generateRanPlanScript: GenerateRandomPlan;
private var playerCloseToButton = false;
private var originalButtonZvalue;
private var distanceAllowed = 1.7;
private var isGameStarted: boolean = false;
private var timer: float = 10.0;

function Start () {
	originalButtonZvalue = startGameBtn.position.z;
	generateRanPlanScript = GetComponent("GenerateRandomPlan");
}

function Update () {
	
	var fwd: Vector3 = startGameBtn.TransformDirection(Vector3.forward);
	if (Physics.Raycast(player.position, fwd, distanceAllowed)){
		//Debug.Log( "Player is close to the button");
		if (Input.GetMouseButtonDown(0)) {
			Debug.Log( "Player clicked mouse left button - start the game");
			isGameStarted = true;
			startGameBtn.position.z += 0.3;
			generateRanPlanScript.GenerateRandomPlan();
		}
		// if the left mouse buttin is not being pressed => revert the startGame button to its original position
		if (Input.GetMouseButtonUp(0)) {
			startGameBtn.position.z = originalButtonZvalue;
		}
		
	}
	
		if(isGameStarted) {
			timer -= Time.deltaTime;
			if(timer <= 0){
				//Game Over
				timer = 0;
				isGameStarted = false;
			}
		}
	
}

function OnGUI() {
	GUI.Box(new Rect(10,10,50,20), "" + timer.ToString("0"));
}

 

