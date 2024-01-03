
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
const {Form, Input} = form;
const {List} = antd;

const BaseExample = () => {
    return <Form>
        <List>
            <Input.Item name="name" label="字段" labelTips="哈哈哈" rule="REQ LEN-0-10"/>
        </List>
    </Form>;
};

render(<BaseExample/>);

```


### API

|属性名|说明|类型|默认值|
|  ---  | ---  | --- | --- |

