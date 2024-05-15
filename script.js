async function generateCatContent() {
  try {
    // Fetch cat images
    const response = await fetch(`https://shibe.online/api/cats?`);
    const responseJson = await response.json();

    // Create elements and append them directly to the document
    const container = document.createElement("div");
    container.classList.add("cat-container");

    for (const catUrl of responseJson) {
      // Create and append cat image
      let newCatImg = document.createElement("img");
      newCatImg.src = catUrl;
      newCatImg.classList.add("cat-image");
      newCatImg.classList.add("pfp");
      container.appendChild(newCatImg);

      // Create and append username
      const chance = new Chance();
      const randomWord = chance.word();
      const randomNumber = Math.floor(Math.random() * 500) + 1;

      let username = document.createElement("p");
      username.classList.add("username");
      username.textContent = randomWord + randomNumber;
      container.appendChild(username);

      // Fetch another cat image
      const secondResponse = await fetch(`https://shibe.online/api/cats?`);
      const secondResponseJson = await secondResponse.json();
      const secondCatUrl = secondResponseJson[0]; // Assuming the API returns only one image

      // Create and append the second cat image
      let newCatImg2 = document.createElement("img");
      newCatImg2.src = secondCatUrl;
      newCatImg2.classList.add("cat-image2");
      newCatImg2.classList.add("pic");
      container.appendChild(newCatImg2);

      // Create and append like icon
      let likeIcon = document.createElement("img");
      likeIcon.src = "bottom.png";
      likeIcon.classList.add("like-icon");
      container.appendChild(likeIcon);

      let like = document.createElement("img");
      like.src = "heart.png";
      like.classList.add("like");
      // Add event listener to handle click
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
    }

    // Find the image element with class "final"
    const finalImage = document.querySelector(".final");

    // Append container after the image with class "final"
    if (finalImage) {
      // Create a div to contain the generated content
      const contentContainer = document.createElement("div");
      contentContainer.classList.add("content-container");

      // Append the new content after the image with class "final"
      finalImage.parentNode.insertBefore(contentContainer, finalImage.nextSibling);
      contentContainer.appendChild(container);
    } else {
      // If there is no image with class "final", append the new content to the end of the body
      document.body.appendChild(container);
    }

  } catch (e) {
    console.error("Error:", e);
  }
}

for (let i = 0; i < 10; i++) {
  generateCatContent();
}

