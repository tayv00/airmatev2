jQuery('.carousel-main').flickity({
    contain: true,
    pageDots: false,
    prevNextButtons: false,
  });
  jQuery('.carousel-main').on( 'settle.flickity', function() {
    newTarg = jQuery(".carousel-cell.flex-video").not('.is-selected');
    jQuery(newTarg).find('iframe').each(function() { 
          var src= $(this).attr('src');
          $(this).attr('src',src);  
  });
    console.log('slide changes');
    
  });