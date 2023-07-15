// Import the necessary modules for testing
const assert = require('assert');
const { JSDOM } = require('jsdom');
const fs = require('fs');

// Read the HTML file
const html = fs.readFileSync('../index.html', 'utf-8');

// Initialize JSDOM
const { window } = new JSDOM(html);
const { document } = window;

// Load the app.js file
const appJs = fs.readFileSync('../src/scripts/app.js', 'utf-8');
eval(appJs);

// Helper function to simulate button clicks
function simulateButtonClick(buttonId) {
    const button = document.getElementById(buttonId);
    button.dispatchEvent(new window.Event('click'));
}

// Test the detectTextFromTextarea function
describe('detectTextFromTextarea', function() {
    it('should alert the text value', function() {
        const textareaId = 'myTextarea';
        const textValue = 'Hello, World!';
        document.getElementById(textareaId).value = textValue;

        let alertedValue;
        window.alert = (value) => {
            alertedValue = value;
        };

        detectTextFromTextarea(textareaId);
        assert.strictEqual(alertedValue, textValue);
    });

    it('should not alert when the textarea is empty', function() {
        const textareaId = 'myTextarea';
        document.getElementById(textareaId).value = '';

        let alertCalled = false;
        window.alert = () => {
            alertCalled = true;
        };

        detectTextFromTextarea(textareaId);
        assert.strictEqual(alertCalled, false);
    });
});

// Test the text transformations
describe('Text Transformations', function() {
    beforeEach(function() {
        document.getElementById('myTextarea').value = 'Hello, world!';
    });

    it('should convert text to lowercase', function() {
        simulateButtonClick('lower-case');
        assert.strictEqual(document.getElementById('myTextarea').value, 'hello, world!');
    });

    it('should convert text to uppercase', function() {
        simulateButtonClick('upper-case');
        assert.strictEqual(document.getElementById('myTextarea').value, 'HELLO, WORLD!');
    });

    it('should convert text to proper case', function() {
        simulateButtonClick('proper-case');
        assert.strictEqual(document.getElementById('myTextarea').value, 'Hello, World!');
    });

    it('should convert text to sentence case', function() {
        simulateButtonClick('sentence-case');
        assert.strictEqual(document.getElementById('myTextarea').value, 'Hello, world!');
    });
});

