import './AddGroup.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { apiurlgroup } from '../apiurls';

function AddGroup() {

  const [ gname , setGroupName ] = useState();
  const [ output, setOutput ] = useState();

  const handleSubmit =(event)=>{
    event.preventDefault();
    var formData = new FormData();
    formData.append('gname', gname);


    const config = {
      'content-type': 'multipart/form-data'
    }

    
    axios.post(apiurlgroup+"save", formData, config).then((response)=>{
      setGroupName("");
      setOutput("Group Added Successfully....");
    });

  };


  return (
    <>
    {/* About Start */}
         <div class="container-fluid bg-secondary p-0">
          <div class="row g-0">
              <div class="col-lg-12 py-6 px-5">
<h1 class="display-5 mb-4">Add Group Here!!!</h1>

<font color="blue">{output}</font>

<form>
  <div class="form-group">
    <label for="gname">Group Name:</label>
    <select class="form-control" value={gname} onChange={e => setGroupName(e.target.value)}>
      <option>Select Group</option>
      <option>G1</option>
      <option>G2</option>
      <option>G3</option>
      <option>G4</option>
      <option>G5</option>
    </select>
    <br/>
    <button type="button" onClick={handleSubmit} class="btn btn-success">Submit</button>
  </div>
</form>

              </div>
          </div>
      </div>
      {/* About End */}
     </>		
  );
}

export default AddGroup;
