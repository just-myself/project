
 













































/*(()=>{
ajax("get","http://127.0.0.1/project/data/index4.php","").then(output=>{
      var  result=output.data;

      var details="";
//console.log(result); 
//       console.log(result[1]);
 for( var p of result){
	details+=`
		<li>
		<a href="#">${p.title}</a>
	  <span>${p.date}</span>
		</li>`

 }
 var pageCount=output.pageCount;
 var pageNo=output.pageNo;
      var list="";
	  for (var i=0;i<pageCount;i++ )
	  {
		  list+=(i!=pageNo?`<li>${i+1}</li>`:`<li class="current">${i+1}</li>`);
		  
		  
		 
	  }
		  var html=`
           <div class="proviouspage">上一页</div>
        <ul>${list}</ul>
             <div class="nextpage">下一页</div>
		  `;
		 
//   console.log(details);
		   document.getElementById("pages").innerHTML=html;
       document.getElementById("get1").innerHTML=details;
	   var pages=document.getElementById("pages");
	   pages.onclick=function(e){
	     var tar=e.target;
           if(tar.nodeName=="LI"){
		     
		   
		   }


	   }




	   }
)
})();
*/


	
//////////////////
