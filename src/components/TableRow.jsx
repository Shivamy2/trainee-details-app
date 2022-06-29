import { memo } from "react";
import { AiFillInfoCircle } from "react-icons/ai";
import { BsDownload } from "react-icons/bs";

const TableRow = ({ data, sno, className }) => {
  return (
    <tr className={className}>
      <td>{sno + 1}</td>
      <td>{data.name}</td>
      <td>{data.projAlc}</td>
      <td>
        <AiFillInfoCircle color="green" size={18} className="cursor-event" />
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
          //   value={data.comment}
        />
      </td>
      <td>
        <a
          href="https://drive.google.com/file/d/1lYJNaCe2Tn2Rwd9jx_pDe4jh8ZK-Dchi/view?usp=sharing"
          target={"popup"}
          onClick={(event) =>
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
