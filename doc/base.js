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
