document
  .getElementById("image-form")
  .addEventListener("submit", function (event) {
    // stop default action
    event.preventDefault();

    // get the image URL from the input
    const imageUrl = document.getElementById("image-url").value;

    // save the image URL to storage
    if (imageUrl) {
      chrome.storage.sync.set({ imageUrl: imageUrl }, function () {
        alert("Image URL saved!");
      });
    } else {
      alert("Please provide an image URL.");
    }
  });
