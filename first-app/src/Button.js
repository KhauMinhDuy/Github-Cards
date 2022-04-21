function Button({ handleIncrement, increment }) {
  const handleClick = () => handleIncrement(increment);
  return <button onClick={handleClick}>+{increment}</button>;
}

export default Button;
