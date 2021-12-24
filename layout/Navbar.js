import React from 'react'
import Link from 'next/link'

export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
              <Link  href="/">
                <a className="nav-link active">Page 1</a>
              </Link>
         </li>
        <li className="nav-item"> 
              <Link  href="/news2">
               <a className="nav-link active"> Page 2</a>
                </Link>  {/** Writting  like this gives an Error that === TWO CHILDS WERE PASSED  */}
        </li>
       
        
      </ul>
    </div>
  </div>
</nav>
        </>
    )
}
