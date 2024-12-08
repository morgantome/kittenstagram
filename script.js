async function generateCatContent() {
  try {
    console.log("Starting to generate cat content...");

    // Fetch cat image
    const response = await fetch('https://cataas.com/cat');
    if (!response.ok) {
      console.error('Network response was not ok:', response.statusText);
      throw new Error('Network response was not ok');
    }

    // Convert the response into a blob, which is the actual image data
    const imageData = await response.blob();
    const catUrl = URL.createObjectURL(imageData);

    console.log("Processing cat URL:", catUrl);

    // Create container for displaying cat contents
    const container = document.createElement("div");
    container.classList.add("cat-container");

    console.log("Created container:", container);

    // Create and append cat profile picture
    let newCatImg = document.createElement("img");
    newCatImg.src = catUrl;
    newCatImg.classList.add("cat-image", "pfp");
    container.appendChild(newCatImg);

    // Generate and append a random username
    const chance = new Chance();
    const randomWord = chance.word();
    const randomNumber = Math.floor(Math.random() * 500) + 1;
    let username = document.createElement("p");
    username.classList.add("username");
    username.textContent = `${randomWord}${randomNumber}`;
    container.appendChild(username);

    // Create and append main cat picture (same as profile picture in this example)
    let newCatImg2 = document.createElement("img");
    newCatImg2.src = catUrl;
    newCatImg2.classList.add("cat-image2", "pic");
    container.appendChild(newCatImg2);

    // Create and append like icon
    let likeIcon = document.createElement("img");
    likeIcon.src = "bottom.png";
    likeIcon.classList.add("like-icon");
    container.appendChild(likeIcon);

    // Create and append heart icon with click event
    let like = document.createElement("img");
    like.src = "heart.png";
    like.classList.add("like");
    like.addEventListener("click", function() {
      if (like.src.includes("heart.png")) {
        like.src = "heartonclick.png";
        like.classList.add("like2");
      } else {
        like.src = "heart.png";
        like.classList.remove("like2");
      }
    });
    container.appendChild(like);

    console.log("Appended all elements for cat.");

    // Find the image element with class "final"
    const finalImage = document.querySelector(".final");
    if (finalImage) {
      finalImage.parentNode.insertBefore(container, finalImage.nextSibling);
      console.log("Container inserted after the .final element.");
    } else {
      console.warn("Final image not found. Appending container to the end of the body.");
      document.body.appendChild(container);
    }

    console.log("Appended container to the DOM.");

  } catch (e) {
    console.error("Error:", e);
  }
}

// Call generateCatContent function multiple times after the DOM is loaded
document.addEventListener('DOMContentLoaded', (event) => {
  console.log("DOM fully loaded. Starting to generate contents.");
  for (let i = 0; i < 10; i++) {
    generateCatContent().catch(err => console.error("Error in generateCatContent:", err)); // Ensuring errors in async function are caught
  }
});
