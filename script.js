//jshint esversion:6
//jshint  node:true
//jshint browser:true
"use strict";
const showbtns = document.querySelectorAll(".show-ans-btn");
const hidebtns = document.querySelectorAll(".hide-ans-btn");
const showlinks = document.querySelectorAll(".faqs-ques a");
const showHideAns = (counter) => {
  // Toggle the FAQs answer
  document.querySelectorAll(".faqs-ans")[counter].classList.toggle("hidden");
  // Toggle the minus icon
  document
    .querySelectorAll(".hide-ans-btn")
    [counter].classList.toggle("hidden");
  // Toggle the plus icon
  document
    .querySelectorAll(".show-ans-btn")
    [counter].classList.toggle("hidden");
};
for (let i = 0; i < showbtns.length; i++) {
  showbtns[i].addEventListener("click", () => {
    setTimeout(showHideAns, 100, i);
  });
}

for (let i = 0; i < hidebtns.length; i++) {
  hidebtns[i].addEventListener("click", () => {
    setTimeout(showHideAns, 100, i);
  });
}
for (let i = 0; i < showlinks.length; i++) {
  showlinks[i].addEventListener("click", () => {
    setTimeout(showHideAns, 100, i);
  });
}
