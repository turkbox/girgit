import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';
import SideNavigator from "./../components/navigation/SideNavigator";
import { addDecorator } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

export default {
  title: 'SideBar',
  component: SideNavigator,
};

export const Navigation = () => 
	<BrowserRouter>
		<SideNavigator
			activeViewKey="home"
		/>
	</BrowserRouter>;

