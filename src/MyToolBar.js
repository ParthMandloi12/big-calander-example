import React from "react";
import Toolbar from "react-big-calendar/lib/Toolbar";
export default class MyToolBar extends Toolbar {
  componentDidMount() {
    const view = this.props.view;
    console.log(view);
  }
  render() {
    return (
      <div>
        <div className="rbc-btn-group">
          <button type="button" onClick={() => this.props.handleChangedate()}>
            NewDate
          </button>
          <button type="button" onClick={() => this.props.prevDate()}>
            back
          </button>
          <button
            type="button"
            onClick={() => this.props.nextDay(new Date(2020, 11, 30))}
          >
            30 Dec
          </button>
          <button
            type="button"
            onClick={() => this.props.nextDay(new Date(2020, 11, 31))}
          >
            31 Dec
          </button>
          <button
            type="button"
            onClick={() => this.props.nextDay(new Date(2021, 0, 1))}
          >
            1 Jan
          </button>
          <button
            type="button"
            onClick={() => this.props.nextDay(new Date(2021, 0, 2))}
          >
            2 Jan
          </button>
          <button
            type="button"
            onClick={() => this.props.nextDay(new Date(2021, 0, 3))}
          >
            3 Jan
          </button>
          <button type="button" onClick={() => this.props.timesheetDate()}>
            ne
          </button>
        </div>
      </div>
    );
  }
}
