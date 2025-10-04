

// 🧑 USERS
export const userDummyData = [
  {
    _id: "u1",
    fullName: "Haile Homa",
    phone: "+251912345678", //  Ethiopian format
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
    phone: "+251922334455", 
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
    phone: "+251933445566", 
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
    amount: 300,
    duration: "105 days",
    totalMembers: 10,
    cycleSize: 30,
    startDate: "2025-09-01",
    endDate: "2025-12-15",
    status: "active",
    payoutMethod: "mobile money",
    createdBy: "admin1",
    location: "Addis Ababa",
    imageUrl: "https://images.unsplash.com/photo-1461151304267-38535e780c79?q=80&w=1033&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    equbId: "eq2",
    name: "Daily Drivers Fuel Equb",
    category: "Drivers",
    type: "daily",
    amount: 200,
    duration: "60 days",
    totalMembers: 15,
    cycleSize: 20,
    startDate: "2025-09-01",
    endDate: "2025-11-30",
    status: "active",
    payoutMethod: "mobile money",
    createdBy: "admin2",
    location: "Addis Ababa",
    imageUrl: "https://images.unsplash.com/photo-1461151304267-38535e780c79?q=80&w=1033&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    equbId: "eq3",
    name: "Daily Merchants Cash Flow Equb",
    category: "Merchants",
    type: "daily",
    amount: 1000,
    duration: "90 days",
    totalMembers: 8,
    cycleSize: 15,
    startDate: "2025-09-05",
    endDate: "2025-12-04",
    status: "active",
    payoutMethod: "bank transfer",
    createdBy: "admin3",
    location: "Dire Dawa",
    imageUrl: "https://images.unsplash.com/photo-1461151304267-38535e780c79?q=80&w=1033&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    equbId: "eq4",
    name: "Daily Employers Office Support Equb",
    category: "Employers",
    type: "daily",
    amount: 500,
    duration: "75 days",
    totalMembers: 6,
    cycleSize: 10,
    startDate: "2025-09-10",
    endDate: "2025-11-24",
    status: "upcoming",
    payoutMethod: "cash",
    createdBy: "admin4",
    location: "Bahir Dar",
    imageUrl: "https://images.unsplash.com/photo-1461151304267-38535e780c79?q=80&w=1033&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    equbId: "eq5",
    name: "Daily Community Kitchen Equb",
    category: "Others",
    type: "daily",
    amount: 250,
    duration: "90 days",
    totalMembers: 20,
    cycleSize: 25,
    startDate: "2025-09-15",
    endDate: "2025-12-14",
    status: "upcoming",
    payoutMethod: "mobile money",
    createdBy: "admin5",
    location: "Addis Ababa",
    imageUrl: "https://images.unsplash.com/photo-1461151304267-38535e780c79?q=80&w=1033&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },

  // ==== WEEKLY EQUBS ====
  {
    equbId: "eq6",
    name: "Weekly Merchants Equb",
    category: "Merchants",
    type: "weekly",
    amount: 10000,
    duration: "53 weeks",
    totalMembers: 6,
    cycleSize: 12,
    startDate: "2025-01-05",
    endDate: "2025-12-31",
    status: "upcoming",
    payoutMethod: "bank transfer",
    createdBy: "admin6",
    location: "Dire Dawa",
    imageUrl: "https://images.unsplash.com/photo-1461151304267-38535e780c79?q=80&w=1033&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    equbId: "eq7",
    name: "Weekly Drivers Maintenance Equb",
    category: "Drivers",
    type: "weekly",
    amount: 2000,
    duration: "26 weeks",
    totalMembers: 12,
    cycleSize: 15,
    startDate: "2025-02-01",
    endDate: "2025-08-30",
    status: "active",
    payoutMethod: "cash",
    createdBy: "admin7",
    location: "Addis Ababa",
    imageUrl: "https://images.unsplash.com/photo-1461151304267-38535e780c79?q=80&w=1033&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    equbId: "eq8",
    name: "Weekly Employers Salary Support Equb",
    category: "Employers",
    type: "weekly",
    amount: 5000,
    duration: "20 weeks",
    totalMembers: 7,
    cycleSize: 10,
    startDate: "2025-03-01",
    endDate: "2025-07-15",
    status: "active",
    payoutMethod: "bank transfer",
    createdBy: "admin8",
    location: "Bahir Dar",
    imageUrl: "https://images.unsplash.com/photo-1461151304267-38535e780c79?q=80&w=1033&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    equbId: "eq9",
    name: "Weekly Community Sports Fund",
    category: "Others",
    type: "weekly",
    amount: 1000,
    duration: "30 weeks",
    totalMembers: 18,
    cycleSize: 20,
    startDate: "2025-02-15",
    endDate: "2025-09-15",
    status: "active",
    payoutMethod: "mobile money",
    createdBy: "admin9",
    location: "Dire Dawa",
    imageUrl: "https://images.unsplash.com/photo-1461151304267-38535e780c79?q=80&w=1033&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    equbId: "eq10",
    name: "Weekly Personal Health Equb",
    category: "Personal",
    type: "weekly",
    amount: 2000,
    duration: "25 weeks",
    totalMembers: 9,
    cycleSize: 12,
    startDate: "2025-03-05",
    endDate: "2025-09-15",
    status: "upcoming",
    payoutMethod: "bank transfer",
    createdBy: "admin10",
    location: "Addis Ababa",
    imageUrl: "https://images.unsplash.com/photo-1461151304267-38535e780c79?q=80&w=1033&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },

  // ==== MONTHLY EQUBS ====
  {
    equbId: "eq11",
    name: "Monthly Drivers Equb",
    category: "Drivers",
    type: "monthly",
    amount: 5000,
    duration: "13 months",
    totalMembers: 8,
    cycleSize: 10,
    startDate: "2025-01-01",
    endDate: "2026-01-31",
    status: "active",
    payoutMethod: "mobile money",
    createdBy: "admin11",
    location: "Addis Ababa",
    imageUrl: "https://images.unsplash.com/photo-1461151304267-38535e780c79?q=80&w=1033&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    equbId: "eq12",
    name: "Business Investment Equb",
    category: "Merchants",
    type: "monthly",
    amount: 10000,
    duration: "13 months",
    totalMembers: 12,
    cycleSize: 15,
    startDate: "2025-02-01",
    endDate: "2026-02-28",
    status: "active",
    payoutMethod: "bank transfer",
    createdBy: "admin12",
    location: "Dire Dawa",
    imageUrl: "https://images.unsplash.com/photo-1461151304267-38535e780c79?q=80&w=1033&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    equbId: "eq13",
    name: "Monthly Employers Staff Welfare Equb",
    category: "Employers",
    type: "monthly",
    amount: 10000,
    duration: "12 months",
    totalMembers: 20,
    cycleSize: 25,
    startDate: "2025-03-01",
    endDate: "2026-02-28",
    status: "active",
    payoutMethod: "cash",
    createdBy: "admin13",
    location: "Bahir Dar",
    imageUrl: "https://images.unsplash.com/photo-1461151304267-38535e780c79?q=80&w=1033&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    equbId: "eq14",
    name: "Monthly Community Support Equb",
    category: "Others",
    type: "monthly",
    amount: 2000,
    duration: "12 months",
    totalMembers: 25,
    cycleSize: 30,
    startDate: "2025-04-01",
    endDate: "2026-03-31",
    status: "upcoming",
    payoutMethod: "mobile money",
    createdBy: "admin14",
    location: "Addis Ababa",
    imageUrl: "https://images.unsplash.com/photo-1461151304267-38535e780c79?q=80&w=1033&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    equbId: "eq15",
    name: "Monthly Personal Education Equb",
    category: "Personal",
    type: "monthly",
    amount: 5000,
    duration: "10 months",
    totalMembers: 14,
    cycleSize: 18,
    startDate: "2025-05-01",
    endDate: "2026-02-28",
    status: "upcoming",
    payoutMethod: "bank transfer",
    createdBy: "admin15",
    location: "Dire Dawa",
    imageUrl: "https://images.unsplash.com/photo-1461151304267-38535e780c79?q=80&w=1033&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    equbId: "eq16",
    name: "Monthly Farmers Equipment Equb",
    category: "Others",
    type: "monthly",
    amount: 6000,
    duration: "15 months",
    totalMembers: 18,
    cycleSize: 20,
    startDate: "2025-06-01",
    endDate: "2026-08-31",
    status: "active",
    payoutMethod: "cash",
    createdBy: "admin16",
    location: "Bahir Dar",
    imageUrl: "https://images.unsplash.com/photo-1461151304267-38535e780c79?q=80&w=1033&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    equbId: "eq17",
    name: "Monthly Merchants Wholesale Equb",
    category: "Merchants",
    type: "monthly",
    amount: 20000,
    duration: "18 months",
    totalMembers: 30,
    cycleSize: 35,
    startDate: "2025-07-01",
    endDate: "2026-12-31",
    status: "active",
    payoutMethod: "bank transfer",
    createdBy: "admin17",
    location: "Addis Ababa",
    imageUrl: "https://images.unsplash.com/photo-1461151304267-38535e780c79?q=80&w=1033&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    equbId: "eq18",
    name: "Monthly Ride-Sharing Drivers Equb",
    category: "Drivers",
    type: "monthly",
    amount: 4000,
    duration: "12 months",
    totalMembers: 16,
    cycleSize: 20,
    startDate: "2025-08-01",
    endDate: "2026-07-31",
    status: "active",
    payoutMethod: "mobile money",
    createdBy: "admin18",
    location: "Dire Dawa",
    imageUrl: "https://images.unsplash.com/photo-1461151304267-38535e780c79?q=80&w=1033&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    equbId: "eq19",
    name: "Monthly Tech Employers Innovation Fund",
    category: "Employers",
    type: "monthly",
    amount: 20000,
    duration: "24 months",
    totalMembers: 22,
    cycleSize: 28,
    startDate: "2025-09-01",
    endDate: "2027-08-31",
    status: "upcoming",
    payoutMethod: "bank transfer",
    createdBy: "admin19",
    location: "Bahir Dar",
    imageUrl: "https://images.unsplash.com/photo-1461151304267-38535e780c79?q=80&w=1033&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    equbId: "eq20",
    name: "Monthly Youth Community Growth Equb",
    category: "Others",
    type: "monthly",
    amount: 1500,
    duration: "18 months",
    totalMembers: 40,
    cycleSize: 45,
    startDate: "2025-10-01",
    endDate: "2026-03-31",
    status: "upcoming",
    payoutMethod: "mobile money",
    createdBy: "admin20",
    location: "Addis Ababa",
    imageUrl: "https://images.unsplash.com/photo-1461151304267-38535e780c79?q=80&w=1033&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
];




export const termsData = {
  eq1: { pdfUrl: "/pdfs/terms-template.pdf" },
  eq2: { pdfUrl: "/pdfs/daily-personal.pdf" },
  eq3: { pdfUrl: "/pdfs/terms-template.pdf" },
  eq4: { pdfUrl: "/pdfs/daily-personal.pdf" },
  eq5: { pdfUrl: "/pdfs/terms-template.pdf" },
  eq6: { pdfUrl: "/pdfs/daily-personal.pdf" },
  eq7: { pdfUrl: "/pdfs/terms-template.pdf" },
  eq8: { pdfUrl: "/pdfs/daily-personal.pdf" },
  eq9: { pdfUrl: "/pdfs/terms-template.pdf" },
  eq10: { pdfUrl: "/pdfs/daily-personal.pdf" },
  eq11: { pdfUrl: "/pdfs/terms-template.pdf" },
  eq12: { pdfUrl: "/pdfs/daily-personal.pdf" },
  eq13: { pdfUrl: "/pdfs/terms-template.pdf" },
  eq14: { pdfUrl: "/pdfs/daily-personal.pdf" },
  eq15: { pdfUrl: "/pdfs/terms-template.pdf" },
  eq16: { pdfUrl: "/pdfs/daily-personal.pdf" },
  eq17: { pdfUrl: "/pdfs/terms-template.pdf" },
  eq18: { pdfUrl: "/pdfs/daily-personal.pdf" },
  eq19: { pdfUrl: "/pdfs/terms-template.pdf" },
  eq20: { pdfUrl: "/pdfs/daily-personal.pdf" },
};










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
  // avatar: "https://i.pravatar.cc/150?img=12",
  avatar: "",
  location: "Addis Ababa, Ethiopia",
  totalEqubsJoined: 1,
  activeEqubs: 1,
  completedEqubs: 1,
  savings: 50000,
  contributions: 32000,
  winnings: 50000,
};










// Payments EQUB DUMMY DATA 
// ********************************************************************
// ********************************************************************
// 💳 PAYMENTS
export const paymentsDummyData = [
  // ==== DAILY EQUBS ====
  // eq1 payments
  { equbId: "eq1", userId: "u1", date: "2025-09-01", amount: 100, status: "Paid" },
  { equbId: "eq1", userId: "u2", date: "2025-09-02", amount: 100, status: "Paid" },
  { equbId: "eq1", userId: "u3", date: "2025-09-03", amount: 100, status: "Pending" },

  // eq2 payments
  { equbId: "eq2", userId: "u1", date: "2025-09-01", amount: 50, status: "Paid" },
  { equbId: "eq2", userId: "u2", date: "2025-09-02", amount: 50, status: "Pending" },
  { equbId: "eq2", userId: "u3", date: "2025-09-03", amount: 50, status: "Paid" },

  // eq3 payments
  { equbId: "eq3", userId: "u1", date: "2025-09-01", amount: 500, status: "Paid" },
  { equbId: "eq3", userId: "u2", date: "2025-09-02", amount: 500, status: "Paid" },
  { equbId: "eq3", userId: "u3", date: "2025-09-03", amount: 500, status: "Pending" },

  // ==== WEEKLY EQUBS ====
  { equbId: "eq6", userId: "u1", date: "2025-09-01", amount: 5000, status: "Paid" },
  { equbId: "eq6", userId: "u2", date: "2025-09-02", amount: 5000, status: "Paid" },
  { equbId: "eq6", userId: "u3", date: "2025-09-03", amount: 5000, status: "Pending" },

  // ==== MONTHLY EQUBS ====
  { equbId: "eq11", userId: "u1", date: "2025-09-01", amount: 1000, status: "Paid" },
  { equbId: "eq11", userId: "u2", date: "2025-09-02", amount: 1000, status: "Paid" },
  { equbId: "eq11", userId: "u3", date: "2025-09-03", amount: 1000, status: "Pending" },
];









// members DUMMY DATA 
// ********************************************************************
// ********************************************************************


export const membersDummyData = [
  // ==== DAILY EQUBS ====
  // eq1 members
  { equbId: "eq1", memberId: 1, name: "Abel Solomon", joinedDate: "2025-09-01" },
  { equbId: "eq1", memberId: 2, name: "Marta Alemu", joinedDate: "2025-09-02" },
  { equbId: "eq1", memberId: 3, name: "Dawit Bekele", joinedDate: "2025-09-03" },
  { equbId: "eq1", memberId: 4, name: "Hanna Dagne", joinedDate: "2025-09-04" },
  { equbId: "eq1", memberId: 5, name: "Yonatan Mekonnen", joinedDate: "2025-09-05" },
  { equbId: "eq1", memberId: 6, name: "Rediet Yimer", joinedDate: "2025-09-06" },
  { equbId: "eq1", memberId: 7, name: "Henok Girma", joinedDate: "2025-09-07" },

  // eq2 members
  { equbId: "eq2", memberId: 1, name: "Samuel Getachew", joinedDate: "2025-09-01" },
  { equbId: "eq2", memberId: 2, name: "Lily Tesfaye", joinedDate: "2025-09-02" },
  { equbId: "eq2", memberId: 3, name: "Miki Haile", joinedDate: "2025-09-03" },
  { equbId: "eq2", memberId: 4, name: "Rahel Abate", joinedDate: "2025-09-04" },
  { equbId: "eq2", memberId: 5, name: "Nahom Desta", joinedDate: "2025-09-05" },
  { equbId: "eq2", memberId: 6, name: "Selam Hailu", joinedDate: "2025-09-06" },
  { equbId: "eq2", memberId: 7, name: "Kalkidan Fikre", joinedDate: "2025-09-07" },

  // eq3 members
  { equbId: "eq3", memberId: 1, name: "Daniel Tadesse", joinedDate: "2025-09-01" },
  { equbId: "eq3", memberId: 2, name: "Rahel Abate", joinedDate: "2025-09-02" },
  { equbId: "eq3", memberId: 3, name: "Yonatan Mekonnen", joinedDate: "2025-09-03" },
  { equbId: "eq3", memberId: 4, name: "Saron Tsegaye", joinedDate: "2025-09-04" },
  { equbId: "eq3", memberId: 5, name: "Eden Shiferaw", joinedDate: "2025-09-05" },
  { equbId: "eq3", memberId: 6, name: "Natnael Gashaw", joinedDate: "2025-09-06" },
  { equbId: "eq3", memberId: 7, name: "Tsion Girma", joinedDate: "2025-09-07" },

  // eq4 members
  { equbId: "eq4", memberId: 1, name: "Mesfin Kebede", joinedDate: "2025-09-01" },
  { equbId: "eq4", memberId: 2, name: "Sosina Worku", joinedDate: "2025-09-02" },
  { equbId: "eq4", memberId: 3, name: "Biruk Abera", joinedDate: "2025-09-03" },
  { equbId: "eq4", memberId: 4, name: "Brook Eshetu", joinedDate: "2025-09-04" },
  { equbId: "eq4", memberId: 5, name: "Fitsum Bayou", joinedDate: "2025-09-05" },
  { equbId: "eq4", memberId: 6, name: "Hiwot Asnake", joinedDate: "2025-09-06" },
  { equbId: "eq4", memberId: 7, name: "Meron Tilahun", joinedDate: "2025-09-07" },

  // eq5 members
  { equbId: "eq5", memberId: 1, name: "Hanna Dagne", joinedDate: "2025-09-01" },
  { equbId: "eq5", memberId: 2, name: "Kalkidan Fikre", joinedDate: "2025-09-02" },
  { equbId: "eq5", memberId: 3, name: "Fikru Tola", joinedDate: "2025-09-03" },
  { equbId: "eq5", memberId: 4, name: "Yared Alemu", joinedDate: "2025-09-04" },
  { equbId: "eq5", memberId: 5, name: "Almaz Guta", joinedDate: "2025-09-05" },
  { equbId: "eq5", memberId: 6, name: "Mulugeta Ayalew", joinedDate: "2025-09-06" },
  { equbId: "eq5", memberId: 7, name: "Selamawit Kassie", joinedDate: "2025-09-07" },

  // ==== WEEKLY EQUBS ====
  // eq6 members
  { equbId: "eq6", memberId: 1, name: "Rediet Yimer", joinedDate: "2025-09-01" },
  { equbId: "eq6", memberId: 2, name: "Binyam Abebe", joinedDate: "2025-09-02" },
  { equbId: "eq6", memberId: 3, name: "Eden Shiferaw", joinedDate: "2025-09-03" },
  { equbId: "eq6", memberId: 4, name: "Fitsum Bayou", joinedDate: "2025-09-04" },
  { equbId: "eq6", memberId: 5, name: "Tsion Girma", joinedDate: "2025-09-05" },
  { equbId: "eq6", memberId: 6, name: "Samuel Mekuria", joinedDate: "2025-09-06" },
  { equbId: "eq6", memberId: 7, name: "Genet Alemayehu", joinedDate: "2025-09-07" },

  // eq7 members
  { equbId: "eq7", memberId: 1, name: "Nahom Desta", joinedDate: "2025-09-01" },
  { equbId: "eq7", memberId: 2, name: "Hirut Demissie", joinedDate: "2025-09-02" },
  { equbId: "eq7", memberId: 3, name: "Mulugeta Ayalew", joinedDate: "2025-09-03" },
  { equbId: "eq7", memberId: 4, name: "Rahel Tulu", joinedDate: "2025-09-04" },
  { equbId: "eq7", memberId: 5, name: "Bereket Fufa", joinedDate: "2025-09-05" },
  { equbId: "eq7", memberId: 6, name: "Kidist Tamiru", joinedDate: "2025-09-06" },
  { equbId: "eq7", memberId: 7, name: "Eyasu Mengistu", joinedDate: "2025-09-07" },

  // eq8 members
  { equbId: "eq8", memberId: 1, name: "Brook Eshetu", joinedDate: "2025-09-01" },
  { equbId: "eq8", memberId: 2, name: "Genet Alemayehu", joinedDate: "2025-09-02" },
  { equbId: "eq8", memberId: 3, name: "Fitsum Bayou", joinedDate: "2025-09-03" },
  { equbId: "eq8", memberId: 4, name: "Selam Hailu", joinedDate: "2025-09-04" },
  { equbId: "eq8", memberId: 5, name: "Samuel Mekuria", joinedDate: "2025-09-05" },
  { equbId: "eq8", memberId: 6, name: "Rahel Abate", joinedDate: "2025-09-06" },
  { equbId: "eq8", memberId: 7, name: "Yonatan Hagos", joinedDate: "2025-09-07" },

  // eq9 members
  { equbId: "eq9", memberId: 1, name: "Abel Solomon name: ", joinedDate: "2025-09-01" },
  { equbId: "eq9", memberId: 2, name: "Marta Alemu", joinedDate: "2025-09-02" },
  { equbId: "eq9", memberId: 3, name: "Dawit Bekele", joinedDate: "2025-09-03" },
  { equbId: "eq9", memberId: 4, name: "Hanna Dagne", joinedDate: "2025-09-04" },
  { equbId: "eq9", memberId: 5, name: "Yonatan Mekonnen", joinedDate: "2025-09-05" },
  { equbId: "eq9", memberId: 6, name: "Rediet Yimer", joinedDate: "2025-09-06" },
  { equbId: "eq9", memberId: 7, name: "Henok Girma", joinedDate: "2025-09-07" },

  // eq10 members
  { equbId: "eq10", memberId: 1, name: "Samuel Getachew", joinedDate: "2025-09-01" },
  { equbId: "eq10", memberId: 2, name: "Lily Tesfaye", joinedDate: "2025-09-02" },
  { equbId: "eq10", memberId: 3, name: "Miki haile", joinedDate: "2025-09-03" },
  { equbId: "eq10", memberId: 4, name: "Rahel Abate", joinedDate: "2025-09-04" },
  { equbId: "eq10", memberId: 5, name: "NahomDest", joinedDate: "2025-09-05" },
  { equbId: "eq10", memberId: 6, name: "Selam Hailu", joinedDate: "2025-09-06" },
  { equbId: "eq10", memberId: 7, name: "Kalkidan Fikre", joinedDate: "2025-09-07" },

  // eq11 members
  { equbId: "eq11", memberId: 1, name: "Daniel Tadesse", joinedDate: "2025-09-01" },
  { equbId: "eq11", memberId: 2, name: "Rahel Abate", joinedDate: "2025-09-02" },
  { equbId: "eq11", memberId: 3, name: "Yonatan Mekonnen", joinedDate: "2025-09-03" },
  { equbId: "eq11", memberId: 4, name: "Saron Tsegaye", joinedDate: "2025-09-04" },
  { equbId: "eq11", memberId: 5, name: "Eden Shiferaw", joinedDate: "2025-09-05" },
  { equbId: "eq11", memberId: 6, name: "Natnael Gashaw", joinedDate: "2025-09-06" },
  { equbId: "eq11", memberId: 7, name: "Tsion Girma", joinedDate: "2025-09-07" },

  // eq12 members
  { equbId: "eq12", memberId: 1, name: "Mesfin Kebede", joinedDate: "2025-09-01" },
  { equbId: "eq12", memberId: 2, name: "Sosina Worku", joinedDate: "2025-09-02" },
  { equbId: "eq12", memberId: 3, name: "Biruk Abera", joinedDate: "2025-09-03" },
  { equbId: "eq12", memberId: 4, name: "Brook Eshetu", joinedDate: "2025-09-04" },
  { equbId: "eq12", memberId: 5, name: "Fitsum Bayou", joinedDate: "2025-09-05" },
  { equbId: "eq12", memberId: 6, name: "Hiwot Asnake", joinedDate: "2025-09-06" },
  { equbId: "eq12", memberId: 7, name: "Meron tilahun", joinedDate: "2025-09-07" },

  // eq13 members
  { equbId: "eq13", memberId: 1, name: "Hanna Dagne", joinedDate: "2025-09-01" },
  { equbId: "eq13", memberId: 2, name: "Kalkidan Fikre", joinedDate: "2025-09-02" },
  { equbId: "eq13", memberId: 3, name: "Fikru Tola", joinedDate: "2025-09-03" },
  { equbId: "eq13", memberId: 4, name: "Yared Alemu", joinedDate: "2025-09-04" },
  { equbId: "eq13", memberId: 5, name: "Almaz Guta", joinedDate: "2025-09-05" },
  { equbId: "eq13", memberId: 6, name: "Mulugeta Ayalew", joinedDate: "2025-09-06" },
  { equbId: "eq13", memberId: 7, name: "Selamawit Kassie", joinedDate: "2025-09-07" },

  // eq14 members
  { equbId: "eq14", memberId: 1, name: "Rediet Yimer", joinedDate: "2025-09-01" },
  { equbId: "eq14", memberId: 2, name: "Binyam Abebe", joinedDate: "2025-09-02" },
  { equbId: "eq14", memberId: 3, name: "Eden Shiferaw", joinedDate: "2025-09-03" },
  { equbId: "eq14", memberId: 4, name: "Fitsum Bayou", joinedDate: "2025-09-04" },
  { equbId: "eq14", memberId: 5, name: "Tsion Girma", joinedDate: "2025-09-05" },
  { equbId: "eq14", memberId: 6, name: "Samuel Mekuria", joinedDate: "2025-09-06" },
  { equbId: "eq14", memberId: 7, name: "Genet Alemayehu", joinedDate: "2025-09-07" },

  // eq15 members
  { equbId: "eq15", memberId: 1, name: "NahomDest", joinedDate: "2025-09-01" },
  { equbId: "eq15", memberId: 2, name: "Hirut Demissie", joinedDate: "2025-09-02" },
  { equbId: "eq15", memberId: 3, name: "Mulugeta Ayalew", joinedDate: "2025-09-03" },
  { equbId: "eq15", memberId: 4, name: "Rahel Tulu", joinedDate: "2025-09-04" },
  { equbId: "eq15", memberId: 5, name: "Bereket Fufa", joinedDate: "2025-09-05" },
  { equbId: "eq15", memberId: 6, name: "Kidist Tamiru", joinedDate: "2025-09-06" },
  { equbId: "eq15", memberId: 7, name: "Eyasu Mengistu", joinedDate: "2025-09-07" },

  // eq16 members
  { equbId: "eq16", memberId: 1, name: "Brook Eshetu", joinedDate: "2025-09-01" },
  { equbId: "eq16", memberId: 2, name: "Genet Alemayehu", joinedDate: "2025-09-02" },
  { equbId: "eq16", memberId: 3, name: "Fitsum Bayou", joinedDate: "2025-09-03" },
  { equbId: "eq16", memberId: 4, name: "Selam Hailu", joinedDate: "2025-09-04" },
  { equbId: "eq16", memberId: 5, name: "Samuel Mekuria", joinedDate: "2025-09-05" },
  { equbId: "eq16", memberId: 6, name: "Rahel Abate", joinedDate: "2025-09-06" },

];









// lottery EQUB DUMMY DATA 
// ********************************************************************
// ********************************************************************

// src/db/data.js

// export const lotteryDummyData = [
//   {
//     equbId: "eq1",
//     lastWinner: "Abel Solomon",
//     nextDraw: "2025-10-05",
//     targetDate: new Date(new Date().getTime() + 10 * 1000).toISOString(), // 10 sec from now
//     chances: "1/7",
//     codes: [
//       { code: 101, name: "Abel Solomon" },
//       { code: 102, name: "Marta Alemu" },
//       { code: 103, name: "Dawit Bekele" },
//       { code: 104, name: "Samuel Getachew" },
//       { code: 105, name: "Lily Tesfaye" },
//       { code: 106, name: "Hanna Dagne" },
//       { code: 107, name: "Yonatan Mekonnen" },
//       { code: 108, name: "Rediet Yimer" },
//       { code: 109, name: "Henok Girma" },
//     ],
//   },
//   {
//     equbId: "eq2",
//     lastWinner: "Marta Alemu",
//     nextDraw: "2025-10-12",
//     targetDate: new Date(new Date().getTime() + 15 * 1000).toISOString(), // 15 sec from now
//     chances: "1/7",
//     codes: [
//       { code: 201, name: "Abel Solomon" },
//       { code: 202, name: "Marta Alemu" },
//       { code: 203, name: "Dawit Bekele" },
//       { code: 204, name: "Samuel Getachew" },
//       { code: 205, name: "Lily Tesfaye" },
//       { code: 206, name: "Hanna Dagne" },
//       { code: 207, name: "Yonatan Mekonnen" },
//       { code: 208, name: "Rediet Yimer" },
//       { code: 209, name: "Henok Girma" },
//     ],
//   },
// ];

export const lotteryDummyData = [
  {
    equbId: "eq1",
    lastWinner: "Abel Solomon",
    nextDraw: "2025-10-05",        // original
  //targetDate: "2025-10-05T21:00:00", // ⏳ added for Countdown
      targetDate: new Date(new Date().getTime() + 10 * 1000).toISOString(), 
    chances: "1/7",
    codes: [
      { code: 101, name: "Abel Solomon" },
      { code: 102, name: "Marta Alemu" },
      { code: 103, name: "Dawit Bekele" },
      { code: 104, name: "Samuel Getachew" },
      { code: 105, name: "Lily Tesfaye" },
      { code: 106, name: "Hanna Dagne" },
      { code: 107, name: "Yonatan Mekonnen" },
      { code: 108, name: "Rediet Yimer" },
      { code: 109, name: "Henok Girma" },
      
    ],
  },
  {
    equbId: "eq2",
    lastWinner: "Marta Alemu",
    nextDraw: "2025-10-12",        // original
    targetDate: "2025-10-12T21:00:00", // ⏳ added for Countdown
      //targetDate: new Date(new Date().getTime() + 10 * 1000).toISOString(), 
    chances: "1/7",
    codes: [
      { code: 201, name: "Abel Solomon" },
      { code: 202, name: "Marta Alemu" },
      { code: 203, name: "Dawit Bekele" },
      { code: 204, name: "Samuel Getachew" },
      { code: 205, name: "Lily Tesfaye" },
    ],
  },
  // ... add more Equbs if needed
];









// Info EQUB DUMMY DATA 
// ********************************************************************
// ********************************************************************
export const infoDummyData = [
  // ==== DAILY EQUBS ====
  {
    equbId: "eq1",
    name: "Daily Savings Equb",
    type: "Daily",
    contribution: 100,
    cycleSize: 1, // 1 day
    duration: "105 days",
    totalMembers: 10,
    description: "This is a Daily Savings Equb for short-term personal savings.",
    rules: "Contribute daily. Winner is drawn randomly each round.",
    benefits: [
      "Encourages daily saving discipline",
      "Quick access to pooled funds",
      "Fair lottery-based winner selection"
    ],
    penalties: "Missing a payment may disqualify you from the next draw.",
    startDate: "2025-09-01",
  },
  {
    equbId: "eq2",
    name: "Daily Drivers Fuel Equb",
    type: "Daily",
    contribution: 50,
    cycleSize: 1,
    duration: "60 days",
    totalMembers: 15,
    description: "Daily Drivers Fuel Equb designed to help drivers manage fuel costs.",
    rules: "Contribute daily. Winner is selected in rotation.",
    benefits: [
      "Helps manage daily fuel expenses",
      "Simple and predictable savings cycle",
      "Fair distribution of funds"
    ],
    penalties: "Late payments may reduce future eligibility.",
    startDate: "2025-09-02",
  },
  {
    equbId: "eq3",
    name: "Daily Merchants Cash Flow Equb",
    type: "Daily",
    contribution: 500,
    cycleSize: 1,
    duration: "90 days",
    totalMembers: 8,
    description: "Supports merchants by providing consistent cash flow through daily pooling.",
    rules: "Contribute daily. Winner is drawn randomly.",
    benefits: [
      "Improves merchant liquidity",
      "Reliable pooled funds",
      "Transparent contribution process"
    ],
    penalties: "Missed contributions may forfeit participation.",
    startDate: "2025-09-03",
  },
  {
    equbId: "eq4",
    name: "Daily Employers Office Support Equb",
    type: "Daily",
    contribution: 200,
    cycleSize: 1,
    duration: "75 days",
    totalMembers: 6,
    description: "Daily Employers Office Support Equb to manage office expenses effectively.",
    rules: "Contribute daily. Winner rotates among members.",
    benefits: [
      "Covers daily office needs",
      "Shared responsibility model",
      "Predictable fund access"
    ],
    penalties: "Non-payment may delay fund allocation.",
    startDate: "2025-09-04",
  },
  {
    equbId: "eq5",
    name: "Daily Community Kitchen Equb",
    type: "Daily",
    contribution: 100,
    cycleSize: 1,
    duration: "90 days",
    totalMembers: 20,
    description: "Daily Community Kitchen Equb to support communal food programs.",
    rules: "Contribute daily. Winner is drawn randomly.",
    benefits: [
      "Supports food sharing initiatives",
      "Strengthens community bonds",
      "Transparent and fair process"
    ],
    penalties: "Late contributions may limit kitchen participation.",
    startDate: "2025-09-05",
  },

  // ==== WEEKLY EQUBS ====
  {
    equbId: "eq6",
    name: "Weekly Merchants Equb",
    type: "Weekly",
    contribution: 5000,
    cycleSize: 7, // 7 days = 1 week
    duration: "53 weeks",
    totalMembers: 6,
    description: "Weekly Merchants Equb designed to support small businesses and investments.",
    rules: "Contribute weekly. Winner rotates in sequence.",
    benefits: [
      "Encourages long-term business savings",
      "Predictable winner cycle",
      "Large pooled funds"
    ],
    penalties: "Missed payments may suspend participation.",
    startDate: "2025-09-06",
  },
  {
    equbId: "eq7",
    name: "Weekly Drivers Maintenance Equb",
    type: "Weekly",
    contribution: 1000,
    cycleSize: 7,
    duration: "26 weeks",
    totalMembers: 12,
    description: "Weekly Equb to help drivers cover regular vehicle maintenance costs.",
    rules: "Contribute weekly. Winner is drawn randomly.",
    benefits: [
      "Helps manage vehicle maintenance",
      "Consistent savings routine",
      "Transparent winner process"
    ],
    penalties: "Missed payment may lead to exclusion.",
    startDate: "2025-09-07",
  },
  {
    equbId: "eq8",
    name: "Weekly Employers Salary Support Equb",
    type: "Weekly",
    contribution: 2000,
    cycleSize: 7,
    duration: "20 weeks",
    totalMembers: 7,
    description: "Supports employers in managing staff salaries through pooled weekly funds.",
    rules: "Contribute weekly. Winner rotates among members.",
    benefits: [
      "Helps cover staff salaries",
      "Supports employers in cash flow management",
      "Transparent and fair system"
    ],
    penalties: "Delayed payment may restrict payout eligibility.",
    startDate: "2025-09-08",
  },
  {
    equbId: "eq9",
    name: "Weekly Community Sports Fund",
    type: "Weekly",
    contribution: 500,
    cycleSize: 7,
    duration: "30 weeks",
    totalMembers: 18,
    description: "Weekly Equb to fund local community sports and recreational activities.",
    rules: "Contribute weekly. Winner is drawn randomly.",
    benefits: [
      "Promotes community sports",
      "Collective contribution system",
      "Transparent rotation process"
    ],
    penalties: "Missed payments may restrict team participation.",
    startDate: "2025-09-09",
  },
  {
    equbId: "eq10",
    name: "Weekly Personal Health Equb",
    type: "Weekly",
    contribution: 1000,
    cycleSize: 7,
    duration: "25 weeks",
    totalMembers: 9,
    description: "Weekly Equb to help members cover personal or family health expenses.",
    rules: "Contribute weekly. Winner is rotated in sequence.",
    benefits: [
      "Supports health-related expenses",
      "Predictable payout schedule",
      "Shared responsibility model"
    ],
    penalties: "Late payments may incur small fines.",
    startDate: "2025-09-10",
  },

  // ==== MONTHLY EQUBS ====
  {
    equbId: "eq11",
    name: "Monthly Drivers Equb",
    type: "Monthly",
    contribution: 1000,
    cycleSize: 30, // 30 days = ~1 month
    duration: "13 months",
    totalMembers: 8,
    description: "Monthly Equb to support drivers with savings for bigger expenses.",
    rules: "Contribute monthly. Winner is drawn randomly.",
    benefits: [
      "Supports drivers with larger savings",
      "Predictable monthly contributions",
      "Fair lottery system"
    ],
    penalties: "Missed payment results in skipped payout.",
    startDate: "2025-09-11",
  },

  {
    equbId: "eq12",
    name: "Business Investment Equb",
    type: "Monthly",
    contribution: 1000,
    cycleSize: 30,
    duration: "13 months",
    totalMembers: 12,
    description: "Monthly Business Investment Equb for merchants to fund business growth.",
    rules: "Contribute monthly. Winner rotates among members.",
    benefits: [
      "Funds business expansion",
      "Predictable savings pool",
      "Supports merchant growth"
    ],
    penalties: "Late contributions reduce eligibility.",
    startDate: "2025-09-12",
  },

  // ... continue same pattern for eq13 to eq20 with cycleSize: 30
];










// Help  EQUB DUMMY DATA 
// ********************************************************************
// ********************************************************************

export const helpDummyData = {
  faq: [
    { q: "What is an Equb?", a: "An Equb is a traditional savings system where members contribute regularly, and one member wins the pooled amount each round." },
    { q: "How do I contribute?", a: "You can contribute via mobile money, bank transfer, or in-app wallet depending on your settings." },
    { q: "When are contributions due?", a: "Due dates depend on the Equb type (daily, weekly, or monthly). Check your Equb details page." },
    { q: "When do I win?", a: "Winners are selected either randomly (lottery) or in rotation depending on the Equb rules." },
    { q: "Can I miss a payment?", a: "Missing a payment may disqualify you from winning in the current round and could result in penalties." },
    { q: "Can I withdraw early?", a: "No, funds are locked until it’s your turn to win or the cycle ends." },
    { q: "How are winners notified?", a: "You’ll receive an in-app notification, SMS, or email when you win." },
    { q: "What if I win but haven’t paid?", a: "Unpaid members cannot claim winnings. You must be up to date with contributions." },
    { q: "Is my money safe?", a: "Yes. Funds are secured in a pooled account and transactions are logged in the app." },
    { q: "Can I leave the Equb?", a: "Leaving early is not allowed once the group is formed. You must complete the cycle." },
    { q: "What happens if someone defaults?", a: "If a member fails to pay, penalties apply and the Equb continues with active members." },
    { q: "Can I join multiple Equbs?", a: "Yes, you can participate in more than one Equb if you can manage contributions." },
    { q: "Are there service fees?", a: "A small admin fee may apply depending on the Equb type." },
    { q: "Can I invite others?", a: "Yes, you can invite trusted friends and family using your unique invite link." },
    { q: "What happens when the Equb ends?", a: "When all members have won, the Equb closes automatically. You can rejoin if a new round opens." },
   
    
  ],

  supportContact: {
    email: "support@equbapp.com",
    phone: "+251 911 000 000",
    telegram: "@EqubSupport",
  },

  guidelines: [
    "Always make payments on time.",
    "Check notifications regularly for updates.",
    "Keep your contact details up to date.",
    "Invite only trusted people to join your Equbs.",
    "Contact support immediately if you face issues.",
  ],
};




