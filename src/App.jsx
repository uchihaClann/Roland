import data from "./assets/data.json";
import Roland from "./Roland";
import FloatingImage from "./components/FloatingImage";

function App() {
  return (
    <div className="flex items-center justify-center h-screen">
      <Roland value={data} />
      <FloatingImage />
    </div>
  );
}

export default App;