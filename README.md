# MSN Windows Live Messenger Clone with Gemini 1.5 Flash
## Project Overview
This project aims to recreate the classic MSN Windows Live Messenger experience, leveraging Gemini 1.5 Flash for real-time text-based conversations. The app will feature a user-friendly interface, allowing users to chat with Gemini in a conversational style.

<img src="assets/msn-react-clone-demo.gif" width=auto height=300 alt="App demo" />

## Dependencies and Setup
The package.json file lists the necessary dependencies for the project:

- @google/generative-ai: For interacting with Gemini 1.5 Flash.
- @testing-library/jest-dom, @testing-library/react, @testing-library/user-event: For testing components.
- react, react-dom: Core React libraries.
- react-draggable: For creating draggable elements (like the chat window).
- react-markdown: For rendering Markdown formatted text.
- react-scripts: For creating and managing React projects.
- web-vitals: For measuring web performance metrics.

## Gemini integration
The app leverages Gemini 1.5 Flash, a large language model developed by Google AI, to generate contextually relevant and coherent responses to user inputs. Integration is achieved through the Google AI Studio API, enabling the application to send queries to the model and receive responses in real-time.

## Vercel deployment
Live demo here 👉 https://msn-react-clone.vercel.app
