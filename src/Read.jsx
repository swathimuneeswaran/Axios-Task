import React from "react";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

function Read() {
  const [data, setData] = useState({});

  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="d-flex w-100 vh-100 justify-content-center align-items-center " style={{backgroundColor:"lightpink"}}>
        <div className="w-50 border bg-shite shadow px-5 pt-3 pb-5 rounded"style={{backgroundColor:"white"}}>
          <h3>Detail of user</h3>
          <div className="mb-2">
            <strong>Name: {data.name}</strong>
          </div>
          <div className="mb-2">
            <strong>User Name: {data.username}</strong>
          </div>
          <div className="mb-2">
            <strong>Email: {data.email}</strong>
          </div>
          <div className="mb-2">
            <strong>Phone: {data.phone}</strong>
          </div>

          <Link to={`/update/${id}`} className="btn btn-success ">
            Edit
          </Link>
          <Link to="/" className="btn btn-primary">
            Back
          </Link>
        </div>
      </div>
    </>
  );
}

export default Read;
