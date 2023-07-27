import classnames from 'classnames';
import './Pill.scss'

const Pill = ({ color, label }) => {
  return (
    <span
      className={classnames({
        pill: true,
        [color]: true,
      })}
    >
      {label}
    </span>
  );
};

export default Pill;
