console.log("Sanity Check: JS is working!");

$(document).ready(function(){

  // code in here
  $.ajax({
         method: 'GET',
         url: 'http://localhost:3000/api/albums',
         success: function(data) { 
         	 data.forEach(function (album) {
         	 	var title = album.title;
         	 	var artist = album.artist;
         	 	$('#mystuff').append('<p>' + title + '</p>' + '<p>' + artist + '</p>' + '<br>');
         	 })
          },
         error: function() { console.log('uh oh') }
       });

$('h1').on("click", function (event) {
      $.ajax({
     method: 'GET',
     url: 'http://localhost:3000/api/animals',
     success: function(data) {
        data.forEach(function (thing) {
          var animal = thing.name;
          var kind = thing.type;
          var imageHref = thing.image;
          $('#mystuff').append('<br>' + '<p>' + animal + '</p>' + "which is a" + '<p>' + kind + '</p>' + '<image src=' + imageHref + '>' + '<br>');
        })
     }
})
});

});
