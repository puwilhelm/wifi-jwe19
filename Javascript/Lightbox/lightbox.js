var lightboxWrpper = $('.lightbox-wrapper');

for(var i=1; i<24; i++) {

  var src=".jpg";
  if(i.toString().length == 1){
    src = "00" + i + src;
  }
  else if(i.toString().length == 2){
    src = "0" + i + src;
  }

  else{
    src = i + src;
  }
var htmlTag = '<img src="img/thumbnails/'+ src +'" class="lightbox-image" data-fullscreen="img/fullscreen/'+ src +'">';

lightboxWrpper.append(htmlTag);
}

$('.lightbox-image').click(function() {
  var currentClickedImage = $(this);
  var imageTag = '<img src="' + $currentClickedImage.attr('data-fullscreen') + '" alt="">';

  $('#MyModal .modal-body').html(imageTag);

  $('#MyModal').modal('show');
  

});

// $('#MyModal').modal('show');
