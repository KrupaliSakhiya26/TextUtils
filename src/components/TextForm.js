import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick =()=>{
        console.log("Uppercase was clicked" + text);
        let newtext = text.toUpperCase();
        setText(newtext)
        props.showAlert("Converted to upercase", "success");
    }
    const handleLoClick =()=>{
        console.log("lowercase was clicked" + text);
        let newtext = text.toLowerCase();
        setText(newtext)
        props.showAlert("Converted to lowercase", "success");
    }
    const handleclearClick =()=>{        
        let newtext = '';
        setText(newtext)
        props.showAlert("Converted to cleartext", "success");
    }
    const speak =()=>{
        let msg= new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
        props.showAlert("Converted to word speak", "success");
    }
    const handlestopclick =()=>{
        window.speechSynthesis.cancel();
    }
    const handleinvrseclick =()=>{
        console.log("inverse click is triggered");
        let newtext ="";
        for(let i=text.length-1;i>=0;i--){
            newtext +=text[i];
        }
        setText(newtext);
    }
    const handlereversedclick =()=>{
       console.log("Text is Reversed");
       let newtext ="";
       for(let char of text){
            newtext =char +newtext;
       }
       setText(newtext);
    }
    const handleUniqueclick =()=>
    {
        let set = new Set(text.split(''));
        setText(text +'\n No. of Unique Words :' +set.size);
    }
    const handleOnChange =(event)=>
    {
        console.log("on changed ");
        setText(event.target.value);
    }
    const handleMouseclick =()=>{
        let newtext = " Hello Word";
        setText(newtext)
    }
    const handleCopy =()=>{
        var text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!", "success");
        
    }

    const[text,setText]=useState('');

   // text="new text";//worning way to create the state
   // setText("new text");//coreect way to create the state
  return (
    <>
     <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3" > 
        
        <textarea className="form-control"  value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
        </div>
        <button  disabled={text.length===0} className="btn btn-dark mx-2" onClick={handleUpClick}>Convert into UpperCase</button>
        <button  disabled={text.length===0} className="btn btn-dark mx-2" onClick={handleLoClick}>Convert into LowerCase</button>
        <button  disabled={text.length===0} className="btn btn-dark mx-2" onClick={handleclearClick}>Clear Text</button>
        <button  disabled={text.length===0} className="btn btn-dark mx-2" onClick={speak}>Speak</button>
        <button  disabled={text.length===0} className="btn btn-dark mx-2" onClick={handlestopclick}>Stop Listening</button>
        <button  disabled={text.length===0} className="btn btn-dark mx-2" onClick={handleinvrseclick}>Inverse</button>
        <button  disabled={text.length===0} className="btn btn-dark mx-2 my-3" onClick={handlereversedclick}>Reversed</button>
        <button  disabled={text.length===0} className="btn btn-dark mx-2 my-3" onClick={handleUniqueclick}>Unique</button>
        <button  disabled={text.length===0} className="btn btn-dark mx-2 my-3" onClick={handleMouseclick}>Mouseclick</button>
        <button  disabled={text.length===0} className="btn btn-dark mx-2 my-3" onClick={ handleCopy}>Copy Text</button>
        <button  disabled={text.length===0}className="btn btn-dark mx-2 my-3" onClick={ handleExtraSpaces}> Remove Extra Spaces</button>
    </div>
    <div className='container my-3' style={{color: props.mode==='dark'?'white':'black'}}>
    <h2>Your text summary</h2>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008 *  text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Nothing to preview!"}</p>
        <h3>MouseClick</h3>
        <p> {text.split(" ")}</p>
    </div>
    </>
   
    
  )
}
