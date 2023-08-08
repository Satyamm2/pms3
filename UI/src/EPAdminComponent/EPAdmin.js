import './EPAdmin.css';
import { useState , useEffect } from 'react';
import axios from 'axios';
import { apiurluser } from '../apiurls';

function EPAdmin() {

  const [ name , setName ] = useState();
  const [ email , setEmail ] = useState();
  const [ mobile , setMobile ] = useState();
  const [ address , setAddress ] = useState();
  const [ city , setCity ] = useState();
  const [ gender , setGender ] = useState();
  const [ output , setOutput ] = useState();
  const [ userDetails , setUserDetails ] = useState([]);

  useEffect(()=>{
   axios.get(apiurluser+"fetch?email="+localStorage.getItem("email")).then((response)=>{
    var data=response.data[0] 
    setOutput("Edit Details For Profile Changes....");
    setName(data.name);
    setEmail(data.email);
    setAddress(data.address);
    setCity(data.city);
    setMobile(data.mobile);
   }).catch((error)=>{
    console.log(error);
   });
  },[]);


  const handleSubmit=()=>{
    
    let updateDetails={"condition_obj":{"email":email},"content_obj":{"name":name,"mobile":mobile,"address":address,"city":city,"gender":gender}}; 
     axios.patch(apiurluser+"update",updateDetails).then((response)=>{
      setOutput("Profile Edited Successfully....");    
    });

  };

  return (
    <>
    {/* About Start */}
         <div class="container-fluid bg-secondary p-0">
          <div class="row g-0">
              <div class="col-lg-12 py-6 px-5">
<h1 class="display-5 mb-4">Edit Profile Here!!!</h1>
<font color="blue">{output}</font>
<form>
  <div class="form-group">
    <label for="name">Name:</label>
    <input type="text" class="form-control" value={name} onChange={e => setName(e.target.value)} />
  </div>    
  <br/>
  <div class="form-group">
    <label for="email">Email address:</label>
    <input readonly="true" type="email" class="form-control" value={email} onChange={e => setEmail(e.target.value)} />
  </div>
  <br/>
  <div class="form-group">
    <label for="mobile">Mobile:</label>
    <input type="text" class="form-control" value={mobile} onChange={e => setMobile(e.target.value)} />
  </div>
  <br/>
  <div class="form-group">
    <label for="address">Address:</label>
    <textarea class="form-control" value={address} onChange={e => setAddress(e.target.value)} ></textarea>
  </div>
  <br/>
  <div class="form-group">
    <label for="city">City:</label>
    <select class="form-control" value={city} onChange={e => setCity(e.target.value)} >
    <option>Select City</option>
    <option>Indore</option>
    <option>Bhopal</option>
    <option>Ujjain</option>
    </select>
  </div>
  <br/>
  <div class="form-group">
    <label for="gender">Gender:</label>
    Male <input checked type="radio"  name="gender" value="male"  onChange={e => setGender(e.target.value)} />
    &nbsp;&nbsp;
    Female <input type="radio"  name="gender" value="female" onChange={e => setGender(e.target.value)} />
  </div>
  <br/>
  <button type="button" onClick={handleSubmit} class="btn btn-success">Submit</button>
</form>


              </div>
          </div>
      </div>
      {/* About End */}
     </>		
  );
}

export default EPAdmin;
