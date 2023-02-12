let productContainer = document.querySelector("section");
let resultButton = document.querySelector("section + div");
let image1 = document.querySelector("section img:first-child");
let image2 = document.querySelector("section img:nth-child(2)");
let clicks = 0;
let maxClicksAllowed = 9;

let totalClicks = 0;
let maxClicks = 5;
function Product(name, src, clicks, views) {
  // constructor function
  this.name = name;
  this.src = src;
  this.clicks = clicks; //these are empty properties (src, name, clicks)
  this.views = views; //putting a number zero means me can change it
  Product.allProducts.push(this); //we are calling the new function, and pushing the 'this' into the all products array. it belongs to the constructor.
}

Product.allProducts = []; // setting a constructor of PRODUCT outside of my function. everytime call new. Product the above will now run.

// put the

//array
const productNames = [
  "bag",
  "banana",
  "bathroom",
  "boots",
  "breakfast",
  "bubblegum",
  "chair",
  "cthulhu",
  "dog-duck",
  "pen",
  "pet-sweep",
  "scissors",
  "shark",
  "tauntaun",
  "unicorn",
  "water-can",
  "wine-glass",
];

//if local storage empty= create new proudct
//but if i do have something in there, do for loops, instead of product name - got to product data

if (localStorage.getItem("productData") === null) {
  for (let i = 0; i < productNames.length; i++) {
    new Product(productNames[i], `images/$productNames [i].jpeg`, 0, 0);
  }
} else {
  const productData = JSON.parse(localStorage.getItem("productData"));

  //creates a new product
  for (let i = 0; i < productData.length; i++) {
    new Product(
      productData[i].name,
      productData[i].src,
      productData[i].clicks,
      productData[i].views
    );
  }
  //JSON.parse means its made into a JS object
  //then get each items name, source, clicks, views
}

//create and return a random number within the array
// returned from the index in product array

function randomProductIndex() {
  return Math.floor(Math.random() * Product.allProducts.length);
}
//if you want to return a random number from product index. math.random returns a number from 0-10 - to times that by our PRODUCT function and our all products array.

// creating a for loop for each of the names in the array.
// loop around the array and use the name of our function as 1st parameter then the images as the source within the $ literal

for (let i = 0; i < productNames.length; i++) {
  new Product(productNames[i], `assets/${productNames[i]}.jpeg`);
}

// have the images chosen randomly from our product.allproducts array
//3 random product images
function renderImages() {
  let product1 = randomProductIndex();
  let product2 = randomProductIndex();
  let product3 = randomProductIndex();

  //need to cheeck if images are set - below will run until its not true
  // make sure none of them are the same!
  //setting

  while (
    product1 === product2 ||
    product1 === product3 ||
    product2 === product3
  ) {
    product2 = randomProductIndex();
    product3 = randomProductIndex();
  }

  //retrieve our image elements (tags) - the variable IS the tag, setting the variable to be the image
  //'img1' is an object here. get element is the tag

  const img1 = document.getElementById("img1");
  const img2 = document.getElementById("img2");
  const img3 = document.getElementById("img3");

  // setting the src attribute of imgs to be src from random products from image index . use alt bcs its name
  //'img1' is an attribute - we are setting this to the value of the name of our product

  img1.src = Product.allProducts[product1].src;
  img2.src = Product.allProducts[product2].src;
  img3.src = Product.allProducts[product3].src;

  img1.alt = Product.allProducts[product1].name;
  img2.alt = Product.allProducts[product2].name;
  img3.alt = Product.allProducts[product3].name;

  //increase the views for displayed images
  Product.allProducts[product1].views++;
  Product.allProducts[product2].views++;
  Product.allProducts[product3].views++;
}

// listen for clicks on the images
// make sure they are clicking on an image and not the container itself
//we check if the event if on the img container ,if it is
function handleClick(event) {
  if (event.target === imgContainer) {
    alert("You've got to click on the image!");
    return;
  }
  // we check that the for
  // increase clicks
  //we loop through our projects, checking if the event - the actual click itself, the target is the event and the alt is the image.
  //
  for (let i = 0; i < Product.allProducts.length; i++) {
    console.log(Product.allProducts[i]);
    if (event.target.alt === Product.allProducts[i].name) {
      //the event.target.art is the image we're clikcing on
      //event target works becuase we gave the image container an event listener
      //the .alt will hold the targets (img) name
      //if the alt matches to a .name in our products array, we increase the clicks on it
      Product.allProducts[i].clicks++;
      break; // ends the for loop
    }
  }

  // check max clicks each time we click
  //if we have dont render more imgs
  // remove the event listener on the img container
  //if we havent render more images
  totalClicks++;
  console.log(totalClicks);
  if (totalClicks === maxClicks) {
    imgContainer.removeEventListener("click", handleClick);

    const productsStr = JSON.stringify(Product.allProducts);
    // to save within local storage
    //everytime we do 5 clicks we get this data
    localStorage.setItem("productData", productsStr);

    //we can 'remove' the event listener bcs the parameters are idnetical, so we can write remove because the 'click,handleclick' on the last line of code' is the same .
    renderResults();
    renderChart();
    return;
  }
  renderImages();
}

function renderResults() {
  const resultsList = document.getElementById("results-list");

  for (let i = 0; i < Product.allProducts.length; i++) {
    let theProduct = Product.allProducts[i];
    let li = document.createElement("li");
    li.textContent = `${theProduct.name}: ${theProduct.clicks} clicks ${theProduct.views} views`;
    resultsList.appendChild(li);
  }
}

renderImages();

// we have a new
// we are setting an event listener, so that whenever the
//event listener for a click and the function to handle the click
const imgContainer = document.getElementById("img-container");
imgContainer.addEventListener("click", handleClick);

//render a chart
//using chartjs
//have a chart display in section under img container
//use a canvas tag with an id
//use the demo chart from chartjs docs

function renderChart() {}
let labels = [];
let views = [];
let click = [];

//variable one is the chart

function renderChart() {
  const theChart = document.getElementById("chart");
  let labels = [];
  let viewsData = [];
  let clicksData = [];

  for (let i = 0; i < Product.allProducts.length; i++) {
    labels.push(Product.allProducts[i].name);
    viewsData.push(Product.allProducts[i].views);
    clicksData.push(Product.allProducts[i].clicks);
  }

  const data = {
    labels: labels,
    datasets: [
      {
        label: "# of Views",
        data: viewsData,
        borderWidth: 1,
      },
      {
        label: "# of Votes",
        data: clicksData,
        borderWidth: 1,
      },
    ],
  };
  const config = {
    type: "bar",
    data: data,
  };
  new Chart(theChart, config);
}
