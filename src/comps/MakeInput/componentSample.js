import React, { Component } from 'react';
import MakeInput from '../MakeInput/MakeInput';
import ErrorHandler from '../MakeInput/comps/ErrorHandler';

class Samples extends Component {
    render () {
        return(
            <ErrorHandler>
                <h1>Button Input</h1>
                    <MakeInput 
                            inputType="button"
                            inputClass="test-button"
                            inputName="test-button"
                            inputContent="button"
                            cssInput={{ "backgroundColor": "brown", }}
                        /><br />
                        <h1>Checkbox Input</h1>
                    <MakeInput 
                            inputType="checkbox"
                            inputClass="test-checkbox"
                            inputName="test-checkbox"
                            inputContent= {{
                                value: "Check Me Out",
                                checked: "true",
                                required: "false",
                                validate: "You did something wrong!"
                            }}
                            cssInput={{ "backgroundColor": "green", }}
                        /><br />
                        <h1>Color Input</h1>
                    <MakeInput 
                            inputType="color"
                            inputClass="test-color"
                            inputName="test-color"
                            inputContent= {"#0f0f0f"}
                            cssInput={{ "backgroundColor": "green", }}
                        /><br />
                        <h1>Date Input</h1>
                    <MakeInput 
                            inputType="date"
                            inputClass="test-date"
                            inputName="test-date"
                            inputContent= {{
                                data: {
                                    value: "2018-04-24",
                                    min: "2015-01-01",
                                    max: "2022-01-01",
                                },
                            required: "true",
                            validate: "You did something wrong!"
                            }}
                            cssInput={{ "backgroundColor": "blue", }}
                        /><br />
                        <h1>Datetime-local Input</h1>   
                    <MakeInput 
                            inputType="datetime-local"
                            inputClass="test-datetime-local"
                            inputName="test-datetime-local"
                            inputContent= {{
                                data: {
                                        value: "2018-04-24T14-40",
                                        min: "2015-01-01T00-00",
                                        max: "2022-01-01T00-00",
                                    },
                                required: "true",
                                validate: "You did something wrong!"
                            }}
                            cssInput={{ "backgroundColor": "blue", }}
                        /><br />
                        <h1>Email Input</h1>
                    <MakeInput 
                            inputType="email"
                            inputClass="test-email"
                            inputName="test-email"
                            inputContent= {{
                                pattern: "^([a-zA-Z0-9_]+)@(([0-9]{1,3}[0-9]{1,3}[0-9]{1,3})|(([a-zA-Z0-9]+)+))([a-zA-Z]{2,4}|[0-9]{1,3})(?)$",
                                placeholder: "yourname@email.com",
                                required: "true",
                                validate: "You did something wrong!"
                            }}
                            cssInput={{ "backgroundColor": "blue", }}
                        /><br />
                        <h1>File Input</h1>
                    <MakeInput 
                            inputType="file"
                            inputClass="test-file"
                            inputName="test-file"
                             inputContent= {{
                                accept: "plain/text",
                                required: "true",
                                validate: "You did something wrong!"
                            }}
                            cssInput={{ "backgroundColor": "yellow", }}
                        /><br />
                        <h1>Hidden Input</h1>
                    <MakeInput 
                            inputType="hidden"
                            inputClass="test-hidden"
                            inputName="test-hidden"
                             inputContent= {{
                                 value: "I like pie",
                            }}
                            cssInput={{ "backgroundColor": "orange", }}
                        /><br />
                        <h1>Image Input</h1>
                    <MakeInput 
                            inputType="image"
                            inputClass="test-image"
                            inputName="test-image"
                             inputContent= {{
                                 src: `/11.jpg`,
                            }}
                            cssInput={{ "maxWidth": "10%", }}
                        /><br />
                        <h1>Month Input</h1>
                    <MakeInput 
                            inputType="month"
                            inputClass="test-month"
                            inputName="test-month"
                             inputContent= {{
                                 value: "1988-03",
                                 min: "1980-01"
                            }}
                            cssInput={{ "border": "2px solid black", }}
                        /><br />
                        <h1>Number Input</h1>
                    <MakeInput 
                            inputType="number"
                            inputClass="test-number"
                            inputName="test-number"
                             inputContent= {{
                                 value: "10",
                                 min: "0",
                                 max: "100",
                                 required: "true",
                            }}
                            cssInput={{ "border": "1px solid teal", }}
                        /><br />
                        <h1>Password Input</h1>
                        <MakeInput 
                            inputType="password"
                            inputClass="test-password"
                            inputName="test-password"
                             inputContent= {{
                                 pattern: "[A-Za-z]{10}",
                                 minLength: "0",
                                 maxLength: "20",
                                 size: "20",
                                 autocomplete: "on",
                                 inputMode: "string",
                                 required: "true",
                            }}
                            cssInput={{ "border": "1px solid teal", }}
                        /><br />
                        <h1>Radio Input</h1>
                        <MakeInput 
                            inputType="radio"
                            inputClass="test-radio"
                            inputName="test-radio"
                             inputContent= {{
                                 nameGroup: "test-radio-group",
                                 value: "uwu i'm a radio",
                                 checked: "true",
                                 required: "true",
                            }}
                            cssInput={{ "border": "1px solid teal", }}
                        /><br />
                        <h1>Range Input</h1>
                        <MakeInput 
                            inputType="range"
                            inputId="range-id"
                            inputClass="test-range"
                            inputName="test-range"
                             inputContent= {{
                                min:"00",
                                max:"50",
                                value:"10",
                                step:"1"
                            }}
                            cssInput={{ "border": "1px solid teal", }}
                        /><br />
                        <h1>Radio Input</h1>                      
                </ErrorHandler>
        );
    }
}

export default Samples;