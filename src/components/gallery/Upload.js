import React, {Component} from 'react'
import axios from 'axios'
class Image extends Component {
state = {
    first_name: '',
    last_name: '',
    password: '',
    date_of_birth: '',
    gender: '',
    id_proof: '',
    address: '',
    mobile: '',
    email: '',
} 
constructor(props)
{
  super(props);
  this.addFormData = this.addFormData.bind(this); 
}

onChange = e => {
    this.setState({
        id_proof:e.target.files[0]
    })
 }

addFormData(e)
{
    e.preventDefault();
    const formData = new FormData();
    formData.append('first_name', this.state.first_name)
    formData.append('last_name', this.state.last_name)
    formData.append('password', this.state.password)
    formData.append('date_of_birth', this.state.date_of_birth)
    formData.append('gender', this.state.gender)
    formData.append('id_proof', this.state.id_proof)
    formData.append('address', this.state.address)
    formData.append('mobile', this.state.mobile)
    formData.append('email', this.state.email)

    var headers = {
      'Content-Type': 'application/json',
      "Access-Control-Allow-Origin": "*"
    }

    axios.post('https://mi-linux.wlv.ac.uk/~2022188/codei4app/php-react-rest-api-crud/post.php', formData, headers)
    .then(function (response) {
       //handle success
      console.log(response)
      console.log("success")
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
        <div className="main">

            <header className="signup-header">
                <h1 className="h1">Create Account</h1>
            </header>

            <div className="container" >
                <form className="form-wrappers">
                    <table>
                    <tbody>
                      <tr>
                        <td><label className="text">First Name :</label></td>
                        <td><input className="input" type="text" placeholder="First Name" name="firstname" required value={this.state.first_name}
                        onChange={e => this.setState({ first_name: e.target.value })}/></td>
                      </tr>

                      <tr>
                        <td><label className="text">Last Name :</label></td>
                        <td><input className="input" type="text" placeholder="Last Name" name="lastname" required value={this.state.last_name}
                         onChange={e => this.setState({ last_name: e.target.value })}/></td>
                      </tr>


                      <tr>
                        <td><label className="text">Create Password:</label></td>
                        <td><input className="input" type ="password" placeholder="Enter your password" name="password" required value={this.state.password}
                         onChange={e => this.setState({ password: e.target.value })}/></td>
                      </tr>


                       <tr>
                        <td><label className="text">Date of Birth :</label></td>
                        <td><input className="input" type="date" name="dob" required value={this.state.date_of_birth}
                        onChange={e => this.setState({ date_of_birth: e.target.value })}/></td>
                      </tr>


                      <tr>
                        <td><label className="text">Gender :</label></td>
                        <td><input className="input" type="radio" value="female" name="gender" 
                        //value={this.state.gender}
                         onChange={e => this.setState({ gender: e.target.value })}/>Female
                        <input className="input" type="radio" value="male" name="gender" 
                        //value={this.state.gender}
                        onChange={e => this.setState({ gender: e.target.value })}/>Male</td>
                      </tr>


                      <tr>
                        <td><label className="text">ID Proof :</label></td>
                        <td>(Voter ID/Adhaar Card/PAN Card)<input type="file" accept=".pdf,.jpg,.jpeg,.png,.doc,.docx" name="id_proof"
                        onChange={this.onChange}/></td>
                      </tr>


                      <tr>
                        <td><label className="text">Address :</label></td>
                        <td><textarea className="input" placeholder="Provide Full Address" name="addr" required   value={this.state.address}
                        onChange={e => this.setState({ address: e.target.value })}></textarea></td>
                      </tr>


                      <tr>
                        <td><label className="text">Mobile Number :</label></td>
                        <td><input className="input" placeholder="Enter mobile number" type="tel" pattern="[6789][0-9]{9}" maxLength="10" name="phone" required value={this.state.mobile}
                         onChange={e => this.setState({ mobile: e.target.value })}/></td>
                      </tr>


                      <tr>
                        <td>
                          <label className="text">E-mail :</label>
                        </td>
                        <td>
                          <input type="email" placeholder="Enter e-mail" name="email" required value={this.state.email}
                             onChange={e => this.setState({ email: e.target.value })}/>
                        </td>
                      </tr>

                      </tbody>
                </table>
                <button className="button" onClick={e => this.addFormData(e)}>Save & continue</button>
                </form>

            </div>

        </div>

    );
  }
}

export default Image;