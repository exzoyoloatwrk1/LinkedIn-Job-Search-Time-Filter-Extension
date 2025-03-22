# LinkedIn Job Search Time Filter Extension

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=flat&logo=javascript&logoColor=%23F7DF1E)
![Chrome Web Store](https://img.shields.io/badge/Chrome-Extension-green)
![Firefox Add-ons](https://img.shields.io/badge/Firefox-Add--on-orange)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)

<p align="center">
  <img src="docs/images/demo.gif" alt="Extension Demo" width="800"/>
</p>

## 🎯 Overview

A browser extension that enhances LinkedIn's job search functionality by adding granular time filter options. Built with vanilla JavaScript, this extension demonstrates DOM manipulation, event handling, and seamless integration with existing web applications.

## ⭐ Project Stats
- 🔍 Solves real-world problem of job search timing
- 🔧 Built with Pure JavaScript - no external dependencies
- 🌐 Cross-browser support (Chrome, Firefox, Edge)
- 🔒 Privacy-focused with minimal permissions
- ⚡ Lightweight and performant

## 🚀 Features

### Core Functionality
```javascript
// Example of time parameter handling
const THIRTY_MINUTES = 1800;  // 30 * 60 seconds
const ONE_HOUR = 3600;      // 60 * 60 seconds

// Dynamic URL parameter management
url.searchParams.set('f_TPR', `r${seconds}`);
```

- ⏰ Custom time filters: 30 minutes and 1 hour options
- 🔄 Seamless integration with LinkedIn's native UI
- 💾 Persistent state management across page navigation
- 📦 Zero external dependencies

## 🛠️ Technical Implementation

### Architecture
```plaintext
├── src/                    # Source files
│   ├── content.js         # Core extension logic
│   └── utils/            # Utility functions
├── manifest.json          # Chrome extension configuration
├── manifest-firefox.json  # Firefox-specific manifest
├── icons/                # Extension icons
│   ├── icon48.png
│   └── icon128.png
├── tests/                # Test files
└── docs/                 # Documentation
```

### Technical Challenges Solved

1. **DOM Synchronization**
   - Implemented MutationObserver for dynamic content
   - Maintained UI state across page refreshes

2. **Browser Compatibility**
   - Cross-browser manifest configurations
   - Consistent behavior across platforms

3. **Performance Optimization**
   - Event delegation for efficient handling
   - Minimal DOM operations

## 💻 Development

### Prerequisites
- Node.js (for development tools)
- Chrome or Firefox browser
- Basic knowledge of JavaScript and browser extensions

### Local Development
```bash
# Clone the repository
git clone https://github.com/exzoyoloatwrk1/LinkedIn-Job-Search-Time-Filter-Extension.git
cd LinkedIn-Job-Search-Time-Filter-Extension

# Install dependencies
npm install

# Run tests
npm test

# Build extension
npm run build
```

### Installation for Testing

#### Chrome
1. Open `chrome://extensions/`
2. Enable Developer mode
3. Click "Load unpacked"
4. Select the `dist` directory

#### Firefox
1. Open `about:debugging`
2. Click "This Firefox"
3. Click "Load Temporary Add-on"
4. Select `manifest-firefox.json`

## 🗺️ Project Roadmap

### Phase 1 (Current)
- ✅ Basic time filter functionality
- ✅ Cross-browser support
- ✅ Privacy-focused implementation

### Phase 2 (Planned)
- 📋 Customizable time ranges
- 📋 User preferences storage
- 📋 Enhanced UI/UX

### Phase 3 (Future)
- 📋 Real-time notifications
- 📋 Job analytics
- 📋 Integration with other job platforms

## 🧪 Testing

```bash
# Run unit tests
npm run test:unit

# Run integration tests
npm run test:integration

# Run all tests
npm test
```

## 📊 Code Quality

This project adheres to:
- ESLint for code quality
- Prettier for code formatting
- Mozilla Add-on guidelines
- Chrome Extension best practices

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

1. Fork the repository
2. Create your feature branch
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. Commit your changes
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```
4. Push to the branch
   ```bash
   git push origin feature/AmazingFeature
   ```
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📬 Contact

Your Name - [@YourTwitter](https://twitter.com/yourtwitter) - email@example.com

Project Link: [https://github.com/exzoyoloatwrk1/LinkedIn-Job-Search-Time-Filter-Extension](https://github.com/exzoyoloatwrk1/LinkedIn-Job-Search-Time-Filter-Extension)

## 🙏 Acknowledgments

- LinkedIn for providing the platform
- Chrome and Firefox extension documentation
- All contributors and users of this extension

## 🚀 Be First to Apply for Jobs

Get an edge in your job search by finding the most recently posted positions before other applicants. This extension adds two crucial time filters to LinkedIn's job search:

- ⚡ **Past 30 minutes** - Be among the first applicants for newly posted positions
- 🕐 **Past hour** - Catch fresh opportunities while they're hot

## Why You Need This

1. **Early Bird Advantage**
   - Studies show applications submitted within the first hour have up to 8x higher chance of getting a response
   - Many recruiters review applications in chronological order
   - Some positions are filled within hours of posting

2. **Save Time**
   - No need to manually check LinkedIn every few hours
   - Quickly filter to see only the newest job postings
   - Avoid applying to older listings that may already have hundreds of applicants

3. **Easy to Use**
   - Seamlessly integrates with LinkedIn's existing job search interface
   - No configuration needed
   - Works automatically on LinkedIn jobs pages

## How It Works

1. Visit LinkedIn's job search page
2. Click the "Past 24 hours" dropdown
3. You'll see two new options:
   - "Past 30 minutes"
   - "Past hour"
4. Select either option to see the most recent job postings

## Installation

### Chrome, Edge, Opera, or Brave
1. Install from the Chrome Web Store [Link coming soon]
2. That's it! The extension will automatically work on LinkedIn

### Firefox
1. Install from Firefox Add-ons [Link coming soon]
2. The extension will automatically activate on LinkedIn

## Privacy & Security

- ✅ No data collection
- ✅ No tracking
- ✅ Works entirely locally in your browser
- ✅ Only runs on LinkedIn job search pages
- ✅ Minimal permissions required
- 
## 🎯 Support Me

If you find this extension helpful, you can buy me a coffee to support my work:

[!["Buy Me A Coffee"](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://buymeacoffee.com/kumarutkaro)
Found a bug or have a suggestion? Please open an issue on our GitHub repository.

## Stay Competitive in Your Job Search

In today's fast-paced job market, being among the first to apply can make all the difference. Install this extension to:
- 🎯 Target the freshest opportunities
- ⏱️ Save time in your job search
- 📈 Increase your chances of getting noticed

Don't let great opportunities slip away because you didn't see them in time! 
