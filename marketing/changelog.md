# 改动日志

> 每次站内、SEO、营销相关改动都记一条。新记录写在**最上面**。  
> 格式：日期 · 类型 · 做了什么 · 涉及文件 · 备注（为何/观察点）。

---

## 2026-09-22

### outreach — Quora #19 草稿（刹车，待发）

- 问题：What does the brake fluid level warning light mean?
- 链到 `brake-warning-light`
- 命中：which symbol warns… brakes?（7d 0/78）+ circle-with-!
- 备用：换完片/盘后刹车灯仍亮

**文件：** `marketing/reddit-quora/quora-ready-to-paste.md` · `paste-today.md`  
**备注：** 与同日刹车页 FAQ 加强配套；发完标 ✅。

### content — 油压页轻补 FAQ（问句命中，title/meta 未改）

- 新增 FAQ：`Which symbol warns that there is something wrong with your oil pressure?`
- 目标词：09-22 7d **0/73**
- **不改** title / metaDescription

**文件：** `lib/guides.ts`  
**备注：** 页面已破 0（28d 4 点）；该问句仍 0 点，精确命中即可。

### content — 刹车页补强（FAQ + 符号段，title/meta 未改）

- 新增 section：`Which symbol warns… brakes?` · `Brake warning vs TPMS horseshoe symbol`
- FAQ 5→9：问句词精确命中、外观、emergency brake 符号、马蹄形 vs 刹车区分
- related 加图页；移除 battery（与刹车关联弱）
- `app/sitemap.ts` lastModified → 2026-09-22
- **不改** title / metaDescription

**文件：** `lib/guides.ts` · `app/sitemap.ts` · `marketing/reddit-quora/paste-today.md`  
**备注：** 对标低油打法；目标词 `which symbol warns… brakes?`（7d 0/78）+ emergency brake symbol（28d 1/12）。观察约 1–3 周。

### docs — GSC 页面 28d + 7d + 查询词快照 + AI 备忘

**28d 页面前 10（共 26 行）：** TC **105**/12,706 · 图 **31**/800 · TPMS 10/2,343 · **低油 8/3,116** · 变速箱 6/1,226 · 刹车 5/2,149 · oil-level-low 5/1,414 · 油压 4/1,935 · 首页 3/317 · 电瓶 2/849 · **Top10 合计 179 点击**（超 09-16 全站 159）

**7d 页面前 10：** TC 31/4,048 · 图 7/216 · **低油 4/1,106（2→4 🎉）** · TPMS 3/617 · 油压 2/394 · 变速箱 1/320 · oil-level-low 1/301 · 电瓶 1/198 · 助力 1/139 · **刹车 0/604 ⚠️**

**7d 查询词 0 点击高展：** 刹车问句 **0/78** · 油压问句 **0/73** · low fuel warning light **0/65**

**关键结论：**
- 低油 09-16 部署 → 09-22 仅 6 天 7d 点击 2→4，打法再次验证
- 刹车 28d 有 5 点但 7d 回 0/604 + 问句 0/78 → **下一优先刹车 FAQ**

**文件：** `marketing/reddit-quora/paste-today.md`  
**备注：** 不改 title。刹车页 FAQ + 可选 Quora #19。

---

## 2026-09-16

### outreach — Quora #18 ✅ 已发（低油警告灯是哪个符号）

- 问题：What does the low fuel level warning light mean?
- 链到 `low-fuel-warning-light`
- 命中：which symbol / low fuel warning（09-16 GSC 0 点击高展）
- 备用问题留档：Ecosport yellow tank symbol

**文件：** `marketing/reddit-quora/quora-ready-to-paste.md` · `paste-today.md`  
**备注：** 与同日低油页 FAQ 加强配套。参照 TPMS（#17 约 9 天见效），观察约 1–3 周。

### content — 低油页补强（FAQ + 符号段，title/meta 未改）

