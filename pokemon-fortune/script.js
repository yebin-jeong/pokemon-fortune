const POKEMON_COUNT = 1010;
const LEGENDARY_IDS = [144, 145, 146, 150, 151, 243, 244, 245, 249, 250, 251, 382, 383, 384, 483, 484, 487, 493];

// 1. 시약
const CHEM_NAMES = [
  // 공정설계 & 시뮬레이션
  "종합공정설계 최종 보고서",
  "Aspen Plus 공정 모사 파일",
  "HYSYS 최적화 데이터 시트",
  "공정 경제성 평가(TEA) 결과",
  "P&ID 도면 검토 승인본",

  // 반도체 공정
  "반도체 8대 공정 실습 일지",
  "포토레지스트(PR) 도포 균일도",
  "플라즈마 식각(Etching) 프로파일",
  "박막 증착(CVD) 두께 측정 데이터",
  "CMP 평탄화 작업 리포트",

  // 연구 & 논문
  "창의심화연구 중간 결과물",
  "졸업논문 초록(Abstract)",
  "실험 데이터 회귀 분석 모델",
  "학부 연구생 랩 미팅 자료",
  "실험 장비 오차 보정 값",

  // 취창업 & 진로
  "취창업스쿨(공학) 포트폴리오",
  "기술 면접 대비 전공 요약집",
  "엔지니어 역량 기술서",
  "창업 아이템 특허 분석지",

  // 화학공학실험 및 설계
  "화학공학실험및설계 결과 레포트",
  "단위조작 실험 측정치",
  "반응기 설계 수치해석 데이터",
  "열교환기 성능 테스트 결과",
  "물질전달 계수 산출 근거",
];

// 2. 운세 문장 조각
const REMARK_SUB = [
  "이번 학기 전공 평점의 수득률(Yield)이",
  "오늘 하루 기분의 엔탈피 변화(ΔH)가",
  "지갑 잔고의 깁스 자유 에너지(ΔG)가",
  "교수님과의 인간관계 평형 상수(K)가",
  "과제 제출 기한까지의 확산 속도가",
  "알바 노동의 단위 공정 효율이",
  "시험 공부의 물질 수지(Material Balance)가",
  "점심 메뉴 선정의 반응 선택성이",
  "전공 서적 무게에 따른 척추 하중이",
  "실험 데이터의 정밀도(Precision)가",
  "이번 학기 졸업논문 통과 확률이",
  "종합공정설계 A+ 수득률(Yield)이",
  "취창업스쿨 과제 제출 기한의 압박이",
  "반도체 공정 실습 데이터의 정밀도가",
  "창의심화연구 중간 발표 멘탈 상태가",
  "화학공학실험및설계 보고서의 완성도가",
  "오늘 하루 교수님과의 피드백 엔탈피가",
  "취업 준비용 포트폴리오의 최적화 수준이",
  "기말고사 대비 전공 지식의 확산 속도가",
  "실험 결과값과 이론값의 오차 범위가",
];

const REMARK_STAT1 = ["역대급으로", "비정상적으로", "예상보다", "이론치보다", "꾸준하게", "매우"];

const REMARK_STAT2 = [
  "높아서 장학금 수령이 예상됨.",
  "안정적이라 멘탈이 아주 건강함.",
  "완벽해서 과탑을 노려볼 만함.",
  "정상 상태(Steady-state)라 아주 평온한 하루임.",
  "최적화(Optimization)가 잘 되어 효율이 폭발함.",
  "이론값과 완벽히 일치하여 기분이 매우 좋음.",
  "낮아서 조금 아쉽지만 재수강은 면할 수준임.",
  "불안정해서 조금 주의가 필요하지만 금방 회복됨.",
  "임계점(Critical point)을 넘어 최상의 컨디션을 유지 중임.",
  "활성화 에너지(Ea)가 낮아져서 무슨 일이든 술술 풀릴 기세임.",
  "순도(Purity) 99.9%로 잡념 없이 공부에 집중하기 딱 좋음.",
  "반응 속도가 매우 빨라 과제를 순식간에 끝낼 운명임.",
  "평형 상수(K)가 매우 커서 원하는 방향으로 모든 일이 진행됨.",
  "열역학적으로 매우 안정하여 외부 자극에도 흔들림이 없음.",
  "전환율(Conversion)이 100%에 수렴하여 노력한 만큼 성과가 나옴.",
  "부반응(Side reaction) 없이 오직 성공으로만 직행 중임.",
];

