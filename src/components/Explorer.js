import React from 'react';
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import { Controlled as ControlledEditor } from 'react-codemirror2';
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'
import { useFilePicker } from 'use-file-picker';

const Explorer = (props) => {


    const [openFileSelector, { filesContent, loading }] = useFilePicker({
        accept: '.txt',
    });

    if (loading) {
        return <div>Loading...</div>;
    }



    const {
        language,
        displayName,
        value,
        onChange
    } = props

    function handleChange(editor, data, value) {
        onChange(value)
    }


    return (
        <div className='explorer'>
            <div className='title'>
            <h1 class="ui header">{displayName}</h1>
                
                <button class="ui icon button small" onClick={() => {
                    openFileSelector()
                }}>
                    <i class="folder open outline icon"></i>
                </button>

                {filesContent.map((file, index) => (
                    <div>
                        {file.name}
                    </div>
                ))}
                <button class="ui icon button small" onClick={() => {
                    {
                        filesContent.map((file, index) => (
                            onChange(file.content)
                        ))
                    }
                }}>
                    <i class="angle double down icon"></i>
                </button>

            </div>
            <ControlledEditor
                onBeforeChange={handleChange}
                value={value}
                className="wrapper"
                options={
                    {
                        lineWrapping: true,
                        lint: true,
                        mode: language,
                        lineNumbers: true,
                        theme: 'material'
                    }
                }
            />
        </div>
    )
}

export default Explorer;