import React from "react";
import { Table } from "react-bootstrap";
const Tabel = ({ employees, editData, hapusData }) => {
  return (
    <Table striped bordered hover>
      <thead className="text-center">
        <tr>
          <th>#</th>
          <th>Nama Pegawai</th>
          <th>Jenis Kelamin</th>
          <th>Alamat</th>
          <th>Aksi</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((employee, index) => {
          console.log(employee);
          return (
            <tr key="index">
              <td>{index + 1}</td>
              <td>{employee.nama}</td>
              <td>{employee.handphone}</td>
              <td>{employee.alamat}</td>
              <td>
                <button
                  className="btn btn-warning"
                  onClick={() => editData(employee.id)}
                >
                  Edit
                </button>{" "}
                ||{" "}
                <button
                  className="btn btn-danger"
                  onClick={() => hapusData(employee.id)}
                >
                  Hapus
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default Tabel;
