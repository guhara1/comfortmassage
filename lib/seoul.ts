// 서울 전용 데이터: 5대 권역 + 생활권
// 서울만 풀 큐레이션. 다른 도시는 공통 메뉴(구/프로그램/이용/확인)만 사용합니다.

export type LifeZone = { slug: string; name: string };
export type AreaGroup = {
  slug: string;
  name: string;
  districts: string[]; // 서울 구 slug (lib/regions.ts seoul 기준)
  lifeZones: LifeZone[];
};

export const SEOUL_AREA_GROUPS: AreaGroup[] = [
  {
    slug: 'gangnam-southeast',
    name: '강남·동남권',
    districts: ['gangnam', 'seocho', 'songpa', 'gangdong'],
    lifeZones: [
      { slug: 'gangnam-yeoksam', name: '강남역·역삼' },
      { slug: 'samseong-seolleung', name: '삼성·선릉' },
      { slug: 'cheongdam-apgujeong', name: '청담·압구정' },
      { slug: 'jamsil-songpa', name: '잠실·송파' },
      { slug: 'munjeong-garak', name: '문정·가락' },
      { slug: 'cheonho-gangdong', name: '천호·강동' },
    ],
  },
  {
    slug: 'southwest',
    name: '서남권',
    districts: ['yeongdeungpo', 'guro', 'geumcheon', 'gwanak', 'dongjak', 'yangcheon', 'gangseo'],
    lifeZones: [
      { slug: 'yeouido-yeongdeungpo', name: '여의도·영등포' },
      { slug: 'gudi-gadi', name: '구디·가디' },
      { slug: 'magok-balsan', name: '마곡·발산' },
      { slug: 'mokdong-yangcheon', name: '목동·양천' },
      { slug: 'sillim-seoul-univ', name: '신림·서울대입구' },
    ],
  },
  {
    slug: 'northwest',
    name: '서북권',
    districts: ['mapo', 'seodaemun', 'eunpyeong'],
    lifeZones: [
      { slug: 'hongdae-hapjeong', name: '홍대·합정' },
      { slug: 'gongdeok-mapo', name: '공덕·마포' },
      { slug: 'sinchon-ewha', name: '신촌·이대' },
      { slug: 'sangam-dmc', name: '상암·DMC' },
      { slug: 'yeonsinnae-eunpyeong', name: '연신내·은평' },
    ],
  },
  {
    slug: 'northeast',
    name: '동북권',
    districts: ['seongdong', 'gwangjin', 'dongdaemun', 'jungnang', 'nowon', 'dobong', 'gangbuk', 'seongbuk'],
    lifeZones: [
      { slug: 'seongsu-wangsimni', name: '성수·왕십리' },
      { slug: 'konkuk-gwangjin', name: '건대·광진' },
      { slug: 'cheongnyangni-dongdaemun', name: '청량리·동대문' },
      { slug: 'nowon-sanggye', name: '노원·상계' },
    ],
  },
  {
    slug: 'central',
    name: '도심·중부권',
    districts: ['jongno', 'jung', 'yongsan'],
    lifeZones: [
      { slug: 'jongno-gwanghwamun', name: '종로·광화문' },
      { slug: 'myeongdong-euljiro', name: '명동·을지로' },
      { slug: 'seoul-station-yongsan', name: '서울역·용산' },
      { slug: 'hannam-itaewon', name: '한남·이태원' },
    ],
  },
];

// 상단 "생활권 안내" 드롭다운에 노출하는 대표 생활권 (검색량 높은 순)
export const SEOUL_TOP_LIFE_ZONES: LifeZone[] = [
  { slug: 'gangnam-yeoksam', name: '강남역·역삼' },
  { slug: 'samseong-seolleung', name: '삼성·선릉' },
  { slug: 'jamsil-songpa', name: '잠실·송파' },
  { slug: 'hongdae-hapjeong', name: '홍대·합정' },
  { slug: 'yeouido-yeongdeungpo', name: '여의도·영등포' },
  { slug: 'seongsu-wangsimni', name: '성수·왕십리' },
  { slug: 'seoul-station-yongsan', name: '서울역·용산' },
  { slug: 'myeongdong-euljiro', name: '명동·을지로' },
  { slug: 'magok-balsan', name: '마곡·발산' },
  { slug: 'mokdong-yangcheon', name: '목동·양천' },
  { slug: 'sillim-seoul-univ', name: '신림·서울대입구' },
  { slug: 'cheongdam-apgujeong', name: '청담·압구정' },
];

export const SEOUL_LIFE_ZONES: LifeZone[] = SEOUL_AREA_GROUPS.flatMap(
  (g) => g.lifeZones
);

export function getAreaGroup(slug: string): AreaGroup | undefined {
  return SEOUL_AREA_GROUPS.find((g) => g.slug === slug);
}

export function getLifeZone(slug: string): LifeZone | undefined {
  return SEOUL_LIFE_ZONES.find((z) => z.slug === slug);
}

// 도시별 특수 섹션 보유 여부 (현재 서울만 5대 권역·생활권 큐레이션)
export function cityHasAreaGroups(citySlug: string): boolean {
  return citySlug === 'seoul';
}
