import React, { useCallback, useState } from 'react';
import './style.css';

// Usage
export default function App() {
  // Call the hook which returns, current value and the toggler function
  const [isTextChanged, setIsTextChanged] = useToggle();
  return (
    <button onClick={setIsTextChanged}>
      {isTextChanged ? 'Toggled' : 'Click to Toggle'}
    </button>
  );
}
// Hook
// Parameter is the boolean, with default "false" value
const useToggle = (initialState) => {
  // Initialize the state
  const [state, setState] = useState(initialState);
  // Define and memorize toggler function in case we pass down the comopnent,
  // This function change the boolean value to it's opposite value
  const toggle = useCallback(() => setState((state) => !state), []);
  return [state, toggle];
};
