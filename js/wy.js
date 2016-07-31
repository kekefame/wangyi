$(function(){
    $("#fullpage").fullpage({
        navigation:true,
        css:true,
        navigationTooltips:['首页','视觉','交互','皮肤','功能','待办邮件','联系人邮件','科技','连接易信','马上体验'],
        anchors:['Page1', 'Page2','page3','page4','page5','page6','page7','page8','page9','page10'],
        // afterLoad:function(anchorLink,index){
        //      $(this).addClass("actives");
        // },
        // onLeave: function(index, nextIndex, direction){
        //     $(this).removeClass('actives');
        // }
        

    });
});