const setViewportHeight = () => {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh.toString()}px`);
};

export const initializeViewportHeight = () => {
  setViewportHeight();
  window.addEventListener("resize", setViewportHeight);
  window.addEventListener("orientationchange", setViewportHeight);

  return () => {
    window.removeEventListener("resize", setViewportHeight);
    window.removeEventListener("orientationchange", setViewportHeight);
  };
};
