import { memo } from "react";

const Skills = ({ title, data }) => {
  return (
    <div>
      <h5>{title}</h5>
      <ul>
        {data?.map((item) => (
          <li className="capitalize">{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default memo(Skills);
