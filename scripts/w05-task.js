// Step 1: Global variables
let templeList = [];  // Global empty array to store a list of temples
const templesElement = document.getElementById("temples");  // Global variable for the container div

// Step 2: Function to display temples
const displayTemples = (temples) => {
  // Clear the existing content
  templesElement.innerHTML = "";

  // Check if 'temples' is an array
  if (!Array.isArray(temples)) {
    console.error("Error: 'temples' is not an array.", temples);
    return;
  }

  temples.forEach((temple) => {
    // Log the content of each temple to the console
    console.log("Temple:", temple);

    // Create an HTML <article> element
    const articleElement = document.createElement("article");

    // Create an HTML <h3> element
    const h3Element = document.createElement("h3");
    h3Element.textContent = temple.templeName;

    // Create an HTML <img> element
    const imgElement = document.createElement("img");
    imgElement.src = temple.imageUrl; // Use the imageUrl property from your dataset
    imgElement.alt = temple.location;

    // Append the <h3> element to the <article> element
    articleElement.appendChild(h3Element);

    // Append the <img> element to the <article> element
    articleElement.appendChild(imgElement);

    // Append the <article> element to the global 'templesElement'
    templesElement.appendChild(articleElement);
  });
};

// Step 3: Function to get temples data asynchronously
const getTemples = async () => {
  try {
    // Simulate fetching data from an API
    const response = await fetch('https://byui-cse.github.io/cse121b-ww-course/resources/temples.json');
    const data = await response.json();

    // Assuming 'templeList' is a global variable, you can update it here
    templeList = data.slice(0, 5);  // Use a subset of data for demonstration

    // Log the content of templeList to the console
    console.log(templeList);

    // Call the displayTemples function to display the fetched temples
    displayTemples(templeList);
    // Call filterTemples after fetching and processing data
    filterTemples(templeList);
  } catch (error) {
    console.error('Error fetching temple data:', error);
  }
};

// ...


// Step 4: Function to reset or clear the output
const reset = () => {
  templesElement.innerHTML = "";  // Clear the content
};

// Step 5: Function to filter temples based on the dropdown value
const filterTemples = (temples) => {
  // Call the reset function to clear the output
  reset();

  // Check if 'temples' is an array, if not, log an error
  if (!Array.isArray(temples)) {
    console.error("Error: 'temples' is not an array.", temples);
    return;
  }

  // Obtain the value of the HTML element with the ID of "filtered" (dropdown)
  const filter = document.getElementById("filtered").value;

  // Debugging: Log the filter value
  console.log("Filter value:", filter);

  // Use a switch statement based on the filter value
  switch (filter) {
    case "utah":
      // Filter for temples where the location contains "Utah" as a string
      displayTemples(temples.filter(temple => temple.location.includes("Utah")));
      break;
    case "notutah":
      // Filter for temples where the location does not contain "Utah" as a string
      displayTemples(temples.filter(temple => !temple.location.includes("Utah")));
      break;
      case "older":
        // Filter for temples where the dedicated date is before 1950
        const olderTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1950);
        displayTemples(olderTemples);
        break;
      
    case "all":
      // No filter. Just use temples as the argument
      displayTemples(temples);
      break;
    default:
      // Default case if none of the above matches
      console.warn("Unexpected filter value:", filter);
  }
};


// Step 6: Add a change event listener to the HTML element with an ID of "filtered"
document.getElementById("filtered").addEventListener("change", () => {
  // Call the filterTemples function with an arrow function result
  filterTemples((temples) => {
    // Send the templeList as the argument to the arrow function
    return temples;
  });
});

// Step 7: Execute the getTemples function to fetch and display temple data
getTemples();

