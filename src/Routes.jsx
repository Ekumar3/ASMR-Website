import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const MacBookPro16Thirteen = React.lazy(() =>
  import("pages/MacBookPro16Thirteen"),
);
const MacBookPro16Twelve = React.lazy(() => import("pages/MacBookPro16Twelve"));
const MacBookPro16Nine = React.lazy(() => import("pages/MacBookPro16Nine"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/macbookpro16nine" element={<MacBookPro16Nine />} />
          <Route path="/macbookpro16twelve" element={<MacBookPro16Twelve />} />
          <Route
            path="/macbookpro16thirteen"
            element={<MacBookPro16Thirteen />}
          />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
