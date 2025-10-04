/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class", // 🌙 enables dark mode via `class="dark"`
  theme: {
    extend: {
      colors: {

        /* Light Theme */
        light: {
          brand: {
            primary: "#418AC7",
            secondary: "#63b3ed",
            // tertiary: "#9333EA",
            //  tertiary: "#F97316",
            // tertiary: "#1F2937",
            tertiary: "#1d82ed",
            
           
            foreground: "#ffffff",
          },

          hovercolor: {
            primary: "#64B5F6"

          },

          btns: {
            primary: "#60A5FA",
            secondary_hoverd: "#93C5FD",
            tertiary: "#ffffff",
          },


          accent: {
            primary: "#f97316",
            secondary: "#fb923c",
            foreground: "#ffffff",
          },

          background: "#ffffff",
          surface: "#f9fafb",
          muted: "#f3f4f6",

          // 👇 Add these new semantic background & border tokens
          background: "#ffffff",        // page or modal background
          surface: "#f9fafb",           // default surface (e.g., cards, panels)
          bordercolor: "#e5e7eb",            // default border
          borderCard: "#e0e0e0",        // ← your specific card border color

          text: {
            primary: "#111827",
            secondary: "#374151",
            tertiary: "#6b7280",
          },
          border: "#e5e7eb",
        },




        /* 🌙 Dark Theme */
        dark: {
          brand: {
            primary: "#60a5fa",
            secondary: "#93c5fd",
            foreground: "#1e293b",
          },
          accent: {
            primary: "#fb923c",
            secondary: "#fbbf24",
            foreground: "#1e293b",
          },
          background: "#0f172a",
          surface: "#1e293b",
          muted: "#334155",
          text: {
            primary: "#f1f5f9",
            secondary: "#e2e8f0",
            tertiary: "#94a3b8",
          },
          border: "#475569",
        },
      },



    },
  },
  plugins: [],
};
