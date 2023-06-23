import React, {useState} from 'react'

export default function TextForm(props) {
    const handleupcase = ()=>{
        console.log("upperclicked");
        let newtext=text.toUpperCase();
        setText(newtext); 
        props.showalert("Converted to uppercase", "success");
       }

        const handleoncase = ()=>{
            console.log("upperclicked");
            let newtext=text.toLowerCase();
            setText(newtext); 
            props.showalert("Converted to lowercase","success");
           }

            const handledown = ()=>{
                console.log("upperclicked");
                let newtext='';
                setText(newtext);  }

                const handlecopy = ()=> {

                    var text=document.getElementById("mybox");
                    text.select();
                    navigator.clipboard.writeText(text.value);
                    document.getSelection().removeAllRanges();
                  }

                  const handleExtraSpace = ()=>{
                    let newText=text.split(/[ ]+/);
                    setText(newText.join(" "));
                  }

    const handleonchange =(event)=>{
        console.log("handleonupperclick");
        setText(event.target.value);


    }
    const [text, setText] = useState(' ');
    // setText("enter your words");
  return (
    <>
            <div className="container" style={{ color: props.modes==='dark'?'white':'black'}}>

                <h1>{props.heading}</h1>
              
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleonchange} style={{backgroundColor: props.modes==='dark'?'grey':'white',Color:props.modes==='dark'?'white':'black'}}id="mybox" rows="9"></textarea>
        </div>

        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleupcase}>convert to uppercase</button> 
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleoncase}>convert to lowercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handledown}>clear text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handlecopy}>copy text</button>
        <button disabled={text.length===0} className="btn btn-primary my-1 mx-1" onClick={handleExtraSpace}>remove extra space</button>
            </div>

            <div className="container my-3" style={{color:props.modes==='dark'?'white':'black'}}>
                <h2>Text Summary</h2>
                <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and{text.length} characters</p>
                <p>{0.88*text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes Read</p>
                <h2>Preview</h2>
                <p>{text}</p>


            </div>
    </>
  )
}
