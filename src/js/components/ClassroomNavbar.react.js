var React = require('react');
var Router = require('react-router');
var Link = Router.Link;


var ClassroomNavbar = React.createClass({
  handleAttendance: function(){
    this.props.onAttendanceClick();
  },

  showTimerOptions: function(){
    this.props.showTimerOptions();
  },

  pickRandom: function(){
    this.props.randStudent();
  },

  pickGroup: function(){
    this.props.randGroup();
  },

  render: function() {
    var url = '#/reportsDashboard/' + this.props.classId;
    return (
      <nav className="classroomNavbar container navbar navbar-default">
        <div className="container-fluid">
          <div id="navbar" className="navbar-collapse collapsed">
            <ul className="nav navbar-nav">
              <li>
                <a onClick={this.handleAttendance}><i className="fa fa-check-square-o"> Attendance</i></a>
              </li>
            </ul>
            <ul className="nav navbar-nav">
              <li>
                <a onClick={this.pickRandom}><i className="fa fa-random"> Random</i></a>
              </li>
            </ul>
            <ul className="nav navbar-nav">
              <li>
                <a onClick={this.pickGroup}><i className="fa fa-users"> Group</i></a>
              </li>
            </ul>
            <ul className="nav navbar-nav">
              <li>
                <a onClick={this.showTimerOptions}><i className="fa fa-clock-o"> Timer</i></a>
              </li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li>
                <a href={url}><i className="fa fa-pie-chart"> Reports</i></a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }

});

module.exports = ClassroomNavbar;
