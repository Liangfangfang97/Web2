var arr = new Array("非常满意","满意","一般","差","很差");
var con="false";
var arr1=document.getElementsByTagName("img");
function starPic(id) {
	document.getElementById("content").value=arr[5-id];
	if(id<=2)
	{
		for(var i=0;i<id;i++)
		{
			arr1[i].src="images/star1.png";
		}
	}
	else
	{
		for(var j=0;j<id;j++)
		{
			arr1[j].src="images/star2.png";
		}
	}	
}
function hide(id){
	if(con=="ture")
	{
		return 0;
	}
	else //if(con=="false")
	{
		for( var i=0;i<id;i++)
		{
			arr1[i].src="images/star0.png";
		}
	}
	document.getElementById("content").value="";
}
function qd(id){
	con="true";
	for(var i=0;i<id;i++)
	{
		arr1[i].src="images/star2.png";
	}
}
