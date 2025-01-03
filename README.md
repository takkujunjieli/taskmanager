## Prerequisites

- Node.js (v14 or newer)
- npm or yarn
- Expo Go app on your mobile device (for testing)

## Technologies Used

- React Native
- Expo

## Running the App

1. Start the development server:

   - `npm start`

2. Scan the QR code with:

   - iOS: Camera app
   - Android: Expo Go app

3. Or run on simulators:
   - Press 'i' for iOS simulator
   - Press 'a' for Android simulator
   - Press 'w' for web browser

## Project Structure

```
src/
├── app/                 # Expo Router pages
│   ├── layout.tsx       # Root layout
│   ├── index.tsx        # Task list screen
│   ├── add-task.tsx     # Add task screen
│   ├── edit-task.tsx    # Edit task screen
│   └── task-details.tsx # Task details screen
├── components/          # Reusable components
├── contexts/            # React Context providers
├── interfaces/          # TypeScript interfaces
└── styles/              # Shared styles
```
