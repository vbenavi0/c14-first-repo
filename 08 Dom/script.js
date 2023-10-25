// document.body.innerHTML = "Dom is working with the browser";

let heading = document.getElementById('heading');

console.log(heading);

let content = document.getElementById('content');

content.innerHTML = "This paragraph is dynamically updated";

let btn = document.getElementById('btn');

btn.addEventListener('click', function(){
    alert('button has been clicked!')
} )