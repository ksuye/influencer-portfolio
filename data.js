// 인플루언서 협업 성과 데이터 — 새 협업은 여기에만 추가하면 페이지에 반영됩니다.
window.DATA = {
  updated: "2026-11-26",

  // ───────── 공구 ─────────
  groupbuys: [
    {
      id: "bessa",
      name: "베싸TV",
      handle: "@bessa_babyscience.tv",
      platform: "유튜브 · 인스타그램",
      period: "2026.10.08 ~ 10.14",
      product: "체험수업 2회권 (공구가 40,000원)",
      orders: 32,
      unit: "체험권",
      highlight: true,
      funnel: [
        { label: "공구 랜딩 방문", value: 615 },
        { label: "체험권 버튼 클릭", value: 256 },
        { label: "결제", value: 32 }
      ],
      daily: [["10/08", 1], ["10/09", 9], ["10/10", 6], ["10/11", 2], ["10/12", 4], ["10/13", 5], ["10/14", 5]],
      contents: [
        { type: "유튜브 본편", title: "휘둘리는 아이, 소심한 아이, 눈치없는 아이.. 사회성 좋아진 케이스 뜯어보니", url: "https://www.youtube.com/watch?v=1JMRlSB1JAc", views: 20986, likes: 254 },
        { type: "유튜브 쇼츠", title: "친구 관계 어려운 아이 제대로 돕는 법", url: "https://www.youtube.com/shorts/QS_c46AfYu0", views: 4049, likes: 26 },
        { type: "유튜브 쇼츠", title: "또래관계 손놓고 있어도 될까", url: "https://www.youtube.com/shorts/w03TFIUsXN4", views: 3164, likes: 40 },
        { type: "인스타 릴스", title: "공구 안내 릴스 1", url: "https://www.instagram.com/p/DeUM61pPTEr/" },
        { type: "인스타 릴스", title: "공구 안내 릴스 2", url: "https://www.instagram.com/p/DebxfaQvDX7/" }
      ],
      points: [
        "치료사 × 베싸TV 사례 분석형 본편으로 신뢰도 확보, 쇼츠·릴스로 공구 기간 중 재노출",
        "공구 첫날 대비 2일차 결제 9배(1 → 9건), 마감 전 2일 연속 5건 유지",
        "체험 2회 후 정규 전환 시 베싸TV 팔로워 전용 혜택으로 장기권 전환 유도"
      ]
    },
    {
      id: "rabbit",
      name: "토끼네가족",
      handle: "@four4rabbit",
      platform: "인스타그램 · 블로그",
      rounds: [
        { label: "1차", period: "2026.06.26 ~ 07.01", result: "정규 1년권 10건", orders: 10 },
        { label: "2차", period: "2026.08.14 ~ 08.21", result: "체험권 20건", orders: 20 },
        { label: "3차", period: "2026.11.23 ~ 11.29", result: "정규 1년권 공구 진행 중", orders: null, live: true, tracker: "https://gb121-tracker.vercel.app" }
      ],
      contents: [
        { type: "인스타 릴스", title: "1차 릴스", url: "https://www.instagram.com/reel/DUp3jwggcjS/" },
        { type: "블로그", title: "1차 후기", url: "https://blog.naver.com/make-memories/224329829401" },
        { type: "인스타 릴스", title: "2차 릴스", url: "https://www.instagram.com/p/DcHs41VSZfr/" },
        { type: "블로그", title: "2차 후기", url: "https://blog.naver.com/make-memories/224382572408" }
      ],
      points: [
        "3회 연속 재협업 — 1년권 → 체험권 → 1년권 공구가로 오퍼를 바꿔 가며 팔로워 피로도 관리",
        "3차는 전용 상품(121)과 전용 랜딩·실적 페이지를 따로 만들어 성과를 분리 집계"
      ]
    },
    {
      id: "choine",
      name: "우당탕탕 초이네",
      handle: "@bamgo_new",
      platform: "인스타툰 · 블로그",
      rounds: [
        { label: "1차", period: "2026.09.03 ~ 09.09", result: "체험권 10건", orders: 10 },
        { label: "2차", period: "2026.11.16 ~ 12.09", result: "정규 1년권 공구 진행 중", orders: null, live: true, tracker: "https://gb117-tracker.vercel.app" }
      ],
      contents: [
        { type: "인스타툰", title: "1차 인스타툰", url: "https://www.instagram.com/p/Dc02svoknVL/" },
        { type: "블로그", title: "1차 후기", url: "https://blog.naver.com/oxxxo/224399427090" }
      ],
      points: [
        "인스타툰 크리에이터와 체험권 → 1년권으로 단계 확장한 재협업",
        "2차는 공구 가이드 페이지와 전용 상품(117)을 제작하고, TM 경로 결제를 제외해 순수 인플루언서 기여만 집계"
      ]
    },
    {
      id: "hahassem",
      name: "하하쌤맘",
      handle: "@hahassemmom",
      platform: "인스타그램",
      rounds: [{ label: "1차", period: "2026.09.14 ~ 09.20", result: "체험권 0건", orders: 0 }],
      contents: [{ type: "인스타 릴스", title: "공구 릴스", url: "https://www.instagram.com/p/DdJRMotSkle/" }],
      points: ["단일 릴스만 진행 — 이후 공구는 본편 + 숏폼 + 블로그처럼 2개 이상 접점을 기본 조건으로 설계"]
    }
  ],

  // ───────── 릴스 (인포크 시딩) ─────────
  reels: {
    // 브랜디드 릴스 협업 — 기획·영상 편집 직접 진행
    collabs: [
      {
        name: "한태이",
        handle: "@hantae.e_yoyoyoya_",
        followers: 85000,
        date: "2026.08.11",
        format: "인스타 릴스 · 두부핑퐁 공동 게시(콜라보)",
        role: "기획 · 영상 편집 직접 제작",
        url: "https://www.instagram.com/reel/Db7cDS9B_TM/",
        views: null, // 조회수 확인 후 입력
        likes: 790,
        comments: 43,
        points: [
          "기획부터 영상 편집까지 직접 제작 — 크리에이터는 촬영·출연만 맡아 메시지 일관성 확보",
          "'버릇없는 아이인 줄 알았는데 맥락을 못 읽은 것' → 두부핑퐁 연습 → 아이가 먼저 눈치를 챔, 양육자 공감형 스토리 구조",
          "두부핑퐁 계정과 콜라보 게시로 양쪽 팔로워에 동시 노출, 2분 진단·2회 체험 상담으로 CTA 연결",
          "댓글에서 친구·가족 태그 공유가 이어지며 자연 확산"
        ]
      },
      {
        name: "아동심리상담전문가 엄마",
        handle: "@tai.ming_mom",
        followers: 30000,
        date: "2026.10.23",
        format: "인스타 릴스 · 전문가 사용 후기",
        role: null,
        url: "https://www.instagram.com/reel/De1hlXABW4i/",
        views: null, // 조회수 확인 후 입력
        likes: 364,
        comments: 116,
        points: [
          "14년 차 아동심리상담사가 초1 딸과 직접 써 본 후기 — 전문가 시선으로 '스스로 말하는 연습'과 체험 후 상담을 짚어 신뢰도 확보",
          "댓글에 '핑퐁'을 남기면 사회성 연습 자료와 체험 신청 링크를 DM으로 보내는 댓글 참여형 CTA",
          "좋아요 대비 댓글 비율 32% — 댓글 키워드 참여로 반응과 리드를 함께 확보"
        ]
      }
    ],
    campaign: "인포크 시딩 캠페인 · 아동/양육자 후기 릴스",
    started: "2026.10",
    tracks: [
      {
        name: "아동 후기",
        criteria: "교육 콘텐츠 협업 이력 · 평균 조회수 · 아이의 다양한 모습을 담는 계정",
        creators: [
          ["____sy.luv", 5092, 6663], ["heanuu", 107528, 11407], ["ggyu_vely823", 27770, 22657],
          ["ha_rin_baby", 37815, 33769], ["merry_lovely_", 28161, 13327], ["choi__hyein", 12349, 2342],
          ["yours_ming", 61037, 5398], ["joo.joo_zip", 20447, 16936], ["chaaaeuns2", 35662, 6838],
          ["ihyeran277", 95859, 4998]
        ]
      },
      {
        name: "양육자 후기",
        criteria: "양육자 출연 콘텐츠 비중 · 평균 조회수 · 교육 콘텐츠 협업 이력",
        creators: [
          ["yxxnsun__", 47100, 27270], ["jw_son_diary", 26919, 59648], ["gan_vely", 44531, 139747],
          ["my.siyeon", 39898, 16534], ["bang_sl7", 71272, 128467], ["star_hyoeun", 29724, 13515],
          ["bubbly_ayul", 114237, 22914], ["hi_hamin_rana", 86582, 28134], ["pkhh_luv2", 51518, 15692],
          ["ever6486", 106149, 13601]
        ]
      }
    ],
    // 메타 파트너십 광고로 재활용돼 결제 알림 utm_content에 확인된 크리에이터
    partnershipAds: ["my.siyeon", "ggyu_vely823", "jw_son_diary"],
    // 인포크 콘텐츠 탭 성과(조회수·좋아요 등) — 추가 예정
    contentResults: null
  }
};
