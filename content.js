/**
 * ============================================================
 *  content.js  —  自分で編集するファイル
 * ============================================================
 *
 *  このファイルだけ編集すれば OK です．index.html は触らないでください．
 *
 *  【Newsの追加方法】
 *    NEWS 配列に項目を追加する（先頭が最新）
 *    img: 写真がなければ "" にする
 *
 *  【Publicationの追加方法】
 *    PUBLICATIONS の各カテゴリの配列に項目を追加する（先頭が最新）
 *    award: 受賞がなければ "" にする
 *
 * ============================================================
 */

/* ============================================================
   NEWS
   ============================================================ */
const NEWS = [
    {
        date: "2026.05",
        tag:  "Conference",
        text: "第29回応用力学シンポジウムに参加しました！",
        img:  "news/202605_ouriki.jpg",
    },
    {
        date: "2026.04",
        tag:  "Fellowship",
        text: "九州大学の博士後期課程に進学し，日本学術振興会 特別研究員（DC1）として採用されました！",
    },
    {
        date: "2026.03",
        tag:  "Graduation",
        text: "九州大学およびNational Taiwan Universityのダブル・ディグリー・プログラムを修了し，修士（工学）とMaster of Scienceの学位を取得しました！",
    },
];

/* ============================================================
   PROFILE
   ============================================================ */
const PROFILE = {
    /* 写真ファイルパス */
    photo: "profile.jpg",

    affiliation: [
        {
            ja: "九州大学大学院 工学府土木工学専攻 博士後期課程",
            en: "Doctoral Course in Civil Engineering, Kyushu University",
            url: "",
        },
        {
            ja: "災害数理研究室",
            en: "Crisis Informatics Laboratory",
            url: "https://saigaisuuriken-hp-main.vercel.app/",
        },
    ],

    education: [
        { year: "2026", ja: "碩士（理學），國立台灣大學",          en: "Master of Science, National Taiwan University" },
        { year: "2026", ja: "修士（工学），九州大学",              en: "Master of Engineering, Kyushu University" },
        { year: "2023", ja: "学士（工学），九州大学",              en: "Bachelor of Engineering, Kyushu University" },
        { year: "2021", ja: "準学士，神戸市立工業高等専門学校",    en: "Foundation Degree, Kobe City College of Technology" },
    ],

    experience: [
        {
            period: "2026–2029",
            ja: "日本学術振興会 特別研究員（DC1）",
            en: "JSPS Research Fellow DC1",
        },
    ],

    interests: [
        { ja: "防災工学",   en: "Disaster Prevention" },
        { ja: "粒子法",     en: "SPH Method" },
        { ja: "数値解析",   en: "Numerical Simulation" },
        { ja: "高性能計算", en: "HPC" },
    ],

    grants: [
        {
            period: "2026–2029",
            ja: "JSPS科研費（特別研究員奨励費）",
            en: "JSPS KAKENHI Grant-in-Aid for JSPS Fellows",
        },
    ],

    societies: [
        { ja: "公益社団法人 土木学会",        en: "Japan Society of Civil Engineers (JSCE)",                         url: "https://www.jsce.or.jp/" },
        { ja: "一般社団法人 日本計算工学会",  en: "Japan Society for Computational Engineering and Science (JSCES)", url: "https://www.jsces.org/" },
    ],

    links: [
        { label: "Google Scholar", url: "https://scholar.google.com/citations?user=LJXmIbsAAAAJ" },
        { label: "ResearchGate",   url: "https://www.researchgate.net/profile/Shodai-Okano" },
        { label: "researchmap",    url: "https://researchmap.jp/shodai-okano" },
    ],
};

/* ============================================================
   PUBLICATIONS
   ============================================================ */
