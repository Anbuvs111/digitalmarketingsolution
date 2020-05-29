$(document).ready(function(){
  $("#mobile-nav").click(function(){
    $("#nav-list").toggleClass("nav-bar");
    $(this).toggleClass("collapsed")
  });
});