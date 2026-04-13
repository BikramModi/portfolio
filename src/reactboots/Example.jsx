import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';




function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>


      <Button variant="primary" className='w-24 ' onClick={handleShow}>

     <div className="sm:font-bold text-black hover:text-white ">Hire Me</div> 
         
      </Button>

      

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Hire Me!</Modal.Title>
        </Modal.Header>
        <Modal.Body>You can contact me via email:  gamerboy199711@gmail.com</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example;