import Axios from "axios";
import { useEffect, useState } from "react";
import DataTable from "../components/DataTable";
import Department from "../components/Department";

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
      })
      .catch((error) => {
        console.log("Error: " + error.message);
      });
  }, []);

  return (
    <div>
      <DataTable data={data} />
      <Department />
    </div>
  );
};

export default DetailsPage;
