import { ComponentProps, ReactElement, ReactNode } from "react";

import clsx from "clsx";
import styles from './TextInput.module.css'

type Props = ComponentProps<'input'> & {
  suffixIcon: ReactNode
}

export default function TextInput({ suffixIcon ,className,...otherProps }: Props): ReactElement {
  return (
    <div className={clsx(styles["text-input"],className)}>
      <input type="text" {...otherProps} />
      <div className={styles.suffix}>{suffixIcon}</div>
    </div>
  );
}