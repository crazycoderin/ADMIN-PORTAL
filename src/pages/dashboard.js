import React from 'react'
import TableComp from "../components/common/table";
function Dashboard() {
  return (
    <div>
        <TableComp userArr={localStorage.getItem("userArr")?JSON.parse(localStorage.getItem("userArr")):[]} />
    </div>
  )
}

export default Dashboard