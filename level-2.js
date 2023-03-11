const countElement = document.getElementById('count');
let count = parseInt(localStorage.getItem('count')) || 0;
countElement.textContent = count;


const incrementButton = document.getElementById('increment');
incrementButton.addEventListener('click', () => {
  count++;
  countElement.textContent = count;

  localStorage.setItem('count', count);
});
window.onload = () =>{
  
}