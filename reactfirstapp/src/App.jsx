

// import React, { Fragment } from 'react'

// export default function App() {
//   let name= "KIET MCA LAB 2"; //use let instead of var 
//   let listofname={ 
//     name:"kiet",
//     id:2,
//     class:"mca sec c"
//   }
//   let lang=[
//     "java","cpp","python","react js","mojo","flutter"
//   ]
  
//   return (
//   <div> 
//   <h1>Welcome to react app 1</h1> 
//   <h1>in {name}</h1>
//   <h1>name: {listofname.name}</h1>
//   <h1>id: {listofname.id}</h1>
//   <h1>class: {listofname.class}</h1>
//   <h3> list of languages</h3>
//   {lang.map((value, index)=>(
//     <h3 key= {index}>{index}. {value} </h3>)
//     )
//   }
//   </div>
//   ) 
// }




// export default App;
//  OR
// export {App};

// import React from 'react'

// const App = () => {
//   function clickme(){
//     alert("click me")
//   }
//   return (
//     <div>
//       <button onClick={clickme}>click me</button>
//     </div>
//   )
// }

// export default App
// import React from 'react'

// const App = () => {
//     let name = "khushi"

//     function changename(newname) {
//         name = newname
//         document.getElementById("newName").innerHTML = name;
//     }

//     return (
//         <div>
//             <div><h1>name</h1>
//             <h1 id="newName"> {name}</h1></div>
//             <button onClick={() => changename("radwa")}>
//                 click
//             </button>
//         </div>
//     )
// }

// export default App
//state 
// import React, { useState } from 'react'
// const App = () => {
//   const [name,setname]=useState("KIET");
//   function changename(newname){
//     setname("kiet mca");
//     console.log(name);
//   }
//   return (
//     <div>
//       <h1>name: {name}</h1>
//       <button onClick={()=>changename("kiet mca")}>change name</button>
//     </div>
//   )
// }
// export default App
// import React, { useState } from 'react'
// let initname={id:1,name:"radwa"}
// const [nameobj,setname]=useState(initname);
// function changename(newname){
//   console.log(nameobj);
//   setname({...nameobj,name:newname});
//   console.log(nameobj);
// }
// console.log(nameobj)
// const App = () => {
//   return (
//     <div>App</div>
//   )
// }

// export default App

// import React, { useState } from 'react'

// const App = () => {
//   const [numbers,setnumber]=useState([10,20,30,40]);
//   function addtwo(){
//     setnumber(numbers.map(n=>n+2));
//   }
//   return (
//    <div>
//     <h1>{numbers.join(" , ")}</h1>
//     <button onClick={addtwo}>add two</button>
//    </div>
//   )
// }

// // export default App 
// import React, { useState } from 'react';
// // import Header from "./components/headers/Header";

// export default function App() {
//   const [number , setnumber]=useState([{
//     id:1,name:"s1",class:"mca1",result:"fail"
//   },
// {
//    id:2,name:"s2",class:"mca1",result:"fail"
// },
// {
//    id:3,name:"s3",class:"mca1",result:"fail"
// },
// {
//    id:4,name:"s4",class:"mca1",result:"fail"
// }]);
// const updateinfo=()=>{
//   setstudentInfo=()=>{
//     setstudentInfo((prevstudent)=>(
//       prevstudent.map((row)=>({...row,name:"Name"+row.id}))
//     ));
//   };
// }
// const plustwo=()=>{
//   const newnumber=number.map((val)=>val+2);
//   setnumber(newnumber);
// };
//   return (
//     <div>
//       <h2>list of numbers:</h2>
//       {setstudentInfo.map((row)=>(
//         <div key={row.id}>
//           <h2>
//             id:{row.id}, name:{row.name}, "marks: "{Array.isArray(row.marks)?row.marks.join(","):row.marks}
//           </h2>
//         </div>
//       ))}
//     </div>
//   )
// }

// import React from 'react';
// import Body from './components/body/Body';
// import Header from './components/headers/Header';


// const App = () => {
//   return (
//     <div>
//       <h2>App</h2>
//       <Header/>
//       <Body/>
     
//     </div>
    

//   )
 
// }

// export default App


// import React from 'react'

// const App = () => {
//   let name="khushi"
//   function changename(newname){
//     name=newname
//   }
//   return (
//     <div>
//       <h1>name:{name}</h1>
//       <button onClick={changename("radwa")}>click</button>

//     </div>
//   )
// }

// export default App
import React, { useState } from 'react'

const App = () => {
  let [counters,setcounters]=useState([
    {id:1,count:0},
    {id:2,count:1},
    {id:3,count:2},
    {id:4,count:1},
    {id:5,count:0},
  ]);
  const dec=(id)=>{
    setcounters(counters.map((counter)=>
    counter.id===id?{...counter,count:counter.count-1}:counter,
  ));
  };
   const inc=(id)=>{
    setcounters(counters.map((counter)=>
    counter.id===id?{...counter,count:counter.count+1}:counter,
  ));
  };
  return (
    <div>
      <button>reset button</button>
    </div>
  )
}

export default App