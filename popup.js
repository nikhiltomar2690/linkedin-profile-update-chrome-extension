document
  .getElementById("image-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const imageUrl = document.getElementById("image-url").value;

    if (imageUrl) {
      chrome.storage.sync.set({ imageUrl: imageUrl }, function () {
        alert("Image URL saved!");
      });
    } else {
      alert("Please provide an image URL.");
    }
  });
