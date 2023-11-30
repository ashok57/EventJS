import { useState } from "react";
import Form from "../components/Form";
import List from "../components/Listing";

export default function Home() {
  const [dataArr, setDataArr] = useState([]);
  return (
    <div className="">
      <h1>Create Event</h1>
      <Form setDataArr={setDataArr} />

      <h1>List of events</h1>
      <List data={dataArr} />
    </div>
  );
}
