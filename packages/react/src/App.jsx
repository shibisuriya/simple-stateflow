import React, { useRef, Fragment, useEffect, useState } from "react";
import "./styles.css";

const Container = React.forwardRef((props, ref) => {
  const { children } = props;
  return (
    <div ref={ref} className="square-container">
      {children}
    </div>
  );
});

const SQUARE_SIDE = 100;
function App() {
  const containerRef = useRef();
  const [squares, setSquares] = useState([
    { left: 0, top: 1 },
    { left: 0, top: 1 },
  ]);
  const generateRandomNumber = (min, max) => {
    const randomNumber = Math.floor(Math.random() * (max - min) + min);
    return randomNumber;
  };

  const generateSquare = () => {
    const { offsetLeft, offsetTop, clientWidth, clientHeight } =
      containerRef.current;
    console.log("offsetLeft -> ", offsetLeft);
    console.log("offsetTop -> ", offsetTop);
    console.log("width -> ", clientWidth);
    console.log("height -> ", clientHeight);
    const leftRange = {
      min: offsetLeft,
      max: offsetLeft + clientWidth,
    };

    const topRange = {
      min: offsetTop,
      max: offsetTop + clientHeight,
    };

    const s1 = {
      left: generateRandomNumber(
        leftRange.min + SQUARE_SIDE,
        leftRange.max - SQUARE_SIDE
      ),
      top: generateRandomNumber(
        topRange.min + SQUARE_SIDE,
        topRange.max - SQUARE_SIDE
      ),
    };

    const s2 = {
      left: generateRandomNumber(leftRange.min, leftRange.max - SQUARE_SIDE),
      top: generateRandomNumber(topRange.min, topRange.max - SQUARE_SIDE),
    };
    console.log("leftRange -> ", leftRange);
    console.log("topRange -> ", topRange);
    console.log([s1, s2]);
    setSquares([s1, s2]);
  };

  useEffect(() => {
    generateSquare();
  }, []);
  return (
    <Fragment>
      <Container ref={containerRef}>
        {squares.map((square, index) => {
          const { left, top } = square;
          return (
            <div
              className="square"
              style={{
                left: `${left}px`,
                top: `${top}px`,
                width: SQUARE_SIDE,
                height: SQUARE_SIDE,
              }}
              key={index}
            >
              {index}
            </div>
          );
        })}
        <svg width="500" height="500">
          <line
            x1={squares[0].left}
            y1={squares[0].top}
            x2={squares[1].left}
            y2={squares[1].top}
            stroke="black"
          />
        </svg>
      </Container>
      <button onClick={generateSquare}>Random</button>
    </Fragment>
  );
}

export default App;
