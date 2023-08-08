import './nav.css';
import { Link , useLocation } from 'react-router-dom';
import { useState , useEffect } from 'react';


// Function to generate the Navbar based on the user role
function generateNavbar(role) {
    if(role === 'admin') {
        return(
            <nav class="navbar navbar-expand-lg bg-white navbar-light shadow-sm px-5 py-3 py-lg-0">
        <a href="index.html" class="navbar-brand p-0">
            <h1 class="m-0 text-uppercase text-primary"><i class="far fa-smile text-primary me-2"></i>PMS</h1>
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
            <div class="navbar-nav ms-auto py-0 me-n3">
                <a class="nav-item nav-link active"><Link to="/admin">Admin Home</Link></a>
                <a class="nav-item nav-link"><Link to="/manageusers">Manage Users</Link></a>
                <a class="nav-item nav-link"><Link to="/cpadmin">Change Password</Link></a>
                <a class="nav-item nav-link"><Link to="/epadmin">Edit Profile</Link></a>
                {/* <a class="nav-item nav-link"><Link to="/addproject">Add Project</Link></a>
                <a class="nav-item nav-link"><Link to="/addgroup">Add Group</Link></a>
                <a class="nav-item nav-link"><Link to="/assignproject">Assign Project</Link></a> */}
                <div class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" style={{"color":"#047b93","cursor":"pointer"}} >Manage</a>
                    <div class="dropdown-menu m-0">
                        <a class="dropdwn-item"><Link to="/addproject">Add Project</Link></a><br/>
                        <a class="dropdwn-item"><Link to="/addgroup">Add Group</Link></a><br/>
                        <a class="dropdwn-item"><Link to="/assignproject">Assign Project</Link></a>
                    </div>
                </div>
                <a class="nav-item nav-link"><Link to="/logout">logout</Link></a>
            </div>
        </div>
    </nav>        
        );
    } else if (role === 'user'){
        return(
            <nav class="navbar navbar-expand-lg bg-white navbar-light shadow-sm px-5 py-3 py-lg-0">
        <a href="index.html" class="navbar-brand p-0">
            <h1 class="m-0 text-uppercase text-primary"><i class="far fa-smile text-primary me-2"></i>PMS</h1>
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
            <div class="navbar-nav ms-auto py-0 me-n3">
                <a class="nav-item nav-link active"><Link to="/user">User Home</Link></a>
                <a class="nav-item nav-link"><Link to="/plist">Project List</Link></a>
                <a class="nav-item nav-link"><Link to="/glist">Group List</Link></a>
                <a class="nav-item nav-link"><Link to="/logout">logout</Link></a>
            </div>
        </div>
    </nav>
        );        
    } else {
        return(
            <nav class="navbar navbar-expand-lg bg-white navbar-light shadow-sm px-5 py-3 py-lg-0">
        <a href="index.html" class="navbar-brand p-0">
            <h1 class="m-0 text-uppercase text-primary"><i class="far fa-smile text-primary me-2"></i>PMS</h1>
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
            <div class="navbar-nav ms-auto py-0 me-n3">
                <a class="nav-item nav-link active"><Link to="/">Home</Link></a>
                <a class="nav-item nav-link"><Link to="/about">About</Link></a>
                <a class="nav-item nav-link"><Link to="/contact">Contact</Link></a>
                <a class="nav-item nav-link"><Link to="/service">Service</Link></a>
                <div class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" style={{"color":"#047b93"}} >Pages</a>
                    <div class="dropdown-menu m-0">
                        <a class="dropdown-item">Blog Grid</a>
                        <a class="dropdown-item">Blog Detail</a>
                        <a class="dropdown-item">The Team</a>
                        <a class="dropdown-item">Testimonial</a>
                    </div>
                </div>
                <a class="nav-item nav-link"><Link to="/register">Register</Link></a>
                <a class="nav-item nav-link"><Link to="/login">login</Link></a>
            </div>
        </div>
    </nav>
        );
    }
}


function Nav() {

  const [NavContent , setNavContent] = useState(null);
  const Location = useLocation();

  useEffect(()=>{
    // Fetch token and role from localStorage
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role');

    // Generate the Navbar based on the user role
    if(token !=undefined && role === 'admin') {
        setNavContent(generateNavbar('admin'));
    } else if (token !=undefined && role === 'user') {
        setNavContent(generateNavbar('user'));
    } else {
        setNavContent(generateNavbar());
    }
}, [Location]);


  return (
    <>
      {NavContent}
    </>
  );
}

export default Nav;



