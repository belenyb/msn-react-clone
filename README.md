# MSN Windows Live Messenger Clone with Gemini 1.5 Flash
## Project Overview
MSN React Clone is a web application that replicates the classic Windows Live Messenger experience, providing an interactive chat interface with the Gemini 1.5 Flash model. Leveraging React and Bootstrap, this app offers a modern take on a nostalgic chat application.

<img src="assets/msn-react-clone-demo.gif" width=auto height=300 alt="App demo" />

## Setup
### Prerequisites
Ensure you have the following installed:
```console
Node.js (v14.x, v16.x, or v18.x recommended)
npm (Node package manager)
```
Update the REACT_APP_API_KEY in your .env file to use the [Gemini 1.5 Flash API](https://aistudio.google.com/app/apikey):
```console
REACT_APP_API_KEY=your_api_key_here
```

### Installation
Clone the repository:
```console
git clone https://github.com/belenyb/msn-react-clone.git
cd msn-react-clone
```
Install dependencies:
```console
npm install
```
Running the App
```console
npm start
```

## Dependencies
The package.json file lists the necessary dependencies for the project:

- @google/generative-ai: For interacting with Gemini 1.5 Flash.
- @testing-library/jest-dom, @testing-library/react, @testing-library/user-event: For testing components.
- react, react-dom: Core React libraries.
- react-draggable: For creating draggable elements (like the chat window).
- react-markdown: For rendering Markdown formatted text.
- react-scripts: For creating and managing React projects.
- web-vitals: For measuring web performance metrics.

## Gemini integration
To create an interactive chat experience, the Gemini API is used to handle multi-round conversations. The API allows for progressive user interactions and is suitable for chatbots, interactive tutors, and customer support.

## Vercel deployment
Live demo here 👉 https://msn-react-clone.vercel.app
