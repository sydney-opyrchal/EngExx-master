
import "@fullcalendar/daygrid/main.css";  
import FullCalendar from "@fullcalendar/react";  
import dayGridPlugin from "@fullcalendar/daygrid";  
import React, { Component } from 'react' 
import './Calendarr.css'

 
const events = [{ title: "Today", date: new Date() },{ title: "Hanging", date: '2021-04-20'}];  
export class TheCalendar extends Component {  
    render() {  
        return (  
            <div className="container">  
                <div className="row title" style={{ marginTop: "20px" }} >  
                    <div class="col-sm-12 btn btn-info">  
                        Event Calendar  
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