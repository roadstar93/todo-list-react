import { useState } from "react";

function useToggle(initialVal = false) {
    //call useState
  const [state, setState] = useState(initialVal);
  const toggle = () => {
      setState(!state)
  };
  //Return state and function to toggle it
  return[state, toggle]
}
export default useToggle;