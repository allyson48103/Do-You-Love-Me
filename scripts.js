// Click YES button
function clickYesButton() {
    // Hide the question and buttons
    document.querySelector('h1').classList.add('hidden');
    document.getElementById('yes-button').classList.add('hidden');
    document.getElementById('no-button').classList.add('hidden');

    // Show the "I love you too!" message
    const loveMessage = document.getElementById('love-message');
    loveMessage.classList.remove('hidden');
    loveMessage.classList.add('show');

    // Trigger the heart animation
    startHeartAnimation();
}

// Trigger heart animation
function startHeartAnimation() {
    const animation = lottie.loadAnimation({
        container: document.getElementById('heart-animation'), // Target container
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: './animation.json' // Replace with your Lottie JSON file path
    });

    // Show the animation container
    const heartContainer = document.getElementById('heart-animation');
    heartContainer.classList.remove('hidden');
    heartContainer.classList.add('show');
    heartContainer.style.zIndex = 1000; // Ensure it's above everything
}

// Move NO button on hover
function hoverNoButton() {
    // Check if buttons are disabled
    const noButton = document.getElementById('no-button');
    if (noButton.classList.contains('hidden')) return;

    // Get viewport dimensions
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    // Calculate random position for the NO button within the viewport
    const buttonWidth = noButton.offsetWidth;
    const buttonHeight = noButton.offsetHeight;

    // Ensure the button stays visible
    const randomX = Math.random() * (viewportWidth - buttonWidth);
    const randomY = Math.random() * (viewportHeight - buttonHeight);

    // Set the new position
    noButton.style.position = 'absolute';
    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;
}

// Move NO button on hover (or touchstart for mobile)
function hoverNoButton() {
    // Check if buttons are hidden
    const noButton = document.getElementById('no-button');
    if (noButton.classList.contains('hidden')) return;

    // Get viewport dimensions
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    // Calculate random position for the NO button within the viewport
    const buttonWidth = noButton.offsetWidth;
    const buttonHeight = noButton.offsetHeight;

    // Ensure the button stays visible within screen bounds
    const randomX = Math.random() * (viewportWidth - buttonWidth);
    const randomY = Math.random() * (viewportHeight - buttonHeight);

    // Set the new position for the NO button
    noButton.style.position = 'absolute';
    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;
}
