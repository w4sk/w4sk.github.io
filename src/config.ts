export type Publication = {
  year: string;
  month: string;
  type: string;
  title: string;
  journal: string;
  authors: string;
  doi?: string;
  url?: string;
  awards?: string;
};

export type BioDescPart = string | { text: string; url: string };

export type SiteConfig = {
  name: string;
  nameEn: string;
  affiliation: (string | { text: string; url: string })[];
  contact: {
    email: string;
    x: string;
    github: string;
  };
  biography: {
    education: { year: string; desc: string | BioDescPart[]; url?: string }[];
    experience: { year: string; desc: string | BioDescPart[]; url?: string }[];
    awards?: string;
  };
  publications: Publication[];
};

export const siteConfig: SiteConfig = {
  name: "渡辺 圭貴",
  nameEn: "Yoshiki WATANABE",
  affiliation: [
    "名古屋大学大学院工学研究科 情報・通信工学専攻",
    { text: "河口研究室", url: "https://ucl.nuee.nagoya-u.ac.jp/" },
    "博士後期課程2年",
  ],
  contact: {
    email: "yoshiki@ucl.nuee.nagoya-u.ac.jp",
    x: "https://x.com/w4skyyyy",
    github: "https://github.com/w4sk",
  },
  biography: {
    education: [
      {
        year: "2025.4 -",
        desc: [
          {
            text: "名古屋大学大学院工学研究科 情報・通信工学専攻",
            url: "https://www.engg.nagoya-u.ac.jp/",
          },
          " 博士後期課程",
        ],
      },
      {
        year: "2023.4 - 2025.3",
        desc: [
          {
            text: "名古屋大学大学院工学研究科 情報・通信工学専攻",
            url: "https://www.engg.nagoya-u.ac.jp/",
          },
          " 博士前期課程",
        ],
      },
      {
        year: "2019.4 - 2023.3",
        desc: [
          {
            text: "名古屋大学工学部 電気電子情報工学科",
            url: "https://www.nuee.nagoya-u.ac.jp/",
          },
        ],
      },
      {
        year: "2015.4 - 2018.3",
        desc: "愛知県立一宮高等学校",
      },
    ],
    experience: [
      {
        year: "2024.12 -",
        desc: [
          {
            text: "株式会社ExData",
            url: "https://exdata.co.jp/",
          },
          " 取締役",
        ],
      },
      {
        year: "2023.1 -",
        desc: [
          {
            text: "株式会社ExData",
            url: "https://exdata.co.jp/",
          },
        ],
      },
    ],
  },
  publications: [
    {
      year: "2025",
      month: "09",
      type: "International Conference",
      title:
        "Mitigating Latency Effects in VR180 Teleoperation via Virtual Robotic Arm Overlay",
      journal:
        "The 15th International Conference on Mobile Computing and Ubiquitous Networking (ICMU 2025)",
      authors:
        "Shuto Tsutsui, KIsho Watanabe, Ryuto Usami, Yuki Gushi, Yoshiki Watanabe, Nozomi Hayashida, Kaiya Shimura, Kenta Urano, Felix Jimenez, Takuro Yonezawa, Nobuo Kawaguchi",
      url: "https://db.uclab.jp/show/1561",
    },
    {
      year: "2025",
      month: "09",
      type: "Domestic Conference",
      title: "遠隔ロボットアームシステムにおける動作特徴に基づく可変制御",
      journal: "第30回日本バーチャルリアリティ学会大会",
      authors: "筒井秀斗, 渡辺圭貴, 浦野健太, 米澤拓郎, 河口信夫",
      url: "https://db.uclab.jp/show/1548",
    },
    {
      year: "2025",
      month: "09",
      type: "Domestic Conference",
      title:
        "VR180を用いたMRシステムにおける深度知覚問題解決のための視線適応型UI提示法",
      journal: "第30回日本バーチャルリアリティ学会大会",
      authors:
        "宇佐美龍斗, 渡辺圭貴, 志村魁哉, 林田望海, 浦野健太, 米澤拓郎, 河口信夫",
      url: "https://db.uclab.jp/show/1559",
    },
    {
      year: "2025",
      month: "08",
      type: "International Conference",
      title:
        "MetaUniTour: Enhancing Engagement and Intercultural Understanding through A Metaverse Tourism Platform",
      journal: "IEEE Metacom 2025",
      authors:
        "Kohei Matsumoto, Yoshiki Watanabe, Kaiya Shimura, Nozomi Hayashida, Shin Katayama, Kenta Urano, Nobuo Kawaguchi, Soko Aoki, Leleito Emanuel, Takuro Yonezawa",
    },
    {
      year: "2025",
      month: "06",
      type: "Journal",
      title:
        "グループテレプレゼンス環境における全方位インタラクションを可能にするロボットハンドシステムの提案",
      journal:
        "情報処理学会論文誌「多様なリアリティを繋ぎ・創るモバイルコンピューティングと高度交通システム」",
      authors:
        "渡辺 圭貴, 興野 悠太郎, 片山 晋, 浦野 健太, 米澤 拓郎, 河口 信夫",
      url: "https://db.uclab.jp/show/1549",
    },
    {
      year: "2025",
      month: "06",
      type: "Journal",
      title:
        "SemantiPack: An Efficient Real-World Data Compressor using Structural and Semantic Metadata",
      journal: "IEEE Access",
      authors:
        "Yoshiteru Nagata, Daiki Kohama, Yoshiki Watanabe, Shin Katayama, Kenta Urano, Takuro Yonezawa, Nobuo Kawaguchi",
      url: "https://db.uclab.jp/show/1541",
    },
    {
      year: "2025",
      month: "06",
      type: "Domestic Conference",
      title: "GADAUI：VR180を用いたMRシステムに向けた視線適応型UI提示法",
      journal: "マルチメディア、分散、協調とモバイル(DICOMO 2025) シンポジウム",
      authors:
        "宇佐美 龍斗, 渡辺 圭貴, 志村 魁哉, 林田 望海, ジメネス フェリックス, 片山 晋, 浦野 健太, 米澤 拓郎, 河口 信夫",
      url: "https://db.uclab.jp/show/1543",
    },
    {
      year: "2025",
      month: "02",
      type: "Domestic Conference",
      title:
        "VR180 遠隔ロボットアームシステムにおける操作支援のための情報提示手法の検討",
      journal: "第85回UBI研究会",
      authors:
        "筒井秀斗, 渡邉企章, 宇佐美龍斗, 具志祐希, 渡辺圭貴, 林田望海, 志村魁哉, 浦野健太, 米澤拓郎, 河口信夫",
      url: "https://db.uclab.jp/show/1529",
    },
    {
      year: "2024",
      month: "10",
      type: "International Conference (Demo)",
      title: "Demonstration: Remote 3D Scanning with VR and Robotic Arm",
      journal: "UbiComp / ISWC 2024 Posters & Demos",
      authors:
        "Ryuto Usami, Kisho Watanabe, Yuki Gushi, Shuto Tsutsui, Yoshiki Watanabe, Kazuma Kano, Yuya Aikawa, Kaiya Shimura, Nozomi Hayashida, Kenta Urano, Takuro Yonezawa, Nobuo Kawaguchi",
      url: "https://db.uclab.jp/show/1509",
      awards: "Best Demo Award 受賞",
    },
    {
      year: "2024",
      month: "09",
      type: "Domestic Conference",
      title: "遠隔MRロボットアーム制御によるスマートな3Dスキャンシステム",
      journal: "第29回日本バーチャルリアリティ学会大会",
      authors:
        "宇佐美龍斗, 渡邉企章, 具志 祐希, 筒井 秀斗, 渡辺 圭貴, 加納 一馬, 相川 雄也, 志村 魁哉, 林田 望海, 浦野 健太, 米澤 拓郎, 河口 信夫",
      url: "https://db.uclab.jp/show/1506",
    },
    {
      year: "2024",
      month: "06",
      type: "International Conference (Poster)",
      title:
        "Poster: Sustainable Data Management Platform for Spatio-Temporal Datasets",
      journal: "ACM MobiSys 2024 Poster",
      authors:
        "Yoshiteru Nagata, Daiki Kohama, Yoshiki Watanabe, Shin Katayama, Kenta Urano, Takuro Yonezawa, Nobuo Kawaguchi",
      url: "https://db.uclab.jp/show/1494",
    },
    {
      year: "2023",
      month: "11",
      type: "International Conference",
      title: "360 Robot Hand Interaction for Group Telepresence with MetaPo",
      journal:
        "The 13th International Conference on the Internet of Things (IoT 2023)",
      authors:
        "Yoshiki Watanabe, Nozomi Hayashida, Shin Katayama, Kenta Urano, Takuro Yonezawa, Nobuo Kawaguchi",
      url: "https://db.uclab.jp/show/1484",
      awards: "Best Demo Award 受賞",
    },
    {
      year: "2023",
      month: "11",
      type: "Workshop",
      title:
        "360 Robot Hand System for Omni-directional Interaction by Multiple Users",
      journal:
        "The 1st International Workshop on Internet of Realities (IoR-WS 2023) @ IoT 2023",
      authors:
        "Yoshiki Watanabe, Nozomi Hayashida, Shin Katayama, Kenta Urano, Takuro Yonezawa, Nobuo Kawaguchi",
      url: "https://db.uclab.jp/show/1485",
    },
    {
      year: "2023",
      month: "07",
      type: "Domestic Conference",
      title:
        "複数ユーザによる全方位インタラクションを可能にする360ロボットハンドシステム",
      journal: "マルチメディア，分散，協調とモバイル(DICOMO2023)シンポジウム",
      authors: "渡辺 圭貴, 林田 望海, 片山 晋, 浦野 健太, 米澤 拓郎, 河口 信夫",
      url: "https://db.uclab.jp/show/1472",
    },
    {
      year: "2023",
      month: "03",
      type: "Domestic Conference",
      title:
        "異種空間間のコミュニケーションを実現するロボット型メタポータルMetaPoにおけるロボットハンド・インタラクション",
      journal: "インタラクション2023",
      authors: "渡辺 圭貴, 林田 望海, 浦野 健太, 米澤 拓郎, 河口 信夫",
      url: "https://db.uclab.jp/show/1454",
      awards: "インタラクティブ発表賞（一般投票）受賞",
    },
    {
      year: "2022",
      month: "08",
      type: "Domestic Conference",
      title: "MetaPo：異空間コミュニケーションのためのロボット・メタポータル",
      journal: "電気・電子・情報関係学会 東海支部連合大会",
      authors: "林田望海，渡辺圭貴，浦野健太，米澤拓郎，河口信夫",
      url: "https://db.uclab.jp/show/1443",
    },
  ],
};
