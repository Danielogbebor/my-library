import React, {Component} from 'react'
import axios from 'axios'
class Book extends Component {
state = {
  book_name: "",
  book_title: "",
  book_price: "",
  book_description: "",
  book: ""
} 
constructor(props)
{
  super(props);
  this.addFormData = this.addFormData.bind(this); 
}

onChange = e => {
    this.setState({
        book:e.target.files[0]
    })
 }

addFormData(e)
{
    e.preventDefault();
    const formData = new FormData();
    formData.append('book_name', this.state.book_name)
    formData.append('book_title', this.state.book_title)
    formData.append('book_price', this.state.book_price)
    formData.append('book_description', this.state.book_description)
    formData.append('book', this.state.book)

    var headers = {
      'Content-Type': 'application/json',
      "Access-Control-Allow-Origin": "*"
    }

    axios.post('https://mi-linux.wlv.ac.uk/~2022188/codei4app/do_upload', formData, headers)
    .then(function (response) {
       //handle success
       console.log(formData)
       console.log(response)
       alert('book added successfully')
      console.log("success")
      window.location("/");
  })
  .catch(function (response) {
      //handle error
      console.log(response)
      console.log("sorry")
  });
}

render()
{
    return (
      <div className="container bg-light mt-5 mb-5" style={{fontFamily: 'Nunito', color: '#000115'}}>
          <div class="row">  
            <div className="col-12 mx-auto shadow p-5">
              <h2 className="text-center mb-4">Add  Book </h2>
                <form className="form-wrappers">

                      <div className="form-group mt-3 mb-2">
                          <label className="text">Book name :</label>
                            <input className="form-control form-control-lg" type="text" placeholder="Book Name" name="book_name" required value={this.state.book_name}
                            onChange={e => this.setState({ book_name: e.target.value })}/>
                      </div>

                      <div className="form-group mt-3 mb-2">
                        <label className="text">Book title :</label>
                          <input className="form-control form-control-lg " type="text" placeholder="Book Title" name="book_title" required value={this.state.book_title}
                          onChange={e => this.setState({ book_title: e.target.value })}/>
                      </div>

                      <div className="form-group mt-3 mb-2">
                        <label className="text">Book price :</label>
                          <input className="form-control form-control-lg " type="text" placeholder="Book Price" name="book_price" required value={this.state.book_price}
                          onChange={e => this.setState({ book_price: e.target.value })}/>
                      </div>

                      <div className="form-group mt-3 mb-2">
                          <label className="text">Book description:</label>
                            <input className="form-control form-control-lg " type ="text" placeholder="Book description" name="book_description" required value={this.state.book_description}
                            onChange={e => this.setState({ book_description: e.target.value })}/>
                      </div>

                      <div className="form-group mt-3 mb-2">
                          <label className="text">Book Cover :</label>
                          <input type="file" accept=".pdf,.jpg,.jpeg,.png,.doc,.docx" className="" name="book"
                            onChange={this.onChange}/>
                      </div>

                      <div className="form-group">
                          <button className="btn btn-block" style={{fontFamily: 'Nunito',background: 'orange', color: '#000115'}} onClick={e => this.addFormData(e)}>Add book</button>
                      </div>
                </form>

            </div>
          </div>
      </div>

    );
  }
}

export default Book;