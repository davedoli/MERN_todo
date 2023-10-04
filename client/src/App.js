import { useState, useEffect } from "react";


export default function App() {
  const [backendData, setbackendDat] = useState([]);

  useEffect(() => {
    fetch("/todos")
      .then(res => res.json())
      .then(data => {
        setbackendDat(data)
        console.log(data);
        return data
      })
  }, []);


  return(
    <div>
      {(typeof backendData[0] ==='undefined') ? (
        <p>Loading...</p>
      ) : (
        <ul>
        {backendData.map((item) => (
          <li key={item._id}>{item._id}</li>
        ))}
        </ul>
      )}
    </div>
  )
}
