

// 🧑 USERS
export const userDummyData = [
  {
    _id: "u1",
    fullName: "Haile Homa",
    phone: "+251912345678", // ✅ Ethiopian format
    email: "haile@example.com",
    otp: "1234",
    isVerified: true,
    lastLogin: "2025-09-25T08:30:00Z",
    profilePic: "/images/users/haile.png",
    bio: "Equb enthusiast and group leader.",
    equbsJoined: [
      { equbId: "eq1", role: "member", joinedDate: "2025-01-05" },
      { equbId: "eq2", role: "leader", joinedDate: "2025-02-12" },
    ],
  },

  {
    _id: "u2",
    fullName: "Sara Alemu",
    phone: "+251922334455", // ✅ normalized
    email: "sara@example.com",
    otp: "5678",
    isVerified: false,
    lastLogin: "2025-09-22T15:00:00Z",
    profilePic: "/images/users/sara.png",
    bio: "Loves saving with friends.",
    equbsJoined: [
      { equbId: "eq1", role: "member", joinedDate: "2025-03-15" },
    ],
  },

  {
    _id: "u3",
    fullName: "Abel Tesfaye",
    phone: "+251933445566", // ✅ normalized
    email: "abel@example.com",
    otp: "9012",
    isVerified: true,
    lastLogin: "2025-09-20T19:45:00Z",
    profilePic: "/images/users/abel.png",
    bio: "Always up for community savings.",
    equbsJoined: [
      { equbId: "eq3", role: "member", joinedDate: "2025-05-02" },
      { equbId: "eq4", role: "member", joinedDate: "2025-06-10" },
    ],
  },
];







export const equbDummyData = [
  // ==== DAILY EQUBS ====
  {
    equbId: "eq1",
    name: "Daily Savings Equb",
    category: "Personal",
    type: "daily",
    amounts: [100, 200, 300, 500, 1000],
    duration: "105 days",
    processingFee: "5x daily amount",
    totalMembers: 10,
  },
  {
    equbId: "eq2",
    name: "Daily Drivers Fuel Equb",
    category: "Drivers",
    type: "daily",
    amounts: [50, 100, 200, 300],
    duration: "60 days",
    processingFee: "2x daily amount",
    totalMembers: 15,
  },
  {
    equbId: "eq3",
    name: "Daily Merchants Cash Flow Equb",
    category: "Merchants",
    type: "daily",
    amounts: [500, 1000, 2000],
    duration: "90 days",
    processingFee: "3x daily amount",
    totalMembers: 8,
  },
  {
    equbId: "eq4",
    name: "Daily Employers Office Support Equb",
    category: "Employers",
    type: "daily",
    amounts: [200, 500, 1000],
    duration: "75 days",
    processingFee: "2x daily amount",
    totalMembers: 6,
  },
  {
    equbId: "eq5",
    name: "Daily Community Kitchen Equb",
    category: "Others",
    type: "daily",
    amounts: [100, 250, 500],
    duration: "90 days",
    processingFee: "1x daily amount",
    totalMembers: 20,
  },

  // ==== WEEKLY EQUBS ====
  {
    equbId: "eq6",
    name: "Weekly Merchants Equb",
    category: "Merchants",
    type: "weekly",
    amounts: [5000, 10000, 25000, 50000],
    duration: "53 weeks",
    processingFee: "1x weekly amount",
    totalMembers: 6,
  },
  {
    equbId: "eq7",
    name: "Weekly Drivers Maintenance Equb",
    category: "Drivers",
    type: "weekly",
    amounts: [1000, 2000, 5000],
    duration: "26 weeks",
    processingFee: "1x weekly amount",
    totalMembers: 12,
  },
  {
    equbId: "eq8",
    name: "Weekly Employers Salary Support Equb",
    category: "Employers",
    type: "weekly",
    amounts: [2000, 5000, 10000],
    duration: "20 weeks",
    processingFee: "1x weekly amount",
    totalMembers: 7,
  },
  {
    equbId: "eq9",
    name: "Weekly Community Sports Fund",
    category: "Others",
    type: "weekly",
    amounts: [500, 1000, 2000],
    duration: "30 weeks",
    processingFee: "1x weekly amount",
    totalMembers: 18,
  },
  {
    equbId: "eq10",
    name: "Weekly Personal Health Equb",
    category: "Personal",
    type: "weekly",
    amounts: [1000, 2000, 3000],
    duration: "25 weeks",
    processingFee: "1x weekly amount",
    totalMembers: 9,
  },

  // ==== MONTHLY EQUBS ====
  {
    equbId: "eq11",
    name: "Monthly Drivers Equb",
    category: "Drivers",
    type: "monthly",
    amounts: [1000, 2000, 3000, 5000, 10000],
    duration: "13 months",
    processingFee: "1x monthly amount",
    totalMembers: 8,
  },
  {
    equbId: "eq12",
    name: "Business Investment Equb",
    category: "Merchants",
    type: "monthly",
    amounts: [1000, 2000, 5000, 10000, 20000],
    duration: "13 months",
    processingFee: "1x monthly amount",
    totalMembers: 12,
  },
  {
    equbId: "eq13",
    name: "Monthly Employers Staff Welfare Equb",
    category: "Employers",
    type: "monthly",
    amounts: [5000, 10000, 20000],
    duration: "12 months",
    processingFee: "2x monthly amount",
    totalMembers: 20,
  },
  {
    equbId: "eq14",
    name: "Monthly Community Support Equb",
    category: "Others",
    type: "monthly",
    amounts: [500, 1000, 2000, 5000],
    duration: "12 months",
    processingFee: "1x monthly amount",
    totalMembers: 25,
  },
  {
    equbId: "eq15",
    name: "Monthly Personal Education Equb",
    category: "Personal",
    type: "monthly",
    amounts: [2000, 5000, 8000],
    duration: "10 months",
    processingFee: "1x monthly amount",
    totalMembers: 14,
  },
  {
    equbId: "eq16",
    name: "Monthly Farmers Equipment Equb",
    category: "Others",
    type: "monthly",
    amounts: [3000, 6000, 9000],
    duration: "15 months",
    processingFee: "2x monthly amount",
    totalMembers: 18,
  },
  {
    equbId: "eq17",
    name: "Monthly Merchants Wholesale Equb",
    category: "Merchants",
    type: "monthly",
    amounts: [10000, 20000, 50000],
    duration: "18 months",
    processingFee: "3x monthly amount",
    totalMembers: 30,
  },
  {
    equbId: "eq18",
    name: "Monthly Ride-Sharing Drivers Equb",
    category: "Drivers",
    type: "monthly",
    amounts: [2000, 4000, 8000],
    duration: "12 months",
    processingFee: "1x monthly amount",
    totalMembers: 16,
  },
  {
    equbId: "eq19",
    name: "Monthly Tech Employers Innovation Fund",
    category: "Employers",
    type: "monthly",
    amounts: [10000, 20000, 50000],
    duration: "24 months",
    processingFee: "2x monthly amount",
    totalMembers: 22,
  },
  {
    equbId: "eq20",
    name: "Monthly Youth Community Growth Equb",
    category: "Others",
    type: "monthly",
    amounts: [500, 1500, 2500],
    duration: "18 months",
    processingFee: "1x monthly amount",
    totalMembers: 40,
  },
];



