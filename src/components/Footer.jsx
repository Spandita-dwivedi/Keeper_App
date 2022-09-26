import React from "react"


const date = new Date;
const yearOfDate = date.getFullYear();

function Footer(){
   return <footer><p>Copyright © {yearOfDate}  </p></footer>
    
 
}

export default Footer;