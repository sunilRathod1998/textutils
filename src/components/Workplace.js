import React, { useState } from 'react'


export default function Workplace(props) {
   
  const [text, setText] = useState('');
    let handleChange = (event)=> {
        setText(event.target.value);

    }
    const handleExtraSpace = ()=>{
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert('Extra space been removed','success')

    }
    const handleCopy = ()=>{
      console.log('i am copy')
      var text = document.getElementById('myBox');
      text.select();
      text.setSelectionRange(0,9999);
      navigator.clipboard.writeText(text.value)
      props.showAlert('Text Copied on Clipboard','success')
    }
    const handleUpClick = ()=>{
        console.log('upprecase been clicked');
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('Converted to Uppercase','success')
    }
    const handleLoClick = ()=>{
        console.log('upprecase been clicked');
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('Converted to Lowercase','success')
    }
    const Clear = ()=>{
        let newText = "";
        setText(newText);
        props.showAlert('Text has been cleared','success')
    }
    

  return (
    <>

    <div className='container'>
    <h2>Welcome to TextUtils</h2>
  <div className="my-3 mb-3">
    <label htmlFor="exampleFormControlTextarea1" className="form-label">Enter your text here</label>
    <textarea className="form-control" id='myBox' value={text} onChange={handleChange} style={{background:props.mode==="light"?'#cecece':'#3c435d',color:props.mode==="light"?'black':'white'}} rows="10"></textarea>
    <button type="button" onClick={handleUpClick} className="btn btn-primary my-3 mx-3">UpperCase</button>
    <button type="button" onClick={handleLoClick} className="btn btn-primary my-3 mx-3">LowerCase</button>
    <button type="button" onClick={Clear} className="btn btn-primary my-3 mx-3">Clear Text</button>
    <button type="button" onClick={handleCopy} className="btn btn-primary my-3 mx-3">Copy Text</button>
    <button type="button" onClick={handleExtraSpace} className="btn btn-primary my-3 mx-3">Remove Extra Space</button>
  </div>
  </div>
  <div className="container">
    <h3>preview</h3>
    <p>{text}</p>
    <p>Total Charactors are : {text.length}</p>
    <p>total words are : {text.split(" ").length}</p>
  </div>
  </>
  )
}
