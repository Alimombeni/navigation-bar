const toggleEl = document.getElementById('toggle');
toggleEl.addEventListener('click' , ()=>{
    toggleEl.parentNode.classList.toggle('active');
})