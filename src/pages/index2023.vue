<template>
  <v-card class="mx-auto" >
    <v-layout>
      <v-app-bar
          color="teal-darken-4"
          image="https://picsum.photos/1920/1080?random"
      >
        <template v-slot:image>
          <v-img
              gradient="to top right, rgba(25, 70, 4,.8), rgba(58, 123, 27,.8)"
          ></v-img>
        </template>
        <v-app-bar-title href="#indexContainer">Student Community Battle 學生社群大亂鬥</v-app-bar-title>
<!--        <v-spacer></v-spacer>-->
        <div class="buttonGroup d-none d-md-block">
          <v-btn href="#introContainer">
            關於我們
          </v-btn>
          <v-btn href="#promoteContainer">
            稿件招募
          </v-btn>
          <v-btn href="#eventContainer">
            入場方式
          </v-btn>
        </div>

      </v-app-bar>

      <v-main>
        <v-container fluid id="indexContainer">
          <v-row class="text-center">
            <v-col cols="3"></v-col>
            <v-col cols="9">
              <v-img
                  :src="'/imgs/coscup-stu-logo.png'"
                  alt="logo"
                  class="my-3 fade-in"
                  contain
              />
            </v-col>
            <v-col cols="0"></v-col>
<!--            <v-col class="mb-4">-->
<!--              <h1  class="fade-in display-2 font-weight-bold mb-3">-->
<!--                學生計算機年會 SITCON-->
<!--              </h1>-->
<!--              <h4 class="fade-in">Students’ Information Technology Conference</h4>-->
<!--            </v-col>-->
<!--            <v-col-->
<!--                class="mb-5"-->
<!--                cols="12"-->
<!--            >-->
<!--              <h2 class="headline font-weight-bold mb-5">-->
<!--                2023 07/29~07/30 國立臺灣科技大學-->
<!--              </h2>-->


<!--            </v-col>-->
          </v-row>
          <v-row justify="center">
            <v-btn
                style="color: #d2e3d6"
                href="https://coscup.org/2023/en/landing"
                rounded="pill"
                color="#3A7B1B"
            >
              參與活動
            </v-btn>
