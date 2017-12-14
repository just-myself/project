if(typeof jQuery!=="function"){
    throw new Error("先引入jQuery");
}
(()=>{
    $.ajax({
        type:"GET",
        url:"data/getbanner.php"
    }).then(data=>{
        console.log(data);
        var html="";
        for(var p of data){
            html+=` <img data-i="+(i+1)+" src="${p.pic}" alt="">`
        }
        html+="<ul id='carsel'>"
           for(var i=0;i<data.length;i++){
               html+=`<li>${i+1}</li>`
           }
        html+="</ul>";
        html+=`<div class="ctrl-slider prev_pic"></div>
        <div class="ctrl-slider next_pic"></div>`;
       $("#slider").html(html);
    }).then(()=>{
        $imgList=$("#slider img");
        $liList=$("#carsel li");
        $imgList[0].className="active";
        $liList[0].className="active";
        var index=0,interval=2000;
        var timer=null;
        function tran(){
            $imgList.eq(index).addClass("active")
                .siblings()
                .removeClass("active");
            $liList.eq(index).addClass("active")
                .siblings()
                .removeClass("active");
        }
        function lunbo(){
            index++;
            (index==4)&&(index=0);
           tran();
        }
        timer=setInterval(lunbo,interval);
        $liList.mouseover(function(){
            clearInterval(timer);
            timer=null;
            index=$(this).html()-1;
            tran();
        });
        $liList.mouseout(function(){
            timer=setInterval(lunbo,interval);
        })
        $imgList.hover(
            function(){
                clearInterval(timer);
                timer=null;
            },
            function(){
                timer=setInterval(lunbo,interval);
            }
        );
        $("div.ctrl-slider").hover(
            function(){
                clearInterval(timer);
                timer=null;
            },
            function(){
                timer=setInterval(lunbo,interval);
            }
        )
        $("div.prev_pic").click(function(){
            (index==0)&&(index=4);
            if(index>0){
                index--;
                tran();
            }
        });
        $("div.next_pic").click(function(){
            index++;
            (index>3)&&(index=0);
            console.log(index);
            if(index<=3){
                tran();
            }
        })
    })
})();