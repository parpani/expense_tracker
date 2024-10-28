import React, { useEffect, useState } from "react";
import { SafeAreaView, Text } from "react-native";
import { Picker } from "@react-native-picker/picker";
import PropTypes from "prop-types";

import style from "./style";
import globalStyle from "../../assets/styles/globalStyle";

const Dropdown = props => {
  const [value, setValue] = useState('');

  let pickerDetails = new Array();
  pickerDetails = props.pickerLabel

  return(
    <SafeAreaView>
      <Text style={style.label}>{props.label}</Text>
      <Picker
        selectedValue={value}
        onValueChange={val => {
          setValue(val);
          props.onValueChange(val);
        }}>
        { pickerDetails.map((pickerDetails, index) => {
          return (
            <Picker.Item
              key={index}
              label={pickerDetails.name}
              value={pickerDetails.categoryId}
            />
          );
        })}
      </Picker>
    </SafeAreaView>
  )  
};

Dropdown.defaultProps = {
  onValueChange: () => {},
};

Dropdown.propTypes = {
  label: PropTypes.string.isRequired,
  pickerLabel: PropTypes.array.is,
  onValueChange: PropTypes.func,
};

export default Dropdown