
# react-form-antd-taro


### 安装

```shell
npm i --save @kne/react-form-antd-taro
```


### 概述

这里填写组件概要说明


### 示例

#### 示例代码

- 这里填写示例标题
- 这里填写示例说明
- form(@kne/react-form-antd-taro),antd(@kne/antd-taro)

```jsx
const {default: Form, Input, TextArea, CheckList, SubmitButton, Picker, InputNumber, Selector, Slider, Switch} = form;
const {List} = antd;

const BaseExample = () => {
    return <Form onSubmit={(data) => {
        console.log(data);
    }}>
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

```


### API

|属性名|说明|类型|默认值|
|  ---  | ---  | --- | --- |

