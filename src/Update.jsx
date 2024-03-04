import React from 'react';
import { Link,useNavigate,useParams } from 'react-router-dom';
import { useState,useEffect } from 'react';
import axios from 'axios'

function Update() {
    // const [data, setData] = useState({});

    const { id } = useParams();

    const [values, setValues] = useState({
        name: '',
        username: '',
        email: '',
        phone: ''
      })
      const navigate=useNavigate();

    useEffect(() => {
      axios
        .get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => {
         setValues(res.data);
        })
        .catch((err) => console.log(err));
    }, []);

    const handleUpdate=(event)=>
    {
        event.preventDefault();
        axios
        .put("https://jsonplaceholder.typicode.com/users/"+id, values)
        .then(res => {
          console.log(res);
          navigate('/')
        })
        .catch(err => console.log(err));
    }
  return (
    <>
      <div
        className="d-flex w-100 vh-100 justify-content-center align-items-center "
        style={{ backgroundColor: "skyblue" }}
      >
        <div className="w-50 border bg-white shadow px-5 pt-3 pb-5 rounded">
          <h1>Update User</h1>
          <form onSubmit={handleUpdate}>
            <div className="mb-2">
              <label htmlFor="name"></label>
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Enter name"
                value={values.name}
                onChange={e => setValues({ ...values, name: e.target.value })}
              />
            </div>
            <div className="mb-2">
              <label htmlFor="username"></label>
              <input
                type="text"
                name="username"
                className="form-control"
                placeholder="Enter Username"
                value={values.username}
                onChange={e => setValues({ ...values, username: e.target.value }) }
               
              />
            </div>
            <div className="mb-2">
              <label htmlFor="email"></label>
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Enter a valid Email"
                value={values.email}
                onChange={e => setValues({ ...values, email: e.target.value }) }
               
              />
            </div>
            <div className="mb-2">
              <label htmlFor="phone"></label>
              <input
                type="text"
                name="phone"
                className="form-control"
                placeholder="Enter a phone number"
                value={values.phone}
                onChange={e => setValues({ ...values, phone: e.target.value }) }
                
              />
            </div>
            <button className="btn btn-success">Update</button>
            <Link to="/" className="btn btn-primary ms-3">
              Back
            </Link>
          </form>
        </div>
      </div>
    </>
  );
}

export default Update