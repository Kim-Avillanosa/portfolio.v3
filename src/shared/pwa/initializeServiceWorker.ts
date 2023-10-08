import { useState } from "react";

export const useServiceWorker = () => {
  const initialize = () => {
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", () => {
        navigator.serviceWorker
          .register("/server.js", {
            scope: ".",
          })
          .then(
            (registration) => {
              console.log(
                "Service Worker registered with scope:",
                registration.scope
              );
            },
            (error) => {
              console.error("Service Worker registration failed:", error);
            }
          );
      });
    }
  };

  return { initialize };
};
