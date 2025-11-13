import * as S from "./styles";
import { listStaff } from "./listStaff";

export function StaffCard() {
  return (
    <S.Container>
      {listStaff.map((item) => {
        return (
          <S.Card key={item.id}>
            <S.Title>{item.name}</S.Title>
            <S.Avatar src={item.avatar.src} alt="developer-image" />
            <S.Socials>
              <a
                className="devicon-github-original icon"
                href={item.github}
                target="_blank"
              ></a>
              <a
                className="devicon-linkedin-plain icon"
                href={item.linkedin}
                target="_blank"
              ></a>
            </S.Socials>
            <S.Text>{item.description}</S.Text>
          </S.Card>
        );
      })}
    </S.Container>
  );
}
