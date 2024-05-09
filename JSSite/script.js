  
  function updateImages() {
    var images = document.querySelectorAll('.gallery img');
    images.forEach(function(image) {
      if (image.alt === 'Playing basketball') {
        image.src = 'images/tennis.jpg';
        image.alt = 'Playing tennis';
      } else if (image.alt === 'Watching movies') {
        image.src = 'images/tv.jpg';
        image.alt = 'Watching TV';
      } else if (image.alt === 'Reading books') {
        image.src = 'images/kindle.jpg';
        image.alt = 'Using Kindle';
      } else if (image.alt === 'Listening to music') {
        image.src = 'images/podcast.jpg';
        image.alt = 'Listening to Podcasts';
      }
    });
  }
  
  function resetGallery() {
    var images = document.querySelectorAll('.gallery img');
    images.forEach(function(image) {
        if (image.alt === 'Playing tennis') {
          image.src = 'images/basketball.jpeg';
          image.alt = 'Playing basketball';
        } else if (image.alt === 'Watching TV') {
          image.src = 'images/movies.webp';
          image.alt = 'Watching movies';
        } else if (image.alt === 'Using Kindle') {
          image.src = 'images/books.avif';
          image.alt = 'Reading books';
        } else if (image.alt === 'Listening to Podcasts') {
          image.src = 'images/music.jpeg';
          image.alt = 'Listening to music';
        }
      });
  }
  
  function toggleAccordion() {
    var accordion = document.querySelector('.accordion');
    accordion.addEventListener('click', function(event) {
      var target = event.target;
      if (target.tagName === 'H2') {
        target.classList.toggle('active');
        var panel = target.nextElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + 'px';
        }
      }
    });
  }

  function checkValue() {
    const input = document.getElementById("required-field");
    const errorMessage = document.getElementById("error-message");
    
    if (isNaN(input.value)) {
      errorMessage.innerHTML = "Please enter a valid number";
      errorMessage.style.color = "red";
      input.style.borderColor = "red";
    } else {
      errorMessage.innerHTML = "";
      input.style.borderColor = "";
    }
  }
  

const accordionHeaders = document.querySelectorAll(".accordion h2");

accordionHeaders.forEach(header => {
  header.addEventListener("click", () => {
    header.classList.toggle("active");

    const content = header.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
});

  toggleAccordion();
  