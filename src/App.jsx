import data from "./assets/data.json";
import Roland from "./Roland";
import "./index.css";
import FloatingImage from "./components/FloatingImage";
import EyeTracking from "./components/EyeTrack";

function App() {
  return (
    <div className="flex items-center justify-center h-screen">
      <Roland value={data} />
      <FloatingImage />
      <EyeTracking />
    </div>
  );
}

export default App;