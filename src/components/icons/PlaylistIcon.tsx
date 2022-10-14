import { IconProps } from "../../interfaces/Icons";

export function PlaylistIcon({ size = 20 }: IconProps): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M5 11.2502H10V13.7502H5V11.2502Z" fill="#D9D9D9" />
      <path
        d="M20 2.5H18.75V0H6.25V2.5H3.75V4.0625L3 5H1.25V7.1875L0 8.75V20H15L20 13.75V2.5ZM2.5 6.25H12.5V8.75H2.5V6.25ZM13.75 18.75H1.25V10H13.75V18.75ZM15 8.75H13.75V5H5V3.75H15V8.75ZM17.5 5.625L16.25 7.1875V2.5H7.5V1.25H17.5V5.625Z"
        fill="#D9D9D9"
      />
    </svg>
  );
}
