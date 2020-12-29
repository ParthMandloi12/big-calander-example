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
  {
    id:"4",
    title:"Turf 4"
  },
  {
    id: "5",
    title: "Turf 5",
  },
  {
    id:"6",
    title:"Turf 6"
  },
  {
    id: "7",
    title: "Turf 7",
  },
  {
    id: "8",
    title: "Turf 8",
  },
  {
    id: "9",
    title: "Turf 9",
  },
  {
    id:"6",
    title:"Turf 10"
  },
  {
    id: "11",
    title: "Turf 11",
  },
  {
    id:"3",
    title:"Turf 12"
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
        title: "Blocked Due to other Poperty",
        resourceId: "1",
        start: new Date(2020, 11, 29, 11, 0, 0, 0),
        end: new Date(2020, 11, 29, 15, 0, 0, 0),
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
        start: new Date(2020, 11, 29, 6, 0, 0, 0),
        end: new Date(2020, 11, 29, 12, 0, 0, 0),
      },
      {
        title: "Pending",
        resourceId: "3",
        start: new Date(2020, 11, 29, 1, 0, 0, 0),
        end: new Date(2020, 11, 29, 6, 0, 0, 0),
      },
      {
        title: "Block",
        resourceId: "3",
        start: new Date(2020, 11, 29, 10, 0, 0, 0),
        end: new Date(2020, 11, 29, 15, 0, 0, 0),
      },
      {
        title: "Book",
        resourceId: "4",
        start: new Date(2020, 11, 29, 5, 0, 0, 0),
        end: new Date(2020, 11, 29, 10, 0, 0, 0),
      },
      {
        title: "Cancelled",
        resourceId: "6",
        start: new Date(2020, 11, 29, 1, 0, 0, 0),
        end: new Date(2020, 11, 29, 6, 0, 0, 0),
      },
      {
        title: "Book",
        resourceId: "6",
        start: new Date(2020, 11, 29, 10, 0, 0, 0),
        end: new Date(2020, 11, 29, 15, 0, 0, 0),
      },
      {
        title: "Block",
        resourceId: "7",
        start: new Date(2020, 11, 29, 6, 0, 0, 0),
        end: new Date(2020, 11, 29, 12, 0, 0, 0),
      },
      {
        title: "Pending",
        resourceId: "8",
        start: new Date(2020, 11, 29, 1, 0, 0, 0),
        end: new Date(2020, 11, 29, 6, 0, 0, 0),
      },
      {
        title: "Book",
        resourceId: "8",
        start: new Date(2020, 11, 29, 10, 0, 0, 0),
        end: new Date(2020, 11, 29, 15, 0, 0, 0),
      },
      {
        title: "Pending",
        resourceId: "3",
        start: new Date(2020, 3, 22, 3, 0, 0, 0),
        end: new Date(2020, 3, 22, 6, 0, 0, 0),
      },
      {
        title: "Blocked Due to other Poperty",
        resourceId: "1",
        start: new Date(2020, 3, 22, 5, 0, 0, 0),
        end: new Date(2020, 3, 22, 12, 0, 0, 0),
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
      // display: "flex",
      // justifyContent:"center",
      // alignItems:"center"
    };
    if (event.title === "Book") {
      style.backgroundColor = "brown";
      style.color="white";
    }
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
    if(event.title === "Blocked Due to other Poperty") {
      style.backgroundColor = "lightgray"
    }
    return {
      style: style,
    };
  }
  onSlotChange(slotInfo) {
    console.log(slotInfo,'info')
    let prevState = [...this.state.events];
    let newObj = {
      title: "Book",
      resourceId: slotInfo.resourceId,
      start: slotInfo.start,
      // end: slotInfo.end,
      end: moment(slotInfo.end).add(60, "m").toDate(), //add 30mins extra
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
  nextDay = (date) => {
    this.setState({
      date: date
    })
  }
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
          // format={"DD/MM/YYYY HH:mm"}
          view="day"
          resources={resources}
          selectable
          step={60}
          timeslots={1}
          onSelectEvent={(event) => this.onEventClick(event)}
          onSelectSlot={(event) => this.onSlotChange(event)}
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
                nextDay={this.nextDay}
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
