const idInput = document.getElementById('id-input');
const pwInput = document.getElementById('pw-input');
const loginBtn = document.getElementById('login-btn');

loginBtn.disabled = true;
let checkIdInput = false;
let checkPwInput = false;


const checkId = () => {
  if (idInput.value.includes('@') === true) {
    checkIdInput = true;
  } else {
    checkIdInput = false;
  }
}

const checkPw = () => {
  if (pwInput.value.length >= 8) {
    checkPwInput = true;
  } else {
    checkPwInput = false;
  }
}

idInput.addEventListener('keyup', checkId);
pwInput.addEventListener('keyup', checkPw);


const changeBtnState = () => {
  if (checkIdInput === true && checkPwInput === true) {
    loginBtn.style.background = 'rgb(115,180,226)';
    loginBtn.disabled = false;
    loginBtn.style.cursor = 'pointer';
  } else {
    loginBtn.style.background = 'rgb(172,212,234)';
    loginBtn.disabled = true;
    loginBtn.style.cursor = 'auto';
  }
}

idInput.addEventListener('keyup', changeBtnState);
pwInput.addEventListener('keyup', changeBtnState);

const moveToListPage = () => {
  location.href="list.html";
}

loginBtn.addEventListener('click', moveToListPage)

