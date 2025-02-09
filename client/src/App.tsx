import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AuthPage from "./pages/Auth";
import ProtectedRoute from "./components/ProtectedRoute";
import Dashboard from "./pages/Dashboard";
import SnackbarProvider from "./components/SnackbarProvider";
import Rankings from "./pages/Rankings";
import UpcomingMatches from "./pages/UpcomingMatches";

function App() {
  return (
    <SnackbarProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<AuthPage />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/rankings"
            element={
              <ProtectedRoute>
                <Rankings />
              </ProtectedRoute>
            }
          />
          <Route
            path="/upcoming"
            element={
              <ProtectedRoute>
                <UpcomingMatches />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </BrowserRouter>
    </SnackbarProvider>
  );
}
export default App;
