import React, { useEffect, useRef, useState } from "react";
import "./styles.css";

function App1() {
  const [stateflowItems, setStateflowItems] = useState(
    {
      x: 1,
      y: 1,
    }
    // {
    //   x: 100,
    //   y: 100,
    // },
  );
  const stateflowItemsRef = useRef();
  const stateflowContainerRef = useRef();

  useEffect(() => {
    stateflowContainerRef.current.addEventListener("mousemove", (e) => {
      console.log(e);
      const { x, y } = e;
      setStateflowItems({ x, y });
    });
  }, []);
  return (
    <div className="stateflow-container" ref={stateflowContainerRef}>
      <div
        className="stateflow-item"
        style={{ left: `${stateflowItems.x}px`, top: `${stateflowItems.y}px` }}
        ref={stateflowItemsRef}
      ></div>
      {/* {stateflowItems.map((item, index) => {
        return (
          
        );
      })} */}
    </div>
  );
}

export default App1;
