function detectTextFromTextarea(textareaId) {
    // Get the value of the textarea.
    var textValue = document.getElementById(textareaId).value;

    // Check if the textarea is empty.
    if (textValue === "") {
        // The textarea is empty.
        return;
    }

    // Alert the text value.
    alert(textValue);
}

// Call the function.
detectTextFromTextarea("myTextarea");

document.getElementById('lower-case').addEventListener('click', function () {
    var textarea = document.getElementById('myTextarea');
    var lowercaseText = textarea.value.toLowerCase();
    textarea.value = lowercaseText;
});

document.getElementById('upper-case').addEventListener('click', function () {
    var textarea = document.getElementById('myTextarea');
    var uppercaseText = textarea.value.toUpperCase();
    textarea.value = uppercaseText;
});

document.getElementById('proper-case').addEventListener('click', function () {
    var textarea = document.getElementById('myTextarea');
    var words = textarea.value.split(" ");
    var capitalizedWords = words.map(function(word) {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });
    var properCase = capitalizedWords.join(" ");
    textarea.value = properCase;
});

document.getElementById('sentence-case').addEventListener('click', function () {
    var textarea = document.getElementById('myTextarea');
    var sentenceCase = textarea.value.toLowerCase().replace(/(^\w{1})|(\.\s*\w{1})/g, function (match) {
        return match.toUpperCase();
    });
    textarea.value = sentenceCase;
});

document.getElementById('save-text-file').addEventListener('click', function () {
    var textarea = document.getElementById('myTextarea');
    var textToSave = textarea.value;
    var hiddenElement = document.createElement('a');
    hiddenElement.href = 'data:attachment/text,' + encodeURI(textToSave);
    hiddenElement.target = '_blank';
    hiddenElement.download = 'text.txt';
    hiddenElement.click();

}
);
