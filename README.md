# つばめ学習舎 WEBサイト - フォルダ構造

このフォルダには、つばめ学習舎のWEBサイトを構成するファイルを配置します。

## フォルダ構成

```
tsubame-website/
├── index.html              # HOMEページ（作成予定）
├── programs.html           # プログラム一覧（作成予定）
├── course.html             # 受講プラン（作成予定）
├── about.html              # つばめ学習舎とは（作成予定）
├── facility.html           # 校舎紹介（作成予定）
├── voice.html              # 卒業生の声（作成予定）
├── contact.html            # お問い合わせ（作成予定）
├── programs/               # プログラム詳細ページ用フォルダ
│   ├── coaching.html       # コーチング（作成予定）
│   ├── lecture.html        # 授業（作成予定）
│   ├── itsudemo.html       # いつでもつばめ（作成予定）
│   ├── sparta.html         # スパルタプログラム（作成予定）
│   └── hitoritabi.html     # ひとり旅プロジェクト（作成予定）
├── css/                    # スタイルシート用フォルダ
│   └── style.css           # 共通CSS（作成予定）
├── js/                     # JavaScript用フォルダ
│   └── script.js           # 共通JS（作成予定）
└── images/                 # 画像用フォルダ
    ├── favicon.ico         # ブラウザタブ用アイコン
    ├── favicon.png         # iOS用アイコン
    ├── logo_3.png          # ヘッダーロゴ
    ├── logo_1b.png         # ヒーロー用大きいロゴ
    ├── logo-white.png      # フッター用白ロゴ
    ├── ogp-default.jpg     # SNSシェア用画像
    ├── home/               # HOMEページ用画像
    ├── programs/           # プログラム関連画像
    ├── course/             # 受講プラン用画像
    ├── about/              # つばめ学習舎とは用画像
    ├── facility/           # 校舎紹介用画像
    ├── voice/              # 卒業生の声用画像
    ├── contact/            # お問い合わせ用画像
    ├── icons/              # アイコン類
    └── designs/            # Canvaデザイン画像（参考用）
```

## 各フォルダの役割

### HTMLファイル
- ルートディレクトリにメインページのHTMLを配置
- `programs/` フォルダにプログラム詳細ページのHTMLを配置

### css/
- サイト全体で使用する共通CSSを配置
- ページ固有のCSSは必要に応じて追加

### js/
- サイト全体で使用する共通JavaScriptを配置
- ページ固有のJSは必要に応じて追加

### images/
- サイトで使用するすべての画像を配置
- ページごとにサブフォルダで整理
- 各サブフォルダにREADME.mdがあり、配置すべき画像の説明があります

## 共通画像（imagesルート直下）

以下の画像は、複数ページで使用される共通画像です：

- **favicon.ico / favicon.png** - ブラウザタブに表示されるアイコン
- **logo_3.png** - ヘッダーに表示されるロゴ
- **logo_1b.png** - HOMEページのヒーローセクションに表示される大きいロゴ
- **logo-white.png** - フッターに表示される白抜きロゴ（今後追加）
- **ogp-default.jpg** - SNSでシェアされた際に表示される画像（今後追加）

## 使い方

1. **画像の配置**
   - 各フォルダ内のREADME.mdを参照して、適切な画像を配置してください
   - Canvaデザイン画像は `images/designs/` に配置

2. **HTMLファイルの作成**
   - Claudeと協力して、各ページのHTMLを作成
   - 作成したHTMLはルートディレクトリまたは `programs/` に配置

3. **GitHub Pagesへのアップロード**
   - このフォルダ全体をGitHubリポジトリにアップロード
   - GitHub Pagesの設定でルートディレクトリを指定

## 注意事項

### ファイル名の命名規則
- 英数字とハイフン（-）、アンダースコア（_）のみ使用
- 日本語や全角文字は使用しない
- 小文字推奨（既存ファイルの大文字は維持）

### パスの書き方
- HTMLから画像を参照する際は相対パスを使用
- 例：`<img src="images/home/hero1.png">`
- 絶対パス（`/`から始まる）は使用しない

### GitHub Pages公開時の注意
- すべてのリンクが相対パスで正しく動作するか確認
- 画像が正しく表示されるか確認
- モバイル表示が崩れていないか確認

## 参考資料

詳細な画像管理については、プロジェクト内の「画像管理リスト.md」を参照してください。
