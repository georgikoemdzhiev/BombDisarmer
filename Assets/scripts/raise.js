#pragma strict

private var isPlayerCollided = null;
private var moveSpeed = 8;
private var distance = 5;
private var originalYValue = 0;

function Start () {
	originalYValue = transform.position.y;
	Debug.Log ("Original Y value: " + transform.position.y);
}

function Update () {
	
}

function OnTriggerEnter (Ent : Collider) {
    Debug.Log ("Collision detected! OnTriggerEnter");

    transform.position = Vector3.Lerp (transform.position, transform.position + Vector3(0,distance,0), moveSpeed);
}

function OnTriggerExit (Ent: Collider) {
	Debug.Log ("Collision detected! OnTriggerExit");
	//isPlayerCollided = false;
	transform.position = Vector3.Lerp (transform.position, transform.position - Vector3(0,distance,0), moveSpeed);
}
