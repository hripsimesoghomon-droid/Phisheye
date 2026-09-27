# PhishEye

PhishEye is a browser-based phishing and scam detection prototype designed to help users identify suspicious messages, links, phone numbers, QR codes, and other potentially dangerous content.

The application focuses on making scam detection understandable to everyday users by showing a clear risk level, explaining why something may be suspicious, and providing practical next steps.

---

## Team 6

**Team 6**

- **Hripsime Soghomonyan** — Project Manager
- **Inna Sardaryan** — Marketer
- **Mahsa Mirjamali** — UI/UX / Product Manager
- **Artak Balayan** — Developer

---

## Features

### 1. Scam Detection

Users can check different types of potentially suspicious content:

- Messages
- Links
- Phone numbers
- QR codes
- Screenshots
- PDF files
- Saved emails/text files

The system classifies content into three levels:

- **Safe**
- **Suspicious**
- **High Risk**

---

### 2. Explainable Results

Instead of only displaying a risk score, PhishEye explains why something may be dangerous.

For example, it can identify:

- Unusual or suspicious links
- Urgent or threatening language
- Requests for passwords or verification codes
- Requests for money or payment
- Suspicious domains
- Attempts to impersonate a company
- Other common phishing signals

The result page also provides recommended actions.

---

### 3. Message Analysis

Users can paste a suspicious message into the application.

Example:

> "NORTHBANK: Unusual sign-in detected. Your account will be locked in 2 hours. Verify now..."

PhishEye analyzes the text for common phishing indicators such as:

- Urgency
- Password or code requests
- Payment requests
- Suspicious links
- Login requests

---

### 4. Link Analysis

Users can enter a website or URL.

The prototype checks whether the text contains characteristics commonly associated with suspicious links.

Examples include:

- Unusual domains
- Unknown websites
- Suspicious URL patterns
- Links combined with urgent requests

---

### 5. Phone Number Analysis

Users can enter a phone number to demonstrate scam detection.

The prototype can display information such as:

- Reported scam activity
- Possible impersonation
- Connection to other suspicious events

---

### 6. QR Code Protection

The application includes a QR-code scanning demonstration.

The prototype shows how PhishEye could detect a QR code that redirects a user to a fake payment website.

---

### 7. File Upload

Users can upload:

- Images
- PDFs
- `.txt` files
- `.eml` email files

Maximum file size:

**10 MB**

Text files are read directly in the browser and their content can be analyzed.

For images and PDFs, the current prototype demonstrates the workflow but does not implement a real AI/OCR backend.

---

### 8. Scam Connection

Premium functionality demonstrates how multiple suspicious events could be connected.

For example:

```text
Suspicious text
      ↓
Suspicious phone call
      ↓
Suspicious website
      ↓
Same scam campaign
