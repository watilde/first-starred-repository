$( '#username' ).keypress( function ( e ) {
  if (e.which === 13) {
    $.ajax({
      url:'https://api.github.com/users/watilde/starred',
      data:{
        direction: 'asc',
      }
    }).done(function (data) {
      var first_one = data.shift();
      console.log(first_one);
      $('#main').html(JSON.stringify(first_one, null, '\t'));
    });
  }
});
