import { Icon } from "@/components/Icon";
import * as P from "@/styles/primitives";
import * as S from "./styles";

function HiveArtwork() {
  return (
    <S.Artwork aria-hidden="true">
      <S.ArtLabel>
        <span /> IDEIAS QUE SE CONECTAM
      </S.ArtLabel>
      <svg viewBox="0 0 500 440" fill="none" focusable="false">
        <defs>
          <pattern
            id="hive-grid"
            width="32"
            height="32"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="1" cy="1" r="1" fill="#656e54" opacity=".4" />
          </pattern>
          <linearGradient
            id="hive-fill"
            x1="210"
            y1="125"
            x2="330"
            y2="300"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#ffcf38" />
            <stop offset="1" stopColor="#ffab00" />
          </linearGradient>
        </defs>
        <rect
          x="1"
          y="1"
          width="498"
          height="438"
          rx="24"
          fill="url(#hive-grid)"
        />
        <circle
          cx="250"
          cy="215"
          r="170"
          stroke="#353c2d"
          strokeDasharray="3 9"
        />
        <circle cx="250" cy="215" r="113" stroke="#353c2d" />
        <g className="connections" stroke="#68744d" strokeDasharray="5 5">
          <path d="M250 215 109 114M250 215 394 118M250 215 392 318M250 215 109 315" />
        </g>
        <g className="core">
          <path
            d="m250 121 82 47v94l-82 47-82-47v-94l82-47Z"
            fill="url(#hive-fill)"
          />
          <path
            d="m250 147 59 34v68l-59 34-59-34v-68l59-34Z"
            stroke="#22291a"
            strokeWidth="2"
          />
          <path
            d="m250 173 36 21-36 13-36-13 36-21Zm-36 24 28 25 8 36-36-21v-40Zm72 0-28 25-8 36 36-21v-40Z"
            fill="#22291a"
          />
        </g>
        <g className="satellite">
          <path
            d="m109 70 39 22v44l-39 23-39-23V92l39-22Z"
            fill="#1e241b"
            stroke="#6c7759"
          />
          <text
            x="109"
            y="120"
            textAnchor="middle"
            fill="#e9eddf"
            fontSize="14"
            fontFamily="monospace"
          >
            ERP
          </text>
        </g>
        <g className="satellite">
          <path
            d="m394 74 39 22v44l-39 23-39-23V96l39-22Z"
            fill="#1e241b"
            stroke="#6c7759"
          />
          <text
            x="394"
            y="124"
            textAnchor="middle"
            fill="#e9eddf"
            fontSize="14"
            fontFamily="monospace"
          >
            WEB
          </text>
        </g>
        <g className="satellite">
          <path
            d="m109 271 39 22v44l-39 23-39-23v-44l39-22Z"
            fill="#1e241b"
            stroke="#6c7759"
          />
          <text
            x="109"
            y="321"
            textAnchor="middle"
            fill="#e9eddf"
            fontSize="14"
            fontFamily="monospace"
          >
            APP
          </text>
        </g>
        <g className="satellite">
          <path
            d="m394 274 39 22v44l-39 23-39-23v-44l39-22Z"
            fill="#1e241b"
            stroke="#6c7759"
          />
          <text
            x="394"
            y="324"
            textAnchor="middle"
            fill="#e9eddf"
            fontSize="14"
            fontFamily="monospace"
          >
            API
          </text>
        </g>
        <g className="bee" transform="translate(326 44) rotate(-18)">
          <ellipse
            cx="-5"
            cy="-10"
            rx="9"
            ry="14"
            fill="#f0f1df"
            fillOpacity=".75"
            transform="rotate(-30)"
          />
          <ellipse
            cx="10"
            cy="-8"
            rx="9"
            ry="14"
            fill="#f0f1df"
            fillOpacity=".55"
            transform="rotate(30)"
          />
          <rect
            x="-16"
            y="-2"
            width="35"
            height="23"
            rx="11.5"
            fill="#ffb900"
          />
          <path d="M-4-1v21m9-21v21" stroke="#20271a" strokeWidth="5" />
          <circle cx="18" cy="8" r="8" fill="#20271a" />
          <circle cx="20" cy="6" r="1.5" fill="#ffb900" />
        </g>
        <path d="M184 385h132" stroke="#505a40" />
        <text
          x="250"
          y="412"
          textAnchor="middle"
          fill="#aab59b"
          fontSize="10"
          letterSpacing="3"
          fontFamily="monospace"
        >
          BUILD. CONNECT. DELIVER.
        </text>
      </svg>
      <S.ArtFooter>
        <span>UM TIME. MUITAS POSSIBILIDADES.</span>
        <span>↗</span>
      </S.ArtFooter>
    </S.Artwork>
  );
}

export function Hero() {
  return (
    <S.Root id="top" tabIndex={-1} aria-labelledby="hero-title">
      <P.Container>
        <S.Grid>
          <S.Copy>
            <P.Eyebrow>SOFTWARE SOB MEDIDA · HIVETRON</P.Eyebrow>
            <S.Title id="hero-title">
              Ideias conectadas.
              <br />
              <span>
                Software
                <br />
                que resolve.
              </span>
            </S.Title>
            <S.Description>
              Do ERP à sua próxima grande ideia. Desenvolvemos aplicações web,
              desktop e integrações para fazer sua operação andar.
            </S.Description>
            <P.Actions>
              <P.Button href="#contact-section">
                Bora falar do seu projeto? <Icon name="diagonal" size={18} />
              </P.Button>
              <P.Button href="#projects-section" $secondary>
                Conheça nosso trabalho <Icon name="arrow" size={18} />
              </P.Button>
            </P.Actions>
            <S.Note>
              <span /> Tecnologia com propósito. Conversa sem complicação.
            </S.Note>
          </S.Copy>
          <HiveArtwork />
        </S.Grid>
        <S.Bottom>
          <span>DA IDEIA À OPERAÇÃO</span>
          <span>Planejar. Construir. Evoluir.</span>
          <a href="#services-section" aria-label="Explorar nossos serviços">
            Explore <span>↓</span>
          </a>
        </S.Bottom>
      </P.Container>
    </S.Root>
  );
}