const PUBLICATIONS = {

    /* --- 査読有り論文（主著） --- */
    peer_first: [
        {
            text: `<strong class="author">岡野翔大</strong>，森川ダニエル，大﨑春輝，浅井光輝 : μ(I)レオロジーを用いた流動化地盤解析の陰的SPH法による効率化，<em>土木学会論文集特集号（応用力学）</em>，Vol. 80, No. 15, pp.23-15018, 2024.
[<strong class="author">Shodai Okano</strong>, Daniel Morikawa, Haruki Osaki and Mitsuteru Asai: Efficient Fluidized Ground Analysis using µ(I) Rheology with Implicit SPH Method, <em>Japanese Journal of JSCE No.2 Special issue (Applied Mechanics)</em>, Vol. 80, No. 15, p.23-15018, 2024.]`,
            doi:   "https://doi.org/10.2208/jscejj.23-15018",
            award: "令和5年度応用力学論文賞",
        },
    ],

    /* --- 査読有り論文（共著） --- */
    peer_co: [
        {
            text: `Hsuan-Chih Yang, Chun-Jia Huang, Yung-Yen Ko, Kuan-Yu Chen, Chi-Chin Tsai, Chun-Hung Lin, Yu Wei Hwang, Min-Chien Chu, Yu-Syuan Jhuo, Yu-Ting Hsueh, <strong class="author">Shodai Okano</strong>, LeeYi Wang, Louis Ge: Geotechnical Reconnaissance of Hualien Port after the 2024 ML 7.2 Hualien Earthquake, <em>Soil Dynamics and Earthquake Engineering</em>, Vol. 198, pp.109613, 2025.`,
            doi:   "https://doi.org/10.1016/j.soildyn.2025.109613",
            award: "",
        },
    ],

    /* --- 査読無し論文 --- */
    non_peer: [
        {
            text: `<strong class="author">岡野翔大</strong>，森川ダニエル，葛宇甯，浅井光輝 : 変分マルチスケール法による安定化を導入した速度-圧力一体型SPH流体解析，<em>計算工学講演会論文集</em>，Vol. 30, pp. 860-864, 2025.`,
            doi: "", award: "",
        },
        {
            text: `<strong class="author">岡野翔大</strong>，森川ダニエル，大﨑春輝，浅井光輝 : μ(I)レオロジーモデルを用いた粒状流の完全陰解法型SPH解析，<em>計算工学講演会論文集</em>，Vol. 28, pp. 45-49, 2023.`,
            doi: "", award: "",
        },
    ],

    /* --- 国際学会 --- */
    international: [
        // {
        //     text: `<strong class="author">Shodai Okano</strong>, Daniel Morikawa, Mitsuteru Asai: hogehoge, <em>CFC 2027</em>, Yokohama, Japan, 2027.03.`,
        //     doi: "", award: "",
        // },
        // {
        //     text: `<strong class="author">Shodai Okano</strong>, Daniel Morikawa, Mitsuteru Asai: hogehoge, <em>20th SPHERIC World Conference</em>, Rome, Italy, 2027.02.`,
        //     doi: "", award: "",
        // },
        {
            text: `<strong class="author">Shodai Okano</strong>, Daniel Morikawa, Louis Ge, Mitsuteru Asai: Stabilized velocity-pressure monolithic SPH for incompressible fluid using Variational Multiscale Method, <em>APCOM-ACCM 2025</em>, Brisbane, Australia, 2025.12.`,
            doi: "", award: "",
        },
        {
            text: `<strong class="author">Shodai Okano</strong>, Daniel Morikawa, Louis Ge, Mitsuteru Asai: Improvement of Wall Boundary Treatment using Velocity-Pressure Monolithic SPH Fluid Analysis Algorithm, <em>PARTICLES 2025</em>, Barcelona, Spain, 2025.10.`,
            doi: "", award: "",
        },
        {
            text: `<strong class="author">Shodai Okano</strong>, Daniel Morikawa, Louis Ge, Mitsuteru Asai: Velocity and pressure monolithic scheme based on SPH for fluid flow simulations with arbitrary solid wall boundaries, <em>COMPSAFE 2025</em>, Kobe, Japan, 2025.07.`,
            doi: "", award: "",
        },
        {
            text: `<strong class="author">Shodai Okano</strong>, Mitsuteru Asai, Louis Ge: Implicit SPH Analysis of Non-Newtonian Fluids with High Viscosity Regions for Simulation of Slope Failure, <em>The 34th KKHTCNN</em>, Pattaya, Thailand, 2023.11.`,
            doi: "", award: "",
        },
    ],

    /* --- 国内学会 --- */
    domestic: [
        {
            text: `<strong class="author">岡野翔大</strong>，森川ダニエル，浅井光輝 : VM-SPH法による高粘性流体解析の効率化，<em>第29回応用力学シンポジウム</em>，千葉，2026.05.`,
            doi: "", award: "",
        },
        {
            text: `<strong class="author">岡野翔大</strong> : 固体-流体の強連成解析に向けたVM-SPH法の開発（ポスター発表），<em>JSCES夏季学生講演会2025</em>，茨城，2025.09.`,
            doi: "", award: "",
        },
        {
            text: `<strong class="author">岡野翔大</strong>，森川ダニエル，葛宇甯，浅井光輝 : あらゆる壁面形状でのSPH流体解析に適用可能な速度-圧力一体型解法の開発（ポスター発表），<em>令和7年度土木学会全国大会 第80回年次学術講演会</em>，熊本，2025.09.`,
            doi: "", award: "優秀ポスター発表賞",
        },
        {
            text: `<strong class="author">岡野翔大</strong>，森川ダニエル，葛宇甯，浅井光輝 : 変分マルチスケール法による安定化を導入した速度-圧力一体型SPH流体解析，<em>第30回計算工学講演会</em>，埼玉，2025.06.`,
            doi: "", award: "",
        },
        {
            text: `<strong class="author">岡野翔大</strong>，森川ダニエル，葛宇甯，浅井光輝 : 速度-圧力一体型SPH法による壁面境界処理の改良，<em>第28回応用力学シンポジウム</em>，京都，2025.05.`,
            doi: "", award: "",
        },
        {
            text: `<strong class="author">岡野翔大</strong>，森川ダニエル，葛宇甯，浅井光輝 : 任意形状の壁境界に適用可能な速度-圧力一体型SPH流体解析，<em>令和6年度土木学会西部支部研究発表会</em>，沖縄，2025.03.`,
            doi: "", award: "優秀講演賞",
        },
        {
            text: `<strong class="author">岡野翔大</strong> : GPUを用いた大規模斜面崩壊解析，<em>2024年度計算力学若手研究者交流会</em>，宮城，2024.09.`,
            doi: "", award: "",
        },
        {
            text: `<strong class="author">岡野翔大</strong>，森川ダニエル，大﨑春輝，浅井光輝 : 高粘性領域を有する非ニュートン流体の陰的SPH解析，<em>令和5年度土木学会全国大会 第78回年次学術講演会</em>，広島，2023.09.`,
            doi: "", award: "",
        },
        {
            text: `<strong class="author">岡野翔大</strong>，森川ダニエル，大﨑春輝，浅井光輝 : μ(I)レオロジーモデルを用いた粒状流の完全陰解法型SPH解析，<em>第28回計算工学講演会</em>，茨城，2023.05.`,
            doi: "", award: "",
        },
        {
            text: `<strong class="author">岡野翔大</strong>，森川ダニエル，大﨑春輝，浅井光輝 : 斜面崩壊被害の数値予測に向けた陰的SPH法による非ニュートン流体解析の効率化，<em>第26回応用力学シンポジウム</em>，東京，2023.05.`,
            doi: "", award: "",
        },
        {
            text: `<strong class="author">岡野翔大</strong>，浅井光輝 : 粒状体地盤を対象とする等価巨視的粘性モデルを用いたSPH解析，<em>令和4年度土木学会西部支部研究発表会</em>，熊本，2023.03.`,
            doi: "", award: "優秀講演賞",
        },
    ],

    /* --- 招待講演 --- */
    invited: [
        {
            text: `<strong class="author">岡野翔大</strong> : 変分マルチスケール法を導入した速度-圧力一体型流体解析アルゴリズム，<em>第13回マルチメソッド・新数値解析手法開拓研究会</em>，オンライン，2025.06.`,
            doi: "", award: "",
        },
    ],

    /* --- 受賞歴 --- */
    awards: [
        {
            text: `<strong class="author">岡野翔大</strong> : 優秀ポスター発表賞，<em>令和7年度土木学会全国大会 第80回年次学術講演会</em>，2025.09.`,
            doi: "", award: "",
        },
        {
            text: `<strong class="author">岡野翔大</strong> : 優秀講演賞，<em>令和6年度土木学会西部支部研究発表会</em>，2025.03.`,
            doi: "", award: "",
        },
        {
            text: `<strong class="author">岡野翔大</strong>，森川ダニエル，大﨑春輝，浅井光輝 : 令和5年度応用力学論文賞，2024.05.`,
            doi: "", award: "",
        },
        {
            text: `<strong class="author">岡野翔大</strong> : 優秀講演賞，<em>令和4年度土木学会西部支部研究発表会</em>，2023.03.`,
            doi: "", award: "",
        },
    ],

    /* --- その他 --- */
    others: [
        {
            text: `<strong class="author">岡野翔大</strong> : 速度-壓力單片SPH方法用於穩健滑坡模擬，2026.04.`,
            doi:   "https://doi.org/10.6342/NTU202600839",
            award: "",
        },
        {
            text: `<strong class="author">Shodai Okano</strong> :  <a href="https://www.ntuce-newsletter.tw/archives/16022" target="_blank">Little Step, Life-Changing Leap</a>, <em>NTUCE newsletter</em>, 2025.05.`,
            doi: "", award: "",
        },
    ],
};

/* ============================================================
   CONTACT
   ============================================================ */
const CONTACT = {
    tel:   "+81-92-802-3395",
    email: "s-okano@doc.kyushu-u.ac.jp",
    address: {
        ja: `九州大学大学院 工学府土木工学専攻 災害数理研究室<br>
〒819-0395 福岡県福岡市西区元岡744番地<br>
九州大学伊都キャンパス ウエスト2号館11階 1106号室`,
        en: `Crisis Informatics Laboratory,<br>
Department of Civil Engineering, Kyushu University<br>
744 Motooka, Nishi-ku, Fukuoka 819-0395, Japan`,
    },
};