// src/db/data.js
// src/db/data.js - USE THIS FOR TESTING
export const termsData = {
  eq1: { pdfUrl: "https://www.africau.edu/images/default/sample.pdf" },
  eq2: { pdfUrl: "https://www.africau.edu/images/default/sample.pdf" },
  eq3: { pdfUrl: "https://www.africau.edu/images/default/sample.pdf" },
  eq4: { pdfUrl: "https://www.africau.edu/images/default/sample.pdf" },
  eq5: { pdfUrl: "https://www.africau.edu/images/default/sample.pdf" },
  // ... add all your equbs with the same URL for testing
};




// export const termsData = {
//   eq1: { pdfUrl: "/pdfs/dailypersonal.pdf" },
//   eq2: { pdfUrl: "/pdfs/dailypersonal.pdf" },
//   eq11: { pdfUrl: "/pdfs/monthly.pdf" },
//   eq12: { pdfUrl: "/pdfs/monthly.pdf" },
//   // ... keep the rest the same if needed
// };





// export const termsData = {
//   eq1: { 
//     // original: "/pdfs/daily-personal.pdf"
//     pdfUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" 
//   },
//   eq2: { 
//     // original: "/pdfs/daily-drivers.pdf"
//     pdfUrl: "https://file-examples.com/wp-content/uploads/2017/10/file-sample_150kB.pdf" 
//   },
//   eq3: { 
//     // original: "/pdfs/daily-merchants.pdf"
//     pdfUrl: "https://www.orimi.com/pdf-test.pdf" 
//   },
//   eq4: { 
//     // original: "/pdfs/daily-employers.pdf"
//     pdfUrl: "https://gahp.net/wp-content/uploads/2017/09/sample.pdf" 
//   },
//   eq5: { 
//     // original: "/pdfs/daily-others.pdf"
//     pdfUrl: "https://www.africau.edu/images/default/sample.pdf" 
//   },

