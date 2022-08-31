import React from "react";
import { useState } from "react";

const Homec4 = () => {
    const [count, setCount] = useState(false);
    const [count1, setCount1] = useState(false);
    const [count2, setCount2] = useState(false);
    const [count3, setCount3] = useState(false);
    const stylei = {
        transform:"rotate(90deg)",
        transition:"all 0.5s ease-in-out"
    }
    const stylep = {
        transform:"rotate(360deg)",
        transition:"all 1s ease-in-out"
    }
    return (
        <>
            <div className="home-c4">
                <div className="home-c4left">
                    <div className="topc4">
                        <h1>Manage social media in one place</h1>
                    </div>
                    <div className="home-c4leftcontent" style={stylep}>
                        <h3 style={count? {color:"red"}:{color:"#004963"}} onClick={() => { setCount(!count) ; setCount1(false);setCount2(false) ; setCount3(false)  }} ><i style={count? stylei : {transform:"rotate(360deg)"}} className="fa-solid fa-arrow-right"></i> Light up your profiles</h3>

                        {count?                        <div className="kdhwknwkjnv">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Donec euismod, nisi vel consectetur interdum, nisl nisi
                            </p>
                        </div>:null}

                        <h3 style={count1? {color:"red"}:{color:"#004963"}} onClick={() => { setCount1(!count1) ; setCount(false);setCount2(false) ; setCount3(false) }}   ><i style={count1? stylei : {transform:"rotate(360deg)"}} className="fa-solid fa-arrow-right"></i> Plan your content with ease</h3>
                        {count1?                        <div className="kdhwknwkjnv">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Donec euismod, nisi vel consectetur interdum, nisl nisi
                            </p>
                        </div>:null}
                        <h3 style={count2? {color:"red"}:{color:"#004963"}} onClick={() => { setCount2(!count2) ; setCount1(false);setCount(false) ; setCount3(false) }}><i style={count2? stylei : {transform:"rotate(360deg)"}} className="fa-solid fa-arrow-right"></i> Stay on top of trends</h3>
                        {count2?                        <div className="kdhwknwkjnv">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Donec euismod, nisi vel consectetur interdum, nisl nisi
                            </p>
                        </div>:null}
                        <h3 style={count3? {color:"red"}:{color:"#004963"}} onClick={() => { setCount3(!count3) ; setCount1(false);setCount2(false) ; setCount(false) }}><i style={count3? stylei : {transform:"rotate(360deg)"}} className="fa-solid fa-arrow-right"></i> Post on time, every time</h3>
                        {count3?                        <div className="kdhwknwkjnv" style={stylep}>
                            <p >
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Donec euismod, nisi vel consectetur interdum, nisl nisi
                            </p>
                        </div>:null}
                    </div>
                    <button>Explore All The features</button>
                    {/* <p>Schedule and publish content to all of your social profiles, track effectiveness in real time, and crank the volume on your top-performing content.</p> */}
                </div>
                <div className="home-c4right">
                    <img src="https://images.ctfassets.net/ta4ffdi8h2om/5M5Q8wYFcmbfm0j72HwQJg/7b4cd39aaac4085cdc3cd5ca68a1577f/web-product-composer.png" alt="" />
                </div>
            </div>
        </>
    )
}

export default Homec4;