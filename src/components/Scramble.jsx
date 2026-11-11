import { useRef } from "react";

const CHARS = "!<>-_\\/[]{}—=+*^?#";

export default function Scramble({ text, className = "" }) {
  const ref = useRef(null);
  const onEnter = () => {
    const el = ref.current;
    let frame = 0;
    const total = text.length;
    const cancel = setInterval(() => {
      frame++;
      let out = "";
      for (let i = 0; i < total; i++) {
        out += frame > i * 2 + 4 ? text[i] : CHARS[Math.floor(Math.random() * CHARS.length)];
      }
      el.textContent = out;
      if (frame > total * 2 + 4) { clearInterval(cancel); el.textContent = text; }
    }, 30);
  };
  return <span ref={ref} onMouseEnter={onEnter} className={className}>{text}</span>;
}
