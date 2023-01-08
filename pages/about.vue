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
  <main class="container mx-auto my-10 px-4">
    <h1 class="text-xl lg:text-4xl font-bold">チームLuminessおよび当サイトについて</h1>
    <article class="my-8 text-sm lg:text-md xl:text-lg">
      <!-- Luminess -->
      <div
        class="mb-20 grid lg:grid-cols-2 shadow-md rounded-xl overflow-hidden border border-solid"
      >
        <figure
          class="grid grid-cols-1 place-items-center bg-slate-900 w-full h-full p-10"
        >
          <img
            class="mx-auto w-96 h-full p-10"
            alt="Luminessアイコン"
            src="/team_mark_white.svg"
          />
        </figure>
        <div class="mx-8 my-8">
          <h1 class="w-max text-3xl lg:text-4xl font-bold">
            Luminess（ルミネス）
          </h1>
          <p class="my-4">
            Luminessは、株式会社セガが運営するオンラインゲーム
            <a
              class="font-bold hover:underline mx-1"
              href="https://pso2.jp/players"
              target="_blank"
              aria-label="PSO2のWebサイトへのリンク"
            >
              PHANTASY STAR ONLINE 2 NEW GENESIS
            </a>
            内のShip5（ラグズ）で活動しているチームです。
          </p>
          <p class="my-4">
            これといったノルマは無く、チームツリーの使用も自由です。<br />
            チームポイントは、各々がPSO2を遊ぶ中で片手間で収集してくれたら嬉しい程度で、特に積極的に稼いでほしいという事はありません。
          </p>
          <p class="my-4">というより、チームマスター自身が稼いでません←</p>
          <p class="my-4">
            良く言えば　<span class="font-bold text-2xl">超自由</span><br />
            悪く言えば　<span class="font-bold text-2xl">放任主義</span><br />
          </p>
          <p class="my-4">そんなチームです。</p>
          <p class="my-8">
            ただし、最低限
            <span class="text-red-600 font-bold text-2xl underline mx-2">
              「他のプレイヤーに迷惑はかけてはならない」
            </span>
            という点だけは守るように周知しています。
          </p>
          <p class="my-4">
            PSO2NGSの公式サイトにて公開されている
            <a
              class="font-bold hover:underline mx-1"
              href="https://pso2.jp/players/support/rules/manners/playmanners/"
              target="_blank"
              aria-label="アークス「プレイマナー」講座"
              >
              アークス「プレイマナー」講座
              </a>
              の「プレイマナー講座」の内容を遵守することを推奨しています。
          </p>
        </div>
      </div>
      <!-- レイン -->
      <div
        class="my-20 grid lg:grid-cols-2 place-items-center shadow-md rounded-xl overflow-hidden border border-solid"
      >
        <figure class="p-8 w-full">
          <img
            class="mx-auto w-96 h-auto"
            alt="レインアイコン"
            src="@/assets/IMG_1184.webp"
            width="512"
            height="512"
            loading="lazy"
          />
        </figure>
        <div class="mx-8 my-8">
          <h1 class="w-max text-3xl lg:text-4xl font-bold">レイン（管理者）</h1>
          <p class="my-4">
            チームLuminessのチームマスターで、当サイトの管理者。
          </p>
          <p class="my-4">
            普段はレガシーな分野のシステムエンジニアをする傍ら、プライベートでモダンな技術に触れて遊んでいるよ！<br />
          </p>
          <p class="my-4">
            <span class="text-sm"> レガシー分野は正直つまらん… ε-(‐ω‐；) </span>
          </p>
          <p class="my-4">
            新しいものが大好きで、気になったらとりあえず試して見る精神。<br />
            その結果、実はLuminessのサイトはこれが三代目です。
          </p>
          <p class="my-4">
            最初はLaravelで構築し、ヘッドレスCMSを知ってからはVue.jsを使ってSPAとして作成したり。<br />
            そして、今回はJamstackの練習を兼ねてNuxtを使って作り直しました・ω・
          </p>
          <p class="my-8">
            ちなみに、左のアイコンは当チームのマネージャーで、僕の相棒
            <a
              class="font-bold hover:underline"
              href="https://twitter.com/ramyusu_aurasu"
              >クラレント</a
            >
            さんの作品です！
          </p>
        </div>
      </div>

      <!-- Jamstack -->
      <div
        class="mt-20 mb-12 grid lg:grid-cols-2 shadow-md rounded-xl overflow-hidden border border-solid"
      >
        <figure class="p-8 w-full">
          <img
            class="w-full h-full aspect-video"
            alt="Jamstack"
            src="@/assets/jamstack-logo.svg"
          />
        </figure>
        <div class="mx-8 my-8">
          <h1 class="w-max text-3xl lg:text-4xl font-bold">
            <a
              href="https://jamstack.org"
              target="_blank"
              class="hover:underline"
            >
              Jamstack
            </a>
          </h1>
          <p class="my-4">
            Jamstackは、現在レインが興味を持っているサイト運営上の概念です。<br />
            JamstackのJamは、JavaScript(J), API(A), Markup(M)の略だそうです。<br />
          </p>
          <p class="my-4">
            Netlify社により2019年頃に提唱されたそうですが、レインは2022年の暮に知りましたｗ
          </p>
          <p class="my-4">
            通常のWordpressのように、コンテンツ管理とWebページの描写を一つのサーバで行うのではなく、
            ヘッドレスCMSを使用してWebサイトのコンテンツ管理をフロントエンドから分離して管理。
          </p>
          <p class="my-4">
            かつ、Webページ自体もビルド時にその時点のCMSの情報を基に静的ページを全て生成しておき、
            対客上は静的ページを表示するのみとすることで高レスポンスを実現できるそうです。
          </p>
          <p class="my-8">
            細かいことはまだレインもわかりませんが、このサイトは以下の技術やプロダクトを利用して、Jamstackとなるように構築しています。
          </p>
        </div>
      </div>

      <!-- Nuxt3 -->
      <div
        class="my-12 grid lg:grid-cols-2 shadow-md rounded-xl overflow-hidden border border-solid"
      >
        <figure class="p-8 w-full">
          <img
            class="w-full h-full aspect-video"
            alt="Nuxt"
            src="@/assets/nuxt-logo.svg"
          />
        </figure>
        <div class="mx-8 my-8">
          <h1 class="w-max text-3xl lg:text-4xl font-bold">
            <a href="https://nuxt.com" target="_blank" class="hover:underline">
              Nuxt.js (Nuxt3)
            </a>
          </h1>
          <p class="my-4">
            元々、レインはVue.jsを使ってWebサイトを作って遊んだり、Electronと組み合わせてスタンドアローンのソフトウェアを
            作ったりしていました。
          </p>
          <p class="my-4">
            Nuxt.jsはVue.jsを基にしており、かつサーバサイドでのレンダリングも、静的サイトの生成も可能になった上位互換ということで、
            今回選択しました。
          </p>
          <p class="my-4">
            他にも、ReactベースのNext.jsなんかもありましたが、個人的にReactのようなJSX記法？は馴染めませんでした。<br />
            マークアップ部分とロジックは分けて書きたい！
          </p>
        </div>
      </div>

      <!-- Strapi -->
      <div
        class="my-12 grid lg:grid-cols-2 shadow-md rounded-xl overflow-hidden border border-solid"
      >
        <figure class="p-8 w-full">
          <img
            class="w-full h-full aspect-video"
            alt="Strapi"
            src="@/assets/strapi-logo.svg"
          />
        </figure>
        <div class="mx-8 my-8">
          <h1 class="w-max text-3xl lg:text-4xl font-bold">
            <a href="https://strapi.io" target="_blank" class="hover:underline">
              Strapi
            </a>
          </h1>
          <p class="my-4">Strapiは、ヘッドレスCMSです。</p>
          <p class="my-4">
            Jamstackを実現する上で、コンテンツ管理（記事や画像等々）をヘッドレスCMS化することは必須のようです。
          </p>
          <p class="my-4">
            ヘッドレスCMSについて調べた当初は、クラウド型で有料（無料プランはあるけどちょっと機能不足…）の物が多く、
            無料のOSSは使い方のよくわからない物が多く挫折しかけていました。
          </p>
          <p class="my-4">
            Strapiはオンプレミスで動作させることができ、コンテナ化する手順も明示されていたため、今回採用しました。
          </p>
          <p class="my-4">
            情報が豊富で、躓くことはありましたが調べれば解決可能なものが多く、なんとか運用にこじつけました(^_^;)
          </p>
        </div>
      </div>

      <!-- tailwindcss -->
      <div
        class="my-12 grid lg:grid-cols-2 shadow-md rounded-xl overflow-hidden border border-solid"
      >
        <figure class="p-8 w-full">
          <img
            class="w-full h-full aspect-video"
            alt="Tailwindcss"
            src="@/assets/tailwindcss-logo.svg"
          />
        </figure>
        <div class="mx-8 my-8">
          <h1 class="w-max text-3xl lg:text-4xl font-bold">
            <a
              href="https://tailwindcss.com"
              target="_blank"
              class="hover:underline"
            >
              tailwindcss
            </a>
          </h1>
          <p class="my-4">tailwindcssは、CSSフレームワークです。</p>
          <p class="my-4">
            予め定義されているCSSのクラスを使用して、手軽にレスポンシブ対応で高デザインのWebサイトを構築できます。
          </p>
          <p class="my-4">
            CSSは自分で書くとレスポンシブ対応などが特に難しいので、レインはいつもCSSフレームワークに頼っています…ｗ
          </p>
          <p class="my-4">
            数あるCSSフレームワークの中でも、近年は特にtailwindcssが流行りらしく、情報も多く、使い勝手も良いので採用しました。
          </p>
          <p class="my-4">
            しかも、Nuxt3には専用のモジュールがあって導入がとても簡単だったので、なおさらに。
          </p>
        </div>
      </div>

      <!-- daisyui -->
      <div
        class="my-12 grid lg:grid-cols-2 shadow-md rounded-xl overflow-hidden border border-solid"
      >
        <figure class="p-8 w-full">
          <img
            class="w-full h-full aspect-video"
            alt="daisyUI"
            src="@/assets/daisyui-logo.svg"
          />
        </figure>
        <div class="mx-8 my-8">
          <h1 class="w-max text-3xl lg:text-4xl font-bold">
            <a
              href="https://daisyui.com"
              target="_blank"
              class="hover:underline"
            >
              daisyUI
            </a>
          </h1>
          <p class="my-4">
            daisyUIは、tailwindcssのコンポーネントライブラリです。
          </p>
          <p class="my-4">
            tailwindcssの下で動作し、カード型のレイアウトやフッター部のデザインなどをある程度コンポーネント化してくれています。
          </p>
          <p class="my-4">
            また、いくつか既存のテーマを持っており、設定ファイルで切り替えることでそれらを柔軟に切り返すことが可能です。
          </p>
          <p class="my-4">
            数あるCSSフレームワークの中でも、近年は特にtailwindcssが流行りらしく、情報も多く、使い勝手も良いので採用しました。
          </p>
          <p class="my-4">
            ポップなデザインから、ビジネス向きのデザインまで、幅広く対応できるようです。
          </p>
        </div>
      </div>

      <!-- firebase -->
      <div
        class="my-12 grid lg:grid-cols-2 shadow-md rounded-xl overflow-hidden border border-solid"
      >
        <figure class="p-8 w-full">
          <img
            class="w-full h-full aspect-video"
            alt="Firebase"
            src="@/assets/firebase-logo.svg"
          />
        </figure>
        <div class="mx-8 my-8">
          <h1 class="w-max text-3xl lg:text-4xl font-bold">
            <a
              href="https://firebase.google.com"
              target="_blank"
              class="hover:underline"
            >
              Firebase Hosting
            </a>
          </h1>
          <p class="my-4">
            Firebase
            Hostingは、Googleが運営しているBaaS「Firebase」の数あるサービスの中で、静的サイトホスティングをしてくれるサービスです。
          </p>
          <p class="my-4">
            レンタルサーバみたいなものですが、静的サイト（HTML+JavaScript+CSS）しか置けません。
          </p>
          <p class="my-8">
            このサイトは、Nuxt.jsがStrapi上のコンテンツを参照し、その分の静的サイトを生成して、それをFirebaseHostingにデプロイ（≒アップロード）することで動作しています。
          </p>
        </div>
      </div>

      <!-- Docker -->
      <div
        class="my-12 grid lg:grid-cols-2 shadow-md rounded-xl overflow-hidden border border-solid"
      >
        <figure class="p-8 w-full grid grid-cols-1 items-center">
          <img class="w-full" alt="Docker" src="@/assets/docker-logo.webp" />
        </figure>
        <div class="mx-8 my-8">
          <h1 class="w-max text-3xl lg:text-4xl font-bold">
            <a
              href="https://www.docker.com"
              target="_blank"
              class="hover:underline"
            >
              Docker
            </a>
          </h1>
          <p class="my-4">Dockerは、コンテナ化技術として有名です。</p>
          <p class="my-4">
            当ページでは、Strapiを稼働させるためにDockerを使用しています。
          </p>
          <p class="my-4">
            さらに、Dockerへの通信はLet's
            Encryptで発行したTLS証明書により暗号化され、HTTPS通信となっています。<br />
          </p>
          <p class="my-8">まぁ、今どきは当たり前ですね(^_^;)</p>
        </div>
      </div>

      <!-- Github -->
      <div
        class="my-12 grid lg:grid-cols-2 shadow-md rounded-xl overflow-hidden border border-solid"
      >
        <figure class="p-8 w-full grid grid-cols-1 items-center">
          <img class="w-full" alt="Github" src="@/assets/github-logo.svg" />
        </figure>
        <div class="mx-8 my-8">
          <h1 class="w-max text-3xl lg:text-4xl font-bold">
            <a
              href="https://github.co.jp/features/actions"
              target="_blank"
              class="hover:underline"
            >
              Github Actions
            </a>
          </h1>
          <p class="my-4">
            Github Actionsは、Githubが展開するCI/CDツールです。
          </p>
          <p class="my-4">
            Githubのリポジトリと連動して、専用のWorkflowsフォルダに入れたYAMLファイル上に記載したとおりにCI/CDを行ってくれます。
          </p>
          <p class="my-8">
            当サイトでは、mainリポジトリを更新した場合、Strapi上でコンテンツを変更した場合（チームメンバーを編集した等）にGithub
            Actionsでワークフローが走ります。
          </p>
          <p class="my-4">
            それにより、新しく静的サイトが生成し直され、Firebase
            Hostingへデプロイされる流れとなっています。
          </p>
        </div>
      </div>
    </article>
  </main>
</template>

<style scoped></style>
