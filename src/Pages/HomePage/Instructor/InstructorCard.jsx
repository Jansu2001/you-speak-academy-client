const InstructorCard = ({ instructor }) => {

  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl mr-5  relative  overflow-hidden bg-cover bg-no-repeat">
        <div className="">
          <h2 className="text-2xl font-bold m-2 text-center">
            {instructor.name}
          </h2>
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
