import { memo } from "react";
import Table from "react-bootstrap/Table";
import { tableHeadings } from "../constants/constant";
import TableRow from "./TableRow";

const DetailTable = ({ className, data, title }) => {
  const headingValues = tableHeadings;
  return (
    <div className={className}>
      <h2 className="text-primary fw-bold fs-3 ms-2">{title}</h2>
      <div className="table__styling">
        <Table striped bordered hover className="text-center">
          <thead className="detail-table__heading bg-danger border-danger text-white">
            <tr>
              {headingValues?.map((item, index) => (
                <th key={index}>{item}</th>
              ))}
            </tr>
          </thead>
          <tbody className="detail-table__body">
            {data?.length > 0 ? (
              data?.map((item, index) => (
                <TableRow key={index} data={item} sno={index} />
              ))
            ) : (
              <tr>
                <td colSpan={tableHeadings.length}>No Details Found</td>
              </tr>
            )}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default memo(DetailTable);
