import React, { useContext } from "react";
import { ElevatorContext } from "../../hooks/ElevatorContext";
import "./module.css";

export function Elevator() {
  const { floor, door } = useContext(ElevatorContext);

  return (
    <div className="elevator-container d-flex bg-secondary">
      <div className="elevator mt-auto position-relative" style={{ height: `${floor * 160}px` }}>
        <div className="elevator-box bg-white d-flex position-absolute">
          <div className={`door h-100 w-50 bg-dark left-door ${door && "open"}`} />
          <div className={`door h-100 w-50 bg-dark right-door ${door && "open"}`} />
        </div>
      </div>
    </div>
  );
}
