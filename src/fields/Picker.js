import React, {useMemo} from 'react';
import {Picker as AntdPicker, DatePicker, DateRangePicker} from '@kne/antd-taro';
import withDecoratorList from '../common/withDecoratorList';
import dayjs from 'dayjs';

const Picker = withDecoratorList(({render, placeholder, showPopup, value, columns, className}) => {
  const label = useMemo(() => {
    if (!value) {
      return '';
    }
    return value.map((value, index) => {
      const item = (columns[index] || []).find((item) => item.value === value);
      if (item) {
        return item.label || item.value;
      }
      return '';
    }).filter((item) => !!item).join(',');
  }, [value, columns]);
  return render({
    label, value, placeholder, onClick: showPopup, className
  });
}, true)(AntdPicker);

Picker.DatePicker = withDecoratorList(({render, placeholder, showPopup, value, format}) => {
  const label = useMemo(() => {
    if (!value) {
      return '';
    }
    if (value === 'sofar') {
      return '至今';
    }
    return dayjs(value).format(format);
  }, [value, format]);
  return render({
    label, value, placeholder, onClick: showPopup
  });
})(DatePicker);

Picker.DatePicker.defaultProps = {
  format: 'YYYY-MM-DD'
};

Picker.DateRangePicker = withDecoratorList(({render, placeholder, showPopup, value, format}) => {
  const label = useMemo(() => {
    if (!value) {
      return '';
    }
    return value.map((value) => value === 'sofar' ? '至今' : dayjs(value).format(format)).join('~');
  }, [format, value]);

  return render({
    label, value, placeholder, onClick: showPopup
  });
})(DateRangePicker);

Picker.DateRangePicker.defaultProps = {
  format: 'YYYY-MM'
};


export default Picker;
