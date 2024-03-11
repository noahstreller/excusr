import { useState } from "react";
import { ViewStyle } from "react-native";
import { useTheme } from "react-native-paper";
import DropDown from "react-native-paper-dropdown";
import { Category } from "../lib/types";

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
  const theme = useTheme();
  
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
      dropDownItemTextStyle={{color: theme.colors.onPrimaryContainer}}
    />
  )
}
