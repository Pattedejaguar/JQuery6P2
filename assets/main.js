$(document).ready(function (){
  $(".color").hover(function (){
  var colorName = $(this).attr('class').split (' ') [1];
  $("#text").css("color", colorName);
});
$(".color").mouseleave(function (){
    $("#text").css("color", 'black');
  });

});
