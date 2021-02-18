---
type: post
title: TypeScript + Next.js + Vercel で、Notionから記事更新！5年ぶりn回目のブログ作ってみたけど
date: "2020-12-13"
tags: Tech,JavaScript,Next.js,TypeScript
---

<!-- # TypeScript + Next.js + Vercel で、Notionから記事更新！5年ぶりn回目のブログ作ってみたけど-->

## はじめに

台湾生活も5年が経過し、この冬自分としてもケジメをつけるということで、現職でまったく使いどころなかった流行りの技術でブログを更新して行ってみることにした。

そして、メモはもっぱらEvernoteのため、なかなか移行できてないNotionから記事管理できると言うこと、慣れていく意味でも、取り留めのないことを書いて公開してゆくことにした。

と、ここまで書いて既にどうやって作ったかを改めて書き起こす気がしないと言う発信適性のなさに震える🤔

## やり方

ザクッとまとめると、

1. ijjk/notion-blog をclone。

[ijjk/notion-blog](https://github.com/ijjk/notion-blog)

Next.js → TypeScript化したりとか、とにかく教材として面倒が少なくてありがたい😇

1. .envに環境変数入れて、

```bash
yarn dev
```

で、http://localhost:3000でブラウザビュー、Saveで自動Updateされる。

3. とりあえずは特に変わったことをせず、どんどんなるべく真っさらのホワイトテーマにする。

_app.ts の中に、header とコンテンツエリアを包むコンポーネントに、footerを足したものが、./pages/index.tsx。で、ルーティングに合わせて、headerコンポーネントメニューのカレントページリンクがらActive / 非Activeし、コンテンツエリアの内容が差し代わる構造だ。

./styles/global.module.cssから、./styles/〜.module.css に分離していく。当てずっぽうでも割とサクサクレイアウトできて助かる。

"どう触ったか"は、これ。

[ブランクテーマ · Issue #1 · hkoma2jp/blog](https://github.com/hkoma2jp/blog/issues/1)

Readmeを書き換える気力もなく…

いえ、後ほど書き換えておきます🙇🏻‍♂️

1. Production にしたいブランチをgithub に pushする。

vercel側でmasterブランチが繋がってしまって、設定だけでは希望のブランチをProductionとしてくれない。再度pushしたタイミングで、ビルドが走り、そこで差し代わった。

5. Vercelに環境変数を入れて設定する。

ていうか、もうほぼこちらで🙇🏻‍♂️

[notionバックエンドのzeit製ヘッドレスCMS"Notion Blog"が激アツ🔥 - Qiita](https://qiita.com/serinuntius/items/d4b1e9ef53b59033f607)

なお、

```bash
yarn add dotenv
touch .env
```

で、./.env の中に、環境変数を書いておくと、ローカルでブラウザプレビューする時に既存記事が挿入された状態で見える。もちろん.gitignoreしておくこと。

1. ドメイン設定してdeploy。普通にドメインのDNSのAレコードにIPアドレス入れて設定の後、

```bash
dig @8.8.8.8 +short mydomain.com
dig @1.1.1.1 +short mydomain.com
```

して、設定したIPがそれぞれ返ってきたらいけてる。

おまけ. このプロジェクトを使うと、footerにインジケーターが出るので、next.config.js に、

```json
  },
  devIndicators: {
    autoPrerender: false,
  },
}
```

と追記しておく。本家に書いてあるよ、と書いてあった。本家を推奨。

[[Next.js] Pretended Pageというアイコンが消せない｜teratail](https://teratail.com/questions/268850)

## まとめ

やはり見た目整えるのは一度静的で見た目完成した方が良いとツッコミながら、今回はいじってとりあえず公開して、Notionとのつながり具合を見るとこまでやってみた。

まずはとりとめなく記事を上げつつ、ぼちぼち見た目作っていくことにする。プロフィールも。

しかし、Notionから書けるって言うだけで、割と書く気が出た。どんだけ面倒臭がりなのか🤔

プログ≒収益的な時代になって、かなり冷めてしまっていた。失ったもの大きさを感じる。日記〜Web2.0時代が懐かしい。とか、時代のせいにしてみる。


## 追記(2021/2)

どこがおかしいのかわからないのだけど、やっぱり早速Notionから記事取得できなくなった。
もう一回設定したらいけるんでしょうけど…
しかし、まずはちゃんと記事をあげることからでしょうな。ちゃんとMarkdownで書くことにします。😅