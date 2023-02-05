import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, CreatePost } from "./pages";
import { Header } from "./components";
import { useRecoilState } from "recoil";
import { darkModeAtom } from "./atoms/DarkModeAtom";

const App = () => {
  const [darkMode] = useRecoilState(darkModeAtom);

  return (
    <BrowserRouter>
      <div className={`${darkMode ? "dark" : ""} dark-text-primary`}>
        <Header />
        <main className="sm:p-8 px-4 py-8 w-full bg-gray-10 dark:bg-slate-900 min-h-[calc(100vh-73px)]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create-post" element={<CreatePost />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
