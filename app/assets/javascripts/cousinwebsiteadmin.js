$(document).ready(function() {
    
   $(document).ajaxStart(function() {
       $('#loading-spinner').show();
   });

   $(document).ajaxComplete(function() {
       $('#loading-spinner').hide();
   });

    $(document).on("click", ".program-box, .survey-box", function() {
        $("a[href=#" + $(this).attr("target") + "]")[0].click();
        $('body,html').animate({
            scrollTop: $("#side-survey-btn").offset().top
        }, 500);
    });
    
    $(document).on("click", "#getlisted-QA", function(event) {
        $("#home").hide();
        $("#profile").show();
    });
    
    $(document).on("click", "#getlisted-GI", function(event) {
        $("#profile").hide();
         $("#home").show();
    });
//    $(document).on("click", "#getlisted-QA", function(event) {
//
//        var testEmpty = false;
//        $('.form-control').each(function(i, el) {
//            if ($.trim($(el).val()) === '') {
//                testEmpty = true;
//            }
//        });
//        if (testEmpty === true) {
//            $("#getlisted-GI")[0].click();
//            alert("Please provide missing general information");
//        }
//    });
    $(document).on("click", ".selectAll", function() {
        var elClass = $(this).attr("target");

        if ($(this).hasClass("active")) {
             $('label.' + elClass).each(function(i, el) {
                if($(el).hasClass("active")){
                    $(el).click();
                }
            });

        } else
        {        
            $('label.' + elClass).each(function(i, el) {
                if(!$(el).hasClass("active")){
                    $(el).click();
                }
            });
        }
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

    $(document).on("click", "label.label-choice-active", function() {
        $(this).removeClass("active-label label-choice-active").addClass("label-choice");
    });

    $(document).on("click", ".label-choice", function() {
        $(this).addClass("active-label label-choice-active").removeClass("label-choice");
    });

    $(document).on("click", ".label-choice-radio", function() {
        $(".active-label-radio").removeClass("active-label-radio").addClass("label-choice-radio");
        $(this).addClass("active-label-radio").removeClass("label-choice-radio");
    });

    $(document).on("click", "label.yes", function() {
        $(this).addClass("btn-success").removeClass("btn-default");
        $(this).next().addClass("btn-default").removeClass("btn-danger");
    });
    $(document).on("click", "label.no", function() {
        $(this).addClass("btn-danger").removeClass("btn-default");
        $(this).prev().addClass("btn-default").removeClass("btn-success");
    });

    $(document).on("click", "label.publish", function() {
        var id = $(this).attr('data-id');
        var elem = this;
        var res = $.ajax({
          headers: { 'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content') },
          type: 'POST',
          url: 'programs/' + id + '/toggle_published',
          dataType: 'json',
          data: { id: id },
          success: function(data){
            $(elem).addClass("btn-success").removeClass("btn-default");
            $(elem).next().addClass("btn-default").removeClass("btn-danger");
          }
        });
    });
    $(document).on("click", "label.unpublish", function() {
        var id = $(this).attr('data-id');
        var elem = this;
        var res = $.ajax({
          headers: { 'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content') },
          type: 'POST',
          url: 'programs/' + id + '/toggle_published',
          dataType: 'json',
          data: { id: id },
          success: function(data){
            $(elem).addClass("btn-danger").removeClass("btn-default");
            $(elem).prev().addClass("btn-default").removeClass("btn-success");
          }
        });
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
