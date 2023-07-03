const apiKey = "hweork3LzCYa9Xpp73DNz7U7qSn2IT6epwik0sZe";

fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`)
  .then((response) => response.json())
  .then((data) => {
    if (data.media_type === "image") {
      const imageElement = document.createElement("img");
      imageElement.src = data.url;
      imageElement.alt = data.title;
      document.getElementById("image-container").appendChild(imageElement);
      document.getElementById("data").innerHTML;
    } else {
      console.log("Today's media is not an image.");
    }
  })
  .catch((error) => console.log("Error fetching NASA API:", error));
