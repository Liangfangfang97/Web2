var str="";
var resultNum="";
function showData(id){
	str += document.getElementById(id).value
	document.getElementById('result').innerHTML = str;
}
function calculate(){
	resultNum = eval(str);
	/*document.getElementById('result').innerHTML = "";*/
	str = '';
	document.getElementById("result").innerHTML = resultNum;
	str = resultNum; 
}
function clearData(){
	str = '';
	document.getElementById("result").innerHTML = 0;
}
