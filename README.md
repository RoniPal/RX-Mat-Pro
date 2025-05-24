# 📦 Smart Yoga Mat App – Submission Package
A mobile application that simulates the connection, control, update, and analytics features for a Smart Yoga Mat using React Native and Firebase Firestore. It supports visual UI simulation of Bluetooth/Wi-Fi connectivity, OTA updates, session controls, and product showcase.

## 🧰 Technologies Used
Feature	Tech Used
UI Framework	React Native CLI
Navigation	React Navigation (@react-navigation/native)
UI Icons	react-native-vector-icons (FontAwesome5)
Charts & Gradient	react-native-linear-gradient, SVG
Firebase Integration	@react-native-firebase/app, firestore
Component Styling	StyleSheet from react-native

## 🚀 Setup Instructions
### ✅ Prerequisites
Node.js ≥ 16.x.x

npm or yarn

Android Studio / Xcode (for Android/iOS emulators)

Java JDK (if running on Android)

Firebase project with Firestore enabled

### 🔧 Steps to Run the Project
1. Clone the Repository
bash
Copy
Edit
git clone https://github.com/your-username/smart-yoga-mat-app.git
cd smart-yoga-mat-app
2. Install Dependencies
bash
Copy
Edit
npm install
# or
yarn install
3. Link Native Dependencies (Optional for older RN versions)
bash
Copy
Edit
npx react-native link
4. Firebase Configuration
Create a Firebase project.

Add an Android/iOS app.

Download google-services.json (Android) or GoogleService-Info.plist (iOS).

Place them inside:

android/app/ (for Android)

ios/ folder (for iOS)

5. Start Metro Bundler
bash
Copy
Edit
npx react-native start
6. Run on Android
bash
Copy
Edit
npx react-native run-android
7. Run on iOS
bash
Copy
Edit
npx react-native run-ios
