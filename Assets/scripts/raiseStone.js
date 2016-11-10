#pragma strict

private var isPlayerCollided = null;
private var distance = 8;
private var originalYValue = 0;

function Start () {
	originalYValue = transform.position.y;
	Debug.Log ("Original Y value: " + transform.position.y);
}

function Update () {
	if(isPlayerCollided != null){
		if(isPlayerCollided && transform.position.y < 20){
			transform.position.y += 8 * Time.deltaTime;
			Debug.Log ("Y: " + transform.position.y);
		}

		if(!isPlayerCollided && transform.position.y > originalYValue){
			transform.position.y -= 8 * Time.deltaTime;
		}

	}
}

function OnTriggerStay (Ent : Collider) {
    Debug.Log ("Collision detected! OnTriggerEnter");
    isPlayerCollided = true;
}

function OnTriggerExit (Ent: Collider) {
	Debug.Log ("Collision detected! OnTriggerExit");
	isPlayerCollided = false;
}
