// Text replacement configuration
const replacements = [
    { find: /\bUranus\b/g, replace: 'Your anus' },
    { find: /\buranus\b/g, replace: 'your anus' }
];

// Function to replace text in a text node
function replaceText(textNode) {
    let text = textNode.textContent;
    let changed = false;

    for (const { find, replace } of replacements) {
        if (find.test(text)) {
            text = text.replace(find, replace);
            changed = true;
        }
    }

    if (changed) {
        textNode.textContent = text;
    }
}

// Function to process a DOM node and its children
function processNode(node) {
    // Skip script and style elements
    if (node.nodeName === 'SCRIPT' || node.nodeName === 'STYLE') {
        return;
    }

    // Process text nodes
    if (node.nodeType === Node.TEXT_NODE) {
        replaceText(node);
        return;
    }

    // Recursively process child nodes
    for (const child of node.childNodes) {
        processNode(child);
    }
}

// Initial page processing
processNode(document.body);

// Set up MutationObserver for dynamic content
const observer = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
        // Process added nodes
        if (mutation.addedNodes.length) {
            for (const node of mutation.addedNodes) {
                processNode(node);
            }
        }
    }
});

// Start observing the document with the configured parameters
observer.observe(document.body, {
    childList: true,
    subtree: true
});

// Error handling for the observer
try {
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
} catch (error) {
    console.error('Error setting up MutationObserver:', error);
}