const REMARK_ACTION = [
  "조상님이 도우니 로또 매수를 추천함.",
  "오늘은 맛있는 걸 먹으며 휴식하길 권장함.",
  "당장 도서관으로 가면 공부가 아주 잘 될 것임.",
  "치킨과 맥주로 행복 반응을 일으키길 추천함.",
  "교수님의 칭찬이 예상되니 자신감을 가질 것.",
  "밤샘 없이도 과제를 끝낼 수 있는 행운이 따름.",
  "주변 동기들에게 커피 한 잔 사면 복이 옴.",
  "지금 상태 그대로 유지하면 이번 학기 올 에이쁠임.",
  "전공 서적을 펴기만 해도 이해가 쏙쏙 되는 기적을 경험함.",
  "오늘은 계산기 두드리는 족족 정답만 나올 운수임.",
  "학식 메뉴가 역대급일 확률이 높으니 기대해도 좋음.",
  "실험 결과가 완벽하게 나올 예정이니 일찍 퇴근 준비할 것.",
  "카페인 없이도 아데노신 수용체가 마비될 만큼 의욕이 넘침.",
  "주변 환경이 당신을 돕고 있으니 어려운 과제에 도전해 볼 것.",
  "당신의 열정이 주변 온도(T)를 높일 만큼 뜨거우니 열정적으로 보낼 것.",
  "오늘 하루는 깁스 자유 에너지(ΔG)가 음수(-)이므로 자발적으로 행복해질 것.",
];

// 랜덤 조합 함수
function generateLuckyItem() {
  const name = CHEM_NAMES[Math.floor(Math.random() * CHEM_NAMES.length)];

  return name;
}

function generateRemark() {
  const sub = REMARK_SUB[Math.floor(Math.random() * REMARK_SUB.length)];
  const s1 = REMARK_STAT1[Math.floor(Math.random() * REMARK_STAT1.length)];
  const s2 = REMARK_STAT2[Math.floor(Math.random() * REMARK_STAT2.length)];
  const act = REMARK_ACTION[Math.floor(Math.random() * REMARK_ACTION.length)];

  // 주어 + 부사 + 상태 + 행동지침 순으로 조합됩니다.
  return `${sub} ${s1} ${s2} ${act}`;
}

window.onload = () => {
  const savedName = localStorage.getItem("userName");
  if (savedName) {
    document.getElementById("user-name").value = savedName;
  }
  renderCalendar();
};

function isAlreadyDrawn() {
  const lastDate = localStorage.getItem("lastDrawDate");
  const today = new Date().toISOString().split("T")[0];
  return lastDate === today;
}

// 경고창 띄우기 함수
function showClassicAlert(msg) {
  document.getElementById("alert-message").innerText = msg;
  document.getElementById("classic-alert").classList.remove("hidden");
}

// 경고창 닫기 함수
function closeAlert() {
  document.getElementById("classic-alert").classList.add("hidden");
}

// 메인 뽑기 함수
async function drawPokemon() {
  const nameInput = document.getElementById("user-name").value;
  if (!nameInput) return showClassicAlert("연구원 성명을 입력하십시오.");

  // 하루 한 번 제한 체크
  if (isAlreadyDrawn()) {
    return showClassicAlert("금일 데이터 합성이 이미 완료되었습니다. 내일 다시 시도하십시오."); // 수정
  }
  localStorage.setItem("userName", nameInput);

  let pokemonId;
  if (Math.random() < 0.05) {
    pokemonId = LEGENDARY_IDS[Math.floor(Math.random() * LEGENDARY_IDS.length)];
  } else {
    pokemonId = Math.floor(Math.random() * POKEMON_COUNT) + 1;
  }

  try {
    const btn = document.getElementById("draw-btn");
    btn.innerText = "System: Processing...";
    btn.disabled = true;

    const [res, speciesRes] = await Promise.all([
      fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`),
      fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemonId}`),
    ]);

    const data = await res.json();
    const speciesData = await speciesRes.json();
    const koName = speciesData.names.find((n) => n.language.name === "ko").name;
    const koFlavor = speciesData.flavor_text_entries.find((f) => f.language.name === "ko");
    const description = koFlavor ? koFlavor.flavor_text.replace(/\n|\f/g, " ") : "데이터 분석 완료.";

    const result = {
      date: new Date().toISOString().split("T")[0],
      name: koName,
      img: data.sprites.other["official-artwork"].front_default || data.sprites.front_default,
      desc: description,
      item: generateLuckyItem(),
      remark: generateRemark(),
    };

    // 성공적으로 뽑았을 때만 마지막 날짜 업데이트
    localStorage.setItem("lastDrawDate", result.date);

    saveRecord(result);
    displayResult(result);
    renderCalendar();

    btn.innerText = "데이터 추출";
    btn.disabled = false;
  } catch (error) {
    console.error("Critical System Error:", error);
    alert("시스템 오류 발생. 네트워크 상태를 확인하십시오.");
    document.getElementById("draw-btn").disabled = false;
  }
}

