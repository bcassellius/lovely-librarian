import React from "react";


const StaffDirectory = (staff) => {
    return(
        <div>
            { staff.map(worker => (
                <div key={ worker._id }>
                    <div className="workerName">
                        Placeholer Name
                    </div>
                    <div className="workerInfo">
                        <div className="jobTitle">
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
                        </div>
                    </div>
                </div>
            )) }
        </div>
    );
}

// exporting... ... ...
export default StaffDirectory;