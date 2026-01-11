/**
 * Automatic Image Loader - Replacement for PHP directory scanning
 * This script automatically loads images from predefined lists for each service
 * 
 * To add new images: Add the filename to the appropriate service array below
 */

const serviceImages = {
    'gassballons': [
        '1506607905143.jpg',
        '20170729_171033.jpg',
        'DSC01478.jpg',
        'IMG20161022174150.jpg',
        'IMG20161022174157.jpg',
        'IMG_20180314_194806.png',
        'IMG_20180314_194905.png',
        'IMG_20180314_195010.png',
        'IMG_20180314_195131.png',
        'Screenshot_2017-06-25-10-24-00-1.png'
    ],
    'photography': [
        'maxresdefault.jpg'
    ],
    'facepainting': [
        '20170715_182501.jpg',
        'DS02945.jpg',
        'DSC02954.jpg',
        'DSC02957.jpg',
        'DSC0296.jpg',
        'DSC02997.jpg',
        'DSC02f989.jpg',
        'DSC03d428.jpg',
        'DSC03d790.jpg',
        'DSC0947.jpg',
        'DSC0d3613.jpg',
        'DSC2931.jpg',
        'IMG20161022174257.jpg',
        'IMG20161022194725.jpg',
        'IMG20161022201928.jpg',
        'IMG20161022202007.jpg',
        'IMG20161022205028.jpg',
        'WhatsApp Image 2025-09-06 at 9.24.31 PM.jpeg',
        'WhatsApp Image 2025-09-06 at 9.24.32 PM.jpeg',
        'WhatsApp Image 2025-09-06 at 9.24.33 PM.jpeg'
    ],
    'halldecoration': [
        '001.jpeg',
        '002.jpeg',
        '003.jpeg',
        '004.jpeg',
        '20170715_180201.jpg',
        'Balloons-Now-Arch-03-Dallas-TX-1.jpg',
        'DSC01988.jpg',
        'DSC02395 - Copy.jpg',
        'DSC02573.jpg',
        'DSC03184.jpg',
        'DSC03331.jpg',
        'IMG_20171021_155226.jpg'
    ],
    'magicballons': [
        '20170604_182257.jpg',
        'IMG20160626115403.jpg',
        'IMG20160626131342.jpg',
        'IMG20160713203407.jpg',
        'IMG20161022204604.jpg',
        'IMG20161022204704.jpg',
        'IMG_20180314_180305.png',
        'IMG_20180314_180414.png',
        'IMG_20180314_195330.png'
    ]
    // Add more services here as you convert them
};

/**
 * Loads images for a specific service
 * @param {string} serviceName - The service name (folder name)
 * @param {string} containerId - The ID of the container to load images into
 * @param {string} altText - Alt text for images
 */
function loadServiceImages(serviceName, containerId = 'imageContainer', altText = 'service image') {
    const container = document.getElementById(containerId);
    const images = serviceImages[serviceName];
    
    if (!container || !images) {
        console.error(`Service '${serviceName}' not found or container missing`);
        $('.preloader').fadeOut(1000);
        return;
    }
    
    const imageFolder = `../../img/galary/${serviceName}/`;
    const promises = [];
    
    images.forEach(imageName => {
        const promise = new Promise((resolve) => {
            const img = new Image();
            img.onload = () => {
                const photoDiv = document.createElement('div');
                photoDiv.className = 'col-md-4 col-sm-6 photodiv';
                photoDiv.innerHTML = `
                    <a data-fancybox="gallery" href="${imageFolder}${imageName}">
                        <img class="lazy loaded" src="${imageFolder}${imageName}" alt="${altText}">
                    </a>
                `;
                container.appendChild(photoDiv);
                resolve();
            };
            img.onerror = () => {
                console.warn(`Image not found: ${imageFolder}${imageName}`);
                resolve(); // Skip missing images
            };
            img.src = imageFolder + imageName;
        });
        promises.push(promise);
    });
    
    Promise.all(promises).then(() => {
        $('.preloader').fadeOut(3000);
        // Re-initialize fancybox for dynamically loaded images
        $("[data-fancybox]").fancybox({
            openEffect: "none",
            closeEffect: "none"
        });
    });
}

/**
 * Easy way to add new images to a service
 * Just call this function with the service name and image filename
 */
function addImageToService(serviceName, imageName) {
    if (!serviceImages[serviceName]) {
        serviceImages[serviceName] = [];
    }
    if (!serviceImages[serviceName].includes(imageName)) {
        serviceImages[serviceName].push(imageName);
        console.log(`Added ${imageName} to ${serviceName} service`);
    }
}

// Make functions globally available
window.loadServiceImages = loadServiceImages;
window.addImageToService = addImageToService;