/**
 * 1. 결과 표시 함수
 * API에서 받아온 데이터와 랜덤 생성된 문구를 화면의 리포트 카드에 매핑하고 보여줍니다.
 */
function displayResult(result) {
  const card = document.getElementById("result-card");
  card.classList.remove("hidden"); // 숨겨져 있던 리포트 카드를 표시

  // 리포트 제목에 연구원(사용자) 이름 삽입
  document.getElementById("result-title").innerText = `[LAB-REPORT] Researcher: ${localStorage.getItem("userName")}`;

  const imgElement = document.getElementById("pokemon-img");
  const cacheBuster = `?t=${new Date().getTime()}`; // 이미지 캐싱 방지를 위한 파라미터 추가
  imgElement.crossOrigin = "Anonymous"; // html2canvas 캡처를 위한 크로스 도메인 설정
  imgElement.src = result.img + cacheBuster;

  // 각 항목에 결과 데이터 주입
  document.getElementById("pokemon-name").innerText = `Subject ID: ${result.name}`;
  document.getElementById("pokemon-desc").innerText = `Discussion: ${result.desc}`;
  document.getElementById("lucky-item").innerText = result.item;
  document.getElementById("chem-remark").innerText = result.remark;

  // 결과 카드가 보이도록 부드럽게 스크롤 이동
  card.scrollIntoView({ behavior: "smooth" });
}

/**
 * 2. 기록 저장 함수
 * 새로 추출된 합성 결과를 로컬 스토리지의 기존 히스토리에 추가 저장합니다.
 */
function saveRecord(result) {
  // 기존 기록을 가져오거나 없으면 빈 배열 생성
  let history = JSON.parse(localStorage.getItem("fortuneHistory") || "[]");
  history.push(result); // 새로운 결과 추가
  localStorage.setItem("fortuneHistory", JSON.stringify(history)); // 다시 저장
}

/**
 * 3. 캘린더 렌더링 함수
 * 로컬 스토리지의 데이터를 기반으로 현재 월의 달력을 생성하고 기록이 있는 날에 이미지를 표시합니다.
 */
function renderCalendar() {
  const grid = document.getElementById("calendar-grid");
  if (!grid) return;
  grid.innerHTML = ""; // 기존 달력 내용 초기화

  // 요일 헤더 생성 (SUN ~ SAT)
  const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  days.forEach((day) => {
    const header = document.createElement("div");
    header.className = "calendar-header";
    header.innerText = day;
    grid.appendChild(header);
  });

  const now = new Date();
  const startDay = new Date(now.getFullYear(), now.getMonth(), 1).getDay(); // 1일의 시작 요일
  const daysInMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate(); // 해당 월의 총 일수
  const history = JSON.parse(localStorage.getItem("fortuneHistory") || "[]");

  // 1일 시작 전 빈 칸 생성
  for (let i = 0; i < startDay; i++) {
    const div = document.createElement("div");
    div.className = "day-slot empty";
    grid.appendChild(div);
  }

  // 날짜 칸 생성 및 기록 매핑
  for (let d = 1; d <= daysInMonth; d++) {
    const div = document.createElement("div");
    div.className = "day-slot";
    div.innerHTML = `<span>${d}</span>`;

    const dateStr = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
    const records = history.filter((h) => h.date === dateStr);

    // 해당 날짜에 기록이 있으면 가장 최근 포켓몬 이미지 표시
    if (records.length > 0) {
      const lastRecord = records[records.length - 1];
      const img = document.createElement("img");
      img.src = lastRecord.img + `?t=${new Date().getTime()}`;
      img.style.width = "40px";
      img.style.cursor = "pointer";

      // 이미지 클릭 시 해당 날짜의 리포트 다시 보기
      div.onclick = () => displayResult(lastRecord);
      div.appendChild(img);
    }
    grid.appendChild(div);
  }
}

/**
 * 4. 카드 저장(캡처) 함수
 * html2canvas 라이브러리를 이용해 리포트 영역을 이미지 파일로 내려받습니다.
 */
function saveCard() {
  const area = document.getElementById("capture-area");
  html2canvas(area, {
    useCORS: true, // 외부 이미지 서버 허용
    backgroundColor: "#ffffff", // 배경색 흰색 지정
  }).then((canvas) => {
    const link = document.createElement("a");
    link.download = `LAB_REPORT_${new Date().getTime()}.png`; // 파일명 설정
    link.href = canvas.toDataURL("image/png");
    link.click(); // 가상 링크 클릭으로 다운로드 실행
  });
}
