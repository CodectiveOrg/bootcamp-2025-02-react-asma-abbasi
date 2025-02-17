import { ReactNode } from "react";

import MingcuteSearchLine from "../../icons/MingcuteSearchLine";

import TextInput from "../TextInput/TextInput";
import Select from "../Select/Select";


function Toolbar(): ReactNode {
  return (
    <>
      <div className="toolbar">
        <TextInput
          placeholder="Search note ..."
          suffixIcon={<MingcuteSearchLine />} />
        <Select options={[
          { value: "all", label: "All" },
          { value: "good", label: "Good" },
          { value: "bad", label: "Bad" }
        ]}>

        </Select>
        <button>-</button>
      </div>
    </>
  )
}

export default Toolbar;