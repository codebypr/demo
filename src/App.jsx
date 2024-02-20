import { useState } from 'react'

import './App.css'
import { Client, Databases, ID } from 'appwrite';

function App() {
 let client;
  const [uname, setUname] = useState();
  const [password, setPassword] = useState();
  const [arr,setArr]=useState([]);
  const setValue=()=>{
    client=new Client();
    client.setEndpoint('https://cloud.appwrite.io/v1').setProject('65d04ecb366dcd6e13af');
    const database=new Databases(client);
    const data=database.createDocument('65d04ff6c49e72c2e1f9','101',ID.unique(),{'uname':uname,'password':password});

    data.then((res)=>console.log(res.uname,'Done!')).catch((err)=>console.log(err,'Err'))
  }

  const getValue=async()=>{
    client=new Client();
    client.setEndpoint('https://cloud.appwrite.io/v1').setProject('65d04ecb366dcd6e13af');
    const database=new Databases(client);
    let data=database.listDocuments('65d04ff6c49e72c2e1f9','101');
    await  data.then  ((res)=>{setArr(res.documents);console.log("Done",res);}).catch((err)=>console.log(err,'Err'))
  }
  return (
    <>
<<<<<<< HEAD
       <div style={{display:'flex'}}> 
=======
       <h3>My Backend App</h3>
       <div style={{display:'flex', backgroundColor:'goldenrod'}}> 
>>>>>>> 136a563 (Home)
       <div style={{padding:'4px' ,border:'1px solid black'}}>
          Username: <input type="text" style={{marginBottom:'4px'}}
          value={uname}
          onChange={(e)=>setUname(e.target.value)}
          /><br />
          Password: <input type="password" style={{marginBottom:'4px'}}
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          /><br />
          <button style={{border:"2px solid black ",width:'50%' ,backgroundColor:'greenyellow'}}
          onClick={setValue}
          > ADD</button>
          <button style={{border:"2px solid black ",width:'50%' ,backgroundColor:'greenyellow'}}
          onClick={getValue}
          > View</button>
        </div>

        <table >
          {arr.map((val)=>(<tr style={{border:'1px solid black'}}><td style={{border:'1px solid black'}}>{val.uname}</td ><td style={{border:'1px solid black'}}>{val.password}</td></tr>))}
        </table>
       </div>
    </>
  )
}

export default App
