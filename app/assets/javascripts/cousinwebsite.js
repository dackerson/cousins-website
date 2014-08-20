$(document).ready(function() {

    $(document).on("click", "label.yes", function() {
        $(this).addClass("btn-success").removeClass("btn-default");
        $(this).next().addClass("btn-default").removeClass("btn-danger");
    });
    $(document).on("click", "label.no", function() {
        $(this).addClass("btn-danger").removeClass("btn-default");
        $(this).prev().addClass("btn-default").removeClass("btn-success");
    });
    
    if ($("#side-survey").length === 0) {
        $("#side-survey-btn").hide();
    }
    
    $(document).on("click", "label.label-choice-active", function() {
        $(this).removeClass("active-label label-choice-active").addClass("label-choice");
        $('#' + $(this).attr('for')).attr('checked', false);
    });
    
    $(document).on("click", ".label-choice", function() {
        $(this).addClass("active-label label-choice-active").removeClass("label-choice");
        $('#' + $(this).attr('for')).attr('checked', true);
    });
    
    $(document).on("click", ".label-choice-radio", function() {
        $(".active-label-radio").removeClass("active-label-radio").addClass("label-choice-radio");
        $(this).addClass("active-label-radio").removeClass("label-choice-radio");
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

    $(document).on("click", ".answer-details-btn-inactive", function() {
        $(".answer-details-box").fadeOut(100);
        $(".answer-details-btn-active").addClass("answer-details-btn-inactive").removeClass("answer-details-btn-active");
        $(this).next(".answer-details-box").fadeIn(200);
        $(this).addClass("answer-details-btn-active").removeClass("answer-details-btn-inactive");
    });

    $(document).on("click", ".answer-details-btn-active", function() {
        $(".answer-details-box").fadeOut(100);
        $(".answer-details-btn-active").addClass("answer-details-btn-inactive").removeClass("answer-details-btn-active");
    });
    
     $(document).on("click", ".survey-question-inactive", function() {
//         alert("test")
        $(".survey-choice-box").fadeOut(100);
        $(".survey-question-active").addClass("survey-question-inactive").removeClass("survey-question-active");
        $(this).next("div").children(".survey-choice-box").fadeIn(200);
        $(this).addClass("survey-question-active").removeClass("survey-question-inactive");
    });

    $(document).on("click", ".survey-question-active", function() {
        $(".survey-choice-box").fadeOut(100);
        $(".survey-question-active").addClass("survey-question-inactive").removeClass("survey-question-active");
    });

});
