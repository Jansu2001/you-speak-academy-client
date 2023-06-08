
const ClassessCard = ({classes}) => {
    return (
        <div>
            <div className="border p-2 border-green-400 rounded-lg w-72 h-60 hover:bg-cyan-400 -white transition duration-300 shadow-xl image-full">
        <div className='text-center'>
        <img className="w-full h-48" src={classes.photoURL} alt="" />
        <h1 className="mx-auto text-3xl font-bold">{classes.className}</h1>
        </div>
      </div>
        </div>
    );
};

export default ClassessCard;