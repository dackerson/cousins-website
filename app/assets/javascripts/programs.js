$(document).ready(function(){

  $('.publish-toggle').on('click', function(){

    var id = $(this).attr('data-id');
    var elem = this;
    var res = $.ajax({
      headers: { 'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content') },
      type: 'POST',
      url: 'programs/' + id + '/toggle_published',
      dataType: 'json',
      data: { id: id },
      success: function(data){
        $(elem).text(data.publish_button_text);
      }
    });

  });

});
