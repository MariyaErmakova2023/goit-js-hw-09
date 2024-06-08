const formData = { email: '', message: '' };
const formRefs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('input[type="text"]'),
  message: document.querySelector('textarea'),
};

// 3. Відновлюємо дані з локального сховища, якщо є
const savedData = localStorage.getItem('feedback-form-state');
if (savedData) {
  const parsedData = JSON.parse(savedData);
  formData.email = parsedData.email || '';
  formData.message = parsedData.message || '';
  emailInput.value = formData.email;
  messageInput.value = formData.message;
}

// 4. Функція для збереження даних у локальне сховище
const saveToLocalStorage = () => {
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};

// 5. Делегування події input для збереження даних
form.addEventListener('input', event => {
  if (event.target.name === 'email') {
    formData.email = event.target.value;
  } else if (event.target.name === 'message') {
    formData.message = event.target.value;
  }
  saveToLocalStorage();
});

// 6. Обробка події submit
form.addEventListener('submit', event => {
  event.preventDefault();

  if (formData.email === '' || formData.message === '') {
    alert('Fill please all fields');
  } else {
    console.log(formData);
    localStorage.removeItem('feedback-form-state');
    formData.email = '';
    formData.message = '';
    form.reset();
  }
});
// LocalKey = 'feedback-form-state';
// const form = document.querySelector('.feedback-form');
// const { email, message } = form.elements;

// function saveFormData() {
//   const formData = {
//     email: email.value.trim(),
//     message: message.value.trim(),
//   };
//   localStorage.setItem(LocalKey, JSON.stringify(formData));
// }

// function loadFormData() {
//   const savedData = localStorage.getItem(LocalKey);
//   if (savedData) {
//     const formData = JSON.parse(savedData);
//     email.value = formData.email;
//     message.value = formData.message;
//   }
// }

// loadFormData();

// form.addEventListener('input', () => {
//   saveFormData();
// });

// form.addEventListener('submit', e => {
//   e.preventDefault();
//   if (email.value.trim() === '' || message.value.trim() === '') {
//     alert('Fill please all fields');
//     return;
//   }
//   console.log({
//     email: email.value.trim(),
//     message: message.value.trim(),
//   });

//   localStorage.removeItem(LocalKey);
//   email.value = '';
//   message.value = '';
// });
