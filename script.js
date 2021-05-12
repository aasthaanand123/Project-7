//selecting values entered
let form = document.forms.details;
let button = document.querySelector("button");
let firstName = form.elements[0];
let lastName = form.elements[1];
let email = form.elements[2];
let password = form.elements[3];
let validation = function () {
  let v = [];
  //validation
  for (let i = 0; i < form.elements.length - 1; i++) {
    v.push(form.elements[i].value);
    let label = document.getElementById(`${form.elements[i].name}`);
    console.log(label);
    if (form.elements[i].value === "") {
      form.elements[i].classList.add("red");
      form.elements[i].classList.add("error");
      form.elements[i].placeholder = "";
      label.classList.add("color");
    } else if (i !== 2) {
      if (
        form.elements[i].classList.contains("red") &&
        form.elements[i].classList.contains("error")
      ) {
        form.elements[i].classList.remove("red");
        form.elements[i].classList.remove("error");
        label.classList.remove("color");
      }
    }
    if (i === 2) {
      if (
        !(
          form.elements[i].value.includes("@") &&
          form.elements[i].value.includes(".") &&
          form.elements[i].value.length >= 12
        )
      ) {
        form.elements[i].value = "";
        form.elements[i].placeholder = "email@example.com";
        label.classList.add("color");
      } else {
        form.elements[i].classList.remove("red");
        form.elements[i].classList.remove("error");
        label.classList.remove("color");
      }
    }
  }
  //clearing fields at the end
  if (
    v.every((e) => e !== "") &&
    form.elements[2].value.includes("@") &&
    form.elements[2].value.includes(".") &&
    form.elements[2].value.length >= 10
  ) {
    for (let i = 0; i < form.elements.length; i++) {
      form.elements[i].value = "";
      form.elements[i].placeholder = form.elements[i].name;
    }
  }
};
button.addEventListener("click", validation);
