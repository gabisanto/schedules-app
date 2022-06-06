//rafce

import { useState, useEffect } from "react"


const Form = () => {
  const [patientName,setPatientName] = useState('')
  const [guardianName,setGuardianName] = useState('')
  const [email,setEmail] = useState('')
  const [date,setDate] = useState('')
  const [symptoms,setSymptoms] = useState('')
  
  const handleSubmit = (e) => {
      e.preventDefault()
      //Validation
      if([patientName,guardianName,email,date,symptoms].includes('')) {
          console.log('At least one input is empty')
      } else {
          console.log("All good")
      }
  }
  
  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">
          Patient Tracking
      </h2>
      <p className="text-lg text-center mt-5 mb-10">
          Add patients and {' '}
          <span className="text-orange-700 font-bold">
          track them!
          </span>
          
      </p>
      <form
        onSubmit={handleSubmit} 
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
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
          className="bg-orange-700 w-full p-3 text-white uppercase font-bold hover:bg-orange-900 cursor-pointer transition-all"
          value="Add patient"
          />
      </form>
    </div>
  )
}

export default Form
