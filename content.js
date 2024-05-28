function changeProfilePictures(newProfilePictureUrl) {
  const profilePictures = document.querySelectorAll(
    "img.EntityPhoto-circle-0, img.EntityPhoto-circle-2,img.EntityPhoto-circle-1,img.EntityPhoto-square-2,img.EntityPhoto-square-0,img.EntityPhoto-circle-3,img.global-nav__me-photo,img.EntityPhoto-circle-5"
  );
  profilePictures.forEach((img) => {
    img.src = newProfilePictureUrl;
    img.srcset = `${newProfilePictureUrl} 1x, ${newProfilePictureUrl} 2x`;
  });
}

// Listen for changes in storage and update the profile pictures
chrome.storage.sync.get(["imageUrl"], function (result) {
  if (result.imageUrl) {
    changeProfilePictures(result.imageUrl);
  }
});

chrome.storage.onChanged.addListener(function (changes, namespace) {
  if (changes.imageUrl) {
    const newProfilePictureUrl = changes.imageUrl.newValue;
    changeProfilePictures(newProfilePictureUrl);
  }
});

// Run the function when the page is loaded
window.addEventListener("load", function () {
  chrome.storage.sync.get(["imageUrl"], function (result) {
    if (result.imageUrl) {
      changeProfilePictures(result.imageUrl);
    }
  });
});

// Also run the function when the user scrolls, since LinkedIn dynamically loads content
window.addEventListener("scroll", function () {
  chrome.storage.sync.get(["imageUrl"], function (result) {
    if (result.imageUrl) {
      changeProfilePictures(result.imageUrl);
    }
  });
});
