import {
  left,
  right,
  camelize,
  capitalize,
  removeWhiteSpace,
  escapeHtml,
  isEmpty,
  slugify,
} from './string-utils';

describe('Testing string-utils', () => {
  it('Testing - right', () => {
    let str = '111 222 333 444 000'
    expect(right(str, 3)).toEqual('000');

    str = 'aaabbbcccddd'
    expect(right(str, 3)).toEqual('ddd');
  });

  it('Testing - left', () => {
    let str = '111 222 333 444 000'
    expect(left(str, 3)).toEqual('111');

    str = 'aaabbbcccddd'
    expect(left(str, 3)).toEqual('aaa');
  });

  it('Testing - camelize', () => {
    let str = 'data_rate'
    expect(camelize(str)).toEqual('dataRate');

    str = 'background-color'
    expect(camelize(str)).toEqual('backgroundColor');

    str = '-moz-something'
    expect(camelize(str)).toEqual('MozSomething');

    str = '_car_speed_'
    expect(camelize(str)).toEqual('CarSpeed');

    str = 'yes_we_can'
    expect(camelize(str)).toEqual('yesWeCan');
  });

  it('Testing - capitalize', () => {
    let str = 'data'
    expect(capitalize(str)).toEqual('Data');

    str = 'COLOR'
    expect(capitalize(str)).toEqual('Color');

    str = 'aPPLE'
    expect(capitalize(str)).toEqual('Apple');

    str = 'rt5w3'
    expect(capitalize(str)).toEqual('Rt5w3');

    str = '-dasd'
    expect(capitalize(str)).toEqual('-dasd');
  });

  it('Testing - removeWhiteSpace', () => {
    let str = '  String   \t libraries are   \n\n\t fun\n!  '
    expect(removeWhiteSpace(str)).toEqual('String libraries are fun !');

    str = 'sdasd  asds asd ads sa sads   sadsa  '
    expect(removeWhiteSpace(str)).toEqual('sdasd asds asd ads sa sads sadsa');

    str = '\t\t\t\n\n\n'
    expect(removeWhiteSpace(str)).toEqual('');

    str = '\t\n s P  \t $ '
    expect(removeWhiteSpace(str)).toEqual('s P $');
  });

  it('Testing - escapeHtml', () => {
    const str = '<div>hi</div>'
    expect(escapeHtml(str)).toEqual('&lt;div&gt;hi&lt;/div&gt;');
  });

  it('Testing - isEmpty', () => {
    expect(isEmpty('')).toBeTruthy();
    expect(isEmpty('s')).toBeFalsy();
  });

  it('Testing - slugify', () => {
    let str = 'Global Thermonuclear Warfare'
    expect(slugify(str)).toEqual('global-thermonuclear-warfare');

    str = 'Crème brûlée'
    expect(slugify(str)).toEqual('creme-brulee');
  });
});
