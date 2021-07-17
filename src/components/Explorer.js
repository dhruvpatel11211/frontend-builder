import React from 'react';
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import { Controlled as ControlledEditor} from 'react-codemirror2';
import { language } from 'language-tags';
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'

const Explorer=(props)=>{

    const {
        language,
        displayName,
        value,
        onChange
    }=props

    function handleChange(editor,data,value){
        onChange(value)
    }

    return (
        <div className='explorer'>
            <div className='title'>
                {displayName}
                <button>O/C</button>
            </div>
            <ControlledEditor
            onBeforeChange={handleChange}
            value={value}
            className="wrapper"
            options={
                {
                    lineWrapping:true,
                    lint:true,
                    mode:language,
                    lineNumbers:true,
                    theme:'material'
                }
            }
            />
        </div>
    )
}

export default Explorer;