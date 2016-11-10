#pragma strict

private var moveSpeed = 8;
private var distance = 5;

function Start () {

}

function Update () {
	
}

function OnTriggerEnter (Ent : Collider) {
    Debug.Log ("Collision detected! OnTriggerEnter");
    // Move the object up when the player enters the target collider 
    transform.position = Vector3.Lerp (transform.position, transform.position + Vector3(0,distance,0), moveSpeed);
}

function OnTriggerExit (Ent: Collider) {
	Debug.Log ("Collision detected! OnTriggerExit");
	// Move the object down when the player exits the target collider
	transform.position = Vector3.Lerp (transform.position, transform.position - Vector3(0,distance,0), moveSpeed);
}
