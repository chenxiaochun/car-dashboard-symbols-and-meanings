# Reddit 一键复制 — 2026-07-17 更新

> **进度（2026-07-17）：** #1–9 + **8b** ✅ · #9b Accord VSA 保留备用  
> 用**日常 Chrome** 登录 Reddit。链接放在文末当 reference。

---

## 今日推荐（按优先级）

| # | 匹配度 | 帖子 | 状态 |
|---|--------|------|------|
| **9** | 🥇 2014 Cruze — Service Traction Control + 转速归零 | ✅ 2026-07-17 已发 |
| **9b** | 2013 Accord — 间歇 TPMS/VSA/EPS + 偏航传感器码 | ⏳ 备选（若 #9 已有长回复可改发这条） |
| **8** | 2010 Maxima 发电机/行驶中油门失效 | ✅ 2026-07-09 已发 |
| **8b** | 2000 Ram 电瓶/启动机 | ✅ 2026-07-12 已发 |

---

## 9️⃣ 2014 Chevy Cruze — Service Traction Control + RPM 卡 0 ✅ 已发（2026-07-17）

**子版：** r/MechanicAdvice  
**链接：** https://www.reddit.com/r/MechanicAdvice/comments/1uydniv/service_traction_control_light_on_and_rpm_stuck/  
**链到：** `traction-control-light`  
**背景：** 96k miles；行驶中突然 Service Traction Control；转速表一直 0。已有人提 CKP / ABS 模块 — 你的回复补「为什么会亮 TC」+ 扫描范围，不要只重复传感器名。

**操作：** 打开链接 → Comment → 粘贴：

```
On a 2014 Cruze, tach stuck at 0 + "Service Traction Control" at the same moment usually means the car lost a usable engine-speed signal — not that the traction system randomly failed by itself.

Traction/stability needs engine RPM (and wheel-speed data) to work. When the crankshaft position sensor, its wiring, or the path that feeds the cluster/ECM drops out, you often get:
• tach dead at 0 while the car is still moving
• Service Traction Control / reduced stability aids
• sometimes ABS or check-engine codes shortly after

What I'd do next (in order):
1. Scan ECM and ABS/chassis modules — not just a basic OBD "engine only" check. Write down every code before clearing.
2. Treat a dead tach as a crankshaft position sensor / harness suspect first (common around this mileage), but confirm with codes + live data before buying parts.
3. Inspect the CKP connector and wiring for oil, chafing, or a loose plug — Cruze engine-bay heat/oil leaks love to kill connectors.
4. If codes point at a wheel-speed sensor or ABS module instead, chase that path; TC will also light when the car can't trust wheel speed.

Safe to drive short distance if it still runs smoothly and brakes feel normal — but don't ignore it. No engine-speed signal can leave you stranded or in limp behavior next.

Quick TC symbol / fault checklist: https://warninglightfinder.com/symbols/traction-control-light/

Did a basic scanner show any codes yet, or is the tach the only symptom so far?
```

---

## 9b 2013 Honda Accord LX — 间歇 TPMS + VSA + EPS ⏳ 备选

**子版：** r/MechanicAdvice  
**链接：** https://www.reddit.com/r/MechanicAdvice/comments/1ut1mds/2013_honda_accord_lx_intermittent_tpms_vsa_and/  
**链到：** `traction-control-light` + `two-warning-lights`  
**背景：** 189k miles；间歇闪 TPMS + VSA/traction + EPS；重启有时消失。已扫到 81-03 yaw rate、81-19/81-20 CPU、151-11。

**操作：** Comment → 粘贴：

