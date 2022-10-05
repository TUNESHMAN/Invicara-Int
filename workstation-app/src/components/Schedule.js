import React from "react";
import { useParams } from "react-router-dom";
import data from "../hardCodedData/data";
import "./schedule.css";
function Schedule(props) {
  const { id } = useParams();

  const filteredData = data.filter((schedule) => schedule.workStationId == id);
  return (
    <div>
      {filteredData.map((schedule) => (
        <table>
          <tr>
            <th>Desk Number</th>
            {schedule.timeSlotsAvailable.map((time) => (
              <th>{time.time}</th>
            ))}
          </tr>
          <tr>
            <td>{schedule.workStationId}</td>
            {schedule.timeSlotsAvailable.map((availableTime) => (
              <td>{availableTime.Availability}</td>
            ))}
          </tr>
        </table>
      ))}
    </div>
  );
}

export default Schedule;
