//1
const extractNumbers = (str) => {
  return console.log(str.match(/\d/g));
};

extractNumbers("a1fg5hj6");


//2
function fibonacci(a = 0, b = 1) {
  if (a < 145) {
    console.log(a);
    setTimeout(() => fibonacci(b, a + b), 1000);
  }
}

fibonacci();

//3

const url = "https://fakestoreapi.com/products";

const getData = async () => {
  const response = await fetch(url);
  const data = await response.json();
  try {
    data.forEach((product) => {
      console.log(product.title);
    });
  } catch (e) {
    console.error(e);
  }
};

getData();

//4

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.onclick = (event) => {
    if (event.target.tagName === "BUTTON") {
      document.body.style.backgroundColor = event.target.textContent;
    }
  };
});

///5

const block = document.querySelector(".block");
const button = document.querySelector(".show");

button.onclick = () => {
  block.classList.toggle("hide");
};

//6

let counter = 0;

const timer = document.querySelector(".counter");

const interval = setInterval(() => {
  counter++;
  timer.innerHTML = `${counter}`;
  if (counter >= 100) {
    clearInterval(interval);
  }
}, 1);

//7

const getAsyncData = async () => {
  const response = await fetch("data.json");
  const data = await response.json();
  try {
    console.log(data);
  } catch (e) {
    console.error(e);
  }
};
getAsyncData();
