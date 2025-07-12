# Notifications Page – React App

This is a classic **notifications page** built with **React**, styled using **CSS**, and powered by local `JSON` data.  
Users can view notification messages, mark them as read individually or all at once, and see a live unread count.

---

## 🚀 Features

- 📨 Display a list of user notifications
- 🔴 Highlight unread messages visually
- ✅ Click to mark individual notifications as read
- 📘 "Mark all as read" button to update all messages
- 🔢 Dynamic unread notification counter
- ✉️ Optional message text area for certain notifications
- 🖼 Displays optional user image for posts (e.g. reactions)
- 💬 Clean and responsive UI design
- 🧠 Logic fully handled via React `useState()` and dynamic rendering

---

## 🌐 Live Site

🔗 [View Live](https://notifications-page-weld.vercel.app/)

---

## 🛠 Technologies Used

- **React**
- **CSS (custom styling)**
- **JavaScript**
- **Local JSON data**

---

## 📂 Folder Structure

/src
├── /components
│ └── NotiPage.jsx // Main component handling notifications
├── /data
│ └── data.json // Local data for notification list
├── /styles
│ └── notipage.css // Styling for notification layout and elements

---

## ⚙️ How It Works

- The app loads data from `data.json` into React state using `useState()`.
- Notifications are rendered using `.map()`, showing user info, message, and time.
- If a notification has `text`, a message bubble appears below the content.
- Clicking a notification sets its `isRead` property to `true`.
- Clicking “Mark all as read” updates all `isRead` flags in the state.
- Unread count is calculated dynamically via `.filter()` and `.length`.

---

## 📦 Getting Started

Clone the repository and run locally:

```bash
git clone https://github.com/Bletfen/notifications-page-react.git
cd notifications-page-react
npm install
npm start

📬 Contact

Made with ❤️ by Bletfen
Feel free to fork, contribute, or submit issues if needed.
```
