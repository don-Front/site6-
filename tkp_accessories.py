"""
Список доп. комплектующих для конфигуратора ТКП (как в templates/index.html).
"""
from __future__ import annotations

from typing import Any, Dict, List, Literal, Optional, Tuple

from pydantic import AliasChoices, BaseModel, ConfigDict, Field

from price_estimate import parse_dn_hint, _beams_by_accuracy, _normalize_accuracy
from tkp_accessories_data import (
    UFG_TEMP_SENSORS as _TEMP_TAB,
    CFM_KMCH_STEEL,
    CFM_SPOOL_STEEL,
    DEFAULT_PSU,
    DEFAULT_TERMINAL,
    P_LEVELS_STRAIGHT,
    TFG_KMCH,
    TFG_SIMULATOR,
    UFG_CABLE,
    UFG_PRESSURE_SENSORS,
    UFG_STRAIGHT_2_6,
    UFG_STRAIGHT_20,
    UFG_STRAIGHT_7_10,
    UFG_TEMP_SENSORS,
    UFG_VERIFICATION_FACTORY,
    UFGFC_FLANGE_KIT,
    UFGFC_FORMING,
    UFGFC_SPOOL,
    UFGFV_FLANGE_KIT,
    UFGFV_SPOOL,
    UFG_FLOW_STR,
    UFL_STRAIGHT_20,
    UFL_STRAIGHT_2_6,
    UFL_STRAIGHT_7_10,
    UFL_VERIFICATION_METRO,
    UZPR_MOUNTING_KIT_TABLE,
)


def _nearest_val(levels: List[float], val: float) -> float:
    return min(levels, key=lambda x: abs(x - val))


def _nearest_dn_key(table: Dict[int, Any], dn: float) -> int:
    keys = sorted(table.keys())
    return min(keys, key=lambda x: abs(x - dn))


def _find_straight_section_price(
    table: Dict[int, Dict[float, Optional[int]]],
    dn: int,
    pressure: float,
) -> Optional[Tuple[int, float]]:
    if dn not in table:
        dn = _nearest_dn_key(table, dn)
    row = table.get(dn)
    if not row:
        return None
    tp = _nearest_val(P_LEVELS_STRAIGHT, pressure)
    price = row.get(tp)
    if isinstance(price, int):
        return price, tp
    idx = P_LEVELS_STRAIGHT.index(tp)
    for i in range(idx - 1, -1, -1):
        pv = P_LEVELS_STRAIGHT[i]
        v = row.get(pv)
        if isinstance(v, int):
            return v, pv
    return None


def _straight_kit_ufg_tfg(
    equip_label: Literal["ufg-f-v", "tfg-sf", "tfg-hf"],
    dn: float,
    pressure: float,
    accuracy: float,
) -> Optional[Tuple[str, int]]:
    supported = {"ufg-f-v": "UFG-F-V", "tfg-sf": "TFG-SF", "tfg-hf": "TFG-HF"}
    if equip_label not in supported or not dn or not pressure:
        return None
    label = supported[equip_label]
    t_dn = _nearest_dn_key(UFG_STRAIGHT_20, dn)
    acc = float(accuracy)
    if acc != acc or acc <= 0.9:
        tb_before, tb_after = UFG_STRAIGHT_20, UFG_STRAIGHT_2_6
        before_w, after_w = "20Dn", "5Dn"
    elif acc <= 1.9:
        tb_before, tb_after = UFG_STRAIGHT_7_10, UFG_STRAIGHT_2_6
        before_w, after_w = "10Dn", "6Dn"
    else:
        tb_before, tb_after = UFG_STRAIGHT_2_6, UFG_STRAIGHT_2_6
        before_w, after_w = "5Dn", "4Dn"
    pb = _find_straight_section_price(tb_before, t_dn, pressure)
    pa = _find_straight_section_price(tb_after, t_dn, pressure)
    if not pb or not pa:
        return None
    total = pb[0] + pa[0]
    tp = pb[1]
    acc_note = "" if acc != acc else f", кл.т. {accuracy}%"
    name = (
        f"Прямые участки {label}, комплект ({before_w} до + {after_w} после), "
        f"Ду{t_dn} ({tp} МПа){acc_note}"
    )
    return name, total


