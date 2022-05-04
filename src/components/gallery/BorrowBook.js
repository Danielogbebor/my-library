import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

const BorrowBook = () => {
  
  let history = useHistory(); //The useHistory hook gives you access to the history instance that you may use to navigate.
  const { id } = useParams();  //The useParams() hook helps us to access the URL parameters from a current route. 
  const [user, setUser] = useState({
    Book_name: "",
    Book_title: "",
    Book_price: "",
    Book_description: ""
  });

  const { Book_name, Book_title, Book_price, Book_description } = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async e => {
    e.preventDefault();
    await axios.post(`https://mi-linux.wlv.ac.uk/~2022188/codei4app/update-book/update/${id}`, user).then(response => {
      // return response.json();
      alert('Book successfully borrowed');
    // // history.push("/");
    window.location.reload(true);
    console.log(response);
  })
  };

  const loadUser = async () => {
    const result = await axios.get(`https://mi-linux.wlv.ac.uk/~2022188/codei4app/get_book/${id}`);
    setUser(result.data);
  };
  return (
    <div className="container mt-5 mb-5">
     <div className="row"> 
      <div className="col-sm-5 col-offset-3 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Borrow Book</h2>
        <form onSubmit={e => onSubmit(e)}>
        <div className="form-group">
            <label htmlFor=""> Id</label>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Id"
              name="id"
              value={id}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
          <label htmlFor=""> Title</label>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter book Name"
              name="book_name"
              value={Book_name}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <label htmlFor=""> Price</label>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter book Price"
              name="book_price"
              value={Book_price}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <label htmlFor=""> Select Duration</label>
            <select className="form-control form-control-lg" name="book_duration" >
              <option value="">Select Duration</option>
              <option value="1">1 day</option>
              <option value="2">2 days</option>
              <option value="7">7 days</option>
              <option value="14">14 days</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor=""> Price</label>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter book Title"
              name="book_price"
              value={Book_price}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
          <label htmlFor="">Book Description</label>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter book Description"
              name="book_description"
              value={Book_description}
              onChange={e => onInputChange(e)}
            />
          </div>
          <button className="btn btn-block" style={{backgroundColor: 'orange',fontWeight: 'bold',fontFamily:'Nunito'}}>Borrow Book</button>
        </form>
       </div>
      </div> 
    </div>
  );
};

export default BorrowBook;