- 新增 section：`Which symbol warns that you are low on fuel?` · `Low fuel light vs oil light`
- FAQ 2→7：问句词精确命中、外观、还能开多远、假报警、与 check engine 区分
- related 加图页 + 油压（防油灯/油泵混淆）
- `app/sitemap.ts` lastModified → 2026-09-16
- **不改** title / metaDescription

**文件：** `lib/guides.ts` · `app/sitemap.ts` · `marketing/reddit-quora/paste-today.md`  
**备注：** 对标油压打法；目标词 `which symbol warns that you are low on fuel?`（0/52）与 low fuel 核心词合计 0/117。观察约 2–3 周。

### docs — GSC 28d 全站快照 + AI 备忘

- 28d（~8/17–9/13）：**159 点击 / 2.74 万展示 / CTR 0.6% / 排名 12.1**
- 对比 09-07：点击 103→**159（+54%）**、展示 2.3万→2.74万、CTR 0.4%→**0.6%**、排名 13.5→**12.1**
- 趋势：9/8 后日展示 1,100–1,300；9/8–9/11 日点击约 8–11，9/10 前后为峰
### docs — GSC 7d 页面快照：油压 / TPMS 双双破 0 🎉

- 7d 页面前 10：TC **33**/3,525 · 图 9/230 · **TPMS 5/592** · 变速箱 4/298 · 低油 2/841 · **油压 2/582** · oil-level-low 2/315 · 电瓶 2/251 · 刹车 1/647 · 助力 1/132
- **油压破 0** — 08-27 FAQ 加强约 3 周后生效（原 0/514）
- **TPMS 破 0** — Quora #17（09-07）约 9 天后生效（原 0/700）
- 出流量页面从 ~7 扩到 **10+**（电瓶、助力首次进榜）
- 前 10 合计 **61 点击**（09-07 同口径约 32）

**文件：** `marketing/reddit-quora/paste-today.md`  
**备注：** 「补 FAQ + 一条外链、不动 title」打法已验证。下一轮目标：刹车（1/647）、低油（2/841）。

### docs — GSC 7d 查询词快照（801 行）

- 有点击词全部仅 1 点击：transmission warning light 1/28 · car with wavy lines symbol 1/5 · horseshoe sign in car 1/4 · what does this light mean 1/2 · two squiggly lines 1/1 · dashboard warning lights chart 1/1
- 0 点击高展：**symbols dashboard oil light on car 0/79** · **which symbol warns that you are low on fuel? 0/52** · low fuel warning light 0/37 · low fuel warning 0/28
- **低油三词合计 0/117** — 结合页面 2/841，确认低油为当前最大短板
- TC 33 点击不见于前 10 → 靠 801 行长尾吃量，无单一大词

**文件：** `marketing/reddit-quora/paste-today.md`  
**备注：** 下一步优先低油页补 FAQ 命中问句型词；`symbols dashboard oil light on car` 疑为「找图识灯」意图错配，观察是否改由图页承接。不改 title。

---

## 2026-09-07

### outreach — Quora #17 ✅ 已发（TPMS 气压正常仍亮）

- 问题：TPMS light on, tires ~30 PSI fine
- 链到 `tire-pressure-warning-light`
- 动机：09-07 备忘优先非油压外链；7d TPMS **0/700**

**文件：** `marketing/reddit-quora/quora-ready-to-paste.md` · `paste-today.md`  
**备注：** 配合观察 TPMS 高展无点；不改 title。

### docs — GSC 7d + 28d 全站快照 + 查询词 + AI 备忘

