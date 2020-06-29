import React from 'react';
import { action } from '@storybook/addon-actions';
import PasswordStrengthInput from "./../components/form-elements/PasswordStrengthInput";

export default {
  title: 'Password Input',
  component: PasswordStrengthInput,
};

export const DefaultInput = () => <PasswordStrengthInput
  className="passwordValidator"
  minLength={5}
  minScore={2}
  scoreWords={['Weak', 'Fair', 'Good', 'Strong', 'Perfect']}
  changeCallback={action('clicked')}
  inputProps={{ name: "password_input", autoComplete: "off", className: "form-control" }}
/>;

