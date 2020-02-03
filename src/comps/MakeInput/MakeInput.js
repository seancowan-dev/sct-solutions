import React, { Component } from 'react';
import switcher from './comps/switcher';

class MakeInput extends Component {


    render()  {

        let makeClassName;
        let style;
        if (this.props.active === "true") {
            makeClassName = this.props.inputClass + " selected";
        }   else makeClassName = this.props.inputClass
            typeof(this.props.cssInput) === 'object' ? style = this.props.cssInput : (function(){throw new Error("You tried to pass CSS but you did not pass a valid JSON object!  Please check your CSS style input and format it as shown in the readme.")}());

        let output = switcher(this.props.inputType, this.props, makeClassName, style, this.props.onClick);

        return (output);
    }
};

export default MakeInput;