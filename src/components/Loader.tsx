
import { useState } from "react";

import { Button } from "./ui/button";
import img1 from "../assets/Animation - 1727890506284.gif"

const Loader = () => {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);

    // Simulate an API call or some async task
    setTimeout(() => {
      setLoading(false);
      alert("Task completed!");
    }, 4000); // 2 seconds delay to simulate a task
  };

  return (
    <div>
      <div>
        <button onClick={handleClick} disabled={loading}>
          {loading ? <img src={img1}  /> : <Button className="mt-10">Submit</Button>}
        </button>

        {/* {loading && <Skeleton className="h-12 w-12 rounded-full bg-gray-600" />} */}

        {/* You can replace the text "Loading..." with a spinner or any other loader graphic */}
      </div>

      {/* <div className="flex items-center space-x-4">
        <Skeleton className="h-12 w-12 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
      </div> */}
    </div>
  );
};

export default Loader;
