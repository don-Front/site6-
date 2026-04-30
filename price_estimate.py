"""
Оценка примерной цены оборудования — логика совпадает с templates/index.html.
Цены в рублях с НДС 22%.
"""
from __future__ import annotations

import re
from typing import Any, Dict, List, Optional, Tuple

from pydantic import AliasChoices, BaseModel, ConfigDict, Field

_UFGFV_P = [1.6, 6.3, 10.0, 16.0, 25.0]
_UFGFV_DN = [50, 65, 80, 100, 125, 150, 200, 250, 300, 350, 400, 450, 500, 600, 700, 800]

_UFGFV_TABLE: Dict[int, Dict[int, Dict[float, Optional[int]]]] = {
    50: {
        2: {1.6: 997280, 6.3: 1310662, 10.0: 1323768, 16.0: 1515424, 25.0: 3050686},
        4: {1.6: 1411621, 6.3: 1686433, 10.0: 1825544, 16.0: 2217817, 25.0: 4307440},
    },
    65: {
        2: {1.6: 1034713, 6.3: 1323768, 10.0: 1337006, 16.0: 1592280, 25.0: 3074836},
        4: {1.6: 1464080, 6.3: 1695229, 10.0: 1879300, 16.0: 2493518, 25.0: 4454536},
    },
    80: {
        2: {1.6: 1073195, 6.3: 1337006, 10.0: 1350376, 16.0: 1731467, 25.0: 3211232},
        4: {1.6: 1517589, 6.3: 1805121, 10.0: 1958825, 16.0: 2504358, 25.0: 4620408},
    },
    100: {
        2: {1.6: 1214016, 6.3: 1350376, 10.0: 1437569, 16.0: 2013943, 25.0: 3243345},
        4: {1.6: 1721372, 6.3: 2000894, 10.0: 2183322, 16.0: 2980002, 25.0: 4642780},
    },
    125: {
        2: {1.6: 1226156, 6.3: 1363880, 10.0: 1451945, 16.0: 2034083, 25.0: 3275778},
        4: {1.6: 1770024, 6.3: 2004974, 10.0: 2220914, 16.0: 3049210, 25.0: 4736100},
    },
    150: {
        2: {1.6: 1266405, 6.3: 1377518, 10.0: 1466465, 16.0: 2054423, 25.0: 3308536},
        4: {1.6: 1835027, 6.3: 2102066, 10.0: 2243123, 16.0: 3079702, 25.0: 5949615},
    },
    200: {
        2: {1.6: 1563036, 6.3: 1578666, 10.0: 1650862, 16.0: 2074968, 25.0: 3598331},
        4: {1.6: 2051108, 6.3: 2483210, 10.0: 2769341, 16.0: 3240229, 25.0: 6069202},
    },
    250: {
        4: {1.6: 2418999, 6.3: 2443189, 10.0: 2516774, 16.0: 3130163, 25.0: 5634314},
        6: {1.6: 3596159, 6.3: 3632121, 10.0: 4083950, 16.0: 5514312, 25.0: 6069111},
    },
    300: {
        4: {1.6: 3499858, 6.3: 3548596, 10.0: 3575344, 16.0: 3611097, 25.0: 3778584},
        6: {1.6: 5107959, 6.3: 5362066, 10.0: 5944259, 16.0: 6003703, 25.0: 6154144},
    },
    350: {6: {1.6: 5551799, 6.3: 5708830, 10.0: 6030204, 16.0: 6090507, 25.0: 6239085}},
    400: {
        4: {1.6: 4578266, 6.3: 4624049, 10.0: 4670289, 16.0: 4716992, 25.0: 5789358},
        8: {1.6: 5995638, 6.3: 6055594, 10.0: 6116150, 16.0: 6177311, 25.0: 7611649},
    },
    450: {8: {1.6: 6389267, 6.3: 6453160, 10.0: 6517691, 16.0: 6582868, 25.0: 8984212}},
    500: {
        4: {1.6: 4624049, 6.3: 4670289, 10.0: 4716992, 16.0: 4764162, 25.0: 7717693},
        8: {1.6: 6782896, 6.3: 6850725, 10.0: 6919232, 16.0: 6988424, 25.0: 9158852},
    },
    600: {8: {1.6: 7122041, 6.3: 7193263, 10.0: 7265194, 16.0: 8008566, 25.0: None}},
    700: {8: {1.6: 7477143, 6.3: 7552923, 10.0: 8778471, 16.0: 9136742, 25.0: None}},
    800: {8: {1.6: 7852050, 6.3: 7930571, 10.0: 9227725, 16.0: 11227472, 25.0: None}},
}

