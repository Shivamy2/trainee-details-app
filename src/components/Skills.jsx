import { memo } from "react";

const Skills = ({ title, data }) => {
  return (
    <div>
      <h5 className="skill__title">{title}</h5>
      <ul className="skill__list">
        {data?.map((item, index) => (
          <li key={index} className="text-capitalize">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default memo(Skills);
