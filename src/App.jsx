import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import StackDash from "./components/StackDash";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import NewStack from "./components/NewStack";
import CardDash from "./components/CradDash";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Public Route */}
        <Route path="/login" element={<Login />} />

        {/* Protected Dashboard Route */}
        <Route 
          path="/" 
          element={
            <ProtectedRoute>
              <Header />
              <StackDash />
            </ProtectedRoute>
          }
        />

        <Route 
          path="/stacks" 
          element={
            <ProtectedRoute>
              <Header />
              <NewStack></NewStack>
            </ProtectedRoute>
          }
        />
        <Route 
          path="/stacks/:id/cards" 
          element={
            <ProtectedRoute>
              <Header />
              <CardDash/>
            </ProtectedRoute>
          }
        />

      </Routes>

      
    </BrowserRouter>
  );
}

export default App;
