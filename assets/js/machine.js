// Get all required elements
const productList = document.querySelector('.product-list');
const productName = document.getElementById('product-name');
const productVideo = document.getElementById('product-video');
const productImage = document.getElementById('product-image');
const productDescription = document.getElementById('product-description');

// Function to update product details
const updateProductDetails = (name, videoSrc, description, imageSrc) => {
    productName.textContent = name;
    productDescription.textContent = description;

    // Check if there is a video source, if not, show the image
    if (videoSrc) {
        productVideo.querySelector('source').src = videoSrc;
        productVideo.style.display = 'block';
        productVideo.style.width = '100%'; // Full width for CNC Machine
        productImage.style.display = 'none'; // Hide image if video is available
        productVideo.load(); // Reload the video so the new source plays
        productVideo.play();
    } else {
        productVideo.style.display = 'none'; // Hide video if no video source
        productImage.src = imageSrc; // Set image source

        // Apply specific styles for image centering for C/Z Roll Forming and PTW Machine
        productImage.style.display = 'block'; // Show the image
        productImage.style.maxWidth = '50%'; // Center image with 50% width
        productImage.style.margin = '0 auto'; // Center the image horizontally
    }
};

// Set default product details (CNC Machine) on page load
window.addEventListener('load', () => {
    updateProductDetails(
        "CNC MACHINE",
        "assets/images/cnc-machine.mp4",
        "The MAXPRO200 plasma cutting system offers fast cut speeds, consistent quality, and long consumable life using air or oxygen plasma. Designed for heavy-duty cutting and gouging, it maximizes productivity with automatic settings and tool-free transitions. It reduces costs with lower energy usage and longer consumable life. With easy operation, reliability, and low maintenance, it outperforms oxyfuel systems in speed and cost-efficiency.",
        ""
    );
});

// Event listener for product list items
productList.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        // Get machine data attributes from clicked list item
        const productVideoSrc = e.target.dataset.video;
        const productNameText = e.target.dataset.name;
        const productDescriptionText = e.target.dataset.description;
        const productImageSrc = e.target.dataset.image;

        // Update the details of the selected machine
        updateProductDetails(productNameText, productVideoSrc, productDescriptionText, productImageSrc);
    }
});



// Select all video elements
const videos = document.querySelectorAll('.media-video');

// Add event listeners for hover
videos.forEach(video => {
    // Play video when mouse enters (hover starts)
    video.addEventListener('mouseenter', () => {
        video.play();
    });

    // Pause video when mouse leaves (hover ends)
    video.addEventListener('mouseleave', () => {
        video.pause();
        video.currentTime = 0; // Optional: Reset to the beginning
    });
});