//   eq6: { 
//     // original: "/pdfs/weekly-merchants.pdf"
//     pdfUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" 
//   },
//   eq7: { 
//     // original: "/pdfs/weekly-drivers.pdf"
//     pdfUrl: "https://file-examples.com/wp-content/uploads/2017/10/file-sample_150kB.pdf" 
//   },
//   eq8: { 
//     // original: "/pdfs/weekly-employers.pdf"
//     pdfUrl: "https://www.orimi.com/pdf-test.pdf" 
//   },
//   eq9: { 
//     // original: "/pdfs/weekly-others.pdf"
//     pdfUrl: "https://gahp.net/wp-content/uploads/2017/09/sample.pdf" 
//   },
//   eq10: { 
//     // original: "/pdfs/weekly-personal.pdf"
//     pdfUrl: "https://www.africau.edu/images/default/sample.pdf" 
//   },

//   eq11: { 
//     // original: "/pdfs/monthly-drivers.pdf"
//     pdfUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" 
//   },
//   eq12: { 
//     // original: "/pdfs/monthly-merchants.pdf"
//     pdfUrl: "https://file-examples.com/wp-content/uploads/2017/10/file-sample_150kB.pdf" 
//   },
//   eq13: { 
//     // original: "/pdfs/monthly-employers.pdf"
//     pdfUrl: "https://www.orimi.com/pdf-test.pdf" 
//   },
//   eq14: { 
//     // original: "/pdfs/monthly-others.pdf"
//     pdfUrl: "https://gahp.net/wp-content/uploads/2017/09/sample.pdf" 
//   },
//   eq15: { 
//     // original: "/pdfs/monthly-personal.pdf"
//     pdfUrl: "https://www.africau.edu/images/default/sample.pdf" 
//   },
//   eq16: { 
//     // original: "/pdfs/monthly-farmers.pdf"
//     pdfUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" 
//   },
//   eq17: { 
//     // original: "/pdfs/monthly-wholesale.pdf"
//     pdfUrl: "https://file-examples.com/wp-content/uploads/2017/10/file-sample_150kB.pdf" 
//   },
//   eq18: { 
//     // original: "/pdfs/monthly-ridesharing.pdf"
//     pdfUrl: "https://www.orimi.com/pdf-test.pdf" 
//   },
//   eq19: { 
//     // original: "/pdfs/monthly-tech.pdf"
//     pdfUrl: "https://gahp.net/wp-content/uploads/2017/09/sample.pdf" 
//   },
//   eq20: { 
//     // original: "/pdfs/monthly-youth.pdf"
//     pdfUrl: "https://www.africau.edu/images/default/sample.pdf" 
//   },
// };











