import React, { Component } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import MyToolBar from "./MyToolBar";
import "./App.css";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);
const resources = [
  {
    id: "1",
    title: "Turf 1",
  },
  {
    id: "2",
    title: "Turf 2",
  },
  {
    id: "3",
    title: "Turf 3",
  },
];
function EventAgenda({ event }) {
  return (
    <span>
      <em style={{ color: "magenta" }}>{event.title}</em> <p>{event.desc}</p>
    </span>
  );
}
class App extends Component {
  state = {
    date: new Date(2020, 11, 29),
    events: [
      {
        title: "Book",
        resourceId: "1",
        start: new Date(2020, 11, 29, 5, 0, 0, 0),
        end: new Date(2020, 11, 29, 10, 0, 0, 0),
      },
      {
        title: "Block",
        resourceId: "2",
        start: new Date(2020, 11, 29, 2, 0, 0, 0),
        end: new Date(2020, 11, 29, 4, 0, 0, 0),
      },
      {
        title: "Cancelled",
        resourceId: "2",
        start: new Date(2020, 11, 29, 4, 0, 0, 0),
        end: new Date(2020, 11, 29, 6, 0, 0, 0),
      },
      {
        title: "Pending",
        resourceId: "3",
        start: new Date(2020, 3, 22, 3, 0, 0, 0),
        end: new Date(2020, 3, 22, 6, 0, 0, 0),
      },
    ],
  };
  eventStyleGetter(event, start, end, isSelected) {
    var backgroundColor = "#" + event.hexColor;
    var style = {
      backgroundColor: backgroundColor,
      borderRadius: "4px",
      opacity: 0.8,
      color: "black",
      border: "0px",
      display: "block",
    };
    if (event.title === "Cancelled") {
      style.backgroundColor = "lightgreen";
    }
    if (event.title === "Block") {
      style.backgroundColor = "gray";
    }
    if (event.title === "Pending") {
      style.border = "1px solid blue";
      style.backgroundColor = "white";
      style.color = "blue";
    }
    return {
      style: style,
    };
  }
  onSlotChange(slotInfo) {
    let prevState = [...this.state.events];
    let newObj = {
      title: "Book",
      resourceId: slotInfo.resourceId,
      start: slotInfo.start,
      // end: slotInfo.end,
      end: moment(slotInfo.end).add(30, "m").toDate(), //add 30mins extra
    };
    prevState.push(newObj);
    this.setState({
      events: prevState,
    });
  }
  onEventClick(event) {
    console.log(event, "event"); //Shows the event details provided while booking
  }
  timesheetDate = () => {
    let change = new Date(2020, 10, 1);
    this.setState({
      date: change,
    });
  };
  handleBack = () => {
    let prev = new Date(2020, 11, 29);
    this.setState({
      date: prev,
    });
  };
  handleChangedate = () => {
    let nDate = new Date(2020, 3, 22);
    this.setState({
      date: nDate,
    });
  };
  render() {
    let shortDate = moment(this.state.date).format("MMM Do YY");
    return (
      <div className="App">
        <span>{shortDate}</span>
        <Calendar
          localizer={localizer}
          date={this.state.date}
          defaultDate={this.state.date}
          events={this.state.events}
          // style={{ height: "100vh" }}
          view="day"
          resources={resources}
          selectable
          step={60}
          timeslots={1}
          onSelectEvent={(event) => this.onEventClick(event)}
          onSelectSlot={(slotInfo) => this.onSlotChange(slotInfo)}
          eventPropGetter={this.eventStyleGetter}
          components={{
            // event: Event,
            // timeGutterHeader: <p>Property</p>, // <----- Exists in PR #874
            toolbar: (props) => (
              <MyToolBar
                {...props}
                timesheetDate={this.timesheetDate}
                prevDate={this.handleBack}
                handleChangedate={this.handleChangedate}
              />
            ),
            agenda: {
              event: EventAgenda,
            },
          }}
        />
      </div>
    );
  }
}

export default App;
