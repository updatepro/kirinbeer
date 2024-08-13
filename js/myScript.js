$(function(){
    const loading = $(".loading")

    $(window).on('load',()=>{
        loading.remove()
    })

    // 스크롤스파이
    $('body').scrollspy({ target: '#top_navbar' });
    //animatescroll plugin 동작구문
    $(".navbar li:nth-of-type(1) a").click(function(){
        $('#top').animatescroll({scrollSpeed:2000,easing:'easeOutBounce'});
    })
    $(".navbar li:nth-of-type(2) a").click(function(){
        $('#birth').animatescroll({scrollSpeed:2000,easing:'easeOutBounce'});
    })
    $(".navbar li:nth-of-type(3) a").click(function(){
        $('#secret').animatescroll({scrollSpeed:2000,easing:'easeOutBounce'});
    })
    $(".navbar li:nth-of-type(4) a").click(function(){
        $('#products').animatescroll({scrollSpeed:2000,easing:'easeOutBounce'});
    })
    $(".navbar li:nth-of-type(5) a").click(function(){
        $('#cf').animatescroll({scrollSpeed:2000,easing:'easeOutBounce'});
    })
    $(".navbar li:nth-of-type(6) a").click(function(){
        $('#garden').animatescroll({scrollSpeed:2000,easing:'easeOutBounce'});
    })
    $(".navbar li:nth-of-type(7) a").click(function(){
        $('#contact').animatescroll({scrollSpeed:2000,easing:'easeOutBounce'});
    })

    // waypoint 동작구문 추가
    // 스크롤이 아래로 내려갈 때 동작구문
    $(".wp1").waypoint(function(direction){
        if(direction==="down"){
            $(".wp1").addClass("animate__animated animate__fadeInDown");
        }
    },{
        offset:"80%"
    })
    $(".wp2").waypoint(function(direction){
        if(direction==="down"){
            $(".wp2").addClass("animate__animated animate__fadeInUp");
        }
    },{
        offset:"75%"
    })
    $(".wp3").waypoint(function(direction){
        if(direction==="down"){
            $(".wp3").addClass("animate__animated animate__fadeInLeft");
        }
    },{
        offset:"50%"
    })
    $(".wp4").waypoint(function(direction){
        if(direction==="down"){
            $(".wp4").addClass("animate__animated animate__fadeInRight");
        }
    },{
        offset:"50%"
    })
    $(".wp5").waypoint(function(direction){
        if(direction==="down"){
            $(".wp5").addClass("animate__animated animate__fadeInDown");
        }
    },{
        offset:"50%"
    })
    $(".wp6").waypoint(function(direction){
        if(direction==="down"){
            $(".wp6").addClass("animate__animated animate__fadeInUp");
        }
    },{
        offset:"50%"
    })
    $(".wp7").waypoint(function(direction){
        if(direction==="down"){
            $(".wp7").addClass("animate__animated animate__fadeInLeft");
        }
    },{
        offset:"50%"
    })
    $(".wp8").waypoint(function(direction){
        if(direction==="down"){
            $(".wp8").addClass("animate__animated animate__fadeInRight");
        }
    },{
        offset:"50%"
    })

    //스크롤이 위로 올라갈 때 동작구문
    $(".wp1").waypoint(function(direction){
        if(direction==="up"){
            $(".wp1").removeClass("animate__animated animate__fadeInDown");
        }
    },{
        offset:"80%"
    })
    $(".wp2").waypoint(function(direction){
        if(direction==="up"){
            $(".wp2").removeClass("animate__animated animate__fadeInUp");
        }
    },{
        offset:"75%"
    })
    $(".wp3").waypoint(function(direction){
        if(direction==="up"){
            $(".wp3").removeClass("animate__animated animate__fadeInLeft");
        }
    },{
        offset:"50%"
    })
    $(".wp4").waypoint(function(direction){
        if(direction==="up"){
            $(".wp4").removeClass("animate__animated animate__fadeInRight");
        }
    },{
        offset:"50%"
    })
    $(".wp5").waypoint(function(direction){
        if(direction==="up"){
            $(".wp5").removeClass("animate__animated animate__fadeInDown");
        }
    },{
        offset:"50%"
    })
    $(".wp6").waypoint(function(direction){
        if(direction==="up"){
            $(".wp6").removeClass("animate__animated animate__fadeInUp");
        }
    },{
        offset:"50%"
    })
    $(".wp7").waypoint(function(direction){
        if(direction==="up"){
            $(".wp7").removeClass("animate__animated animate__fadeInLeft");
        }
    },{
        offset:"50%"
    })
    $(".wp8").waypoint(function(direction){
        if(direction==="up"){
            $(".wp8").removeClass("animate__animated animate__fadeInRight");
        }
    },{
        offset:"50%"
    })
    $('.wp9').waypoint(function(direction){
        if(direction==='down'){
            // alert("wp2:down");
            $('.wp9').addClass('animate__animated animate__fadeInDown');
        }
    },{
        offset:'80%'
    })
    $('.wp9').waypoint(function(direction){
        if(direction==='up'){
            // alert("wp2:up");
            $('.wp9').removeClass('animate__animated animate__fadeInDown');
        }
    },{
        offset:'80%'
    })


    $('.wp10').waypoint(function(direction){
        if(direction==='down'){
            // alert("wp5:down")
            $('.wp10').addClass('animate__animated animate__fadeIn');
        }
    },{
        offset:'70%'
    })
    $('.wp10').waypoint(function(direction){
        if(direction==='up'){
            // alert("wp5:up")
            $('.wp10').removeClass('animate__animated animate__fadeIn');
        }
    },{
        offset:'70%'
    })


     $('.wp11').waypoint(function(direction){
        if(direction==='down'){
            // alert("wp1:down");
            $('.wp11').addClass('animate__animated animate__fadeInUp');
        }
    },{
        offset:'80%'
    })
    $('.wp11').waypoint(function(direction){
        if(direction==='up'){
            // alert("wp1:up");
            $('.wp11').removeClass('animate__animated animate__fadeInUp');
        }
    },{
        offset:'80%'
    })

    $('.wp12').waypoint(function(direction){
        if(direction==='down'){
            // alert("wp2:down");
            $('.wp12').addClass('animate__animated animate__fadeInDown');
        }
    },{
        offset:'80%'
    })
    $('.wp12').waypoint(function(direction){
        if(direction==='up'){
            // alert("wp2:up");
            $('.wp12').removeClass('animate__animated animate__fadeInDown');
        }
    },{
        offset:'80%'
    })

    // wp5,6처럼
    $('.wp13').waypoint(function(direction){
        if(direction==='down'){
            // alert("wp5:down")
            $('.wp13').addClass('animate__animated animate__fadeIn');
        }
    },{
        offset:'70%'
    })
    $('.wp13').waypoint(function(direction){
        if(direction==='up'){
            // alert("wp5:up")
            $('.wp13').removeClass('animate__animated animate__fadeIn');
        }
    },{
        offset:'70%'
    })

    $('.wp14').waypoint(function(direction){
        if(direction==='down'){
            // alert("wp5:down")
            $('.wp14').addClass('animate__animated animate__fadeIn');
        }
    },{
        offset:'50%'
    })
    $('.wp14').waypoint(function(direction){
        if(direction==='up'){
            // alert("wp5:up")
            $('.wp14').removeClass('animate__animated animate__fadeIn');
        }
    },{
        offset:'50%'
    })


    // 스마트폰에서도 잘 동작하는지 확인!!=>끝!!

    $('.wp15').waypoint(function(direction){
        if(direction==='down'){
            // alert("wp5:down")
            $('.wp15').addClass('animate__animated animate__fadeIn');
        }
    },{
        offset:'80%'
    })
    $('.wp15').waypoint(function(direction){
        if(direction==='up'){
            // alert("wp5:up")
            $('.wp15').removeClass('animate__animated animate__fadeIn');
        }
    },{
        offset:'80%'
    })
    $('.wp16').waypoint(function(direction){
        if(direction==='down'){
            // alert("wp5:down")
            $('.wp16').addClass('animate__animated animate__fadeIn');
        }
    },{
        offset:'70%'
    })
    $('.wp16').waypoint(function(direction){
        if(direction==='up'){
            // alert("wp5:up")
            $('.wp16').removeClass('animate__animated animate__fadeIn');
        }
    },{
        offset:'70%'
    })
    $('.wp17').waypoint(function(direction){
        if(direction==='down'){
            // alert("wp5:down")
            $('.wp17').addClass('animate__animated animate__fadeIn');
        }
    },{
        offset:'60%'
    })
    $('.wp17').waypoint(function(direction){
        if(direction==='up'){
            // alert("wp5:up")
            $('.wp17').removeClass('animate__animated animate__fadeIn');
        }
    },{
        offset:'60%'
    })
})
