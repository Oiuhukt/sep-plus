function appendCSS(url) {
  var head = document.head;
  var link = document.createElement('link');
  link.type = 'text/css';
  link.rel = 'stylesheet';
  link.href = url;
  head.appendChild(link);
}

$(function () {
  var nav = $('#article-nav').find('ul');
  $('#article-nav').find('li')[0].remove();
  $("a:contains('Bibliography')")[0].remove();
  $("a:contains('Academic Tools')")[0].remove();
  $('#toc').find('li').prependTo(nav);
  $('input[type=search]').attr('placeholder', 'Type / to search SEP');
  if (
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
  ) {
    // swap logo for dark mode
    $('#site-logo').find('img').attr('src', 'https://i.imgur.com/eRpN6wC.png');
  }
});

$(document).keyup(function (e) {
  switch (e.which) {
    case 191:
      $('input[type=search]')[0].focus();
      break;
    case 27:
      $('input[type=search]')[0].blur();
      break;
  }
});

appendCSS(
  'https://fonts.googleapis.com/css2?family=Newsreader:ital,wght@0,400;0,700;1,400;1,700&display=swap'
);

appendCSS(
  'https://fonts.googleapis.com/css2?family=Inter:wght@300;500&display=swap'
);
