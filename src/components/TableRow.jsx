import { memo, useContext } from "react";
import { AiFillInfoCircle } from "react-icons/ai";
import { BsDownload } from "react-icons/bs";
import { Form } from "react-bootstrap";
import { AppContext } from "../context";

const TableRow = ({ data, sno, className }) => {
  const { dispatchEvent } = useContext(AppContext);
  const handleProjectAllocation = (event) => {
    if (
      window.confirm(
        `${data.name} will be moved to ${
          data?.projAlc === "0"
            ? "project allocation"
            : data?.type === "frontend"
            ? "frontend"
            : "backend"
        } table.`
      )
    ) {
      dispatchEvent("CHANGE_PROJ_ALLOCATION", {
        index: data?.id,
        value: event.target.value,
      });
    }
  };
  return (
    <tr className={className}>
      <td>{sno + 1}</td>
      <td>{data.name}</td>
      <td>
        <Form.Select
          value={data?.projAlc === "1" ? "1" : "0"}
          className={"w-75 mx-auto"}
          onChange={handleProjectAllocation}
        >
          <option value="1">Yes</option>
          <option value="0">No</option>
        </Form.Select>
      </td>
      <td>
        <textarea
          className="table__textarea"
          onKeyDown={(event) => {
            if (event.key === "Enter") console.log("Enter pressed");
          }}
          placeholder="NA"
          name=""
          id=""
          cols="20"
          rows="1"
          //   value={data.comment}
        />
      </td>
      <td>
        <AiFillInfoCircle color="green" size={18} className="cursor-event" />
        {data?.projAlc === "1" && (data?.type === "frontend" ? "(FE)" : "(BE)")}
      </td>
      <td>
        <a
          href={data?.resume}
          target={"popup"}
          onClick={() =>
            window.open(data?.resume, "name", "width=1000,height=600")
          }
          download
        >
          <BsDownload color="blue" size={20} />
        </a>
      </td>
    </tr>
  );
};

export default memo(TableRow);
