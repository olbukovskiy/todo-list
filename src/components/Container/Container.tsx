import css from "./Container.module.css";

interface IProps {
  children: React.ReactNode;
}

export const Container: React.FunctionComponent<IProps> = ({ children }) => {
  return <div className={css.container}>{children}</div>;
};
