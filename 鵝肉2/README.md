# 綠野職人鵝肉

桃園新屋「綠野職人鵝肉」行動優先品牌網站，使用 Next.js App Router、TypeScript、Tailwind CSS、Framer Motion 與 Lucide React。

專案根目錄的 `index.html` 是可獨立預覽的靜態版本；以瀏覽器直接開啟即可檢視，圖片使用 `public/images/` 內的素材。正式 Next.js 首頁仍由 `src/app/page.tsx` 提供。

## 本機開發

```bash
npm install
npm run dev
```

## 品質檢查與正式執行

```bash
npm run lint
npm run build
npm run start
```

`npm run start` 會綁定 `0.0.0.0`，並使用 Next.js 支援的 `PORT` 環境變數。Render 部署設定已寫在 `render.yaml`，健康檢查端點為 `/api/health`。可設定 `NEXT_PUBLIC_SITE_URL` 作為 canonical metadata 網址；若未設定，會使用 Render 提供的 `RENDER_EXTERNAL_URL`，再回退至服務預設網址。

## 可替換素材與串接提醒

- `public/images/` 內為具替代文字的 SVG 情境插畫，可換成已授權的農場、商品、檢驗與料理實景圖。商品影像路徑集中在 `src/lib/data.ts`，可直接改成 Sanity／Supabase 圖片 URL。
- 商品、預約與食譜型別及範例資料位於 `src/lib/types.ts`、`src/lib/data.ts`。
- 購物車與預約表單目前是前端展示互動；表單不會送出或儲存個資，也尚未連接金流、庫存、訂單或 CMS 服務。上線接單前須串接實際後端及通知流程。
- 聯絡地址、電話、配送政策與第三方檢驗報告尚未提供；頁面不會捏造聯絡資料，農場地址會在確認預約後提供。
