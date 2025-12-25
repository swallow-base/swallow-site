# プログラム詳細ページ

このフォルダには、各プログラムの詳細ページHTMLを配置します。

## 配置予定のファイル

- `coaching.html` - コーチングページ
- `lecture.html` - 授業ページ
- `itsudemo.html` - いつでもつばめページ
- `sparta.html` - スパルタプログラムページ
- `hitoritabi.html` - ひとり旅プロジェクトページ

## パスの注意

このフォルダ内のHTMLから他のページや画像を参照する際は、相対パスに注意してください。

### 例
```html
<!-- ルートのページにリンク -->
<a href="../index.html">ホーム</a>
<a href="../contact.html">お問い合わせ</a>

<!-- 画像を参照 -->
<img src="../images/programs/coaching-hero.jpg">

<!-- 同じフォルダ内のページにリンク -->
<a href="lecture.html">授業</a>
```
