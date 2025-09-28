import React, { createContext, useState, useEffect } from "react";
import { dummyNotifications} from "../db/data";

export const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {


  const [notifications, setNotifications] = useState([]);

  // 🟢 Simulate incoming notifications (replace with API/WebSocket later)
  useEffect(() => {
    const timer = setTimeout(() => {
      setNotifications(dummyNotifications);
    }, 1000); // notifications appear after 1 sec

    return () => clearTimeout(timer);
  }, []);

  const clearNotifications = () => {
    setNotifications([]);
  };

  return (
    <NotificationContext.Provider
      value={{ notifications, setNotifications, clearNotifications }}
    >
      {children}
    </NotificationContext.Provider>
  );
};




// import React, { createContext, useState, useEffect } from "react";

// export const NotificationContext = createContext();

// export const NotificationProvider = ({ children }) => {
//   const [notificationsCount, setNotificationsCount] = useState(0);

//   // 🟢 Simulate incoming notifications (replace later with API/WebSocket)
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setNotificationsCount(3); // e.g. 3 new notifications
//     }, 3000);

//     return () => clearTimeout(timer);
//   }, []);

//   // Function to clear notifications (when user visits /notifications)
//   const clearNotifications = () => {
//     setNotificationsCount(0);
//   };

//   return (
//     <NotificationContext.Provider
//       value={{ notificationsCount, setNotificationsCount, clearNotifications }}
//     >
//       {children}
//     </NotificationContext.Provider>
//   );
// };














// import React, { createContext, useState, useEffect } from "react";

// // Example API functions
// const fetchNotificationsCount = async () => {
//   try {
//     const res = await fetch("https://api.example.com/notifications/unread-count");
//     const data = await res.json();
//     return data.count;
//   } catch (err) {
//     console.error("❌ Error fetching notifications:", err);
//     return 0;
//   }
// };

// const markAllAsRead = async () => {
//   try {
//     await fetch("https://api.example.com/notifications/mark-all-read", {
//       method: "POST",
//     });
//   } catch (err) {
//     console.error("❌ Error marking as read:", err);
//   }
// };

// export const NotificationContext = createContext();

// export const NotificationProvider = ({ children }) => {
//   const [notificationsCount, setNotificationsCount] = useState(0);

//   // 🔄 Fetch unread count periodically
//   useEffect(() => {
//     const loadCount = async () => {
//       const count = await fetchNotificationsCount();
//       setNotificationsCount(count);
//     };

//     loadCount();
//     const interval = setInterval(loadCount, 10000); // every 10s
//     return () => clearInterval(interval);
//   }, []);

//   // 🟢 Function to clear notifications
//   const clearNotifications = async () => {
//     await markAllAsRead();
//     setNotificationsCount(0);
//   };

//   return (
//     <NotificationContext.Provider
//       value={{ notificationsCount, setNotificationsCount, clearNotifications }}
//     >
//       {children}
//     </NotificationContext.Provider>
//   );
// };