def _straight_kit_ufl(
    dn: float, pressure: float, accuracy: float
) -> Optional[Tuple[str, int]]:
    if not dn or not pressure:
        return None
    t_dn = _nearest_dn_key(UFL_STRAIGHT_20, dn)
    acc = float(accuracy)
    if acc != acc or acc <= 0.9:
        tb_before, tb_after = UFL_STRAIGHT_20, UFL_STRAIGHT_2_6
        before_w, after_w = "20Dn", "5Dn"
    elif acc <= 1.9:
        tb_before, tb_after = UFL_STRAIGHT_7_10, UFL_STRAIGHT_2_6
        before_w, after_w = "10Dn", "6Dn"
    else:
        tb_before, tb_after = UFL_STRAIGHT_2_6, UFL_STRAIGHT_2_6
        before_w, after_w = "5Dn", "4Dn"
    pb = _find_straight_section_price(tb_before, t_dn, pressure)
    pa = _find_straight_section_price(tb_after, t_dn, pressure)
    if not pb or not pa:
        return None
    total = pb[0] + pa[0]
    tp = pb[1]
    acc_note = "" if acc != acc else f", кл.т. {accuracy}%"
    name = (
        f"Прямые участки UFL, комплект ({before_w} до + {after_w} после), "
        f"Ду{t_dn} ({tp} МПа, нерж.){acc_note}"
    )
    return name, total


def _select_flange_kit(
    equip_type: Literal["ufg-f-v", "ufg-f-c", "tfg-sf", "tfg-hf"],
    dn: float,
    pressure: float,
) -> Optional[Tuple[str, int]]:
    if not dn or not pressure:
        return None
    if equip_type == "ufg-f-c":
        table = UFGFC_FLANGE_KIT
        pref = "UFG-F-C"
    else:
        table = UFGFV_FLANGE_KIT
        pref = {"ufg-f-v": "UFG-F-V", "tfg-sf": "TFG-SF", "tfg-hf": "TFG-HF"}[equip_type]
    t_dn = _nearest_dn_key(table, dn)
    row = table.get(t_dn, {})
    if not row:
        return None
    p_levels = sorted(row.keys())
    tp = min(p_levels, key=lambda x: abs(x - pressure))
    price = row.get(tp)
    if not isinstance(price, int):
        return None
    return f"Комплект ответных фланцев {pref} Ду{t_dn} ({tp} МПа)", price


def _select_flow_straightener(dn: float, pressure: float) -> Optional[Tuple[str, int]]:
    if not dn or not pressure:
        return None
    t_dn = _nearest_dn_key(UFG_FLOW_STR, dn)
    row = UFG_FLOW_STR.get(t_dn)
    if not row:
        return None
    steps = [
        ("e", "Е", 1.6),
        ("j6_3", "J", 6.3),
        ("j10", "J", 10.0),
        ("j16", "J", 16.0),
    ]
    if pressure <= 2:
        start_idx = 0
    elif pressure <= 8:
        start_idx = 1
    elif pressure <= 12:
        start_idx = 2
    else:
        start_idx = 3
    chosen = None
    for i in range(start_idx, -1, -1):
        k, exe, pv = steps[i][0], steps[i][1], steps[i][2]
        v = row.get(k)
        if isinstance(v, int):
            chosen = (exe, pv, k, v)
            break
    if not chosen:
        return None
    exe, pv, _, pr = chosen
    return (
        f"Струевыпрямитель УФГ Ду{t_dn} ({pv} МПа, исп. {exe}, ГОСТ, угл. сталь)",
        pr,
    )


def _uzpr_kmch_price(dn: float, pressure: float) -> Optional[int]:
    if not dn or not pressure:
        return None
    t_dn = _nearest_dn_key(UZPR_MOUNTING_KIT_TABLE, dn)
    p_levels = [1.6, 6.3, 10.0, 16.0, 25.0]
    tp = min(p_levels, key=lambda x: abs(x - pressure))
    v = UZPR_MOUNTING_KIT_TABLE.get(t_dn, {}).get(tp)
    return v if isinstance(v, int) else None


def _pressure_sensor_row(pressure: float) -> Optional[Tuple[str, int]]:
    if not pressure or pressure != pressure:
        return None
    last = UFG_PRESSURE_SENSORS[-1]
    for max_mpa, name, price in UFG_PRESSURE_SENSORS:
        if max_mpa >= pressure:
            return name, price
    return last[1], last[2]


