import { ReactNode } from "react";

import styles from "./Create.module.css"

import MingcuteAddLine from "../../icons/MingcuteAddLine";

import Button from "../Button/Button";

export default function Create(): ReactNode {
  return (
    <div className={styles.create}>
      <Button size="large" shape="circle" >
        <MingcuteAddLine />
      </Button>
    </div>
  )
}