﻿#pragma strict

function Start () 
{

}

function Update () 
{
	if (GameObject.Find("pause").GetComponent(pause).menu == false) 
	{
		if (Input.GetKeyDown(KeyCode.H) && GameObject.Find("player1").GetComponent(characterController).lamp == 1)
			GameObject.Find("lamp1").GetComponent(Rigidbody2D).gravityScale = 1;
	}
}