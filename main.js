$(document).ready(function(){
  $.ajax({
    method: 'GET',
    url: "https://api.github.com/users/matthiasak" ,
    dataType: 'json',
    beforeSend: function (xhr) {
            xhr.setRequestHeader ("Authorization", "Token ab636bd105bde181e16438dc60661359761751af");
          }
  }).done(function(results){
    var all_results = results;
    console.log("profile info");
    console.log(all_results);
    console.log(results.name);

    $('#name').text(results.name);
    $('#blog').text(results.blog);
    $('#location').text(results.location);
    $('#email').text(results.email);
    $('#profile_image').attr('src', results.avatar_url);
    $('html_url').text(results.html_url);
  });





  $.ajax({
    method: 'GET',
    url: "https://api.github.com/users/matthiasak/repos",
    dataType: 'json',
    beforeSend: function (xhr) {
            xhr.setRequestHeader ("Authorization", "Token ab636bd105bde181e16438dc60661359761751af");
          }
  }).done(function(results){
    console.log("repos");
    console.log(results);

    //var repo = $('<div class="row tab repos"> <div class="row"> <div class="col-xs-12 col-sm-6 blue"> <h2 id="repo_title"></h2> </div> <div class="col-xs-12 col-sm-3"> </div> <div class="col-xs-12 col-sm-3"> <ul class="sources sources2"> <li class="lightgrey">Javascript</li> <i class="fa fa-star inline lightgrey"></i> <li class="lightgrey inline">9</li> <i class="fa fa-code-fork inline lightgrey"></i> <li class="lightgrey inline"> 3</li> </ul> </div> </div> <p></p> <p class="lightgrey">Updated a day ago</p> <div class="row"> <div class="col-sm-6"></div> <div class="col-sm-5"> <div class="bar bar1"></div> <div class="bar bar2"></div> <div class="bar bar3"></div> <div class="bar bar4"></div> <div class="bar bar5"></div> <div class="bar bar6"></div> <div class="bar bar7"></div> <div class="bar bar8"></div> <div class="bar bar9"></div> </div> <div class="col-sm-1"></div> </div> </div>');

    results.forEach(function(result){
      $('#repo_title').text(result.name);



      var repo = $('<div class="row tab repos"> <div class="row"> <div class="col-xs-12 col-sm-6 blue"> <h2 id="repo_title">'+ result.name +'</h2> </div> <div class="col-xs-12 col-sm-3"> </div> <div class="col-xs-12 col-sm-3"> <ul class="sources sources2"> <li class="lightgrey">Javascript</li> <i class="fa fa-star inline lightgrey"></i> <li class="lightgrey inline">9</li> <i class="fa fa-code-fork inline lightgrey"></i> <li class="lightgrey inline"> 3</li> </ul> </div> </div> <p></p> <p class="lightgrey">Updated a day ago</p> <div class="row"> <div class="col-sm-6"></div> <div class="col-sm-5"> <div class="bar bar1"></div> <div class="bar bar2"></div> <div class="bar bar3"></div> <div class="bar bar4"></div> <div class="bar bar5"></div> <div class="bar bar6"></div> <div class="bar bar7"></div> <div class="bar bar8"></div> <div class="bar bar9"></div> </div> <div class="col-sm-1"></div> </div> </div>');
      $('.second_column').append(repo);
    });
});//DONE CALLBACK






});

//REPOS AJAX REQUEST

// });//DOCUMENT READY
