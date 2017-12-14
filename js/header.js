(()=>{
 ajax("get","header.html","").then(
html=>{
  document.getElementById("header").innerHTML=html;


//$(document).load("js/index4jq.js");

//
//
//	
//
////  var ulskip=document.getElementsByClassName("top_menu")[0];
////  var skip=document.getElementsByClassName("skip")[0];
////
////  skip.onclick=function(){
////     var getname=document.getElementsByCalssName[0].innerHTML;
////	  var url="http://127.0.0.1/project/index4.html?getname="+getname;
////	  location=url;
////	 }
//
//
//  
  return new Promise(resolve=>resolve())
 }).then(()=>{
       var id1=document.getElementById("id1");
	   var li=id1.getElementsByTagName("li");
	   var a=id1.getElementsByTagName("a");
	   console.log(a);
	for(let i=0;i<a.length;i++){     
		a[i].onclick=()=>{
          console.log(i);


			}
			}
  });
})();
 

//
