// 도시(시·도) 공통 메뉴 및 콘텐츠 데이터
// 모든 도시 페이지(/[city]/...)에서 공유합니다.

export type Item = { slug: string; name: string; desc: string };

// 마사지 프로그램
export const PROGRAMS: Item[] = [
  { slug: 'swedish', name: '스웨디시', desc: '부드러운 압으로 전신을 이완하는 대표 프로그램' },
  { slug: 'aroma-therapy', name: '아로마테라피', desc: '향 오일을 활용한 릴렉스 중심 관리' },
  { slug: 'thai-massage', name: '타이마사지', desc: '스트레칭 중심의 전통 타이식 관리' },
  { slug: 'sports-massage', name: '스포츠 마사지', desc: '운동 후 근육 피로 회복 중심 관리' },
  { slug: 'foot-massage', name: '발마사지', desc: '발과 종아리를 집중 관리' },
  { slug: 'deep-tissue', name: '딥티슈', desc: '깊은 압으로 뭉친 근육을 풀어주는 관리' },
  { slug: 'lomi-lomi', name: '로미로미', desc: '하와이 전통 방식의 리드미컬한 관리' },
  { slug: 'couple', name: '커플 관리', desc: '2인 동시 진행 이용 안내' },
  { slug: 'night', name: '야간 예약', desc: '야간·심야 시간대 이용 안내' },
  { slug: 'men', name: '남성 고객 안내', desc: '남성 고객 이용 기준 안내' },
  { slug: 'women', name: '여성 고객 안내', desc: '여성 고객 이용 기준 안내' },
];

// 이용 장소
export const USES: Item[] = [
  { slug: 'home', name: '자택', desc: '자택 방문 시 주소·출입 확인' },
  { slug: 'hotel', name: '호텔·숙소', desc: '객실 정책과 프런트 확인' },
  { slug: 'officetel', name: '오피스텔', desc: '공동현관·관리규정 확인' },
  { slug: 'apartment', name: '아파트', desc: '동·호수와 공동현관 확인' },
  { slug: 'business-district', name: '업무지구', desc: '오피스 밀집 지역 이용 안내' },
  { slug: 'station-area', name: '역세권', desc: '역 인근 접근성 안내' },
  { slug: 'tour-accommodation', name: '관광 숙소', desc: '게스트하우스·리조트 이용 안내' },
  { slug: 'night', name: '야간 이용', desc: '야간 방문 가능 여부 확인' },
  { slug: 'outer-area', name: '외곽 지역', desc: '외곽·근교 지역 이동 안내' },
];

// 예약 전 확인
export const CHECKS: Item[] = [
  { slug: 'address', name: '주소 확인', desc: '시·군·구, 도로명, 동·호수 확인' },
  { slug: 'building-access', name: '건물 출입', desc: '건물 진입 경로와 출입 방법 확인' },
  { slug: 'apartment-access', name: '공동현관', desc: '아파트·오피스텔 공동현관 통과 방법' },
  { slug: 'hotel-policy', name: '호텔 정책', desc: '호텔·숙소 방문 정책 확인' },
  { slug: 'officetel-rule', name: '오피스텔 규정', desc: '오피스텔 관리규정 확인' },
  { slug: 'parking', name: '주차 확인', desc: '주차 위치와 방문 주차 가능 여부' },
  { slug: 'time', name: '예약 시간', desc: '예약 가능 시간대 확인' },
  { slug: 'change-policy', name: '예약 변경', desc: '예약 변경·취소 기준 안내' },
  { slug: 'privacy', name: '개인정보 처리', desc: '예약 시 개인정보 처리 안내' },
  { slug: 'service-policy', name: '서비스 운영 기준', desc: '서비스 운영 원칙 안내' },
  { slug: 'customer-notice', name: '불법·선정적 서비스 불가', desc: '불법·선정적 서비스는 제공하지 않습니다' },
];

// 운영 기준 (단일 세그먼트 /[city]/[page]) + 문의
export const INFO: Item[] = [
  { slug: 'about', name: '서비스 안내', desc: '서비스 소개와 이용 안내' },
  { slug: 'booking-guide', name: '예약 절차', desc: '예약부터 방문까지의 절차 안내' },
  { slug: 'faq', name: '자주 묻는 질문', desc: '자주 묻는 질문과 답변' },
  { slug: 'editorial-policy', name: '작성자·검수 기준', desc: '정보 작성·검수 기준 안내' },
  { slug: 'privacy', name: '개인정보 처리방침', desc: '개인정보 수집·이용 방침' },
  { slug: 'service-policy', name: '이용약관', desc: '서비스 이용약관' },
  { slug: 'contact', name: '문의하기', desc: '전화·문자·텔레그램 문의' },
];

export function findItem(list: Item[], slug: string): Item | undefined {
  return list.find((i) => i.slug === slug);
}

// 운영 기준 드롭다운에 노출할 항목 (문의 제외)
export const OPERATING = INFO.filter((i) => i.slug !== 'contact');
