import React, {useState} from 'react';
import {List, Space} from "@kne/antd-taro";
import classnames from 'classnames';
import {View} from '@tarojs/components';

const withItem = (WrappedComponent) => ({
                                            labelTips,
                                            labelRender,
                                            title,
                                            arrow,
                                            extra,
                                            description,
                                            prefix,
                                            clickable,
                                            onClick,
                                            disabled,
                                            className,
                                            ...props
                                        }) => {
    const listProps = props.labelHidden === true ? {} : {
        title: title || <Space>
            {typeof labelRender === 'function' ? labelRender(props) : props.label}
            {labelTips && (typeof labelTips === 'function' ? labelTips({labelTips, ...props}) :
                <View className='label-tips'>{labelTips}</View>)}
        </Space>
    };
    const [isError, setIsError] = useState(false);
    return <List.Item {...Object.assign({}, listProps, {
        arrow, extra, description, prefix, clickable, onClick, disabled
    })} className={classnames('react-form-list-item', className, {
        'is-req': typeof props.rule === 'string' && (props.rule || '').split(' ').indexOf('REQ') > -1,
        'is-error': isError
    })}>
        <WrappedComponent {...props} labelHidden setError={setIsError}/>
    </List.Item>
};

export default withItem;
