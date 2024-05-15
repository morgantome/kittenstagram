async function generateCatContent() {
  try {
    // Fetch cat image
    const response = await fetch(`https://cataas.com/cat/gif`);
    const blob = await response.blob();

    // Create container for cat content
    const container = document.createElement("div");
    container.classList.add("cat-container");
    container.style.width = "500px";
    container.style.height = "800px";
    container.style.border = "1px solid grey";
    container.style.marginBottom = "100px";
    container.style.marginTop = "100px";
    container.style.marginLeft = "100px";
    container.style.display = "flex";
    container.style.alignItems = "center";
    container.style.justifyContent = "center";

    // Create cat image
    let catImg = document.createElement("img");
    catImg.src = URL.createObjectURL(blob);
    catImg.classList.add("cat-image");
    catImg.style.width = "500px";
    catImg.style.height = "auto"; // Set height to auto

    // Append cat image to container
    container.appendChild(catImg);

    // Find the div with class "generated-content"
    const generatedContentDiv = document.querySelector(".generated-content");

    // Create a wrapper div to contain the original container and its pair
    const wrapper = document.createElement("div");
    wrapper.classList.add("container-wrapper");
    wrapper.style.display = "flex";

    // Append the wrapper to the "generated-content" div
    generatedContentDiv.appendChild(wrapper);

    // Append the original container to the wrapper
    wrapper.appendChild(container);

    // Create another container to the right of the current container
    const cont2 = document.createElement("div");
    cont2.classList.add("cont2");
    cont2.style.width = "50px"; // Adjust width as needed
    cont2.style.height = "800px"; // Adjust height as needed
    cont2.style.marginBottom = "100px";
    cont2.style.marginTop = "100px";
    cont2.style.display = "flex";
    cont2.style.alignItems = "center";
    cont2.style.justifyContent = "center";


    let likenum = document.createElement("p");
    likenum.textContent= "\n" + (Math.floor(Math.random() * 100) + 1) + "k";


    cont2.appendChild(likenum);

    // Append the second container to the wrapper
    let like = document.createElement("img");
      like.src = "heart.png";
      like.classList.add("likethird");
    likenum.classList.add("textpage3");
      // Add event listener to handle click
      like.addEventListener("click", function() {
        if (like.src.includes("heart.png")) {
          like.src = "heartonclick.png";
          like.classList.add("likefourth");
          likenum.classList.add("textpage4");
        } else {
          like.src = "heart.png";
          like.classList.remove("likefourth");
          likenum.classList.remove("textpage4");
           
        }
      });
      cont2.appendChild(like); 
    

   

   

    
    wrapper.appendChild(cont2);

  } catch (e) {
    console.error("Error:", e);
  }
}

// Call generateCatContent function when the page loads
window.onload = function () {
  for (let i = 0; i < 10; i++) {
    generateCatContent();
  }
};