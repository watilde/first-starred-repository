if (window.location.hash.length > 0) {
  var username = window.location.hash.substr(1);
  $('#main').fadeOut('fast',search(username));
}
$('#username').keypress( function (e) {
  var username = $('#username').val();
  window.location.hash = username;
  username = encodeURIComponent(username);
  if (e.which === 13) {
    $('#main').fadeOut('fast',search(username));
  }
});

$('#search').on('click', function (){
  var username = $('#username').val();
  window.location.hash = username;
  username = encodeURIComponent(username);
  $('#main').fadeOut('fast',search(username));
});

function search (username) {
  $.ajax({
    url:'https://api.github.com/users/' + username + '/starred',
    data:{
      direction: 'asc'
    }
  }).done(function (data) {
      var a = data.shift();
      var o = a.owner;
      $('#avatar_url').attr('src', o.avatar_url);
      $('#name').text(a.name);
      $('#login').text('@' + o.login);
      $('#description').text(a.description);
      $('#stargazers_count').text(a.stargazers_count);
      $('#owner').attr('href', o.html_url);
      $('.owner_url').attr('href', o.html_url);
      $('.html_url').attr('href', a.html_url);
      $('#follow').attr('src', 'http://ghbtns.com/github-btn.html?user=' +
        o.login+ '&type=follow');
      $('#fork').attr('src', 'http://ghbtns.com/github-btn.html?user=' +
        o.login + '&repo=' + a.name + '&type=fork&count=true');
      $('#main').fadeIn('slow');

      $('#share').attr('href', 'https://twitter.com/intent/tweet?url=' + encodeURIComponent(window.location.href) +
        '&amp;text=I+found+my+%23FirstStarredRepository%3A+' +
        encodeURIComponent(a.html_url) + '.+What+was+yours%3F');
    });
}
