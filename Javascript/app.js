const btn = document.getElementById('nav-btn');
const list = document.querySelector('.list');

btn.addEventListener('click', function(){
    if (list.style.display == 'block'){
        list.style.display = 'none';
    }
    else {
        list.style.display = 'block';
    }
})