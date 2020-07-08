import React from "react";
import styled from "styled-components";

import logo from "./../../assets/favicon.png";
import {Link} from "react-router-dom";

//import UserDock from "./UserDock";

const Navigator = styled.div`
    width: 17%;
    background-color: #F2F2F2;
    display: inline-block;
    height: 100%;
    vertical-align: top;
    padding-top: 40px;
    position: relative;
`

const NavOption = styled.div`
    width: 100%;
    padding: 20px 40px;
    font-size: 1.2rem;
    color: ${props => props.value === `selected` ? `#00A876` : `#656565` };
    cursor: pointer;
    &:hover {
        color: #b9b9b9
    }
`

const TurkboxLogo = styled.div`
    width: 55px;
    background: url('${logo}');
    background-size: contain;
    height: 55px;
    background-repeat: no-repeat;
    margin-left: 40px;
    margin-bottom: 30px;
`

const NavOptionIcon = styled.div`
    display: inline-block;
    width: 30px;
    font-size: 1.1rem;
`

const NavOptionText = styled.div`
    display: inline-block;
    width: calc(100% - 30px);
`


const SideNavigator = (props) => {
    
    const navigation = [
        {
            key: "home",
            icon: "fas fa-home",
            text: "Home",
        },
        {
            key: "analytics",
            icon: "fas fa-chart-line",
            text: "Analytics",
        },
        {
            key: "payments",
            icon: "far fa-credit-card",
            text: "Payments",
        },
        {
            key: "subscriptions",
            icon: "fas fa-gifts",
            text: "Subscriptions",
        }
    ]
    
	return (
            <Navigator>
                <TurkboxLogo/>
                <div className="options">
                    {
                        navigation.map((option, i) => {
                            if (props.activeViewKey === option.key)
                                return (
                                    <Link key={option.key} to={option.key}>
                                        <NavOption value="selected">
                                            <NavOptionIcon><i className={option.icon}></i></NavOptionIcon>
                                            <NavOptionText>{option.text}</NavOptionText>
                                        </NavOption>
                                    </Link>
                                )
                            else
                                return (
                                    <Link key={option.key} to={option.key}>
                                        <NavOption value="not-selected">
                                            <NavOptionIcon><i className={option.icon}></i></NavOptionIcon>
                                            <NavOptionText>{option.text}</NavOptionText>
                                        </NavOption>
                                    </Link>
                                )
                        })
                    }
                </div>
            </Navigator>
        );
}

export default SideNavigator;