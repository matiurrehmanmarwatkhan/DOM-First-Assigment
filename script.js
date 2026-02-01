document.getElementById("mainHeading").innerText =
  "Welcome to DOM Assignment";

function changeParagraphText() {
  document.getElementById("myParagraph").innerText =
    "Paragraph text changed!";
}

function changeBackground() {
  document.body.style.backgroundColor = "pink";
}

function showAlert() {
  alert("DOM is working!");
}

function updateText() {
  const value = document.getElementById("textInput").value;
  document.getElementById("outputParagraph").innerText = value;
}
