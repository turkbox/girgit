import React from "react";
import styled from "styled-components";

const ExpandingFog = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    overflow: hidden;
    top: 0;
    left: 0;
    background-color: #00000075;
    z-index: 1000;
    display: flex;
    justify-content: center;
    align-items: center;
`

const FormContainer = styled.div`
    height: 450px;
    width: 550px;
    background-color: #fff;
    border-radius: 5px;
    overflow: hidden;
`

const ModalHeader = styled.div`
    width: 100%;
    height: 50px;
    background-color: #3b3b3b;
    color: #fff;
    display: flex;
    align-items: center;
    padding: 0 20px;
    font-size: 1.2rem;
`

const ModalBody = styled.div`
    padding: 15px;
    width: 100%;
    height: calc(100% - 100px);
    overflow: auto;
`

const ModalInputField = styled.input`
    width: 100%;
    height: 2.5rem;
    border-radius: 5px;
    border: 1px solid #c2c1c1;
    margin-top: 10px;
    margin-bottom: 20px;
    padding: 0 10px;
    font-size: 1rem;
    font-family: inherit;
    &:focus {
        outline: none;
    }

`

const ModalSelectField = styled.select`
    width: 100%;
    height: 2.5rem;
    border-radius: 5px;
    border: 1px solid #c2c1c1;
    margin-top: 10px;
    margin-bottom: 20px;
    padding: 0 10px;
    font-size: 1rem;
    background: none;
    &:focus {
        outline: none;
    }
`

const ModalButton = styled.button`
    outline: none;
    background: #3b3b3b;
    color: #fff;
    border: 0;
    border-radius: 5px;
    font-weight: 700;
    line-height: 32px;
    padding: 0 16px;
    text-transform: uppercase;
    &:not(:last-of-type) {
        margin-right: 5px;
    }
    transition: 0.5s all ease-in-out;
    &:hover {
        cursor: pointer;
        background: #000;
    }
`

const ModalNegativeButton = styled(ModalButton)`
    background: #fff;
    color: #3b3b3b;
    border: 1px solid #b9b9b9;
    &:hover {
        color: #3b3b3b;
        border-color: #3b3b3b;
        background-color: #fff;
    }
`

const ModalButtonPanel = styled.div`
    width: 100%;
    height: 50px;
    background-color: #f7f9fa;
    border-top: 1px solid #e6e8eb;
    padding: 0 10px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`

class FormModal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            modal: null,
            formData: this.props.definition.map((field) => {
                return {
                    name: field.name,
                    display: field.display,
                    type: field.type,
                    options: field.options || null,
                    value: field.default,
                }
            }) 
        }
        
        this.triggerModalSuccessEvent = this.triggerModalSuccessEvent.bind(this);
        console.log(this.state);
    }

    registerInputChange = (e, i) => {
        e.preventDefault();
        let formDataCopy = this.state.formData;
        formDataCopy[i].value = e.target.value;
        this.setState({
            formData: formDataCopy
        })
    }

    triggerModalSuccessEvent = (e) => {
        e.preventDefault();
        console.log("form created");
        /*
        let output = this.state.formData.map((field) => ({
            "key": field.name,
            "value": field.value
        }))
        */
        //this.props.onSuccess(output);
    }

    onCancel=() => {
        this.setState({modal: null})
    }

    render = () => {
        let self = this;
        return (
            <>
                <ExpandingFog>
                    <FormContainer>
                        <ModalBody>
                            {
                                this.state.formData.map((field, i) => {
                                    if (field.type === `select`)
                                        return (
                                            <div key={i}>
                                                <p>{field.display} <br/>
                                                <ModalSelectField defaultValue={field.options[0]} key={i} onChange={(e) => self.registerInputChange(e, i)}>{
                                                    field.options.map(
                                                        (option,j) => {
                                                            return <option key={j}>{option}</option>
                                                        }
                                                    )
                                                    }
                                                </ModalSelectField>
                                            </p>
                                            </div>                                           
                                        )
                                    else
                                        return (
                                            <div key={i}>
                                                <p>{field.display} <br/>
                                                <ModalInputField type={field.type} onChange={(e) => self.registerInputChange(e, i)}/>
                                                </p>
                                            </div>
                                        )
                                })
                            }
                        </ModalBody>
                        <ModalButtonPanel>
                            <ModalNegativeButton onClick={() => this.onCancel()}>Cancel</ModalNegativeButton>
                            <ModalButton onClick={(e) => this.triggerModalSuccessEvent(e)}>Create</ModalButton>
                        </ModalButtonPanel>
                    </FormContainer>
                </ExpandingFog>
            </>
        )
    }
}

export default FormModal;