def _temp_sensor_row(dn: float) -> Optional[Tuple[str, int]]:
    if not dn or dn != dn:
        return None
    for rng, name, price in _TEMP_TAB:
        lo, hi = rng
        if lo <= dn <= hi:
            return name, price
    return None


def _calc_ufgfv_spool(dn: float, pressure: float) -> Tuple[Optional[int], str]:
    dn_levels = [50, 65, 80, 100, 125, 150, 200, 250, 300, 400, 500]
    p_levels = [1.6, 6.3, 10.0, 16.0, 25.0]
    target_dn = int(dn) if int(dn) in UFGFV_SPOOL else None
    if target_dn is None:
        for cand in dn_levels:
            if cand >= dn:
                target_dn = cand
                break
    if target_dn is None or target_dn not in UFGFV_SPOOL:
        return None, ""
    tp = min(p_levels, key=lambda x: abs(x - pressure))
    price = UFGFV_SPOOL[target_dn].get(tp)
    if price is None:
        idx = p_levels.index(tp)
        for i in range(idx + 1, len(p_levels)):
            alt = p_levels[i]
            if isinstance(UFGFV_SPOOL[target_dn].get(alt), int):
                price = UFGFV_SPOOL[target_dn][alt]
                break
    return (price if isinstance(price, int) else None), ""


def _ufgfc_beams(dn: float, accuracy: float) -> int:
    target = _nearest_dn_key(UFGFC_SPOOL, dn)
    beams = _beams_by_accuracy(UFGFC_SPOOL.get(target, {}), accuracy)
    if beams is not None:
        return beams
    acc = _normalize_accuracy(accuracy)
    return 4 if acc < 1 else 2


def _calc_ufgfc_spool(dn: float, accuracy: float) -> Optional[int]:
    dn_levels = [50, 80, 100]
    target = int(dn) if int(dn) in UFGFC_SPOOL else None
    if target is None:
        for c in dn_levels:
            if c >= dn:
                target = c
                break
    if target is None:
        return None
    b = _ufgfc_beams(dn, accuracy)
    row = UFGFC_SPOOL.get(target, {})
    return row.get(b)


def _cfm_kmch(dn: float, pressure: float) -> Optional[int]:
    if not dn or not pressure:
        return None
    t_dn = _nearest_dn_key(CFM_KMCH_STEEL, dn)
    p_levels = [1.6, 2.5, 4.0, 6.3, 10.0]
    tp = min(p_levels, key=lambda x: abs(x - pressure))
    v = CFM_KMCH_STEEL.get(t_dn, {}).get(tp)
    return v if isinstance(v, int) else None


def _cfm_spool(dn: float, pressure: float) -> Optional[int]:
    if not dn or not pressure:
        return None
    dn_levels = sorted(CFM_SPOOL_STEEL.keys())
    t_dn = _nearest_dn_key(CFM_SPOOL_STEEL, dn)
    p_levels = [1.6, 4.0]
    tp = min(p_levels, key=lambda x: abs(x - pressure))
    row = CFM_SPOOL_STEEL.get(t_dn, {})
    sp = row.get(tp)
    if isinstance(sp, int):
        return sp
    idx = p_levels.index(tp)
    for i in range(idx + 1, len(p_levels)):
        if isinstance(row.get(p_levels[i]), int):
            return row[p_levels[i]]  # type: ignore[index]
    di = dn_levels.index(t_dn)
    for i in range(di + 1, len(dn_levels)):
        bigger = dn_levels[i]
        r2 = CFM_SPOOL_STEEL.get(bigger, {})
        for pj in p_levels:
            if isinstance(r2.get(pj), int):
                return r2[pj]  # type: ignore[index]
    return None


def _cfm_verif(dn: float) -> Tuple[str, int]:
    if not dn or dn <= 32:
        return "Поверка CFM на заводе-изготовителе (Ду 15–32, КТ 1%)", 18005
    if dn <= 80:
        return "Поверка CFM на заводе-изготовителе (Ду 80, КТ 1%)", 23150
    if dn <= 100:
        return "Поверка CFM на заводе-изготовителе (Ду 100, КТ 1%)", 25498
    return "Поверка CFM на заводе-изготовителе (Ду > 100, КТ 1%)", 28741


