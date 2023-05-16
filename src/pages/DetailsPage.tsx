import Axios from "axios";
import { useEffect, useState } from "react";
import DataTable from "../components/DataTable";

interface PostObject {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const DetailsPage = () => {
  const [data, setData] = useState<PostObject[]>([]);

  useEffect(() => {
    Axios.get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        const postsArray = response.data;
        setData(postsArray);
        // console.log("response: ", postsArray);
        // console.log("data: ", data[0]);
      })
      .catch((error) => {
        console.log("Error: " + error.message);
      });
  }, []);

  return (
    <div>
      {/* DetailsPage */}
      {/* {data?.map((item) => (
        <p key={item.id}>{item.id}</p>
      ))} */}
      <DataTable data={data} />
    </div>
  );
};

export default DetailsPage;