_UFL_TABLE: Dict[int, Dict[int, Dict[float, Optional[int]]]] = {
    50: {
        2: {1.6: 1616927, 6.3: 2154252, 10.0: 2232173, 16.0: 2489907, 25.0: 5033632},
        4: {1.6: 2329175, 6.3: 2782615, 10.0: 3012148, 16.0: 3659398, 25.0: 8297114},
    },
    65: {
        2: {1.6: 1707277, 6.3: 2184218, 10.0: 2272242, 16.0: 2627261, 25.0: 5073479},
        4: {1.6: 2415733, 6.3: 2797128, 10.0: 3100845, 16.0: 4114305, 25.0: 8452482},
    },
    80: {
        2: {1.6: 1724104, 6.3: 2206060, 10.0: 2294964, 16.0: 2856921, 25.0: 5298534},
        4: {1.6: 2504022, 6.3: 2857848, 10.0: 3279042, 16.0: 4245515, 25.0: 9128855},
    },
    100: {
        2: {1.6: 1925972, 6.3: 2228120, 10.0: 2710544, 16.0: 3323007, 25.0: 5351519},
        4: {1.6: 2840265, 6.3: 3630054, 10.0: 3782606, 16.0: 6528045, 25.0: 13452554},
    },
    125: {
        2: {1.6: 2023158, 6.3: 2250402, 10.0: 2755067, 16.0: 3356237, 25.0: 5405035},
        4: {1.6: 2920540, 6.3: 3804439, 10.0: 3847734, 16.0: 6540556, 25.0: 14700668},
    },
    150: {
        2: {1.6: 2089570, 6.3: 2272906, 10.0: 2782617, 16.0: 3389799, 25.0: 5459085},
        4: {1.6: 2994624, 6.3: 4142981, 10.0: 4288718, 16.0: 6668649, 25.0: 14956357},
    },
    200: {
        2: {1.6: 2579010, 6.3: 2604800, 10.0: 2860118, 16.0: 3423697, 25.0: 5937246},
        4: {1.6: 3381839, 6.3: 4295815, 10.0: 4774590, 16.0: 7076013, 25.0: 15268391},
    },
    250: {
        4: {1.6: 3991348, 6.3: 4031262, 10.0: 4152677, 16.0: 5164770, 25.0: 5996619},
        6: {1.6: 5385537, 6.3: 6235086, 10.0: 6476237, 16.0: 8226127, 25.0: 15372493},
    },
    300: {
        4: {1.6: 5774766, 6.3: 5855183, 10.0: 5899318, 16.0: 5958311, 25.0: 6234664},
        6: {1.6: 8622399, 6.3: 8895822, 10.0: 10563864, 16.0: 11386505, 25.0: 15737519},
    },
    350: {6: {1.6: 9160469, 6.3: 9419570, 10.0: 10646326, 16.0: 11395948, 25.0: 26589386}},
    400: {
        4: {1.6: 7554140, 6.3: 7629682, 10.0: 7705979, 16.0: 7783037, 25.0: 7860868},
        8: {1.6: 14019361, 6.3: 14120650, 10.0: 14494153, 16.0: 14529733, 25.0: 35238351},
    },
    450: {8: {1.6: 14232093, 6.3: 14906800, 10.0: 15055867, 16.0: 15206425, 25.0: 37677663}},
    500: {
        4: {1.6: 7629682, 6.3: 7705979, 10.0: 7783037, 16.0: 7860868, 25.0: 12734194},
        8: {1.6: 14437396, 6.3: 15521510, 10.0: 15640924, 16.0: 16143260, 25.0: 65736382},
    },
    600: {8: {1.6: 14591455, 6.3: 16022992, 10.0: 16542847, 16.0: 16781950, 25.0: 72310020}},
    700: {8: {1.6: 14806725, 6.3: 16441912, 10.0: 17621727, 16.0: 18090750, 25.0: None}},
    800: {8: {1.6: 14899266, 6.3: 16618512, 10.0: 17622924, 16.0: 18525329, 25.0: None}},
}
_UFL_DN = list(_UFL_TABLE.keys())


