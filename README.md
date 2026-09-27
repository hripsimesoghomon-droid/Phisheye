# PhishEye

**PhishEye — AI-inspired personal scam & phishing protection interface**

PhishEye is a front-end cybersecurity prototype designed to help users identify suspicious messages, links, phone numbers, and QR-code related threats. The interface focuses on a simple user flow:

**Detect → Understand → Protect**

This project is implemented as a browser-based application using HTML, CSS, and JavaScript.

## Project Structure

```text
phisheye/
├── index.html
├── style.css
├── script.js
└── README.md
```

### `index.html`
The main application page. It provides the basic HTML structure and loads the external stylesheet and JavaScript file.

### `style.css`
Contains the complete visual design of the application, including:

- Layout and responsive design
- Light/dark themes
- Cards, buttons, navigation, and dialogs
- Risk/safety status colors
- Glassmorphism-style UI elements
- Mobile navigation
- Accessibility and typography styling

### `script.js`
Contains the application's interactive behavior and data.

It handles:

- Page routing/navigation
- Message, link, and phone-number checking
- Example phishing scenarios
- Risk classification
- Explanation and recommended actions
- Scan/checking flow
- Scan history
- QR-code related flow
- Settings and protection controls
- Theme switching
- Local storage persistence
- Toast notifications
- Demo/prototype interactions

## Main Features

### 1. Message Analysis
Users can enter a suspicious message and PhishEye analyzes simple indicators such as:

- Urgent or threatening language
- Requests for passwords, codes, payments, or card information
- Suspicious links

The result is classified as:

- **Safe**
- **Suspicious**
- **High Risk**

### 2. Link Checking
Users can submit a URL or domain for a simulated safety check.

### 3. Phone Number Checking
Users can enter a phone number and view a simulated scam-risk result.

### 4. QR Code Flow
The interface includes a QR-code checking experience for suspicious QR/payment links.

### 5. Explainable Results
Instead of only showing a risk label, PhishEye provides reasons explaining why content may be dangerous and gives recommended actions.

For example:

> Don't tap the link. Don't reply.

or:

> Call the company using a number you already know.

### 6. Scan History
Previous checks can be displayed in the application's history section.

### 7. Protection Settings
The application includes settings for options such as:

- Showing the PhishEye button
- Warning before risky links
- Allowing “Open anyway” on blocked websites
- Notifying a trusted contact about high-risk scams

### 8. Light / Dark Theme
The application supports theme switching and stores the selected preference locally.

### 9. Local Storage
Some application state is stored in the browser's `localStorage`, including:

- Scan history
- Protection settings
- Theme-related state
- Onboarding state
- Plan state

No backend database is required for the current prototype.

## How to Run

No build system is required.

1. Download or copy all project files into the same folder.
2. Make sure these files are together:

```text
index.html
style.css
script.js
```

3. Open `index.html` in a modern web browser.

The application should run directly in the browser.

## Important Note About the Prototype

PhishEye is currently a **front-end prototype / simulation**.

The analysis logic in `script.js` uses predefined rules and example data. It is not connected to a real threat-intelligence database, banking system, telecom network, or production AI model.

For example, the message analysis checks for indicators such as:

- Urgency
- Requests for sensitive information
- Suspicious links

The prototype then generates a simulated risk level and explanation.

## Example Test Cases

### High-Risk Message

```text
NORTHBANK: Unusual sign-in detected. Your account will be locked in 2 hours. Verify now: northbank-secure.co/login
```

Expected result:

**High Risk**

Reasons can include:

- Urgent language
- Suspicious link
- Request to verify an account

### Suspicious Delivery Message

```text
Your parcel is on hold. Pay a $1.99 redelivery fee within 24h: parcel-track-help.net
```

Expected result:

**Suspicious**

### Safer Link

```text
https://en.wikipedia.org/wiki/Phishing
```

Expected result:

**Safe**

## Technologies

- HTML5
- CSS3
- Vanilla JavaScript
- Browser Local Storage
- SVG icons
- Google Fonts

No JavaScript framework is required.

## Design

The PhishEye interface uses a cybersecurity-oriented visual language with:

- High-contrast typography
- Security status indicators
- Shield/eye iconography
- Responsive layouts
- Light and dark themes
- Clear Safe / Suspicious / High Risk states

## Future Development

For a production version, the prototype could be extended with:

- A real AI/ML phishing classifier
- Real-time URL reputation APIs
- Domain and certificate intelligence
- OCR for screenshots
- Real QR-code decoding
- Email integration
- SMS integration
- Phone reputation services
- Secure backend processing
- User authentication
- Enterprise administration
- Real threat-intelligence feeds

## Team

**PHISHEYE — Team 6**

Cybersecurity Ideathon Project

---

**Core idea:** PhishEye does not only tell users that something is suspicious. It explains the warning signs and helps the user decide what to do next.
