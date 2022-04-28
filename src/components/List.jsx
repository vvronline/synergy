import React, { useState, useEffect } from "react";
import "./List.css";

function List() {
  const [list, setList] = useState([1, 2]);
  const [changecolor, setChangecolor] = useState(false);

  const timer = () => {
    setList([...list, list[list.length - 1] + 1]);
  };

  useEffect(() => {
    if (list.length === 100) {
      setChangecolor(true);
      return;
    }
    const intervals = setInterval(timer, 1000);

    return () => {
      clearInterval(intervals);
    };
  }, [list]);

  return (
    <div>
      <h1>Magic Numbers</h1>
      <div className="container">
        <ul>
          {list.map((item, index) => (
            <li
              className={
                changecolor && (index + 1) % 6 == 0
                  ? "six"
                  : changecolor && (index + 1) % 3 == 0
                  ? "three"
                  : changecolor && (index + 1) % 2 == 0
                  ? "two"
                  : "normal"
              }
              key={item}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default List;
