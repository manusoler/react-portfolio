import React from "react";

const JobItem = props => {
  const { job } = props;
  return (
    <>
      <tr className="item-new">
        <td>
          {job.from} - {job.to}
        </td>
        <td>
          <strong>{job.company}</strong>
        </td>
      </tr>
      <tr>
        <td />
        <td>{job.desc}</td>
      </tr>
    </>
  );
};

export default JobItem;
