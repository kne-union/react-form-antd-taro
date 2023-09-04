import {preset as presetRules, RULES} from '@kne/react-form';
import merge from 'lodash/merge';

const oldREQ = RULES.REQ;
presetRules({
  REQ: (...props) => {
    return Object.assign({}, oldREQ(...props), {errMsg: '%s不能为空'});
  }
});

export const globalParams = {
  rules: {}, field: {
    imageUploader: {
      upload: (file) => {
        return {
          url: URL.createObjectURL(file),
        }
      }
    }
  }
};
export default (props) => {
  merge(globalParams, props);
  presetRules(globalParams.rules);
};
