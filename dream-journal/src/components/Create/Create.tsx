import { ReactNode, useEffect, useRef } from "react";

import styles from "./Create.module.css"

import MingcuteAddLine from "../../icons/MingcuteAddLine";

import Button from "../Button/Button";
import TextInput from "../TextInput/TextInput";
import TextArea from "../TextArea/TextArea";
import DateInput from "../DateInput/DateInput";

export default function Create(): ReactNode {
  const dialogRef = useRef<HTMLDialogElement>(null)

  const addButtonClickHandler = (): void => {
    dialogRef.current?.showModal()
  }

  const cancelButtonClickHandler = (): void => {
    dialogRef.current?.close()
  }

  useEffect(() => {
    dialogRef.current?.showModal()
  }, [])

  return (
    <div className={styles.create}>
      <Button size="large" shape="circle" onClick={addButtonClickHandler} >
        <MingcuteAddLine />
      </Button>
      <dialog ref={dialogRef}>
        <div className={styles.content}>
          <div className={styles.title}>
            Create a New Dream
          </div>
          <TextInput placeholder="Input your title ..." />
          <TextArea placeholder="input your description ..." />
          <DateInput />
          <div className={styles.action}>
            <Button
              variant="outlined"
              type="button"
              onClick={cancelButtonClickHandler}>
              CANCEL
            </Button>
            <Button>APPLY</Button>
          </div>
        </div>
      </dialog>
    </div>
  )
}