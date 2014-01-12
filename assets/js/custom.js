/*globals jQuery, document */
(function ($) {
    "use strict";

    $(document).ready(function(){
      // Move meta tags from post body to head
      $(".contentpost__inner meta[property]").appendTo("head");
      // Remove meta tags from body
      $(".contentpost__inner meta[property]").remove();
    });

}(jQuery));
