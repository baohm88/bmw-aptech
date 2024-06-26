document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();

  const comment = document.getElementById("comment");
  const message = document.getElementById("message");
  if (comment.value.length == 0) {
    // show message
    message.style.display = "block";
  } else {
    // hide messsage
    message.style.display = "none";
    alert("Thanks for your comments");
    comment.value = "";
    comment.focus();
  }
});

// hide message
document.querySelector("textarea").addEventListener("keyup", () => {
  document.getElementById("message").style.display = "none";
});

// nav
document.querySelector(".menu-icon").addEventListener("click", () => {
  document.querySelector(".nav").style.display = "block";
});

document.querySelector(".nav-item").addEventListener("click", () => {
  document.querySelector(".nav").style.display = "none";
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 700) {
    document.querySelector(".nav").style.display = "block";
  } else {
    document.querySelector(".nav").style.display = "none";
  }
});
