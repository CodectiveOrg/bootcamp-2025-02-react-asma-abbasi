import { ReactNode } from "react";

import MingcuteSearchLine from "../../icons/MingcuteSearchLine";
import MingcuteMoonLine from "../../icons/MingcuteMoonLine";

import TextInput from "../TextInput/TextInput";
import Select from "../Select/Select";
import Button from "../Button/Button";


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
        <Button variant="solid" shape="square" size="meduim">
          <MingcuteMoonLine />
        </Button>
      </div>
    </>
  )
}

export default Toolbar;