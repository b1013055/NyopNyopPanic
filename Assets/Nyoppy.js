#pragma strict
var myCube:GameObject;
function Start () 
{
}

function Update () 
{
}

function CreateNyoppy()
{

	Instantiate (myCube, Vector3(0, 30, 0), Quaternion.identity);
}

