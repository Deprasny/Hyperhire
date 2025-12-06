/**
 * Company Information Data
 * Used in Footer component
 */

export interface CompanyInfo {
  label: string;
  value: string;
  additionalValue?: string;
}

export const COMPANY_INFO: CompanyInfo[] = [
  {
    label: '상호명',
    value: '하이퍼하이어',
    additionalValue: 'Hyperhire India Private Limited',
  },
  {
    label: '대표 CEO',
    value: '김주현',
    additionalValue: 'Juhyun Kim',
  },
  {
    label: '사업자등록번호 CIN',
    value: '427-86-01187',
    additionalValue: 'U74110DL2016PTC290812',
  },
  {
    label: '주소 ADDRESS',
    value: '서울특별시 강남대로 479, 지하 1층 238호',
    additionalValue: 'D-138, Street number 11, Jagjeet Nagar, North East Delhi, New Delhi, 110053 India',
  },
];
