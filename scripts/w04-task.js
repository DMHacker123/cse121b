/* LESSON 3 - Programming Tasks */


/* Profile Object */
/* Populate Profile Object with placesLived objects */

let myProfile = {
    name: "Darwin Matos",
    photo: {
        src: "images/rsz_darwin_matos.jpg",
        alt: "My Profile Picture"
},
    favoriteFoods: ["Pizza", "Chocolate", "Sushi", "Apple", "Bananas", "Ice Cream"],
    hobbies: ["Reading", "Coding", "Basketball", "Swimming"],
};
myProfile.placesLived = [
    { place: "Santo Domingo, DR", length: "7 years" },
    { place: "San Cristobal", length: "8 years" }
];

/* DOM Manipulation - Output */

/* Name */
const nameElement = document.querySelector("#name");
if (nameElement) {
    nameElement.innerHTML = `My name is <em>${myProfile.name}</em>`;
}

/* Photo with attributes */
document.querySelector("#photo").src = myProfile.photo.src;
document.querySelector("#photo").alt = myProfile.photo.alt;
/* Favorite Foods List */
myProfile.favoriteFoods.forEach(food => {
    let listItem = document.createElement("li");
    listItem.textContent = food;
    document.querySelector("#favorite-foods").appendChild(listItem);
});

/* Hobbies List */
const hobbiesList = document.getElementById("hobbies");
myProfile.hobbies.forEach(hobby => {
    const listItem = document.createElement("li");
    listItem.textContent = hobby;
    hobbiesList.appendChild(listItem);
});

/* Places Lived DataList */
const placesLivedList = document.getElementById("places-lived");
myProfile.placesLived.forEach(place => {
    const termElement = document.createElement("dt");
    termElement.textContent = place.place;

    const descriptionElement = document.createElement("dd");
    descriptionElement.textContent = place.length;

    placesLivedList.appendChild(termElement);
    placesLivedList.appendChild(descriptionElement);
});

document.addEventListener("DOMContentLoaded", function () {
    // Your existing code here
    document.getElementById("year").innerHTML = new Date().getFullYear();
    // ... other code ...
});

