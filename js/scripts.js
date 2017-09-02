// Business Logic


function User (name1, name2, fruit, hair) {
  this.name1 = name1;
  this.name2 = name2;
  this.fruit = fruit;
  this.hair = hair;
  this.animals = [];
}


// function setMood(mood){
//   $("body").removeClass("dark-1 dark-2 dark-3 light-1 light-2 light-3 light dark").addClass(mood);
// }
// function to count/add the moral value to the body
var moralCount = 0;
var moral = 0;
function setMoral(diff){
  moral += diff
  $("body").removeClass("dark-1 dark-2 dark-3 light-1 light-2 light-3 light-0 dark-0");
  if (moral >= 0){
    $("body").addClass(`light-${moral}`);
  } else if(moral < 0){
    $("body").addClass(`dark${moral}`);
  }
}



// User Interface Logic
$(document).ready(function(){
  $("button#begin").click(function(e){
    e.preventDefault();
    $(".instructions").addClass("hide");
    $(".form-page").removeClass("hide");
  });

  $("#userInput").submit(function(e){
    e.preventDefault();
    $(".form-page").addClass("hide");
    $(".book-cover").removeClass("hide");
    var name1Input = $("#name1").val();
    var name2Input = $("#name2").val();
    var fruitInput = $("#fruit").val();
    var hairInput = $("#hair").val();
    var animalsInput = $("#animals").val().split(",");

    var newUser = new User(name1Input, name2Input, fruitInput, hairInput);
    $.each(animalsInput, function(index, animal){
      newUser.animals.push(animal);
    });

    $.each(newUser.animals, function(index, animal){
      $(".animalInput" + index).text(animal);
    });

    $(".playerOne").text(newUser.name1);
    $(".playerTwo").text(newUser.name2);
    $(".fruitInput").text(newUser.fruit);
    $(".hairInput").text(newUser.hair);


    $("button#open-book").click(function(){
      moralCount = parseInt($(this).attr("moral"));
      setMoral(moralCount);
      // moralCount = parseInt($(this).attr("moral"));
setMoral(moralCount);
      $(".cover-page").addClass("hide");
      $(".firstPage").removeClass("hide");
    });

    $(".turn-page").click(function(){
      moralCount = parseInt($(this).attr("moral"));
      setMoral(moralCount);

     $(".firstPage").addClass("hide");
     $(".secondPage").removeClass("hide");
    });

    $(".left2").click(function() {
      moralCount = parseInt($(this).attr("moral"));
      setMoral(moralCount);

      $(".secondPage").addClass("hide");
      $(".thirdPage").removeClass("hide");
    });

    $(".right2").click(function() {
      moralCount = parseInt($(this).attr("moral"));
      setMoral(moralCount);

      $(".secondPage").addClass("hide");
      $(".thirtyPage").removeClass("hide");
    });

    $(".left3").click(function(){
      moralCount = parseInt($(this).attr("moral"));
      setMoral(moralCount);

      $(".thirdPage").addClass("hide");
      $(".fourthPage").removeClass("hide");
    });

    $(".right3").click(function(){
      moralCount = parseInt($(this).attr("moral"));
      setMoral(moralCount);

      $(".thirdPage").addClass("hide");
      $(".thirtyOnePage").removeClass("hide");
    });

    $(".turn-page2").click(function(){
      moralCount = parseInt($(this).attr("moral"));
      setMoral(moralCount);
      $(".fourthPage").addClass("hide");
      $(".fifthPage").removeClass("hide");
    });

    $(".turn-page3").click(function(){
      moralCount = parseInt($(this).attr("moral"));
      setMoral(moralCount);
      $(".fifthPage").addClass("hide");
      $(".sixthPage").removeClass("hide");
    });

    $(".turn-page4").click(function(){
      moralCount = parseInt($(this).attr("moral"));
      setMoral(moralCount);
      $(".sixthPage").addClass("hide");
      $(".seventhPage").removeClass("hide");
    });

    $(".turn-page5").click(function(){
      moralCount = parseInt($(this).attr("moral"));
      setMoral(moralCount);
      $(".seventhPage").addClass("hide");
      $(".eigthPage").removeClass("hide");
    });

    $(".turn-page6").click(function(){
      moralCount = parseInt($(this).attr("moral"));
      setMoral(moralCount);
      $(".eigthPage").addClass("hide");
      $(".ninthPage").removeClass("hide");
    });

    $(".turn-page7").click(function(){
      moralCount = parseInt($(this).attr("moral"));
      setMoral(moralCount);
      $(".tenPage").addClass("hide");
      $(".elevenPage").removeClass("hide");
    });

    $(".turn-page8").click(function(){
      moralCount = parseInt($(this).attr("moral"));
      setMoral(moralCount);
      $(".elevenPage").addClass("hide");
      $(".twelvePage").removeClass("hide");
    });

    $(".left9").click(function(){
      moralCount = parseInt($(this).attr("moral"));
      setMoral(moralCount);

      $(".ninthPage").addClass("hide");
      $(".tenPage").removeClass("hide");
    });

    $(".right9").click(function(){
      moralCount = parseInt($(this).attr("moral"));
      setMoral(moralCount);

      $(".ninthPage").addClass("hide");
      $(".thirtyFourPage").removeClass("hide");
    });

    $(".left31").click(function(){
      moralCount = parseInt($(this).attr("moral"));
      setMoral(moralCount);

      $(".thirtyOnePage").addClass("hide");
      $(".thirtyThreePage").removeClass("hide");
    });

    $(".right31").click(function(){
      moralCount = parseInt($(this).attr("moral"));
      setMoral(moralCount);

      $(".thirtyOnePage").addClass("hide");
      $(".thirtyTwoPage").removeClass("hide");
    });

    $(".left32").click(function(){
      moralCount = parseInt($(this).attr("moral"));
      setMoral(moralCount);

      $(".thirtyTwoPage").addClass("hide");
      $(".fifthPage").removeClass("hide");
    });

    $(".right32").click(function(){
      moralCount = parseInt($(this).attr("moral"));
      setMoral(moralCount);

      $(".thirtyTwoPage").addClass("hide");
      $(".thirteenPage").removeClass("hide");
    });

    $(".turn-page9").click(function(){
      moralCount = parseInt($(this).attr("moral"));
      setMoral(moralCount);
      $(".thirtyThreePage").addClass("hide");
      $(".thirtyFivePage").removeClass("hide");
    });

    $(".left34").click(function(){
      moralCount = parseInt($(this).attr("moral"));
      setMoral(moralCount);

      $(".thirtyFourPage").addClass("hide");
      $(".fourteenPage").removeClass("hide");
    });

    $(".right34").click(function(){
      moralCount = parseInt($(this).attr("moral"));
      setMoral(moralCount);

      $(".thirtyFourPage").addClass("hide");
      $(".fifteenPage").removeClass("hide");
    });

    $(".loop").click(function(){
      moralCount = parseInt($(this).attr("moral"));
      moral = 0;
      setMoral(moralCount);
      $(".thirtyPage").addClass("hide");
      $(".firstPage").removeClass("hide");
    });

    $(".endHappy").click(function(){
      $("body").removeClass("dark light");
      $(".quill-pages").addClass("hide");
      $(".ending").removeClass("hide");
      $(".happy").removeClass("hide");
    });

    $(".endSad").click(function(){
      $("body").removeClass("dark light");
      $(".quill-pages").addClass("hide");
      $(".ending").removeClass("hide");
      $(".sad").removeClass("hide");
    });

    $('.reset').click(function() {
       window.location.reload(true);
    });
  });
});
