import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import AdminLayout from '../components/layout/AdminLayout'
import Dashboard from '../pages/dashboard/Dashboard'
import StudentList from '../pages/students/StudentList'

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<AdminLayout />}>
          <Route index element={<Navigate to="/dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="students" element={<StudentList />} />
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes