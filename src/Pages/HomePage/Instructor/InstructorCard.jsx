
const InstructorCard = ({instructor}) => {
    return (
        <div className="border border-green-400 rounded-lg w-72 h-80 hover:bg-cyan-400 -white transition duration-300 shadow-xl image-full">
        <div className="text-center relative top-24">
         <img className="relative -top-14" src={instructor?.photoURL}  alt="" />
          <h1 className="my-auto mx-auto text-3xl font-bold">
            {instructor.name}
          </h1>
        </div>
      </div>
    );
};

export default InstructorCard;