const STORAGE_KEY = 'feedback-form-state';

const formData = { email: '', message: '' };
const form = document.querySelector('.feedback-form');
const input = form.querySelector('input[name="email"]');
const message = form.querySelector('textarea[name="message"]');

form.addEventListener('input', () => {
  const formData = new FormData(form);
  const email = formData.get('email');
  const message = formData.get('message');
  const data = { email, message };
  saveToLS('email', email);
  saveToLS('message', message);
  saveToLS(STORAGE_KEY, data);
});

window.addEventListener('DOMContentLoaded', () => {
  // const email = loadFromLS('email');
  // const message = loadFromLS('message');
  const savedData = loadFromLS(STORAGE_KEY);
  // console.log(savedData);
  if (savedData) {
    form.elements.email.value = savedData.email;
    form.elements.message.value = savedData.message;
  }
});

form.addEventListener('submit', event => {
  event.preventDefault();

  const formData = new FormData(form);
  const email = formData.get('email').trim();
  const message = formData.get('message').trim();

  if (!email || !message) {
    alert('Fill please all fields');
  } else {
    const data = { email, message };
    console.log(data);

    form.reset();
    localStorage.removeItem(STORAGE_KEY);
    // localStorage.removeItem('message');
  }
});

//===============================================================

function saveToLS(key, value) {
  const jsonData = JSON.stringify(value);
  localStorage.setItem(key, jsonData);
}

function loadFromLS(key) {
  const json = localStorage.getItem(key);
  try {
    const data = JSON.parse(json);
    return data;
  } catch {
    return json;
  }
}
