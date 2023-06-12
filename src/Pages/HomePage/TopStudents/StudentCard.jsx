const StudentCard = ({ student }) => {
  return (
    <div>
      <div className="card  w-full h-[300px] bg-base-100 shadow-xl  relative  overflow-hidden bg-cover bg-no-repeat">
        <figure>
          <img
          className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 transition duration-400 ease-in-out hover:opacity-90"
            src={student.photo}
            alt="Shoes"
          />
        </figure>
        <div className="card-body  bg bg-gray-600 text-white">
          <div className="relative -bottom-40">

          <h2 className="card-title">
           {student.name}
            <div className="badge badge-secondary">{student.score}</div>
          </h2>
          <p className="font-bold">Course: {student.coursename}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentCard;
