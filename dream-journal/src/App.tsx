import { ReactNode } from "react";
import { Dream } from "./types/dream";

import "./App.css";

const dreams: Dream[] = [
  {
    id: "1",
    title: 'school',
    desctiption: '    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, nemo?',
    date: new Date(2025, 1, 14),
    vibe: "good"
  },
  {
    id: "2",
    title: 'school2',
    desctiption: '    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, nemo?',
    date: new Date(),
    vibe: "bad"
  }
]

function App(): ReactNode {
  return (
    <>
      <header><h1>Dream Journal</h1></header>
      <main>
        <div className="toolbar">
          <input type="text" />
          <select >
            <option value="">All</option>
            <option value="">Good</option>
            <option value="">Bad</option>
            <button>.</button>
          </select>
        </div>
        <ul className="result">
          {
            dreams.map((dream) => (
              <li key={dream.id}>{dream.title}</li>
            ))
          }
        </ul>
      </main>
    </>
  );
}

export default App;
