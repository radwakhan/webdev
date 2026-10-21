
// controlled component- which do not have its own state and manage by parent component
// if student dont have is own component and its parent component have variable and
// passes to student usng props. if student have its own state variable and parent have
//  its own then parent cannot update student variable at run time.
// if any prop passes to student that prop is read only and do not change at run time.
// if component made its own state variable no other component can change its state.
// but if parent have to change the value then we remove the state from child and
//  pass it to the parent component. thats bubbling of event.

import React, { useState } from 'react'
import Student from './Student'
const Body = () => {
    const [studentinfo, setstudentinfo]=useState(
        [
            {id:1,name:"student1",marks:90,class:"mca-c"},
            {id:2,name:"student2",marks:60,class:"mca-a"},
            {id:3,name:"student3",marks:70,class:"mca-c"},
            {id:4,name:"student4",marks:90,class:"mca-d"},
            {id:5,name:"student5",marks:90,class:"mca-b"},
        ]
    );

    
  return (
    <div>
        <h2>welcome to react js first home page</h2>
        <table>
            <thead><h2>student information</h2>
              <tr><th>id</th><th>name</th><th>marks</th><th>section</th></tr></thead>
            <tbody>
              
        <Student 
        id={studentinfo[0].id} 
        name={studentinfo[0].name}
        marks={studentinfo[0].marks}
        section={studentinfo[0].class}/>
        <Student 
        id={studentinfo[1].id} 
        name={studentinfo[1].name}
        marks={studentinfo[1].marks}
        section={studentinfo[1].class}/>
        </tbody>
        </table>
    </div>
  );
};

export default Body