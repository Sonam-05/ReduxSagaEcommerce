import React, { useState } from 'react'
import '../../styles/admin/adminPanel.css'
import { Link } from 'react-router-dom'
import { adminPanelArr } from '../../datafolder/Data'

const AdminPanel = () => {
    const [arr, setArr] = useState(adminPanelArr);

    return (
        <div className="adminCard card" style={{ "width": "18rem" }}>
            <div className="adminPanelHead card-header">
                Admin Panel
            </div>
            <ul className="ulClass list-group list-group-flush">
                {arr.map((singleObj) => {
                    return <li key={singleObj.id} className={singleObj.link==window.location.pathname ? "list-group-item active" : "list-group-item"}>
                        <Link  to={singleObj.link}>{singleObj.name}</Link>
                    </li>
                })}
            </ul>
        </div>
    )
}

export default AdminPanel
