import React, { Component } from "react";
import JobItem from "./JobItem";

class Jobs extends Component {
  render() {
    const { jobs } = this.props;
    let jobContent = null;
    if (jobs) {
      jobContent = jobs.map((job, index) => <JobItem key={index} job={job} />);
    }
    return (
      <div className="jobs-wrapper">
        <h3 className="text-secondary">JOBS</h3>
        <div className="jobs">
          <table className="timeline">
            <tbody>{jobContent}</tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Jobs;
