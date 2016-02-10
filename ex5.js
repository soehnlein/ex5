$(document).ready(function() {
   console.log("ready");

//open first popout from clicking cpr test beginButton
$('#cprMap').click(function() {
  $('#cprTestPopout').show('blind');
  $('.overlay').show('fade');
});

//have close button close popouts
$('.closeButton').click(function() {
  $('.popOut').hide('fade');
  $('.overlay').hide('fade');
});

//back button
$('.backButton').click(function() {
  var parent = $(this).parent();
  parent.prev().show('slide');
  parent.hide('slide');
  $('.answerP').hide();
});

//next button
$('.nextButton, .forward').click(function(){
  var parent = $(this).parent();
  parent.next().show('slide');
  parent.hide('slide');
  $('.answerP').hide();
});

//true false buttons
$('.tfButton').click(function(){
  $('.answerP').show('fade');
});

}); //end ready
