import { useState } from 'react';
import './Hello.css';

const Hello = (props) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    // classes = "hello selecteds";
  };

  const classes = clicked ? 'hello selected' : 'hello';

  return (
  <h1 className={classes} onClick={handleClick}>
    Hello {props.name}, in five years you'll be {props.age + 5} years old!
  </h1>
  );
};

export default Hello;
