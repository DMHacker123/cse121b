document.addEventListener('DOMContentLoaded', function() {
// Step 1: Global variables
let carList = [];  // Global empty array to store a list of cars
const carsElement = document.getElementById("cars");  // Global variable for the container div

// Step 2: Function to display cars
const displayCars = (cars) => {
  // Clear the existing content
  carsElement.innerHTML = "";

  // Check if 'cars' is an array
  if (!Array.isArray(cars)) {
    console.error("Error: 'cars' is not an array.", cars);
    return;
  }

  cars.forEach((car) => {
    // Log the content of each car to the console
    console.log("Car:", car);
    console.log("Car Image URL:", car.img_url);

    // Create an HTML <article> element
    const articleElement = document.createElement("article");

    // Create an HTML <h3> element
    const h3Element = document.createElement("h3");
    h3Element.textContent = car.name;

    // Create an HTML <img> element
    const imgElement = document.createElement("img");
    imgElement.src = car.img_url;
    imgElement.alt = car.name;

    // Append the <h3> element to the <article> element
    articleElement.appendChild(h3Element);

    // Append the <img> element to the <article> element
    articleElement.appendChild(imgElement);
    console.log("Car Image URL:", car.img_url);

    // Append the <article> element to the global 'carsElement'
    carsElement.appendChild(articleElement);
  });
};

// Step 3: Function to get cars data asynchronously
const getCars = async () => {
  try {
    // Simulate fetching data from an API
    const response = await fetch('https://private-anon-7db9d86f78-carsapi1.apiary-mock.com/manufacturers');
    const data = await response.json();

    // Assuming 'carList' is a global variable, you can update it here
    carList = data.slice();  // Use a subset of data for demonstration

    // Log the content of carList to the console
    console.log(carList);
console.log("Car Image URL:", car.img_url);

    // Call the displayCars function to display the fetched cars
    displayCars(carList);
    // Call filterCars after fetching and processing data
    filterCars(carList);
  } catch (error) {
    console.error('Error fetching car data:', error);
  }
};
// Step 4: Function to reset or clear the output
const reset = () => {
  carsElement.innerHTML = "";  // Clear the content
};
// Step 5: Function to filter cars based on the dropdown value
const filterCars = (cars) => {
  // Call the reset function to clear the output
  reset();

  // Check if 'cars' is an array, if not, log an error
  if (!Array.isArray(cars)) {
    console.error("Error: 'cars' is not an array.", cars);
    return;
  }

  // Obtain the value of the HTML element with the ID of "filter" (dropdown)
  const filter = document.getElementById("filter").value;

  // Debugging: Log the filter value
  console.log("Filter value:", filter);

  // Handle the case when the filter value is empty or undefined
  if (filter === "" || filter === undefined) {
    console.warn("Empty filter value. No filtering applied.");
    // Display all cars
    displayCars(cars);
    return;
  }

  // Use a switch statement based on the filter value
  switch (filter) {
    case "chrysler":
      displayCars(cars.filter(car => car.name === "chrysler"));
      break;
    case "honda":
      displayCars(cars.filter(car => car.name === "honda"));
      break;
    case "mercedes-benz":
      displayCars(cars.filter(car => car.name === "mercedes-benz"));
      break;
    // Add more cases based on your car data
    case "all":
      // No filter. Just use cars as the argument
      displayCars(cars);
      break;
    
    default:
      // Default case if none of the above matches
      console.warn("Unexpected filter value:", filter);
  }
};

// Step 6: Add a change event listener to the HTML element with an ID of "filter"
document.getElementById("filter").addEventListener("change", () => {
  // Call the filterCars function with the carList array
  filterCars(carList);
});

// Step 7: Function to sort cars based on selection
const sortBy = (cars, selection) => {
  switch (selection) {
    case "name":
      // Sort cars by name
      return cars.slice().sort((a, b) => a.name.localeCompare(b.name));
    case "horsepower":
      // Sort cars by horsepower
      return cars.slice().sort((a, b) => a.avg_horsepower - b.avg_horsepower);
    case "price":
      // Sort cars by price
      return cars.slice().sort((a, b) => a.avg_price - b.avg_price);
    default:
      console.warn("Unexpected sort selection:", selection);
      return cars;
  }
};
// Example usage:
// Call sortBy function with the carList array and the desired selection
const sortedCars = sortBy(carList, "name");

// Display the sorted cars using displayCars function
displayCars(sortedCars);
// Step 8: Add a change event listener to the HTML element with an ID of "sort"
document.getElementById("sort").addEventListener("change", (event) => {
  // Get the selected value from the dropdown
  const selectedSort = event.target.value;

  // Call the sortBy function with the carList array and the selectedSort value
  const sortedCars = sortBy(carList, selectedSort);

  // Display the sorted cars using displayCars function
  displayCars(sortedCars);
});

// Step 9: Execute the getCars function to fetch and display car data
getCars();

});


