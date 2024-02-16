import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "@/pages/home";
import { ReactNode } from "react";
import Article from "@/pages/article";

const AppRoutes = ({ children }: { children: ReactNode }) => {
  return (
    <Router>
      {children}
      <Routes>
        <Route>
          <Route index element={<Home />} />
          <Route path="/:id" element={<Article />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
