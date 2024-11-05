//just for practice ^_^
const change_lang = document.querySelector("#lang");
const name_text = document.querySelector("#name");
const intro_text = document.querySelector("#intro");
const web_btn = document.querySelector("#web_btn");
const btn2 = document.querySelector("#btn2");

change_lang.addEventListener("click", changeLangText);

function changeLangText() {
  if (change_lang.innerHTML === "中文") {
    change_lang.innerHTML = "English";
  } else {
    change_lang.innerHTML = "中文";
  }

  changeNameText();
  changeIntroText();
  changeWebButtonText();
  change3dButtonText();
}

function changeNameText() {
  if (name_text.innerHTML === "陳香庭") {
    name_text.innerHTML = "Hsiang Ting, Chen";
    name_text.style.fontSize = "2rem";
    name_text.style.marginBottom = "0px";
  } else {
    name_text.innerHTML = "陳香庭";
    name_text.style.fontSize = "1.8rem";
    name_text.style.marginBottom = "-15px";
  }
}

function changeIntroText() {
  if (intro_text.innerHTML === "我是一位數位創作者。") {
    intro_text.innerHTML = "I'm a digital creator.";
  } else {
    intro_text.innerHTML = "我是一位數位創作者。";
  }
}

function changeWebButtonText() {
  if (web_btn.innerHTML === "網頁作品") {
    web_btn.innerHTML = "Web design works";
  } else {
    web_btn.innerHTML = "網頁作品";
  }
}

function change3dButtonText() {
  if (btn2.innerHTML === "3D作品") {
    btn2.innerHTML = "3D works";
  } else {
    btn2.innerHTML = "3D作品";
  }
}
