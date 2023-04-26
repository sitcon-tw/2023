<template>
    <div class="navbarsection">
      
      <div class="navbar-item"><a href="#introContainer" class="btn navbarbtnred">關於我們</a></div>
      <div class="navbar-item"><a href="#promoteContainer" class="btn navbarbtnblue">稿件招募</a></div>
      <div class="logo">
        <a href="#indexContainer"><img :src="'/imgs/2023/SITCON&GDSC_logo.svg'" alt /></a>
      </div>
      <div class="navbar-item"><a href="#admittanceContainer" class="btn navbarbtngreen">入場方式</a></div>
      <div class="navbar-item"><a href="#footerContainer" class="btn navbarbtnyellow">聯絡我們</a></div>
    </div>
    <div class="container-fluid" id="indexContainer">
      <div class="text-center">
        <div id="first-section">
          <div class="fade-in">
            <div class="mainlogo">
              <img :src="'/imgs/2023/SITCON&GDSC_logo_BIG.svg'" alt />
            </div>
            <div class="fade-in" id="first-section-title">學生社群大亂鬥</div>
            <div class="datefont">2023 07/29~07/30 國立臺灣科技大學</div>
          </div>
        </div>
        <div class="mb-5">
          <div class="downicon">
            <a href="#introContainer"><img :src="'/imgs/2023/downicon.svg'" alt /></a>
          </div>
        </div>
      </div>
    </div>
    <!--社群介紹-->
    <div class="container-fluid" id="introContainer">
      <div data-aos="fade-right" class="fr">
        <div id="introsection" class="sectionbox">
          <div class="introsectiontitle">
            <div class="sword">
              <img :src="'/imgs/2023/sword.svg'" alt />
            </div>
            <div class="introsectiontitlecontect">
              學生社群大亂鬥 Student Adventure Time
              <div class="introsectiontitle-bgred"></div>
            </div>
          </div>
          <div>
            <div class="introsectioncontect">
              <div class="introsectioncontecttext">
                學生計算機年會（Students’ Information Technology Conference）自 2013
                年發起，以學生為本、由學生自發舉辦，長期投身學生資訊教育與推廣開源精神，希望引領更多學子踏入資訊的殿堂，更冀望所有對資訊有興趣的學生，能夠在年會裏齊聚一堂，彼此激盪、傳承、啟發，達到「學以致用、教學相長」的實際展現。
                <br>
                <br>在 SITCON 的第 X 週年，期望我們秉持初衷——讓學生們分享與交流知識，把各地學生串連起來的 X 字路口——也期望每人皆能在與大家的聊天與討論之中，找到自己的方向、熱情。
              </div>
              <div class="introsectioncontectimg">
                <img :src="'/imgs/2023/SITCON&GDSC_logo.svg'">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 稿件招募 -->
    <div class="container-fluid" id="promoteContainer">
      <div data-aos="fade-left" class="fl">
        <div id="promotesection" class="sectionbox">
          <div class="introsectiontitle">
            <div class="sword">
              <img :src="'/imgs/2023/sword.svg'" alt />
            </div>
            <div class="introsectiontitlecontect">
              稿件招募 Call For Proposals
              <div class="introsectiontitle-bgblue"></div>
            </div>
          </div>
          <div>
            <div class="introsectioncontect">
              <div class="introsectioncontecttext">
                還想在 SITCON 年會上進行發表嗎？今年到 5/22截止 COSCUP 在台科大開始徵稿啦！由 SITCON GDSC
                攜手合作，「學生社群大亂鬥」帶來一個以學生為主體的議程軌，在這裡可以展現你的技能和經驗，也為自己的暑期增添色彩！
                <br><br>
                不論你是從學生角度出發的經驗分享，還是探討學生相關議題，只要和資訊科技、電腦技術相關，或是社群相關，都歡迎投稿！你可以參考 SITCON 歷年的議程，或是 GDSC
                去年的議程軌內容，發揮你的想像力，創造出屬於你的議程！
                <br><br>
                投稿截止日期是 5/22，詳細投稿方式和規定請點擊 官網連結 。期待你的投稿！
              </div>
              <div class="introsectioncontectimg">
                <img :src="'/imgs/2023/papers.svg'">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 入場方式-->
    <div class="container-fluid" id="admittanceContainer">
      <div data-aos="fade-right" class="fc">
        <div id="admittancesection" class="sectionboxcenter">
          <div class="introsectiontitle">
            <div class="sword">
              <img :src="'/imgs/2023/sword.svg'" alt />
            </div>
            <div class="introsectiontitlecontect">
              入場方式 Admittance method
              <div class="introsectiontitle-bggreen"></div>
            </div>
          </div>
          <div>
            <div class="introsectioncontect">
              <div class="introsectioncontecttext">
                <strong>今年 COSCUP 2023 在國立臺灣科技大學舉辦，無須進行報名，到現場即可直接參與！</strong>
                <ul>
                  捷運
                  <li>松山新店線（綠線）：由公館站 2 號「銘傳國小」出口左轉，沿台大舟山路步行，於鹿鳴堂右轉，過基隆路後左行即可到達；或於公館站 1 號「水源市場」出口轉乘 1、673、907、綠 11、棕 12 直達。
                  </li>
                  <li>文湖線（棕線）：於捷運六張犁站（往公館、永和方向）轉乘 1、207、672、650、基隆客運板基線直達。</li>
                  公車
                  <li>聯營 1、207、254、275、275 副線、275 區間車、650、672、673、907、綠 11、棕 12、敦化幹線，於「臺灣科技大學」下車。</li>
                  臺鐵、高鐵
                  <li>由台北車站搭乘捷運淡水信義（紅）線至中正紀念堂站，轉乘綠線至公館站 2 號「銘傳國小」出口左轉，沿台大舟山路步行，於鹿鳴堂右轉，過基隆路後左行即可到達；或於公館站 1 號「水源市場」出口轉乘
                    1、673、907、綠 11、棕 12 直達。</li>
                  自行開車
                  <li>中山高速公路（國道一號）：下圓山交流道，接台北市建國南北高架道路，下辛亥路往木柵方向行駛，於辛亥路二段與基隆路交叉口（台大校園旁）右轉，過長興街後即可到達。</li>
                  <li>北二高（國道三號）：接台北聯絡道，於辛亥路三段與基隆路交叉口左轉，過長興街後即可到達。</li>
                </ul>
              </div>
              <div class="introsectioncontectmap">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14455.616113270356!2d121.538498!3d25.013694!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9e4a4e741c4d6156!2z6ZuE6I-v5Y-w5Y2B5L2N5bGx6Lev5Y2A5aSp!5e0!3m2!1szh-TW!2stw!4v1617914503814!5m2!1szh-TW!2stw"
                  width="100%" height="400" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- footer -->
    <div class="container-fluid" id="footerContainer">
      <div data-aos="fade-left" class="fc">
        <div id="footersection" class="sectionboxcenter">
          <div class="footercontect">
            <div class="footersectioncontecttext">
              <span>
                <a
                  color="white"
                  v-for="icon in iconLinks"
                  :key="icon"
                  :class="icon.icon"
                  :icon="icon.icon"
                  :href="icon.link" 
                  class="btnicon"
                  variant="text"
              >
              </a>
                <span>
                  <p><strong>歷年網站</strong></p>
                  <a color="black" class="btn btnyellow" v-for="(year, index) in years" :key="index"
                    :href="`https://sitcon.org/${year}`" target="_blank" variant="text">
                    {{ year }}
                  </a>
                </span>
              </span>
              <h5> 學生計算機年會 Students' Information Technology Conference</h5>
              <br>
              <h5> Google 學生開發者社團 Google Developer Student Clubs Taiwan & Hong Kong</h5>
              <br>
              <p>合作聯繫:<br><a href="mailto://contact@sitcon.org">contact@sitcon.org</a> </p>
              <p>{{ new Date().getFullYear() }} — <strong>SITCON X GDSC</strong></p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--   
    <div class="container-fluid" id="footerContainer">
      <div data-aos="fade-left" class="fc">
          <div id="footersection" class="sectionbox">
            <div  class="introsectiontitle">
              <div class="sword">
                <img :src="'/imgs/2023/sword.svg'" alt />
              </div>
              <div class="introsectiontitlecontect">
                稿件招募 Call For Proposals
                <div class="introsectiontitle-bgyellow"></div>
              </div>
            </div>
            <div >
              <div class="introsectioncontect">
                <div class="introsectioncontecttext">
                  還想在 SITCON 年會上進行發表嗎？今年到 5/22截止 COSCUP 在台科大開始徵稿啦！由 SITCON GDSC 攜手合作，「學生社群大亂鬥」帶來一個以學生為主體的議程軌，在這裡可以展現你的技能和經驗，也為自己的暑期增添色彩！
                  <br><br>
                  不論你是從學生角度出發的經驗分享，還是探討學生相關議題，只要和資訊科技、電腦技術相關，或是社群相關，都歡迎投稿！你可以參考 SITCON 歷年的議程，或是 GDSC 去年的議程軌內容，發揮你的想像力，創造出屬於你的議程！
                  <br><br>
                  投稿截止日期是 5/22，詳細投稿方式和規定請點擊 官網連結 。期待你的投稿！
                </div>
                <div class="introsectioncontectimg">
                  <img :src="'/imgs/2023/SITCON&GDSC_logo.svg'">
                </div>
              </div>
            </div>
          </div>
      </div>
    </div> -->
  </template>
  
  <script>
  import AOS from "aos";
  import "aos/dist/aos.css";
  
  export default {
    name: "IndexView",
    data: () => ({
      ecosystem: [
        {
          text: "vuetify-loader",
          href: "https://github.com/vuetifyjs/vuetify-loader/tree/next"
        },
        {
          text: "github",
          href: "https://github.com/vuetifyjs/vuetify/tree/next"
        },
        {
          text: "awesome-vuetify",
          href: "https://github.com/vuetifyjs/awesome-vuetify"
        }
      ],
      importantLinks: [
        {
          text: "Frontend GitHub",
          href: "https://github.com/fan9704/MQTT-Frontend"
        },
        {
          text: "Backend GitHub",
          href: "https://github.com/fan9704/PetMonitoringSystem-Backend"
        },
        {
          text: "Application GitHub",
          href: "https://github.com/fan9704/PetMonitoringSystem-Application"
        },
        {
          text: "Hardware GitHub",
          href: "https://github.com/fan9704/PetMonitoringSystem-Hardware"
        }
      ],
      whatsNext: [
        {
          text: "註冊",
          href: "https://vuetifyjs.com"
        },
        {
          text: "登入",
          href: "https://vuetifyjs.com/introduction/roadmap/"
        }
      ],
      icons: ["bi-facebook", "bi-instagram", "bi-twitter", "bi-linkedin"],
      iconLinks: [
        {
          name: "Facebook",
          link: "https://www.facebook.com/SITCONtw/",
          icon: "bi-facebook"
        },
        {
          name: "Instagram",
          link: "https://www.instagram.com/sitcon.tw/",
          icon: "bi-instagram"
        },
        {
          name: "Telegram",
          link: "https://sitcon.org/tg",
          icon: "bi-telegram"
        },
        {
          name: "Twitter",
          link: "https://sitcon.org/twitter",
          icon: "bi-twitter"
        },
        {
          name: "Youtube",
          link: "https://sitcon.org/yt",
          icon: "bi-youtube"
        },
        {
          name: "Medium",
          link: "https://sitcon.org/medium",
          icon: "bi-mastodon"
        }
      ],
      years: [2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022]
    }),
    mounted() {
      AOS.init();
    }
  };
  </script>
  <style>
  .fade-in {
    opacity: 0;
    animation-name: fade-in;
    animation-duration: 1s;
    animation-timing-function: ease-in;
    animation-fill-mode: forwards;
  }
  
  @keyframes fade-in {
    from {
      opacity: 0;
    }
  
    to {
      opacity: 1;
    }
  }
  /* navbar */
  
  .navbarsection {
    position: fixed;
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    padding-top: 16px;
    margin-left: 16px;
    z-index: 1;
  }
  
  .navbar-item {
    margin: 0 2.5% 0 2.5%;
    cursor: pointer;
    color: #ffffff;
  }
  
  .logo {
    margin: 0 2.5% 0 2.5%;
    cursor: pointer;
  }
  
  .navbarbtnred {
    color: #ea4335;
    transition: 0.5s;
    letter-spacing: 4px;
    cursor: pointer;
  }
  
  .navbarbtnred:hover {
    background-color: #ea4335;
    box-shadow: 0 0 5px #ea4335,
      0 0 25px #ea4335,
      0 0 50px #ea4335,
      0 0 60px #ea4335;
  }
  
  .navbarbtnblue {
    color: #4285F4;
    transition: 0.5s;
    letter-spacing: 4px;
    cursor: pointer;
  }
  
  .navbarbtnblue:hover {
    background-color: #4285F4;
    box-shadow: 0 0 5px #4285F4,
      0 0 25px #4285F4,
      0 0 50px #4285F4,
      0 0 60px #4285F4;
  }
  
  .navbarbtngreen {
    color: #77B55A;
    transition: 0.5s;
    letter-spacing: 4px;
    cursor: pointer;
  }
  
  .navbarbtngreen:hover {
    background-color: #77B55A;
    box-shadow: 0 0 5px #77B55A,
      0 0 25px #77B55A,
      0 0 50px #77B55A,
      0 0 60px #77B55A;
  }
  
  .navbarbtnyellow {
    color: #FBBC04;
    transition: 0.5s;
    letter-spacing: 4px;
    cursor: pointer;
  }
  
  .navbarbtnyellow:hover {
    background-color: #FBBC04;
    box-shadow: 0 0 5px #FBBC04,
      0 0 25px #FBBC04,
      0 0 50px #FBBC04,
      0 0 60px #FBBC04;
  }
  
  /* container */
  
  #indexContainer {
    background: url('/imgs/2023/bg.svg') no-repeat;
    background-color: #333333;
    height: 100vh;
    background-size: cover;
    background-position: center;
  }
  #introContainer {
    padding-top: 15vh;
    background-color: #333333;
    height: 100%;
  }
  #promoteContainer {
    padding-top: 15vh;
    background-color: #333333;
    height: 100%;
  }
  #admittanceContainer {
    padding-top: 15vh;
    background-color: #333333;
    height: 100%;
  }
  #footerContainer {
    padding-top: 15vh;
    background-color: #333333;
    height: 100%;
  }
  /* btn */
  .btnyellow {
    margin: 1%;
    color: #FBBC04;
    transition: 0.5s;
    letter-spacing: 4px;
    cursor: pointer;
  }
  .btnyellow:hover {
    background-color: #FBBC04;
    box-shadow: 0 0 5px #FBBC04,
      0 0 25px #FBBC04,
      0 0 50px #FBBC04,
      0 0 60px #FBBC04;
  }
  /* section */
  #first-section {
    padding: 3vw;
  }
  
  .mainlogo {
    height: 40vh;
  }
  
  .mainlogo img {
    margin-top: 3%;
    height: 100%;
  }
  
  #first-section-title {
    color: #ffffff;
    font-size: 6.7vw;
  }
  
  .datefont {
    color: #999;
    font-family: "Open Sans", sans-serif;
    font-weight: 900;
    font-size: 1.5vw;
  }
  
  .downicon {
    cursor: pointer;
    animation: jump 2s;
    animation-iteration-count: infinite;
  }
  
  .sectionbox {
    box-sizing: border-box;
    width: 75%;
    border: 5px solid #ffffff;
  }
  
  .sectionboxcenter {
    box-sizing: border-box;
    width: 90%;
    border: 5px solid #ffffff;
  }
  
  #introsection {
    box-shadow: 0px 0px 15px 5px #ea4335, 0px 0px 15px 5px #ea4335 inset;
    border-radius: 0px 15px 15px 0px;
  }
  
  #promotesection {
    box-shadow: 0px 0px 15px 5px #4285F4, 0px 0px 15px 5px #4285F4 inset;
    border-radius: 15px 0px 0px 15px;
  }
  
  #admittancesection {
    box-shadow: 0px 0px 15px 5px #77B55A, 0px 0px 15px 5px #77B55A inset;
    border-radius: 15px;
  }
  
  #footersection {
    box-shadow: 0px 0px 15px 5px #FBBC04, 0px 0px 15px 5px #FBBC04 inset;
    border-radius: 15px;
  }
  
  .introsectiontitle {
    display: flex;
    margin: 1%;
    height: fit-content;
  }
  
  .introsectiontitlecontect {
    color: #ffffff;
    font-family: "Open Sans", sans-serif;
    font-weight: 900;
    height: 5vw;
    position: relative;
    font-size: 2vw;
  }
  
  .introsectiontitle-bggreen {
    position: absolute;
    opacity: 0.7;
    width: 100%;
    height: 2vw;
    background: url(/imgs/2023/titlebggreen.svg) no-repeat;
    background-size: cover;
    background-position: center;
    bottom: 20%;
    left: 5%;
    z-index: -1;
  }
  
  .introsectiontitle-bgyellow {
    position: absolute;
    opacity: 0.7;
    width: 100%;
    height: 2vw;
    background: url(/imgs/2023/titlebgyellow.svg) no-repeat;
    background-size: cover;
    background-position: center;
    bottom: 20%;
    left: 5%;
    z-index: -1;
  }
  
  .introsectiontitle-bgblue {
    position: absolute;
    opacity: 0.7;
    width: 100%;
    height: 2vw;
    background: url(/imgs/2023/titlebgblue.svg) no-repeat;
    background-size: cover;
    background-position: center;
    bottom: 20%;
    left: 5%;
    z-index: -1;
  }
  
  .introsectiontitle-bgred {
    position: absolute;
    opacity: 0.7;
    width: 100%;
    height: 2vw;
    background: url(/imgs/2023/titlebgred.svg) no-repeat;
    background-size: cover;
    background-position: center;
    bottom: 20%;
    left: 5%;
    z-index: -1;
  }
  
  .footercontect {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    text-align: center;
  }
  
  .footersectioncontecttext {
    color: #ffffff;
    font-family: "Open Sans", sans-serif;
    width: 40vw;
    font-weight: 900;
    margin: 2vw 0vw 0vw 4vw;
  }
  .introsectioncontect {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }
  
  .introsectioncontecttext {
    color: #ffffff;
    font-family: "Open Sans", sans-serif;
    width: 40vw;
    font-weight: 900;
    margin: 0vw 0vw 3vw 4vw;
  }
  
  .introsectioncontectmap {
    width: 35vw;
    margin-right: 5vw;
  }
  
  .introsectioncontectimg {
    width: 300px;
    margin: 0vw 5vw 5vw 0vw;
  }
  
  .introsectioncontectimg img {
    width: 100%;
    height: 100%;
  }
  
  .sword {
    margin-left: 1vw;
    width: 3vw;
    height: 3vw;
  }
  
  .sword img {
    width: 100%;
    height: 100%;
    transform: rotate(30deg);
  }
  /* flex */
  .fl {
    display: flex;
    justify-content: flex-end;
  }
  
  .fr {
    display: flex;
    justify-content: flex-start;
  }
  
  .fc {
    display: flex;
    justify-content: center;
  }
  .btnicon{
    border-radius: 0.5rem;
    color: #ffffff;
    text-decoration: none;
    margin: 5%;
    padding: 5px;
    font-size: 1.2vw;
    transition: 0.3s;
  }
  .btnicon:hover{
    background-color: rgba(105, 105, 105, 0.3);
  }
  @keyframes jump {
    0% {
      transform: translate(0%, 0%);
    }
  
    50% {
      transform: translate(0%, 30%);
    }
  
    100% {
      transform: translate(0%, 0%);
    }
  }
  
  @media (max-width: 1262px) {
    .fl{
      justify-content: center;
    }
    .fr{
      justify-content: center;
    }
    #introsection,#promotesection {
      width: 90%;
      border-radius: 15px;
    }
  }
  @media (max-width: 992px) {
    
    #first-section {
      padding: 5vw;
    }
    .sword {
      width: 7vw;
      height: 7vw;
    }
    #first-section-title{
      font-size: 9vw;
    }
    .datefont{
      font-size: 3.5vw;
    }
    .fl{
      justify-content: center;
    }
    .fr{
      justify-content: center;
    }
    .introsectiontitlecontect {
      max-width: 100%;
      font-size: 40px;
    }
  
    #introsection,#promotesection {
      width: 90%;
      border-radius: 15px;
    }
  
    .introsectioncontecttext {
      width: 100%;
      margin: 0;
      padding: 20% 5% 5% 5%;
    }
  
    .introsectioncontectmap {
      width: 90%;
      margin: 0;
    }
    .introsectioncontectimg {
      justify-content: center;
      margin-right: 0;
    }
  
    .introsectioncontect {
      flex-direction: column;
      align-items: center;
    }
  
    .introsectiontitle-bgred,.introsectiontitle-bgblue,.introsectiontitle-bggreen,.introsectiontitle-bgyellow {
      display: none;
    }
    .footersectioncontecttext{
      width: 100%;
    }
    .btnicon{
      font-size: 3vw;
    }
  }
  
  @media (max-width: 640px) {
    #first-section {
      padding: 15vw;
    }
    .sword {
      width: 10vw;
      height: 10vw;
    }
  
    .introsectiontitlecontect {
      font-size: 28px;
    }
  
    .introsectioncontecttext {
      padding: 30% 5% 5% 5%;
    }
  }
  </style>
  
  