import React, {useState} from 'react'



export default function Textform(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handleClearClick = ()=>{
        let newText = '';
        setText(newText)
    }
    // const handleSentClick = ()=>{
    //         var sent = document.getElementById("myBox");

    //         let sent =  text.charAt(0).toUpperCase( )+ text.slice(1).toLowerCase();
    //         var words = text.split(' ').map(sent);
    //         var capitalizedsentence = words.join(' ');
    //         console.log(capitalizedsentence);
            
    //     }

    const handleOnChange = (event)=>{
        console.log("handle on change");
        setText(event.target.value);
    }
    const handleCopy = () => {
        console.log("I am Copy");
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    const [text, setText] = useState('');
    // text = "new text";   // wrong text syntax 
    // setText("new text");   // correct text syntax 
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1  className="font-bold text-3xl mx-3 my-3 ">{props.heading}</h1>
      <textarea value = {text} onChange={handleOnChange} id="myBox" rows="8" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" style={{backkgroundColor: props.mode==='dark'?'grey':'white'}} placeholder="Leave a comment..."></textarea>
      <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded m-3" onClick={handleUpClick}>
      convert to Upper Case
      </button>
      <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded m-3" onClick={handleLoClick}>
      convert to Lower Case
      </button>
      <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded m-3" onClick={handleClearClick}>
      Clear Text
      </button>
      {/* <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded m-3" onClick={handleSentClick}>
      Sentence case
      </button> */}
      <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded m-3" onClick={handleCopy}>
      Copy Text
      </button>
    </div>
    <div className="container my-2">
        <h1 className="text-3xl my-3">Your text summary</h1>
        <p className="my-3">{text.split(" ").length} words, {text.length} characters
        </p>
        <p className="my-3">{0.008 * text.split(" ").length} Minutes read
        </p>
        <p className="text-3xl">Preview</p>
        <p>{text}</p>
    </div>

    </>
    )
}
  

