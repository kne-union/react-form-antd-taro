import {View} from "@tarojs/components";
import Taro from '@tarojs/taro';
import {Icon, Input as AntdInput} from '@kne/antd-taro';
import React from "react";
import useControlValue from '@kne/use-control-value';
import {toNumber, isNumber} from "lodash";
import {hooks} from "../helper";
import withItem from "../common/withItem";
import classnames from 'classnames';

const {useDecorator, useUIDecorator} = hooks;

const InputNumberInner = (props) => {
  const [value, onChange] = useControlValue(props);
  return <View className={classnames('adm-input-number-wrapper', props.className, {
    'is-controller-hidden': props.hiddenController
  })}>
    <View className={'adm-input-number-left'} onClick={() => {
      const target = (value && !isNaN(value) ? toNumber(value) : 0) - 1;
      if (isNumber(props.min) && target < props.min) {
        Taro.showToast({
          title: `不能小于${props.min}`
        });
        return;
      }
      onChange(target);
    }}>
      <Icon type="arrow-thin-left" className="iconfont"/>
    </View>
    <View className={'adm-input-number'}>
      <AntdInput {...props} type="number" value={value} onChange={(value) => {
        if (value === '') {
          onChange('');
          return;
        }
        const _value = toNumber(value);
        if (isNumber(props.min) && _value < props.min) {
          Taro.showToast({
            title: `不能小于${props.min}`
          });
          return;
        }
        if (isNumber(props.min) && _value > props.max) {
          Taro.showToast({
            title: `不能大于${props.max}`
          });
          return;
        }

        !isNaN(value) && onChange(_value);
      }}/>
    </View>
    <View className={'adm-input-number-right'} onClick={() => {
      const target = (value && !isNaN(value) ? toNumber(value) : 0) + 1;
      if (isNumber(props.min) && target > props.max) {
        Taro.showToast({
          title: `不能大于${props.max}`
        });
        return;
      }
      onChange(target);
    }}>
      <Icon type="arrow-thin-right" className="iconfont"/>
    </View>
  </View>
};

const InputNumberField = (props) => {
  const render = useDecorator(Object.assign({placeholder: `请输入${props.label}`}, props));
  return render(InputNumberInner);
};

const InputNumberFieldWithUI = (props) => {
  const render = useUIDecorator(Object.assign({placeholder: `请输入${props.label}`}, props));
  return render(InputNumberField);
};

InputNumberField.Item = withItem(InputNumberField);
InputNumberField.Field = InputNumberFieldWithUI;

export default InputNumberField;
