import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';
import Table from "./../components/navigation/FlexTable";
import { addDecorator } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

export default {
  title: 'Flex Table',
  component: Table,
};

export const FlexTable = () => 
	<BrowserRouter>
		<Table/>
	</BrowserRouter>;

