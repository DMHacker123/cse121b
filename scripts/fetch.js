// fetch.js
const urlList = "https://pokeapi.co/api/v2/pokemon";
let resultsList = null;

async function getPokemonList(url) {
  try {
    const response = await fetch(url);

    // Check if the fetch was successful
    if (response.ok) {
      // Convert the response to JSON
      const data = await response.json();
      doStuffList(data);
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

function doStuffList(data) {
  console.log("Data received:", data);

  // Create a variable called pokeList and set it equal to data.results
  const pokeList = data.results;

  // Use document.querySelector to get the outputList element
  const outputList = document.querySelector("#outputList");

  // Clear any existing content
  outputList.innerHTML = '';

  // Create list items for each Pokémon and append them to the outputList
  pokeList.forEach(pokemon => {
    const listItem = document.createElement('li');
    
    // Create an HTML line for each Pokémon
    listItem.innerHTML = `<li>${pokemon.name}</li>`;
    
    outputList.appendChild(listItem);
  });

  // Call the sortPokemon function to alphabetize the list
  sortPokemon(outputList);
}

// Function to alphabetize the list
function sortPokemon(list) {
  const items = Array.from(list.children);

  items.sort((a, b) => {
    const nameA = a.textContent.toLowerCase();
    const nameB = b.textContent.toLowerCase();
    return nameA.localeCompare(nameB);
  });

  // Clear the existing list
  list.innerHTML = '';

  // Append the sorted items back to the list
  items.forEach(item => {
    list.appendChild(item);
  });
}

getPokemonList(urlList);


