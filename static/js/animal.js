
let url = 'https://learnwebcode.github.io/json-example/animals-1.json';

$.get(url, function(res) {
  console.log(res);

  $('#name1').text(`${res[0].name}`);
  $('#name2').text(`${res[1].name}`);
  $('#name3').text(`${res[2].name}`);

  $('#species1').text(`${res[0].species}`);
  $('#species2').text(`${res[1].species}`);
  $('#species3').text(`${res[2].species}`);

  $('#likes1').html(`<span style="color:green">Likes: </span>${res[0].foods.likes[0]} <br> <span style="color:green">Likes: </span> ${res[0].foods.likes[1]} <br> <span style="color:red">Dislikes: </span> ${res[0].foods.dislikes[0]} <br> <span style="color:red">Dislikes: </span> ${res[0].foods.dislikes[1]}`);

  $('#likes2').html(`<span style="color:green">Likes: </span>${res[1].foods.likes[0]} <br> <span style="color:green">Likes: </span> ${res[1].foods.likes[1]} <br> <span style="color:red">Dislikes: </span> ${res[1].foods.dislikes[0]}`);

  $('#likes3').html(`<span style="color:green">Likes: </span>${res[2].foods.likes[0]} <br> <span style="color:red">Dislikes: </span> ${res[2].foods.dislikes[0]}`);


});