```
Intermittent TPMS + VSA + EPS on a 2013 Accord usually isn't three separate failures — especially with 81-03 (yaw rate) and those 81-19 / 81-20 internal VSA module codes on the scan.

VSA is Honda's traction/stability system. When the yaw-rate sensor or the VSA unit glitches, Honda often throws the traction light and can pull EPS/TPMS warnings along for the ride (shared power/ground/comms). Lights clearing after a restart fits an intermittent sensor, connector, or low-voltage event more than a tire problem.

Before replacing the whole VSA module:
1. Load-test the battery and check charging under load (headlights + blower on) — weak voltage makes this exact light cluster common on Accords.
2. Inspect battery terminals, main grounds, and the yaw-rate / VSA connectors for corrosion or a loose plug (sensor is often under the console area — shops miss a bad pin).
3. Ask the shop whether 81-03 returns immediately on a road test after clear, or only after bumps/turns — that helps separate sensor vs module vs wiring.
4. TPMS flashing with the others can be a passenger on the same voltage/comms bus; don't start with four TPMS sensors unless tire pressures are actually wrong on a gauge.

VSA / traction light explainer: https://warninglightfinder.com/symbols/traction-control-light/
Multi-light priority checklist: https://warninglightfinder.com/scenarios/two-warning-lights/

When the lights come on, does battery voltage on a meter dip, or do you notice it more over bumps / hard turns?
```

---

## 9️⃣ TC / wavy lines — 三套通用模板（搜新帖时用）

> **怎么找帖：** 打开文末「TC 灯」搜索 → 选 **7 天内、评论少、症状清楚** 的帖 → 按情况选 9a / 9b / 9c → **改 1–2 句车型/症状** 再发。  
> **链到：** `https://warninglightfinder.com/symbols/traction-control-light/`  
> **可选加链（仅多灯帖）：** `https://warninglightfinder.com/scenarios/two-warning-lights/`  
> **不要：** 同一天发两条；不要只丢链接；不要回已有长技术帖抢楼。

### 9a — 「车底下波浪线 / squiggly / wavy lines 是啥灯？」

**适用：** OP 不知道符号名，只描述形状；或贴了仪表盘图问「这是什么」。

```
That car-with-wavy-lines / squiggly-lines symbol is usually traction control (TC/TCS) — sometimes stability control (ESC/ESP) uses a very similar icon.

Quick read of the behavior:
• Flashes briefly on wet/icy/gravel when you accelerate → often normal (system cutting wheel spin)
• Stays on steady after startup on dry roads → system may be switched off, or a fault is stored
• Steady + check engine / ABS at the same time → scan codes; one root cause often disables TC

First checks before replacing parts:
1. Confirm you didn't bump the TC / ESC Off button (some cars show a steady light when intentionally disabled)
2. Note whether ABS or check engine is also on
3. If it stays on every drive, scan ABS/chassis codes — wheel speed sensors are a common trigger

Symbol guide with the icon pictured: https://warninglightfinder.com/symbols/traction-control-light/

Does it flash only when the road is slippery, or stay solid the whole drive?
```

### 9b-template — 「牵引灯一直亮 / TC light stays on」

**适用：** OP 明确说 traction control / TC / TCS / VSC / ESC 常亮；车还能开。

```
A steady traction control light usually means TC is off or the system stored a fault — not the same as a brief flash on a wet road (that often means it's working).

I'd check in this order:
1. TC / ESC Off button — press once and see if the light clears after a restart
2. Any ABS light with it? Shared wheel-speed sensors love to kill both systems together
3. Check engine light too? Scan engine codes first — misfire / sensor faults often disable traction aids on modern cars
4. Recent battery / jump-start / alignment? Low voltage and steering-angle sensor calibration issues are common after that

If the car drives normally on dry pavement, short trips are usually OK — just leave more following distance in rain until it's scanned.

Plain-English breakdown: https://warninglightfinder.com/symbols/traction-control-light/

Year/make/model, and is ABS or check engine on with it?
```

### 9c — 「TC + 检查发动机灯一起亮」或「TC 突然介入刹一下」

**适用：** 多灯；或 OP 说 traction 突然刹车/限扭（类似你们已发的 Sienna 帖，但别回同一帖）。

