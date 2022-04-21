import { useState } from "react";
import Button from "./Button";
import Display from "./Display";

function App() {
  const [count, setCount] = useState(0);

  const handleClick = (increment) => setCount(count + increment);

  return (
    <>
      <Button handleIncrement={handleClick} increment={1} />
      <Button handleIncrement={handleClick} increment={5} />
      <Button handleIncrement={handleClick} increment={10} />
      <Button handleIncrement={handleClick} increment={20} />
      <Display count={count} />
    </>
  );
}

export default App;
