

$("#target").on( "click",  function( event ) {
    $(event.delegateTarget ).css( "color", "red");
  });