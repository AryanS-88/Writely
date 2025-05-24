# Writely

**Writely** is an AI-powered email reply assistant designed to streamline and enhance your email communication.  
By leveraging the Google Gemini Flash 2.0 language model, Writely generates context-aware, professional email responses, saving you time and effort.

## Features

- **AI-Generated Replies**: Automatically craft email responses based on the context of received messages using Gemini Flash 2.0.
- **Browser Extension**: Seamlessly integrates with your webmail client through a user-friendly extension.
- **Customizable Responses**: Tailor the tone and content of replies to suit your communication style.  
  Supported tones:
  - None(Neutral)
  - Professional
  - Casual
  - Friendly
- **Secure and Private**: Processes emails locally to ensure user privacy and data security.

## Installation

### Prerequisites

- **Java Development Kit (JDK)**: Ensure JDK 8 or higher is installed.
- **Spring Boot**: The backend is built using Spring Boot for robust, scalable service deployment.
- **Modern Web Browser**: Google Chrome, Mozilla Firefox, or any Chromium-based browser.

### Steps

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/AryanS-88/Writely.git
   ```

2. **Build the Backend Service**:
   Navigate to the backend directory and compile the Spring Boot Java application.

   ```bash
   cd Writely/email-writer
   ./gradlew build
   ```

3. **Set Up the Browser Extension**:
   Navigate to the extension directory and build the extension.

   ```bash
   cd ../email-writer-extension
   # Follow the extension's build instructions as per the README
   ```

4. **Load the Extension into Your Browser**:
   - **Chrome**:
     - Go to `chrome://extensions/`.
     - Enable "Developer mode".
     - Click "Load unpacked" and select the `email-writer-extension/dist` directory.
   - **Firefox**:
     - Go to `about:debugging#/runtime/this-firefox`.
     - Click "Load Temporary Add-on" and select the `manifest.json` file from the `email-writer-extension/dist` directory.

## Usage

1. **Start the Backend Service**:

   ```bash
   java -jar build/libs/email-writer.jar
   ```

2. **Compose or Reply to an Email**:
   Open your webmail client and start composing or replying to an email.

3. **Generate a Reply**:
   Click on the Writely extension icon and select "Generate Reply".  
   You can choose the tone of the reply from the following options:

   - None (replies in a neutral tone)
   - Professional
   - Casual
   - Friendly

   The AI, powered by Gemini Flash 2.0, will craft a response based on the email content and selected tone.

4. **Review and Send**:
   Edit the generated reply if necessary, then send your email.

## Project Structure

- **email-writer**: Java Spring Boot-based backend service responsible for processing email content and generating replies using Gemini Flash 2.0.
- **email-writer-extension**: Frontend browser extension facilitating user interaction and integration with webmail clients.
- **.idea**: IDE configuration files (can be ignored if not using the same IDE).

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the [LICENSE](https://github.com/AryanS-88/Writely/blob/main/LICENSE) file for details.
