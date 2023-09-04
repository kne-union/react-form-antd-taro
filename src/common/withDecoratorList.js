import React, {useEffect, useState} from 'react';
import {hooks} from "../helper";
import classnames from "classnames";
import withItem from './withItem';
import withFetchList from './withFetchList';
import {View} from '@tarojs/components';

const {useOnChange} = hooks;

const withDecoratorList = (LabelComponent, hasFetch) => (WrappedComponent) => {
  const FieldComponent = (props) => {
    const [active, setActive] = useState(false);
    return <>
      <LabelComponent {...props} showPopup={() => {
        setActive(true);
      }}/>
      <WrappedComponent {...props} open={active} onClose={() => {
        setActive(false);
      }}/>
    </>
  };

  FieldComponent.defaultProps = {
    render: ({label, placeholder, className, onClick}) => {
      return <View className={classnames(className, 'react-form_decorator-item', {
        "react-form__placeholder": !label
      })} onClick={onClick}>{label || placeholder || ''}</View>
    }
  };

  const Field = (props) => {
    const render = useOnChange(Object.assign({placeholder: `请选择${props.label || ''}`}, props));
    return render(FieldComponent);
  };

  Field.defaultProps = {};

  Field.Item = withItem(Field);

  if (hasFetch) {
    const FetchField = withFetchList(FieldComponent);

    Field.Fetch = FetchField;

    Field.FetchItem = withItem(FetchField);
  }

  Field.Field=FieldComponent;
  return Field;
};

export default withDecoratorList;
