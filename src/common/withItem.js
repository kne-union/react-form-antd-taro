import React, {useState} from 'react';
import {List, Space} from "@kne/antd-taro";
import classnames from 'classnames';
import {View} from '@tarojs/components';

const withItem = (WrappedComponent) => ({labelTips, labelRender, ...props}) => {
    const listProps = props.labelHidden === true ? {} : {
        title: <Space>
            {typeof labelRender === 'function' ? labelRender(props) : props.label}
            {labelTips && (typeof labelTips === 'function' ? labelTips({labelTips, ...props}) :
                <View className='label-tips'>{labelTips}</View>)}
        </Space>
    };
    const [isError, setIsError] = useState(false);
    return <List.Item {...listProps} className={classnames('react-form-list-item', {
        'is-req': typeof props.rule === 'string' && (props.rule || '').split(' ').indexOf('REQ') > -1,
        'is-error': isError
    })}>
        <WrappedComponent {...props} labelHidden setError={setIsError}/>
    </List.Item>
};

export default withItem;
