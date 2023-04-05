<script lang="ts" setup>
// metaタグ
useHead({
  meta: [
    {
      name: "description",
      content: "チーム「Luminess」および当Webサイトに関する情報です。",
    },
    {
      property: "og:url",
      content: "https://luminess.games/about",
    },
    {
      property: "og:type",
      content: "article",
    },
    {
      property: "og:title",
      content: "チームLuminessおよび当サイトについて",
    },
    {
      property: "og:description",
      content: "チーム「Luminess」および当Webサイトに関する情報です。",
    },
    {
      property: "og:site_name",
      content: "チームLuminessおよび当サイトについて",
    },
    {
      name: "twitter:title",
      content: "チームLuminessおよび当サイトについて",
    },
    {
      name: "twitter:description",
      content: "チーム「Luminess」および当Webサイトに関する情報です。",
    },
  ],
});
</script>

<template>
  <v-container>
    <h1 class="my-4 text-h4 font-weight-bold">
      チームLuminessおよび当サイトについて
    </h1>
    <!-- Luminess -->
    <v-card variant="outlined" class="my-8">
      <v-row>
        <v-col
          cols="12"
          md="6"
          class="bg-primary-darken-8 d-flex align-center justify-center pa-10"
        >
          <v-img
            aspect-ratio="1"
            max-width="60%"
            src="/images/team_mark_white.svg"
            contain
            alt="チームLuminessのロゴ"
          ></v-img>
        </v-col>
        <v-col cols="12" md="6">
          <v-card-title>
            <span class="my-4 text-h5 font-weight-bold">
              Luminess（ルミネス）
            </span>
          </v-card-title>
          <v-card-text>
            <div class="my-4">
              Luminessは、株式会社セガが運営するオンラインゲーム
              <a
                class="font-weight-bold hover:underline mx-1"
                href="https://pso2.jp/players"
                target="_blank"
                aria-label="PSO2のWebサイトへのリンク"
              >
                PHANTASY STAR ONLINE 2 NEW GENESIS
              </a>
              内のShip5（ラグズ）で活動しているチームです。
            </div>
            <div class="my-4">
              これといったノルマは無く、チームツリーの使用も自由です。<br />
              チームポイントは、各々がPSO2を遊ぶ中で片手間で収集してくれたら嬉しい程度で、特に積極的に稼いでほしいという事はありません。
            </div>
            <div class="my-4">
              というより、チームマスター自身が稼いでません←
            </div>
            <div class="my-4">
              良く言えば　<span class="font-weight-bold text-h6">超自由</span
              ><br />
              悪く言えば　<span class="font-weight-bold text-h6">放任主義</span
              ><br />
            </div>
            <div class="my-4">そんなチームです。</div>
            <div class="my-8">
              ただし、最低限
              <span class="text-red-600 font-weight-bold underline mx-2">
                「他のプレイヤーに迷惑はかけてはならない」
              </span>
              という点だけは守るように周知しています。
            </div>
            <div class="my-4">
              PSO2NGSの公式サイトにて公開されている
              <a
                class="font-weight-bold hover:underline mx-1"
                href="https://pso2.jp/players/support/rules/manners/playmanners/"
                target="_blank"
                aria-label="アークス「プレイマナー」講座"
              >
                アークス「プレイマナー」講座
              </a>
              の「プレイマナー講座」の内容を遵守することを推奨しています。
            </div>
          </v-card-text>
        </v-col>
      </v-row>
    </v-card>

    <!-- レイン -->
    <v-card variant="outlined" class="my-8">
      <v-row>
        <v-col
          cols="12"
          md="6"
          class="d-flex align-center justify-center pa-10"
        >
          <v-img
            aspect-ratio="1"
            max-width="60%"
            src="/images/IMG_1184.webp"
            loading="lazy"
            alt="レインアイコン"
            contain
          />
        </v-col>
        <v-col cols="12" md="6">
          <v-card-title>
            <span class="my-4 text-h5 font-weight-bold">
              レイン（管理者）
            </span>
          </v-card-title>
          <v-card-text>
            <div class="my-4">
              チームLuminessのチームマスターで、当サイトの管理者。
            </div>
            <div class="my-4">
              普段はレガシーな分野のシステムエンジニアをする傍ら、プライベートでモダンな技術に触れて遊んでいるよ！<br />
            </div>
            <div class="my-4">
              <span class="text-sm">
                レガシー分野は正直つまらん… ε-(‐ω‐；)
              </span>
            </div>
            <div class="my-4">
              新しいものが大好きで、気になったらとりあえず試して見る精神。<br />
              その結果、実はLuminessのサイトはこれが三代目です。
            </div>
            <div class="my-4">
              最初はLaravelで構築し、ヘッドレスCMSを知ってからはVue.jsを使ってSPAとして作成したり。<br />
              そして、今回はJamstackの練習を兼ねてNuxtを使って作り直しました・ω・
            </div>
            <div class="my-8">
              ちなみに、左のアイコンは当チームのマネージャーで、僕の相棒
              <a
                class="font-weight-bold hover:underline"
                href="https://twitter.com/ramyusu_aurasu"
                >クラレント</a
              >
              さんの作品です！
            </div>
          </v-card-text>
        </v-col>
      </v-row>
    </v-card>

    <!-- Jamstack -->
    <v-card variant="outlined" class="my-8">
      <v-row>
        <v-col
          cols="12"
          md="6"
          class="d-flex align-center justify-center pa-10"
        >
          <v-img
            aspect-ratio="1"
            max-width="60%"
            src="/images/jamstack-logo.svg"
            loading="lazy"
            alt="Jamstack"
            contain
          />
        </v-col>
        <v-col cols="12" md="6">
          <v-card-title>
            <span class="my-4 text-h5 font-weight-bold"> Jamstack </span>
          </v-card-title>
          <v-card-text>
            <div class="my-4">
              Jamstackは、現在レインが興味を持っているサイト運営上の概念です。<br />
              JamstackのJamは、JavaScript(J), API(A),
              Markup(M)の略だそうです。<br />
            </div>
            <div class="my-4">
              Netlify社により2019年頃に提唱されたそうですが、レインは2022年の暮に知りましたｗ
            </div>
            <div class="my-4">
              通常のWordpressのように、コンテンツ管理とWebページの描写を一つのサーバで行うのではなく、
              ヘッドレスCMSを使用してWebサイトのコンテンツ管理をフロントエンドから分離して管理。
            </div>
            <div class="my-4">
              かつ、Webページ自体もビルド時にその時点のCMSの情報を基に静的ページを全て生成しておき、
              対客上は静的ページを表示するのみとすることで高レスポンスを実現できるそうです。
            </div>
            <div class="my-8">
              細かいことはまだレインもわかりませんが、このサイトは以下の技術やプロダクトを利用して、Jamstackとなるように構築しています。
            </div>
          </v-card-text>
        </v-col>
      </v-row>
    </v-card>

    <!-- Nuxt -->
    <v-card variant="outlined" class="my-8">
      <v-row>
        <v-col
          cols="12"
          md="6"
          class="d-flex align-center justify-center pa-10"
        >
          <v-img
            aspect-ratio="1"
            max-width="60%"
            src="/images/nuxt-logo.svg"
            alt="Nuxt Logo"
            contain
          />
        </v-col>
        <v-col cols="12" md="6">
          <v-card-title>
            <span class="my-4 text-h5 font-weight-bold"> Nuxt3 </span>
          </v-card-title>
          <v-card-text>
            <div class="my-4">
              元々、レインはVue.jsを使ってWebサイトを作って遊んだり、Electronと組み合わせてスタンドアローンのソフトウェアを
              作ったりしていました。
            </div>
            <div class="my-4">
              Nuxt.jsはVue.jsを基にしており、かつサーバサイドでのレンダリングも、静的サイトの生成も可能になった上位互換ということで、
              今回選択しました。
            </div>
            <div class="my-4">
              他にも、ReactベースのNext.jsなんかもありましたが、個人的にReactのようなJSX記法？は馴染めませんでした。<br />
              マークアップ部分とロジックは分けて書きたい！
            </div>
          </v-card-text>
        </v-col>
      </v-row>
    </v-card>

    <!-- Newt -->
    <v-card variant="outlined" class="my-8">
      <v-row>
        <v-col
          cols="12"
          md="6"
          class="d-flex align-center justify-center pa-10"
        >
          <v-img
            aspect-ratio="1"
            max-width="60%"
            src="https://www.newt.so/_nuxt/img/logo.1a91cab.svg"
            alt="Newt Logo"
            contain
          />
        </v-col>
        <v-col cols="12" md="6">
          <v-card-title>
            <span class="my-4 text-h5 font-weight-bold"> Newt </span>
          </v-card-title>
          <v-card-text>
            <div class="my-4">
              Newt（ニュート）は、国産のヘッドレスCMSです。<br />
              2022年にリリースされたばかりの新しいCMSで、国産なのでもちろん日本語対応。<br />
              国産のヘッドレスCMSではmicroCMSが有名ですが、Newtのほうが現時点で無料枠が広いと感じたので採用に至りました。
            </div>
            <div class="my-4">
              2023年4月現在、無料枠でモデル数（API数）とコンテンツ数が無制限で、月に100GBまで転送量の枠があるのは、個人利用としては非常に魅力的！<br />
              <div class="mt-2 text-caption">
                ※ 最新の料金プランは
                <a
                  class="font-weight-bold hover:underline"
                  href="https://www.newt.so/plan"
                  target="_blank"
                >
                  コチラ
                </a>
                をどうぞ。
              </div>
            </div>
          </v-card-text>
        </v-col>
      </v-row>
    </v-card>

    <!-- Vuetify & tailwindcss -->
    <v-card variant="outlined" class="my-8">
      <v-row>
        <v-col
          cols="12"
          md="6"
          class="d-flex align-center justify-center pa-10"
        >
          <v-row align="center">
            <v-col align="center" cols="12">
              <v-img
                max-width="60%"
                src="https://cdn.vuetifyjs.com/docs/images/logos/vuetify-logo-v3-slim-text-light.svg"
                alt="Vuetify Logo"
                contain
              />
            </v-col>
            <v-col align="center" cols="12">
              <v-img
                max-width="60%"
                src="/images/tailwindcss-logo.svg"
                alt="Vuetify Logo"
                contain
              />
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" md="6">
          <v-card-title>
            <span class="my-4 text-h5 font-weight-bold"> Vuetify & tailwindcss</span>
          </v-card-title>
          <v-card-text>
            <div class="my-4">
              当サイトのデザインには、Vue.jsのUIフレームワークであるVuetifyと、CSSフレームワークであるtailwindcssを使用しています。<br />
            </div>

            <div class="my-4">
              Vuetifyは、Vue.jsのUIフレームワークです。<br />
              Vue.jsのUIフレームワークでは最も人気が高く、日本語ドキュメントも充実しているので選択しました。
            </div>

            <div class="my-4">
              tailwindcssは、CSSフレームワークです。<br />
              CSSフレームワークでは最も人気が高く、Vuetifyの補完として使用しています。
            </div>
          </v-card-text>
        </v-col>
      </v-row>
    </v-card>

    <!-- CloudflarePages -->
    <v-card variant="outlined" class="my-8">
      <v-row>
        <v-col
          cols="12"
          md="6"
          class="d-flex align-center justify-center pa-10"
        >
          <v-img
            aspect-ratio="1"
            max-width="60%"
            src="/images/cloudflare-logo.svg"
            alt="Cloudflare Logo"
            contain
          />
        </v-col>
        <v-col cols="12" md="6">
          <v-card-title>
            <span class="my-4 text-h5 font-weight-bold"> Cloudflare Pages </span>
          </v-card-title>
          <v-card-text>
            <div class="my-4">
              当サイトは、Cloudflare Pagesを使用しています。<br />
              Cloudflare Pagesは、Cloudflareのサービスで、静的サイトを無料でホスティングできるサービスです。<br />
              また、GitHubとの連携が可能なので、GitHubにプッシュするだけで自動でデプロイされるので非常に便利です。
            </div>
            <div class="my-4">
              また、Cloudflare Pagesは、CloudflareのCDNを使用しているので、非常に高速にWebサイトが配信されます。<br />
              パフォーマンス面も選択した理由です。
            </div>
          </v-card-text>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<style scoped></style>
