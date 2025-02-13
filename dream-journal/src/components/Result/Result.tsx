import { ReactNode } from "react";

import './Result.css'

import { Dream } from "../../types/dream";

const dreams: Dream[] = [
  {
    id: "1",
    title: 'school1',
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

function Result(): ReactNode {
  return (
    <>
      <ul className="result">
        {
          dreams.map((dream) => (
            <li key={dream.id}>{dream.title}</li>
          ))
        }
      </ul>
    </>
  )
}

export default Result;