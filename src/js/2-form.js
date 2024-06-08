const STORAGE_KEY = 'feedback-form-state';

const formData = { email: '', message: '' };
const form = document.querySelector('.feedback-form');
const input = document.querySelector('email');
const message = document.querySelector('textarea');

form.addEventListener('input', () => {
  const formData = new FormData(form);
  const email = formData.get('email');
  const message = formData.get('message');
  saveToLS('email', email);
  saveToLS('message', message);
});

window.addEventListener('DOMContentLoaded', () => {
  const email = loadFromLS('email');
  const message = loadFromLS('message');
  form.elements.email.value = email;
  form.elements.message.value = message;
});

form.addEventListener('submit', event => {
  event.preventDefault();

  const formData = new FormData(form);
  const email = formData.get('email');
  const message = formData.get('message');

  if (!email || !message) {
    alert('Fill please all fields');
  } else {
    const data = { email, message };
    console.log(data);

    form.reset();
    localStorage.removeItem('email');
    localStorage.removeItem('message');
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
