import React from 'react';
import {Slider as AntdSlider} from '@kne/antd-taro';
import {hooks} from '../helper';
import withItem from "../common/withItem";

const {useDecorator} = hooks;

const Slider = (props) => {
  const render = useDecorator(Object.assign({}, props));
  return render(AntdSlider);
};

Slider.Item = withItem(Slider);

export default Slider;
