
let l1 = document.getElementById("one");
let l2 = document.getElementById("two");
let l3 = document.getElementById("three");
let l4 = document.getElementById("four");
let l5 = document.getElementById("five");

var score = 0;

const onClickEventHandler = () => {
  score = l1.value;
  console.log(score);
};


let button = document.getElementsByClassName("button_submit")[0];
console.log(button)
button.addEventListener("click", function onSubmit(e) {
  e.preventDefault();
  console.log("hii");
  window.location.href = "feedback.html";
  e.preventDefault();

  let p_tag = document.querySelector("rating_p_tag");
  console.log(p_tag);
  p_tag.textContent = `You Selected ${score} out of 5`;
});
