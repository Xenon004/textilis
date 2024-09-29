import React,{useState} from 'react'

export default function TextForm(props) {
  const handleUpClick=()=>{
    console.log('uppercase was clicked'+ text);
    let newTEXT=text.toUpperCase();
    setText(newTEXT);
    
  }
  const handleloClick=()=>{
    console.log('lowercase was clicked'+ text);
    let newTEXT=text.toLowerCase();
    setText(newTEXT);
    
  }
  const handleonChange=(event)=>{
    console.log('on change');
    setText(event.target.value)
    
  }
  const [text,setText]=useState("enter the text here");

 
  return (
    <>
    <div className='container'>
      <h1>{props.heading}</h1>
        <div class="mb-3">
         
          <textarea className="form-control" value={text} onChange={handleonChange} id="myBox" rows="8"></textarea>
        </div>
        <button className='btn  btn-primary mx-2' onClick={handleUpClick}>Convert to upperrcase</button>
        <button className='btn  btn-primary mx-2' onClick={handleloClick}>Convert to Lowercase</button>
    </div>
    <div className="container my-3">
      <h1>your text summary</h1>
      <p>{text.split(" ").length} word and {text.length} characters</p>
      <p>{0.008*text.split(" ").length} Minutes </p>
      <h2>Preview</h2>
      <p>{text}</p>


    </div>
    </>
    
  )
}
