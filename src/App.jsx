import { useState, useEffect } from "react";
import Header from "./components/Header.jsx"
import Form from "./components/Form";
import PatientList from "./components/PatientList";

function App() {

  //we need to save the info so it will be available even if we refresh. it saves whatever is in localStorage
  const [patients, setPatients] = useState(JSON.parse(localStorage.getItem('patients')) ?? [])
  const [patient,setPatient] = useState({})

  //sync state with patients
  useEffect(()=>{
    localStorage.setItem('patients',JSON.stringify(patients))
  },[patients])

  const deletePatient = (id) => {
    const newPatients = patients.filter(pat => pat.id !== id)
    setPatients(newPatients)
  }
  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <Form 
          patients = {patients}
          setPatients = {setPatients}
          patient = {patient}
          setPatient={setPatient} //so we can reset patient once we updated
        />
        <PatientList 
          patients = {patients}
          setPatient = {setPatient}
          deletePatient= {deletePatient}
        />
      </div>
      
    </div>
  )
}

export default App
