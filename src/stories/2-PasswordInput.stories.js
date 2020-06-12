import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';
import PasswordStrengthInput from "./../components/form-elements/PasswordStrengthInput";
import { addDecorator } from '@storybook/react';


export default {
  title: 'Password Input',
  component: PasswordStrengthInput,
};

export const Text = () => <PasswordStrengthInput
  className="passwordValidator"
  minLength={5}
  minScore={2}
  scoreWords={['Weak', 'Fair', 'Good', 'Strong', 'Perfect']}
  changeCallback={action('clicked')}
  inputProps={{ name: "password_input", autoComplete: "off", className: "form-control" }}
/>;

