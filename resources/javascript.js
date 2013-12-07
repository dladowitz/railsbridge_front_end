// Your Javascript will go here!

$(document).ready(function() {

  $("#copyright").click(function(){
    $(this).css('color','purple');
  });

  $("#me").hover(function(){
    $("#photo").css({'border': '5px solid blue', 'border-radius': '10px'})
  },
  function(){
      $("#photo").css('border', 'none')
    })

});