// 📜 HISTORY (Transactions / Winners)
export const historyDummyData = [
  {
    historyId: "h1",
    equbId: "eq1",
    equbName: "Daily Savings Equb",
    type: "daily",
    action: "Joined",
    amount: 200,
    date: "2025-09-01",
    status: "success",
  },
  {
    historyId: "h2",
    equbId: "eq1",
    equbName: "Daily Savings Equb",
    type: "daily",
    action: "Contribution",
    amount: 200,
    date: "2025-09-05",
    status: "success",
  },
  {
    historyId: "h3",
    equbId: "eq4",
    equbName: "Weekly Merchants Equb",
    type: "weekly",
    action: "Won",
    amount: 10000,
    date: "2025-09-10",
    status: "success",
  },
  {
    historyId: "h4",
    equbId: "eq7",
    equbName: "Monthly Drivers Equb",
    type: "monthly",
    action: "Contribution",
    amount: 3000,
    date: "2025-09-12",
    status: "pending",
  },
  {
    historyId: "h5",
    equbId: "eq2",
    equbName: "Weekly Groceries Equb",
    type: "weekly",
    action: "Joined",
    amount: 500,
    date: "2025-09-03",
    status: "success",
  },
  {
    historyId: "h6",
    equbId: "eq2",
    equbName: "Weekly Groceries Equb",
    type: "weekly",
    action: "Contribution",
    amount: 500,
    date: "2025-09-06",
    status: "success",
  },
  {
    historyId: "h7",
    equbId: "eq3",
    equbName: "Monthly Rent Equb",
    type: "monthly",
    action: "Contribution",
    amount: 1500,
    date: "2025-09-02",
    status: "success",
  },
  {
    historyId: "h8",
    equbId: "eq3",
    equbName: "Monthly Rent Equb",
    type: "monthly",
    action: "Missed Payment",
    amount: 1500,
    date: "2025-09-08",
    status: "failed",
  },
  {
    historyId: "h9",
    equbId: "eq5",
    equbName: "Daily Travel Equb",
    type: "daily",
    action: "Joined",
    amount: 100,
    date: "2025-09-04",
    status: "success",
  },
  {
    historyId: "h10",
    equbId: "eq5",
    equbName: "Daily Travel Equb",
    type: "daily",
    action: "Contribution",
    amount: 100,
    date: "2025-09-05",
    status: "success",
  },
  {
    historyId: "h11",
    equbId: "eq6",
    equbName: "Weekly Savings Equb",
    type: "weekly",
    action: "Won",
    amount: 3000,
    date: "2025-09-11",
    status: "success",
  },
  {
    historyId: "h12",
    equbId: "eq7",
    equbName: "Monthly Drivers Equb",
    type: "monthly",
    action: "Missed Payment",
    amount: 3000,
    date: "2025-09-15",
    status: "failed",
  },
  {
    historyId: "h13",
    equbId: "eq8",
    equbName: "Daily Snacks Equb",
    type: "daily",
    action: "Contribution",
    amount: 50,
    date: "2025-09-06",
    status: "success",
  },
  {
    historyId: "h14",
    equbId: "eq9",
    equbName: "Weekly Transport Equb",
    type: "weekly",
    action: "Joined",
    amount: 400,
    date: "2025-09-07",
    status: "success",
  },
  {
    historyId: "h15",
    equbId: "eq9",
    equbName: "Weekly Transport Equb",
    type: "weekly",
    action: "Contribution",
    amount: 400,
    date: "2025-09-14",
    status: "pending",
  },
];





// ⚙️ SETTINGS (per user)
export const settingsDummyData = [
  {
    userId: "u1",
    language: "en",
    notifications: true,
    theme: "light",
  },
  {
    userId: "u2",
    language: "am",
    notifications: false,
    theme: "dark",
  },
  {
    userId: "u3",
    language: "om",
    notifications: true,
    theme: "light",
  },
];









// Dummy notifications

export const dummyNotifications = [
  {
    id: 1,
    title: "Equb Joined",
    message: "You successfully joined 'Monthly Savings' Equb!",
    time: "2 hours ago",
    type: "success",
  },
  {
    id: 2,
    title: "Equb Reminder",
    message: "Your next contribution for 'Weekly Equb' is due tomorrow.",
    time: "1 day ago",
    type: "info",
  },
  {
    id: 3,
    title: "Equb Winner",
    message: "Congratulations! You won the 'Monthly Jackpot' Equb!",
    time: "3 days ago",
    type: "success",
  },
  {
    id: 4,
    title: "Payment Missed",
    message: "You missed your contribution for 'Daily Equb'. Please pay to stay in the group.",
    time: "5 hours ago",
    type: "warning",
  },
  {
    id: 5,
    title: "Equb Created",
    message: "A new 'Special Savings' Equb has been created. Join now before it fills up!",
    time: "6 hours ago",
    type: "info",
  },
  {
    id: 6,
    title: "Equb Reminder",
    message: "Your contribution for 'Monthly Savings' Equb is due in 2 days.",
    time: "1 day ago",
    type: "info",
  },
  {
    id: 7,
    title: "Equb Winner",
    message: "You won the 'Weekly Lucky Draw' Equb! Check your balance.",
    time: "2 days ago",
    type: "success",
  },
  {
    id: 8,
    title: "Contribution Received",
    message: "You successfully contributed 500 ETB to 'Monthly Savings' Equb.",
    time: "3 hours ago",
    type: "success",
  },

  {
    id: 9,
    title: "Equb Expired",
    message: "'Old Savings' Equb has ended. See the final results in your history.",
    time: "4 days ago",
    type: "info",
  },
  {
    id: 10,
    title: "Equb Alert",
    message: "Your 'Weekly Equb' group has a new member.",
    time: "6 hours ago",
    type: "info",
  },
];








export const profileDummyData = {
  userId: "u1",
  name: "Abebe teferi",
  phone: "+251900000000",
  joinedDate: "2024-01-15",
  avatar: "https://i.pravatar.cc/150?img=12",
  location: "Addis Ababa, Ethiopia",
  totalEqubsJoined: 1,
  activeEqubs: 1,
  completedEqubs: 1,
  savings: 50000,
  contributions: 32000,
  winnings: 50000,
};
