import React, { useState } from 'react';

export default function TextForm(props) {
    const [text, setText] = useState('');
    // react is not watching the default variable 
    
    const Click = ()=>{
        console.log('UperCase was clicked: '+ text);
        let newText = text.toUpperCase();      
        setText(newText);  
        props.showAlert("Converted to upper case","success")
    }
    const lower = ()=>{
        console.log('LowerCase was clicked: '+ text);
        let newText = text.toLowerCase();      
        setText(newText);  
        props.showAlert("Converted to lower case","success")
    }
    
    const handleOnChange = (event)=>{
        console.log('OnChange was clicked');  
        setText(event.target.value);// using this we can type into textArea

    }
    const handleCopy=()=>{
        let copy = document.getElementById('myBox');   // grab the textarea value
        copy.select();
        navigator.clipboard.writeText(copy.value);
    }
    // for clear textArea
    const handleClear = ()=>{
        setText('');
    }

    const handleExtraSpaces = ()=>{
        let clearExtraSpace = text.split(/[ ]+/);
        setText(clearExtraSpace.join(" "));
    }
    return (
        <>
        <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
            <div className="mb-3">
                <h1>{props.heading}</h1>
                <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white' , color:props.mode==='dark'?'white':'black'}} rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={Click}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-3" onClick={lower}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-3" onClick={handleCopy}>Copy the text value</button>
            <button className="btn btn-primary mx-3" onClick={handleClear}>Clear the text value</button>
            <button className="btn btn-primary mx-3" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>
        <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}} >
            <h1>Your Text Summary</h1>
            <p>{text.split(" ").length-1} Words and {text.length} Characters </p>
            <p>{0.008 * text.split(" ").length} minutes to read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter Something to preview here"}</p>
        </div>
        </>
    )
}