def _item(
    iid: str, name: str, desc: str, price: Optional[int]
) -> Dict[str, Any]:
    return {"id": iid, "name": name, "desc": desc, "price": price}


def accessories_ufg_fv_fc(
    equip: Literal["ufg-f-v", "ufg-f-c"], dn: float, pressure: float, accuracy: float
) -> List[Dict[str, Any]]:
    out: List[Dict[str, Any]] = []
    out.append(
        _item(
            "kmch",
            "Комплект монтажных частей",
            "КМЧ УЗПР (углеродистая сталь, стандарт ОСТ)",
            _uzpr_kmch_price(dn, pressure),
        )
    )
    fk = _select_flange_kit(equip, dn, pressure)
    out.append(
        _item(
            "flange_kit",
            "Комплект ответных фланцев",
            fk[0]
            if fk
            else (
                "Ответные фланцы (09Г2С) — подбирается по DN и давлению"
                if equip == "ufg-f-v"
                else "Ответные фланцы (09Г2С)"
            ),
            fk[1] if fk else None,
        )
    )
    if equip == "ufg-f-c":
        ufp_t = (
            UFGFC_FORMING.get(_nearest_dn_key(UFGFC_FORMING, float(dn)))
            if dn
            else None
        )
        out.append(
            _item(
                "flow_straightener",
                "Устройство формирования потока (УФП)",
                ufp_t[0] if ufp_t else "УФП для корпуса С (DN 50/80/100)",
                ufp_t[1] if ufp_t else None,
            )
        )
        out.append(
            _item(
                "straight",
                "Прямые участки, комплект (20Dn + 5Dn)",
                "ПУУ до и после прибора (низкотемп. угл. сталь)",
                None,
            )
        )
    else:
        fs = _select_flow_straightener(dn, pressure)
        out.append(
            _item(
                "flow_straightener",
                "Струевыпрямитель",
                fs[0]
                if fs
                else "Струевыпрямитель УФГ (ГОСТ, угл. сталь) — подбирается по DN/давлению",
                fs[1] if fs else None,
            )
        )
        sk_u = _straight_kit_ufg_tfg("ufg-f-v", dn, pressure, accuracy)
        out.append(
            _item(
                "straight",
                "Прямые участки, комплект (20Dn + 5Dn)",
                sk_u[0]
                if sk_u
                else "ПУУ до и после прибора (низкотемп. угл. сталь)",
                sk_u[1] if sk_u else None,
            )
        )

    ps = _pressure_sensor_row(pressure)
    out.append(
        _item(
            "pressure_sensor",
            "Датчик давления",
            ps[0] if ps else "Turbo Flow PS-BP-10-ДИ (подбирается по давлению)",
            ps[1] if ps else None,
        )
    )
    ts = _temp_sensor_row(dn)
    out.append(
        _item(
            "temp_sensor",
            "Датчик температуры",
            ts[0] if ts else "Преобразователь температуры (подбирается по DN)",
            ts[1] if ts else None,
        )
    )

    if equip == "ufg-f-c":
        sp = _calc_ufgfc_spool(dn, accuracy)
        sp_desc = (
            f"Катушка-имитатор UFG-F-C, Ду {_nearest_dn_key(UFGFC_SPOOL, dn)}, {_ufgfc_beams(dn, accuracy)} луча"
            if sp
            else "Для поверки расходомера без демонтажа"
        )
    else:
        sp, _ = _calc_ufgfv_spool(dn, pressure)
        sp_desc = "Для поверки расходомера без демонтажа"
    out.append(_item("spool", "Катушка-имитатор", sp_desc, sp))

    cab = UFG_CABLE["cable"] + UFG_CABLE["junction_box"]
    out.append(
        _item(
            "cable",
            "Кабель связи",
            "Кабель RS-485 (15 м) + клеммная коробка (стандарт)",
            cab,
        )
    )
    out.append(
        _item(
            "terminal",
            "Терминал выносной",
            f"{DEFAULT_TERMINAL[0]} (12В, 1 канал)",
            DEFAULT_TERMINAL[1],
        )
    )
    out.append(
        _item(
            "psu",
            "Блок питания",
            DEFAULT_PSU[0],
            DEFAULT_PSU[1],
        )
    )
    out.append(
        _item(
            "calibration",
            "Поверка",
            UFG_VERIFICATION_FACTORY[0],
            UFG_VERIFICATION_FACTORY[1],
        )
    )
    return out


