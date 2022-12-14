import React, {useState} from 'react'

export default function About() {
    const  [myStyle, setMyStyle] = useState({
        color: 'black',
        backgroundColor: 'white'

    })
    const [btntext, setBtnText] = useState("Enable Dark Mode")
    const toggleStyle = () => {
        if(myStyle.color === 'white'){
            setMyStyle({
                color: 'black',
                backgroundColor: 'white'
            })
            setBtnText("Enable Dark Mode")
        }
        else {
            setMyStyle({
                color: 'white',
                backgroundColor: 'black'
            })
            setBtnText("Enable Light Mode")
        }
    }

  return (
    <div className="container" style={myStyle}>
        <p className="text-3xl">About Us</p>
    <div className="accordion accordion-flush" style={myStyle} id="accordionFlushExample">
  <div className="accordion-item border-t-0 border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
    <h2 className="accordion-header mb-0" id="flush-headingOne">
      <button className="accordion-button
    relative
    flex
    items-center
    w-full
    py-4
    px-5
    text-base text-gray-800 text-left
    bg-white
    border-0
    rounded-none
    transition
    focus:outline-none" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne"
        aria-expanded="false" aria-controls="flush-collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="flush-collapseOne" className="accordion-collapse border-0 collapse show" style={myStyle}
      aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body py-4 px-5">Placeholder content for this accordion, which is intended to
        demonstrate
        the <code>.accordion-flush</code> className. This is the first item's accordion body.</div>
    </div>
  </div>
  <div className="accordion-item border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
    <h2 className="accordion-header mb-0" id="flush-headingTwo">
      <button className="accordion-button
    collapsed
    relative
    flex
    items-center
    w-full
    py-4
    px-5
    text-base text-gray-800 text-left
    bg-white
    border-0
    rounded-none
    transition
    focus:outline-none" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo"
        aria-expanded="false" aria-controls="flush-collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="flush-collapseTwo" className="accordion-collapse border-0 collapse" style={myStyle} aria-labelledby="flush-headingTwo"
      data-bs-parent="#accordionFlushExample">
      <div className="accordion-body py-4 px-5">Placeholder content for this accordion, which is intended to
        demonstrate
        the <code>.accordion-flush</code> className. This is the second item's accordion body. Let's imagine this
        being
        filled with some actual content.</div>
    </div>
  </div>
  <div className="accordion-item border-l-0 border-r-0 border-b-0 rounded-none bg-white border border-gray-200">
    <h2 className="accordion-header mb-0" id="flush-headingThree">
      <button className="accordion-button
    collapsed
    relative
    flex
    items-center
    w-full
    py-4
    px-5
    text-base text-gray-800 text-left
    bg-white
    border-0
    rounded-none
    transition
    focus:outline-none" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree"
        aria-expanded="false" aria-controls="flush-collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="flush-collapseThree" className="accordion-collapse collapse" style={myStyle} aria-labelledby="flush-headingThree"
      data-bs-parent="#accordionFlushExample">
      <div className="accordion-body py-4 px-5">Placeholder content for this accordion, which is intended to
        demonstrate
        the <code>.accordion-flush</code> className. This is the third item's accordion body. Nothing more exciting
        happening here in terms of content, but just filling up the space to make it look, at least at first
        glance,
        a bit more representative of how this would look in a real-world application.</div>
    </div>
  </div>
</div>
<div className="container my-3">

<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={toggleStyle}>
  {btntext}
</button>
</div>
</div>
  )
}
