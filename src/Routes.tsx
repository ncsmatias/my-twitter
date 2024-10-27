import React from "react"
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
} from "react-router-dom"
import { CommentsPage, FeedPage, LoginPage } from "./pages"


export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FeedPage />} />
        <Route path="/comments/:tweetSlug" element={<CommentsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}