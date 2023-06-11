import { useQuery } from "@tanstack/react-query";
import StudentCard from "./StudentCard";

const TopStudents = () => {

    const { data: students = []  } = useQuery(["student"], async () => {
        const res = await fetch("http://localhost:5000/top-student");
        return res.json();
      });

    return (
        <div className="pt-5">
            <h1 className="w-1/4 text-white rounded-full p-2 mx-auto bg bg-gray-500 text-4xl font-bold text-center">Top Students</h1>
            <div className="p-4 grid grid-cols-1 ml-6 lg:ml-10 lg:grid-cols-3 gap-4">
            {students.map(student=><StudentCard key={student._id} student={student}></StudentCard>)}
        </div>
        </div>
    );
};

export default TopStudents;