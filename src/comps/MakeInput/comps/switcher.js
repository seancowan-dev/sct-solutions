import React from 'react';
import { checked, required, handleChange } from '../base/checkInputs.js'

export default function switcher(inputType, localProps, className, style, onClick) {
    
    let elem;
    switch(inputType) {
        case "button":
        elem =  <input 
                type="button"
                id={localProps.inputId}
                name={localProps.inputName}
                className={className}
                value={localProps.inputContent}
                style={style}
                onClick={() => { onClick(localProps.inputId) }}
                />
            break;
        case "checkbox":
        elem =  <input 
                type="checkbox"
                id={localProps.inputId}
                name={localProps.inputName}
                className={className}
                value={localProps.inputContent.value}
                defaultChecked={checked(localProps.inputContent.checked)}
                required={required(localProps.inputContent.required)}
                style={style}
                />
            break;
        case "color":
        elem =  <input 
            type="color"
            id={localProps.inputId}
            name={localProps.inputName}
            className={className}
            value={localProps.inputContent.value}
            style={style}
            />
            break;
        case "date":
            elem =  <input 
            type="date"
            id={localProps.inputId}
            name={localProps.inputName}
            className={className}
            defaultValue={localProps.inputContent.data.value}
            min={localProps.inputContent.data.min}
            max={localProps.inputContent.data.max}
            required={required(localProps.inputContent.required)}
            style={style}
            />
            break;
        case "datetime-local":
            elem =  <input 
            type="datetime-local"
            id={localProps.inputId}
            name={localProps.inputName}
            className={className}
            defaultValue={localProps.inputContent.data.value}
            min={localProps.inputContent.data.min}
            max={localProps.inputContent.data.max}
            required={required(localProps.inputContent.data.required)}
            style={style}
            />
            break;
        case "email":
            elem =  <input 
            type="email"
            id={localProps.inputId}
            name={localProps.inputName}
            className={className}
            pattern={localProps.inputContent.pattern}
            placeholder={localProps.inputContent.placeholder}
            required={required(localProps.inputContent.required)}
            style={style}
            />
            break;
        case "file":
            elem =  <input 
            type="file"
            id={localProps.inputId}
            name={localProps.inputName}
            className={className}
            accept={localProps.inputContent.accept}
            required={required(localProps.inputContent.required)}
            style={style}
            />
        break;
        case "hidden":
            elem =  <input 
            type="hidden"
            id={localProps.inputId}
            name={localProps.inputName}
            className={className}
            defaultValue={localProps.inputContent.value}
            style={style}
            />
        break;  
        case "image":
            elem =  <input 
            type="image"
            id={localProps.inputId}
            name={localProps.inputName}
            className={className}
            src={localProps.inputContent.src}
            style={style}
            />
        break;
        case "month":
            elem =  <input 
            type="month"
            id={localProps.inputId}
            name={localProps.inputName}
            className={className}
            defaultValue={localProps.inputContent.value}
            min={localProps.inputContent.min}
            style={style}
            />
        break;
        case "number":
            elem =  <input 
            type="number"
            id={localProps.inputId}
            name={localProps.inputName}
            className={className}
            defaultValue={localProps.inputContent.value}
            min={localProps.inputContent.min}
            max={localProps.inputContent.max}
            required={required(localProps.inputContent.required)}
            style={style}
            />
        break;
        case "password":
            elem =  <input 
            type="password"
            id={localProps.inputId}
            name={localProps.inputName}
            className={className}
            minLength={localProps.inputContent.minLength}
            maxLength={localProps.inputContent.maxLength}
            size={localProps.inputContent.size}
            inputMode={localProps.inputContent.inputMode}
            required={required(localProps.inputContent.required)}
            style={style}
            />
        break;  
        case "radio":
            elem =  <input 
            type="radio"
            id={localProps.inputId}
            name={localProps.inputName}
            className={className} /* need to implement checker function for groups */
            defaultValue={localProps.inputContent.value}
            defaultChecked={required(localProps.inputContent.checked)}
            required={required(localProps.inputContent.required)}
            style={style}
            />
        break;
        case "range":
            elem =  <div><input 
            type="range"
            id={localProps.inputId}
            name={localProps.inputName}
            className={className}
            min={localProps.inputContent.min}
            max={localProps.inputContent.max}
            step={localProps.inputContent.step}
            defaultValue={localProps.inputContent.value} 
            style={style}
            onInput={handleChange}
            />
            <input type="text" id={localProps.inputId + "-displayer"} name={"range-displayer-" + localProps.inputName} size={localProps.inputContent.max.length} defaultValue=""/>
            </div>
        break;
        // case "submit":
        //     /* something to do */
        // break;
        // case "tel":
        //     /* something to do */
        // break;
        // case "text":
        // /* something to do */
        // break;
        // case "time":
        //     /* something to do */
        //     break;
        // case "url":
        //     /* something to do */
        // break;
        // case "week":
        //     /* something to do */
        // break;                            
    }
    return elem;
}