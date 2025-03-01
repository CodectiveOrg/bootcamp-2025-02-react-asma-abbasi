import { ComponentProps, ReactNode } from "react";

import clsx from "clsx";
import styles from "./Select.module.css"

import { SelectOption } from "../../types/select-options";

type Variant = 'solid' | "outlined";

type Props = ComponentProps<"select"> & {
  varian?: Variant;
  options: SelectOption[];
}

export default function Select({
  varian= "solid",
  options,
  ...otherProps
}: Props): ReactNode {
  return (
    <div className={clsx(styles["select"],styles[varian])}>
      <select {...otherProps}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  )
}