import Patient from "./Patient";

const PatientList = () => {
    return (
        <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
            <h2 className="font-black text-3xl text-center">
          Patient List
      </h2>

      <p className="text-lg text-center mt-5 mb-10">
          Manage patients and {' '}
          <span className="text-orange-700 font-bold">
          appointments!
          </span>
       </p>

       <Patient />


        </div>
        
    );
}

export default PatientList;