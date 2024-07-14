// This event listener waits for the DOM content to be fully loaded before executing its callback function.
document.addEventListener('DOMContentLoaded', function () {

    // Selects the <img> element inside the .hero .image section and assigns it to the heroImage variable.
    const heroImage = document.querySelector('.hero .image img');

    // Array containing URLs of the images that will be used in the carousel.
    const imageUrls = [
        'https://d1a9132atmzyve.cloudfront.net/image_143632_small.jpg?1658748286',
        'https://www.sunshinenewyork.com/images/photos/home.jpg',
        'https://winnie.imgix.net/47bd6773-5ae3-46ab-b19d-2f6f2dde396e?w=242&h=124&dpr=3&fit=crop&auto=compress',
        'https://media.licdn.com/dms/image/C4E1BAQFhp-ipaO0soA/company-background_10000/0/1584507505377/sunshine_daycare_center_cover?e=2147483647&v=beta&t=p_92rEz8h1Xy54XUiSXLAuBCL5vIGnn2iHAEvA0MWeY',
        'https://wpcdn.us-east-1.vip.tn-cloud.net/www.pittsburghparent.com/content/uploads/data-import/6e99a385/daycare-1050x700.jpg',
        'https://www.naeyc.org/sites/default/files/styles/page_header_media_large/public/102017/Public%20Policy%20Overview_2.jpg?itok=0f0oHaix',
        'https://winnie.imgix.net/54eaa4aa-b08a-44aa-9a35-9e1283c72e36?w=242&h=124&dpr=3&fit=crop&auto=compress'
    ];

    // Initializes the currentIndex variable to keep track of the currently displayed image.
    let currentIndex = 0;

    // This function changes the src attribute of heroImage to the next image URL in imageUrls array,
    // and updates the currentIndex to the next image index, looping back to the start if necessary.
    function changeImage() {
        heroImage.src = imageUrls[currentIndex];
        currentIndex = (currentIndex + 1) % imageUrls.length;
    }

    // Executes the changeImage function every 1000 milliseconds (1 second) using setInterval,
    // which creates a carousel effect by continuously updating the displayed image.
    setInterval(changeImage, 3000);

});
