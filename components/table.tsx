import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { handleGetOnlyTime } from "../utils/dataModifiers";
import { Button, Stack } from "@mui/material";

interface Props {
  rows: any;
  handleClick?: any;
}
const StudentsTable: React.FC<Props> = ({ rows, handleClick }) => {
  const [status, setStatus] = useState(false);
  const checkStatus = () => {
    rows.forEach((row: any, index: any) => {
      let date = new Date();
      console.log(date);
      let endDay = new Date(row?.checkOutTime);
      console.log(endDay);
      if (endDay == date) {
        setStatus(true);
      }
    });
  };
  useEffect(() => {
    checkStatus();
  }, [rows]);
  return (
    <>
      <Stack sx={{ mb: 3 }} direction="row" justifyContent={"space-between"}>
        <Typography fontSize={"22px"} fontWeight={600} textAlign="center">
          {" "}
          Showing the list of all the students
        </Typography>
        <Button variant="contained" onClick={handleClick}>
          Add new Student
        </Button>
      </Stack>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Roll Number</TableCell>
              <TableCell align="right">Check in time</TableCell>
              <TableCell align="right">Check out time</TableCell>
              <TableCell align="right">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row: any) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row?.rollNumber}</TableCell>
                <TableCell align="right">
                  {handleGetOnlyTime(row?.checkInTime)}
                </TableCell>
                <TableCell align="right">
                  {handleGetOnlyTime(row?.checkOutTime)}
                </TableCell>
                <TableCell
                  sx={{ color: status ? "green" : "red", fontWeight: 700 }}
                  align="right"
                >
                  {status ? "Present" : "Absent"}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default StudentsTable;
