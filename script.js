// ---  Animate Box on Button Click ---
const box = document.getElementById('progress-box');
const animateBoxBtn = document.getElementById('animateBoxBtn');

animateBoxBtn.addEventListener('click', () => {
  box.classList.add('animated');
  setTimeout(() => box.classList.remove('animated'), 1000);
});

// ---Card Flip (Reusable Function) ---
const flipCard = document.getElementById('flipCard');
const flipBtn = document.getElementById('flipBtn');

function toggleFlip(element) {
  element.classList.toggle('flipped');
  return element.classList.contains('flipped');
}

flipBtn.addEventListener('click', () => {
 toggleFlip(flipCard);
});

// --- Loader Animation (Start/Stop) ---
const loader = document.getElementById('loader');
const toggleLoaderBtn = document.getElementById('toggleLoaderBtn');

let loading = false; 

function setLoading() {
  loader.classList.toggle('active', loading=true);
  return loading;
}

toggleLoaderBtn.addEventListener('click', () => setLoading());

// ---Modal Popup  ---
const modal = document.getElementById('modal');
const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');

function toggleModal(show = true) {
  modal.classList.toggle('active', show);
  return show;
}

openModalBtn.addEventListener('click', () => toggleModal(true));
closeModalBtn.addEventListener('click', () => toggleModal(false));
//Disabling the popup when user clicks outside other  parts of the page
window.addEventListener('click', (e) => {
  if (e.target === modal) toggleModal(false);
});
