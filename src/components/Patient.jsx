const Patient = ({patient,setPatient,deletePatient}) => {
  const {patientName,guardianName, email, date, symptoms, id} = patient
  
  const handleDelete = () => {
      const reply = confirm("Do you want to delete this patient?")
      if (reply) {
          deletePatient(id)
      }
  }
  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-lg">
    <p className="font-bold mb-3 text-grey-700 uppercase">Name: {' '}
        <span className="font-normal normal-case">
            {patientName}
        </span>
    </p>
    <p className="font-bold mb-3 text-grey-700 uppercase">Guardian name: {' '}
        <span className="font-normal normal-case">
            {guardianName}
        </span>
    </p>
    <p className="font-bold mb-3 text-grey-700 uppercase">Email: {' '}
        <span className="font-normal normal-case">
            {email}
        </span>
    </p>
    <p className="font-bold mb-3 text-grey-700 uppercase">Date: {' '}
        <span className="font-normal normal-case">
            {date}
        </span>
    </p>
    <p className="font-bold mb-3 text-grey-700 uppercase">Symptoms: {' '}
        <span className="font-normal normal-case">
            {symptoms}
        </span>
    </p>

    <div className="flex mt-10 justify-center">
        <button
            type="button"
            className="py-2 px-10 bg-green-800 hover:bg-green-600 text-white font-bold uppercase rounded-md mr-3"
            onClick={()=>setPatient(patient)}
        >Edit</button>

        <button
            type="button"
            className="py-2 px-8 bg-red-900
            hover:bg-red-700 text-white font-bold uppercase rounded-md"
            onClick = {handleDelete} // this is so we can add a confirm, otherwise it deletes too fast and could be an issue for the user
        >Delete

        </button>

    </div>

</div>

  )
}

export default Patient