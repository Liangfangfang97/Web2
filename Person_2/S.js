
window.onload =function() {
	var liNodes = document.getElementsByTagName("li");						
	for(var i=0; i<liNodes.length; ++i) {						
		liNodes[i].onmouseover = function() {
			//鼠标经过时设置类名
			this.className = "sfhover";
		};//onmouseover()							
		liNodes[i].onmouseout = function() {
			//鼠标移开时取消类名
			this.className = "";
		}; //onmouseout					
	};
	var scroll=document.getElementById("content_buttom");
	var scroll1=document.getElementById("content_buttom_1");
	var scroll2=document.getElementById("content_buttom_2")
	var m=10;
	var ID=setInterval(changeToLeft,m);
	function changeToLeft(){
		if (scroll.scrollLeft>=scroll1.offsetWidth) {
			scroll.scrollLeft=0;
		}
		else{
			scroll.scrollLeft+=1;
		};	
	};
	scroll.onmouseover=function(){
		clearInterval(ID);
	};
	scroll.onmouseout=function(){
		ID=setInterval(changeToLeft,m);
	};		
} 
$(document).ready(function(){			
	$('input[name="username"]').blur(function(){
		var span=document.getElementsByClassName('a');
		var $sp=$(span[0]);
		if($('input[name="username"]').val()=='')
			{	
				if(span.length==0)
				{	
					$('input[name="username"]').after('<span style="color:red;" class="a">×</span>');
				};					
			}
		else
		{
			$sp.remove();
		};
	});
	$('input[name="password"]').blur(function(){
		var pws=document.getElementsByClassName('b');
		var $pws=$(pws[0]);
		if($('input[name="password"]').val()=='')
		{
			if(pws.length==0)
			{
				$('input[name="password"]').after('<span style="color:red;" class="b">×</span>');
			};
		}
		else
		{
			$pws.remove();
		};
	});
});
