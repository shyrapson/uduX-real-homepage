import { IconProps } from "../../interfaces/Icons";

export function CreatePlaylistIcon({ size = 18 }: IconProps): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.5 0C0.671579 0 8.3e-06 0.67157 0 1.5C8.3e-06 2.32843 0.671579 3 1.5 3C2.32842 3 2.99999 2.32843 3 1.5C2.99999 0.67157 2.32842 0 1.5 0ZM4 1V2H5V1H4ZM6 1V2H16V1H6ZM6 3V4H9V3H6ZM1.5 6C0.671573 6 0 6.67157 0 7.5C0 8.32843 0.671573 9 1.5 9C2.32843 9 3 8.32843 3 7.5C3 6.67157 2.32843 6 1.5 6ZM4 7V8H5V7H4ZM6 7V8H16V7H6ZM12 9V12H9V13H12V16H13V13H16V12H13V9H12ZM1.5 12C0.671573 12 0 12.6716 0 13.5C0 14.3284 0.671573 15 1.5 15C2.32843 15 3 14.3284 3 13.5C3 12.6716 2.32843 12 1.5 12ZM4 13V14H5V13H4Z"
        fill="#D9D9D9"
      />
    </svg>
  );
}
