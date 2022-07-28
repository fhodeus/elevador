import React, { createContext, useState } from "react";

interface ElevatorContextProps {
  floor: number;
  door: boolean;
  active: number;
  handleClickBoard: (e: number) => void;
}

export const ElevatorContext = createContext({} as ElevatorContextProps);

export function ElevatorProvider({ children }) {
  const [floor, setFloor] = useState<number>(1);
  const [door, setDoor] = useState<boolean>(true);
  const [active, setActive] = useState<number>(-1);

  const handleClickBoard = async (newFloor: number) => {
    if (newFloor === floor || active !== -1 ) return;
    setDoor(false);
    setActive(newFloor);
    setTimeout(() => {
      setFloor(newFloor);
      setTimeout(() => {
        setDoor(true);
        setActive(-1);
      }, 2500);
    }, 2500);
  };

  return (
    <ElevatorContext.Provider value={{ handleClickBoard, floor, door, active }}>
      {children}
    </ElevatorContext.Provider>
  );
}
