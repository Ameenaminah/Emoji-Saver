//arrays
let myEmojis = [];
let happyEmogis = [];
let sadEmojis = [];
let othersEmojis = [];

// Containers
let emojiContainer = document.querySelector("#emojiContainer");
const sadEmojiContainer = document.querySelector("#sad-emojiContainer");
const happyEmojiContainer = document.querySelector("#happy-emojiContainer");
const othersEmojiContainer = document.querySelector("#others-emojiContainer");
// Btn Wrappers
const addBtnWrapper = document.getElementById("add-btn-wrapper");
const removeBtnWrapper = document.getElementById("remove-btn-wrapper");
const saveBtnWrapper = document.getElementById("save-btn-wrapper");
//buttons
const pushBtn = document.querySelector("#push-btn");
const unshifBtn = document.querySelector("#unshift-btn");
const popBtn = document.getElementById("pop-btn");
const shiftBtn = document.getElementById("shift-btn");
const happyBtn = document.getElementById("happy-btn");
const sadBtn = document.getElementById("sad-btn");
const othersBtn = document.getElementById("others-btn");
const deleteBtn = document.getElementById("delete-btn");
//Input
const emojiInput = document.querySelector("#emoji-input");

// LocalStorage
const myEmojisFromLocalStorage = JSON.parse(localStorage.getItem("myEmojis"));
const happyEmojisFromLocalStorage = JSON.parse(
  localStorage.getItem("happyEmogis")
);
const sadEmojisFromLocalStorage = JSON.parse(localStorage.getItem("sadEmogis"));
const othersEmojisFromLocalStorage = JSON.parse(
  localStorage.getItem("othersEmogis")
);

//listeners
addBtnWrapper.addEventListener("click", addEmojiBtn);
removeBtnWrapper.addEventListener("click", removeEmojiBtn);
saveBtnWrapper.addEventListener("dblclick", saveBtn);
deleteBtn.addEventListener("click", deleteAllbtn);

if (myEmojisFromLocalStorage) {
  myEmojis = myEmojisFromLocalStorage;
  render(myEmojis, emojiContainer);
}
if (happyEmojisFromLocalStorage) {
  happyEmogis = happyEmojisFromLocalStorage;
  render(happyEmogis, happyEmojiContainer);
}
if (sadEmojisFromLocalStorage) {
  sadEmojis = sadEmojisFromLocalStorage;
  render(sadEmojis, sadEmojiContainer);
}
if (othersEmojisFromLocalStorage) {
  othersEmojis = othersEmojisFromLocalStorage;
  render(othersEmojis, othersEmojiContainer);
}

//  EventListener Functions

function addEmojiBtn(e) {
  if (
    emojiInput.value &&
    !myEmojis.includes(emojiInput.value) &&
    document.getElementById(e.target.id) === pushBtn
  ) {
    myEmojis.unshift(emojiInput.value);
  } else if (
    emojiInput.value &&
    !myEmojis.includes(emojiInput.value) &&
    document.getElementById(e.target.id) === unshifBtn
  ) {
    myEmojis.unshift(emojiInput.value);
  }
  emojiInput.value = "";
  render(myEmojis, emojiContainer);
  localStorage.setItem("myEmojis", JSON.stringify(myEmojis));
}

function removeEmojiBtn(e) {
  if (document.getElementById(e.target.id) === popBtn) {
    myEmojis.pop();
  } else {
    myEmojis.shift();
  }
  render(myEmojis, emojiContainer);
}

function saveBtn(e) {
  if (document.getElementById(e.target.id) === happyBtn) {
    modifySaveBtn(happyEmogis, happyEmojiContainer);
    localStorage.setItem("happyEmogis", JSON.stringify(happyEmogis));
  } else if (document.getElementById(e.target.id) === sadBtn) {
    modifySaveBtn(sadEmojis, sadEmojiContainer);
    localStorage.setItem("sadEmojis", JSON.stringify(sadEmojis));
  } else if (document.getElementById(e.target.id) === othersBtn) {
    modifySaveBtn(othersEmojis, othersEmojiContainer);
    localStorage.setItem("othersEmojis", JSON.stringify(othersEmojis));
  }
}

function deleteAllbtn(e) {
  myEmojis = [];
  happyEmogis = [];
  sadEmojis = [];
  othersEmojis = [];
  localStorage.clear();
  render(myEmojis, emojiContainer);
  render(happyEmogis, happyEmojiContainer);
  render(sadEmojis, sadEmojiContainer);
  render(othersEmojis, othersEmojiContainer);
}

// Modify Functions
function modifySaveBtn(arr, saveContainer) {
  if (emojiContainer.innerHTML && !arr.includes(emojiContainer.innerHTML)) {
    arr.push(emojiContainer.innerHTML);
    emojiContainer.innerHTML = "";
    render(arr, saveContainer);
  }
}

// Render Function
function render(emojis, container) {
  container.innerHTML = "";
  let html = "";
  for (let myEmoji of emojis) {
    html += `
      <span class="emoji"> ${myEmoji}</span>
    `;
  }
  container.innerHTML = html;
}
