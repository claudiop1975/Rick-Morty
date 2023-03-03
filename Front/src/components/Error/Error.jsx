import React from 'react';
import { useNavigate } from "react-router-dom";
import "./Error.css"
<Error className="css"></Error>
export default function Error(props) {
const navigate = useNavigate();

   return (
      <div className="err">
       <div className='errin'>
         <iframe title="Error" src="https://giphy.com/embed/CMBJumYBS30viPWE74" class="giphy-embed" allowFullScreen>         </iframe>
       </div>
       <button Style= "width: 120px; height: 50px; font-Size: 20px" onClick={()=>navigate(-1)}>Back</button>
      </div>
   );
}