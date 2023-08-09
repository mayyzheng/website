//regular overlay

const artworkPreviews = document.querySelectorAll('.artwork-preview');
const overlay = document.querySelector('.overlay');
const overlayContent = document.querySelector('.overlay-content');
const enlargedImage = document.querySelector('.enlarged-image');
const enlargedDescription = document.querySelector('.enlarged-description');
const closeButton = document.querySelector('.close-button');

artworkPreviews.forEach(preview => {
    preview.addEventListener('click', () => {
        const image = preview.querySelector('.artwork');
        const description = preview.querySelector('.description').innerHTML;

        enlargedImage.src = image.src;
        enlargedDescription.innerHTML = description;

        overlay.style.display = 'flex';
    });
});

closeButton.addEventListener('click', () => {
    overlay.style.display = 'none';
});


//booklet overlay
  const booklet = document.getElementById("booklet1");
  const prevBtn = document.getElementById("prevBtn1");
  const nextBtn = document.getElementById("nextBtn1");
  const closeBtn = document.getElementById("closeBtn1");

  let currentPage = 0;

  function flipPage(direction) {
    if (direction === "prev") {
      currentPage = Math.max(currentPage - 1, 0);
    } else if (direction === "next") {
      currentPage = Math.min(currentPage + 1, booklet.children.length - 1);
    }
    booklet.style.transform = `rotateY(${currentPage * -180}deg)`;
  }

  prevBtn.addEventListener("click", () => flipPage("prev"));
  nextBtn.addEventListener("click", () => flipPage("next"));
  closeBtn.addEventListener("click", () => {
    document.getElementById("bookletOverlay1").classList.remove("active");
  });


