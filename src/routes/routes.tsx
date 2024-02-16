import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "@/pages/home";
import { ReactNode } from "react";
import Article from "@/pages/article";

const AppRoutes = ({ children }: { children: ReactNode }) => {
  return (
    <Router>
      {children}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/article/:id" element={<Article />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