def accessories_ufl(dn: float, pressure: float, accuracy: float) -> List[Dict[str, Any]]:
    out: List[Dict[str, Any]] = []
    out.append(
        _item(
            "kmch",
            "Комплект монтажных частей",
            "КМЧ УЗПР (углеродистая сталь, стандарт ОСТ)",
            _uzpr_kmch_price(dn, pressure),
        )
    )
    fk = _select_flange_kit("ufg-f-v", dn, pressure)
    out.append(
        _item(
            "flange_kit",
            "Комплект ответных фланцев",
            (fk[0].replace("UFG-F-V", "UFL") if fk else "Ответные фланцы (09Г2С)"),
            fk[1] if fk else None,
        )
    )
    sk = _straight_kit_ufl(dn, pressure, accuracy)
    out.append(
        _item(
            "straight",
            "Прямые участки, комплект (20Dn + 5Dn)",
            sk[0] if sk else "ПУУ UFL (нерж. сталь), до и после прибора",
            sk[1] if sk else None,
        )
    )
    cab = UFG_CABLE["cable"] + UFG_CABLE["junction_box"]
    out.append(
        _item(
            "cable",
            "Кабель связи",
            "Кабель RS-485 (15 м) + клеммная коробка (стандарт)",
            cab,
        )
    )
    out.append(
        _item(
            "terminal",
            "Терминал выносной",
            f"{DEFAULT_TERMINAL[0]} (12В, 1 канал)",
            DEFAULT_TERMINAL[1],
        )
    )
    out.append(
        _item(
            "psu",
            "Блок питания",
            DEFAULT_PSU[0],
            DEFAULT_PSU[1],
        )
    )
    idn = int(dn) if dn == int(dn) else None
    ver = UFL_VERIFICATION_METRO.get(idn) if idn is not None else None
    out.append(
        _item(
            "calibration",
            "Поверка",
            f"Поверка UFL (Метрологическая служба, Ду{dn:g})"
            if ver
            else "Поверка UFL (Метрологическая служба, класс 0,25–0,5%)",
            ver,
        )
    )
    return out


