//= require_tree .
!function ($) {
  // Handler for .ready() called
  $(function(){
    //initialization for magnificPopup
    $('.video-clips1').magnificPopup({
      items: [
        {
          src: 'http://www.youtube.com/watch?v=cvNG1UJTMd4',
          type: 'iframe'
        }
      ],
      gallery: {
        enabled: true
      },
      type: 'image'
    });
	});
}(window.jQuery);