import {Selector} from '@kne/antd-taro';
import {hooks} from '../helper';
import withFetchList from '../common/withFetchList';
import withItem from "../common/withItem";

const {useOnChange} = hooks;

const SelectorField = (props) => {
    const render = useOnChange(props);
    return render(Selector);
};

SelectorField.Item = withItem(SelectorField);

SelectorField.Field = Selector;

SelectorField.Fetch = withFetchList(Selector);

SelectorField.FetchItem = withItem(SelectorField.Fetch);

export default SelectorField;
