import logo from "../img/logo.png";
const Sidebar = () => {
  return (
    <main style={{ height: "100vh" }} className="position-sticky top-0 sidebar">
      <div>
        <div className="px-sm-2 px-0">
          <div
            className="
            d-flex
            flex-column
            align-items-center align-items-sm-start
            px-3
            pt-3
          "
          >
            <ul
              className="
              nav nav-pills
              flex-column
              mb-sm-auto mb-0
              align-items-center
              align-items-sm-start
              mt-2
            "
              id="menu"
            >
              <li className="text-center nav-item mb-5">
                <div className="nav-link align-middle px-0 d-flex">
                  <img src={logo} alt="" className="me-2" />
                </div>
              </li>

              <li className="focus d-inline-block">
                <a href="#" className="nav-link align-middle px-0 py-0 mb-2">
                  <i className="fas fa-home"></i>
                  <span className="ms-3 d-none d-sm-inline">Dashboard</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="nav-link text-muted px-0 align-middle mb-2"
                >
                  <i className="fas fa-cube"></i>
                  <span className="ms-3 d-none d-sm-inline">Products</span>
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="nav-link text-muted px-0 align-middle mb-2"
                >
                  <i className=" fas fa-chart-pie"></i>
                  <span className="ms-3 d-none d-sm-inline">Ads</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="nav-link text-muted px-0 align-middle mb-2"
                >
                  <i className=" fas fa-gift"></i>
                  <span className="ms-3 d-none d-sm-inline">Loyalty</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="nav-link text-muted px-0 align-middle mb-2"
                >
                  <i className="fs- fas fa-users"></i>
                  <span className="ms-3 d-none d-sm-inline">Customer</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="nav-link text-muted px-0 align-middle mb-2"
                >
                  <i className="fs- fas fa-cog"></i>
                  <span className="ms-3 d-none d-sm-inline">Settings</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="nav-link text-muted px-0 align-middle mb-2"
                >
                  <i className="fs- fas fa-sign-out-alt"></i>
                  <span className="ms-3 d-none d-sm-inline">Logout</span>
                </a>
              </li>
            </ul>
            <hr />
            {/* <div className="dropdown pb-4 bottom-0 postition-sticky">
              <a
                href="#"
                className="
                d-flex
                align-items-center
                text-white text-decoration-none
                dropdown-toggle
              "
                id="dropdownUser1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="https://github.com/mdo.png"
                  alt="hugenerd"
                  width="30"
                  height="30"
                  className="rounded-circle"
                />
                <span className="d-none d-sm-inline mx-1">loser</span>
              </a>
              <ul className="dropdown-menu dropdown-menu-muted text-small shadow">
                <li>
                  <a className="dropdown-item" href="#">
                    New project...
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Settings
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Profile
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Sign out
                  </a>
                </li>
              </ul>
            </div> */}
          </div>
        </div>
        {/* <div className="col py-3">Content area...</div>  */}
      </div>
    </main>
  );
};

export default Sidebar;
