import { useEffect, useState } from "preact/hooks";
import preactLogo from "./assets/preact.svg";
import viteLogo from "/vite.svg";
import "./app.css";

export function App() {
  const [width, setWidth] = useState(500);

  useEffect(() => {
    // setWidth(1000);
  }, []);

  return (
    <div
      style={{
        width: width,
        height: width,
        backgroundColor: "red",
      }}
    ></div>
  );
}
