function StudentList() {
  return (
    <>
      {/* Page Header */}
      <div className="app-content-header">
        <div className="container-fluid">

          <div className="row">
            <div className="col-sm-6">
              <h3 className="mb-0">Students</h3>
            </div>

            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-end">
                <li className="breadcrumb-item">Home</li>
                <li className="breadcrumb-item">Academic</li>
                <li className="breadcrumb-item active">
                  Students
                </li>
              </ol>
            </div>
          </div>

        </div>
      </div>


      {/* Page Content */}
      <div className="app-content">
        <div className="container-fluid">

          <div className="card">

            <div className="card-header">
              <h3 className="card-title">
                Student List
              </h3>

              <div className="card-tools">
                <button className="btn btn-primary btn-sm">
                  <i className="bi bi-plus-lg me-1"></i>
                  Add Student
                </button>
              </div>
            </div>

            <div className="card-body">

              <p className="mb-0 text-muted">
                Student management will be connected to the
                CodeIgniter API later.
              </p>

            </div>

          </div>

        </div>
      </div>
    </>
  )
}

export default StudentList