```
When traction control and check engine light up together, it's often one powertrain fault — not two separate repairs. The ECU can disable TC/stability while a misfire or sensor fault is active.

What I'd do:
• Scan the check engine P-codes first (AutoZone / O'Reilly often do this free in the US)
• Write down every code before clearing anything
• Fix or diagnose the engine side; the TC light frequently clears afterward without a separate "traction module" replacement
• If ABS is also on, add wheel-speed sensor / tone ring to the list — those shared sensors trip ABS + TC together

If the car shakes, smells like fuel, or the check engine is flashing → ease off and get scanned the same day.

TC symbol guide: https://warninglightfinder.com/symbols/traction-control-light/
Multi-light priority checklist: https://warninglightfinder.com/scenarios/two-warning-lights/

What codes (if any) showed up, and does the car feel rough when the lights are on?
```

---

## 8️⃣ 2010 Nissan Maxima 3.5 SV — 发电机？行驶中油门失效 ✅ 已发（2026-07-09）

**子版：** r/MechanicAdvice  
**链接：** https://www.reddit.com/r/MechanicAdvice/comments/1urho5z/2010_maxima_alternator_seems_to_be_bad/  
**链到：** `battery-warning-light`

<details>
<summary>已发回答（备查，勿重复发）</summary>

行驶中油门失效 → 低电压 limp mode；2025 年 3 月复发 → 充电/接地未根治；电压测试、负载测试、端子/接地、换发电机同时考虑电瓶；费用 $450–700；链电瓶页；结尾问 3 月熄火前是否亮电瓶灯。

</details>

---

## 8b 2000 Dodge Ram 1500 5.9L — 电瓶还是启动机？ ✅ 已发（2026-07-12）

**子版：** r/MechanicAdvice  
**链接：** https://www.reddit.com/r/MechanicAdvice/comments/1urd69k/battery_or_starter_problem/  
**链到：** `battery-warning-light`  
**背景：** X 推 #1 纯文字也失败 → 07-12 改发本条（X 账号侧问题，非文案）

<details>
<summary>已发回答（备查，勿重复发）</summary>

快速 click + 内灯变暗 = 电压不足；3 个月新电瓶仍可能坏（未充满、发电机拖垮、寄生漏电）；Ram 5.9 测静息/启动电压、负载充电 13.5–14.5V；链电瓶页；结尾问行驶中是否亮过电瓶灯。

</details>

---

## 7️⃣ 2018 Honda Fit — Honda Sensing + TPMS/EPS 多灯 ✅ 已发（2026-06-25）

**子版：** r/MechanicAdvice  
**链接：** https://www.reddit.com/r/MechanicAdvice/comments/1u9k23r/troubleshooting_help_please/  
**链到：** two-warning-lights + lights-on-at-startup

<details>
<summary>已发回答（备查，勿重复发）</summary>

2018 Fit：Honda Sensing 全挂 → 拔 camera/radar 后 TPMS/EPS 加入；P1659/P2108；电压正常。首条评论，针对 U-code 扫描、接插件、接地、标定。

</details>

---

## 1️⃣ Honda Accord — TPMS + TC + EPS 间歇亮 ✅ 已发（原定 06-06，实发 06-07）

**子版：** r/MechanicAdvice  
**链接：** https://www.reddit.com/r/MechanicAdvice/comments/1tv44ts/2013_honda_accord_tpms_tc_and_eps_light_will_turn/

<details>
<summary>已发回答（备查，勿重复发）</summary>

**操作：** 打开链接 → 粘贴下面全文 → Comment

```
That combo after an alternator swap usually isn't three separate failures — it's often voltage/ground/communication gremlins left over from when the old alternator was cooking the electrical system.

A 2.5-month-old battery can still be weak if it sat undercharged or got hammered by the failing alternator before you replaced it. "Tests fine" on a bench doesn't always mean it holds voltage under load (EPS + fans + headlights at idle).

What I'd do on a 2013 Accord:
1. With the engine running, check battery voltage at the terminals — should generally be around 13.5–14.5V. Then turn on high beams, rear defrost, and hold the wheel — see if voltage sags and the warnings pop.
2. Load-test the battery properly (many parts stores do this free), not just a static 12V reading.
3. Check main grounds — battery negative to body, engine ground strap, and any corroded alternator/chassis connections. Bad grounds love to throw random amber lights with no obvious drivability issue.
4. Scan for stored codes when the lights are on. TPMS may be its own code; TC/EPS often store low-voltage or communication faults after a charging event.

If voltage and grounds look solid and codes point to one wheel only, then chase TPMS sensor separately — but I wouldn't replace three systems before proving the charging/ground path is clean.

Helpful combo-light guide if you want a checklist: https://warninglightfinder.com/scenarios/two-warning-lights/

When the three lights come on together, does battery voltage on a multimeter drop at the same time?
```