def _nearest_dn_ge(table: Dict[int, Any], dn_levels: List[int], dn: float) -> Optional[int]:
    td: Optional[float] = dn if dn in table else None
    if td is None:
        for cand in dn_levels:
            if cand >= dn:
                td = cand
                break
    if td is None or td not in table:
        return None
    return int(td)


def _pressure_column(levels: List[float], pressure: float, fallback_last: float) -> float:
    col = None
    for i, lvl in enumerate(levels):
        if pressure < lvl:
            col = lvl
            break
        if pressure == lvl and i < len(levels) - 1:
            col = levels[i + 1]
            break
    if col is None:
        col = fallback_last
    return col


def _get_ufgfv_beams(dn: int, accuracy: float) -> Optional[int]:
    need_hi = accuracy < 1
    dn_data = _UFGFV_TABLE.get(dn)
    if not dn_data:
        return None
    if not need_hi:
        if 2 in dn_data:
            return 2
        if 4 in dn_data:
            return 4
        if 6 in dn_data:
            return 6
        if 8 in dn_data:
            return 8
    else:
        if 4 in dn_data:
            return 4
        if 6 in dn_data:
            return 6
        if 8 in dn_data:
            return 8
        if 2 in dn_data:
            return 2
    return None


def calculate_ufgfv_price(dn: float, pressure: float, accuracy: float) -> Dict[str, Any]:
    target_dn = _nearest_dn_ge(_UFGFV_TABLE, _UFGFV_DN, dn)
    if target_dn is None or target_dn not in _UFGFV_TABLE:
        return {"price": None, "dn": dn, "note": "DN не найден"}
    beams = _get_ufgfv_beams(target_dn, accuracy)
    if beams is None:
        return {"price": None, "dn": target_dn, "note": "Конфигурация недоступна"}
    p_col = _pressure_column(_UFGFV_P, pressure, _UFGFV_P[-1])
    row = _UFGFV_TABLE[target_dn].get(beams, {})
    price = row.get(p_col)
    return {
        "price": price,
        "dn": target_dn,
        "beams": beams,
        "pressure": p_col,
        "accuracy_band": "0,5–1%" if accuracy < 1 else "1–2%",
        "note": None if price else "Цена по запросу",
    }


def _get_ufl_beams(dn: int, accuracy: float) -> Optional[int]:
    return _get_ufgfv_beams(dn, accuracy)  # идентичная логика


def calculate_ufl_price(dn: float, pressure: float, accuracy: float) -> Dict[str, Any]:
    target_dn = _nearest_dn_ge(_UFL_TABLE, sorted(_UFL_DN), dn)
    if target_dn is None:
        return {"price": None, "dn": dn, "note": "DN не найден"}
    beams = _get_ufl_beams(target_dn, accuracy)
    if beams is None:
        return {"price": None, "dn": target_dn, "note": "Конфигурация недоступна"}
    p_col = _pressure_column(_UFGFV_P, pressure, _UFGFV_P[-1])
    price = _UFL_TABLE[target_dn][beams].get(p_col)
    acc_label = "0,5–1%" if accuracy < 1 else "1–2%"
    return {
        "price": price,
        "dn": target_dn,
        "beams": beams,
        "pressure": p_col,
        "accuracy_band": acc_label,
        "note": None if price else "Цена по запросу",
    }


_UFGFC_DN = [50, 80, 100]
_UFGFC_TBL: Dict[int, Dict[int, int]] = {
    50: {2: 137803, 4: 150918},
    80: {2: 170136, 4: 177734},
    100: {2: 197929, 4: 230277},
}


def _get_ufgfc_beams(dn: int, accuracy: float) -> Optional[int]:
    dn_data = _UFGFC_TBL.get(dn)
    if not dn_data:
        return None
    need_hi = accuracy < 1
    if not need_hi:
        return 2 if 2 in dn_data else (4 if 4 in dn_data else None)
    return 4 if 4 in dn_data else (2 if 2 in dn_data else None)


