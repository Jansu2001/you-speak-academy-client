import { useQuery } from "@tanstack/react-query";
import ClassesCard from "./ClassesCard";

const AllClassess = () => {
  const { data: classess = [] } = useQuery(["class"], async () => {
    const res = await fetch("http://localhost:5000/addclass");
    return res.json();
  });

  const approvedClasses=classess.filter(classes=>classes.status==='approved')
  console.log('approvedClasses',approvedClasses);
  return (
    <div className="pt-16 p-2">

      <div className="p-4 grid grid-cols-1 ml-6 lg:ml-0 lg:grid-cols-4 gap-4">
        {approvedClasses.map(classes=><ClassesCard key={classes._id} classes={classes}></ClassesCard>)}
      </div>
    </div>
  );
};

export default AllClassess;
