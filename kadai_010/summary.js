// summary.js

$(document).ready(function() {
    // This function will be executed when the document is ready

    // Change text color when "文字色変化" button is clicked
    $('#change-color').on('click', function() {
        // Update the text color to the desired color (e.g., red)
        $('#target').css('color', 'red');
    });

    // Change text content when "文字内容変化" button is clicked
    $('#change-text').on('click', function() {
        // Update the text content to the desired text
        $('#target').text('Hello'); // Change text content
    });

    // Fade out the paragraph when "フェードアウト" button is clicked
    $('#fade-out').on('click', function() {
        $('#target').fadeOut(); // Fade out the element
    });

    // Fade in the paragraph when "フェードイン" button is clicked
    $('#fade-in').on('click', function() {
        $('#target').fadeIn(); // Fade in the element
    });
});
