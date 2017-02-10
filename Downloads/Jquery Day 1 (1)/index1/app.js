 // main document ready function to check if dom is loaded fully or not
  $( document ).ready(function() {

    $("#ITCourses").hide();
    $("#DMCourses").hide();
    $("#BDCourses").hide();
    $("#goBackBtn").hide();

    $("#ITCard").on('click',function(){

        $("#careers").hide("100");
        $("#ITCourses").show("100");
        $("#goBackBtn").show();

    });// end it card on click

    $("#DMCard").on('click',function(){

        $("#careers").hide("100");
        $("#DMCourses").show("100");
        $("#goBackBtn").show();

    });// end it card on click

    $("#BDCard").on('click',function(){

        $("#careers").hide("100");
        $("#BDCourses").show("100");
        $("#goBackBtn").show();

    });// end it card on click

    $("#goBackBtn").on('click',function(){

        $("#ITCourses").hide();
        $("#DMCourses").hide();
        $("#BDCourses").hide();
        $("#goBackBtn").hide();
        $("#careers").show("100");


    });// end it card on click



  });