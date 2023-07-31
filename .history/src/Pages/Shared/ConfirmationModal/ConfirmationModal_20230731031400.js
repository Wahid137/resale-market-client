import React from 'react';

const ConfirmationModal = ({ title, successButtonName, message, closeModal, modalData, successAction }) => {
    return (
        <div>
            <input type="checkbox" id="confirmation-modal" className="modal-toggle" />
            <div className="modal" style={{ backgroundColor: "rgba(0, 0, 0, 0)" }}>
                <div className="modal-box bg-warning">
                    <h3 className="font-bold text-lg">{title}</h3>
                    <p className="py-4">{message}</p>
                    <div className="modal-action">
                        <label onClick={() => successAction(modalData)}
                            htmlFor="confirmation-modal"
                            className="btn btn-secondary">{successButtonName}</label>
                        <button onClick={closeModal} className="btn btn-outline hover:bg-secondary">cancel</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationModal;