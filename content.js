// Text replacement configuration
const replacements = [
    // Original Uranus replacements
    { find: /\bUranus\b/g, replace: 'Your anus' },
    { find: /\buranus\b/g, replace: 'your anus' },
    
    // New astronomical puns
    { find: /\bSaturn's rings\b/g, replace: "Saturn's bling" },
    { find: /\bsaturn's rings\b/g, replace: "saturn's bling" },
    { find: /\bDeep space\b/g, replace: 'Deep face' },
    { find: /\bdeep space\b/g, replace: 'deep face' },
    { find: /\bBig Bang\b/g, replace: 'Big [REDACTED]' },
    { find: /\bbig bang\b/g, replace: 'big [REDACTED]' },
    { find: /\bPenetrating radiation\b/g, replace: 'Penetrating [REDACTED]' },
    { find: /\bpenetrating radiation\b/g, replace: 'penetrating [REDACTED]' },
    { find: /\bDark matter\b/g, replace: 'Dank matter' },
    { find: /\bdark matter\b/g, replace: 'dank matter' },
    { find: /\bHeavenly body\b/g, replace: 'Heavenly booty' },
    { find: /\bheavenly body\b/g, replace: 'heavenly booty' },
    { find: /\bProbe\b/g, replace: '[REDACTED]' },
    { find: /\bprobe\b/g, replace: '[REDACTED]' },
    { find: /\bBlack hole\b/g, replace: 'Brown hole' },
    { find: /\bblack hole\b/g, replace: 'brown hole' }
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
