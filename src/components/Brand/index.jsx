import * as S from "./styles";
export function Brand({ compact = false }) {
  return (
    <S.Mark>
      <svg
        width="37"
        height="43"
        viewBox="0 0 74 86"
        fill="none"
        aria-hidden="true"
        focusable="false"
      >
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M37 0 74 21.5v43L37 86 0 64.5v-43L37 0Zm0 12L10.5 27.5v31L37 74l26.5-15.5v-31L37 12Z"
        />
        <path
          fill="currentColor"
          d="m37 23 17 10-17 6-17-6 17-10Zm-17 11 13 12 4 17-17-10V34Zm34 0L41 46l-4 17 17-10V34Z"
        />
      </svg>
      {!compact && (
        <span>
          Hivetron<span className="descriptor">TECHNOLOGY</span>
        </span>
      )}
    </S.Mark>
  );
}
