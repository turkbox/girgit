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

const schema = [
	{
		"data":{
		   "ID":"68",
		   "user_login":"AbhishekBishk",
		   "user_pass":"$P$Bz.R53V4pEQbvdOVyteKWxE/b8jSdw1",
		   "user_nicename":"abhishekbishk",
		   "user_email":"Bishk@bishk.bishk",
		   "user_url":"http://example.com",
		   "user_registered":"2020-04-21 07:50:16",
		   "user_activation_key":"",
		   "user_status":"0",
		   "display_name":"Abhishek Bishk",
		   "metadata":{
			  "nickname":[
				 "AbhishekBishk"
			  ],
			  "first_name":[
				 "Abhishek"
			  ],
			  "last_name":[
				 "Bishk"
			  ],
			  "description":[
				 ""
			  ],
			  "rich_editing":[
				 "true"
			  ],
			  "syntax_highlighting":[
				 "true"
			  ],
			  "comment_shortcuts":[
				 "false"
			  ],
			  "admin_color":[
				 "fresh"
			  ],
			  "use_ssl":[
				 "0"
			  ],
			  "show_admin_bar_front":[
				 "true"
			  ],
			  "locale":[
				 ""
			  ],
			  "klorgcapabilities":[
				 "a:1:{s:15:\"paid_subscriber\";b:1;}"
			  ],
			  "klorguser_level":[
				 "0"
			  ],
			  "expire":[
				 "1594771200000"
			  ],
			  "plan":[
				 "Yearly"
			  ]
		   }
		},
		"ID":68,
		"caps":{
		   "paid_subscriber":true
		},
		"cap_key":"klorgcapabilities",
		"roles":[
		   "paid_subscriber"
		],
		"allcaps":{
		   "read":true,
		   "edit_posts":false,
		   "upload_files":false,
		   "read_paid":true,
		   "paid_subscriber":true
		},
		"filter":null
	 }
 ];

export const FlexTable = () => 
	<BrowserRouter>
		<Table schema={schema} />
	</BrowserRouter>;
	