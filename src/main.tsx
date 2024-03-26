import { render } from "preact";
import { App } from "./tooltip/App";
import "./index.css";

requestAnimationFrame(() => {
  console.log("Hello from requestAnimationFrame!");
});

console.log("Hello from main.tsx!");

render(<App />, document.getElementById("app")!);
