import styles from "./Icon.module.css";

const Icon = ({ src }) => {
  return (
    <img
      src={src.endsWith("svg" ? src : `${src}.svg`)}
      className={styles.icon}
    />
  );
};

export default Icon;
