# CSS（スタイルシート）

このフォルダには、サイトのスタイルシート（CSS）を配置します。

## 配置予定のファイル

- `style.css` - サイト全体で使用する共通CSS

## CSS設計の方針

### カラーパレット（CSS変数で管理）
```css
:root {
    --brand: #232951;      /* ブランドカラー（紺） */
    --accent: #E11D2F;     /* アクセントカラー（赤） */
    --text: #000000;       /* テキスト */
    --bg-white: #ffffff;   /* 背景（白） */
    --bg-cream: #f5f5ef;   /* 背景（クリーム） */
}
```

### フォント
- 日本語：Sawarabi Gothic
- 英語：Hammersmith One

### レスポンシブデザイン
- モバイルファースト
- ブレークポイント：768px推奨

## HTMLからの読み込み

```html
<link rel="stylesheet" href="css/style.css">

<!-- programs/配下のHTMLから -->
<link rel="stylesheet" href="../css/style.css">
```
