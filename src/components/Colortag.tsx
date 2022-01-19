import "./Colortag.css";
import { BlockPicker } from 'react-color';

function Period(props: { name: any; }) {
  let style: any = {};
  const color = localStorage.getItem(`${props.name}color`);
  if (color) {
    style.backgroundColor = color;
  }
  function clickHandle() {

  }

  return (
    <div id="Colortag" style={style} onClick={clickHandle}>
      {/* &nbsp; */} <BlockPicker />
    </div>
  );
}

export default Period;
