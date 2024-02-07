function setIframeHeight() {
    var iframe = document.getElementById('stripeIframe');
    if (iframe) {
        var screenHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight || 600;
        var targetHeight = screenHeight * 0.8; // Adjust the multiplier as needed

        // Ensure a minimum height
        targetHeight = Math.max(targetHeight, 600); // Set a minimum height, adjust as needed

        iframe.style.height = targetHeight + 'px';
    }
}

// Set initial height
setIframeHeight();

// Update height on window resize
window.addEventListener('resize', setIframeHeight);

// Log to console for debugging
var iframe = document.getElementById('stripeIframe');
if (iframe) {
    console.log("Iframe found:", iframe);
} else {
    console.error("Iframe not found!");
}

// Display a placeholder message if the iframe is not loaded
iframe.addEventListener('load', function () {
    console.log("Iframe loaded successfully!");
});

iframe.addEventListener('error', function () {
    console.error("Error loading iframe content. Check the iframe source URL.");
    // Display a placeholder message
    iframe.contentDocument.body.innerHTML = "<p>Error loading pricing table. Please try again later.</p>";
});
