import React from "react";
import styled from "styled-components";

const FlexTable = styled.div`
    width: 100%;
    margin-top: 20px;
`

const FlexTableColumn = styled.div`
    width: ${props => props.width};
    padding: 15px;
`

const FlexTableHeader = styled(FlexTableColumn)`
    color: #637282;
    font-size: 17px;
    padding: 10px 15px;
    font-family: Lato;
`

const FlexTableIconHolder = styled.div`
    height: 40px;
    width: 40px;
    background-color: ${props => props.variant === `action-icon` ? `none` : `#ececec`};
    display: inline-block;
    border-radius: 5px;
    margin-right: 10px;
    vertical-align: top;
    border: 1px solid ${props => props.variant === `action-icon` ? `#ececec` : `none`};
    text-align: center;
    line-height: 40px;
    color: ${props => props.variant === `action-icon` ? `#6f6e6e` : `none`};
    font-size: ${props => props.variant === `action-icon` ? `0.85rem` : `1.1rem`} ;
`

const FlexTableTextHolder = styled.div`
    width: calc(100% - 50px);
    display: inline-block;
    vertical-align: top;
`

const FlexTablePrimaryText = styled.span`
    font-size: 1.1rem;
    display: block;
`

const FlexTableSecondaryText = styled.span`
    font-size: 0.9rem;
    color: #6f6e6e;
    display: block;
`

const FlexTableRow = styled.div`
    width: 100%;
    border-bottom: 1px solid #ececec;
    display: flex;
    flex: 1;
    flex-direction: row;
    align-items: stretch;
    flex-grow: 1;
    &:last-of-type {
        border-bottom: none;
    }
    &:first-of-type {
        border-bottom: 1px solid #c2c1c1;
    }
`


const Table = (props) => {
   return (
        <FlexTable>
            <FlexTableRow>
                <FlexTableHeader width="34%">Name</FlexTableHeader>
                <FlexTableHeader width="22%">Subscription Started</FlexTableHeader>
                <FlexTableHeader width="22%">Subscription Expires</FlexTableHeader>
                <FlexTableHeader width="22%">Actions</FlexTableHeader>
            </FlexTableRow> 
            {
               props.schema.map((subscriber, i) => (
                  <FlexTableRow key={`subscriber-key-${i}`}>
                     <FlexTableColumn width="32%">
                        <FlexTableIconHolder>
                           <i className="far fa-flag"></i>
                        </FlexTableIconHolder>
                        <FlexTableTextHolder>
                           <FlexTablePrimaryText>{subscriber.data.display_name}</FlexTablePrimaryText>
                           <FlexTableSecondaryText>{subscriber.data.user_email}</FlexTableSecondaryText>
                        </FlexTableTextHolder>
                     </FlexTableColumn>
                     <FlexTableColumn width="22%">
                        <FlexTableTextHolder>
                           <FlexTablePrimaryText>{new Date(subscriber.data.user_registered).toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' })}</FlexTablePrimaryText>
                        </FlexTableTextHolder>
                     </FlexTableColumn>
                     <FlexTableColumn width="22%">
                        <FlexTableTextHolder>
                           <FlexTablePrimaryText>{new Date(parseInt(subscriber.data.metadata.expire)).toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' })}</FlexTablePrimaryText>
                           </FlexTableTextHolder>
                     </FlexTableColumn>
                     
                  </FlexTableRow>  
               ))}

        </FlexTable>
    )
}
export default Table;