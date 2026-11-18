import { useEffect, useState } from "react"
import "./App.css"
import { checkBackend } from "./services/api";

function App() {

  const [backendStatus, setBackendStatus] = useState("Checking...");
  const [error, setError] = useState("");

  useEffect(()=>{
    
    checkBackend()
      .then((data)=>{
        setBackendStatus(data.message);
        setError("");
      })
      .catch((err)=>{
        setBackendStatus("Disconnected");
        setError(err.message);
      })

  },[])

  return (
    <div className="app">
     <h1>Hospital Management System</h1>

     <p>AI-Assisted Hospital & Patient Management</p>

     <div className="connection">

        <h2>Backend Connection</h2>

        <h3>{backendStatus}</h3>  

        {error && <p>{error}</p>}

     </div>
    </div>
  )
}

export default App
