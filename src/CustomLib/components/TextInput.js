import React, {useState} from 'react';
import {TextInput as RNTextInput, View, Text} from 'react-native';
import PropTypes from 'prop-types';

const TextInput = (props) => {
  const [focussed, setFocus] = useState(false);
  const [value, setValue] = useState('');

  return (
    <View style={[props.styles, {justifyContent: 'center'}]}>
      {focussed || value || props.value ? (
        <Text style={{color: 'white', marginTop: 7}}>{props.placeholder}</Text>
      ) : null}
      <RNTextInput
        onFocus={() => setFocus(true)}
        onEndEditing={() => setFocus(false)}
        placeholder={!focussed ? props.placeholder : ''}
        placeholderTextColor="gray"
        style={{fontSize: 18, color: 'gray'}}
        secureTextEntry={props.secureTextEntry}
        onChangeText={(t) => {
          props.onTextChange && props.onTextChange(t);
          setValue(t);
        }}
        value={props.value || value}
      />
    </View>
  );
};

export default TextInput;

const defaultStyles = {
  height: 70,
  backgroundColor: 'rgb(80,80,80)',
  borderRadius: 7,
  marginHorizontal: 20,
  marginVertical: 10,
  paddingLeft: 20,
};

TextInput.defaultProps = {
  styles: defaultStyles,
  placeholder: 'Enter a text',
  secureTextEntry: false,
};

TextInput.propTypes = {
  styles: PropTypes.object,
  placeholder: PropTypes.string,
  secureTextEntry: PropTypes.bool,
  onTextChange: PropTypes.func,
  value: PropTypes.string,
};
