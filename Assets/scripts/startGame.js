#pragma strict
var player: Transform;
var startGameBtn: Transform;

private var generateRanPlanScript: GenerateRandomPlan;
private var playerCloseToButton = false;
private var originalButtonZvalue;
function Start () {
	originalButtonZvalue = startGameBtn.position.z;
	generateRanPlanScript = GetComponent("GenerateRandomPlan");
}

function Update () {
	
	var fwd: Vector3 = startGameBtn.TransformDirection(Vector3.forward);
	if (Physics.Raycast(player.position, fwd, 1.5)){
		//print("There is something in front of the object!");
		//Debug.Log( "Player is close to the button");
		if (Input.GetMouseButtonDown(0)) {
			Debug.Log( "Player clicked mouse left button - start the game");
			startGameBtn.position.z += 0.3;
			generateRanPlanScript.GenerateRandomPlan();
		}
		
		if (Input.GetMouseButtonUp(0)) {
		startGameBtn.position.z = originalButtonZvalue;
		}
	}
	
}

