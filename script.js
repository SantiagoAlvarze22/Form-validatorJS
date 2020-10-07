const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')
const inputs = document.querySelectorAll('.input')

//show input error message
function showError(input, message){
  const formControl = input.parentElement;
  formControl.className='form-control error'
  // formControl.classList.add('error')
  const small = formControl.querySelector('small');
  small.innerText = message;
}

//show succes outline
function showSucess(input){
  const formControl = input.parentElement;
  formControl.className='form-control success'
  // formControl.classList.add('success')
}

//check email is valid 
function isValidEmail(email){
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

//event listeners
form.addEventListener('submit', e => {
  e.preventDefault()
  if(username.value=== ''){
    showError(username, 'Username is required')
  }else{
    showSucess(username)
  }
  if(email.value=== ''){
    showError(email, 'Email is required')
  }else if(!isValidEmail(email.value)){
    showError(email, 'Email is not valid')
  }
  else{
    showSucess(email)
  }
  if(password.value=== ''){
    showError(password, 'Password is required')
  }else{
    showSucess(password)
  }
  if(password2.value=== ''){
    showError(password2, 'Password2 is required')
  }else{
    showSucess(password2)
  }
  
})
