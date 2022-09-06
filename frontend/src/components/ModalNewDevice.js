import React from 'react';
import Modal from 'react-modal';
import AddIcon from '../assets/images/+.svg'
import Styled from 'styled-components'
import addDevice from '../api'



const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    display:'flex',
    flexDirection: 'column'
  }
};

const ModalStyle = Styled.div `
    min-height:55px;
    background-color:#072230;
    display flex;
    flex-direction: column;
    align-items: center;
    padding-left:5vw;
    padding-right:5vw;
    margin-bottom: 15px;
    justify-content:space-between;
    color:white;
`



Modal.setAppElement('#root');
function ModalNewDevice() {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [MAC, setMAC] = React.useState("")
  const [description, setDescription] = React.useState("")


  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }
  function onSubmit(e){
    e.preventDefault();
    addDevice(MAC, description);
    setIsOpen(false);
  }
  function onMacChange(e){
    e.preventDefault();
    setMAC(e.target.value)
  }
  function onDescriptionChange(e){
    e.preventDefault();
    setDescription(e.target.value)
  }

  return (
    <div>
      <input className="test" onClick={openModal} type="image" src={AddIcon} alt="Add device"/>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <ModalStyle>
          <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Add a device</h2>
          <button onClick={closeModal}>close</button>
          <form onSubmit={onSubmit}>
            <input type="text" placeholder="Mac address" onChange={onMacChange}/>
            <input type="text" placeholder="Description" onChange={onDescriptionChange}/>
            <button type="submit" value="Submit" >Add</button>
          </form>
          </ModalStyle>
          
        </Modal>
      
    </div>
  );
}

export default ModalNewDevice