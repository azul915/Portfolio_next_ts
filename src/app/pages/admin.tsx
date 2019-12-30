import * as React from 'react'
import Link from 'next/link'

const AdminPage: React.FC = () => (
    <div>
        <h1>Admin</h1>
        <p>This is the Admin page</p>
        <p>
            <Link href="/">
                <a>Go home</a>
            </Link>
        </p>
    </div>
)

export default AdminPage