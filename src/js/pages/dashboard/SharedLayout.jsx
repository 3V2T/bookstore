import { Outlet } from 'react-router-dom'
import { Navbar } from '../../components'

const SharedLayout = () => {
  return (
    <main className="dashboard">
      <Navbar />
      <div className="dashboard-page">
        <Outlet />
      </div>
    </main>
  )
}
export default SharedLayout
