import { ComponentProps, ReactElement } from "react";

import clsx from "clsx";
import Styles from "./TextArea.module.css"

type Props = ComponentProps<"textarea">

export default function TextArea({ className, ...otherProps }: Props): ReactElement {
  return (
    <textarea
      className={clsx(Styles['text-area'] ,className)}
      rows={3}
      {...otherProps}
    ></textarea>

  )
}