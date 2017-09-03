// Business Logic

function User (name1, name2, fruit, hair) {
  this.name1 = name1;
  this.name2 = name2;
  this.fruit = fruit;
  this.hair = hair;
  this.animals = [];
}

// function to count/add the moral value of the path choosen
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
  // Using jquery to hide pages to be able to fade in/out text and images
  $(".secondPage, .thirdPage, .thirtyPage, .fourthPage, .fifthPage, .sixthPage, .seventhPage, .eigthPage, .ninthPage, .tenPage, .elevenPage, .twelvePage, .thirteenPage, .fourteenPage, .fifteenPage, .thirtyOnePage, .thirtyThreePage, .thirtyTwoPage, .thirtyFourPage, .thirtyFivePage").hide();
  $("body").removeClass("hide");

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
      $(".cover-page").addClass("hide");
      $(".firstPage").removeClass("hide");
    });

    $(".turn-page").click(function(){
      // will set the background based on moral count
      moralCount = parseInt($(this).attr("moral"));
      setMoral(moralCount);
      // fade out/in text and photos for 1000 millisecond
     $(".firstPage").fadeOut(1000);
     $(".secondPage").fadeIn(1000);
    });

    $(".left2").click(function() {
      moralCount = parseInt($(this).attr("moral"));
      setMoral(moralCount);
      $(".secondPage").fadeOut(1000);
      $(".thirdPage").fadeIn(1000);
    });

    $(".right2").click(function() {
      moralCount = parseInt($(this).attr("moral"));
      setMoral(moralCount);

      $(".secondPage").fadeOut(1000);
      $(".thirtyPage").fadeIn(1000);
    });

    $(".left3").click(function(){
      moralCount = parseInt($(this).attr("moral"));
      setMoral(moralCount);

      $(".thirdPage").fadeOut(1000);
      $(".fourthPage").fadeIn(1000);
    });

    $(".right3").click(function(){
      moralCount = parseInt($(this).attr("moral"));
      setMoral(moralCount);
      $(".thirdPage").fadeOut(1000);
      $(".thirtyOnePage").fadeIn(1000);
    });

    $(".turn-page2").click(function(){
      moralCount = parseInt($(this).attr("moral"));
      setMoral(moralCount);
      $(".fourthPage").fadeOut(10001000);
      $(".fifthPage").fadeIn(1000);
    });

    $(".turn-page3").click(function(){
      moralCount = parseInt($(this).attr("moral"));
      setMoral(moralCount);
      $(".fifthPage").fadeOut(1000);
      $(".sixthPage").fadeIn(1000);
    });

    $(".turn-page4").click(function(){
      moralCount = parseInt($(this).attr("moral"));
      setMoral(moralCount);
      $(".sixthPage").fadeOut(1000);
      $(".seventhPage").fadeIn(1000);
    });

    $(".turn-page5").click(function(){
      moralCount = parseInt($(this).attr("moral"));
      setMoral(moralCount);
      $(".seventhPage").fadeOut(1000);
      $(".eigthPage").fadeIn(1000);
    });

    $(".turn-page6").click(function(){
      moralCount = parseInt($(this).attr("moral"));
      setMoral(moralCount);
      $(".eigthPage").fadeOut(1000);
      $(".ninthPage").fadeIn(1000);
    });

    $(".turn-page7").click(function(){
      moralCount = parseInt($(this).attr("moral"));
      setMoral(moralCount);
      $(".tenPage").fadeOut(1000);
      $(".elevenPage").fadeIn(1000);
    });

    $(".turn-page8").click(function(){
      moralCount = parseInt($(this).attr("moral"));
      setMoral(moralCount);
      $(".elevenPage").fadeOut(1000);
      $(".twelvePage").fadeIn(1000);
    });

    $(".left9").click(function(){
      moralCount = parseInt($(this).attr("moral"));
      setMoral(moralCount);

      $(".ninthPage").fadeOut();
      $(".tenPage").fadeIn();
    });

    $(".right9").click(function(){
      moralCount = parseInt($(this).attr("moral"));
      setMoral(moralCount);

      $(".ninthPage").fadeOut(1000);
      $(".thirtyFourPage").fadeIn(1000);
    });

    $(".left31").click(function(){
      moralCount = parseInt($(this).attr("moral"));
      setMoral(moralCount);

      $(".thirtyOnePage").fadeOut(1000);
      $(".thirtyThreePage").fadeIn(1000);
    });

    $(".right31").click(function(){
      moralCount = parseInt($(this).attr("moral"));
      setMoral(moralCount);

      $(".thirtyOnePage").fadeOut(1000);
      $(".thirtyTwoPage").fadeIn(1000);
    });

    $(".left32").click(function(){
      moralCount = parseInt($(this).attr("moral"));
      setMoral(moralCount);

      $(".thirtyTwoPage").fadeOut(1000);
      $(".fifthPage").fadeIn(1000);
    });

    $(".right32").click(function(){
      moralCount = parseInt($(this).attr("moral"));
      setMoral(moralCount);

      $(".thirtyTwoPage").fadeOut(1000);
      $(".thirteenPage").fadeIn(1000);
    });

    $(".turn-page9").click(function(){
      moralCount = parseInt($(this).attr("moral"));
      setMoral(moralCount);
      $(".thirtyThreePage").fadeOut(1000);
      $(".thirtyFivePage").fadeIn(1000);
    });

    $(".left34").click(function(){
      moralCount = parseInt($(this).attr("moral"));
      setMoral(moralCount);

      $(".thirtyFourPage").fadeOut(1000);
      $(".fourteenPage").fadeIn(1000);
    });

    $(".right34").click(function(){
      moralCount = parseInt($(this).attr("moral"));
      setMoral(moralCount);

      $(".thirtyFourPage").fadeOut(1000);
      $(".fifteenPage").fadeIn(1000);
    });

    $(".loop").click(function(){
      moralCount = parseInt($(this).attr("moral"));
      moral = 0;
      setMoral(moralCount);
      $(".thirtyPage").fadeOut(1000);
      $(".firstPage").removeClass("hide").fadeIn();
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
