$(()=>{
function pageLoad(b=1,pno=0){


$.ajax({
		  url:"data/index3.php",
		  type:"get",
		  data:{"sub_id":b,"pno":pno},
		  success:function(data){
		  var count=data.data;
         var html="";
  for(var p of count){
     html+=`
		<li>
		<a href="#">${p.title}</a>
	  <span>${p.date}</span>
		</li>`
      }
document.getElementById("get1").innerHTML=html;
var pageCount=data.pageCount;
var pageNo=data.pageNo;
var list="";
for(var i=0;i<pageCount;i++){
list+=(i!=pageNo-1?`<li>${i+1}</li>`:`<li class='active'>${i+1}</li>`); 
}
var html=`<ul>
<li class="proviouspage">上一页</li>	
${list}
<li class="nextpage">下一页</li>
</ul>
`
var divPages=document.getElementById("pages");
divPages.innerHTML=html;
divPages.onclick=function(e){
		e.preventDefault();
		 var btn=e.target;
	if(btn.innerHTML=='上一页'){
		if(pageNo!=1) pageLoad(b,pageNo-2);
                 } 
    else if(btn.innerHTML=='下一页'){
		if(pageNo!=pageCount) pageLoad(b,parseInt(pageNo));
	                 }
	else  pageLoad(b,btn.innerHTML-1);
	}}
})
};  pageLoad();
//////////////////
function getdata(){
$(".new").on("click","li",function(e){
        e.preventDefault();
		var $btn=$(this);
$btn.parents("#lf").next().children(".top").children().last("a").html($btn.html());
$btn.parents("#lf").next().find(".title").html($btn.html());
         b=parseInt($btn.index())+1;
              pageLoad(b);
j
 });}; getdata();
/////////

});	

