import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "@/pages/home";
import { ReactNode } from "react";

const AppRoutes = ({ children }: { children: ReactNode }) => {
  return (
    <Router>
      {children}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
