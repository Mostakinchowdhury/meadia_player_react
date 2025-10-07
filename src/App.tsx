import Home from "./page/Home.tsx";
import List from "./page/List.tsx";
import Gorge from "./page/Gorge.tsx";
import { Route, Routes } from "react-router";
function App() {
  return (
    <main className="h-[100vh] w-[100vw] bg-[url(./assets/bg.gif)] bg-cover bg-center flex justify-center items-center bg-fixed">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list/:tp/:serch?/:isfavourite?" element={<List />} />
        <Route path="/gorge/:id" element={<Gorge />} />
      </Routes>
    </main>
  );
}

export default App;