def accessories_tfg(et: Literal["tfg-sf", "tfg-hf"], dn: float, pressure: float, accuracy: float) -> List[Dict[str, Any]]:
    label = "TFG-SF" if et == "tfg-sf" else "TFG-HF"
    out: List[Dict[str, Any]] = []

    km_txt: Optional[str] = None
    km_price: Optional[int] = None
    if dn and pressure and et in TFG_KMCH:
        t_dn = _nearest_dn_key(TFG_KMCH[et], dn)
        p_levels = [1.6, 6.3, 10.0, 16.0]
        tp = min(p_levels, key=lambda x: abs(x - pressure))
        pv = TFG_KMCH[et].get(t_dn, {}).get(tp)
        if isinstance(pv, int):
            km_txt = f"КМЧ {label} (нерж. сталь) Ду{t_dn} ({tp} МПа)"
            km_price = pv
    out.append(
        _item(
            "kmch",
            "Комплект монтажных частей",
            km_txt if km_txt else f"КМЧ {label} (нерж. сталь, тип 2)",
            km_price,
        )
    )
    fk = _select_flange_kit(et, dn, pressure)
    out.append(
        _item(
            "flange_kit",
            "Комплект ответных фланцев",
            fk[0] if fk else "Ответные фланцы (09Г2С)",
            fk[1] if fk else None,
        )
    )
    fs = _select_flow_straightener(dn, pressure)
    out.append(
        _item(
            "flow_straightener",
            "Струевыпрямитель",
            fs[0]
            if fs
            else "Струевыпрямитель (ГОСТ, угл. сталь) — подбирается по DN/давлению",
            fs[1] if fs else None,
        )
    )
    sk = _straight_kit_ufg_tfg(et, dn, pressure, accuracy)
    out.append(
        _item(
            "straight",
            "Прямые участки, комплект (20Dn + 5Dn)",
            sk[0] if sk else "ПУУ до и после прибора (низкотемп. угл. сталь)",
            sk[1] if sk else None,
        )
    )
    sim_p = None
    if dn and pressure and et in TFG_SIMULATOR:
        tbl = TFG_SIMULATOR[et]
        st_dn = _nearest_dn_key(tbl, dn)
        p_lv = [1.6, 6.3, 10.0]
        tp = min(p_lv, key=lambda x: abs(x - pressure))
        sim_p = tbl.get(st_dn, {}).get(tp)
        sim_txt = (
            f"Катушка-имитатор {label} Ду{st_dn} ({tp} МПа)"
            if isinstance(sim_p, int)
            else f"Катушка-имитатор {label} (для поверки без демонтажа)"
        )
    else:
        sim_txt = f"Катушка-имитатор {label} (для поверки без демонтажа)"
        sim_p = None
    out.append(_item("spool", "Катушка-имитатор", sim_txt, sim_p if isinstance(sim_p, int) else None))
    ps = _pressure_sensor_row(pressure)
    out.append(
        _item(
            "pressure_sensor",
            "Датчик давления",
            ps[0] if ps else "Turbo Flow PS-BP-10-ДИ (подбирается по давлению)",
            ps[1] if ps else None,
        )
    )
    ts = _temp_sensor_row(dn)
    out.append(
        _item(
            "temp_sensor",
            "Датчик температуры",
            ts[0] if ts else "Преобразователь температуры (подбирается по DN)",
            ts[1] if ts else None,
        )
    )
    cab = UFG_CABLE["cable"] + UFG_CABLE["junction_box"]
    out.append(
        _item(
            "cable",
            "Кабель связи",
            "Кабель RS-485 (15 м) + клеммная коробка (стандарт)",
            cab,
        )
    )
    out.append(
        _item(
            "terminal",
            "Терминал выносной",
            f"{DEFAULT_TERMINAL[0]} (12В, 1 канал)",
            DEFAULT_TERMINAL[1],
        )
    )
    out.append(
        _item(
            "psu",
            "Блок питания",
            DEFAULT_PSU[0],
            DEFAULT_PSU[1],
        )
    )
    if et == "tfg-sf":
        vname, vprice = "Поверка TFG-S/2S, 1 первичный преобразователь", 43280
    else:
        vname, vprice = "Поверка TFG-H/M", 42049
    out.append(_item("calibration", "Поверка", vname, vprice))
    return out


def accessories_cfm(dn: float, pressure: float) -> List[Dict[str, Any]]:
    vn, vp = _cfm_verif(dn)
    return [
        _item(
            "kmch",
            "Комплект монтажных частей",
            "КМЧ CFM (углеродистая сталь)",
            _cfm_kmch(dn, pressure),
        ),
        _item(
            "spool",
            "Катушка-имитатор",
            "Катушка-имитатор CFM (углеродистая сталь)",
            _cfm_spool(dn, pressure),
        ),
        _item(
            "cable",
            "Кабель связи",
            "Кабель RS-485 (15 м) + клеммная коробка (стандарт)",
            UFG_CABLE["cable"] + UFG_CABLE["junction_box"],
        ),
        _item(
            "terminal",
            "Терминал выносной",
            f"{DEFAULT_TERMINAL[0]} (12В, 1 канал)",
            DEFAULT_TERMINAL[1],
        ),
        _item(
            "psu",
            "Блок питания",
            DEFAULT_PSU[0],
            DEFAULT_PSU[1],
        ),
        _item("calibration", "Поверка", vn, vp),
    ]


GENERIC_ITEMS: List[Dict[str, Any]] = [
    _item(
        "straight",
        "Прямые участки",
        "Прямые участки трубопровода для корректных измерений",
        None,
    ),
    _item(
        "sensors",
        "Датчик давления и температуры",
        "Датчик давления Turbo Flow PS + датчик температуры",
        None,
    ),
    _item("spool", "Катушка-имитатор", "Для поверки расходомера без демонтажа", None),
    _item(
        "calibration", "Поверка", "Первичная поверка расходомера", None
    ),
]


