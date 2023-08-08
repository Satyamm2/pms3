import './GroupList.css';
import { useState , useEffect } from 'react';
import axios from 'axios';
import { apiurlgroup } from '../apiurls';
import { Link } from 'react-router-dom';

function GroupList() 
{

  const [ gDetails , setGroupDetails ] = useState([]);
  
  useEffect(()=>{
   axios.get(apiurlgroup+"fetch").then((response)=>{
    setGroupDetails(response.data);
   }).catch((error)=>{
    console.log(error);
   });
  });

  return (
    <>
    {/* About Start */}
         <div class="container-fluid bg-secondary p-0">
          <div class="row g-0">
              <div class="col-lg-12 py-6 px-5">
<h1 class="display-5 mb-4">View Group List Here!!!</h1>

<table class="table table-bordered">
<tr>
<th>#</th>
<th>Group Name</th>
</tr>  

{
  gDetails.map((row)=>(
    <tr>
    <td>{row._id}</td>
    <td>{row.gname}</td>
    {/*<td><Link to={"assets/uploads/project_requirement_docs/"+(row.pdocname)} >Download Doc</Link></td>*/}
    </tr>
  ))
}

</table>

              </div>
          </div>
      </div>
      {/* About End */}
     </>		
  );
}

export default GroupList;
