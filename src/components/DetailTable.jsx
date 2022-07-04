import { memo, useEffect, useRef, useState } from "react";
import Table from "react-bootstrap/Table";
import { tableHeadings } from "../constants/constant";
import Modal from "./Modal";
import Skills from "./Skills";
import TableRow from "./TableRow";

const DetailTable = ({ className, data, title }) => {
  const headingValues = tableHeadings;
  const [modalOpen, setModalOpen] = useState(false);
  const [clickedSkill, setClickedSkill] = useState();
  const [tableHeight, setTableHeight] = useState();
  const tableRef = useRef(null);
  const traineeInModal = data?.[clickedSkill];
  useEffect(() => {
    let tableBodyHeight = 0;
    let children = tableRef.current?.childNodes;
    for (var i = 0; i < data.length; ++i) {
      if (i >= 5) break;
      console.log(children[i]?.clientHeight);
      // tableBodyHeight += children[i]?.clientHeight;
      tableBodyHeight += 56;
    }
    console.log("Table body height", tableBodyHeight);
    setTableHeight(tableBodyHeight + 2);
  }, [data?.length]);

  return (
    <div className={className}>
      {modalOpen && (
        <Modal showClose={true} setModalOpen={setModalOpen}>
          <div>
            <h3 className="fw-bold text-uppercase modal__heading">Skills</h3>
            <em>{traineeInModal?.name}</em>
            <div className="mt-4">
              <Skills
                title={"Professional"}
                data={traineeInModal?.skills?.professional}
              />
              <Skills
                title={"Technical"}
                data={traineeInModal?.skills?.technical}
              />
            </div>
          </div>
        </Modal>
      )}
      <h2 className="detail-table__title fw-bold fs-3 ms-2">{title}</h2>
      <div className="table__styling">
        <Table
          striped
          bordered
          hover
          className="text-center table__styling__style"
        >
          <thead className="text-white table__styling__row detail-table__heading">
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
              height: `${tableHeight === 2 ? 56 : tableHeight}px`,
            }}
          >
            {data?.length > 0 ? (
              data?.map((item, index) => (
                <TableRow
                  className={"table__styling__row"}
                  setModalOpen={setModalOpen}
                  setClickedSkill={setClickedSkill}
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
