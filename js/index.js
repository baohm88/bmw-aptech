document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();

  const comment = document.getElementById("comment");
  const message = document.getElementById("message");
  if (comment.value.length == 0) {
    // show message
    message.style.display = "block";
    console.log("not ok");
  } else {
    // hide messsage
    message.style.display = "none";
    alert("Thanks for your comments");
    comment.value = "";
    comment.focus();
  }
});

document.querySelector("textarea").addEventListener("keyup", () => {
  // hide message
  document.getElementById("message").style.display = "none";
});
