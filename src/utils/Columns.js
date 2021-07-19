import "./Columns.css";
import { ColumnFilter } from "../component/UI/Table/ColumnFilter/ColumnFilter";

export const DATA_COLUMNS = [
  {
    Header: "ID",
    accessor: "id",
    Filter: ColumnFilter,
  },
  {
    Header: "Name",
    accessor: "name",
    Filter: ColumnFilter,
  },
  {
    Header: "DurationInDays",
    accessor: "durationInDays",
    Filter: ColumnFilter,
  },
  {
    Header: "Score",
    accessor: "score",
    Filter: ColumnFilter,
    Cell: (row) => {
      return row.value > 90 ? (
        <div className="Green">{row.value}</div>
      ) : row.value < 70 ? (
        <div className="Red">{row.value}</div>
      ) : (
        <div>{row.value}</div>
      );
      //   row.styles["color"] = "#fff";
      //   row.styles["backgroundColor"] = row.value < 70 ? "red" : "white";
      //   row.styles["backgroundColor"] = row.value > 90 ? "green" : "white";
    },
  },
];

export const USER_COLUMNS = [
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Team",
    accessor: "Team",
  },
  {
    Header: "Photo",
    accessor: "avatar",
    Cell: (row) => {
      return <img className="Avatar" src={row.value} alt="avatar" />;
    },
  },
];
