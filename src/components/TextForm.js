import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpperClick = () => {
        console.log("uppercase was clicked " + text);
        const newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to upper case.", "success");
    }

    const handleLowerClick = () => {
        console.log("lowercase was clicked " + text);
        const newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lower case.", "success");
    }

    const handleOnChange = (event) => {
        console.log("handle On Change");
        setText(event.target.value);
    }

    const handleClearClick = () => {
        console.log("clear text");
        const newText = "";
        setText(newText);
        props.showAlert("Text clear", "success");
    }

    // const [mode, setmode] = useState("Convert Dark mode");
    // const [style, setStyle] = useState({
    //     color: "black",
    //     backgroundColor: "white"
    // })

    // const handleChangeMode = () => {
    //     if (style.color === "black") {
    //         setStyle({
    //             color: "white",
    //             backgroundColor: "black"
    //         })
    //         setmode("Convert Light mode");
    //         console.log("dark mode");
    //     } else {
    //         setStyle({
    //             color: "black",
    //             backgroundColor: "white"
    //         })
    //         setmode("Convert Dark mode");
    //         console.log("light mode");
    //     }
    // }

    // const copyToClipBoard = (text) => {
    //     console.log("copy text");
    //     navigator.clipboard.writeText(text);
    // }

    const copyToClipBoard = () => {
        console.log("copy text");
        navigator.clipboard.writeText(text);
        props.showAlert("Text copied!", "success");
    }

    const [text, setText] = useState("");

    return (
        <>
            <div className='container' style={{ color: props.mode === "dark" ? "white" : "grey" }} >
                <h2>{props.heading}</h2>
                <div className="mb-3">
                    <textarea className="form-control" id="exampleFormControlTextarea1" placeholder='Enter the Text' value={text} onChange={handleOnChange} rows="8"></textarea>
                </div>
                <button className='btn btn-primary my-2 mx-2' onClick={handleUpperClick}>Convert to upperCase</button>
                <button className='btn btn-primary my-2 mx-2' onClick={handleLowerClick}>Convert to lowerCase</button>
                <button className='btn btn-primary my-2 mx-2' onClick={handleClearClick}>Clear Text</button>
                {/* <button className='btn btn-primary mx-2' onClick={() => copyToClipBoard(text)}>Copy Text</button> */}
                {/* or */}
                <button className='btn btn-primary my-2 mx-2' onClick={copyToClipBoard}>Copy Text</button>
                {/* <button className='btn btn-primary mx-2' onClick={handleChangeMode} >{mode}</button> */}
            </div>

            <div className="container my-2" style={{ color: props.mode === "dark" ? "white" : "grey" }}>
                <h2>Text summary</h2>
                {/* <p>{text.split(" ").length - 1} words and {text.length} characters</p> */}
                <p>{text.split(/\s+/).filter((element => { return element.length !== 0 })).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").filter((element => { return element.length !== 0 })).length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Nothing to preview."}</p>
            </div>
        </>
    );
}