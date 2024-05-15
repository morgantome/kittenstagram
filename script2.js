async function getCats(subject) {
  try {
      let catImgsDiv = document.querySelector("#cat-imgs");
      catImgsDiv.innerHTML = ""; 

     
      const numImages = 15;

      let uniqueImageUrls = new Set();

    
      let loadingGif = document.querySelector("#loading-gif");
      loadingGif.style.display = "block";

     
      while (uniqueImageUrls.size < numImages) {
    
          const response = await fetch(`https://cataas.com/cat${subject}`);
          const imageData = await response.blob(); 
          const imageUrl = URL.createObjectURL(imageData); 

          
          if (uniqueImageUrls.has(imageUrl)) {
              continue;
          }

          console.log("fetched img");

         
          let newCatImg = document.createElement("img");
          newCatImg.src = imageUrl;
          newCatImg.classList.add("catimgsexplore"); 
          catImgsDiv.appendChild(newCatImg);

         
          uniqueImageUrls.add(imageUrl);

          console.log("appended");
      }

      
      loadingGif.style.display = "none";

  } catch (e) {
      console.error("Error in getCats function:", e);
     
  }
}


getCats("");