const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");

  if (height === "" || height <= 0 || isNaN(height)) {
    results.innerHTML = `Please Give A Valid Height`;
  } else if (weight === "" || weight <= 0 || isNaN(weight)) {
    results.innerHTML = `Please Give A Valid Weight`;
  } else {
    const BMI = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `<span class="res">Your BMI is : ${BMI}</span>`;
  }

  const BMI = (weight / ((height * height) / 10000)).toFixed(2);
//   let finalResult = document.createElement("span");
//   const heading = document.querySelector("h1");
//   heading.insertAdjacentElement("afterend", finalResult);
//   finalResult.classList.add('final-result');
//   if (BMI < 18.6) {
//     finalResult.innerHTML = "Oops you are Under Weight";
//     finalResult.style.color = 'red';
//   } else if (BMI > 18.6 && BMI < 24.9) {
//     finalResult.innerHTML = "Hey its Normal Range";
//     finalResult.style.color = 'green';
//   } else if (BMI > 24.9) {
//     finalResult.innerHTML = "Oho no its Overweight";
//     finalResult.style.color = 'crimson';
//   }
//   else{
//     console.log("no worries")
//   }
let finalResult = document.querySelector(".final-result");
const heading = document.querySelector("h1");

if (!finalResult) {
  finalResult = document.createElement("span");
  finalResult.classList.add('final-result');
  heading.insertAdjacentElement("afterend", finalResult);
}

if (BMI < 18.6) {
  finalResult.innerHTML = "Oops!, you are Under Weight 😢";
  finalResult.style.color = 'red';
} else if (BMI > 18.6 && BMI < 24.9) {
  finalResult.innerHTML = "Hey, it's Normal No Worries 😉";
  finalResult.style.color = 'green';
} else if (BMI > 24.9) {
  finalResult.innerHTML = "Oh no, it's Overweight 😱";
  finalResult.style.color = 'crimson';
} else {
  finalResult.innerHTML = "No worries";
  finalResult.style.color = 'black';
}

});
