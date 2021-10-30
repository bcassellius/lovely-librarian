import React from "react";
import 'react-router-dom';


const StaffList = ({ staff, staffName }) => {

    if(!staff || !staff.length) {
        return <p className="bg-dark text-light p-3">No Staff members added yet!</p>
    };


    return(
        <div>
            <h3>{ staffName }</h3>
            { staff &&
                staff.map(worker => (
                    <div key={ worker._id }>
                        <div className="workerName">
                            Placeholer Name
                        </div>
                        <div className="infoContainer">
                            <ul className="workerInfo">
                                <li>
                                    { worker.title }
                                </li>
                                <li>
                                    { worker.extension }
                                </li>
                                <li>
                                    { worker.officeNumber }
                                </li>
                                <li>
                                    { worker.email }
                                </li>
                            </ul>


                            {/* <div className="jobTitle">
                                Placeholder Info
                            </div>
                            <div className="phoneExt">
                                Placeholder Info
                            </div>
                            <div className="officeNumber">
                                Placeholder Info
                            </div>
                            <div className="email">
                                Placeholder Info
                            </div> */}
                        </div>
                    </div>
            )) }
        </div>
    );
}

// exporting... ... ...
export default StaffList;