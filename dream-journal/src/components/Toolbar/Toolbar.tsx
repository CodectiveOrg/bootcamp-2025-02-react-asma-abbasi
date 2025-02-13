import { ReactNode } from "react";

import style from './Toolbar.module.css'

function Toolbar(): ReactNode {
  return (
    <>
      <div className="toolbar">
        <input type="text" />
        <select >
          <option value="">All</option>
          <option value="">Good</option>
          <option value="">Bad</option>
          <button>.</button>
        </select>
      </div>
    </>
  )
}

export default Toolbar;