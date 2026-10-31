import { Icon } from "@/components/Icon";
import { Brand } from "@/components/Brand";
import { Reveal } from "@/components/Reveal";
import { site } from "@/content/site";
import * as P from "@/styles/primitives";
import * as S from "./styles";

export function Contact() {
  return (
    <S.Root id="contact-section" tabIndex={-1} aria-labelledby="contact-title">
      <P.Container>
        <Reveal>
          <S.Box>
            <S.Copy>
              <P.Eyebrow>O PRÓXIMO PROJETO PODE SER O SEU</P.Eyebrow>
              <h2 id="contact-title">
                O que a gente
                <br />
                vai construir <em>junto?</em>
              </h2>
              <p>
                Uma ideia saindo do papel. Um processo que precisa melhorar. Um
                sistema esperando o próximo passo. Conta pra gente.
              </p>
              <S.Chat
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon name="chat" size={20} /> Bora conversar no WhatsApp{" "}
                <Icon name="diagonal" size={18} />
              </S.Chat>
              <S.Email href={`mailto:${site.email}`}>
                {site.email} <Icon name="arrow" size={18} />
              </S.Email>
              <S.Phone href={site.telephone}>{site.phone}</S.Phone>
            </S.Copy>
            <S.Decoration aria-hidden="true">
              <S.Logo>
                <Brand compact />
              </S.Logo>
              <div>
                BOAS IDEIAS
                <br />
                MERECEM GANHAR VIDA.
              </div>
            </S.Decoration>
          </S.Box>
        </Reveal>
      </P.Container>
    </S.Root>
  );
}
