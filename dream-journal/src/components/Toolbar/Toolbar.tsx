import { ReactNode } from "react";

import style from './Toolbar.module.css'

import TextInput from "../TextInput/TextInput";
import MingcuteSearchLine from "../../icons/MingcuteSearchLine";

function Toolbar(): ReactNode {
  return (
    <>
      <div className="toolbar">
        <TextInput
          placeholder="Search note ..."
          suffixIcon={<MingcuteSearchLine />} />
        <select >
          <option value="">All</option>
          <option value="">Good</option>
          <option value="">Bad</option>
        </select>
        <button>-</button>
      </div>
    </>
  )
}

export default Toolbar;