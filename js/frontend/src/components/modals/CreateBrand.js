import React from "react";
import { Button, Form, Modal } from "react-bootstrap";

const CreateBrand = ({show,onHide}) =>{
    // const {device}=useContext(Context);

    return(
        <Modal
        show={show}
        onHide={onHide}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Добавить бренд
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='outline-danger' onClick={onHide}>Закрыть</Button>
          <Button variant='outline-sucsess' onClick={onHide}>Добавить</Button>
        </Modal.Footer>
      </Modal>
    )
}

export default CreateBrand;