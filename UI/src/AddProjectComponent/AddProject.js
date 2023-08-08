import './AddProject.css';
import { useState , useEffect } from 'react';
import axios from 'axios';
import { apiurlproject } from '../apiurls';
import { useNavigate } from 'react-router-dom';

function AddProject() {

  const [ ptitle , setProjectTitle ] = useState();
  const [ pstream , setProjectStream ] = useState();
  const [ pdescription , setProjectDescription ] = useState();
  const [ output , setOutput ] = useState();
  const [ file , setFile ] = useState();

  //view and manage project start
  const [ projectDetails , setProjectDetails ] = useState([]);
  const navigate = useNavigate();

  useEffect(()=>{
    axios.get(apiurlproject+"fetch").then((response)=>{
      setProjectDetails(response.data);
    }).catch((error)=>{
      console.log(error);
    });
  });

  const manageProjectStatus=(_id)=>{
    let deleteDetails={"data":{"_id":_id}};
    axios.delete(apiurlproject+"delete",deleteDetails).then((response)=>{
      navigate("/addproject");
    });
  }
  //view and manage project end

  const handleChange=(event)=>{
    setFile(event.target.files[0])
  }

  const handleSubmit=(event)=>{
    event.preventDefault();
    var formData = new FormData();
    formData.append('ptitle', ptitle);
    formData.append('pstream', pstream);
    formData.append('pdescription', pdescription);
    formData.append('file', file);

    const config = {
      'content-type': 'multipart/form-data'
    };

    axios.post(apiurlproject+"save", formData, config).then((response) => {
      setProjectTitle("");
      setProjectStream("");
      setProjectDescription("");
      setOutput("Project Added Successfully....");
    });  

  };

  return (
    <>
    {/* About Start */}
         <div class="container-fluid bg-secondary p-0">
          <div class="row g-0">
              <div class="col-lg-12 py-6 px-5">
<h1 class="display-5 mb-4">Add Project Here!!!</h1>
<font color="blue">{output}</font>
<form>
  <div class="form-group">
    <label for="ptitle">Project Title:</label>
    <input type="text" class="form-control" value={ptitle} onChange={e => setProjectTitle(e.target.value)} />
  </div>    
  <br/>
  <div class="form-group">
    <label for="pstream">Project Stream:</label>
    <select class="form-control" value={pstream} onChange={e => setProjectStream(e.target.value)} >
    <option>Select Stream</option>
    <option>MEAN Stack</option>
    <option>MERN Stack</option>
    <option>PHP</option>
    <option>JAVA</option>
    </select>
  </div>
  <br/>
  <div class="form-group">
    <label for="pdescription">Project Description:</label>
    <textarea class="form-control" value={pdescription} onChange={e => setProjectDescription(e.target.value)} ></textarea>
  </div>
  <br/>
  <div class="form-group">
    <label for="pdoc">Project Requirement Document:</label>
    <input type="file" class="form-control" onChange={handleChange} />
  </div>
  <br/>
  <button type="button" onClick={handleSubmit} class="btn btn-success">Submit</button>
</form>
<br/>
<br/>




<h1 class="display-5 mb-4">View & Manage Project Details Here!!!</h1>

<table class="table table-bordered">
  <tr>
    <th>#</th>
    <th>Project Title</th>
    <th>Project Stream</th>
    <th>Project Description</th>
    <th>Project Requirement Doc</th>
    {/* <th>Info</th> */}
    <th>Action</th>
  </tr>

  {
    projectDetails.map((row)=>(
      <tr>
        <td>{row._id}</td>
        <td>{row.ptitle}</td>
        <td>{row.pstream}</td>
        <td>{row.pdescription}</td>
        <td>{row.pdocname}</td>
        {/* <td style={{"width":"15%"}}>{row.info}</td> */}

        <a onClick={()=>{manageProjectStatus(row._id,"delete")}}>
          <img style={{float: 'right'}} src="./assets/img/delete.png" height="40" width="40" />
        </a>
        <td>

        </td>
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

export default AddProject;
