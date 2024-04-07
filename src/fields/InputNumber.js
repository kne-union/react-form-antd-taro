import {InputNumber} from '@kne/antd-taro';
import {hooks} from '../helper';
import withItem from "../common/withItem";

const {useDecorator} = hooks;

const InputNumberField = (props) => {
    const render = useDecorator(Object.assign({placeholder: `请输入${props.label}`}, props));
    return render(InputNumber);
};

InputNumberField.Item = withItem(InputNumberField);

InputNumberField.Field = InputNumber;

export default InputNumberField;
