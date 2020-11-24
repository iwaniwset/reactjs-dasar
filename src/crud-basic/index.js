import React, { Component } from "react";
import Tabel from "./Tabel";
import NavbarComponents from "./NavbarComponents";
import Formulir from "./Formulir";

export default class index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      employees: [],
      nama: "",
      handphone: "",
      alamat: "",
      id: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    if (this.state.id === "") {
      this.setState({
        employees: [
          ...this.state.employees,
          {
            id: this.state.employees.length + 1,
            nama: this.state.nama,
            handphone: this.state.handphone,
            alamat: this.state.alamat,
          },
        ],
      });
    } else {
      const unSelectedEmployee = this.state.employees
        .filter((employee) => employee.id !== this.state.id)
        .map((filterEmployee) => {
          return filterEmployee;
        });

      this.setState({
        employees: [
          ...unSelectedEmployee,
          {
            id: this.state.employees.length + 1,
            nama: this.state.nama,
            handphone: this.state.handphone,
            alamat: this.state.alamat,
          },
        ],
      });
    }

    this.setState({
      nama: "",
      handphone: "",
      alamat: "",
      id: "",
    });
  };

  editData = (id) => {
    // console.log("ID : ", id);
    const selectedEmployee = this.state.employees
      .filter((employee) => employee.id === id)
      .map((filterEmployee) => {
        return filterEmployee;
      });

    this.setState({
      nama: selectedEmployee[0].nama,
      handphone: selectedEmployee[0].handphone,
      alamat: selectedEmployee[0].alamat,
      id: selectedEmployee[0].id,
    });
  };

  hapusData = (id) => {
    const newEmployees = this.state.employees
      .filter((employee) => employee.id !== id)
      .map((filterEmployee) => {
        return filterEmployee;
      });

    this.setState({
      employees: newEmployees,
    });
  };

  render() {
    return (
      <div>
        <NavbarComponents />
        <div className="container mt-4">
          <h2>Tabel React-Js</h2>
          <Tabel
            employees={this.state.employees}
            editData={this.editData}
            hapusData={this.hapusData}
          />
          <Formulir
            {...this.state}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        </div>
      </div>
    );
  }
}
