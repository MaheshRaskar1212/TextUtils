import { useState } from "react"




export default function Textbox2() {
  const [text,setText] = useState("Enter Text Here");
  const handleUp = ()=>{
    let newText= text.toUpperCase();
     setText(newText);
    }

  const handelChange = (event)=>{
    setText(event.target.value);
    }

  const handleLC = ()=>{
    let newText= text.toLowerCase();
     setText(newText);
    }

  const handelClear = ()=>{
    let newText="";
     setText(newText);
    }

  const handelRemove = ()=>{
    let newText=text.split(/[ ]+/);
     setText(newText.join(" "));
    }
  const handelCopy = ()=>{
    let newText= document.getElementById("exampleFormControlTextarea1");
    newText.select();
    navigator.clipboard.writeText(newText.value);
  }

    const getWordCount = ()=>{
      let neww=text.trim();
     if (neww===""){
      return 0
     }
     else{
      
      return text.trim().split(/\s+/).length//+text.trim().split("\n").length-1
      
     } 
    }
    const getCharCount = ()=>{
      let neww=text.trim();
     if (neww===""){
      return 0
     }
     else{
      let count = 0;

      for (let index = 0; index < neww.length; index++) {
        const element = neww[index];
        if (element !== " ")
        {
          count++;
        }
      }
      return count;
      // return text.trim().split(/\s+/).length//+text.trim().split("\n").length-1
      
     } 
    }
    
  return (
      
  <div>
  <div className="mb-3 my-5">
  <label htmlFor="exampleFormControlTextarea1" className="form-label"><h4>Enter Text Below</h4></label>
  <textarea className="form-control" value={text} onChange={handelChange} id="exampleFormControlTextarea1" rows="12"></textarea>
  </div>
  <div className="btn1">
  <button type="button" className="btn btn-primary mx-2" onClick={handleUp}>Uppercase</button>
  <button type="button" className="btn btn-primary mx-2" onClick={handleLC}>Lowercase</button>
  <button type="button" className="btn btn-primary mx-2" onClick={handelRemove}>Remove Extra Spaces</button>
  <button type="button" className="btn btn-primary mx-2" onClick={handelClear}>Clear Text</button>
  <button type="button" className="btn btn-primary mx-2" onClick={handelCopy}>Copy</button>

  </div>
  <div className="container my-4">
    <h3>Text Summary</h3>
    <p>Words:<b>{getWordCount()}</b> & Characters:<b>{getCharCount()}</b></p>
    <p>{0.005*getWordCount()} minutes required to read </p>
    <h3>Preview</h3>
    <p>{text}</p>
    
    
  </div>
  </div>
  )
}

