function Dashboard() {
  return (
    <>
      {/* Page Header */}
      <div className="app-content-header">
        <div className="container-fluid">

          <div className="row">
            <div className="col-sm-6">
              <h3 className="mb-0">Dashboard</h3>
            </div>

            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-end">
                <li className="breadcrumb-item">Home</li>
                <li className="breadcrumb-item active">
                  Dashboard
                </li>
              </ol>
            </div>
          </div>

        </div>
      </div>


      {/* Dashboard Content */}
      <div className="app-content">
        <div className="container-fluid">

          {/* Summary Cards */}
          <div className="row">

            {/* Students */}
            <div className="col-lg-3 col-6">
              <div className="small-box text-bg-primary">

                <div className="inner">
                  <h3>1,250</h3>
                  <p>Total Students</p>
                </div>

                <i className="small-box-icon bi bi-people"></i>

                <a href="#" className="small-box-footer">
                  More info
                  <i className="bi bi-arrow-right ms-2"></i>
                </a>

              </div>
            </div>


            {/* Teachers */}
            <div className="col-lg-3 col-6">
              <div className="small-box text-bg-success">

                <div className="inner">
                  <h3>85</h3>
                  <p>Total Teachers</p>
                </div>

                <i className="small-box-icon bi bi-person-badge"></i>

                <a href="#" className="small-box-footer">
                  More info
                  <i className="bi bi-arrow-right ms-2"></i>
                </a>

              </div>
            </div>


            {/* Classes */}
            <div className="col-lg-3 col-6">
              <div className="small-box text-bg-warning">

                <div className="inner">
                  <h3>32</h3>
                  <p>Total Classes</p>
                </div>

                <i className="small-box-icon bi bi-building"></i>

                <a href="#" className="small-box-footer">
                  More info
                  <i className="bi bi-arrow-right ms-2"></i>
                </a>

              </div>
            </div>


            {/* Fees */}
            <div className="col-lg-3 col-6">
              <div className="small-box text-bg-danger">

                <div className="inner">
                  <h3>₹8.5L</h3>
                  <p>Fees Collected</p>
                </div>

                <i className="small-box-icon bi bi-cash-stack"></i>

                <a href="#" className="small-box-footer">
                  More info
                  <i className="bi bi-arrow-right ms-2"></i>
                </a>

              </div>
            </div>

          </div>


          {/* Welcome Card */}
         {/* Recent Activities */}
<div className="row mt-3">

  {/* Recent Activities */}
  <div className="col-lg-8">

    <div className="card">

      <div className="card-header">
        <h3 className="card-title">
          Recent Activities
        </h3>
      </div>

      <div className="card-body p-0">

        <div className="list-group list-group-flush">

          <div className="list-group-item d-flex align-items-center">

            <div className="me-3">
              <span className="badge text-bg-primary p-2">
                <i className="bi bi-person-plus"></i>
              </span>
            </div>

            <div>
              <strong>New Student Admitted</strong>
              <div className="text-muted small">
                Rahul Sharma — Class 8A
              </div>
            </div>

            <small className="ms-auto text-muted">
              10 min ago
            </small>

          </div>


          <div className="list-group-item d-flex align-items-center">

            <div className="me-3">
              <span className="badge text-bg-success p-2">
                <i className="bi bi-cash"></i>
              </span>
            </div>

            <div>
              <strong>Fee Payment Received</strong>
              <div className="text-muted small">
                ₹25,000 — Amit Kumar
              </div>
            </div>

            <small className="ms-auto text-muted">
              30 min ago
            </small>

          </div>


          <div className="list-group-item d-flex align-items-center">

            <div className="me-3">
              <span className="badge text-bg-warning p-2">
                <i className="bi bi-person-badge"></i>
              </span>
            </div>

            <div>
              <strong>Teacher Added</strong>
              <div className="text-muted small">
                Priya Singh — Mathematics
              </div>
            </div>

            <small className="ms-auto text-muted">
              1 hour ago
            </small>

          </div>


          <div className="list-group-item d-flex align-items-center">

            <div className="me-3">
              <span className="badge text-bg-info p-2">
                <i className="bi bi-building"></i>
              </span>
            </div>

            <div>
              <strong>New Class Created</strong>
              <div className="text-muted small">
                Class 10B
              </div>
            </div>

            <small className="ms-auto text-muted">
              2 hours ago
            </small>

          </div>

        </div>

      </div>

      <div className="card-footer text-center">
        <a href="#" className="text-decoration-none">
          View All Activities
        </a>
      </div>

    </div>

  </div>


  {/* Quick Actions */}
  <div className="col-lg-4">

    <div className="card">

      <div className="card-header">
        <h3 className="card-title">
          Quick Actions
        </h3>
      </div>

      <div className="card-body">

        <div className="d-grid gap-2">

          <button className="btn btn-primary">
            <i className="bi bi-person-plus me-2"></i>
            Add Student
          </button>

          <button className="btn btn-success">
            <i className="bi bi-person-badge me-2"></i>
            Add Teacher
          </button>

          <button className="btn btn-warning">
            <i className="bi bi-cash-stack me-2"></i>
            Collect Fee
          </button>

          <button className="btn btn-info">
            <i className="bi bi-building me-2"></i>
            Manage Classes
          </button>

        </div>

      </div>

    </div>

  </div>

</div>

        </div>
      </div>
    </>
  )
}

export default Dashboard