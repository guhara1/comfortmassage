// 전국 행정구역 데이터 (권역 > 시·도 > 시·군·구)
// 각 시·군·구마다 고유 페이지(/area/[city]/[district])를 정적으로 생성하는 데 사용합니다.

export type District = { slug: string; name: string };
export type City = { slug: string; name: string; districts: District[] };
export type Region = { slug: string; name: string; summary: string; cities: City[] };

function city(slug: string, name: string, pairs: [string, string][]): City {
  return { slug, name, districts: pairs.map(([s, n]) => ({ slug: s, name: n })) };
}

export const regions: Region[] = [
  {
    slug: 'capital',
    name: '수도권',
    summary: '서울·경기·인천',
    cities: [
      city('seoul', '서울', [
        ['jongno', '종로구'], ['jung', '중구'], ['yongsan', '용산구'],
        ['seongdong', '성동구'], ['gwangjin', '광진구'], ['dongdaemun', '동대문구'],
        ['jungnang', '중랑구'], ['seongbuk', '성북구'], ['gangbuk', '강북구'],
        ['dobong', '도봉구'], ['nowon', '노원구'], ['eunpyeong', '은평구'],
        ['seodaemun', '서대문구'], ['mapo', '마포구'], ['yangcheon', '양천구'],
        ['gangseo', '강서구'], ['guro', '구로구'], ['geumcheon', '금천구'],
        ['yeongdeungpo', '영등포구'], ['dongjak', '동작구'], ['gwanak', '관악구'],
        ['seocho', '서초구'], ['gangnam', '강남구'], ['songpa', '송파구'],
        ['gangdong', '강동구'],
      ]),
      city('gyeonggi', '경기', [
        ['suwon', '수원시'], ['seongnam', '성남시'], ['goyang', '고양시'],
        ['yongin', '용인시'], ['bucheon', '부천시'], ['ansan', '안산시'],
        ['anyang', '안양시'], ['namyangju', '남양주시'], ['hwaseong', '화성시'],
        ['pyeongtaek', '평택시'], ['uijeongbu', '의정부시'], ['siheung', '시흥시'],
        ['paju', '파주시'], ['gimpo', '김포시'], ['gwangmyeong', '광명시'],
        ['gwangju', '광주시'], ['gunpo', '군포시'], ['osan', '오산시'],
        ['icheon', '이천시'], ['yangju', '양주시'], ['anseong', '안성시'],
        ['guri', '구리시'], ['pocheon', '포천시'], ['uiwang', '의왕시'],
        ['hanam', '하남시'], ['yeoju', '여주시'], ['dongducheon', '동두천시'],
        ['gwacheon', '과천시'], ['gapyeong', '가평군'], ['yangpyeong', '양평군'],
        ['yeoncheon', '연천군'],
      ]),
      city('incheon', '인천', [
        ['jung', '중구'], ['dong', '동구'], ['michuhol', '미추홀구'],
        ['yeonsu', '연수구'], ['namdong', '남동구'], ['bupyeong', '부평구'],
        ['gyeyang', '계양구'], ['seo', '서구'], ['ganghwa', '강화군'],
        ['ongjin', '옹진군'],
      ]),
    ],
  },
  {
    slug: 'chungcheong',
    name: '충청권',
    summary: '대전·세종·충북·충남',
    cities: [
      city('daejeon', '대전', [
        ['dong', '동구'], ['jung', '중구'], ['seo', '서구'],
        ['yuseong', '유성구'], ['daedeok', '대덕구'],
      ]),
      city('sejong', '세종', [
        ['jochiwon', '조치원읍'], ['hansol', '한솔동'], ['saerom', '새롬동'],
        ['dodam', '도담동'], ['areum', '아름동'], ['goun', '고운동'],
        ['sodam', '소담동'], ['bangok', '반곡동'],
      ]),
      city('chungbuk', '충북', [
        ['cheongju', '청주시'], ['chungju', '충주시'], ['jecheon', '제천시'],
        ['boeun', '보은군'], ['okcheon', '옥천군'], ['yeongdong', '영동군'],
        ['jeungpyeong', '증평군'], ['jincheon', '진천군'], ['goesan', '괴산군'],
        ['eumseong', '음성군'], ['danyang', '단양군'],
      ]),
      city('chungnam', '충남', [
        ['cheonan', '천안시'], ['gongju', '공주시'], ['boryeong', '보령시'],
        ['asan', '아산시'], ['seosan', '서산시'], ['nonsan', '논산시'],
        ['gyeryong', '계룡시'], ['dangjin', '당진시'], ['geumsan', '금산군'],
        ['buyeo', '부여군'], ['seocheon', '서천군'], ['cheongyang', '청양군'],
        ['hongseong', '홍성군'], ['yesan', '예산군'], ['taean', '태안군'],
      ]),
    ],
  },
  {
    slug: 'honam',
    name: '호남권',
    summary: '광주·전북·전남',
    cities: [
      city('gwangju', '광주', [
        ['dong', '동구'], ['seo', '서구'], ['nam', '남구'],
        ['buk', '북구'], ['gwangsan', '광산구'],
      ]),
      city('jeonbuk', '전북', [
        ['jeonju', '전주시'], ['gunsan', '군산시'], ['iksan', '익산시'],
        ['jeongeup', '정읍시'], ['namwon', '남원시'], ['gimje', '김제시'],
        ['wanju', '완주군'], ['jinan', '진안군'], ['muju', '무주군'],
        ['jangsu', '장수군'], ['imsil', '임실군'], ['sunchang', '순창군'],
        ['gochang', '고창군'], ['buan', '부안군'],
      ]),
      city('jeonnam', '전남', [
        ['mokpo', '목포시'], ['yeosu', '여수시'], ['suncheon', '순천시'],
        ['naju', '나주시'], ['gwangyang', '광양시'], ['damyang', '담양군'],
        ['gokseong', '곡성군'], ['gurye', '구례군'], ['goheung', '고흥군'],
        ['boseong', '보성군'], ['hwasun', '화순군'], ['jangheung', '장흥군'],
        ['gangjin', '강진군'], ['haenam', '해남군'], ['yeongam', '영암군'],
        ['muan', '무안군'], ['hampyeong', '함평군'], ['yeonggwang', '영광군'],
        ['jangseong', '장성군'], ['wando', '완도군'], ['jindo', '진도군'],
        ['sinan', '신안군'],
      ]),
    ],
  },
  {
    slug: 'yeongnam',
    name: '영남권',
    summary: '부산·대구·울산·경북·경남',
    cities: [
      city('busan', '부산', [
        ['jung', '중구'], ['seo', '서구'], ['dong', '동구'],
        ['yeongdo', '영도구'], ['busanjin', '부산진구'], ['dongnae', '동래구'],
        ['nam', '남구'], ['buk', '북구'], ['haeundae', '해운대구'],
        ['saha', '사하구'], ['geumjeong', '금정구'], ['gangseo', '강서구'],
        ['yeonje', '연제구'], ['suyeong', '수영구'], ['sasang', '사상구'],
        ['gijang', '기장군'],
      ]),
      city('daegu', '대구', [
        ['jung', '중구'], ['dong', '동구'], ['seo', '서구'],
        ['nam', '남구'], ['buk', '북구'], ['suseong', '수성구'],
        ['dalseo', '달서구'], ['dalseong', '달성군'], ['gunwi', '군위군'],
      ]),
      city('ulsan', '울산', [
        ['jung', '중구'], ['nam', '남구'], ['dong', '동구'],
        ['buk', '북구'], ['ulju', '울주군'],
      ]),
      city('gyeongbuk', '경북', [
        ['pohang', '포항시'], ['gyeongju', '경주시'], ['gimcheon', '김천시'],
        ['andong', '안동시'], ['gumi', '구미시'], ['yeongju', '영주시'],
        ['yeongcheon', '영천시'], ['sangju', '상주시'], ['mungyeong', '문경시'],
        ['gyeongsan', '경산시'], ['uiseong', '의성군'], ['cheongsong', '청송군'],
        ['yeongyang', '영양군'], ['yeongdeok', '영덕군'], ['cheongdo', '청도군'],
        ['goryeong', '고령군'], ['seongju', '성주군'], ['chilgok', '칠곡군'],
        ['yecheon', '예천군'], ['bonghwa', '봉화군'], ['uljin', '울진군'],
        ['ulleung', '울릉군'],
      ]),
      city('gyeongnam', '경남', [
        ['changwon', '창원시'], ['jinju', '진주시'], ['tongyeong', '통영시'],
        ['sacheon', '사천시'], ['gimhae', '김해시'], ['miryang', '밀양시'],
        ['geoje', '거제시'], ['yangsan', '양산시'], ['uiryeong', '의령군'],
        ['haman', '함안군'], ['changnyeong', '창녕군'], ['goseong', '고성군'],
        ['namhae', '남해군'], ['hadong', '하동군'], ['sancheong', '산청군'],
        ['hamyang', '함양군'], ['geochang', '거창군'], ['hapcheon', '합천군'],
      ]),
    ],
  },
  {
    slug: 'gangwon',
    name: '강원권',
    summary: '춘천·원주·강릉·속초',
    cities: [
      city('gangwon', '강원', [
        ['chuncheon', '춘천시'], ['wonju', '원주시'], ['gangneung', '강릉시'],
        ['donghae', '동해시'], ['taebaek', '태백시'], ['sokcho', '속초시'],
        ['samcheok', '삼척시'], ['hongcheon', '홍천군'], ['hoengseong', '횡성군'],
        ['yeongwol', '영월군'], ['pyeongchang', '평창군'], ['jeongseon', '정선군'],
        ['cheorwon', '철원군'], ['hwacheon', '화천군'], ['yanggu', '양구군'],
        ['inje', '인제군'], ['goseong', '고성군'], ['yangyang', '양양군'],
      ]),
    ],
  },
  {
    slug: 'jeju',
    name: '제주권',
    summary: '제주시·서귀포',
    cities: [
      city('jeju', '제주', [
        ['jeju-si', '제주시'], ['seogwipo', '서귀포시'],
      ]),
    ],
  },
];

// ---- 조회 헬퍼 ----

export function getRegion(slug: string): Region | undefined {
  return regions.find((r) => r.slug === slug);
}

export function getCity(citySlug: string): { region: Region; city: City } | undefined {
  for (const region of regions) {
    const city = region.cities.find((c) => c.slug === citySlug);
    if (city) return { region, city };
  }
  return undefined;
}

export function getDistrict(
  citySlug: string,
  districtSlug: string
): { region: Region; city: City; district: District } | undefined {
  const found = getCity(citySlug);
  if (!found) return undefined;
  const district = found.city.districts.find((d) => d.slug === districtSlug);
  if (!district) return undefined;
  return { region: found.region, city: found.city, district };
}

export function allCityParams(): { city: string }[] {
  return regions.flatMap((r) => r.cities.map((c) => ({ city: c.slug })));
}

export function allDistrictParams(): { city: string; district: string }[] {
  return regions.flatMap((r) =>
    r.cities.flatMap((c) => c.districts.map((d) => ({ city: c.slug, district: d.slug })))
  );
}
