//rafce

import { useState, useEffect } from "react"
import Error from "./Error"



const Form = ({patients,setPatients, patient, setPatient}) => {
  const [patientName,setPatientName] = useState('')
  const [guardianName,setGuardianName] = useState('')
  const [email,setEmail] = useState('')
  const [date,setDate] = useState('')
  const [symptoms,setSymptoms] = useState('')

  const [error,setError] = useState(false)

  useEffect(() => {
    if(Object.keys(patient).length>0) {
        setPatientName(patient.patientName)
        setGuardianName(patient.guardianName)
        setEmail(patient.email)
        setDate(patient.date)
        setSymptoms(patient.symptoms)
    }
  }, [patient])
  
  const generateId = () => {
      const random = Math.random().toString(36).substr(2)
      const date = Date.now().toString(36)

      return random + date
  }

  const handleSubmit = (e) => {
      e.preventDefault()
      //Validation
      if([patientName,guardianName,email,date,symptoms].includes('')) {
          console.log('At least one input is empty')
          setError(true)
          return;
      } 

      // We need to setError back to false if user fills all inputs after an error alert

      setError(false)

      //We need to create an object with all the patient data

      const patientObject = {
        patientName,
        guardianName,
        email,
        date,
        symptoms
      }

      

      if(patient.id) {
          //updating
          patientObject.id = patient.id
          const updatedPatients = patients.map(patientState => patientState.id === patient.id ? patientObject : patientState)

          setPatients(updatedPatients)
          setPatient({}) //this line cleans patient AND now the button updates to "Add patient" again! witchcraft!
      } else { 
          //creating

          //Takes the existing information and adds the new patient
          patientObject.id = generateId()
          setPatients([...patients,patientObject])

      }

      //Reset the form once everything is done

      setPatientName('')
      setGuardianName('')
      setEmail('')
      setDate('')
      setSymptoms('')
  }
  
  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">
          Patient Tracking
      </h2>
      <p className="text-lg text-center mt-5 mb-10">
          Add patients and {' '}
          <span className="text-green-800 font-bold">
          track them!
          </span>
          
      </p>
      <form
        onSubmit={handleSubmit} 
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
            {error && <Error msg="Todos los campos son obligatorios."/>}
          <div className="mb-5">
              <label htmlFor="patient" className="block text-gray-700 uppercase font-bold">Patient name</label>
              <input type="text"
                     id="patient"
                     placeholder="Patient name"
                     className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                     value={patientName}
                     onChange={(e) => setPatientName(e.target.value)}
              />
          </div>
          <div className="mb-5">
              <label htmlFor="guardian" className="block text-gray-700 uppercase font-bold">Guardian name</label>
              <input type="text"
                     id="guardian"
                     placeholder="Guardian name"
                     className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                     value={guardianName}
                     onChange={(e) => setGuardianName(e.target.value)}
              />
          </div>
          <div className="mb-5">
              <label htmlFor="email" className="block text-gray-700 uppercase font-bold">E-mail</label>
              <input type="email"
                     id="email"
                     placeholder="E-mail"
                     className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}
              />
          </div>
          <div className="mb-5">
              <label htmlFor="date" className="block text-gray-700 uppercase font-bold">Date</label>
              <input type="date"
                     id="date"
                     className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                     value={date}
                     onChange={(e) => setDate(e.target.value)}
              />
          </div>
          <div className="mb-5">
              <label htmlFor="symptoms" className="block text-gray-700 uppercase font-bold">Symptoms</label>
              <textarea 
              id="symptoms"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              placeholder="Symptoms"
              value={symptoms}
              onChange={(e) => setSymptoms(e.target.value)}
              />   
          </div>
          <input type="submit" 
          className="bg-green-800 w-full p-3 text-white uppercase font-bold cursor-pointer transition-all hover:bg-green-600 rounded-md"
          value={ patient.id ? "Update patient" : "Add patient"}
          />
      </form>
    </div>
  )
}

export default Form
