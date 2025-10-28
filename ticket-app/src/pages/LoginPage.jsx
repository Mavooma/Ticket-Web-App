const login = () => {
  if (username.trim() === "" || password.trim() === "") {
    alert("Please enter username and password");
    return;
  }

  if (username === "admin" && password === "1234") {
    onNavigate("dashboard");
  } else {
    alert("Invalid credentials");
  }
};
import { useState } from "react";