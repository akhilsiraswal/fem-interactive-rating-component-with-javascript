let l1 = document.getElementById("one");
let l2 = document.getElementById("two");
let l3 = document.getElementById("three");
let l4 = document.getElementById("four");
let l5 = document.getElementById("five");

var score = 0;

const onClickEventHandler1 = () => {
  score = l1.value;
  if (localStorage) {
    localStorage.setItem("score", score);
  }
  console.log(score);
};

const onClickEventHandler2 = () => {
  score = l2.value;
  if (localStorage) {
    localStorage.setItem("score", score);
  }
  console.log(score);
};

const onClickEventHandler3 = () => {
  score = l3.value;
  if (localStorage) {
    localStorage.setItem("score", score);
  }
  console.log(score);
};

const onClickEventHandler4 = () => {
  score = l4.value;
  if (localStorage) {
    localStorage.setItem("score", score);
  }
  console.log(score);
};

const onClickEventHandler5 = () => {
  score = l5.value;
  if (localStorage) {
    localStorage.setItem("score", score);
  }
  console.log(score);
};

let button = document.getElementsByClassName("button_submit")[0];
console.log(button);
button.addEventListener("click", function onSubmit(e) {
  // e.preventDefault();
  // console.log("hii");
  window.location.href = "feedback.html";
});
