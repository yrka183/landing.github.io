$(document).ready(function(){
$(".works__btns button,.works__btns a").on('focus',function(e){
  $(this).parents(".works__element").addClass("works__element--active");
});
$(".works__btns button,.works__btns a").on("blur",function(e){
  $(this).parents(".works__element").removeClass("works__element--active")
});

function moveProgressBar(node,nodeLine,tooltip,animationLength = 3000) {
  const progressElement = $(node);
   progressElement.each(function (value,item){
     $(item).find(nodeLine).animate({
       width: item.dataset.progressPrecent + "%"
     },animationLength);
     $(item).find(tooltip).show(animationLength);
   });
}



let animate = true;

$(window).scroll(function(){  

  if($(".skills").offset().top <= $(window).scrollTop() + 200){
    if(animate){
    moveProgressBar(".progress__element",".progress__line",".progress__tooltip");
  }
  animate = false;
  console.log(node);
}
  
 });
 $('.carousel').slick({
  lazyLoad: 'ondemand',
  slidesToShow: 5,
  slidesToScroll: 1,
  prevArrow: $('.slide__prew'),
  nextArrow: $('.slide__next'),
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
});