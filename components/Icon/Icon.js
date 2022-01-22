import classNames from "classnames";
import styles from "./Icon.module.css";

const ligatureCodes = {
  favorite: "&#xe87d;",
  like: "&#xe87d;",
  question_answer: "&#xe8af;",
  comment: "&#xe8af;",
  flag: "&#xe153;",
  report: "&#xe153;",
  bookmark: "&#xe866;",
  save: "&#xe866;",
  home: "&#xe88a;",
  search: "&#xe8b6;",
  explore: "&#xe8b6;",
  inbox: "&#xe156;",
  person: "&#xe7fd;",
};

/*
  Attempt to change ligature to raw icon
*/

const Icon = ({ children }) => {
  const icon = children.startsWith("&#x")
    ? children
    : ligatureCodes[children] || children;

  return (
    <span
      className={classNames("icon", styles.icon)}
      dangerouslySetInnerHTML={{ __html: icon }}
    ></span>
  );
};

export default Icon;
