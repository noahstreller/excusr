import { ReactNode, useState } from "react";
import { ViewStyle } from "react-native";
import DropDown from "react-native-paper-dropdown";

export default function CategoryDropdown({style = {}, value, setValue}: {style?: ViewStyle, value: string, setValue: (value: string) => void}){
  const categories: Category[] = [
    { label: "Family", value: "family" },
    { label: "Office", value: "office" },
    { label: "Children", value: "children" },
    { label: "College", value: "college" },
    { label: "Party", value: "party" },
    { label: "Funny", value: "funny" },
    { label: "Unbelievable", value: "unbelievable" },
    { label: "Developers", value: "developers" },
    { label: "Gaming", value: "gaming" }
  ];

  const [showDropDown, setShowDropDown] = useState<boolean>(false);

  return (
    <DropDown 
      onDismiss={()=>setShowDropDown(false)}
      visible={showDropDown}
      value={value}
      setValue={setValue} 
      showDropDown={()=>setShowDropDown(true)} 
      list={categories}
      label={"Category"}
      mode={"outlined"}
      inputProps={{style: style}}
      dropDownContainerMaxHeight={400}
    />
  )
}

export type Category = { label: string; value: string | number; custom?: ReactNode; }