
import { useQuery } from "@tanstack/react-query";
import InstructorCard from "./InstructorCard";

const Instructor = () => {
  const { data: instructor = [] } = useQuery(["instructor"], async () => {
    const res = await fetch("http://localhost:5000/instructor");
    return res.json();
  });

  const totalInstructor=instructor.filter(classes=>classes.role==='instructor')
console.log(totalInstructor);
  return (
    <div className="mt-5">
      <h1 className="text-3xl rounded-lg font-bold mx-auto text-center bg bg-green-300 p-3  lg:w-1/3">
        Popular Instructor
      </h1>
      <div className="p-4 grid grid-cols-1 ml-6 lg:ml-10 lg:grid-cols-3 gap-4">
        {totalInstructor.slice(0,6).map(instructor=> <InstructorCard key={instructor._id} instructor={instructor}></InstructorCard>)}
        
      </div>
    </div>
  );
};

export default Instructor;
