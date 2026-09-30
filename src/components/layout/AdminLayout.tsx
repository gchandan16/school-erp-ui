import { Outlet } from 'react-router-dom'

function AdminLayout() {
  return (
    <div className="app-wrapper">

      {/* ================= HEADER ================= */}
      <nav className="app-header navbar navbar-expand bg-body">

        <div className="container-fluid">

          {/* Left side */}
          <ul className="navbar-nav">

            <li className="nav-item">
              <a className="nav-link" href="#" role="button">
                <i className="bi bi-list fs-5"></i>
              </a>
            </li>

            <li className="nav-item d-none d-md-block">
              <a href="#" className="nav-link">
                School ERP
              </a>
            </li>

          </ul>


          {/* Right side */}
          <ul className="navbar-nav ms-auto">

            {/* Notification */}
            <li className="nav-item">
              <a href="#" className="nav-link position-relative">
                <i className="bi bi-bell fs-5"></i>

                <span className="badge bg-danger position-absolute top-0 start-100 translate-middle">
                  3
                </span>
              </a>
            </li>


            {/* User */}
            <li className="nav-item dropdown">
              <a href="#" className="nav-link d-flex align-items-center gap-2">

                <i className="bi bi-person-circle fs-4"></i>

                <span>Chandan</span>

                <i className="bi bi-chevron-down"></i>

              </a>
            </li>

          </ul>

        </div>

      </nav>


      {/* ================= SIDEBAR ================= */}
    <aside className="app-sidebar bg-body-secondary shadow"   data-bs-theme="dark">

        {/* Brand */}
        <div className="sidebar-brand">

          <a href="#" className="brand-link">

            <i className="bi bi-mortarboard-fill me-2"></i>

            <span className="brand-text fw-light">
              School ERP
            </span>

          </a>

        </div>


        {/* Sidebar menu */}
        <div className="sidebar-wrapper">

          <nav className="mt-2">

            <ul
              className="nav sidebar-menu flex-column"
              data-lte-toggle="treeview"
              role="menu"
            >

              {/* Dashboard */}
              <li className="nav-item">

                <a href="#" className="nav-link active">

                  <i className="nav-icon bi bi-speedometer2"></i>

                  <p>
                    Dashboard
                  </p>

                </a>

              </li>


              {/* Academic */}
              <li className="nav-item">

                <a href="#" className="nav-link">

                  <i className="nav-icon bi bi-mortarboard"></i>

                  <p>
                    Academic
                    <i className="nav-arrow bi bi-chevron-right"></i>
                  </p>

                </a>

                <ul className="nav nav-treeview">

                  <li className="nav-item">

                    <a href="#" className="nav-link">

                      <i className="nav-icon bi bi-people"></i>

                      <p>Students</p>

                    </a>

                  </li>


                  <li className="nav-item">

                    <a href="#" className="nav-link">

                      <i className="nav-icon bi bi-person-badge"></i>

                      <p>Teachers</p>

                    </a>

                  </li>


                  <li className="nav-item">

                    <a href="#" className="nav-link">

                      <i className="nav-icon bi bi-building"></i>

                      <p>Classes</p>

                    </a>

                  </li>


                  <li className="nav-item">

                    <a href="#" className="nav-link">

                      <i className="nav-icon bi bi-book"></i>

                      <p>Subjects</p>

                    </a>

                  </li>

                </ul>

              </li>


              {/* Finance */}
              <li className="nav-item">

                <a href="#" className="nav-link">

                  <i className="nav-icon bi bi-cash-stack"></i>

                  <p>
                    Finance
                    <i className="nav-arrow bi bi-chevron-right"></i>
                  </p>

                </a>

                <ul className="nav nav-treeview">

                  <li className="nav-item">

                    <a href="#" className="nav-link">

                      <i className="nav-icon bi bi-receipt"></i>

                      <p>Fees</p>

                    </a>

                  </li>

                  <li className="nav-item">

                    <a href="#" className="nav-link">

                      <i className="nav-icon bi bi-credit-card"></i>

                      <p>Payments</p>

                    </a>

                  </li>

                </ul>

              </li>


              {/* Administration */}
              <li className="nav-item">

                <a href="#" className="nav-link">

                  <i className="nav-icon bi bi-gear"></i>

                  <p>
                    Administration
                    <i className="nav-arrow bi bi-chevron-right"></i>
                  </p>

                </a>

                <ul className="nav nav-treeview">

                  <li className="nav-item">

                    <a href="#" className="nav-link">

                      <i className="nav-icon bi bi-person"></i>

                      <p>Users</p>

                    </a>

                  </li>

                  <li className="nav-item">

                    <a href="#" className="nav-link">

                      <i className="nav-icon bi bi-shield-check"></i>

                      <p>Roles</p>

                    </a>

                  </li>

                </ul>

              </li>

            </ul>

          </nav>

        </div>

      </aside>


      {/* ================= MAIN CONTENT ================= */}
      <main className="app-main">

        <Outlet />

      </main>


      {/* ================= FOOTER ================= */}
      <footer className="app-footer">

        <strong>
          School ERP
        </strong>

        <div className="float-end d-none d-sm-inline">
          School Management System
        </div>

      </footer>

    </div>
  )
}

export default AdminLayout