class TkpAccessoriesRequest(BaseModel):
    model_config = ConfigDict(populate_by_name=True)

    equipment: Dict[str, Any]
    dn: Optional[float] = None
    pressure_max_mpa: Optional[float] = Field(
        None, validation_alias=AliasChoices("pressure_max_mpa", "pressure")
    )
    accuracy_percent: float = Field(
        1.0, validation_alias=AliasChoices("accuracy_percent", "accuracy")
    )


class TkpAccessoryRow(BaseModel):
    id: str
    name: str
    desc: str
    price: Optional[int] = None


class TkpAccessoriesResponse(BaseModel):
    status: str = "success"
    equipment_id: str
    tkp_profile: str
    accessories: List[TkpAccessoryRow]
    note: Optional[str] = None


def _nid(el: str) -> str:
    return (el or "").strip().lower()


def tkp_accessories_from_request(body: TkpAccessoriesRequest) -> TkpAccessoriesResponse:
    eq = body.equipment or {}
    raw_id = eq.get("id") or ""
    el = _nid(str(raw_id))
    dn = parse_dn_hint(eq, body.dn)
    pm = body.pressure_max_mpa
    acc = float(body.accuracy_percent) if body.accuracy_percent > 0 else 1.0

    rows: List[Dict[str, Any]]
    profile: str
    note = None

    if "ufg2" in el or "ufg-f-v" in el:
        if dn is None or pm is None:
            return TkpAccessoriesResponse(
                equipment_id=str(raw_id),
                tkp_profile="needs_params",
                accessories=[],
                note="Укажите dn и pressure_max_mpa.",
            )
        profile = "ufg-f-v"
        rows = accessories_ufg_fv_fc("ufg-f-v", dn, pm, acc)
    elif "ufgfc" in el or "ufg-f-c" in el:
        if dn is None or pm is None:
            return TkpAccessoriesResponse(
                equipment_id=str(raw_id),
                tkp_profile="needs_params",
                accessories=[],
                note="Укажите dn и pressure_max_mpa.",
            )
        profile = "ufg-f-c"
        rows = accessories_ufg_fv_fc("ufg-f-c", dn, pm, acc)
    elif el.startswith("ufl") or "uf-l" in el:
        if dn is None or pm is None:
            return TkpAccessoriesResponse(
                equipment_id=str(raw_id),
                tkp_profile="needs_params",
                accessories=[],
                note="Укажите dn и pressure_max_mpa.",
            )
        profile = "ufl"
        rows = accessories_ufl(dn, pm, acc)
    elif "tfgs" in el or "tfg-s" in el or el == "tfgs1":
        if dn is None or pm is None:
            return TkpAccessoriesResponse(
                equipment_id=str(raw_id),
                tkp_profile="needs_params",
                accessories=[],
                note="Укажите dn и pressure_max_mpa.",
            )
        profile = "tfg-sf"
        rows = accessories_tfg("tfg-sf", dn, pm, acc)
    elif "tfgh" in el or "tfg-h" in el or el == "tfgh1":
        if dn is None or pm is None:
            return TkpAccessoriesResponse(
                equipment_id=str(raw_id),
                tkp_profile="needs_params",
                accessories=[],
                note="Укажите dn и pressure_max_mpa.",
            )
        profile = "tfg-hf"
        rows = accessories_tfg("tfg-hf", dn, pm, acc)
    elif "cfm" in el:
        if dn is None or pm is None:
            return TkpAccessoriesResponse(
                equipment_id=str(raw_id),
                tkp_profile="needs_params",
                accessories=[],
                note="Укажите dn и pressure_max_mpa.",
            )
        profile = "cfm"
        rows = accessories_cfm(dn, pm)
    else:
        profile = "generic"
        rows = GENERIC_ITEMS
        note = "Для этого id список обобщённый; передайте id из каталога (ufg2, tfgs1, …)."

    return TkpAccessoriesResponse(
        equipment_id=str(raw_id),
        tkp_profile=profile,
        accessories=[TkpAccessoryRow(**r) for r in rows],
        note=note,
    )


def tkp_discovery_message() -> Dict[str, Any]:
    return {
        "status": "ok",
        "message": "POST с телом TkpAccessoriesRequest (equipment + dn + pressure_max_mpa ± accuracy_percent). См. /docs.",
        "post_paths": ["/api/tkp-accessories", "/api/tkp_accessories"],
    }
