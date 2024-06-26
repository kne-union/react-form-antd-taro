const {default: Form, Input, TextArea, CheckList, SubmitButton, Picker, InputNumber, Selector, Slider, Switch} = form;
const {List, Button} = antd;
const {useRef} = React;

const BaseExample = () => {
    const formApi = useRef();
    return <Form ref={formApi} data={{
        name: '哈哈哈', des: '描述描述'
    }} onSubmit={(data) => {
        console.log(data);
    }}>
        <Button onClick={() => {
            formApi.current.setFields([{name: 'name', value: '哈哈哈哈啊啊啊'}, {
                name: 'des',
                value: '描述描述描述描述描述描述描述描述描述描述'
            }]);
        }}>设置Form值</Button>
        <List>
            <Input.Item name="name" label="名称" labelTips="哈哈哈" rule="REQ LEN-0-10"/>
            <CheckList.Item name="type" label="类型"
                            options={[{label: '早上', value: '1'}, {label: '中午', value: '2'}, {
                                label: '下午', value: '3'
                            }, {label: '晚上', value: '4'}]}/>
            <Picker.DateRangePicker.Item name="time" label="时间"/>
            <InputNumber.Item name="num" label="数量"/>
            <Switch.Item name="isPass" label="是否通过"/>
            <Selector.Item name="status" label="状态"
                           options={[{label: '良好', value: '1'}, {label: '一般', value: '2'}, {
                               label: '很差', value: '3'
                           }]}/>
            <Slider.Item name="level" label="等级"/>
            <TextArea.Item name="des" label="描述" rule="LEN-0-100"/>
        </List>
        <SubmitButton>提交</SubmitButton>
    </Form>;
};

render(<BaseExample/>);
