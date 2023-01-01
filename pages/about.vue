<script lang="ts" setup></script>

<template>
  <main class="container mx-auto my-10 px-4">
    <h1 class="text-4xl font-bold">このサイトについて</h1>
    <article class="my-8 text-sm lg:text-md xl:text-lg">
      <p class="my-4">
        このサイトは、チームマスターであるLuminessのチームサイト兼レインの実験場です。<br />
        製作者のレインは普段、非Web系のエンジニアなのでWebサイトを作る事はありません。<br />
        しかし、Webサイトを作るのは好きなので、暇を見つけては作って遊んでいます。
      </p>
      <p class="my-4">
        このサイトは、レインが気になった技術やプロダクトを使って作成されており、コロコロ内容が変わるのはご容赦くださいm(_
        _)m
      </p>
      <p class="my-8">ちなみに、現在このサイトには以下が使われています。</p>

      <!-- Jamstack -->
      <div
        class="my-12 grid lg:grid-cols-2 shadow-md rounded-xl overflow-hidden"
      >
        <figure class="p-8 w-full">
          <img
            class="w-full h-full aspect-video"
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
        class="my-12 grid lg:grid-cols-2 shadow-md rounded-xl overflow-hidden"
      >
        <figure class="p-8 w-full">
          <img
            class="w-full h-full aspect-video"
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
        class="my-12 grid lg:grid-cols-2 shadow-md rounded-xl overflow-hidden"
      >
        <figure class="p-8 w-full">
          <img
            class="w-full h-full aspect-video"
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
        class="my-12 grid lg:grid-cols-2 shadow-md rounded-xl overflow-hidden"
      >
        <figure class="p-8 w-full">
          <img
            class="w-full h-full aspect-video"
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
        class="my-12 grid lg:grid-cols-2 shadow-md rounded-xl overflow-hidden"
      >
        <figure class="p-8 w-full">
          <img
            class="w-full h-full aspect-video"
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
        class="my-12 grid lg:grid-cols-2 shadow-md rounded-xl overflow-hidden"
      >
        <figure class="p-8 w-full">
          <img
            class="w-full h-full aspect-video"
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
        class="my-12 grid lg:grid-cols-2 shadow-md rounded-xl overflow-hidden"
      >
        <figure class="p-8 w-full grid grid-cols-1 items-center">
          <img class="w-full" src="@/assets/docker-logo.webp" />
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
        class="my-12 grid lg:grid-cols-2 shadow-md rounded-xl overflow-hidden"
      >
        <figure class="p-8 w-full grid grid-cols-1 items-center">
          <img class="w-full" src="@/assets/github-logo.svg" />
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
