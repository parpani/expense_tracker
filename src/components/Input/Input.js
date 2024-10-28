import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import style from './style';
import globalStyle from '../../assets/styles/globalStyle';
import PropTypes from 'prop-types';

const Input = props => {
  const [value, setValue] = useState('');
  
  return (
    <View>
      <Text style={style.label}>{props.label}</Text>
      <TextInput
        placeholder={props.placeholder ? props.placeholder : null}
        placeholderTextColor={'#36455A'}
        style={[style.input, props.styles]}
        value={value}
        secureTextEntry={props.secureTextEntry}
        keyboardType={props.keyboardType}
        onChangeText={val => {
          setValue(val);
          props.onChangeText(val);
        }}
      />
    </View>
  );
};

Input.defaultProps = {
  onChangeText: () => {},
  keyboardType: 'default',
  secureTextEntry: false,
  styles:{}
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onChangeText: PropTypes.func,
  keyboardType: PropTypes.string,
  secureTextEntry: PropTypes.bool,
  styles:PropTypes.object,
};

export default Input;