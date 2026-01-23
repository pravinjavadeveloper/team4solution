import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // "instant" behavior prevents the smooth scroll animation
    // which looks weird when changing pages.
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", 
    });
  }, [pathname]); // Runs every time the route (pathname) changes

  return null;
}