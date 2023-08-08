import { useState, useEffect } from "react";
import axios from "axios";
import { apiurlgroup } from "../apiurls";
import { apiurlproject } from "../apiurls";
import { apiurlassignproject } from "../apiurls";

function AssignProject() {

  const [ptitle, setptitle] = useState();
  const [gname, setgname] = useState();
  const [startDate, setstartDate] = useState();
  const [endDate, setendDate] = useState();
  const [output, setOutput] = useState();
  const [groupDetails, setgroupDetails] = useState([]);
  const [projectDetails, setprojectDetails] = useState([]);

  useEffect(() => {
    axios
      .get(apiurlgroup + "fetch")
      .then((response) => {
        setgroupDetails(response.data);
      })
      .catch((error) => {
        console.log(error);
      },[]);

    axios
      .get(apiurlproject + "fetch")
      .then((response) => {
        setprojectDetails(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleSubmit = () => {
    const assignDetails = {
      gname: gname,
      ptitle: ptitle,
      startDate: startDate,
      endDate: endDate,
    };

    axios
      .post(apiurlassignproject + "save", assignDetails)
      .then((response) => {
        console.log(response);
        setOutput("Project Assigned successfully...");
        setgname(" ");
        setptitle(" ");
        setstartDate(" ");
        setendDate(" ");
      })
      .catch((error) => {
        setOutput("Something went Wrong....");
        console.log(error);
        setgname(" ");
        setptitle(" ");
        setstartDate(" ");
        setendDate(" ");
      });
  };


    return (
        <>
            <div class="container-fluid bg-secondary p-0">
                <div class="row g-0">
                    <div class="col-lg-12 py-6 px-5">
                        <h1 class="display-5 mb-4">Assign Project Here!!</h1>

                        <form>
            <font color="blue">{output}</font>
            <div class="row g-3">
              <div class="col-12 col-sm-6">
                <select
                  className="form-control border-0"
                  value={ptitle}
                  onChange={e => setptitle(e.target.value)}
                >  
                <option value="">------Select Project-------</option>
                  {projectDetails.map((key) => (
                    <option>{key.ptitle}</option>
                  ))}
                </select>
              </div>
              <div class="col-12 col-sm-6">
                <select
                  className="form-control border-0"
                  value={gname}
                  onChange={e => setgname(e.target.value)}
                >
                  <option value="">------Select Group-------</option>
                  {groupDetails.map((key) => (
                    <option>{key.gname}</option>
                  ))}
                </select>
              </div>

              <div className="col-12 col-sm-6">     
                <>Start Date</>
                <input
                  type="date"
                  className="form-control border-0"
                  value={startDate}
                  onChange={(e) => setstartDate(e.target.value)}
                  style={{ height: "55px" }}
                />
              </div>

              <div className="col-12 col-sm-6">
                <>End Date</>
                <input
                  type="date"
                  className="form-control border-0"
                  value={endDate}
                  onChange={(e) => setendDate(e.target.value)}
                  style={{ height: "55px" }}
                />
              </div>
              <div class="col-12">
                <button
                  class="btn btn-primary w-100 py-3"
                  onClick={handleSubmit}
                  type="Button"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>

                    </div>
                </div>
            </div>
        </>
    );
}

export default AssignProject;

// import { useState, useEffect } from "react";
// import axios from "axios";
// import { apiurlgroup } from "../apiurls";
// import { apiurlproject } from "../apiurls";
// import { apiurlassignproject } from "../apiurls";

// function Assignproject() {
//   const [ptitle, setptitle] = useState();
//   const [gname, setgname] = useState();
//   const [startDate, setstartDate] = useState();
//   const [endDate, setendDate] = useState();
//   const [output, setOutput] = useState();
//   const [groupDetails, setgroupDetails] = useState([]);
//   const [projectDetails, setprojectDetails] = useState([]);

//   useEffect(() => {
//     axios
//       .get(apiurlgroup + "fetch")
//       .then((response) => {
//         setgroupDetails(response.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       },[]);

//     axios
//       .get(apiurlproject + "fetch")
//       .then((response) => {
//         setprojectDetails(response.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, []);

//   const handleSubmit = () => {
//     const assignDetails = {
//       gname: gname,
//       ptitle: ptitle,
//       startDate: startDate,
//       endDate: endDate,
//     };

//     axios
//       .post(apiurlassignproject + "save", assignDetails)
//       .then((response) => {
//         console.log(response);
//         setOutput("Project Assigned successfully...");
//         setgname(" ");
//         setptitle(" ");
//         setstartDate(" ");
//         setendDate(" ");
//       })
//       .catch((error) => {
//         setOutput("Something went Wrong....");
//         console.log(error);
//         setgname(" ");
//         setptitle(" ");
//         setstartDate(" ");
//         setendDate(" ");
//       });
//   };
//   return (
//     <>
//       <div class="container-fluid bg-secondary p-0">
//         <div class="row g-0">
//           <div class="col-lg-12 py-6 px-5" style={{ background: "white" }}>
//             <h1 class="display-5 mb-4">Assign Project To Group Here!!!</h1>
//           </div>
//         </div>
//       </div>
//       <div class="col-lg-7">
//         <div class="bg-light text-center p-5 wow fadeIn" data-wow-delay="0.5s">
//           <form>
//             <font color="blue">{output}</font>
//             <div class="row g-3">
//               <div class="col-12 col-sm-6">
//                 <select
//                   className="form-control border-0"
//                   value={ptitle}
//                   onChange={e => setptitle(e.target.value)}
//                 >  
//                 <option value="">------Select Project-------</option>
//                   {projectDetails.map((key) => (
//                     <option>{key.ptitle}</option>
//                   ))}
//                 </select>
//               </div>
//               <div class="col-12 col-sm-6">
//                 <select
//                   className="form-control border-0"
//                   value={gname}
//                   onChange={e => setgname(e.target.value)}
//                 >
//                   <option value="">------Select Group-------</option>
//                   {groupDetails.map((key) => (
//                     <option>{key.gname}</option>
//                   ))}
//                 </select>
//               </div>

//               <div className="col-12 col-sm-6">     
//                 <>Start Date</>
//                 <input
//                   type="date"
//                   className="form-control border-0"
//                   value={startDate}
//                   onChange={(e) => setstartDate(e.target.value)}
//                   style={{ height: "55px" }}
//                 />
//               </div>

//               <div className="col-12 col-sm-6">
//                 <>End Date</>
//                 <input
//                   type="date"
//                   className="form-control border-0"
//                   value={endDate}
//                   onChange={(e) => setendDate(e.target.value)}
//                   style={{ height: "55px" }}
//                 />
//               </div>
//               <div class="col-12">
//                 <button
//                   class="btn btn-primary w-100 py-3"
//                   onClick={handleSubmit}
//                   type="Button"
//                 >
//                   Submit
//                 </button>
//               </div>
//             </div>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Assignproject;