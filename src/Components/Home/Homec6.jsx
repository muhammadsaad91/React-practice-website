import React from "react";
import img1 from "./img1.png";
import { useState } from "react";
const App = () => {
  const [count, setCount] = useState(false);
  const [count1, setCount1] = useState(false);
  const [count2, setCount2] = useState(false);
  const styleh3 = {
    position: "relative",
    left: "2rem",
  };
  
  return (
    <>
      <div className="homec6">
        <div className="homec6left">
          <img src={img1} alt="img1" />
        </div>
        <div className="homec6right">
          <h1> Still not sure where to start ? </h1>
          <div className="desktop">


            <div className="right1div">
              <div className="right1inner">
                <div className="inner1ri">
                  <h1>1</h1>
                </div>
                <div className="asdffdssssa">
                  <h3>Choose the right plan</h3>
                  <p>Whether you’re a solo superstar or a global team of hundreds, our plans are designed to adapt to the needs of you and your business.</p>
                </div>
              </div>
              <div className="right1inner">
                <div className="inner1ri">
                  <h1>2</h1>
                </div>
                <div className="asdffdssssa">
                  <h3>Start your free trial</h3>
                  <p>Whether you’re a solo superstar or a global team of hundreds, our plans are designed to adapt to the needs of you and your business.</p>
                </div>
              </div>
              <div className="right1inner">
                <div className="inner1ri">
                  <h1>3</h1>
                </div>
                <div className="asdffdssssa">
                  <h3>Attend free classes for beginners</h3>
                  <p>Whether you’re a solo superstar or a global team of hundreds, our plans are designed to adapt to the needs of you and your business.</p>
                </div>
              </div>
            </div>

          </div>


          <div className="mobile">

            <div className="c6under">
              <div className="divflex">
                <div className="div" style={count? {backgroundColor:"#001b07"}:{backgroundColor:"#004963"}} onClick={() => { setCount(true); setCount1(false); setCount2(true) }}><h2 style={count ? styleh3 : null }>1</h2><div className="red" style={count ? {display:"inline"} : {display:"none"}}></div></div>
                <div className="div" style={count1? {backgroundColor:"#001b07"}:{backgroundColor:"#004963"}} onClick={() => { setCount1(true); setCount(false); setCount2(true) }}><h2 style={count1 ? styleh3 : null }>2</h2><div className="red" style={count1 ? {display:"inline"} : {display:"none"}}></div></div>
                <div className="div" style={count2? {backgroundColor:"#004963"}:{backgroundColor:"#001b07"}} onClick={() => { setCount2(false); setCount1(false); setCount(false) }}><h2 style={!count2 ? styleh3 : null }>3</h2><div className="red" style={count2 ? {display:"none"}:{display:"inline"}}></div></div>
              </div>
              <div className="c6para">
                {count ?
                  <div>
                    <h2>Choose the right plan</h2>
                    <p>Whether you’re a solo superstar or a global team of hundreds, our plans are designed to adapt to the needs of you and your business.</p>
                  </div>
                  : null}
                {count1 ?
                  <div>
                    <h2>Start your free trial</h2>
                    <p>Learning new software takes time. Spend 30 days testing and getting comfortable with Hootsuite, completely free.</p>
                  </div>
                  : null}
                {!count2 ?
                  <div>          <h2>Attend free classes for beginners</h2>
                    <p>Get access to classes with Hootsuite experts who will show you the ropes and answer all your social media management questions (even the ones your boss is too shy to ask).</p>
                  </div>
                  : null}
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
export default App;
