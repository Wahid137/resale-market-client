import React from 'react';

const ConfirmationModal = ({ title, successButtonName, message, closeModal, modalData, successAction }) => {
    return (
        /*   <div>
              <input type="checkbox" id="confirmation-modal" className="modal-toggle" />
              <div className="modal" style={{ backgroundColor: "rgba(0, 0, 0, 0)" }}>
                  <div className="modal-box" style={{ backgroundColor: "rgba(0, 0, 0, 0)" }}>
                      <h3 className="font-bold text-lg">{title}</h3>
                      <p className="py-4">{message}</p>
                      <div className="modal-action">
                          <label onClick={() => successAction(modalData)}
                              htmlFor="confirmation-modal"
                              className="btn btn-primary">{successButtonName}</label>
                          <button onClick={closeModal} className="btn btn-outline">cancel</button>
                      </div>
                  </div>
              </div>
          </div> */
        <div>
            {/* The button to open modal */}
            <label htmlFor="my_modal_7" className="btn">open modal</label>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my_modal_7" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="text-lg font-bold">Hello!</h3>
                    <p className="py-4">This modal works with a hidden checkbox!</p>
                </div>
                <label className="modal-backdrop" htmlFor="my_modal_7">Close</label>
            </div>
        </div>
    );
};

export default ConfirmationModal;