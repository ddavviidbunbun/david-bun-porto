import { useEffect } from "react";
import "../assets/style.css";
import NavBar from "../components/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Experiences from "./Experiences";
import Posts from "./Posts";

export default function CorePage() {
  useEffect(() => {
    document.title = "Main App";
  });

  return (
    <BrowserRouter basename="/david-bun-porto/">
      <div className="luasUtama relative">
        <NavBar />
        <Routes>
          <Route element={<AboutMe />} path="/" />
          <Route element={<AboutMe />} path="/aboutme" />
          <Route element={<Projects />} path="/projects" />
          <Route element={<Experiences />} path="/experiences" />
          <Route element={<Posts />} path="/posts" />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
