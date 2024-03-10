import { ReactNode, useState } from "react";
import DropDown from "react-native-paper-dropdown";

export default function CategoryDropdown(){
  
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

  const [value, setValue] = useState<Category>();
  const [showDropDown, setShowDropDown] = useState<boolean>(false);

  return (
    <DropDown 
      onDismiss={()=>setShowDropDown(false)}
      visible={showDropDown}
      value={value}
      setValue={setValue} 
      showDropDown={()=>setShowDropDown(true)} 
      list={categories}      
    />
  )
}

export type Category = { label: string; value: string | number; custom?: ReactNode; }