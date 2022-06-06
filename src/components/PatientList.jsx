import Patient from "./Patient";

const PatientList = ({patients,setPatient,deletePatient}) => {

    return (
        <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">

            {patients && patients.length ? (
                <>
                  <h2 className="font-black text-3xl text-center">
                  Patient List
              </h2>
        
              <p className="text-lg text-center mt-5 mb-10">
                  Manage patients and {' '}
                  <span className="text-green-800 font-bold">
                  appointments!
                  </span>
               </p>

                {patients.map(patient => 
                    <Patient 
                    // key={index} if we use the map index that's bad practices to avoid!
                    key={patient.id}
                    patient={patient}
                    setPatient={setPatient}
                    deletePatient={deletePatient}
                    />
                )}

                </>
            ) : <>

<h2 className="font-black text-3xl text-center">
                  There are no patients
              </h2>
            
            <p className="text-lg text-center mt-5 mb-10">
                  Add patients and {' '}
                  <span className="text-green-800 font-bold">
                  they will appear here!
                  </span>
               </p>
            
            
            </>}

          
       


        </div>
        
    );
}

export default PatientList;
