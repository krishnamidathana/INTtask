import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import RegistrationForm from "./Components/sidebar/RegistrationForm";
import CounterDashboard from "./Components/dashBoards/CounterDashboard";
import Accelerometer from "./Components/sidebar/Accelerometer";
import Accelerometer1 from "./Components/sidebar/Accelerometer1";
import TaskDashboard from "./Components/dashBoards/TaskDashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/registration" element={<RegistrationForm />} />
        <Route path="/counter" element={<CounterDashboard />} />
        <Route path="/accelerometer" element={<Accelerometer />} />
        <Route path="/accelerometer1" element={<Accelerometer1 />} />
        <Route path="/tasksDashboard" element={<TaskDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