def calculate_ufgfc_price(dn: float, accuracy: float) -> Dict[str, Any]:
    target_dn = _nearest_dn_ge(_UFGFC_TBL, _UFGFC_DN, dn)
    if target_dn is None:
        return {"price": None, "dn": dn, "note": "DN не найден (доступны: 50, 80, 100)"}
    beams = _get_ufgfc_beams(target_dn, accuracy)
    if beams is None:
        return {"price": None, "dn": target_dn, "note": "Конфигурация недоступна"}
    price = _UFGFC_TBL[target_dn][beams]
    acc_label = "0,5–1%" if accuracy < 1 else "1–2%"
    return {
        "price": price,
        "dn": target_dn,
        "beams": beams,
        "pressure": 1.6,
        "accuracy_band": acc_label,
        "note": None,
    }


_TFGSF: Dict[int, Dict[float, int]] = {
    50: {1.6: 823581, 6.3: 966850, 10.0: 997740, 16.0: 1101391},
    80: {1.6: 830786, 6.3: 971008, 10.0: 1017855, 16.0: 1112224},
    100: {1.6: 862309, 6.3: 981543, 10.0: 1052694, 16.0: 1157829},
    150: {1.6: 1391351, 6.3: 1605057, 10.0: 1734352, 16.0: 1845753},
    200: {1.6: 1501697, 6.3: 1664490, 10.0: 1965424, 16.0: 2201271},
    250: {1.6: 1513982, 6.3: 1904719, 10.0: 2152839, 16.0: 2363525},
    300: {1.6: 1821640, 6.3: 2894499, 10.0: 3351647, 16.0: 4028210},
    400: {1.6: 2570456, 6.3: 3042632, 10.0: 3499026, 16.0: 4068492},
    500: {1.6: 2881340, 6.3: 6750782, 10.0: 10135631, 16.0: 14084424},
}
_TFGSF_DN = sorted(_TFGSF.keys())

_TFGHF: Dict[int, Dict[float, int]] = {
    25: {1.6: 560115, 6.3: 596158, 10.0: 674908, 16.0: 715217},
    32: {1.6: 574597, 6.3: 644632, 10.0: 681657, 16.0: 722369},
    40: {1.6: 678804, 6.3: 705596, 10.0: 712652, 16.0: 729593},
    50: {1.6: 685592, 6.3: 712652, 10.0: 719779, 16.0: 736889},
    80: {1.6: 692448, 6.3: 719779, 10.0: 744258, 16.0: 744258},
    100: {1.6: 699372, 6.3: 726976, 10.0: 734246, 16.0: 751700},
}
_TFGHF_DN = sorted(_TFGHF.keys())
_TFG_P = [1.6, 6.3, 10.0, 16.0]


def calculate_tfg_price(tfg_type: str, dn: float, pressure: float) -> Dict[str, Any]:
    table = _TFGSF if tfg_type == "sf" else _TFGHF
    dn_levels = _TFGSF_DN if tfg_type == "sf" else _TFGHF_DN
    target_dn = _nearest_dn_ge(table, dn_levels, dn)
    if target_dn is None or target_dn not in table:
        return {"price": None, "dn": dn, "note": "DN не найден", "type": "TFG-SF" if tfg_type == "sf" else "TFG-HF"}
    p_col = _pressure_column(_TFG_P, pressure, _TFG_P[-1])
    price = table[target_dn].get(p_col)
    return {
        "price": price,
        "dn": target_dn,
        "pressure": p_col,
        "type": "TFG-SF" if tfg_type == "sf" else "TFG-HF",
        "note": None if price else "Цена по запросу",
    }


_CFM_PLEVELS = [1.6, 2.5, 4.0, 6.3, 10.0, 25.0]
_CFM_DN = [15, 20, 25, 40, 50, 80, 100, 150, 200, 250]
_CFM_TBL: Dict[int, Dict[float, Optional[int]]] = {
    15: {1.6: 1110249, 2.5: 1110249, 4.0: 1110249, 6.3: 1110249, 10.0: 1112020, 25.0: None},
    20: {1.6: 1123681, 2.5: 1123681, 4.0: 1123681, 6.3: 1123681, 10.0: 1134918, 25.0: None},
    25: {1.6: None, 2.5: None, 4.0: None, 6.3: None, 10.0: None, 25.0: None},
    40: {1.6: 1280834, 2.5: 1280834, 4.0: 1280834, 6.3: 1280834, 10.0: 1293642, 25.0: None},
    50: {1.6: 1437987, 2.5: 1437987, 4.0: 1437987, 6.3: 1437987, 10.0: 1452367, 25.0: None},
    80: {1.6: 1882582, 2.5: 1882582, 4.0: 1882582, 6.3: 1882582, 10.0: 1901408, 25.0: None},
    100: {1.6: 2327178, 2.5: 2327178, 4.0: 2327178, 6.3: 2623517, 10.0: 2623517, 25.0: None},
    150: {1.6: None, 2.5: None, 4.0: None, 6.3: 4064335, 10.0: 4064335, 25.0: None},
    200: {1.6: 7235488, 2.5: 7235488, 4.0: 7235488, 6.3: 7235488, 10.0: 7345907, 25.0: None},
    250: {1.6: None, 2.5: None, 4.0: 8116918, 6.3: None, 10.0: None, 25.0: None},
}


