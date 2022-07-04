import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";


function App() {
  const [category, setCategory] = useState('general')
  function handleClick(e) {
    setCategory(e.target.id)
  }

  return (
    <>
    <h1 className="text-center">Forum</h1>
    <div className="row">      
      <div className="col-3">
        <div className="nav flex-column nav-pills" id="v-pills-tab" aria-orientation="vertical">
          <Link onClick={handleClick} state={{cat: category}} id={'general'} className={'nav-link'} style={{textDecoration: 'none', color: 'orangered'}} to="/general">
            <div>
              <h2>General Discussion</h2>
            </div>
          </Link>
          <Link onClick={handleClick} state={{cat: category}} id={'bugs'} className={'nav-link'} style={{textDecoration: 'none', color: 'orangered'}} to="/bugs">
            <div>
              <h2>Bugs</h2>
            </div>
          </Link>
        </div>
      </div>

      <Outlet />
    </div>
    </>

  );
}

export default App;
