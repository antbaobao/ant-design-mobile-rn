import React from 'react';
import { ImageStyle, StyleProp, StyleSheet, ViewStyle } from 'react-native';
import List from '../list/index';
import Checkbox from './Checkbox';
import { CheckboxItemPropsType } from './PropsType';
import CheckboxItemStyle, { ICheckboxStyle } from './style/index';

const ListItem = List.Item;
const refCheckbox = 'checkbox';

export interface ICheckboxItemNativeProps extends CheckboxItemPropsType {
  styles?: ICheckboxStyle;
  checkboxStyle?: StyleProp<ImageStyle>;
  style?: StyleProp<ViewStyle>;
}

const CheckboxItemStyles = StyleSheet.create<any>(CheckboxItemStyle);

export default class CheckboxItem extends React.Component<
  ICheckboxItemNativeProps,
  any
> {
  static defaultProps = {
    styles: CheckboxItemStyles,
  };

  handleClick = () => {
    const checkBox: Checkbox = this.refs[refCheckbox] as Checkbox;
    checkBox.handleClick();
    if (this.props.onPress) {
      this.props.onPress();
    }
  }

  render() {
    const {
      style,
      checkboxStyle,
      defaultChecked,
      checked,
      disabled,
      children,
      extra,
      onChange,
    } = this.props;
    const styles = this.props.styles!;

    const thumbEl = (
      <Checkbox
        ref={refCheckbox}
        style={[styles.checkboxItemCheckbox, checkboxStyle]}
        defaultChecked={defaultChecked}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
      />
    );
    return (
      <ListItem
        style={style}
        onPress={disabled ? undefined : this.handleClick}
        extra={extra}
        thumb={thumbEl}
      >
        {children}
      </ListItem>
    );
  }
}
