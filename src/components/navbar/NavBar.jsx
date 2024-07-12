import "./NavBar.css";
import React, { useState, useEffect, useRef, useCallback } from "react";
import mylogo from "../../image/smlogo.png";

const NavBar = () => {
  const letters =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIKLMNOPQRSTUVWXYZ1234567890/*-+~=!@#$^&(){}[]| ";
  const [intervalId, setIntervalId] = useState(null);
  const pRef = useRef(null);

  const startHackerEffect = useCallback(() => {
    let iteration = 0;

    clearInterval(intervalId);

    const newIntervalId = setInterval(() => {
      pRef.current.innerText = pRef.current.innerText
        .split("")
        .map((letter, index) => {
          if (index < iteration) {
            return pRef.current.dataset.value[index];
          }

          return letters[Math.floor(Math.random() * 26)];
        })
        .join("");

      if (iteration >= pRef.current.dataset.value.length) {
        clearInterval(newIntervalId);
      }

      iteration += 1 / 3;
    }, 50);

    setIntervalId(newIntervalId);
  }, [letters, intervalId]);

  useEffect(() => {
    startHackerEffect();

    return () => clearInterval(intervalId);
  }, [intervalId, startHackerEffect]);
  return (
    <div className="navbar">
      <div className="navbarComponent">
        <div className="logo">
          <img src={mylogo} alt="logo" />
        </div>
        <div className="navLogo">
          <p ref={pRef} data-value="React Multi Factor Form">
            React Multi Factor Form
          </p>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
