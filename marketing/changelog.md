# 改动日志

> 每次站内、SEO、营销相关改动都记一条。新记录写在**最上面**。  
> 格式：日期 · 类型 · 做了什么 · 涉及文件 · 备注（为何/观察点）。

---

## 2026-08-12

### docs — GSC 7d + 28d 快照

- 7d（8/3–8/9）：**6 点击 / 3,293 展示 / CTR 0.2% / 排名 15.5**
- 28d（~7/13–8/9）：**29 点击 / 8,754 展示 / CTR 0.3% / 排名 16.4**
- 对比 08-09：28d 展示 8,382→8,754；点击 27→29；CTR 持平 0.3%；排名 16.6→16.4

**文件：** `marketing/reddit-quora/paste-today.md`  
**备注：** 曝光与点击缓升；7d 排名 15.5 近期较好；不改 TC/油压 title/meta；新专题仍观察。

### outreach — Quora #14 ✅ 已发

- 问题：steering wheel with ! + TC + parking brake + ABS 同时亮
- 链到 `power-steering-warning-light` + `two-warning-lights`

**文件：** `marketing/reddit-quora/quora-ready-to-paste.md` · `paste-today.md`  
**备注：** 给 08-06 动力转向专题补首条外链。

---

## 2026-08-09

### docs — GSC 7d + 28d 快照

- 7d（8/1–8/7）：**5 点击 / 3,406 展示 / CTR 0.1% / 排名 16.6**（展示近翻倍 vs 07-31）
- 28d（~7/11–8/7）：**27 点击 / 8,382 展示 / CTR 0.3% / 排名 16.6**
- 对比 08-05 的 28d：展示 6,713→8,382；点击持平 27；CTR 0.4%→0.3%；排名 16.9→16.6 略好

**文件：** `marketing/reddit-quora/paste-today.md`  
**备注：** 曝光续涨、点击未同步；不改 TC/油压 title/meta；08-06 新专题尚早见效。

### seo — IndexNow 提交 3 个新专题 URL

- power-steering / oil-level-low / transmission
- 返回 **200**

**文件：**（无代码改动，运行时提交）  
**备注：** 线上页已 200；补 08-06 部署后通知。

---

## 2026-08-06

### content — 新增 3 个警示灯专题页

- `/symbols/power-steering-warning-light/`（方向盘感叹号 / EPS）
- `/symbols/oil-level-low-warning-light/`（低油位 ≠ 红油压）
- `/symbols/transmission-warning-light/`（变速箱故障/过热）
- 接入 `guideLinks`、首页指南列表与摘要内链；sitemap `lastModified` → 2026-08-06

**文件：** `lib/guides.ts` · `lib/symbols.ts` · `app/page.tsx` · `app/sitemap.ts`  
**备注：** finder 图标与 PNG 已有；部署后 IndexNow 提交这 3 个 URL。

---

## 2026-08-05

### outreach — Quora #12 + #13

- **#12** ABS light / brakes still work → `abs-warning-light`
- **#13** brake light after pads/fluid → `brake-warning-light`

**文件：** `marketing/reddit-quora/paste-today.md` · `marketing/reddit-quora/quora-ready-to-paste.md`  
**备注：** 补 ABS / brake 外链缺口；与 08-03 正文加强配套。

### docs — GSC 28d 快照

- 28d（~7/6–8/2）：**27 点击 / 6,713 展示 / CTR 0.4% / 排名 16.9**
- 对比 08-01：展示 +1,323；点击 23→27；CTR 持平；排名 16.2→16.9（微回）

**文件：** `marketing/reddit-quora/paste-today.md`  
**备注：** 曝光续涨；08-03 正文加强尚早见效；**不改 title/meta**。

---

## 2026-08-03

### content — 加强专题页正文/FAQ（不动 title/meta）

- **Coolant**：补「液位灯 vs 水温灯」「间歇亮灭」；扩 FAQ（含义、能否开、on/off）
- **Brake**：补感叹号/`BRAKE`、软踏板；扩 FAQ；related 加 ABS / two-lights
- **TC**：品牌段补 Honda VSA、VW/Mercedes；FAQ 加 VSA、VW/Mercedes、zig-zag/swerve
- **Battery**：FAQ 加 idle 亮、加油门灭
- **sitemap**：`siteLastModified` → `2026-08-03`

**文件：** `lib/guides.ts` · `app/sitemap.ts`  
**备注：** 对齐 GSC 查询缺口；TC/油压 title/meta 仍不改。部署后可用 `npm run indexnow` 通知。

### seo — 接入 IndexNow

- 根目录密钥：`public/2458ed4057e44248b8c2d8321a501b01.txt`
- 脚本：`scripts/submit-indexnow.mjs` · `npm run indexnow`
- 已对全站 19 URL 提交，返回 **202**

**文件：** `public/2458ed4057e44248b8c2d8321a501b01.txt` · `scripts/submit-indexnow.mjs` · `package.json`  
**备注：** 回应 Bing Webmaster「未采用 IndexNow」；高质量外链提示靠站外维持，非代码修复。

---

## 2026-08-01

### docs — GSC 28d 快照

- 28d（~7/2–7/29）：**23 点击 / 5,390 展示 / CTR 0.4% / 排名 16.2**
- 7/29 单日约 6 点击、展示峰约 500

**文件：** `marketing/reddit-quora/paste-today.md`  
**备注：** meta 不动；观察到 ~8/3。

---

## 2026-07-31

### docs — GSC 7d 快照 + Quora #11

- 7d（7/22–7/28）：**4 点击 / 1,764 展示 / CTR 0.2% / 排名 16.2**（滚窗出窗）
- Quora #11 coolant temp on/off → `coolant-temperature-warning-light`

**文件：** `marketing/reddit-quora/paste-today.md` · `marketing/reddit-quora/quora-ready-to-paste.md`

---

## 更早记录

站外发布明细与历史 GSC 快照仍以 [`marketing/reddit-quora/paste-today.md`](reddit-quora/paste-today.md) 为准；自 **2026-08-03** 起，凡代码/内容/SEO 改动同步写入本文件。