<!--            <v-btn-->
<!--                style="color: #d2e3d6"-->
<!--                href="https://groups.google.com/g/coscup-2023-stu"-->
<!--                rounded="pill"-->
<!--                color="#3A7B1B"-->
<!--            >-->
<!--              加入我們-->
<!--            </v-btn>-->
            <v-btn
                style="color: #d2e3d6"
                href="#promoteContainer"
                rounded="pill"
                color="#3A7B1B"
            >
              我要投稿
            </v-btn>
          </v-row>
        </v-container>
        <!--社群介紹-->
        <v-container fluid id="introContainer">
          <div class="board">
            <v-row>
              <v-col cols="12" xs="12" sm="12" md="6" lg="8" xl="8" xxl="8">
                <h1  data-aos="fade-right" >關於 學生社群大亂鬥 </h1>
                學生社群大亂鬥是由 SITCON 學生計算機年會與 Google Developer Student Clubs Taiwan & Hong Kong (GDSC) 組成的學生社群議程軌。
                <br>
                作為學生展現自己的舞台，我們期待以學生為主體的稿件，例如：從學生角度出發的經驗分享、技術分享，專題研究成果、獨立研究甘苦談，或探討學生相關議題等等。
                <br>
                任何與資訊科技、電腦技術相關的講題，或是與 Google 技術、Google Developers 社群相關的投稿，我們都非常歡迎！
              </v-col>
              <v-col cols="12" xs="12" sm="12" md="6" lg="4" xl="4" xxl="4"  data-aos="flip-up">
                <v-img :src="'/imgs/coscup-og-logo.svg'"   id="og-logo">
                </v-img>
              </v-col>
            </v-row>
          </div>
        </v-container>
        <!--稿件招募-->
        <v-container fluid id="promoteContainer">
          <div class="board2">
            <v-row>
              <v-col cols="12" xs="12" sm="12" md="6" lg="4" xl="4" xxl="4"  data-aos="flip-left">
                <v-img :src="'/imgs/draft.png'"   id="og-logo">
                </v-img>
              </v-col>
              <v-col cols="12" xs="12" sm="12" md="6" lg="8" xl="8" xxl="8">
                <h1 data-aos="fade-right">稿件招募</h1>
                還想在 SITCON 年會上進行發表嗎？今年到<b> 5/22</b>截止 COSCUP 在台科大開始徵稿啦！由 SITCON GDSC 攜手合作，「學生社群大亂鬥」帶來一個以學生為主體的議程軌，在這裡可以展現你的技能和經驗，也為自己的暑期增添色彩！
                <br>
                <br>
                不論你是從學生角度出發的經驗分享，還是探討學生相關議題，只要和資訊科技、電腦技術相關，或是社群相關，都歡迎投稿！你可以參考 SITCON 歷年的議程，或是 GDSC 去年的議程軌內容，發揮你的想像力，創造出屬於你的議程！
                <br>
                <br>
                投稿截止日期是 <b> 5/22</b>，詳細投稿方式和規定請點擊 <a href="https://pretalx.coscup.org/coscup-2023/cfp?_gl=1*1gtde7e*_ga*MTQwNDQ3MzU1OS4xNjgxMTQ1MDM2*_ga_C9EMTMDSS1*MTY4MTQ0Njg5MC4zLjEuMTY4MTQ0OTU3MS4wLjAuMA..">官網連結</a> 。期待你的投稿！
              </v-col>
            </v-row>
          </div>
        </v-container>
        <!--入場方式-->
        <v-container fluid id="eventContainer">
          <v-row >
            <v-col cols="12" xs="12" sm="12" md="6" lg="6" xl="6" xxl="6">
              <h1>入場方式</h1>
              <div class="mapText">
                <h4>今年 COSCUP 2023 在國立臺灣科技大學舉辦，無須進行報名，到現場即可直接參與！ </h4>
                <h5>捷運</h5>
                <ul>
                  <li>松山新店線（綠線）：由公館站 2 號「銘傳國小」出口左轉，沿台大舟山路步行，於鹿鳴堂右轉，過基隆路後左行即可到達；或於公館站 1 號「水源市場」出口轉乘 1、673、907、綠 11、棕 12 直達。</li>
                  <li>文湖線（棕線）：於捷運六張犁站（往公館、永和方向）轉乘 1、207、672、650、基隆客運板基線直達。</li>
                </ul>
                <h5>公車</h5>
                <ul>
                  <li>聯營 1、207、254、275、275 副線、275 區間車、650、672、673、907、綠 11、棕 12、敦化幹線，於「臺灣科技大學」下車。</li>
                </ul>
                <h5>臺鐵、高鐵</h5>
                <ul>
                  <li>由台北車站搭乘捷運淡水信義（紅）線至中正紀念堂站，轉乘綠線至公館站 2 號「銘傳國小」出口左轉，沿台大舟山路步行，於鹿鳴堂右轉，過基隆路後左行即可到達；或於公館站 1 號「水源市場」出口轉乘 1、673、907、綠 11、棕 12 直達。</li>
                </ul>
                <h5>自行開車</h5>
                <ul>
                  <li>中山高速公路（國道一號）：下圓山交流道，接台北市建國南北高架道路，下辛亥路往木柵方向行駛，於辛亥路二段與基隆路交叉口（台大校園旁）右轉，過長興街後即可到達。</li>
                  <li>北二高（國道三號）：接台北聯絡道，於辛亥路三段與基隆路交叉口左轉，過長興街後即可到達。</li>
                </ul>
              </div>
            </v-col>
            <v-col cols="12" xs="12" sm="12" md="6" lg="6" xl=6 xxl="6" data-aos="flip-down">
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14455.616113270356!2d121.538498!3d25.013694!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9e4a4e741c4d6156!2z6ZuE6I-v5Y-w5Y2B5L2N5bGx6Lev5Y2A5aSp!5e0!3m2!1szh-TW!2stw!4v1617914503814!5m2!1szh-TW!2stw" width="100%" height="400" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
            </v-col>
          </v-row>
        </v-container>
        <!--聯絡我們-->
        <v-footer
            class="text-center d-flex flex-column footer"
        >
          <div>
            <v-btn
                color="black"
                v-for="icon in iconLinks"
                :key="icon"
                class="mx-4"
                :icon="icon.icon"
                :href="icon.link"
                variant="text"
            ></v-btn>
          </div>
          <div>
            歷年網站
            <v-btn
                color="black"
                v-for="(year, index) in years" :key="index" :href="`https://sitcon.org/${year}`" target="_blank"
                variant="text"
            >
              {{ year }}
            </v-btn>
          </div>

          <div class="pt-0">
            學生計算機年會 Students' Information Technology Conference <br>
            Google 學生開發者社團 Google Developer Student Clubs Taiwan & Hong Kong <br>
            合作聯繫 <a href="mailto://contact@sitcon.org">contact@sitcon.org</a> <br>
            <!--票務問題 <a href="mailto://ticket@sitcon.org">ticket@sitcon.org</a>-->
          </div>

          <v-divider></v-divider>

          <div>
            {{ new Date().getFullYear() }} — <strong>SITCON X GDSC</strong>
          </div>
        </v-footer>
      </v-main>
    </v-layout>
  </v-card>

</template>

<script>
import AOS from 'aos';
import 'aos/dist/aos.css';

export default {
  name: 'IndexView',
  data: () => ({
    icons: [
      'mdi-facebook',
      'mdi-instagram',
      'mdi-twitter',
      'mdi-linkedin',

    ],
    iconLinks:[
      {
        name:'Facebook',
        link:'https://www.facebook.com/SITCONtw/',
        icon:'mdi-facebook'
      },
      {
        name:'Instagram',
        link:'https://www.instagram.com/sitcon.tw/',
        icon:'mdi-instagram'
      },
      // {
      //   name:'Telegram',
      //   link:'https://sitcon.org/tg',
      //   icon:'mdi-telegram'
      // },
      {
        name:'Twitter',
        link:'https://sitcon.org/twitter',
        icon:'mdi-twitter'
      },
      {
        name:'Youtube',
        link:'https://sitcon.org/yt',
        icon:'mdi-youtube'
      },
      {
        name:'Medium',
        link:'https://sitcon.org/medium',
        icon:'mdi-mastodon'
      },
    ],
    years: [2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022]
  }),
  mounted() {
    AOS.init();
  },
}
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
.v-btn{
  color:white;
  margin: 5px;
}
#indexContainer{
  background-color: #DFF6D5;
}
#introContainer{
  background-color: #BCE3AA;
  padding: 5% 10%;
}
div.board{
  border-radius: 15px;
  padding: 2% 4%;
  background-color: #E4FED7;
}
#promoteContainer{
  background-color: #DFF6D5;
  padding: 5% 10%;
}
#eventContainer{
  background-color: #BCE3AA;
  padding: 5% 10%;
}
p.mapText{
  justify-content: center;
  height: 400px;
}
.footer{
  background-color: #DFF6D5;
}
</style>