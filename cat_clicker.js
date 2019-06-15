
//cat1
var elem1 = document.getElementById('cat1');
var times1 = document.getElementsByClassName('cat1_times')[0].innerText;
elem1.addEventListener('click', function(){
  times1 = parseInt(times1) + 1;
  document.getElementsByClassName("cat1_times")[0].innerText=times1 + " Times Clicked";
}, false);

//cat2
var elem2 = document.getElementById('cat2');
var times2 = document.getElementsByClassName('cat2_times')[0].innerText;
elem2.addEventListener('click', function(){
  times2 = parseInt(times2) + 1;
  document.getElementsByClassName("cat2_times")[0].innerText=+ times2+" Times Clicked";
}, false);
