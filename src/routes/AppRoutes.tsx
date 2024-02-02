import BaseLayout from "@/components/layout/BaseLayout";
import {
  CreatorPage,
  CreatorPageDetails,
  ErrorPage,
  GamePage,
  GamePageDetails,
  HomePage,
  StorePage,
  StorePageDetails,
} from "@/views";

// Need to import pages for each component to render
import { BrowserRouter, Route, Routes } from "react-router-dom";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BaseLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/game" element={<GamePage />} />
          <Route path="/game/:id" element={<GamePageDetails />} />
          <Route path="/store" element={<StorePage />} />
          <Route path="/store/:id" element={<StorePageDetails />} />
          <Route path="/creator" element={<CreatorPage />} />
          <Route path="/creator/:id" element={<CreatorPageDetails />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
