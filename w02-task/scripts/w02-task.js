/* Step 2 - Variables */
const fullName = "Darwin Matos";
const currentYear = 2024;
const profilePicture = "images/rsz_darwin_matos.jpg";
let foods = ["Pizza", "Chocolate", "Sushi", "Apple", "Bananas", "Ice Cream"];

/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('main#home picture img');
const foodElement = document.getElementById("food");

/* Step 4 - Adding Content */

// Adding the full name to the nameElement
nameElement.innerHTML = `<strong>${fullName}</strong>`;

// Adding the current year to the yearElement
yearElement.textContent = currentYear;

// Setting the src attribute of the imageElement to the profilePicture
imageElement.setAttribute('src', profilePicture);

// Getting the text content of the nameElement
const name = nameElement.textContent || nameElement.innerText;

// Setting the alt attribute of the imageElement using a template literal
imageElement.setAttribute('alt', `Profile image of ${name}`);

/* Step 3 - Adding Content (Favorite Foods) */
foodElement.innerHTML = `${foods.join(', ')}`;

/* Step 4 - Update Favorite Foods */
const newFavoriteFood = "Milk";
foods.push(newFavoriteFood);

foodElement.innerHTML += `<br>${foods.join(', ')}`;

/* Step 4 - Remove the First Element */
foods.shift();
foodElement.innerHTML += `<br>${foods.join(', ')}`;

/* Remove the Last Element and Append Modified Array */
foods.pop();
foodElement.innerHTML += `<br>${foods.join(', ')}`;
