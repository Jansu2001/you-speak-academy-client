
const InstructorCard = ({instructor}) => {
    return (
        <div className="border border-green-400 rounded-lg  hover:bg-sky-800 -white transition duration-300 shadow-xl image-full">
        <div className="text-center">
         <img className="mx-auto h-60 rounded-full w-1/2" src={instructor?.photoURL}  alt="" />
          <h1 className="my-auto mx-auto text-3xl font-bold">
            {instructor.name}
          </h1>
        </div>
      </div>
    );
};

export default InstructorCard;