- 7d（8/29–9/4）：**32 点击 / 6,810 展示 / CTR 0.5% / 排名 11.8**
- 28d（~8/8–9/4）：**103 点击 / 2.3 万展示 / CTR 0.4% / 排名 13.5**
- 对比 08-30：28d 点击 73→103（**+41%，破百**）；7d 排名 13.4→**11.8（近期最佳）**
- **查询词 28d：** 有点皆长尾；**oil light 0/179**；刹车 **0/140+0/101**
- **查询词 7d：** oil light **0/61**；oil pressure 问答词 **0/36**；TC symbol 0/24；有点仅 wavy lines 1
- **页面 28d Top10≈102 点：** TC **59**/9,649 · 图 **22**/463 · 低油 7 · **刹车 4** · 首页 3 · **oil-level-low 2（破冰）** · 变速箱 2 · TPMS/气囊/红灯 各 1
- **页面 7d=32 点：** TC **18**/2,670（占 56%）· 图 6 · 低油 3 · **oil-level-low 2** · 刹车 1 · 变速箱 1 · 首页 1；**油压 0/514**；TPMS 0/700

**文件：** `marketing/reddit-quora/paste-today.md`  
**备注：** oil-level-low 周级破冰；油压仍 0（08-27 未兑现点击）；不改 title；油压再观察到 ~09-21。

---

## 2026-08-30

### docs — GSC 7d + 28d 快照 + 查询词 + AI 备忘

- 7d（8/21–8/27）：**35 点击 / 6,248 展示 / CTR 0.6% / 排名 13.4**
- 28d（~7/31–8/27）：**73 点击 / 1.93 万展示 / CTR 0.4% / 排名 14.8**
- 对比 08-23：28d 点击 46→73（+59%）；7d CTR/排名均为近期最佳
- **查询词 28d：** 有点均为长尾（squiggly/chart/emergency brake 等）；**刹车大词 0/143+0/136**；**oil light 0/124**
- **查询词 7d：** oil light **0/46** 为本周高展词之一；有点 3 条皆长尾
- **页面 28d Top10=73 点：** TC **44**/8,247 · 图 **15**/286 · 低油 4 · **刹车 2（破冰）** · TPMS 2 · 首页 2 · 气囊/红灯/变速箱/动力转向 各 1
- **页面 7d=35 点：** TC **24** · 图 7 · 刹车/低油/红灯/首页 各 1；油压 **0/469**；**oil-level-low 首次进榜 0/382**

**文件：** `marketing/reddit-quora/paste-today.md`  
**备注：** 增量主要 TC+图；刹车 28d 破冰；油压未破（08-27 改动窗刚结束）；不改 title。

---

## 2026-08-27

### outreach — Quora #16 ✅ 已发（油灯闪烁）

- 问题：oil light flashes intermittently
- 链到 `oil-pressure-warning-light`
- 原「还能继续开吗」已答过 → 已换题后发出

**文件：** `marketing/reddit-quora/quora-ready-to-paste.md` · `paste-today.md`  
**备注：** 配合同日油压页正文加强；部署后可用 IndexNow。

### content — 加强油压页正文/FAQ（不动 title/meta）

- 正文补：闪烁 vs 常亮、idle 亮、传感器 vs 真低压；common causes 加粘度
- FAQ 补：还能继续开？/ idle 亮灭 / 闪烁 / 坏传感器；强化「别猜是传感器」
- related 加 two-warning-lights；sitemap `siteLastModified` → 2026-08-27
- **title / metaDescription 未改**（历史策略）

**文件：** `lib/guides.ts` · `app/sitemap.ts`  
**备注：** 对齐 Quora #16 意图与 08-23「油压有展无点」；部署后可用 `npm run indexnow` 通知油压 URL。

---

## 2026-08-25

### outreach — Quora #16 待发（油压「还能继续开吗」）

- 问题：oil pressure light on — safe to keep driving / if can't stop immediately
- 链到 `oil-pressure-warning-light`
- 动机：08-23 备忘优先补油压外链（7d 0/345）；#5 已覆盖「有油还亮」，本条覆盖「敢不敢开」

**文件：** `marketing/reddit-quora/quora-ready-to-paste.md` · `paste-today.md`  
**备注：** 用户手动 Answer 后改 ✅；不改 title/meta。

---

## 2026-08-23

### docs — GSC 7d + 28d 快照 + 7d 页面明细 + AI 分析备忘