</details>

---

## 2️⃣ Honda Civic — 多灯同亮 + 灯光闪烁 + 偶发无助力转向 ✅ 已发（2026-06-10）

**子版：** r/MechanicAdvice  
**时间：** 约 5 天前  
**链接：** https://www.reddit.com/r/MechanicAdvice/comments/1tunxbx/2014_honda_civic_at_my_wits_end/

<details>
<summary>已发回答（备查，勿重复发）</summary>

**楼主情况：** 2014 Civic，换过电瓶/发电机（副厂翻新）/启动机，多家检测「正常」，但灯光闪烁、电瓶灯偶发、启动瞬间 TPMS+CEL+牵引+EPS 同亮且助力转向失效，行驶中闪、怠速时不闪。

**操作：** 打开链接 → Comment

```
The pattern you're describing — flickering lights, battery light at idle, and a whole cluster (TPMS, check engine, traction, EPS) on a weak crank — screams low system voltage or a bad connection, not four random module failures.

Refurb alternators are a common thread in stories like this. They can pass a quick bench test but drop output when hot, under load, or at idle on a Civic's controlled charging system.

I'd focus here before chasing individual warning lights:
• Engine running, measure voltage at the battery. You want stable charging — if it hovers low or bounces when you add loads (brakes, high beams, A/C, power steering input), fix charging/connections first.
• Wiggle-test battery terminals, ground strap engine-to-body, and alternator B+ wire while watching voltage — intermittent flicker often shows up live.
• When the cluster throws TPMS + CEL + traction + EPS together, scan codes. Often you'll see U-codes (communication) or voltage-related faults that all clear once supply is stable.

The fact it flickers while driving but not at idle fits a loose/corroded connection moving with vibration more than a steady bad alternator diode.

Battery warning + EPS drop on the same crank is a classic low-voltage pair: https://warninglightfinder.com/symbols/battery-warning-light/
Multi-light priority checklist: https://warninglightfinder.com/scenarios/two-warning-lights/

Did anyone do a loaded charging test (not just "alternator good" light on a tester) with headlights and blower on?
```

</details>

---

## 3️⃣ Dodge Charger — 左后 TPMS 一直显示 32 PSI（实压已变） ✅ 已发（2026-06-11）

**子版：** r/MechanicAdvice  
**时间：** 约 25 天前（评论少，仍值得回）  
**链接：** https://www.reddit.com/r/MechanicAdvice/comments/1tbzswk/2022_dodge_charger_tpms_light_on/

<details>
<summary>已发回答（备查，勿重复发）</summary>

**楼主情况：** 2022 Charger，左后 TPMS 始终显示 32 PSI，打气到 40 也不变；启动约 1 分钟后由绿变红报低压。

**注意：** r/MechanicAdvice 规则把纯轮胎问题导向 r/TireQuestions，但**传感器/模块故障**一般可以回。若被删，改发到 r/TireQuestions 同一内容。

**操作：** 打开链接 → Comment

```
When the display sticks on one PSI no matter what you put in the tire, that's almost always the TPMS sensor or receiver for that corner — not air pressure.

Green at startup then red after ~1 minute fits the system waking up, reading the left rear sensor, deciding it's implausible/low, and setting the warning.

Quick checks on a 2022 Charger:
• Confirm actual cold pressure with a manual gauge on all four — use the door jamb placard PSI (not necessarily 40 unless that's the spec).
• If left rear is truly correct on the gauge but the dash stays at 32, plan on a TPMS sensor for that wheel (internal sensor battery or failed sensor — common around 5–10 years, sometimes sooner if a tire shop damaged it).
• Any recent tire plug/patch, rotation, or new wheels? Charger often needs a relearn after sensor replacement — but relearn won't fix a sensor that reports a stuck value.

Steady amber = usually pressure. Stuck wrong number on one corner = sensor.

More on steady vs flashing TPMS behavior: https://warninglightfinder.com/symbols/tire-pressure-warning-light/

Did anyone scan the TPMS codes to see if it's specifically left rear sensor signal?
```

