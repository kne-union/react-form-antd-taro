import React from 'react';
import {Input} from '@kne/antd-taro';
import {hooks} from '../helper';
import withItem from "../common/withItem";

const {useDecorator,useUIDecorator} = hooks;

const InputField = (props) => {
  const render = useDecorator(Object.assign({placeholder: `请输入${props.label}`}, props));
  return render(Input);
};

const InputFieldWithUI = (props) => {
  const render = useUIDecorator(Object.assign({placeholder: `请输入${props.label}`}, props));
  return render(Input);
};

InputField.Item = withItem(InputField);

InputField.Field = InputFieldWithUI

export default InputField;
