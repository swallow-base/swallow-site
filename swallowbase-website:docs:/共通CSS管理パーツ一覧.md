# 共通CSS管理パーツ一覧

## 概要

このドキュメントは、`style.css`で一括管理されているパーツと、ページ固有CSSで管理されているパーツを整理したものです。

---

## 共通CSSで修正可能なパーツ

以下のパーツは `css/style.css` を修正するだけで全ページに反映されます。

### 1. ページヒーローセクション

| クラス名 | 用途 | モバイル | タブレット | PC |
|---------|------|----------|------------|-----|
| `.page-hero` | ヒーロー背景・パディング | padding: 80px 20px 50px | padding: 80px 20px 60px | - |
| `.section-title` | 英語タイトル（CONTACT等） | 32px | 36px | 40px |
| `.page-hero .section-subtitle` | 日本語サブタイトル | 15px | 16px | 17px |
| `.hero-title-jp` | 日本語タイトル（ひとり旅等） | 26px | 30px | 34px |
| `.hero-label` | ラベル（特別企画等） | ページ固有 | ページ固有 | ページ固有 |

**対象ページ**: about, facility, programs, course, voice, contact, coaching, lecture, itsudemo, sparta, hitoritabi

**注意**: HOMEページのヒーローは独自構造（`.hero`クラス）のため対象外


### 2. セクション見出し

| クラス名 | 用途 | モバイル | タブレット | PC |
|---------|------|----------|------------|-----|
| `.section-heading` | セクション見出し（h2相当） | 20px | 22px | 24px |

**スタイル詳細**:
- font-weight: bold
- color: var(--brand)
- text-align: center
- padding-bottom: 12px
- margin-bottom: 28px
- border-bottom: 2px solid var(--brand)

**対象ページ**: about, facility, programs, course, voice, contact, coaching, lecture, itsudemo, sparta, hitoritabi


### 3. イントロセクション

| クラス名 | 用途 | モバイル | タブレット | PC |
|---------|------|----------|------------|-----|
| `.intro-section` | イントロ背景・パディング | padding: 60px 20px 0 | 2カラム化 | - |
| `.intro-container` | コンテナ幅 | max-width: 700px | - | - |
| `.intro-heading` | イントロ見出し | 20px | 22px（左寄せ） | 24px |
| `.intro-text` | イントロ本文 | 15px, line-height: 2 | 16px（左寄せ） | - |
| `.intro-image-wrapper` | 画像ラッパー | 全幅表示 | 50%カラム | - |
| `.intro-image` | 画像 | object-fit: cover | - | - |

**対象ページ**: facility, coaching, lecture, itsudemo, sparta, hitoritabi

**注意**: 一部ページでは `.intro-container` の max-width をページ固有CSSでオーバーライド


### 4. CTAセクション（フッター直前）

| クラス名 | 用途 | モバイル | タブレット | PC |
|---------|------|----------|------------|-----|
| `.cta-section` | CTAセクション | display: none | - | display: block, padding: 50px 20px |
| `.cta-button-large` | CTAボタン | 16px | - | - |

**ボタンスタイル詳細**:
- padding: 18px 40px
- border-radius: 30px
- background: var(--accent)
- box-shadow: 0 4px 12px rgba(225, 29, 47, 0.3)

**対象ページ**: 全ページ（index含む）

**ページ固有オーバーライド（背景色）**:
| ページ | 背景色 |
|--------|--------|
| index.html | white |
| contact.html | white |
| voice.html | white |
| lecture.html | #fae6d3 |
| itsudemo.html | var(--bg-cream) |
| その他 | 指定なし（透明） |


### 5. フローティングCTA（モバイル用）

| クラス名 | 用途 | 表示条件 |
|---------|------|----------|
| `.floating-cta` | 画面下部固定CTA | 1024px未満で表示 |

**対象ページ**: 全ページ


### 6. ヘッダー・フッター

| クラス名 | 用途 |
|---------|------|
| `header` | 共通ヘッダー |
| `.desktop-nav` | PCナビゲーション（1024px以上） |
| `.mobile-menu` | モバイルメニュー |
| `footer` | 共通フッター |

**対象ページ**: 全ページ

---

## ページ固有CSSで管理されているパーツ

以下のパーツは各HTMLファイル内の `<style>` タグで定義されています。
修正する場合は該当ページのHTMLファイルを編集する必要があります。

### HOMEページ（index.html）

| パーツ | クラス名 | 備考 |
|--------|---------|------|
| ヒーローセクション | `.hero` | 独自構造 |
| ヒーローサブタイトル | `.hero-subtitle` | 「独り立ちの翼を育む」 |
| ヒーロー内CTAボタン | `.cta-button` | 小さめサイズ（12-13px） |
| セクションサブタイトル | `.section-subtitle` | 「3つの学び」等 |
| フィーチャーカード | `.feature-card` | 3つの学びカード |
| 卒業生カード | `.voice-card` | 横スクロール |
| アクセス情報 | `.access-info` | 今回修正済み |

### 各ページ固有のパーツ例

| ページ | 固有パーツ |
|--------|-----------|
| about.html | タイムライン、コンセプトセクション |
| facility.html | ギャラリー、設備カード |
| programs.html | プログラムカード |
| course.html | 料金表、プランカード |
| voice.html | 卒業生カード（大）、成績アップ表示 |
| contact.html | 入会フロー、体験入会テーブル |
| coaching.html | コーチング特徴カード |
| lecture.html | 授業概要テーブル |
| itsudemo.html | 利用シーン、料金表 |
| sparta.html | プログラム特徴、スケジュール |
| hitoritabi.html | 概要テーブル、参加者の声 |

---

## CSS変数（カラーパレット）

`style.css` で定義されているCSS変数です。これらを変更すると全ページに反映されます。

```css
:root {
    --brand: #232951;      /* ブランドカラー（紺） */
    --accent: #E11D2F;     /* アクセントカラー（赤） */
    --bg-white: #ffffff;   /* 背景（白） */
    --bg-cream: #f5f5ef;   /* 背景（クリーム） */
}
```

---

## レスポンシブブレークポイント

| ブレークポイント | 用途 |
|------------------|------|
| 768px | タブレット開始、フォントサイズ変更 |
| 1024px | PCナビ表示、フローティングCTA非表示 |
| 1200px | 大画面用フォントサイズ |

---

## 修正時のチェックリスト

### 共通CSSを修正する場合
- [ ] `css/style.css` を編集
- [ ] 全ページで表示確認（特にレスポンシブ）
- [ ] ページ固有オーバーライドがある場合は影響確認

### ページ固有CSSを修正する場合
- [ ] 該当HTMLファイルの `<style>` タグ内を編集
- [ ] 共通CSSと競合していないか確認
- [ ] 他ページとのデザイン統一性を確認

---

## 更新履歴

- 2024/12/25: 初版作成（共通パーツ統一作業完了時点）
