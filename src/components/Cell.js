import React from "react";

const Cell = ({ id, cell, setCells, go, setGo, cells, winningMessage }) => {
  const hendelClick = (e) => {
    const taken =
      e.target.firstChild.classList.contains("circle") ||
      e.target.firstChild.classList.contains("cross");

    if (!taken) {
      if (go === "circle") {
        e.target.firstChild.classList.add("circle");
        hendelCellChange("circle");
        setGo("cross");
      }
      if (go === "cross") {
        e.target.firstChild.classList.add("cross");
        hendelCellChange("cross");
        setGo("circle");
      }
    }
  };

  const hendelCellChange = (className) => {
    const nextCells = cells.map((cell, index) => {
      if (index === id) {
        return className;
      } else {
        return cell;
      }
    });
    setCells(nextCells);
  };

  return (
    <div
      className="square"
      id={id}
      onClick={!winningMessage ? hendelClick : undefined}
    >
      <div className={cell}></div>
    </div>
  );
};

export default Cell;
