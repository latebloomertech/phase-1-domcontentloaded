const init = () => {
 const para =  document.getElementById('text')
 para.textContent = 'This is really cool!';
 para.style.color = 'red';
}

document.addEventListener('DOMContentLoaded', init)