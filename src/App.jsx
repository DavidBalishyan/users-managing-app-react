import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

document.title = "User management";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "David",
      users: [
        { name: "Ani", surname: "Poghosyan", age: 25 },
        { name: "Karapet", surname: "Melqonyan", age: 26 },
        { name: "Sargis", surname: "Manukyan", age: 27 },
        { name: "Mark", surname: "Sargsyan", age: 28 },
        { name: "Narek", surname: "Karapetyan", age: 29}
      ],
    };
  }

  delete(index) {
    const arr = this.state.users.filter((_, ind) => {
      console.log(ind !== index);
      return(ind !== index)
    })
    console.log(arr, index)
    this.setState({users: arr})
  } 

  render() {
    return (
      <div className="container">
        <h1 className="display-3">Hello, {this.state.name}!</h1>
        <table className="table table-dark">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Surname</th>
              <th>Age</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.users.map((value, index) => {
              return (
                <React.Fragment>
                  <tr key={index}>
                    <th>{index + 1}</th>
                    <td>{value.name}</td>
                    <td>{value.surname}</td>
                    <td>{value.age}</td>
                    <td>
                      <button className="btn btn-outline-danger" onClick={() => {
                        this.delete(index)
                      }}>Delete</button>
                    </td>
                  </tr>
                </React.Fragment>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }

}

export default App;
