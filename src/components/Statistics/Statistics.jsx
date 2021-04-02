import PropTypes from "prop-types";
import scss from "./Statistics.module.scss";

const Statistics = ({ title = "", statistics }) => (
  <section className={scss.sectionStatistics}>
    <h2 className={scss.title}>{title}</h2>

    <ul className={scss.statsList}>
      {statistics.map((item) => (
        <li
          key={item.id}
          className={scss.item}
          style={{ backgroundColor: randomColor() }}
        >
          <span>{item.label}</span>
          <span className={scss.percentage}>{item.percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
);

const randomColor = () => {
  return `rgb(
    ${Math.floor(Math.random() * 250)}
    ${Math.floor(Math.random() * 250)}
    ${Math.floor(Math.random() * 250)}
  )`;
};

export default Statistics;

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  statistics: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
