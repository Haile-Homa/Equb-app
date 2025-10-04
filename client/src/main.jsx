import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext.jsx'
import { ToastProvider } from './context/ToastContext.jsx'
import { NotificationProvider } from "./context/NotificationContext.jsx";
import { HistoryProvider } from "./context/HistoryContext";
import { EqubProvider } from "./context/EqubContext";
import { LotteryProvider } from "./context/LotteryContext";



createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AuthProvider>
      <NotificationProvider>
        <HistoryProvider>
          <EqubProvider>
            <LotteryProvider>
              <ToastProvider>
                <App />
              </ToastProvider>
            </LotteryProvider>
          </EqubProvider>
        </HistoryProvider>
      </NotificationProvider>
    </AuthProvider>
  </BrowserRouter>

)

