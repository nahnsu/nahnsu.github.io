<script>
document.addEventListener('DOMContentLoaded', function() {
  const images = document.querySelectorAll('.carousel-images img');
  let currentIndex = 0;

  // Function to update which image is visible
  function showImage(index) {
    images.forEach((img, i) => {
      img.classList.toggle('active', i === index);
    });
  }

  // Next button functionality
  document.querySelector('.next').addEventListener('click', function() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  });

  // Previous button functionality
  document.querySelector('.prev').addEventListener('click', function() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
  });
});
</script>
