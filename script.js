"use strict";
const showbtns = document.querySelectorAll(".show-ans-btn");
const hidebtns = document.querySelectorAll(".hide-ans-btn");
for (let i = 0; i < showbtns.length; i++) {
  showbtns[i].addEventListener("click", function () {
    // shows the FAQs answer
    document.querySelectorAll(".faqs-ans")[i].classList.remove("hidden");
    // display the minus icon
    document.querySelectorAll(".hide-ans-btn")[i].classList.remove("hidden");
    // removes the plus icon
    document.querySelectorAll(".show-ans-btn")[i].classList.add("hidden");
  });
}

for (let i = 0; i < hidebtns.length; i++) {
  hidebtns[i].addEventListener("click", function () {
    // // hide the FAQs answer
    document.querySelectorAll(".faqs-ans")[i].classList.add("hidden");
    // display the plus icon
    document.querySelectorAll(".show-ans-btn")[i].classList.remove("hidden");
    // removes the minus icon
    document.querySelectorAll(".hide-ans-btn")[i].classList.add("hidden");
  });
}
