const paths = {
  arrow: <path d="M5 12h14m-6-6 6 6-6 6" />,
  diagonal: <path d="M6 18 18 6M6 6h12v12" />,
  layers: (
    <>
      <path d="m12 3 9 5-9 5-9-5 9-5Z" />
      <path d="m3 12 9 5 9-5M3 16l9 5 9-5" />
    </>
  ),
  window: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 9h18M7 6.5h.01M10 6.5h.01m-1 6-2 2 2 2m6-4 2 2-2 2" />
    </>
  ),
  desktop: (
    <>
      <rect x="3" y="3" width="18" height="13" rx="2" />
      <path d="M8 21h8m-4-5v5M7 12l3-3 3 2 4-4" />
    </>
  ),
  connect: (
    <>
      <rect x="2" y="8" width="6" height="8" rx="2" />
      <rect x="16" y="8" width="6" height="8" rx="2" />
      <path d="M8 12h8m-4-5v10m-2-12 2-2 2 2m-4 14 2 2 2-2" />
    </>
  ),
  check: <path d="m5 12 4 4L19 6" />,
  plus: <path d="M12 5v14M5 12h14" />,
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </>
  ),
  chat: (
    <path d="M21 11.5a8.5 8.5 0 0 1-12.7 7.4L3 21l1.8-5.5A8.5 8.5 0 1 1 21 11.5Z" />
  ),
};
export function Icon({ name, size = 24, ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {paths[name] || paths.arrow}
    </svg>
  );
}
