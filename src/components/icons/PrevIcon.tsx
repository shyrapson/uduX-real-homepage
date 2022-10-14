import { IconProps } from "../../interfaces/Icons";

export function PrevIcon({ size = 17 }: IconProps): JSX.Element {
  return (
    <svg
      width={size}
      height="28"
      viewBox="0 0 17 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.7715 3.25291L14.355 0.849976L0.928467 14.2901L14.3686 27.7302L16.7715 25.3273L5.73433 14.2901L16.7715 3.25291Z"
        fill="#D9D9D9"
      />
    </svg>
  );
}
