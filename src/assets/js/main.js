$('#username').keypress( function ( e ) {
  if (e.which === 13) {
    search();
  }
});

$('#search').on('click', function (){
  search();
});

function search () {
  $.ajax({
    url:'https://api.github.com/users/watilde/starred',
    data:{
      direction: 'asc',
    }
  }).done(function (data) {
    var first_one = data.shift();
    $('#main').html(JSON.stringify(first_one, null, '\t'));
  });
}
