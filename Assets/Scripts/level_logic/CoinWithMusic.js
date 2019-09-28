﻿#pragma strict

private var mutex : boolean = true;

function Start () 
{
	
}
	
function Update () 
{

}
	
function OnTriggerEnter2D (col:Collider2D) 
{
	if (col.gameObject.tag == "Player" && mutex) 
	{  
		mutex = false;
		GetComponent(AudioSource).Play();
		yield  WaitForSeconds(GetComponent(AudioSource).clip.length);
		Destroy(gameObject);
	}
}