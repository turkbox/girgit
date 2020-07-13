import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';
import FormModal from "./../components/form-elements/FormModal";
import { addDecorator } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

export default {
  title: 'Form Modal',
  component: FormModal,
};

const definition = [
    {"name": "name", "display": "Name", "type": "text", "default": ""},
    {"name": "totalCoupons", "display": "Total Coupons", "type": "number", "default": 0},
    {"name": "expiryDate", "display": "Expiry Date", "type": "date", "default": new Date().toString()}
];


export const Form = () => <FormModal schema={definition} />;

