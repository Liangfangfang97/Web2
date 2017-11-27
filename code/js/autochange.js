window.onload=function()
{
	var scroll=document.getElementById("picScroll");
	var scroll1=document.getElementById("picScroll1");
	var scroll2=document.getElementById("picScroll2");
	var m=10;
	var ID=setInterval(changeToLeft,m);
	function changeToLeft(){
		if (scroll.scrollLeft>=scroll1.offsetWidth) {
			scroll.scrollLeft=0;
		}
		else{
			scroll.scrollLeft+=1;
		}	
	}
	scroll.onmouseover=function(){
		clearInterval(ID);
	}
	scroll.onmouseout=function(){
		ID=setInterval(changeToLeft,m);
	}
}