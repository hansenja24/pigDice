/////BACKEND
var element1 = function(currentScore){
  var dice = Math.floor((Math.random() * 6) + 1);
      if(dice < 2) {
        var currentScore = 0;
        return currentScore;
      } else if(dice >= 2){
        currentScore += dice
        var i = 0;
        return currentScore;
      };
    };


/////FRONTEND
$(document).ready(function() {

  var total1 = 0;
  var total2 = 0;
  var index = 0;
  var result1 = 0;
  var result2 = 0;

  $("button#roll").click(function(){
    if(index === 0){
      result1 = element1(result1);
      $("ul#p1addition").append("<li>" + result1 + "</li>")
      console.log(result1)
      if(result1 === 0){
        index = 1;
      }
    }
    else if(index === 1){
      result2 = element1(result2);
      $("ul#p2addition").append("<li>" + result2 + "</li>")
      if(result2 === 0){
        index = 0;
      }
    }
  });

  $("button#pass").click(function(){
    if (index === 1) {
      index = 0;
      total2 += result2;
      $("#result2").text(total2);
      result2 = 0;
    } else if (index === 0) {
      index = 1;
      total1 += result1;
      $("#result1").text(total1);
      result1 = 0;
    }
  });






});

//function myFunction() {
//     var x = document.getElementById("demo")
//     x.innerHTML = Math.floor((Math.random() * 100) + 1);
// }
