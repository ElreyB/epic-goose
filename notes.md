
*****DEFINITE FONTS*******

Super Fairytale Font(First letter):
<link href="https://fonts.googleapis.com/css?family=Cabin+Sketch|Cinzel+Decorative|Fondamento|Montez|Princess+Sofia|Tangerine|UnifrakturMaguntia" rel="stylesheet">
font-family: 'UnifrakturMaguntia', cursive;

Goblin Font:
<link href="https://fonts.googleapis.com/css?family=Over+the+Rainbow" rel="stylesheet">
font-family: 'Over the Rainbow', cursive;

Whimsical Dark Font:
<link href="https://fonts.googleapis.com/css?family=Cabin+Sketch|Cinzel+Decorative|Fondamento|Griffy|Montez|Princess+Sofia|Spirax|Tangerine|UnifrakturMaguntia" rel="stylesheet">
font-family: 'Griffy', cursive;

Whimsical Font:
<link href="https://fonts.googleapis.com/css?family=Fondamento|Montez|Princess+Sofia|Tangerine" rel="stylesheet">
font-family: 'Princess Sofia', cursive;

Body Font:
<link href="https://fonts.googleapis.com/css?family=Fondamento|Montez|Tangerine" rel="stylesheet">
font-family: 'Fondamento', cursive;

*****BACKUP FONTS*****

Intro font:
<link href="https://fonts.googleapis.com/css?family=Tangerine" rel="stylesheet">
font-family: 'Tangerine', cursive;

Scary Font:
<link href="https://fonts.googleapis.com/css?family=Montez|Tangerine" rel="stylesheet">
font-family: 'Montez', cursive;

Twig Font:
<link href="https://fonts.googleapis.com/css?family=Cabin+Sketch|Fondamento|Montez|Princess+Sofia|Tangerine" rel="stylesheet">
font-family: 'Cabin Sketch', cursive;

Ending Font:
<link href="https://fonts.googleapis.com/css?family=Cabin+Sketch|Cinzel+Decorative|Fondamento|Montez|Princess+Sofia|Tangerine" rel="stylesheet">
font-family: 'Cinzel Decorative', cursive;

Other Whimsical Font:
<link href="https://fonts.googleapis.com/css?family=Cabin+Sketch|Cinzel+Decorative|Fondamento|Montez|Princess+Sofia|Spirax|Tangerine|UnifrakturMaguntia" rel="stylesheet">
font-family: 'Spirax', cursive;




Light to Dark HEX Colors:
#DDC994
#D2B569
#C1895A
#8D5449
#3C2736

Light to Dark HEX Colors (green theme):
#807269
#DED1A9
#ABB38F
#809179
#618070

Light to Dark HEX Colors (blue/orange theme)
#D6951C
#8A9584
#C4BFA2
#173337
#B8391F


Jquery Effects:

http://api.jquery.com/animate/  animation docs

.fadeIn() for opening page
$('#element').animate({width: 'toggle'}); to slide sideways

color change:
<style>
    .toggler { width: 500px; height: 200px; position: relative; }
    #button { padding: .5em 1em; text-decoration: none; }
    #effect { width: 240px; height: 170px; padding: 0.4em; position: relative; background: #fff; }
    #effect h3 { margin: 0; padding: 0.4em; text-align: center; }
</style>
<script>
 $( function() {
   var state = true;
   $( "#button" ).on( "click", function() {
     if ( state ) {
       $( "#effect" ).animate({
         backgroundColor: "#aa0000",
         color: "#fff",
         width: 500
       }, 1000 );
     } else {
       $( "#effect" ).animate({
         backgroundColor: "#fff",
         color: "#000",
         width: 240
       }, 1000 );
     }
     state = !state;
   });
 } );
 </script>
++++++++++++++++++++++++++++
https://api.jqueryui.com/color-animation/
 <style>
#elem {
  color: #006;
  background-color: #aaa;
  font-size: 25px;
  padding: 1em;
  text-align: center;
}
</style>
<script>
$( "#toggle" ).click(function() {
$( "#elem" ).animate({
  color: "green",
  backgroundColor: "rgb( 20, 20, 20 )"
});
});
</script>


lightening effect
https://codepen.io/Chrislion_me/pen/rVqwbO

fun with lightening
https://codepen.io/akm2/pen/Aatbf

sparkley
https://codepen.io/simeydotme/pen/jgcvi
