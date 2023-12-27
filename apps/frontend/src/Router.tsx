import React from "react";
import { Route, Routes } from "react-router-dom";
import RouterLayout from "./common/RouterLayout";
import { HomePage } from "./pages/home";
import { LoginPage } from "./pages/login";
import RouterMinimalLayout from "./common/RouterMinimalLayout";
import FaqPage from "./pages/faq";

export const AppRouter: React.FC<object> = () => {
  return (
    <Routes>
      <Route path="/" element={<RouterLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/tags" element={<HomePage />} />
        <Route path="/faqs" element={<FaqPage />} />
      </Route>
      <Route path="/" element={<RouterMinimalLayout />}>
        <Route path="/login" element={<LoginPage />} />
      </Route>
    </Routes>
  );
};