def calculate_cfm_price(dn: float, pressure: float) -> Dict[str, Any]:
    pc = None
    for i, lvl in enumerate(_CFM_PLEVELS):
        if pressure < lvl:
            pc = lvl
            break
        if pressure == lvl and i < len(_CFM_PLEVELS) - 1:
            pc = _CFM_PLEVELS[i + 1]
            break
    if pc is None:
        pc = _CFM_PLEVELS[-1]
    target_dn: Optional[int] = None
    for cand in _CFM_DN:
        if cand >= dn:
            target_dn = cand
            break
    note = None
    price = None
    if target_dn is not None and target_dn in _CFM_TBL:
        row = _CFM_TBL[target_dn]
        price = row.get(pc)
        if price is None:
            idx = _CFM_DN.index(target_dn)
            for j in range(idx - 1, -1, -1):
                prev = _CFM_DN[j]
                if _CFM_TBL[prev].get(pc) is not None:
                    price = _CFM_TBL[prev][pc]
                    break
        if price is None:
            pi = _CFM_PLEVELS.index(pc)
            for k in range(pi - 1, -1, -1):
                alt = _CFM_PLEVELS[k]
                if row.get(alt) is not None:
                    price = row[alt]
                    pc = alt
                    break
        if price is None:
            note = "Цена по запросу"
    else:
        note = "DN не найден"
    return {"price": price, "dn": target_dn, "pressure": pc, "note": note}


_UFGH_BASE = {
    'G2"': {"base": 15362, "100-160": 17646, "400-500": 17998},
    'G1 1/2"': {"base": 26626, "100-160": 28910, "400-500": 29262},
    'G1 1/4"': {"base": 19691, "100-160": 21975, "400-500": 22327},
    'G1"': {"base": 19540, "100-160": 21824, "400-500": 22176},
    'G3/4"': {"base": 19282, "100-160": 21566, "400-500": 21918},
}
_UFGH_KMCH = {
    'G2"': 191,
    'G1 1/2"': 189,
    'G1 1/4"': 207,
    'G1"': 193,
    'G3/4"': 193,
}
_UFGH_XDUCER = 3302
_UFGH_BLOCK = 23913


def _map_ufgh_dn_to_thread(dn: float) -> str:
    if dn >= 50:
        return 'G2"'
    if dn >= 40:
        return 'G1 1/2"'
    if dn >= 32:
        return 'G1 1/4"'
    if dn >= 25:
        return 'G1"'
    return 'G3/4"'


def _map_ufgh_pressure_range(pressure_mpa: float) -> Tuple[Optional[str], str]:
    kpa = pressure_mpa * 1000
    if kpa <= 100:
        return "base", "до 100 кПа"
    if kpa <= 160:
        return "100-160", "100–160 кПа"
    if kpa <= 500:
        return "400-500", "400–500 кПа"
    return None, "свыше 500 кПа"


def calculate_ufgh_price(dn: float, pressure: float) -> Dict[str, Any]:
    thread = _map_ufgh_dn_to_thread(dn)
    key, label = _map_ufgh_pressure_range(pressure)
    if key is None:
        return {
            "price": None,
            "thread": thread,
            "pressure_range": label,
            "note": "Давление вне рабочего диапазона UFG-H (до 0,5 МПа)",
        }
    base = _UFGH_BASE.get(thread, {}).get(key)
    kmch = _UFGH_KMCH.get(thread)
    if not base or kmch is None:
        return {"price": None, "thread": thread, "pressure_range": label, "note": "Цена по запросу"}
    total = _UFGH_XDUCER + base + _UFGH_BLOCK + kmch
    return {
        "price": total,
        "dn": dn,
        "thread": thread,
        "pressure_range": label,
        "breakdown": {
            "transducer": _UFGH_XDUCER,
            "base": base,
            "block": _UFGH_BLOCK,
            "kmch": kmch,
        },
        "note": None,
    }


