import React from "react";
import styled from "styled-components";

const ActionButton = styled.div`
  height: 40px;
  width: 40px;
  background-color: none;
  display: inline-block;
  border-radius: 5px;
  margin-right: 10px;
  vertical-align: top;
  border: 1px solid #ececec;
  text-align: center;
  line-height: 40px;
  color: #6f6e6e;
  font-size: 0.75rem;
  position: relative;
  cursor: pointer;
  transition: 0.25s border ease-in-out;
  &:hover {
    border: 1px solid #6f6e6e;
  }
`;

const ActionPanelDropdown = styled.div`
  position: absolute;
  width: 200px;
  background-color: #fff;
  z-index: 15;
  right: 0px;
  top: 45px;
  border: 1px solid #ececec;
  text-align: left;
  font-size: 1rem;
  padding: 10px 0;
  box-shadow: 0 0 0 1px rgba(99, 114, 130, 0.16),
    0 8px 16px rgba(27, 39, 51, 0.08);
  border-radius: 5px;
  transition: 0.25s all ease-in-out;
`;

const ActionPanelDropdownOption = styled.a`
  cursor: pointer;
  padding: 0 10px;
  width: 100%;
  transition: 0.25s all ease-in-out;
  &:hover {
    background: #ececec;
  }
  text-decoration: none;
  color: initial;
  display: block;
`;


class MoreOptionsButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false,
    };

    this.toggleMenu = this.toggleMenu.bind(this);
    this.dispatchDeleteCampaignRequest = this.dispatchDeleteCampaignRequest.bind(
      this
    );
  }

  render = () => {
    return (
      <ActionButton onClick={(e) => this.toggleMenu(e)} variant="action-icon">
        <i className="fas fa-ellipsis-h"></i>
        {this.renderMenu()}
      </ActionButton>
    );
  };

  dispatchDeleteCampaignRequest = (e) => {
    e.preventDefault();
    console.log(`Delete Campaign Request`);
  };

  dispatchFetchCampaignCSVRequest = (e) => {
    e.preventDefault();
    console.log(`Delete Campaign Request`);
  };

  renderMenu = () => {
    if (this.state.showMenu)
      return (
          this.props.schema.map((menu, i) => (
          <ActionPanelDropdown>
            <ActionPanelDropdownOption
              onClick={this.props.schema.optionAction}>
                     {menu.optionName}
                     
            </ActionPanelDropdownOption>

          </ActionPanelDropdown>  
          ))
      );
  };

  toggleMenu = (e) => {
    e.preventDefault();
    let currentStatus = this.state.showMenu;
    let newStatus = !currentStatus;
    this.setState({
      showMenu: newStatus,
    });
  };
}

export default MoreOptionsButton;
