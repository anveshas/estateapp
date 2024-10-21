import { useContext, useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import {useNotificationStore} from "../../lib/notificationStore"

function Navbar() {
  const [open, setOpen] = useState(false);
  const {currentUser} = useContext(AuthContext);

  const fetch = useNotificationStore((state) => state.fetch);
  const number = useNotificationStore((state) => state.number);

  const user = true;
  return (
    <nav>
      <div className="left">
        <a href="/" className="logo">
          <img src="/logo.png" alt="" />
          <span>RealEstate</span>
        </a>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/agents">Agents</Link>
      </div>
      <div className="right">
        {currentUser ? (
          <div className="user">
            <img
              // src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              src={currentUser?.avatar || "/noavatar.png"}
              alt=""
            />
            <span>John Doe</span>
            <Link to="/profile" className="profile">
              {number > 0 && <div className="notification">{number}</div>}
              <span>Profile</span>
            </Link>
          </div>
        ) : (
          <>
            <a href="/login">Sign in</a>
            <a href="/register" className="register">
              Sign up
            </a>
          </>
        )}
        <div className="menuIcon">
          <img
            src="/menu.png"
            alt=""
            onClick={() => setOpen((prev) => !prev)}
          />
        </div>
        <div className={open ? "menu active" : "menu"}>
        <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/agents">Agents</Link>
          <Link to="/login">Sign in</Link>
          <Link to="/register">Sign up</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;




// // import { useContext, useState } from "react";
// // import "./navbar.scss";
// // import { Link } from "react-router-dom";
// // import { AuthContext } from "../../context/AuthContext";

// // function Navbar() {
// //   const [open, setOpen] = useState(false);
// //   const { currentUser } = useContext(AuthContext);

// //   return (
// //     <nav>
// //       <div className="left">
// //         <a href="/" className="logo">
// //           <img src="/logo.png" alt="" />
// //           <span>RealEstate</span>
// //         </a>
// //         <a href="/">Home</a>
// //         <a href="/">About</a>
// //         <a href="/">Contact</a>
// //         <a href="/">Agents</a>
// //       </div>
// //       <div className="right">
// //         {currentUser ? (
// //           <div className="user">
// //             <img src={currentUser?.avatar || "noavatar.png"} alt="" />
// //             <span>{currentUser.name}</span>
// //             <Link to="/profile" className="profile">
// //               <div className="notification">3</div>
// //               <span>Profile</span>
// //             </Link>
// //           </div>
// //         ) : (
// //           <>
// //             <a href="/">Sign in</a>
// //             <a href="/" className="register">
// //               Sign up
// //             </a>
// //           </>
// //         )}
// //         <div className="menuIcon">
// //           <img
// //             src="/menu.png"
// //             alt=""
// //             onClick={() => setOpen((prev) => !prev)}
// //           />
// //         </div>
// //         <div className={open ? "menu active" : "menu"}>
// //           <a href="/">Home</a> 
// //           <a href="/">About</a>
// //           <a href="/">Contact</a>
// //           <a href="/">Agents</a>
// //           <a href="/">Sign in</a>
// //           <a href="/">Sign up</a>
// //         </div>
// //       </div>
// //     </nav>
// //   );
// // }

// // export default Navbar;
