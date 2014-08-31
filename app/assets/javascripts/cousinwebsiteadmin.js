$(document).ready(function() {

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
