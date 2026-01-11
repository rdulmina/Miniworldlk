$('#drop ul li a').click(function(){
     var cat=$(this).attr('name');
        $.ajax({
            type:'post',
            url:'../../php/setcategory.php',
            data:{cat:cat},
            success:function(data){
                window.location.replace("../../pages/services/main.php");
            }
        });
});

$('.footer_services ul li a').click(function(){
     var cat=$(this).attr('name');
        $.ajax({
            type:'post',
            url:'../../php/setcategory.php',
            data:{cat:cat},
            success:function(data){
                window.location.replace("../../pages/services/main.php");
            }
        });
});