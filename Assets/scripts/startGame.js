#pragma strict
var player: Transform;
var startGameBtn: Transform;
var pressingButtonSound: AudioSource;

private var generateRanPlanScript: GenerateRandomPlanLocation;
private var playerCloseToButton = false;
private var originalButtonZvalue;
private var distanceAllowed = 1.7;
private var isGameStarted: boolean = false;
private var timer: float = 40.0;
private var audioCue: AudioSource;

function Start () {
	originalButtonZvalue = startGameBtn.position.z;
	generateRanPlanScript = GetComponent("GenerateRandomPlanLocation");
	audioCue = GetComponent.<AudioSource>();
	//PlayerPrefs.DeleteAll();
}

function Update () {
	
	var fwd: Vector3 = startGameBtn.TransformDirection(Vector3.forward);
	if (Physics.Raycast(player.position, fwd, distanceAllowed)){
		//Debug.Log( "Player is close to the button");
		if (Input.GetMouseButtonDown(0)) {
			Debug.Log( "Player clicked mouse left button - start the game");
			startGameBtn.position.z += 0.3;
			// play pressing button sound...
			pressingButtonSound.Play();
			if(!isGameStarted)
			generateRanPlanScript.GenerateRandomPlan();
			//play the sound cue sound
			audioCue.PlayDelayed(1);
			
			isGameStarted = true;
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
				SceneManager.LoadScene ("BombSearchScene");
			}
		}
	
}

function OnGUI() {
	GUI.Box(new Rect(10,10,50,20), "" + timer.ToString("0"));
	
	GUI.Box(new Rect(Screen.width - 210,10,200,20), "Best time: " + (Mathf.Round(PlayerPrefs.GetFloat("BESTTIME"))));
}

function GetTimeValue() {
	return timer;
}

function StopTime() {
	isGameStarted = false;
}

function StartTime() {
	isGameStarted = true;
}

 

