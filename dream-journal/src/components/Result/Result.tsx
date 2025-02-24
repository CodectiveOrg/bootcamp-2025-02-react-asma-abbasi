import { ReactNode } from "react";

import styles from './Result.module.css'

import MingcuteEdit2Line from "../../icons/MingcuteEdit2Line";
import MingcuteDelete2Line from "../../icons/MingcuteDelete2Line";

import { Dream } from "../../types/dream";

import Button from "../Button/Button";

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
      <ul className={styles.result}>
        {
          dreams.map((dream) => (
            <li key={dream.id}>
              <div className={styles.title}>
                {dream.title}
              </div>
              <div className={styles.action}>
                <Button color="primary" variant="ghost" size="small" shape="square" ><MingcuteEdit2Line /></Button>
                <Button color="danger" variant="ghost" size="small" shape="square" ><MingcuteDelete2Line /></Button>
              </div>
            </li>
          ))
        }
      </ul>
    </>
  )
}

export default Result;