import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
const Formulir = ({
  nama,
  handphone,
  alamat,
  handleChange,
  handleSubmit,
  id,
}) => {
  return (
    <div className="mt-5">
      <Row>
        <Col>
          <h4>{id ? "Edit Data" : "Tambah Data"}</h4>
          <hr />
        </Col>
      </Row>
      <Row>
        <Col>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Nama Pegawai</Form.Label>
              <Form.Control
                type="text"
                placeholder="Masukan Nama Anda .."
                name="nama"
                value={nama}
                onChange={(event) => handleChange(event)}
              />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>No Handphone</Form.Label>
              <Form.Control
                type="text"
                placeholder="Masukan No. handphone Anda .."
                name="handphone"
                value={handphone}
                onChange={(event) => handleChange(event)}
              />
            </Form.Group>
            <Form.Group controlId="gender">
              <Form.Label>Alamat</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Masukan Alamat Anda .."
                name="alamat"
                value={alamat}
                onChange={(event) => handleChange(event)}
              />
            </Form.Group>
            <Button variant="success" type="submit" className="mb-3">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
};
export default Formulir;
