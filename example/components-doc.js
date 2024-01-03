import * as component_26 from '@kne/react-form-antd-taro';
import * as component_27 from '@kne/antd-taro';
import React from 'react';
const readmeConfig = {
    name: `react-form-antd-taro`,
    summary: `<p>这里填写组件概要说明</p>`,
    api: `<table>
<thead>
<tr>
<th>属性名</th>
<th>说明</th>
<th>类型</th>
<th>默认值</th>
</tr>
</thead>
</table>`,
    example: {
        isFull: false,
        className: `react_form_antd_taro_3abd0`,
        style: ``,
        list: [{
    title: `这里填写示例标题`,
    description: `这里填写示例说明`,
    code: `const {Form, Input} = form;
const {List} = antd;

const BaseExample = () => {
    return <Form>
        <List>
            <Input.Item name="name" label="字段" labelTips="哈哈哈" rule="REQ LEN-0-10"/>
        </List>
    </Form>;
};

render(<BaseExample/>);

`,
    scope: `import * as form from '@kne/react-form-antd-taro';
import * as antd from '@kne/antd-taro';`,
    component: ()=> {
    const form = component_26;
const antd = component_27;
              let children = null;
              const render = (jsx)=> {
                children = jsx;
              };
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


              
              return children;
            }
}]
    }
};
export default readmeConfig;
