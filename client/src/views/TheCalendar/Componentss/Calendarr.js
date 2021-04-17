
import "@fullcalendar/daygrid/main.css";  
import FullCalendar from "@fullcalendar/react";  
import dayGridPlugin from "@fullcalendar/daygrid";  
import React, { Component } from 'react'  

 
const events = [{ title: "Today", date: new Date() }];  
export class TheCalendar extends Component {  
    render() {  
        return (  
            <div className="container">  
                <div className="row title" style={{ marginTop: "20px" }} >  
                    <div class="col-sm-12 btn btn-info">  
                        FullCalendar In React Application  
               </div>  
                </div>  
                <FullCalendar  
                    defaultView="dayGridMonth"  
                    plugins={[dayGridPlugin]}  
                    events={events}  
                />  
            </div>  
        )  
    }  
}



export default TheCalendar  