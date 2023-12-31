import React from "react";
import { Route, Routes } from "react-router-dom";
import RouterLayout from "./common/RouterLayout";
import RouterMinimalLayout from "./common/RouterMinimalLayout";
import { FaqPage } from "./pages/faq";
import { HomePage } from "./pages/home";
import { LoginPage } from "./pages/login";
import { ModulePage } from "./pages/module";
import ModuleDetailPage from "./pages/module/details";
import ModuleCreatePage from "./pages/module/create";

export const AppRouter: React.FC<object> = () => {
  return (
    <Routes>
      <Route path="/" element={<RouterLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/tags" element={<HomePage />} />
        <Route path="/faqs" element={<FaqPage />} />
        <Route path="/modules" element={<ModulePage />} />
        <Route path="/modules/create" element={<ModuleCreatePage />} />
        <Route
          path="/modules/:moduleId/details"
          element={<ModuleDetailPage />}
        />
      </Route>
      <Route path="/" element={<RouterMinimalLayout />}>
        <Route path="/login" element={<LoginPage />} />
      </Route>
    </Routes>
  );
};
