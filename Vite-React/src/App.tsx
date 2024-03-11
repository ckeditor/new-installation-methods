import "./App.css";
import "../node_modules/ckeditor5/dist/index.browser.css";
import { Editor } from "./Editor.tsx";

function App() {
  return (
    <>
      <h1>Vite + React</h1>
      <Editor />
    </>
  );
}

export default App;
