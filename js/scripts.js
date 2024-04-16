
$(document).ready(function(){
    $('.slider').slick({
        infinite: true,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        slidesToScroll: 1
    });
  });

var acc = document.getElementsByClassName("acc-item");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    ('parrafo').classList.toggle("activo");
  });
}


$('.burguer').click(function(){
    $('.sidemenu').addClass("active");
});

$('.close').click(function(){
  $('.sidemenu').removeClass("active");
});