import React from "react";
import Navbar from "../Navbar";
import Home1 from "./Homec1";
import Home2 from "./Homec2";
import Homec3 from "./Homec3";
import Homec4 from "./Homec4";
import Homec5 from "./Homec5";
import Homec6 from "./Homec6";
import Footer from "../Footer";

const App = () => {
    return (
        <>
           <div className="mainhome">
           <Navbar />
            <Home1 />
            <Home2 />
            <Homec3 />
            <Homec4 />
            <Homec5 />
            <Homec6 />
            <Footer />
           </div>
        </>
    );
}

export default App;