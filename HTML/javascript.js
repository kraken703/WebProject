<script> 
  // Get all the links in the navigation bar
  const links = document.querySelectorAll('nav a');

  // Loop through the links and add a click event listener to each one
  links.forEach(link => {
    link.addEventListener('click', event => {
      // Prevent the default link behavior
      event.preventDefault();

      // Get the ID of the section to display
      const sectionId = link.getAttribute('href');

      // Hide all the sections
      document.querySelectorAll('main section').forEach(section => {
        section.style.display = 'none';
      });

      // Show the section with the corresponding ID
      document.querySelector(sectionId).style.display = 'block';
    });
  });
</script>
