// import { useState } from "react";
// import AuthService from "../../services/AuthService";

// const LoginPage = () => {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');

//     const handleLogin = async (e) => {
//         e.preventDefault();
//         try {
//             await AuthService.login(username, password);
//         } catch (error) {
//             console.error("Login failed, error");
//         }
//     };

//     return (
//         <div>
//             <form onSubmit={handleLogin}>
//                 <div>
//                     <label>Username</label>
//                     <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
//                 </div>
//                 <div>
//                     <label>Password</label>
//                     <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//                 </div>
//                 <button type="submit">Login</button>
//             </form>
//         </div>
//     )
// };
// export default LoginPage;


import { useState } from "react";
import AuthService from "../../services/AuthService";
import { Link } from "react-router-dom";

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await AuthService.login(username, password);
        } catch (error) {
            console.error("Login failed, error");
        }
    };

    return (
        <div>
          
        <nav class="navbar navbar-expand-lg  fixed-top">
    <div class="container">
    <Link to="/" class=" navbar-brand ">Apartment Facility</Link> 
      <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Apartment Facility</h5>
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li class="nav-item">
            <Link to="/" className="nav-link active" aria-current="page">Home</Link>
                </li>
                <li class="nav-item">
                <Link to="/signupdashboard" className="nav-link active" aria-current="page">SignIn</Link>
            </li>

          </ul>
        </div>
      </div>
    </div>
  </nav>
<section class="form d-flex justify-content-center align-items-center">
    <div class="container">
        <div class="row d-flex justify-content-center align-items-center"> 
            <div class="col-md-6"> 
                <form  onSubmit={handleLogin} class="p-4 d-flex flex-column  align-items-center"> 
                    <h5 class="mb-4">Welcome to Login page!</h5>
                    <input type="text" class="form-control mb-3" placeholder="Username" name="Username" required="required"value={username} onChange={(e) => setUsername(e.target.value)}/>
                    <input type="password" class="form-control mb-3" placeholder="Password" name="password" required="required"value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <input type="submit" class="btn btn-dark mb-3"  value="Login"/>
                </form>
            </div>
        </div>
    </div>
</section>
    </div>
    )
};
export default LoginPage;