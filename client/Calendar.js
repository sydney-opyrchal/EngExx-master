import React, { Component } from 'react';
import moment from 'moment';

export class Calendar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      date: moment(),
    }
  }
  createDaysOfMonth(refDate) {
    const date = moment(refDate).endOf('month');
    const lastDate = date.date();
    const firstWeekday = date.startOf('month').day();
  
    const calendarDays = [];
  
    const today = moment();
  
    for (let w=0; w<firstWeekday; w++) {
      calendarDays.push(<div key={Math.random()}/>); // empty days
    }
  
    for (let d=1; d<lastDate; d++) {
      calendarDays.push(<div key={d} today={date.date(d).isSame(today, 'day')}>{d}</div>);
    }
  
    while (calendarDays.length % 7 !== 0) {
      calendarDays.push(<div key={Math.random()}/>);
    }
  
    return calendarDays;
  }

  prevMonth() {
    this.setState({date: this.state.date.subtract(1, 'month')})
  }
  
  nextMonth() {
    this.setState({date: this.state.date.add(1, 'month')})
  }
  render() {
    return <div>
      <h2>{this.state.date.format('MMMM YYYY')}</h2>
      <div>
        <button onClick={this.prevMonth.bind(this)}>&lt;</button>
        <button onClick={this.nextMonth.bind(this)}>&gt;</button>
      </div>
      <div>
        <div>Sunday</div>
        <div>Monday</div>
        <div>Tuesday</div>
        <div>Wednesday</div>
        <div>Thursday</div>
        <div>Friday</div>
        <div>Saturday</div>
        {this.createDaysOfMonth(this.state.date)}
      </div>
    </div>;
  }
}