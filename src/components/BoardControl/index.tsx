import React, { useContext } from "react";
import { ElevatorContext } from "../../hooks/ElevatorContext";
import "./module.css";

export function BoardControl() {
  const { active, handleClickBoard } = useContext(ElevatorContext);

  return (
    <div className="row">
      {Array.from({ length: 4 }, (_, i) => i + 2).map((i) => (
        <div className="col-6 d-flex mb-4" key={i}>
          <button
            className={`btn m-auto button-control rounded-circle ${
              active === i && "active"
            } `}
            onClick={() => handleClickBoard(i)}
          >
            {i - 1}
          </button>
        </div>
      ))}
      <div className="col-12 d-flex mt-2">
        <button
          className={`btn m-auto button-control rounded-circle ${
            active === 1 && "active"
          } `}
          onClick={() => handleClickBoard(1)}
        >
          T
        </button>
      </div>
    </div>
  );
}
