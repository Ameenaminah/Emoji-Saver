//arrays
let myEmojis = [];
let happyEmogis = [];
let sadEmojis = [];
let othersEmojis = [];
// containers
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

//listeners
addBtnWrapper.addEventListener("click", addEmojiBtn);
removeBtnWrapper.addEventListener("click", removeEmojiBtn);
saveBtnWrapper.addEventListener("dblclick", saveBtn);
deleteBtn.addEventListener("click", function () {
  myEmojis = [];
  happyEmogis = [];
  sadEmojis = [];
  othersEmojis = [];
  render(myEmojis, emojiContainer);
  render(happyEmogis, happyEmojiContainer);
  render(sadEmojis, sadEmojiContainer);
  render(othersEmojis, othersEmojiContainer);
});

//  EventListener Functions

function addEmojiBtn(e) {
  if (document.getElementById(e.target.id) === pushBtn) {
    modifySaveBtn(myEmojis, emojiContainer);
  } else if (
    emojiInput.value &&
    !myEmojis.includes(emojiInput.value) &&
    document.getElementById(e.target.id) === unshifBtn
  ) {
    myEmojis.unshift(emojiInput.value);
  }
  emojiInput.value = "";
  render(myEmojis, emojiContainer);
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
  } else if (document.getElementById(e.target.id) === sadBtn) {
    modifySaveBtn(sadEmojis, sadEmojiContainer);
  } else if (document.getElementById(e.target.id) === othersBtn) {
    modifySaveBtn(othersEmojis, othersEmojiContainer);
  }
}

// Modify Functions
function modifySaveBtn(arr, saveContainer) {
  if (emojiInput.value && !arr.includes(emojiInput.value)) {
    arr.push(emojiInput.value);
  }
  emojiInput.value = "";
  localStorage.setItem("arr", JSON.stringify(arr));
  render(arr, saveContainer);
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
