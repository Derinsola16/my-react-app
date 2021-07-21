const Header = (props) => {
  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-light nav-bar top-0 position-sticky top ">
      <div className="container-fluid">
        <a className="navbar-brand text-bold" href="#">
          <strong>Dashboard</strong>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavDropdown"
        >
          <ul className="navbar-nav">
            <li className="nav-item dropdown me-2 mt-1">
              <a
                className="nav-link dropdown-toggle text-dark"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Pharmco
              </a>
              <ul
                className="dropdown-menu py-0 w-50"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <a className="dropdown-item border-bottom px-4 py-3" href="#">
                    Pharmco
                  </a>
                </li>
                <li>
                  <a className="dropdown-item border-bottom px-4 py-3" href="#">
                    Codex
                  </a>
                </li>
                <li>
                  <a className="dropdown-item px-4 py-3" href="#">
                    Beauty Med
                  </a>
                </li>
              </ul>
            </li>
            <span className="text-muted border-end"></span>
            <li className="nav-item px-3 dropdown">
              <a className="nav-link dropdown-toggle text"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false">
                <i class="fas fa-bell text-muted fs-5 mt-1"></i>
              
              </a>
              <ul
                className="dropdown-menu py-0"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <a className="dropdown-item border-bottom p-3" href="#">
                  New Customer: Alex Luthur
                  </a>
                </li>
                <li>
                  <a className="dropdown-item border-bottom p-3" href="#">
                  Ad: Refuel Max Extra just ended
                  </a>
                </li>
              </ul>
            </li>
            <span className="text-muted border-end"></span>
            <li className="nav-item">
              <a className="nav-link " href="#">
                Joshua Palton
                <img
                  src="https://github.com/mdo.png"
                  alt="mdo"
                  width="30"
                  height="30"
                  class="ms-4 rounded-circle"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

   </div>
  );
};

export default Header;
