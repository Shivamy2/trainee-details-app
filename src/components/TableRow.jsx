import { memo } from "react";
import { AiFillInfoCircle } from "react-icons/ai";
import { BsDownload } from "react-icons/bs";
import { Form } from "react-bootstrap";

const TableRow = ({ data, sno, className }) => {
  return (
    <tr className={className}>
      <td>{sno + 1}</td>
      <td>{data.name}</td>
      <td>
        <Form.Select
          value={data?.projAlc === "1" ? "1" : "0"}
          className={"w-75 mx-auto"}
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
          href="https://drive.google.com/file/d/1lYJNaCe2Tn2Rwd9jx_pDe4jh8ZK-Dchi/view?usp=sharing"
          target={"popup"}
          onClick={() =>
            window.open(
              "https://drive.google.com/file/d/1lYJNaCe2Tn2Rwd9jx_pDe4jh8ZK-Dchi/view?usp=sharing",
              "name",
              "width=1000,height=600"
            )
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
