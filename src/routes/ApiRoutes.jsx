import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { AuthContextProvider } from "../hooks/AuthContext";
const HomePage = lazy(() => import("../components/pages/HomePage"));
const VideoDetailsPage = lazy(() =>
  import("../components/pages/VideoDetailsPage")
);
// const VideoPage = lazy(() => import("../components/pages/VideoPage"));
const LoginPage = lazy(() => import("../components/pages/LoginPage"));
const SignupPage = lazy(() => import("../components/pages/SignupPage"));
// const UploadVideoPage = lazy(() =>
//   import("../components/pages/UploadVideoPage")
// );

export const ApiRoutes = () => {
  //   const { isAuthenticated } = useContext(AuthContextProvider);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/:videoId" element={<VideoDetailsPage />} />
      {/* <Route path="/:videoId" element={<VideoPage />} /> */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      {/* <Route path="/upload" element={<UploadVideoPage />} /> */}
    </Routes>
  );
};
