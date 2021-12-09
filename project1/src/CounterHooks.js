import React, { useState, useContext } from "react";
import { ThemeContext } from "./App";

export default function CounterHooks({ initialCount }) {
  console.log("Render Counter Hooks");
  // For (1) &(2)
  // count[state, setState] = useState({count: initialCount})
  //For (3)
  const [count, setCount] = useState(initialCount);
  const style = useContext(ThemeContext);
  return (
    <>
      {/* (3) */}

      <button
        style={style}
        onClick={() => setCount((prevCount) => prevCount - 1)}
      >
        -
      </button>
      <span>{count}</span>
      <button
        style={style}
        onClick={() => setCount((prevCount) => prevCount + 1)}
      >
        +
      </button>
    </>
  );
}

//   {/* (1) This one is not a good practice because when you use function twice, the answer wont be +2 but +1.  */}
//   {/* <button onClick={(prevState) => setState({ count: prevState.count - 1 })}></button> */}

//   {/* (2) This one can be updated with Hook name [count, setCount] instead [state, setState]  */}
//   {/* <button
//     onClick={() =>
//       setState((prevState) => {
//         return { count: prevState.count - 1 };
//       })
//     }
//   > */}
