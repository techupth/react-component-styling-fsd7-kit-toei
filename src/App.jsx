import "./App.css";
import { Button } from "./components/Button";
import { Alert } from "./components/Alert";

function App() {
  return (
    <div className="App">
      <div className="button-components-section">
        {/* Render ตัว Button 2 แบบ */}
        <Button color="primary" text="Primary" />
        <Button color="secondary" text="Secondary" />
      </div>
      <hr />
      <div className="alert-components-section">
        {/* Render ตัว Alert 4 แบบ */}
        <Alert typealert="error" text="This is error alert box" />
        <Alert typealert="warning" text="This is warning alert box" />
        <Alert typealert="info" text="This is info alert box" />
        <Alert typealert="success" text="This is success alert box" />
      </div>
    </div>
  );
}

export default App;
