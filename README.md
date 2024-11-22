# Uranus Replacer Chrome Extension

A fun Chrome extension that replaces astronomical terms with humorous alternatives on any webpage you visit.

## Features
- Automatically replaces "Uranus" with "Your anus"
- Additional amusing astronomical replacements:
  - "Saturn's rings" → "Saturn's bling"
  - "Deep space" → "Deep face"
  - "Big Bang" → "Big [REDACTED]"
  - And more!
- Works on any webpage
- Real-time text replacement for dynamic content
- Case-sensitive replacements

## Installation
1. Download or clone this repository
2. Open Chrome and go to `chrome://extensions/`
3. Enable "Developer mode" in the top right
4. Click "Load unpacked" and select the extension directory

## How It Works
The extension uses content scripts and MutationObserver to dynamically replace text on webpages. It maintains the case sensitivity of the original text and works with dynamically loaded content.

## Technical Details
- Built with Chrome Extension Manifest V3
- Uses MutationObserver for dynamic content updates
- SVG-based icons for crisp display at all sizes
- Minimal permissions required (only activeTab)

## Contributing
Feel free to submit issues, fork the repository, and create pull requests for any improvements.

## License
MIT License

Copyright (c) 2024 Uranus Replacer

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Credits
Created for educational and entertainment purposes only.
