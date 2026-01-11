$('#drop ul li a').click(function(){
     var cat=$(this).attr('name');
     // Store the category in localStorage instead of PHP session
     localStorage.setItem('selectedCategory', cat);
     window.location.replace("../../pages/services/main.html");
});

$('.footer_services ul li a').click(function(){
     var cat=$(this).attr('name');
     // Store the category in localStorage instead of PHP session
     localStorage.setItem('selectedCategory', cat);
     window.location.replace("../../pages/services/main.html");
});