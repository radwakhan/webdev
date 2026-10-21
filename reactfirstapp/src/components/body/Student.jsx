import React from 'react'

const Student = (props) => {
    const {id,name,marks,section}=props;
    
    const heading={
        color:'yellow'
    }
  return (
    <div>
        <tr>
    
        {/* shift ctrl l select all and type */}
        <td style={{fontSize:'20px',color:'green'}}>student id: {props.id}</td>
        <td style={{fontSize:'20px',color:'green'}}>student name: {props.name}</td>
        <td style={{fontSize:'20px',color:'green'}}>student marks: {props.marks}</td>
        <td style={{fontSize:'20px',color:'green'}}>student section: {props.section}</td>
        </tr>
    </div>
  )
}

export default Student