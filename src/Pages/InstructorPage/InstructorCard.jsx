const InstructorCard = ({ instructor }) => {
  return (
    <div >
      <div className="card w-96 bg-base-100 shadow-xl relative  overflow-hidden bg-cover bg-no-repeat">
        <div className="">
          <h2 className="text-2xl font-bold m-2 ">
            Name: {instructor.name}
          </h2>
          <p className="m-2 font-semibold">Email: {instructor.email}</p>
        </div>
        <figure>
          <img
            className=" h-80 w-full rounded-lg transition duration-300 ease-in-out hover:scale-110"
            src={instructor.photoURL}
            alt="Shoes"
          />
        </figure>
      </div>
    </div>
  );
};

export default InstructorCard;
