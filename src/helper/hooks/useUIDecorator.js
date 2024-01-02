import React, {useCallback, useEffect, useState} from 'react';
import classnames from 'classnames';
import {FieldPropsProvider} from './useFieldProps';
import useRefCallback from "@kne/use-ref-callback";
import {useFormContext} from '@kne/react-form';

const useUIDecorator = props => {
    const {
        id,
        name,
        rule,
        description,
        className,
        label,
        errMsg,
        errState,
        isValueChanged,
        fieldRef,
        formState,
        groupIndex,
        groupName,
        formData,
        setError,
        onChange,
        onBlur,
        ...others
    } = props;
    const [isSubmit, setIsSubmit] = useState(false);
    const {emitter} = useFormContext();

    //当表单提交时设置状态
    useEffect(() => {
        const subscription = emitter.addListener('form-submit', () => {
            setIsSubmit(true);
        });
        return () => {
            subscription && subscription.remove();
        };
    }, [emitter]);

    const handlerChange = useCallback((...args) => {
        onChange(...args);
        setIsSubmit(false);
    }, [onChange, setIsSubmit]);


    const errorHandler = useRefCallback(setError);
    const handlerOnBlur = useRefCallback(onBlur);
    useEffect(() => {
        errorHandler(isSubmit && errState === 2);
    }, [errState, isSubmit, errorHandler]);
    return useCallback(WrappedComponent => {
        return (<FieldPropsProvider props={props}>
            <WrappedComponent {...others} onChange={handlerChange} onBlur={handlerOnBlur}
                              className={classnames('react-form__field-component', className)}/>
            {description ? <div className="react-form__field-describable">{description}</div> : null}
            {/*{errMsg ? <View className="react-form__field-error">{errMsg}</View> : null}*/}
        </FieldPropsProvider>);
    }, [others, className, handlerChange, props, description, handlerOnBlur]);
};

export default useUIDecorator;
