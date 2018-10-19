(function($){
$(".mui-scroll-wrapper").scroll({
bounce: false,//滚动条是否有弹力默认是true
indicators: false, //是否显示滚动条,默认是true
});

})(mui);
mui('body').on('tap','a',function(){
    window.top.location.href=this.href;
});