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
        <v-app-bar-title><v-btn href="#indexContainer">學生計算機年會 SITCON</v-btn></v-app-bar-title>
        <v-spacer></v-spacer>

        <v-btn icon>

        </v-btn>
        <v-btn href="#introContainer">
          關於我們
        </v-btn>
        <v-btn href="#promoteContainer">
          稿件招募
        </v-btn>
        <v-btn href="#eventContainer">
          入場方式
        </v-btn>
      </v-app-bar>

      <v-main>
        <v-container fluid id="indexContainer">
          <v-row class="text-center">
            <v-col cols="12">
              <v-img
                  :src="'/2023/imgs/logo.png'"
                  class="my-3 fade-in"
                  contain
                  height="200"
              />
            </v-col>

            <v-col class="mb-4">
              <h1  class="fade-in display-2 font-weight-bold mb-3">
                學生計算機年會 SITCON
              </h1>
              <h4 class="fade-in">Students’ Information Technology Conference</h4>
            </v-col>
            <v-col
                class="mb-5"
                cols="12"
            >
              <h2 class="headline font-weight-bold mb-5">
                2023 07/29~07/30 國立臺灣科技大學
              </h2>

              <v-row justify="center">
                <v-btn
                    href="https://coscup.org/2023/en/landing"
                    rounded="pill"
                    color="#3A7B1B"
                >
                  參與活動
                </v-btn>
                <v-btn
                    href="https://groups.google.com/g/coscup-2023-stu"
                    rounded="pill"
                    color="#3A7B1B"
                >
                  加入我們
                </v-btn>
                <v-btn
                    href="#promoteContainer"
                    rounded="pill"
                    color="#3A7B1B"
                >
                  我要投稿
                </v-btn>
              </v-row>
            </v-col>
          </v-row>
        </v-container>
        <!--社群介紹-->
        <v-container fluid id="introContainer">
          <v-row data-aos="fade-right">
            <v-col cols="12">
              <h1>關於 SITCON</h1>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              學生計算機年會（Students’ Information Technology Conference）自 2013 年發起，以學生為本、由學生自發舉辦，長期投身學生資訊教育與推廣開源精神，希望引領更多學子踏入資訊的殿堂，更冀望所有對資訊有興趣的學生，能夠在年會裏齊聚一堂，彼此激盪、傳承、啟發，達到「學以致用、教學相長」的實際展現。
              <br>
              <br>
              在 SITCON 的第 X 週年，期望我們秉持初衷——讓學生們分享與交流知識，把各地學生串連起來的 X 字路口——也期望每人皆能在與大家的聊天與討論之中，找到自己的方向、熱情。
            </v-col>
          </v-row>
        </v-container>
        <!--稿件招募-->
        <v-container fluid id="promoteContainer">
          <v-row data-aos="fade-right">
            <v-col cols="12">
              <h1>稿件招募</h1>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              還想在 SITCON 年會上進行發表嗎？今年到<b> 5/22</b>截止 COSCUP 在台科大開始徵稿啦！由 SITCON GDSC 攜手合作，「學生社群大亂鬥」帶來一個以學生為主體的議程軌，在這裡可以展現你的技能和經驗，也為自己的暑期增添色彩！
              <br>
              <br>
              不論你是從學生角度出發的經驗分享，還是探討學生相關議題，只要和資訊科技、電腦技術相關，或是社群相關，都歡迎投稿！你可以參考 SITCON 歷年的議程，或是 GDSC 去年的議程軌內容，發揮你的想像力，創造出屬於你的議程！
              <br>
              <br>
              投稿截止日期是 <b> 5/22</b>，詳細投稿方式和規定請點擊 <a href="https://pretalx.coscup.org/coscup-2023/cfp?_gl=1*1gtde7e*_ga*MTQwNDQ3MzU1OS4xNjgxMTQ1MDM2*_ga_C9EMTMDSS1*MTY4MTQ0Njg5MC4zLjEuMTY4MTQ0OTU3MS4wLjAuMA..">官網連結</a> 。期待你的投稿！

            </v-col>
          </v-row>
        </v-container>
        <!--入場方式-->
        <v-container fluid id="eventContainer">
          <v-row data-aos="fade-right">
            <v-col cols="6">
              <h1>入場方式</h1>
              <p class="mapText">

                今年 COSCUP 2023 在國立臺灣科技大學舉辦，無須進行報名，到現場即可直接參與；但希望大家填參與者大調查，幫助我們調查臺灣的開源生態！
              </p>
            </v-col>
            <v-col cols="6">
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
            學生計算機年會 Students' Information Technology Conference <br><br>
            合作聯繫 <a href="mailto://contact@sitcon.org">contact@sitcon.org</a> <br>
            票務問題 <a href="mailto://ticket@sitcon.org">ticket@sitcon.org</a>
          </div>

          <v-divider></v-divider>

          <div>
            {{ new Date().getFullYear() }} — <strong>SITCON</strong>
          </div>
        </v-footer>
      </v-main>
    </v-layout>
  </v-card>

</template>

<script>


export default {
  name: 'IndexView',
  data: () => ({
    ecosystem: [
      {
        text: 'vuetify-loader',
        href: 'https://github.com/vuetifyjs/vuetify-loader/tree/next',
      },
      {
        text: 'github',
        href: 'https://github.com/vuetifyjs/vuetify/tree/next',
      },
      {
        text: 'awesome-vuetify',
        href: 'https://github.com/vuetifyjs/awesome-vuetify',
      },
    ],
    importantLinks: [
      {
        text: 'Frontend GitHub',
        href: 'https://github.com/fan9704/MQTT-Frontend',
      },
      {
        text: 'Backend GitHub',
        href: 'https://github.com/fan9704/PetMonitoringSystem-Backend',
      },
      {
        text: 'Application GitHub',
        href: 'https://github.com/fan9704/PetMonitoringSystem-Application',
      },
      {
        text: 'Hardware GitHub',
        href: 'https://github.com/fan9704/PetMonitoringSystem-Hardware',
      },
    ],
    whatsNext: [
      {
        text: '註冊',
        href: 'https://vuetifyjs.com',
      },
      {
        text: '登入',
        href: 'https://vuetifyjs.com/introduction/roadmap/',
      },
    ],
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
      {
        name:'Telegram',
        link:'https://sitcon.org/tg',
        icon:'mdi-telegram'
      },
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