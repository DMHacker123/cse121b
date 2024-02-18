document.addEventListener('DOMContentLoaded', function () {
  // Step 1: Global variables
  const carsElement = document.getElementById("cars");

  // Step 2: Function to display cars
  const displayCars = (cars) => {
    carsElement.innerHTML = "";

    if (!Array.isArray(cars)) {
      console.error("Error: 'cars' is not an array.", cars);
      return;
    }

    cars.forEach((car) => {
      const articleElement = document.createElement("article");
      const h3Element = document.createElement("h3");
      h3Element.textContent = car.name;
      const pElement = document.createElement("p");
      pElement.textContent = `Average Horsepower: ${car.avg_horsepower.toFixed(2)} | Average Price: $${car.avg_price.toFixed(2)}`;
      articleElement.appendChild(h3Element);
      articleElement.appendChild(pElement);
      carsElement.appendChild(articleElement);
    });
  };

  // Step 3: Function to get cars data asynchronously
  const getCars = async () => {
    try {
      const response = await fetch('https://run.mocky.io/v3/d4779cc7-12f9-4aa5-a016-6f97f2205c4b');
      const data = await response.json();

      carList = data.slice();
      console.log(carList);

      displayCars(carList);
      filterCars(carList);
    } catch (error) {
      console.error('Error fetching car data:', error);
    }
  };

  // Step 4: Function to reset or clear the output
  const reset = () => {
    carsElement.innerHTML = "";
  };

  // Step 5: Function to filter cars based on the dropdown value
  const filterCars = (cars) => {
    reset();

    if (!Array.isArray(cars)) {
      console.error("Error: 'cars' is not an array.", cars);
      return;
    }

    const filter = document.getElementById("filter").value;

    console.log("Filter value:", filter);

    if (filter === "" || filter === undefined) {
      console.warn("Empty filter value. No filtering applied.");
      displayCars(cars);
      return;
    }

    switch (filter) {
      case "chrysler":
      case "honda":
      case "mercedes-benz":
        displayCars(cars.filter(car => car.name === filter));
        break;
      case "all":
        displayCars(cars);
        break;
      default:
        console.warn("Unexpected filter value:", filter);
    }
  };

  // Step 6: Add a change event listener to the HTML element with an ID of "filter"
  document.getElementById("filter").addEventListener("change", () => {
    filterCars(carList);
  });

  // Step 7: Function to sort cars based on selection
  const sortBy = (cars, selection) => {
    switch (selection) {
      case "name":
        return cars.slice().sort((a, b) => a.name.localeCompare(b.name));
      case "horsepower":
        return cars.slice().sort((a, b) => a.avg_horsepower - b.avg_horsepower);
      case "price":
        return cars.slice().sort((a, b) => a.avg_price - b.avg_price);
      default:
        console.warn("Unexpected sort selection:", selection);
        return cars;
    }
  };

  // Step 8: Add a change event listener to the HTML element with an ID of "sort"
  document.getElementById("sort").addEventListener("change", (event) => {
    const selectedSort = event.target.value;
    const sortedCars = sortBy(carList, selectedSort);
    displayCars(sortedCars);
  });

  // Step 9: Execute the getCars function to fetch and display car data
  getCars();
});
