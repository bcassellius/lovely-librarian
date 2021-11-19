import React from "react";
import './CalModal.css';

function CalModal({ closeModal }) {
    return(
        <div className="modalBackdrop">
            <div className="modalContainer">
                <div className="titleCloseBtn">
                    <button onClick={() => closeModal(false)}> X </button>
                </div>
                <div className="title">
                    <h3 className="modalTitle">Add Event</h3>
                </div>
                <div className="modalBody">
                    <div className="staffSearchInput">
                        <h4>Event Name: </h4>
                        <input
                            type="text"
                            className="searchInput border-info text-info"
                            placeholder="What are we doing?"
                        />
                    </div>
                    <div className="staffSearchInput">
                        <h4>Event Description(optional): </h4>
                        <input
                            type="text"
                            className="searchInput border-info text-info"
                            placeholder="More Deatils?"
                        />
                    </div>
                    <div className="staffSearchInput">
                        <h4>What time?</h4>
                        {/* Maybe add a dropdown button(or something) here that allows you to select different times throught the day during library open hours */}
                    </div>
                </div>
                <div className="footer">
                    <button>Submit</button>
                    <button id="cancelBtn" onClick={() => closeModal(false)}>Cancel</button>
                </div>
            </div>
        </div>
    )
}

export default CalModal;
