import { Sidebar } from '@renderer/components/Sidebar'
import { Outlet } from 'react-router'

export function PdfLayout() {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <main style={{ flex: 1 }}>
        <Outlet />
      </main>
    </div>
  )
}
