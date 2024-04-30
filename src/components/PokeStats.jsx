import React from "react";

function PokeStats({ stats }) {
  return (
    <table className="table table-borderless">
      <tbody>
        {stats?.map((stat) => (
          <tr key={stat.stat.name}>
            <th scope="row">
              <span className="text-capitalize">{stat.stat.name}</span>
            </th>
            <td>
              <div className="d-flex">
                <div style={{ marginRight: 10, width: 27 }}>
                  {stat.base_stat}
                </div>
                <div className="progress" style={{ width: 150 }}>
                  <div
                    className="progress-bar bg-danger"
                    style={{ width: `${stat.base_stat}%` }}
                  ></div>
                </div>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default PokeStats;
