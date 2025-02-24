import { ReactNode } from "react";

import Header from "./components/Header/Header";
import Toolbar from "./components/Toolbar/Toolbar";
import Result from "./components/Result/Result";
import Create from "./components/Create/Create";

function App(): ReactNode {
  return (
    <>
      <Header />
      <main>
        <Toolbar />
        <Result />
      </main>
      <Create />
    </>
  );
}

export default App;
