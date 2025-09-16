const form = document.getElementById("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let userId = e.target.id.value;
  let userPw1 = e.target.pw1.value;
  let userPw2 = e.target.pw2.value;
  let userName = e.target.name.value;
  let userPhone = e.target.phone.value;

  // 유효성 검사
  const pwRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*]).{8,30}$/;
  if (!pwRegex.test(userPw1)) {
    alert("비밀번호는 영문, 숫자, 특수문자를 포함한 8~30자리여야 합니다.");
    return;
  }
  if (userPw1 !== userPw2) {
    alert("비밀번호가 일치하지 않습니다.");
    return;
  }

  if (userId.length < 6) {
    alert("아이디가 너무 짧습니다. 6자 이상 입력해주세요.");
    return;
  }

  const message = `${userId}님 환영합니다!\n\n회원가입시 입력하신 정보는 다음과 같습니다\n아이디 : ${userId}\n이름 : ${userName}\n전화번호 : ${userPhone}\n`;
  window.location.href = "sign_up2.html";
  alert(message);
});

const darkModeSwitch = document.getElementById("darkModeSwitch");
darkModeSwitch.addEventListener("change", function () {
  document.body.classList.toggle("dark-mode", this.checked);
});
