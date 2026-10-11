import React from 'react';

export const TechLogo = ({ name, className = "w-6 h-6" }) => {
  switch (name?.toLowerCase()) {
    case 'java':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Stylized Java Coffee Cup / Duke Mark */}
          <path d="M4 14C4 16.5 7 19 12 19C17 19 20 16.5 20 14V11H4V14Z" fill="#fb4903" stroke="#000000" strokeWidth="1.5"/>
          <path d="M18 11V8C18 7.4 17.6 7 17 7H14" stroke="#000000" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M20 12C21.5 12 22.5 13 22.5 14.5C22.5 16 21 17 19.5 17" stroke="#000000" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M8 5C8 5 9 6.5 7.5 8" stroke="#fb4903" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M12 3C12 3 13.5 5 11.5 7" stroke="#4da2ff" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M15 5C15 5 16 6.5 15 8" stroke="#ffd731" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M2 20H22" stroke="#000000" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      );
    case 'spring':
    case 'spring boot':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Spring Leaf Mark */}
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="#55db9c" stroke="#000000" strokeWidth="1.5"/>
          <path d="M6 14.5C8 18 13.5 17.5 16.5 14.5C19.5 11.5 17 7 17 7C17 7 12 8.5 9 11.5C7.5 13 6 14.5 6 14.5Z" fill="#ffffff" stroke="#000000" strokeWidth="1.2"/>
          <path d="M9 14.5C11 12.5 13.5 11 16.5 9.5" stroke="#000000" strokeWidth="1.2" strokeLinecap="round"/>
        </svg>
      );
    case 'react':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* React Atom Mark */}
          <ellipse cx="12" cy="12" rx="4" ry="10" stroke="#000000" strokeWidth="1.5" transform="rotate(30 12 12)" fill="#dceeff"/>
          <ellipse cx="12" cy="12" rx="4" ry="10" stroke="#000000" strokeWidth="1.5" transform="rotate(90 12 12)" fill="#dceeff" fillOpacity="0.5"/>
          <ellipse cx="12" cy="12" rx="4" ry="10" stroke="#000000" strokeWidth="1.5" transform="rotate(150 12 12)" fill="#4da2ff"/>
          <circle cx="12" cy="12" r="2.2" fill="#000000"/>
        </svg>
      );
    case 'mysql':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* MySQL Dolphin outline */}
          <rect x="2" y="4" width="20" height="16" rx="4" fill="#dceeff" stroke="#000000" strokeWidth="1.5"/>
          <path d="M7 15C8 11 11 9 14 9C16 9 18 10.5 19 12C18 11 16 11 15 11.5C13 12.5 11 15 9 16C8 16.5 7 15 7 15Z" fill="#fb4903" stroke="#000000" strokeWidth="1"/>
          <circle cx="15.5" cy="10.5" r="0.75" fill="#000000"/>
          <path d="M5 8H7M5 11H8M5 14H7" stroke="#000000" strokeWidth="1.2" strokeLinecap="round"/>
        </svg>
      );
    case 'javascript':
    case 'javascript es6':
    case 'javascript (es6)':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="3" width="18" height="18" rx="3" fill="#ffd731" stroke="#000000" strokeWidth="1.5"/>
          <text x="13" y="17" fontFamily="sans-serif" fontSize="9" fontWeight="900" fill="#000000">JS</text>
        </svg>
      );
    case 'html5':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 3L5.5 19.5L12 21.5L18.5 19.5L20 3H4Z" fill="#fb4903" stroke="#000000" strokeWidth="1.5"/>
          <path d="M12 5V19.5L17 18L18 5H12Z" fill="#ffd731"/>
          <path d="M8 8H16L15.5 11H12V13H15.2L14.7 17L12 17.7V15.5L13.5 15.1L13.7 13.5H8.3L8 8Z" fill="#ffffff" stroke="#000000" strokeWidth="0.8"/>
        </svg>
      );
    case 'css3':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 3L5.5 19.5L12 21.5L18.5 19.5L20 3H4Z" fill="#4da2ff" stroke="#000000" strokeWidth="1.5"/>
          <path d="M12 5V19.5L17 18L18 5H12Z" fill="#dceeff"/>
          <path d="M8 8H16L15.5 11H9.5L9.8 13.5H15.3L14.8 17L12 17.7V15.5L13.5 15.1L13.7 13.5H8.3L8 8Z" fill="#000000" stroke="#000000" strokeWidth="0.5"/>
        </svg>
      );
    case 'tailwind':
    case 'tailwind css':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" fill="#55db9c" stroke="#000000" strokeWidth="1.5"/>
          <path d="M7 13C8.5 10.5 10.5 10.5 12 12C13.5 13.5 15.5 13.5 17 11" stroke="#000000" strokeWidth="2" strokeLinecap="round"/>
          <path d="M7 16C8.5 13.5 10.5 13.5 12 15C13.5 16.5 15.5 16.5 17 14" stroke="#000000" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      );
    case 'hibernate':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="4" width="18" height="16" rx="4" fill="#e9ccff" stroke="#000000" strokeWidth="1.5"/>
          <path d="M7 8V16M17 8V16M7 12H17" stroke="#000000" strokeWidth="2.5" strokeLinecap="round"/>
        </svg>
      );
    case 'rest':
    case 'rest api':
    case 'rest apis':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="5" width="20" height="14" rx="4" fill="#ffd731" stroke="#000000" strokeWidth="1.5"/>
          <path d="M6 12H18M15 9L18 12L15 15" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    case 'jwt':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <polygon points="12,2 21,7 21,17 12,22 3,17 3,7" fill="#fb4903" stroke="#000000" strokeWidth="1.5"/>
          <circle cx="12" cy="12" r="3.5" fill="#ffffff" stroke="#000000" strokeWidth="1.5"/>
        </svg>
      );
        case 'linkedin':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
        </svg>
      );
    case 'github':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017C2 16.446 4.843 20.19 8.796 21.513C9.296 21.603 9.479 21.298 9.479 21.033C9.479 20.796 9.47 20.168 9.466 19.336C6.684 19.945 6.096 17.989 6.096 17.989C5.641 16.828 4.985 16.518 4.985 16.518C4.077 15.895 5.054 15.908 5.054 15.908C6.059 15.979 6.588 16.945 6.588 16.945C7.481 18.483 8.924 18.04 9.494 17.785C9.585 17.133 9.845 16.687 10.131 16.435C7.91 16.18 5.575 15.317 5.575 11.464C5.575 10.366 5.965 9.467 6.606 8.763C6.503 8.508 6.16 7.487 6.704 6.103C6.704 6.103 7.544 5.832 9.453 7.135C10.252 6.911 11.106 6.8 11.959 6.796C12.812 6.8 13.666 6.911 14.467 7.135C16.374 5.832 17.212 6.103 17.212 6.103C17.758 7.487 17.415 8.508 17.312 8.763C17.955 9.467 18.341 10.366 18.341 11.464C18.341 15.328 16.002 16.176 13.774 16.427C14.136 16.741 14.457 17.362 14.457 18.314C14.457 19.68 14.444 20.781 14.444 21.033C14.444 21.301 14.624 21.611 15.132 21.511C19.082 20.186 21.923 16.444 21.923 12.017C21.923 6.484 17.446 2 12 2Z"/>
        </svg>
      );
    case 'database':
    case 'jdbc':
    case 'sql':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="12" cy="6" rx="8" ry="3" fill="#4da2ff" stroke="#000000" strokeWidth="1.5"/>
          <path d="M4 6V12C4 13.66 7.58 15 12 15C16.42 15 20 13.66 20 12V6" fill="#4da2ff" stroke="#000000" strokeWidth="1.5"/>
          <path d="M4 12V18C4 19.66 7.58 21 12 21C16.42 21 20 19.66 20 18V12" fill="#4da2ff" stroke="#000000" strokeWidth="1.5"/>
        </svg>
      );
    case 'layout':
    case 'mvc architecture':
    case 'mvc':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="3" width="18" height="18" rx="3" fill="#ffffff" stroke="#000000" strokeWidth="1.5"/>
          <rect x="6" y="6" width="12" height="4" fill="#55db9c" stroke="#000000" strokeWidth="1"/>
          <rect x="6" y="13" width="5" height="5" fill="#4da2ff" stroke="#000000" strokeWidth="1"/>
          <rect x="13" y="13" width="5" height="5" fill="#ffd731" stroke="#000000" strokeWidth="1"/>
        </svg>
      );
    default:
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <polygon points="12,2 22,8.5 22,15.5 12,22 2,15.5 2,8.5" fill="#e9ccff" stroke="#000000" strokeWidth="1.5"/>
          <circle cx="12" cy="12" r="3" fill="#000000"/>
        </svg>
      );
  }
};
