$(document).ready(function () {
  let $btn = $("button");
  let $lorem = $(".lorem");
  

 
  let styl = {
    padding: "10px",
    display: "none",
  };
  let style = {
    width: "100%",
    height: "50px",
    backgroundColor: "grey",
  };
  $btn.css(style);
  $lorem.css(styl);


  $(".btn").click(function () {
    let $icon = $(this).find("i");
    $icon.toggleClass("active",);
   
    $(this).next().slideToggle();
    $(".lorem").not($(this).next()).slideUp();
    
  });
});
// $(document).ready(function(){
//     $(".btn").click(function(){
//         let lorem=$(this).next();
//         $(lorem).toggleClass("lorem");
//         if($(lorem).hasClass("lorem")){
//             $(lorem).slideDown();
//         }
//         else{
//             $(lorem).slideUp();
//         }
//     });
// });
