import React from "react";
var date  = new Date();
var yr = date.getFullYear();

function Footer(){
    return <footer>
        <p>Copyright {yr}</p>
    </footer>;
}

export default Footer;