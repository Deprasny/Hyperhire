export const HEADER_MENU = {
  main: [
    { id: 'menu-recruitment', label: '채용', href: '#', hasDropdown: true }, // Recruitment
    { id: 'menu-dev-service', label: '해외 개발자 활용 서비스', href: '#' }, // Overseas Developer Service
  ],
  dropdown: [
    { id: 'dropdown-header', label: '채용', isHeader: true },
    { id: 'dropdown-remote-dev', label: '해외 개발자 원격 채용', href: '#' },
    { id: 'dropdown-remote-non-dev', label: '외국인 원격 채용 (비개발 직군)', href: '#' },
    { id: 'divider-1', label: 'divider' },
    { id: 'dropdown-korean-foreign', label: '한국어 가능 외국인 채용', href: '#' },
    { id: 'divider-2', label: 'divider' },
  ],
};
