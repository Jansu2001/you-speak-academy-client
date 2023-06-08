import { FaAndroid,  } from 'react-icons/fa';

const Instructor = () => {
  return (
    <div className='mt-5'>
        <h1 className='text-3xl rounded-lg font-bold mx-auto text-center bg bg-green-300 p-3  lg:w-1/3'>Popular Instructor</h1>
        <div className="p-4 grid grid-cols-1 ml-6 lg:ml-10 lg:grid-cols-3 gap-4">
      <div className="border border-green-400 rounded-lg w-72 h-56 hover:bg-cyan-400 -white transition duration-300 shadow-xl image-full">
        <div className='text-center relative top-24'>
        <FaAndroid className='w-16 h-16 mx-auto'></FaAndroid>
        <h1 className="my-auto mx-auto text-3xl font-bold">English Instructor</h1>
        </div>
      </div>
      <div className="border border-green-400 rounded-lg w-72 h-56 hover:bg-cyan-400 -white transition duration-300 shadow-xl image-full">
        <div className='text-center relative top-24'>
        <FaAndroid className='w-16 h-16 mx-auto'></FaAndroid>
        <h1 className="my-auto mx-auto text-3xl font-bold">Bangla Instructor</h1>
        </div>
      </div>
      <div className="border border-green-400 rounded-lg w-72 h-56 hover:bg-cyan-400 -white transition duration-300 shadow-xl image-full">
        <div className='text-center relative top-24'>
        <FaAndroid className='w-16 h-16 mx-auto'></FaAndroid>
        <h1 className="my-auto mx-auto text-3xl font-bold">Hindi Instructor</h1>
        </div>
      </div>
      <div className="border border-green-400 rounded-lg w-72 h-56 hover:bg-cyan-400 -white transition duration-300 shadow-xl image-full">
        <div className='text-center relative top-24'>
        <FaAndroid className='w-16 h-16 mx-auto'></FaAndroid>
        <h1 className="my-auto mx-auto text-3xl font-bold">French Instructor</h1>
        </div>
      </div>
      <div className="border border-green-400 rounded-lg w-72 h-56 hover:bg-cyan-400 -white transition duration-300 shadow-xl image-full">
        <div className='text-center relative top-24'>
        <FaAndroid className='w-16 h-16 mx-auto'></FaAndroid>
        <h1 className="my-auto mx-auto text-3xl font-bold">Turkish Instructor</h1>
        </div>
      </div>
      <div className="border border-green-400 rounded-lg w-72 h-56 hover:bg-cyan-400 -white transition duration-300 shadow-xl image-full">
        <div className='text-center relative top-24'>
        <FaAndroid className='w-16 h-16 mx-auto'></FaAndroid>
        <h1 className="my-auto mx-auto text-3xl font-bold">Spanish Instructor</h1>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Instructor;
