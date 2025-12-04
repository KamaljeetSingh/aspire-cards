import { ComponentProps } from "react";

type IconProps = ComponentProps<"svg">;

export const AspireMark = ({ className, ...props }: IconProps) => (
  <svg
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    <circle cx="20" cy="20" r="20" fill="currentColor" />
    <path d="M20 12L12 22L20 19L28 22L20 12z" fill="white" />
    <path d="M20 19L12 29h16L20 19z" fill="white" fillOpacity="0.6" />
  </svg>
);

export const HomeIcon = ({ className, ...props }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="1.5" />
    <path d="M12 6L7 11h3v5h4v-5h3L12 6z" fill="currentColor" />
  </svg>
);

export const CardIcon = ({ className, ...props }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    <rect x="2" y="6" width="20" height="12" rx="2" />
    <rect x="2" y="9" width="20" height="2" fill="white" fillOpacity="0.3" />
    <rect
      x="5"
      y="13"
      width="6"
      height="1.5"
      rx="0.75"
      fill="white"
      fillOpacity="0.5"
    />
  </svg>
);

export const PaymentsIcon = ({ className, ...props }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="1.5" />
    <path
      d="M15 10l-6 0M9 10l2-2M9 10l2 2"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9 14l6 0M15 14l-2 2M15 14l-2-2"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const CreditIcon = ({ className, ...props }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="1.5" />
    <path
      d="M12 8v8M12 8l-3 3M12 8l3 3"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const SettingsIcon = ({ className, ...props }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    <circle cx="12" cy="9" r="3.5" />
    <path d="M12 14c-4 0-7 2-7 4.5V20h14v-1.5c0-2.5-3-4.5-7-4.5z" />
  </svg>
);

export const PlusIcon = ({ className, ...props }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    className={className}
    {...props}
  >
    <path d="M12 5v14M5 12h14" strokeLinecap="round" />
  </svg>
);

export const EyeIcon = ({ className, ...props }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    className={className}
    {...props}
  >
    <path d="M1.5 12S5 5 12 5s10.5 7 10.5 7-3.5 7-10.5 7S1.5 12 1.5 12Z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

export const SnowflakeIcon = ({ className, ...props }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    className={className}
    {...props}
  >
    <path d="M12 3v18" />
    <path d="M7 6.5 12 9l5-2.5" />
    <path d="M7 17.5 12 15l5 2.5" />
    <path d="m5 12 14 0" />
    <path d="m8 9.5-3-1.5" />
    <path d="m8 14.5-3 1.5" />
    <path d="m16 9.5 3-1.5" />
    <path d="m16 14.5 3 1.5" />
  </svg>
);

export const GaugeIcon = ({ className, ...props }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    className={className}
    {...props}
  >
    <path d="M12 5a9 9 0 0 0-9 9v1h18v-1a9 9 0 0 0-9-9Z" />
    <path d="M12 12 8.5 15.5" strokeLinecap="round" />
  </svg>
);

export const GoogleIcon = ({ className, ...props }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} {...props}>
    <path
      d="M12 10.2v3.6h5.02c-.22 1.15-.9 2.12-1.92 2.77l3.1 2.4C19.8 17.6 21 15.1 21 12.3c0-.44-.04-.88-.11-1.3H12Z"
      fill="#4285F4"
    />
    <path
      d="M6.64 14.32 5.98 14.8l-2.48 1.9A8.96 8.96 0 0 0 12 21c2.43 0 4.47-.8 5.96-2.2l-3.1-2.4c-.86.58-1.95.93-2.86.93-2.24 0-4.14-1.51-4.82-3.7Z"
      fill="#34A853"
    />
    <path
      d="M3.5 7.3A8.96 8.96 0 0 0 3 12c0 1.54.36 2.98.99 4.25a8.99 8.99 0 0 1 2.49-3.45l2-1.55c-.47-1.4-.03-2.84 1.1-3.77V6.8H6.68c-1.27 0-2.42.73-3.18 1.9Z"
      fill="#FBBC05"
    />
    <path
      d="M12 5.9c1.33 0 2.52.46 3.45 1.36l2.57-2.56C16.45 3.13 14.4 2.3 12 2.3 8.7 2.3 5.8 4.17 4.18 6.8l3.45 2.7C8.3 7.41 10 5.9 12 5.9Z"
      fill="#EA4335"
    />
  </svg>
);

export const RefreshIcon = ({ className, ...props }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    className={className}
    {...props}
  >
    <path d="M21 12a9 9 0 0 0-9-9 9 9 0 0 0-7.74 4.26" />
    <path d="M3 5h5v5" />
    <path d="M3 12a9 9 0 0 0 9 9 9 9 0 0 0 7.74-4.26" />
    <path d="M21 19h-5v-5" />
  </svg>
);

export const TrashIcon = ({ className, ...props }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    className={className}
    {...props}
  >
    <path d="M5 7h14" />
    <path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />
    <path d="M6 7h12l-1 12H7L6 7Z" />
  </svg>
);

export const ChevronLeft = ({ className, ...props }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    className={className}
    {...props}
  >
    <path d="m14.5 6-5 6 5 6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const ChevronRight = ({ className, ...props }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    className={className}
    {...props}
  >
    <path d="m9.5 6 5 6-5 6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const ChatPinIcon = ({ className, ...props }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    className={className}
    {...props}
  >
    <path d="M12 3v7" />
    <path d="m8 7 4 3 4-3" />
    <path d="M8 21h8l-1-8H9l-1 8Z" />
  </svg>
);

export const ToggleIcon = ({ className, ...props }: IconProps) => (
  <svg viewBox="0 0 40 20" fill="none" className={className} {...props}>
    <rect x="1" y="1" width="38" height="18" rx="9" fill="#1E3A8A" />
    <circle cx="31" cy="10" r="7" fill="white" />
  </svg>
);

export const FilterIcon = ({ className, ...props }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    className={className}
    {...props}
  >
    <path d="M4 5h16l-6 7.5V19l-4 2v-8.5L4 5Z" />
  </svg>
);

export const BellIcon = ({ className, ...props }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    className={className}
    {...props}
  >
    <path d="M18 15V9a6 6 0 1 0-12 0v6l-2 2h16l-2-2Z" />
    <path d="M10 19a2 2 0 0 0 4 0" />
  </svg>
);

export const PlaneIcon = ({ className, ...props }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    className={className}
    {...props}
  >
    <path d="M3 13 21 3l-7 18-2-7-7-1Z" strokeLinejoin="round" />
  </svg>
);

export const StoreIcon = ({ className, ...props }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    className={className}
    {...props}
  >
    <path d="M4 7h16l-1 12H5L4 7Z" />
    <path d="M6 7V5h4v2" />
    <path d="M14 7V5h4v2" />
  </svg>
);

export const MegaphoneIcon = ({ className, ...props }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    className={className}
    {...props}
  >
    <path d="M4 10v4" />
    <path d="M4 10 17 5v14L4 14Z" />
    <path d="M9 14v4" />
  </svg>
);

export const CircleCheck = ({ className, ...props }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    className={className}
    {...props}
  >
    <circle cx="12" cy="12" r="9" />
    <path
      d="m8.5 12 2.5 2.5 4.5-5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const ShieldIcon = ({ className, ...props }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.4"
    className={className}
    {...props}
  >
    <path d="M12 3 5 6v6a7 7 0 0 0 14 0V6l-7-3Z" />
    <path d="M9 12.5 11 14l4-4" strokeLinecap="round" />
  </svg>
);

export const DotsIcon = ({ className, ...props }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
    <circle cx="5" cy="12" r="2" />
    <circle cx="12" cy="12" r="2" />
    <circle cx="19" cy="12" r="2" />
  </svg>
);
