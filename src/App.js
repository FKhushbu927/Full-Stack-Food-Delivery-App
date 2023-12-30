import React from "react";
import { Header } from "./components";
import { Route, Routes } from "react-router-dom";

import MainContainer from "./components/MainContainer";
import CreateContainer from "./components/CreateContainer ";
import { AnimatePresence } from "framer-motion";

const App = () => {
  return (
    <AnimatePresence wait>
      <div className="w-screen h-auto flex flex-col bg-primary">
        <Header />
        <main className="mt-16 md:mt-24 px-4 md:px-16 py-4">
          <Routes>
            <Route path="/*" element={<MainContainer />} />
            <Route path="/createItem" element={<CreateContainer />} />
          </Routes>
        </main>
      </div>
    </AnimatePresence>
  );
};

export default App;
