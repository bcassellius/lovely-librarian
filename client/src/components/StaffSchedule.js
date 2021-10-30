import React from 'react';
import saveTask from '../utils/script';

// import Auth from '../utils/auth';

function Schedule() {
    
    
    return (
        
        <div>
            <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    />
            <div>
                <h1>Schedule</h1>
                <p>What's up today?</p>
            </div>
            <div class="container">
                <div id="10a" class="row time-block">
                    <div class="col-3 hour">10am</div>
                    <textarea id="10a-text" class="col-8 description"></textarea>
                    <button class="col-1 saveBtn btn"><i class="far fa-save"></i></button>
                </div>
                <div id="11a" class="row time-block">
                    <div class="col-3 hour">11am</div>
                    <textarea id="11a-text" class="col-8 description"></textarea>
                    <button class="col-1 saveBtn btn"><i class="far fa-save"></i></button>
                </div>
                <div id="12p" class="row time-block">
                    <div class="col-3 hour">12pm</div>
                    <textarea id="12p-text" class="col-8 description"></textarea>
                    <button class="col-1 saveBtn btn"><i class="far fa-save"></i></button>
                </div>
                <div id="1p" class="row time-block">
                    <div class="col-3 hour">1pm</div>
                    <textarea id="1p-text" class="col-8 description"></textarea>
                    <button class="col-1 saveBtn btn"><i class="far fa-save"></i></button>
                </div>
                <div id="2p" class="row time-block">
                    <div class="col-3 hour">2pm</div>
                    <textarea id="2p-text" class="col-8 description"></textarea>
                    <button class="col-1 saveBtn btn"><i class="far fa-save"></i></button>
                </div>
                <div id="3p" class="row time-block">
                    <div class="col-3 hour">3pm</div>
                    <textarea id="3p-text" class="col-8 description"></textarea>
                    <button class="col-1 saveBtn btn"><i class="far fa-save"></i></button>
                </div>
                <div id="4p" class="row time-block">
                    <div class="col-3 hour">4pm</div>
                    <textarea id="4p-text" class="col-8 description"></textarea>
                    <button class="col-1 saveBtn btn"><i class="far fa-save"></i></button>
                </div>
                <div id="5p" class="row time-block">
                    <div class="col-3 hour">5pm</div>
                    <textarea id="5p-text" class="col-8 description"></textarea>
                    <button class="col-1 saveBtn btn"><i class="far fa-save"></i></button>
                </div>
                <div id="6p" class="row time-block">
                    <div class="col-3 hour">6pm</div>
                    <textarea id="8a-text" class="col-8 description"></textarea>
                    <button class="col-1 saveBtn btn"><i class="far fa-save"></i></button>
                </div>
                <div id="7p" class="row time-block">
                    <div class="col-3 hour">7pm</div>
                    <textarea id="9a-text"class="col-8 description"></textarea>
                    <button class="col-1 saveBtn btn"><i class="far fa-save"></i></button>
                </div>
            </div>
            <script src="../utils/script.js"></script>
        </div>
    )   

};

export default Schedule;