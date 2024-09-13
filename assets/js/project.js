// Get the project list and project details elements
const projectList = document.querySelector('.project-list');
const projectDetails = document.querySelector('.project-details');

// Get the project list items
const projectItems = projectList.querySelectorAll('li');

// Add event listeners to the project list items
projectItems.forEach((item) => {
  item.addEventListener('click', (e) => {
    // Get the project data from the clicked item
    const projectName = item.getAttribute('data-name');
    const projectVideo = item.getAttribute('data-video');
    const projectImage1 = item.getAttribute('data-image1');
    const projectImage2 = item.getAttribute('data-image2');
    const projectImage3 = item.getAttribute('data-image3');
    const projectImage4 = item.getAttribute('data-image4');

    // Update the project details
    document.querySelector('#project-name').textContent = projectName;
    document.querySelector('#project-image-1').src = projectImage1;
    document.querySelector('#project-image-2').src = projectImage2;
    document.querySelector('#project-image-3').src = projectImage3;
    document.querySelector('#project-image-4').src = projectImage4;

    // Update the video source
    const video = document.querySelector('video');
    video.src = projectVideo;
    video.play();
    video.muted = true;
    video.width = 800; // Set the video width
    video.height = 600; // Set the video height

    // Show the project details
    projectDetails.style.display = 'block';
  });
});

// Show the first project by default
const firstProjectItem = projectItems[0];
const firstProjectName = firstProjectItem.getAttribute('data-name');
const firstProjectVideo = firstProjectItem.getAttribute('data-video');
const firstProjectImage1 = firstProjectItem.getAttribute('data-image1');
const firstProjectImage2 = firstProjectItem.getAttribute('data-image2');
const firstProjectImage3 = firstProjectItem.getAttribute('data-image3');
const firstProjectImage4 = firstProjectItem.getAttribute('data-image4');

document.querySelector('#project-name').textContent = firstProjectName;
document.querySelector('#project-video').src = firstProjectVideo;
document.querySelector('#project-image-1').src = firstProjectImage1;
document.querySelector('#project-image-2').src = firstProjectImage2;
document.querySelector('#project-image-3').src = firstProjectImage3;
document.querySelector('#project-image-4').src = firstProjectImage4;






// Get the photo items
const photoItems = document.querySelectorAll('.photo-item');

// Add event listeners to the photo items
photoItems.forEach((item) => {
  item.addEventListener('click', (e) => {
    // Get the project data from the clicked item
    const projectName = item.getAttribute('data-name');
    const projectImage1 = item.getAttribute('data-image1');
    const projectImage2 = item.getAttribute('data-image2');
    const projectImage3 = item.getAttribute('data-image3');
    const projectImage4 = item.getAttribute('data-image4');
    const projectVideo = item.getAttribute('data-video');

    // Update the project details
    document.querySelector('#project-name').textContent = projectName;
    document.querySelector('#project-image-1').src = projectImage1;
    document.querySelector('#project-image-2').src = projectImage2;
    document.querySelector('#project-image-3').src = projectImage3;
    document.querySelector('#project-image-4').src = projectImage4;

    // Update the video source
    const video = document.querySelector('video');
    video.src = projectVideo;
    video.play();
    video.muted = true;
    video.width = 800; // Set the video width
    video.height = 600; // Set the video height

    // Show the project details
    document.querySelector('.project-details').style.display = 'block';
    document.getElementById('project-details').scrollIntoView({ behavior: 'smooth' });
  });
});