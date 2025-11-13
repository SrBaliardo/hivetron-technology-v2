import * as S from "./styles.js";

export const ShinyText = ({
  text,
  disabled = false,
  speed = 3,
  className = "",
}) => {
  return (
    <S.Container
      className={`${disabled ? "disabled" : ""} ${className}`}
      speed={speed}
    >
      {text}
    </S.Container>
  );
};
