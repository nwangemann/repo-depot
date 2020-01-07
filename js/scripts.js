let playerIdentifier = 0
let move = "X"
let boardSpaceValue = {
  a: "",
  b: "",
  c: "",
  d: "",
  e: "",
  f: "",
  g: "",
  h: "",
  i: ""
} 

$(document).ready(function() {
  $(".click").click(function(event) {
    event.preventDefault();
    playerIdentifier ++;
    if (playerIdentifier % 2 === 0) {
      return move = "O"
    } else {
      return move = "X"
    }
    $(".click").show();
  });
});

$(document).ready(function() {
  $(".click").click(function(event) {
    event.preventDefault();
    $(this).text(move);
    $(".click").show();
  });
});

$(document).ready(function(){
  $("#0").click(function(event) {
    event.preventDefault();
    if (playerIdentifier % 2 === 0){
    return boardSpaceValue.a = "O"
    } else {
    return boardSpaceValue.a = "X"
    }
  });
});

$(document).ready(function(){
  $("#1").click(function(event) {
    event.preventDefault();
    if (playerIdentifier % 2 === 0){
    return boardSpaceValue.b = "O"
    } else {
    return boardSpaceValue.b = "X"
    }
  });
});

$(document).ready(function(){
  $("#2").click(function(event) {
    event.preventDefault();
    if (playerIdentifier % 2 === 0){
    return boardSpaceValue.c = "O"
    } else {
    return boardSpaceValue.c = "X"
    }
  });
});

$(document).ready(function(){
  $("#3").click(function(event) {
    event.preventDefault();
    if (playerIdentifier % 2 === 0){
    return boardSpaceValue.d = "O"
    } else {
    return boardSpaceValue.d = "X"
    }
  });
});

$(document).ready(function(){
  $("#4").click(function(event) {
    event.preventDefault();
    if (playerIdentifier % 2 === 0){
    return boardSpaceValue.e = "O"
    } else {
    return boardSpaceValue.e = "X"
    }
  });
});

$(document).ready(function(){
  $("#5").click(function(event) {
    event.preventDefault();
    if (playerIdentifier % 2 === 0){
    return boardSpaceValue.f = "O"
    } else {
    return boardSpaceValue.f = "X"
    }
  });
});

$(document).ready(function(){
  $("#6").click(function(event) {
    event.preventDefault();
    if (playerIdentifier % 2 === 0){
    return boardSpaceValue.g = "O"
    } else {
    return boardSpaceValue.g = "X"
    }
  });
});

$(document).ready(function(){
  $("#7").click(function(event) {
    event.preventDefault();
    if (playerIdentifier % 2 === 0){
    return boardSpaceValue.h = "O"
    } else {
    return boardSpaceValue.h = "X"
    }
  });
});

$(document).ready(function(){
  $("#8").click(function(event) {
    event.preventDefault();
    if (playerIdentifier % 2 === 0){
    return boardSpaceValue.i = "O"
    } else {
    return  boardSpaceValue.i = "X"
    }
  });
});

$(document).ready(function(){
  $(".click").click(function(event) {
    event.preventDefault();
    function evaluator (boardSpaceValue){
      if (boardSpaceValue.a === 'X' && boardSpaceValue.d === 'X' && boardSpaceValue.g === 'X' || boardSpaceValue.a === 'X' && boardSpaceValue.b === 'X' && boardSpaceValue.c === 'X' || boardSpaceValue.a === 'X' && boardSpaceValue.e === 'X' && boardSpaceValue.i === 'X' ||  boardSpaceValue.c === 'X' && boardSpaceValue.e === 'X' && boardSpaceValue.g === 'X' ||  boardSpaceValue.d === 'X' && boardSpaceValue.e === 'X' && boardSpaceValue.f === 'X' ||  boardSpaceValue.g === 'X' && boardSpaceValue.h === 'X' && boardSpaceValue.i === 'X'){
        (".title").hide();
        (".winMessage1").show(); 
      
      } else if (boardSpaceValue.a === 'O' && boardSpaceValue.d === 'O' && boardSpaceValue.g === 'O' || boardSpaceValue.a === 'O' && boardSpaceValue.b === 'O' && boardSpaceValue.c === 'O' || boardSpaceValue.a === 'O' && boardSpaceValue.e === 'O' && boardSpaceValue.i === 'O' ||  boardSpaceValue.c === 'O' && boardSpaceValue.e === 'O' && boardSpaceValue.g === 'O' ||  boardSpaceValue.d === 'O' && boardSpaceValue.e === 'O' && boardSpaceValue.f === 'O' ||  boardSpaceValue.g === 'O' && boardSpaceValue.h === 'O' && boardSpaceValue.i === 'O'){
        (".title").hide();
        (".winMessage2").show(); 
    
    }
  };
});
});