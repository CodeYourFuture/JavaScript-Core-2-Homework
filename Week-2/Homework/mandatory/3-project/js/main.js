  let myBlueBtn = document.querySelector("#blueBtn");
  myBlueBtn.addEventListener("click", function () {
    let myJumbotron = document.querySelector(".jumbotron");
    myJumbotron.style.backgroundColor = "#588fbd";
    let myPrimaryBtn = document.querySelector(".btn-primary");
    myPrimaryBtn.style.backgroundColor = "#ffa500";
    let mySecondaryBtn = document.querySelector(".btn-secondary");
    mySecondaryBtn.style.backgroundColor = "black";
    mySecondaryBtn.style.color = "white";
  });

  let myOrangeBtn = document.querySelector("#orangeBtn");
  myOrangeBtn.addEventListener("click", function () {
    let myJumbotron = document.querySelector(".jumbotron");
    myJumbotron.style.backgroundColor = "#f0ad4e";
    let myPrimaryBtn = document.querySelector(".btn-primary");
    myPrimaryBtn.style.backgroundColor = "#5751fd";
    let mySecondaryBtn = document.querySelector(".btn-secondary");
    mySecondaryBtn.style.backgroundColor = "#31b0d5";
    mySecondaryBtn.style.color = "white";
  });

  let myGreenBtn = document.querySelector("#greenBtn");
  myGreenBtn.addEventListener("click", function () {
    let myJumbotron = document.querySelector(".jumbotron");
    myJumbotron.style.backgroundColor = "#87ca8a";
    let myPrimaryBtn = document.querySelector(".btn-primary");
    myPrimaryBtn.style.backgroundColor = "black";
    let mySecondaryBtn = document.querySelector(".btn-secondary");
    mySecondaryBtn.style.backgroundColor = "#8c9c08";
  });

  let nameInput = document.querySelector("#example-text-input");
  let textEl = document.querySelector("#exampleTextarea");
  let emailEl = document.querySelector("#exampleInputEmail1");
  let textError = document.querySelector("#textError");
  let mySubmitBtn = document.querySelector('button[type ="submit"]');
  let emailError = document.querySelector("#emailError");
  let nameError = document.querySelector("#nameError");

  mySubmitBtn.addEventListener("click", function (event) {
    event.preventDefault();
    emailEl.style.border = "1px solid black";
    emailError.textContent = "";
    nameInput.style.border = "1px solid black";
    nameError.textContent = "";
    textEl.style.border = "1px solid black";
    textError.textContent = "";

    if (emailEl.value === "") {
      emailEl.style.border = "1px solid red";

      emailError.textContent = " email cannot be empty";
      emailError.style.color = "red";
      return "";
    } else {
      if (!emailEl.value.includes("@")) {
        emailEl.style.border = "1px solid red";

        emailError.textContent = "your email is wrong: email should include @";
        emailError.style.color = "red";
        return "";
      }
    }
    if (nameInput.value === "") {
      nameInput.style.border = "1px solid red";

      nameError.textContent = " name cannot be empty";
      nameError.style.color = "red";
      return "";
    }
    if (textEl.value === "") {
      textEl.style.border = "1px solid red";

      textError.textContent = " text cannot be empty";
      textError.style.color = "red";
      return "";
    }
    textEl.value = "";
    nameInput.value = "";
    emailEl.value = "";
    alert("thank you for filling out the form");
  });
