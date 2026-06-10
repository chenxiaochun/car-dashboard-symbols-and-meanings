# Reddit 一键复制 — 2026-06-07 更新

> **进度（2026-06-10）：** #1 ✅ 06-07 · #2 ✅ 06-10 · **下一条 → #3 Dodge Charger TPMS**  
> 用**日常 Chrome** 登录 Reddit。链接放在文末当 reference。

---

## 今日推荐（按优先级）

| # | 匹配度 | 帖子 | 状态 |
|---|--------|------|------|
| **1** | Honda Accord TPMS/TC/EPS | ✅ 原定 06-06 → 实发 06-07 |
| **2** | Honda Civic 电气/多灯 | ✅ 2026-06-10 已发 |
| 3 | Dodge Charger TPMS 传感器 | **明天发** |
| 4 | r/askcarguys Subaru TPMS | 待办 |

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

## 3️⃣ Dodge Charger — 左后 TPMS 一直显示 32 PSI（实压已变） **← 明天发这条**

**子版：** r/MechanicAdvice  
**时间：** 约 25 天前（评论少，仍值得回）  
**链接：** https://www.reddit.com/r/MechanicAdvice/comments/1tbzswk/2022_dodge_charger_tpms_light_on/

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

---

## 4️⃣（备选）Subaru Impreza — TPMS 能否手动复位

**子版：** r/askcarguys（规则比 MechanicAdvice 松）  
**时间：** 约 9 天前  
**链接：** https://www.reddit.com/r/askcarguys/comments/1tr8bps/2016_subaru_impreza_hatchback_can_i_manually/

**操作：** 若 #1–3 都已发，或想换 sub 发 → Answer/Comment

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

---

## 发完记录

| 日期 | 帖子 | 已发？ |
|------|------|--------|
| 2026-06-06 | Honda Accord #1 | 计划（未发） |
| 2026-06-07 | Honda Accord #1 | ✅ 实发 |
| | Honda Civic #2 | ☐ |
| | Dodge Charger #3 | ☐ |
| | Subaru #4 | ☐ |

---

## 搜索链接（自己找新帖时用）

- TPMS 近期：https://www.reddit.com/r/MechanicAdvice/search/?q=TPMS%20light&restrict_sr=1&sort=new&t=month
- 多灯：https://www.reddit.com/r/MechanicAdvice/search/?q=dashboard%20warning%20lights&restrict_sr=1&sort=new&t=month
- 油压：https://www.reddit.com/r/MechanicAdvice/search/?q=oil%20pressure%20light&restrict_sr=1&sort=new&t=month
- askcarguys TPMS：https://www.reddit.com/r/askcarguys/search/?q=TPMS&restrict_sr=1&sort=new&t=month
