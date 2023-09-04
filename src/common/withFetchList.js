import React, {forwardRef, useRef, useImperativeHandle, useEffect} from 'react';
import {withFetch} from '@kne/react-fetch';
import {hooks} from '../helper';

const {useOnChange} = hooks;

const withFetchList = (WrappedComponent) => {
  const FieldInner = withFetch(({
                                  data, setData, refresh, reload, getApi, isLoading, children, onLoaded, ...props
                                }) => {
    const dataRef = useRef(data);
    getApi({refresh, reload, setData});
    useEffect(() => {
      onLoaded && onLoaded(dataRef.current);
    }, []);
    return <WrappedComponent {...props} {...children({data, refresh, isLoading, setData})}/>;
  });

  return forwardRef((props, ref) => {
    const apiRef = useRef({});
    useImperativeHandle(ref, () => {
      return {
        refresh: (...args) => apiRef.current.refresh?.(...args),
        reload: (...args) => apiRef.current.reload?.(...args),
        setData: (...args) => apiRef.current.setData?.(...args)
      };
    }, []);
    const render = useOnChange(Object.assign({placeholder: `请选择${props.label}`}, props, {
      getApi: (api) => {
        apiRef.current = api;
      }
    }));
    return render(FieldInner);
  });
};

export default withFetchList;
