import {useState } from 'react'
import useKeycloak from '../hook/useKeycloak'

export default function TestFetch() {

    const { keycloak } = useKeycloak();
    const [data, setData] = useState("");

    const handleClick = () => {
        if(keycloak) {
            fetch("http://localhost:3000/api/v1/hello", 
            {
                headers: {
                'Authorization': `Bearer ${keycloak?.token}`,
                'Content-Type': 'application/json' 
                }
            }).then(res => res.json()).then(res => setData(res))
        }
    }

  return (
    <div>
        <button onClick={handleClick}>Do something</button>
        <div>
            Res = {data}
        </div>
    </div>
  )
}
