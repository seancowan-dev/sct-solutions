import React, { Component } from 'react';

//********************* MakeInput README Start **************************//
/////////////////////// Required Input Props //////////////////////////////                     
//  inputName,                                                           //
//  inputId,                                                             //
//  inputClass,                                                          //
//  inputType,                                                           //
//  inputContent                                                         //
//////////////////////// Optional Input Props /////////////////////////////
// active //set to true if active element in navigation//,               //
// cssInput //see Handling CSS below//                                   //
//                                                                       //
//\\\\\\\\\\\\\\\\\\\\\ Validating Content \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\//
//                                                                       //
//  Where noted below certain inputs accept validation parameters        //
//  these are some important notes on validation                         //
//_______________________________________________________________________//
//                                                                       //
//  i. Validation is optional if you wish to use your own validation     //
//                                                                       //
//  ii.  If you use the built-in validation only the specificed inputs   //
//  accept the validation parameters                                     //
//                                                                       //
//  iii.  The validator does not display messages, it produces a JSON    //
//  object with all your validation messages and the inputs which        //
//  flagged them.  It is up to you to handle displaying this information //
//  to the user.                                                         //
//                                                                       //
//\\\\\\\\\\\\\\\\\\\\\ Handling Content \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\//
//                                                                       //
//  MakeInput bases typecasts content input by input type and so         //
//  depending on the type of input you are using there are different     //
//  formats to pass content.                                             //
//_______________________________________________________________________//
//                                                                       //
//\\\\\\\\\\\\\\\\\\\\\\ Supported inputs \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\//
//  button, checkbox, color, date, datetime-local,                       // 
//  email,file, hidden, image, month, number, password, radio, range,    //
//  submit, tel, text, time, url, week                                   //
//                                                                       //
//\\\\\\\\\\\\\\\\\\\\\\ Unsupported inputs \\\\\\\\\\\\\\\\\\\\\\\\\\\\\//
//                         reset, search                                 //
//_______________________________________________________________________//
//                                                                       //
//      1.  Models for how to pass each input content are shown below    //
//                                                                       //
//------/button/---------------------------------------------------------//
//      i.  Accepts only take one parameter 'value="some value"' and so  //
//      we only need to pass a string to inputContent                    //
//                                                                       //
//      /data model/                                                     //     
//      inputContent="SomeStringValueHere"                               //
//_______________________________________________________________________//
//                                                                       //
//------/checkbox/-------------------------------------------------------//
//      i.  Accepts a value which is not shown to user but is            //
//      rather used for development purposes, optional checked           //
//      parameter if it needs to be checked, optional required           //
//      parameter if it is required.                                     //
//                                                                       //
//      If you set required: true, then you can optionally pass          //
//      a validate: "Message here" statement to automatically            //
//      generate validation for the element                              //
//                                                                       //
//      **Important: If you do not pass a validation message             //
//      then no validation will be performed by MakeInput**              //
//                                                                       //
//      \data model\                                                     //
//      let chxBox = {                                                   //
//          value: "some value",                                         //
//          checked: true // false,                                      //
//          required: true // false                                      //
//      }                                                                //
//                                                                       //
//      inputContent={chxBox}                                            //
//_______________________________________________________________________//
//                                                                       //
//------/color/----------------------------------------------------------//
//      i.  Accepts an optional default color that must be format        // 
//      #hexcode                                                         //
//                                                                       //
//      \data model\                                                     //
//      inputContent="#0f0f0f"                                           //
//_______________________________________________________________________//
//                                                                       //
//------/date/-----------------------------------------------------------//
//      i. Accepts a default starting date, as well min and max          //
//      to specify desired display range. Dates must be in the           //
//      YYYY-MM-DD format, optional required parameter if it             //
//      is required.                                                     //
//                                                                       //
//      If you set required: true, then you can optionally pass          //
//      a validate: "Message here" statement to automatically            //
//      generate validation for the element                              //
//                                                                       //
//      **Important: If you do not pass a validation message             //
//      then no validation will be performed by MakeInput**              //
//                                                                       // 
//                                                                       //
//      \data model\                                                     //
//     let date = {                                                      //
//         data: {                                                       //
//             value: "YYYY-MM-DD",                                      //
//             min: "YYYY-MM-DD", - must be earlier                      //
//             max: "YYYY-MM-DD", - must be later                        //
//            },                                                         //                                
//         required: true // false,                                      //
//         validate: "Your validation message here"                      //
//     }                                                                 //
//                                                                       //
//      inputContent={date}                                              //
//_______________________________________________________________________//
//                                                                       //
//------/datetime-local/-------------------------------------------------//
//      i. Accepts a default starting datetime, as well min and max      //
//      to specify desired display range. Datetimess must be in the      //
//      YYYY-MM-DDT00-00 format, optional required parameter if it       //
//      is required.                                                     //
//                                                                       //
//      If you set required: true, then you can optionally pass          //
//      a validate: "Message here" statement to automatically            //
//      generate validation for the element                              //
//                                                                       //
//      **Important: If you do not pass a validation message             //
//      then no validation will be performed by MakeInput**              //
//                                                                       //  
//                                                                       //
//      \data model\                                                     //         
//      let datetime = {                                                 //
//         data: {                                                       //
//             value: "YYYY-MM-DD",                                      //
//             min: "YYYY-MM-DD", - must be earlier                      //
//             max: "YYYY-MM-DD", - must be later                        //
//            },                                                         // 
//         required: true // false,                                      //
//         validate: "Your validation message here"                      //
//     }                                                                 //
//                                                                       //         
//      inputContent={datetime}                                          //
//_______________________________________________________________________//
//                                                                       //
//------/email/----------------------------------------------------------//
//      i. Accepts a regex pattern to verify the e-mail entered, and an  //
//      optional placeholder value to show the user an example of the    //
//      expected format.                                                 //
//                                                                       //
//      \data model\                                                     //         
//      let email = {                                                    //
//          pattern:"[A-Za-z]{3}",                                       //
//          placeholder: "format@cat.site"                               //
//      }                                                                //
//                                                                       //         
//      inputContent={email}                                             //
//_______________________________________________________________________//
//                                                                       //
//------/file/-----------------------------------------------------------//
//      i.  Accepts only a mime-type to expect for file input, optional  //
//      required parameter if it is required.                            //
//                                                                       //
//      If you set required: true, then you can optionally pass          //
//      a validate: "Message here" statement to automatically            //
//      generate validation for the element                              //
//                                                                       //
//      **Important: If you do not pass a validation message             //
//      then no validation will be performed by MakeInput**              //
//                                                                       //
//                                                                       //
//      \data model\                                                     //         
//      let file = {                                                     //
//          accept:"mime/type"                                           //
//         required: true // false,                                      //
//         validate: "Your validation message here"                      //
//     }                                                                 //
//                                                                       //         
//      inputContent={file}                                              //
//_______________________________________________________________________//
//                                                                       // 
//------/hidden/---------------------------------------------------------//
//      i.  Accepts only one value, a string or numeric value to be      //
//      stored without the user seeing it                                //
//                                                                       //
//      \data model\                                                     //         
//      let hidden = {                                                   //
//          value:"(string) or (numeric)"                                //
//      }                                                                //
//                                                                       //         
//      inputContent={hidden}                                            //
//_______________________________________________________________________// 
//                                                                       // 
//------/image/----------------------------------------------------------//
//      i.  Accepts only one value the path of the image to display      //
//                                                                       //
//      \data model\                                                     //         
//      let image = {                                                    //
//          src:"file://path/to/some/file.png"                           //
//      }                                                                //
//                                                                       //         
//      inputContent={image}                                             //
//_______________________________________________________________________// 
//                                                                       // 
//------/month/----------------------------------------------------------//
//      i.  Accepts a default month value to display and an optional     //
//      minimum month to start the picker at                             //
//                                                                       //
//      **Important: must use the YYYY-MM format for months**            //
//                                                                       //
//      \data model\                                                     //         
//      let month = {                                                    //
//          value:"YYYY-MM",                                             //
//          min:"YYYY-MM" - must be earlier                              //
//      }                                                                //
//                                                                       //         
//      inputContent={month}                                             //
//_______________________________________________________________________// 
//                                                                       // 
//------/number/---------------------------------------------------------//
//      i.  Accepts a default number, and a min and max range which      //
//      may be entered, optional required parameter if it                //
//      is required.                                                     //
//                                                                       //
//      If you set required: true, then you can optionally pass          //
//      a validate: "Message here" statement to automatically            //
//      generate validation for the element                              //
//                                                                       //
//      **Important: If you do not pass a validation message             //
//      then no validation will be performed by MakeInput**              //
//                                                                       //
//                                                                       //
//      \data model\                                                     //         
//      let number = {                                                   //
//          value:"10",                                                  //
//          min:"0",                                                     //
//          max:"100",                                                   //
//          required: true // false,                                     //
//          validate: "Your validation message here"                     //
//      }                                                                //
//                                                                       //         
//      inputContent={number}                                            //
//_______________________________________________________________________// 
//                                                                       // 
//------/password/-------------------------------------------------------//
//      i.  Accepts multiple values, all are optional except for the     //
//      regex pattern to match the password against.  Optional values    //
//      are: inputmode, minlength, maxlength, size and autocomplete      //
//                                                                       //
//      If you set required: true, then you can optionally pass          //
//      a validate: "Message here" statement to automatically            //
//      generate validation for the element                              //
//                                                                       //
//      **Important: If you do not pass a validation message             //
//      then no validation will be performed by MakeInput**              //
//                                                                       //
//      \data model\                                                     //         
//      let password = {                                                 //
//         data: {                                                       //
//          pattern:"[A-Za-z]{3}",                                       //
//          minlength:"0",                                               //
//          maxlength:"20",                                              //
//          size: "20", - size and max length should match               // 
//          autocomplete: "on"/"off"/"current-password"/"new-password"   //                                                   
//          },                                                           //
//          inputmode: "numeric" // "string",                            //
//          required: true // false,                                     //
//          validate: "Your validation message here"                     //
//      }                                                                //
//                                                                       //         
//      inputContent={password}                                          //
//_______________________________________________________________________//
//                                                                       //
//------/radio/----------------------------------------------------------//
//      i.  Accepts a value which will be shown when you request         //
//      a value from the input, it will not be shown to the user         //
//      optionally accepts a checked value if the box should be          //
//      rendered checked, and a secondary nameGroup property             //
//      MakeInput will help keep your radios together using this name,   //
//      optional required parameter if it is required.                   //
//                                                                       //
//      If you set required: true, then you can optionally pass          //
//      a validate: "Message here" statement to automatically            //
//      generate validation for the element                              //
//                                                                       //
//      **Important: If you do not pass a validation message             //
//      then no validation will be performed by MakeInput**              //
//                                                                       //
//      \data model\                                                     //         
//      let radio = {                                                    //
//          nameGroup:"YourRadioGroupName",                              //
//          value:"YourStoredValue",                                     //
//          checked: true // false,                                      //
//          required: true // false,                                     //
//          validate: "Your validation message here"                     //
//      }                                                                //
//                                                                       //         
//      inputContent={radio}                                             //
//_______________________________________________________________________// 
//                                                                       // 
//------/range/----------------------------------------------------------//
//      i.  Accepts a min and max numeric value for the range to display //
//                                                                       //
//      \data model\                                                     //         
//      let range = {                                                    //
//          min:"00",                                                    //
//          max:"50"                                                     //
//      }                                                                //
//                                                                       //         
//      inputContent={range}                                             //
//_______________________________________________________________________//
//                                                                       // 
//------/submit/---------------------------------------------------------//
//      i.  Accepts a string value to show on the button                 //
//                                                                       //
//      \data model\                                                     //                 
//      inputContent="Your submit value"                                 //
//_______________________________________________________________________//
//                                                                       // 
//------/tel/------------------------------------------------------------//
//      i.  Accepts a pattern to match the number against, and           //
//      optional placeholder, required, and validate parameters          //
//                                                                       //
//      If you set required: true, then you can optionally pass          //
//      a validate: "Message here" statement to automatically            //
//      generate validation for the element                              //
//                                                                       //
//      **Important: If you do not pass a validation message             //
//      then no validation will be performed by MakeInput**              //
//                                                                       //
//      \data model\                                                     //         
//      let tel = {                                                      //
//          pattern:"[A-Za-z]{3}",                                       //
//          placeholder:"(000) 555-5555",                                //
//          required: true // false,                                     //
//          validate: "Your validation message here"                     //
//      }                                                                //
//                                                                       //         
//      inputContent={tel}                                               //
//_______________________________________________________________________// 
//                                                                       // 
//------/text/-----------------------------------------------------------//
//      i.  Accepts value to display in the text box, and optional       //
//      minlength, maxlength, and size parameters.  Can specify          //
//      required and validate parameters as well                         //
//                                                                       //
//      If you set required: true, then you can optionally pass          //
//      a validate: "Message here" statement to automatically            //
//      generate validation for the element                              //
//                                                                       //
//      **Important: If you do not pass a validation message             //
//      then no validation will be performed by MakeInput**              //
//                                                                       //
//      \data model\                                                     //         
//      let text = {                                                     //
//          value:"some value",                                          //
//          minlength:"4",                                               //
//          max:"10",                                                    //
//          size: "10", - should match max length                        //
//          required: true // false,                                     //
//          validate: "Your validation message here"                     //
//      }                                                                //
//                                                                       //         
//      inputContent={text}                                              //
//_______________________________________________________________________//
//                                                                       // 
//------/time/-----------------------------------------------------------//
//      i.  Accepts a min and max time in the format 00:00               //
//                                                                       //
//      \data model\                                                     //         
//      let time = {                                                     //
//          min:"00:00",                                                 //
//          max:"10:00"                                                  //
//      }                                                                //
//                                                                       //         
//      inputContent={time}                                              //
//_______________________________________________________________________//
//                                                                       //
//------/url/------------------------------------------------------------//
//      i.  Accepts a placeholder and pattern to match the URL against   //
//      optionally accepts size and the required and validate params     //
//                                                                       //
//      If you set required: true, then you can optionally pass          //
//      a validate: "Message here" statement to automatically            //
//      generate validation for the element                              //
//                                                                       //
//      **Important: If you do not pass a validation message             //
//      then no validation will be performed by MakeInput**              //
//                                                                       //
//                                                                       //
//      \data model\                                                     //         
//      let url = {                                                      //
//         placeholder:"protocol://url.some.place"                       //
//         pattern:"[A-Za-z]{3}",                                        //
//         size="20",                                                    //
//         required: true // false,                                      //
//         validate: "Your validation message here"                      //
//     }                                                                 //
//                                                                       //         
//      inputContent={url}                                               //
//_______________________________________________________________________// 
//                                                                       // 
//------/week/-----------------------------------------------------------//
//      i.  Accepts a min and max week in the format YYYY-W##            //
//                                                                       //
//      \data model\                                                     //         
//      let week = {                                                     //
//          min:"2020-W1",                                               //
//          max:"2020-W20"                                               //
//      }                                                                //
//                                                                       //         
//      inputContent={week}                                              //
//_______________________________________________________________________//
//                                                                       //    
////////////////////////// Handling CSS ///////////////////////////////////
//                                                                       //
//  In addition to simply assigning class names you can add CSS in       // 
//  two other ways shown here                                            //
//                                                                       //
//  1. CSS can be passed in directly as inline styles when necessary     //
//     When passing inline styles pass the prop as                       //
//                cssInput={{ "background-color": "brown", }}            //             
//                    **not**                                            //
//                cssInput={"body{some:style;}"}                         //
//                                                                       //                
//  2.  Alternatively you can pass in a relative path *future            // 
//      implementation, requires node backend*                           //
//      (note must be relative in relation to location of MakeInput.js)  //
//            i.e. given the following file structure:                   //
//        src/                                                           //
//        ├── comps/                                                     //
//        │   ├── MakeInput/                                             //
//        │   │     ├── MakeInput.js                                     //
//        ├── MyFormComponent/                                           //
//        │         ├── Form.js                                          //
//        ├── css/                                                       //
//        │   ├── formComponent.css                                      //
//        │   └── bootstrap.min.js                                       //
//                                                                       //
// Pass the prop as cssInput="../../css/formComponent.css"               //
//                      **not**                                          //
//                  cssInput="../css/formComponent.css"                  //
///////////////////////////////////////////////////////////////////////////



class MakeInput extends Component {

    render()  {

        let makeClassName;
        let style;
        if (this.props.active === "true") {
            makeClassName = this.props.inputClass + " selected";
        }
            typeof(this.props.cssInput) === 'object' ? style = this.props.cssInput : (function(){throw new Error("You tried to pass CSS but you did not pass a valid JSON object!  Please check your CSS style input and format it as shown in the readme.")}());

        return(
            <input 
            type={this.props.inputType} 
            id={this.props.inputId}
            name={this.props.inputName}
            className={makeClassName}
            value={this.props.inputContent}
            style={style}
            />
        );
    }
};

export default MakeInput;