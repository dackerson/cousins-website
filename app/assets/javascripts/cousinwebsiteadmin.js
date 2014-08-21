$(document).ready(function() {

    $(document).on("click", "label.publish", function() {
        $(this).addClass("btn-success").removeClass("btn-default");
        $(this).next().addClass("btn-default").removeClass("btn-danger");
    });
    $(document).on("click", "label.unpublish", function() {
        $(this).addClass("btn-danger").removeClass("btn-default");
        $(this).prev().addClass("btn-default").removeClass("btn-success");
    });
    
//  
    $(document).on("click", ".side-survey-btn-inactive", function() {
        $("#side-survey").show("fadeIn");
        $(this).addClass("side-survey-btn-active").removeClass("side-survey-btn-inactive");
    });

    $(document).on("click", ".side-survey-btn-active", function() {
        $("#side-survey").hide("fadeOut");
        $(this).addClass("side-survey-btn-inactive").removeClass("side-survey-btn-active");
    });


});
