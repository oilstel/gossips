$(function() {

  $.ajax({
    url: 'https://api.github.com/repos/oilstel/gossips/commits?path=_data&page=1&per_page=1',
    dataType: 'json',
    type: 'get',
    cache: true,
    success: function(data) {

      var commitRaw = data;
      var commitMessage = data.commit;
      // var keys = randomBook.description_html;
      // var image = randomBook.image.thumb.url;

      $.each(commitRaw, function(index, c) {
          var message = c.commit.message;

          $(".interview").append('<p><i>' + message + '</i></p>');
      });

      console.log(commitRaw);
      console.log(commitMessage);

      // $(".arena-recs").append('<div class="book"><img id="large" src="' + image + '" /><span class="hover"><img id="small" src="' + image + '" /><label>' + keys + '</label></span></div>');

      // function addBook() {
      //
      //   var randomBook = arenaBooks[Math.floor(Math.random()*arenaBooks.length)];
      //   var keys = randomBook.description_html;
      //   var image = randomBook.image.thumb.url;
      //
      //   $(".arena-recs").append('<div class="book"><img id="large" src="' + image + '" /><span class="hover"><img id="small" src="' + image + '" /><label>' + keys + '</label></span></div>');
      // }
      //
      // $(".arena-recs").click(function () {
      //   removeBook();
      //   addBook();
      // });


    }


    });

  });