- 7d（8/14–8/20）：**23 点击 / 5,769 展示 / CTR 0.4% / 排名 14.5**
- 28d（~7/24–8/20）：**46 点击 / 1.54 万展示 / CTR 0.3% / 排名 15.7**
- 对比 08-20：28d 点击 35→46（+31%）；7d 点击 11→23（翻倍）、CTR 0.2%→0.4%
- **7d 页面 Top9：** TC 13/2,761 · 图 4/69（CTR 5.8%）· 低油 2 · **刹车 1（首点）** · 变速箱 1 · 气囊 1 · 动力转向 1 · 油压 0 · TPMS 0
- 里程碑：刹车页 7d 首点；08-06 新页 transmission + power-steering 进榜且有点击
- **28d 页面/查询词仍待补**

**文件：** `marketing/reddit-quora/paste-today.md`（含「AI 分析备忘」节）  
**备注：** 流量分散至 7 URL；不改 TC/油压 title；ABS/coolant/two-lights/oil-level-low 仍不在 7d Top9。

---

## 2026-08-20

### docs — GSC 7d + 28d 快照 + 页面明细

- 7d（8/11–8/17）：**11 点击 / 5,029 展示 / CTR 0.2% / 排名 15.4**
- 28d（~7/21–8/17）：**35 点击 / ~13,000 展示 / CTR 0.3% / 排名 16.1**
- 对比 08-16：28d 点击 32→35、展示 ~11,300→~13,000；7d 点击 6→11
- 页面：图 **7** 点（+3）、低油 **3** 点（+2）；TC 20/5,672；刹车 0/1,096、油压 0/1,071、电瓶 0/511

**文件：** `marketing/reddit-quora/paste-today.md`  
**备注：** 点击开始分散；不改 TC/油压 title/meta；ABS/coolant/two-lights 继续等收录。

---

## 2026-08-16

### docs — GSC 28d 快照 + 查询词 + 页面明细

- 28d（~7/18–8/14）：**32 点击 / ~11,300 展示 / CTR 0.3% / 排名 16.0**
- 对比 08-12：展示 8,754→约 11,300；点击 29→32；CTR 持平 0.3%；排名 16.4→16.0
- 查询词：有点的是 squiggly / traction control system；刹车类词展示领先（136+103）但 0 点击
- 页面：**16 → 19** 有展示；power-steering 57 / transmission 49 / oil-level 38 已进榜；ABS / coolant / two-warning-lights 仍未进

**文件：** `marketing/reddit-quora/paste-today.md`  
**备注：** 新三篇索引请求已见效，勿再提交；不改 TC/油压 title/meta；刹车/电瓶有展无点继续观察。

### outreach — Quora #15 ✅ 已发

- 问题：Corsa 油灯间歇亮但油表 full
- 链到 `oil-level-low-warning-light` + `oil-pressure-warning-light`

**文件：** `marketing/reddit-quora/quora-ready-to-paste.md` · `paste-today.md`  
**备注：** 给 08-06 低油位专题补首条外链。

---

## 2026-08-13

### docs — GSC 页面明细（28d）

- TC：**22 点击 / 4,158 展示**（仍主导）
- 有点：首页 2、图 2；油压/TPMS/低油/气囊/红灯 各 1
- 有展无点：刹车 **0/775**、电瓶 **0/451**；CEL 0/141、启动多灯 0/110、winter TPMS 0/98
- 28d 共 **16** 页有展示；**ABS / coolant / 08-06 三篇新专题未进页面报告**

**文件：** `marketing/reddit-quora/paste-today.md`  
**备注：** 不缺页；暂不新开薄页；先确认新专题是否已索引；TC/油压 title/meta 仍不改。

### seo — 6 个 URL 已请求编入索引

- ABS · coolant · power-steering · oil-level · transmission · two-warning-lights
- 用户在 GSC「网址检查」逐个请求

**文件：**（无代码改动）  
**备注：** 勿重复提交；等几天到一两周，用 `site:` 或页面报告看是否进榜。

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