</details>

---

## 4️⃣ Subaru Impreza — TPMS 能否手动复位 ✅ 已发（2026-06-12）

**子版：** r/askcarguys（规则比 MechanicAdvice 松）  
**时间：** 约 9 天前  
**链接：** https://www.reddit.com/r/askcarguys/comments/1tr8bps/2016_subaru_impreza_hatchback_can_i_manually/

<details>
<summary>已发回答（备查，勿重复发）</summary>

**操作：** Comment

```
On most 2016 Imprezas with direct TPMS, you can't really "reset" a bad sensor from the dash — you either correct the pressure and drive until the module accepts it, or use a TPMS relearn tool / shop scan after sensor or tire work.

Manual gauge first: all four tires cold, inflated to the door jamb placard (not the max on the tire sidewall). Drive 5–10 minutes.

If pressure is correct on all corners and the light:
• stays on = slow leak or dead sensor battery (common at 5–10 years)
• flashes at startup for ~60–90 sec then stays on = often system/sensor fault, not just low air

Subaru indirect vs direct TPMS depends on trim — if your dash shows individual tire pressures, you almost certainly have sensors in each wheel.

Guide: https://warninglightfinder.com/symbols/tire-pressure-warning-light/
Cold weather note: https://warninglightfinder.com/scenarios/winter-tpms-light/

Does your dash show four individual pressures, or just one TPMS warning light?
```

</details>

---

## 发完记录

| # | 帖子 | 日期 |
|---|------|------|
| 1 | Honda Accord TPMS/TC/EPS | ✅ 06-07 |
| 2 | Honda Civic 多灯 | ✅ 06-10 |
| 3 | Dodge Charger TPMS | ✅ 06-11 |
| 4 | Subaru Impreza TPMS | ✅ 06-12 |
| 5 | Audi A3 TPMS/转向 | ✅ 06-23 |
| 6 | Sienna TC 全刹 | ✅ 06-23 |
| 7 | Honda Fit 多灯 | ✅ 06-25 |
| 8 | 2010 Maxima 发电机 | ✅ 07-09 |
| 8b | 2000 Ram 电瓶/启动 | ✅ 07-12 |
| 9 | [2014 Cruze Service TC + RPM=0](https://www.reddit.com/r/MechanicAdvice/comments/1uydniv/service_traction_control_light_on_and_rpm_stuck/) | ✅ 07-17 |

---

## 搜索链接（自己找新帖时用）

- **TC 灯（今天优先）：** https://www.reddit.com/r/MechanicAdvice/search/?q=traction%20control%20light&restrict_sr=1&sort=new&t=week
- **wavy / squiggly：** https://www.reddit.com/r/MechanicAdvice/search/?q=wavy%20OR%20squiggly%20dashboard&restrict_sr=1&sort=new&t=month
- **电瓶/发电机：** https://www.reddit.com/r/MechanicAdvice/search/?q=alternator%20battery%20light&restrict_sr=1&sort=new&t=month
- TPMS 近期：https://www.reddit.com/r/MechanicAdvice/search/?q=TPMS%20light&restrict_sr=1&sort=new&t=month
- 多灯：https://www.reddit.com/r/MechanicAdvice/search/?q=dashboard%20warning%20lights&restrict_sr=1&sort=new&t=month
- 油压：https://www.reddit.com/r/MechanicAdvice/search/?q=oil%20pressure%20light&restrict_sr=1&sort=new&t=month
- askcarguys TPMS：https://www.reddit.com/r/askcarguys/search/?q=TPMS&restrict_sr=1&sort=new&t=month