STATIC_MESSAGES: Dict[str, Tuple[str, Optional[int]]] = {
    "gfg": ("от 150 000 ₽", 150000),
    "gfg2": ("от 150 000 ₽", 150000),
    "udm": ("от 120 000 ₽", 120000),
    "udm1": ("от 120 000 ₽", 120000),
}


def parse_dn_hint(equipment: Dict[str, Any], explicit_dn: Optional[float]) -> Optional[float]:
    if explicit_dn is not None:
        return float(explicit_dn)
    rec = equipment.get("recommended_diameter") or ""
    if not isinstance(rec, str):
        return None
    m = re.search(r"DN\s*(\d+)", rec, flags=re.I)
    if not m:
        return None
    return float(m.group(1))


def normalize_equipment_id(eid: str) -> str:
    return (eid or "").strip().lower()


def _format_rub(value: Optional[int]) -> str:
    if value is None:
        return "по запросу"
    # группировка как ru-RU
    return f"{value:,}".replace(",", " ") + " ₽"


class EstimatePriceRequest(BaseModel):
    """Тело запроса от внешнего проекта."""

    model_config = ConfigDict(populate_by_name=True)

    equipment: Dict[str, Any] = Field(..., description="Карточка прибора (как минимум id и name)")
    dn: Optional[float] = Field(None, description="Условный проход DN, мм")
    pressure_max_mpa: Optional[float] = Field(
        None,
        validation_alias=AliasChoices("pressure_max_mpa", "pressure"),
        description="Максимальное рабочее давление, МПа (как на сайте в модалке)",
    )
    accuracy_percent: float = Field(
        1.0,
        validation_alias=AliasChoices("accuracy_percent", "accuracy"),
        description="Класс точности в процентах: 1.0 или 0.5 (как в форме модалки)",
    )


class EstimatePriceResponse(BaseModel):
    status: str = "success"
    equipment_id: str
    equipment_name: Optional[str] = None
    price_rub: Optional[int] = None
    price_display: str
    currency: str = "RUB"
    detail: Dict[str, Any] = Field(default_factory=dict)
    note: Optional[str] = None


def _calc_to_response(
    *,
    eid_out: str,
    name: Optional[str],
    base_detail: Dict[str, Any],
    calc_name: str,
    result: Dict[str, Any],
) -> EstimatePriceResponse:
    dd: Dict[str, Any] = {**base_detail, "calc": calc_name}
    for k, v in result.items():
        if k != "price":
            dd[k] = v
    pr = result.get("price")
    pr_int = pr if isinstance(pr, int) else None
    disp = _format_rub(pr_int) if pr_int is not None else "по запросу"
    return EstimatePriceResponse(
        status="success",
        equipment_id=eid_out,
        equipment_name=name,
        price_rub=pr_int,
        price_display=disp,
        detail=dd,
        note=result.get("note"),
    )


