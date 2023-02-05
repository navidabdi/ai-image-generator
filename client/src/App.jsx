import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, CreatePost } from "./pages";
import { Header } from "./components";

const App = () => (
  <BrowserRouter>
    <Header />
    <main className="sm:p-8 px-4 py-8 w-full bg-gray-100 min-h-[calc(100vh-73px)]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-post" element={<CreatePost />} />
      </Routes>
    </main>
  </BrowserRouter>
);

export default App;
