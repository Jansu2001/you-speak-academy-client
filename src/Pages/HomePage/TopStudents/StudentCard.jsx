const StudentCard = ({ student }) => {
  return (
    <div>
      <div className="card  w-96 bg-base-100 shadow-xl">
        <figure>
          <img
          className="h-80"
            src={student.photo}
            alt="Shoes"
          />
        </figure>
        <div className="card-body bg bg-gray-600 text-white">
          <h2 className="card-title">
           {student.name}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>Course: {student.coursename}</p>
          <div className="card-actions">
            <div className="badge badge-outline">Score: {student.score}</div>
            <div className="badge badge-outline">Products</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentCard;
