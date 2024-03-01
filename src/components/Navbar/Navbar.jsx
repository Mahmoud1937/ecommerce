import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Logo from "../../assets/images/freshcart-logo.svg";
import { userContext } from "../../Context/UserContext";
import { Badge } from "react-bootstrap";
import { getCart, useGetCart } from "../useCart.js";
export default function Navbar() {
  let { data} = useGetCart('getCart',getCart)
  let navigate = useNavigate()
  let { userToken,setUserToken,setIsOpen } = useContext(userContext);
  function logout(){
    localStorage.removeItem('userToken')

    setUserToken(null)

    navigate('/login')

  }

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light text-light">
        <div className="container">
          <Link to="/"><img src={Logo} alt="navbar logo" className="navbar-brand" /> </Link>

          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            {userToken !== null ? (
              <>
                <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                  <li className="nav-item">
                    <NavLink className="nav-link" to={"/"}>  Home</NavLink>
                  </li>

                  <li className="nav-item"><NavLink className="nav-link" to="products">Products </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="brands">
                      Brands
                    </NavLink>
                  </li>
               
                </ul>
              </>
            ) : (
              ""
            )}

            <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
              <li className="nav-item d-flex align-items-center">
                <Link target="_blank" to="//www.facebook.com">
                  <i className="fab fa-facebook nav-link mx-1 "></i>
                </Link>
                <Link target="_blank" to="//www.instagram.com">
                  <i className="fab fa-instagram nav-link mx-1 "></i>
                </Link>
                <Link target="_blank" to="//www.youtube.com">
                  <i className="fab fa-youtube nav-link mx-1 "></i>
                </Link>
              </li>
              {userToken !== null ? (
                <>
      
                  <li className="nav-item">
                    <span className="nav-link cursor-pointer fw-bold" onClick={()=>logout()}> Logout</span>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <NavLink className="nav-link fw-bold" to="login">
                      Login
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link fw" to="/register">
                     
                      Sign Up
                    </Link>
                  </li>
                </>
                
              )}
                 <li className="nav-item position-relative" data-bs-toggle={!userToken?"modal":'' }data-bs-target="#staticBackdrop" onClick={()=>setIsOpen(true)} >
                                <Link className="nav-link" to="cart">
                                    <i className="fa-solid fa-cart-shopping"></i>
                                    <Badge className=" position-absolute top-0 " bg="main">{(data?.data?.numOfCartItems)?data?.data?.numOfCartItems:0}</Badge>
                                </Link>
                           
                            </li>
                          
            </ul>
          </div>
        </div>
      </nav>
    



<div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title fs-6 alert alert-warning w-100 text-center" id="staticBackdropLabel">This Is Warning</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
      </div>
      <div className="modal-body">
        <p className="lead text-white bg-main p-2 fs-6 text-center">  Login First To Show Your Cart</p>
      </div>
    </div>
  </div>
</div>

    </>
  );
}
