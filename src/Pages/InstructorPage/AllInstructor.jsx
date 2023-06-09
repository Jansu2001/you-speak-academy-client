
import { useQuery } from "@tanstack/react-query";
import InstructorCard from "./InstructorCard";

const AllInstructor = () => {
  const { data: instructor = [] } = useQuery(["instructor"], async () => {
    const res = await fetch("http://localhost:5000/instructor");
    return res.json();
  });

  const totalInstructor=instructor.filter(classes=>classes.role==='instructor')
console.log(totalInstructor);
  return (
    <div className="pt-24">
      <div className="p-4 grid grid-cols-1 ml-6 lg:ml-10 lg:grid-cols-3 gap-4">
        {totalInstructor.map(instructor=> <InstructorCard key={instructor._id} instructor={instructor}></InstructorCard>)}
        
      </div>
    </div>
  );
};

export default AllInstructor;
