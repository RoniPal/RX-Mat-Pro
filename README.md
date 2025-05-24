# 📦 RX Mat Pro App – Submission Package
A mobile application that simulates the connection, control, update, and analytics features for a Smart Yoga Mat using React Native and Firebase Firestore. It supports visual UI simulation of Bluetooth/Wi-Fi connectivity, OTA updates, session controls, and product showcase.

## 📱 Features
```
- 🔗 **Connect your Mat** via Bluetooth or Wi-Fi (simulated UI)
- 🎛 **Control Heating & Vibrations** (Warm-Up / Relaxation Mode)
- 📦 **Explore Products** and new collections (from Firebase Firestore)
- 📊 **Track Usage Analytics** and past sessions
- 🚀 **Check for OTA Updates** with version control
- 🧪 Join the **Beta Program**
- ⚠️ **Design-Only Notice**: Some components are mockups for demo
```

## 🧰 Technologies Used
```
| Layer      | Tech                                  |
|------------|----------------------------------------|
| Frontend   | React Native CLI                       |
| UI Icons   | FontAwesome5 (`react-native-vector-icons`) |
| Navigation| React Navigation                        |
| Backend    | Firebase Firestore                     |
| Styling    | Custom `StyleSheet` (no Tailwind)      |
```

## 🚀 Setup Instructions

### ✅ Prerequisites
```
- Node.js ≥ 16.x.x
- npm or yarn
- Android Studio / Xcode (for Android/iOS emulators)
- Java JDK (if running on Android)
- Firebase project with Firestore enabled
```

### 🔧 Steps to Run the Project
1. Clone the Repository
```bash
git clone https://github.com/your-username/smart-yoga-mat-app.git
cd smart-yoga-mat-app
```
2. Install Dependencies
```bash
npm install
# or
yarn install
```
3. Link Native Dependencies (Optional for older RN versions)
```bash
npx react-native link
```
4. Firebase Configuration
1. Create a Firebase project.
2. Add an Android/iOS app.
3. Download google-services.json (Android) or GoogleService-Info.plist (iOS).
4.Place them inside:
```bash
android/app/ (for Android)
```
```
ios/ folder (for iOS)
```
5. Start Metro Bundler
```bash
npx react-native start
```
6. Run on Android
```bash
npx react-native run-android
```
7. Run on iOS
```bash
npx react-native run-ios
```
