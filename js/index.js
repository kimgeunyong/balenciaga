$("document").ready(function(){

    AOS.init()

    $(".header .header-list .etc .ham").click(function(){
        $(".header .header-list .etc .ham").toggleClass("on")
        $(".header .etc-menu").toggleClass("on")
    })

    $(".content .collection .shoes i:nth-child(3)").click(function(){
        $(".content .collection .shoes .shoes-box").addClass("on")
    })
    $(".content .collection .shoes i:nth-child(1)").click(function(){
        $(".content .collection .shoes .shoes-box").removeClass("on")
    })

    

})