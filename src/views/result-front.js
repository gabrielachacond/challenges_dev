function showBanner(){

    alert("Hola Mundo!");

    $(".banner").addClass("active");
    setTimeout(function(){
      $(".banner").removeClass("active");
    },2500);
    
    return false;
  }