import CheckList from './fields/CheckList';
import Input from './fields/Input';
import Selector from './fields/Selector';
import Slider from './fields/Slider';
import Switch from './fields/Switch';
import TextArea from './fields/TextArea';
import Picker from './fields/Picker';
import InputNumber from "./fields/InputNumber";

export * from './Form';
export {default} from './Form';
export {default as preset} from './preset';
export {default as ResetButton} from './ResetButton';
export {default as SubmitButton} from './SubmitButton';
export {default as withDecoratorList} from './common/withDecoratorList';
export {default as withItem} from './common/withItem';
export {default as withFetchList} from './common/withFetchList';

export {CheckList, Input, Selector, Slider, Switch, TextArea, Picker, InputNumber};
export const fields = {CheckList, Input, Selector, Slider, Switch, TextArea, Picker, InputNumber};