def estimate_from_request(body: EstimatePriceRequest) -> EstimatePriceResponse:
    equip = body.equipment or {}
    eid_raw = equip.get("id") or equip.get("_id") or ""
    name = equip.get("name") if isinstance(equip.get("name"), str) else None
    el = normalize_equipment_id(str(eid_raw))
    eid_out = str(eid_raw) if eid_raw else el

    dn = parse_dn_hint(equip, body.dn)
    pm = body.pressure_max_mpa
    acc = float(body.accuracy_percent)
    if acc <= 0:
        acc = 1.0

    detail: Dict[str, Any] = {"equipment_id_normalized": el}

    # UFG-F-V
    if "ufg2" in el or "ufg-f-v" in el:
        if dn is None or pm is None:
            return EstimatePriceResponse(
                status="needs_params",
                equipment_id=eid_out,
                equipment_name=name,
                price_display="Укажите dn и pressure_max_mpa для расчёта",
                detail={**detail, "requires": ["dn", "pressure_max_mpa"], "optional": ["accuracy_percent"]},
                note="Для UFG-F-V нужны DN и давление; accuracy_percent по умолчанию 1.0",
            )
        r = calculate_ufgfv_price(dn, pm, acc)
        return _calc_to_response(eid_out=eid_out, name=name, base_detail=detail, calc_name="ufgfv", result=r)

    # UFG-F-C (раньше общих «ufg», чтобы не пересечься с ufg2)
    if "ufgfc" in el or "ufg-f-c" in el:
        if dn is None:
            return EstimatePriceResponse(
                status="needs_params",
                equipment_id=eid_out,
                equipment_name=name,
                price_display="Укажите dn для расчёта",
                detail={**detail, "requires": ["dn"], "optional": ["accuracy_percent"]},
            )
        r = calculate_ufgfc_price(dn, acc)
        return _calc_to_response(eid_out=eid_out, name=name, base_detail=detail, calc_name="ufgfc", result=r)

    # TFG-S
    if "tfgs" in el or "tfg-s" in el or el == "tfgs1":
        if dn is None or pm is None:
            return EstimatePriceResponse(
                status="needs_params",
                equipment_id=eid_out,
                equipment_name=name,
                price_display="Укажите dn и pressure_max_mpa для расчёта",
                detail={**detail, "requires": ["dn", "pressure_max_mpa"]},
            )
        r = calculate_tfg_price("sf", dn, pm)
        return _calc_to_response(eid_out=eid_out, name=name, base_detail=detail, calc_name="tfg_sf", result=r)

    # TFG-H
    if "tfgh" in el or "tfg-h" in el or el == "tfgh1":
        if dn is None or pm is None:
            return EstimatePriceResponse(
                status="needs_params",
                equipment_id=eid_out,
                equipment_name=name,
                price_display="Укажите dn и pressure_max_mpa для расчёта",
                detail={**detail, "requires": ["dn", "pressure_max_mpa"]},
            )
        r = calculate_tfg_price("hf", dn, pm)
        return _calc_to_response(eid_out=eid_out, name=name, base_detail=detail, calc_name="tfg_hf", result=r)

    # UFL
    if el.startswith("ufl") or "uf-l" in el:
        if dn is None or pm is None:
            return EstimatePriceResponse(
                status="needs_params",
                equipment_id=eid_out,
                equipment_name=name,
                price_display="Укажите dn и pressure_max_mpa для расчёта",
                detail={**detail, "requires": ["dn", "pressure_max_mpa"], "optional": ["accuracy_percent"]},
            )
        r = calculate_ufl_price(dn, pm, acc)
        return _calc_to_response(eid_out=eid_out, name=name, base_detail=detail, calc_name="ufl", result=r)

    # CFM
    if "cfm" in el:
        if dn is None or pm is None:
            return EstimatePriceResponse(
                status="needs_params",
                equipment_id=eid_out,
                equipment_name=name,
                price_display="Укажите dn и pressure_max_mpa для расчёта",
                detail={**detail, "requires": ["dn", "pressure_max_mpa"]},
            )
        r = calculate_cfm_price(dn, pm)
        return _calc_to_response(eid_out=eid_out, name=name, base_detail=detail, calc_name="cfm", result=r)

    # UFG-H (бытовой)
    if "ufgh" in el or "ufg-h" in el:
        if dn is None or pm is None:
            return EstimatePriceResponse(
                status="needs_params",
                equipment_id=eid_out,
                equipment_name=name,
                price_display="Укажите dn и pressure_max_mpa для расчёта",
                detail={**detail, "requires": ["dn", "pressure_max_mpa"], "note": "давление до 0,5 МПа (диапазон основания UFG-H)"},
            )
        r = calculate_ufgh_price(dn, pm)
        return _calc_to_response(eid_out=eid_out, name=name, base_detail=detail, calc_name="ufgh", result=r)

    # Статические подсказки (GFG, UDM …)
    for key_static, pair in STATIC_MESSAGES.items():
        if key_static in el or el == key_static:
            text, apr = pair
            detail_sc = {**detail, "calc": "static_ranges"}
            return EstimatePriceResponse(
                equipment_id=eid_out,
                equipment_name=name,
                price_rub=apr,
                price_display=text,
                detail=detail_sc,
                note="Ориентир по прайсу сайта; точная конфигурация — по запросу",
            )

    return EstimatePriceResponse(
        status="unknown_equipment",
        equipment_id=eid_out,
        equipment_name=name,
        price_display="по запросу",
        detail={**detail, "note": "Неизвестный id — добавьте логику или используйте карточку с известным id"},
        note="Расчёт для этой позиции не задан",
    )
