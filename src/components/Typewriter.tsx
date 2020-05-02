import React, { useEffect, useState } from "react";
import "./Typewriter.css";
export default function Typewriter(props) {
  const [text, setText] = useState("");
  const [pointer, setPointer] = useState(-1);
  const [isBlinking, setBlinking] = useState(true);

  useEffect(() => {
    if (pointer < props.string.length) {
      setTimeout(() => {
        setText(text + props.string.charAt(pointer));
        setPointer(pointer + 1);
      }, 80);
    } else {
      if (props.stopBlinkinOnComplete) setBlinking(false);
      props.onComplete();
    }
  }, [pointer]);

  return (
    <span>
      {text}
      {isBlinking ? <span className="blinking-cursor">|</span> : null}
    </span>
  );
}
