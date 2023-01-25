
import { useState ,useEffect} from "react";
import Cookie from 'universal-cookie'
function Myprofile() { 
    let cookie = new Cookie();
  let [profile,setprofile]=useState([])
//   fetch("http://127.0.0.1:8000/user/",
//   {	
//     method: "GET",
//     headers: {
//         'Content-Type': 'application/json',
//         Authorization: "Bearer "+cookie.get("token"),
//     }
// })
//   .then(res=>res.json())
//   .then(data=>console.log(data))
//   .catch(err=>console.log("error is:",err))
useEffect(()=> {
	fetch("http://127.0.0.1:8000/user/",{	
			method: "GET",
			headers: {
				'Content-Type': 'application/json',
				Authorization: "Bearer "+cookie.get("token"),
			}
		})
        .then((res) => res.json())
        .then((res) => {setprofile(res)})
        .catch((err) => console.error(err))
},[profile])
  return (
    <div>
        {profile.name}
    </div>
      
  )
}

export default Myprofile;