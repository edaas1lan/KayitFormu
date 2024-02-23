const form = document.getElementById('form');
const password = document.getElementById('password');
const repassword = document.getElementById('repassword');
const alertmessage = document.querySelector('.alertmessage');
const alerttitle = document.getElementById('alerttitle');

let isValid = false;
let passwordMatch = false;

function validateForm() {
  isValid = form.checkValidity();
  console.log(isValid);
  if (!isValid) {
    alerttitle.textContent = 'Lütfen Tüm Alanları Doldurunuz!';
    alerttitle.style.color = 'red';
    alertmessage.style.borderColor = 'red';
  }

  if (password.value === repassword.value) {
    passwordMatch = true;
    password.style.borderColor = 'green';
    repassword.style.borderColor = 'green';
  } else {
    passwordMatch = false;
    alerttitle.textContent = 'Şifreleriniz eşleşmiyor!';
    alerttitle.style.color = 'red';
    alertmessage.style.borderColor = 'red';
    password.style.borderColor = 'red';
    repassword.style.borderColor = 'red';
  }
  if (isValid && passwordMatch) {
    alerttitle.textContent = 'Kayıt Olundu!';
    alerttitle.style.color = 'green';
    alertmessage.style.borderColor = 'green';
  }
}
function takeFormInformation() {
    const user = {
      name: form.name.value,
      surname: form.surname.value,
      email: form.email.value,
      phone: form.phone.value,
      password: form.password.value,
      address: form.address.value,
    };
  
    console.log(user);
  }
  
  function submitForm(e) {
    e.preventDefault();
    validateForm();
  
    if (isValid && passwordMatch) {
      takeFormInformation();
    }
  }
  
  form.addEventListener('submit', submitForm);
  