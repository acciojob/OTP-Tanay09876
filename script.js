//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function () {
  const inputs = document.querySelectorAll(".code");

  inputs.forEach((input, index) => {
    input.addEventListener("input", (e) => {
      const value = e.target.value;
      if (/^\d$/.test(value)) {
        if (index < inputs.length - 1) {
          inputs[index + 1].focus();
        }
      } else {
        e.target.value = ""; 
      }
    });

    input.addEventListener("keydown", (e) => {
      if (e.key === "Backspace") {
        if (input.value === "" && index > 0) {
          inputs[index - 1].focus();
          inputs[index - 1].value = "";
          e.preventDefault();
        }
      }
    });
  });

  inputs[0].focus(); 
});
