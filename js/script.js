$(() => {
  const name = $("#inputName");
  const email = $("#inputEmail");
  const phone = $("#inputPhone");
  const gender = $("#inputGender");
  const message = $("#inputMessage");
  const submitBtn = $("#submitBtn");

  name.change(function () {
    const nameRegex = /^[a-zA-Z ]{3,30}$/;
    if (!nameRegex.test(name.val()) || name.val() === "") {
      error(name);
    }
    if (nameRegex.test(name.val())) {
      correct(name);
    }
  });

  email.change(function () {
    const emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (
      !emailRegex.test(email.val()) ||
      email.val() === "" ||
      email.val().length === 0
    ) {
      error(email);
    }
    if (emailRegex.test(email.val())) {
      correct(email);
    }
  });

  phone.change(function () {
    const phoneRegex =
      /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    if (
      !phoneRegex.test(phone.val()) ||
      phone.val() === "" ||
      email.val().length === 0
    ) {
      error(phone);
    }
    if (phoneRegex.test(phone.val())) {
      correct(phone);
    }
  });
  gender.change(function () {
    const gendermcheck = /^Male$/;
    const genderfcheck = /^Female$/;
    const genderocheck = /^Other$/;
    if (
      !gendermcheck.test(gender.val()) ||
      !genderfcheck.test(gender.val()) ||
      !genderocheck.test(gender.val()) ||
      gender.val() === "null" ||
      gender.val() === "none" ||
      email.val().length === 0
    ) {
      error(gender);
    }
    if (
      gendermcheck.test(gender.val()) ||
      genderfcheck.test(gender.val()) ||
      genderocheck.test(gender.val())
    ) {
      correct(gender);
    }
  });
  message.change(function () {
    const messageRegex = /^[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/;

    if (
      !messageRegex.test(message.val()) ||
      message.val() === "" ||
      message.val().length === 0
    ) {
      console.log(message.val());
      error(message);
    }
    if (messageRegex.test(message.val()) || message.val() !== "") {
      console.log(message.val());
      correct(message);
    }
  });

  submitBtn.click(function (e) {
    e.preventDefault();
    $("#inputName,#inputEmail,#inputPhone,#inputMessage").val("");
    $("#inputGender").prop("selectedIndex", 0);

    $("div.error").text("");
    alert("your form is submitted");
  });
});

function error(elm) {
  if (elm.next("div").hasClass("error")) {
    elm.next("div").removeClass("error").text("");
  }
  if (!elm.next("div").hasClass("error")) {
    console.log(elm[0].name);
    elm
      .next("div")
      .addClass("error")
      .text(`Please enter correct ${elm[0].name}`);
  }
}
function correct(elm) {
  if (elm.next("div").hasClass("error") || !elm.next("div").hasClass("error")) {
    elm.next("div").removeClass("error").text("");
  }
  // if (!elm.next("div").hasClass("error")) {
  //   elm.next("div").text("");
  // }
}
