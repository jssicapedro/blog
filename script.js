const button = document.querySelector('.icon-heart1')
button.addEventListener('click', function() {
   
    if(button.style.color = 'black'){
        button.style.color = 'red';
    } else if (button.style.color = 'red'){
        button.style.color = 'black';
    }
})