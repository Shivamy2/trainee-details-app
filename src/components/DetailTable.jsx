import { memo, useEffect, useRef, useState } from "react";
import Table from "react-bootstrap/Table";
import { tableHeadings } from "../constants/constant";
import TableRow from "./TableRow";

const DetailTable = ({ className, data, title }) => {
  const headingValues = tableHeadings;
  const [tableHeight, setTableHeight] = useState(200);
  const tableRef = useRef(null);
  useEffect(() => {
    let tableBodyHeight = 0;
    let children = tableRef.current?.childNodes;
    for (var i = 0; i < 5; ++i) {
      tableBodyHeight += children[i]?.clientHeight;
    }
    setTableHeight(tableBodyHeight);
  }, []);
  console.log("table height", tableHeight);
  return (
    <div className={className}>
      <h2 className="text-primary fw-bold fs-3 ms-2">{title}</h2>
      <div className="table__styling">
        <Table
          striped
          bordered
          hover
          className="text-center table__styling__style"
        >
          <thead className="detail-table__heading bg-danger border-danger text-white table__styling__row">
            <tr>
              {headingValues?.map((item, index) => (
                <th key={index}>{item}</th>
              ))}
            </tr>
          </thead>
          <tbody
            ref={tableRef}
            className="detail-table__body"
            style={{
              height: `${tableHeight}px`,
            }}
          >
            {data?.length > 0 ? (
              data?.map((item, index) => (
                <TableRow
                  className={"table__styling__row"}
                  key={index}
                  data={item}
                  sno={index}
                />
              ))
            ) : (
              <tr className="table__styling__row">
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
