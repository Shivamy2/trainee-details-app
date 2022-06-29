import { memo } from "react";
import Table from "react-bootstrap/Table";
import { AiFillInfoCircle } from "react-icons/ai";
import { BsDownload } from "react-icons/bs";
import { tableHeadings } from "../constants/constant";

const DetailTable = ({ className, data }) => {
  const headingValues = tableHeadings;
  return (
    <div className={className}>
      <h2 className="text-primary fw-bold fs-2">Frontend</h2>
      <div style={{ overflowX: "auto" }}>
        <Table striped bordered hover className="text-center">
          <thead className="detail-table__heading">
            <tr>
              {headingValues?.map((item) => (
                <th>{item}</th>
              ))}
            </tr>
          </thead>
          <tbody className="detail-table__body">
            <tr>
              <td>1</td>
              <td>Shivam Yadav</td>
              <td>No</td>
              <td>
                <AiFillInfoCircle color="green" size={18} />
              </td>
              <td>
                <textarea
                  style={{
                    outline: "none",
                    border: "none",
                    backgroundColor: "transparent",
                    resize: "none",
                  }}
                  onKeyDown={(event) => {
                    if (event.key === "Enter") console.log("Enter pressed");
                  }}
                  placeholder="NA"
                  name=""
                  id=""
                  cols="20"
                  rows="1"
                  value={"This is textarea"}
                />
              </td>
              <td>
                <a href="www.google.com" download>
                  <BsDownload color="blue" size={20} />
                </a>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default memo(DetailTable);
