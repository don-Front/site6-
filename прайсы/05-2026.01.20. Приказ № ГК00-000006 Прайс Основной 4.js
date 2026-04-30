// ============================================================================
// Прайс-лист на ультразвуковой преобразователь расхода Turbo Flow UFG-F-V
// Материал изделия: 3 - низкотемпературная углеродистая сталь, без дублирования
// Цены указаны в рублях с НДС 22%
// Возможна скидка до 30%
// Стандартная гарантия: 24 месяца эксплуатации, но не более чем 36 месяцев с даты отгрузки.
// Иные условия гарантии просчитываются отдельно.
// 
// Коэффициенты модификаций (применяются к базовой цене):
//   - Класс точности 1% → ×1,0 (без изменения)
//   - Класс точности 0,5% → ×1,2 (ДУ 50–300), ×1,1 (ДУ 350–800)
//   - Фланцы ANSI при давлении 1,6–16 МПа → ×1,15  ← ВАЖНО: здесь 1,15, а не 1,4!
//   - Цвет окраски корпуса и изменение толщины стенки — по запросу
// 
// Ключи объекта: комбинация "ДУ_кол-во_лучей" (string, например "50_2", "500_8")
// Значения: объект {
//   dn_mm: number,                  // Диаметр условного прохода, мм
//   beams_count: number,            // Количество лучей
//   price_1_6_mpa: number | "по запросу",  // Цена при 1,6 МПа
//   price_6_3_mpa: number | "по запросу",  // Цена при 6,3 МПа
//   price_10_0_mpa: number | "по запросу", // Цена при 10,0 МПа
//   price_16_0_mpa: number | "по запросу", // Цена при 16,0 МПа
//   price_25_0_mpa: number | "по запросу"  // Цена при 25,0 МПа
// }
// ============================================================================

const ufgFVTransducersCarbonSteel = {
  "50_2": {
    dn_mm: 50,
    beams_count: 2,
    price_1_6_mpa: 997280,
    price_6_3_mpa: 1310662,
    price_10_0_mpa: 1323768,
    price_16_0_mpa: 1515424,
    price_25_0_mpa: 3050686
  },
  "65_2": {
    dn_mm: 65,
    beams_count: 2,
    price_1_6_mpa: 1034713,
    price_6_3_mpa: 1323768,
    price_10_0_mpa: 1337006,
    price_16_0_mpa: 1592280,
    price_25_0_mpa: 3074836
  },
  "80_2": {
    dn_mm: 80,
    beams_count: 2,
    price_1_6_mpa: 1073195,
    price_6_3_mpa: 1337006,
    price_10_0_mpa: 1350376,
    price_16_0_mpa: 1731467,
    price_25_0_mpa: 3211232
  },
  "100_2": {
    dn_mm: 100,
    beams_count: 2,
    price_1_6_mpa: 1214016,
    price_6_3_mpa: 1350376,
    price_10_0_mpa: 1437569,
    price_16_0_mpa: 2013943,
    price_25_0_mpa: 3243345
  },
  "125_2": {
    dn_mm: 125,
    beams_count: 2,
    price_1_6_mpa: 1226156,
    price_6_3_mpa: 1363880,
    price_10_0_mpa: 1451945,
    price_16_0_mpa: 2034083,
    price_25_0_mpa: 3275778
  },
  "150_2": {
    dn_mm: 150,
    beams_count: 2,
    price_1_6_mpa: 1266405,
    price_6_3_mpa: 1377518,
    price_10_0_mpa: 1466465,
    price_16_0_mpa: 2054423,
    price_25_0_mpa: 3308536
  },
  "200_2": {
    dn_mm: 200,
    beams_count: 2,
    price_1_6_mpa: 1563036,
    price_6_3_mpa: 1578666,
    price_10_0_mpa: 1650862,
    price_16_0_mpa: 2074968,
    price_25_0_mpa: 3598331
  },
  "250_4": {
    dn_mm: 250,
    beams_count: 4,
    price_1_6_mpa: 2418999,
    price_6_3_mpa: 2443189,
    price_10_0_mpa: 2516774,
    price_16_0_mpa: 3130163,
    price_25_0_mpa: 3634314
  },
  "300_4": {
    dn_mm: 300,
    beams_count: 4,
    price_1_6_mpa: 3499858,
    price_6_3_mpa: 3548596,
    price_10_0_mpa: 3575344,
    price_16_0_mpa: 3611097,
    price_25_0_mpa: 3778584
  },
  "400_4": {
    dn_mm: 400,
    beams_count: 4,
    price_1_6_mpa: 4578266,
    price_6_3_mpa: 4624049,
    price_10_0_mpa: 4670289,
    price_16_0_mpa: 4716992,
    price_25_0_mpa: 5789358
  },
  "500_4": {
    dn_mm: 500,
    beams_count: 4,
    price_1_6_mpa: 4624049,
    price_6_3_mpa: 4670289,
    price_10_0_mpa: 4716992,
    price_16_0_mpa: 4764162,
    price_25_0_mpa: 7717693
  },
  "50_4": {
    dn_mm: 50,
    beams_count: 4,
    price_1_6_mpa: 1411621,
    price_6_3_mpa: 1686433,
    price_10_0_mpa: 1825544,
    price_16_0_mpa: 2217817,
    price_25_0_mpa: 4307440
  },
  "65_4": {
    dn_mm: 65,
    beams_count: 4,
    price_1_6_mpa: 1464080,
    price_6_3_mpa: 1695229,
    price_10_0_mpa: 1879300,
    price_16_0_mpa: 2493518,
    price_25_0_mpa: 4454536
  },
  "80_4": {
    dn_mm: 80,
    beams_count: 4,
    price_1_6_mpa: 1517589,
    price_6_3_mpa: 1805121,
    price_10_0_mpa: 1958825,
    price_16_0_mpa: 2504358,
    price_25_0_mpa: 4620408
  },
  "100_4": {
    dn_mm: 100,
    beams_count: 4,
    price_1_6_mpa: 1721372,
    price_6_3_mpa: 2000894,
    price_10_0_mpa: 2183322,
    price_16_0_mpa: 2980002,
    price_25_0_mpa: 4642780
  },
  "125_4": {
    dn_mm: 125,
    beams_count: 4,
    price_1_6_mpa: 1770024,
    price_6_3_mpa: 2004974,
    price_10_0_mpa: 2220914,
    price_16_0_mpa: 3049210,
    price_25_0_mpa: 4689208
  },
  "150_4": {
    dn_mm: 150,
    beams_count: 4,
    price_1_6_mpa: 1835027,
    price_6_3_mpa: 2102066,
    price_10_0_mpa: 2243123,
    price_16_0_mpa: 3079702,
    price_25_0_mpa: 4736100
  },
  "200_4": {
    dn_mm: 200,
    beams_count: 4,
    price_1_6_mpa: 2051108,
    price_6_3_mpa: 2483210,
    price_10_0_mpa: 2769341,
    price_16_0_mpa: 3240229,
    price_25_0_mpa: 5949615
  },
  "250_6": {
    dn_mm: 250,
    beams_count: 6,
    price_1_6_mpa: 3596159,
    price_6_3_mpa: 3632121,
    price_10_0_mpa: 4083950,
    price_16_0_mpa: 5514312,
    price_25_0_mpa: 6009111
  },
  "300_6": {
    dn_mm: 300,
    beams_count: 6,
    price_1_6_mpa: 5107959,
    price_6_3_mpa: 5362066,
    price_10_0_mpa: 5944259,
    price_16_0_mpa: 6003703,
    price_25_0_mpa: 6069202
  },
  "350_6": {
    dn_mm: 350,
    beams_count: 6,
    price_1_6_mpa: 5551799,
    price_6_3_mpa: 5708830,
    price_10_0_mpa: 6030204,
    price_16_0_mpa: 6090507,
    price_25_0_mpa: 6154144
  },
  "400_8": {
    dn_mm: 400,
    beams_count: 8,
    price_1_6_mpa: 5995638,
    price_6_3_mpa: 6055594,
    price_10_0_mpa: 6116150,
    price_16_0_mpa: 6177311,
    price_25_0_mpa: 6239085
  },
  "450_8": {
    dn_mm: 450,
    beams_count: 8,
    price_1_6_mpa: 6389267,
    price_6_3_mpa: 6453160,
    price_10_0_mpa: 6517691,
    price_16_0_mpa: 6582868,
    price_25_0_mpa: 7611649
  },
  "500_8": {
    dn_mm: 500,
    beams_count: 8,
    price_1_6_mpa: 6782896,
    price_6_3_mpa: 6850725,
    price_10_0_mpa: 6919232,
    price_16_0_mpa: 6988424,
    price_25_0_mpa: 8984212
  },
  "600_8": {
    dn_mm: 600,
    beams_count: 8,
    price_1_6_mpa: 7122041,
    price_6_3_mpa: 7193262,
    price_10_0_mpa: 7265194,
    price_16_0_mpa: 8008566,
    price_25_0_mpa: 9158852
  },
  "700_8": {
    dn_mm: 700,
    beams_count: 8,
    price_1_6_mpa: 7478143,
    price_6_3_mpa: 7552925,
    price_10_0_mpa: 8778471,
    price_16_0_mpa: 9136742,
    price_25_0_mpa: "по запросу"
  },
  "800_8": {
    dn_mm: 800,
    beams_count: 8,
    price_1_6_mpa: 7852050,
    price_6_3_mpa: 7930571,
    price_10_0_mpa: 9227725,
    price_16_0_mpa: 11227472,
    price_25_0_mpa: "по запросу"
  }
};









// -------------------------------------------------------------------------------------------------------------------------------------











// ============================================================================
// Прайс-лист на ультразвуковой преобразователь расхода Turbo Flow UFG-F-V
// Материал изделия: 3 - низкотемпературная углеродистая сталь,
//                   полное и частичное дублирование
// Цены указаны в рублях с НДС 22%
// Возможна скидка до 30%
// Стандартная гарантия: 24 месяца эксплуатации, но не более чем 36 месяцев с даты отгрузки.
// Иные условия гарантии просчитываются отдельно.
// 
// Коэффициенты модификаций (применяются к базовой цене):
//   - Класс точности 1% → ×1,0 (без изменения)
//   - Класс точности 0,5% → ×1,2 (ДУ 50–300), ×1,1 (ДУ 350–800)
//   - Фланцы ANSI при давлении 1,6–16 МПа → ×1,15  ← ВАЖНО: здесь 1,15, а не 1,4!
//   - Цвет окраски корпуса и изменение толщины стенки — по запросу
// 
// Объект содержит 2 подобъекта по типу дублирования:
//   full_duplication_dA     — полное дублирование (dA)
//   partial_duplication_dB  — частичное дублирование (dB)
// 
// В каждом подобъекте:
//   Ключи: комбинация "ДУ_кол-во_лучей" (string, например "50_4", "500_8")
//   Значения: объект {
//     dn_mm: number,                  // Диаметр условного прохода, мм
//     beams_count: number,            // Количество лучей
//     price_1_6_mpa: number | "по запросу",  // Цена при 1,6 МПа
//     price_6_3_mpa: number | "по запросу",  // Цена при 6,3 МПа
//     price_10_0_mpa: number | "по запросу", // Цена при 10,0 МПа
//     price_16_0_mpa: number | "по запросу", // Цена при 16,0 МПа
//     price_25_0_mpa: number | "по запросу"  // Цена при 25,0 МПа
//   }
// ============================================================================

const ufgFVTransducersCarbonSteelWithDuplication = {
  full_duplication_dA: {
    "50_4": {
      dn_mm: 50,
      beams_count: 4,
      price_1_6_mpa: 1898317,
      price_6_3_mpa: 2268996,
      price_10_0_mpa: 2470641,
      price_16_0_mpa: 3026776,
      price_25_0_mpa: 5771256
    },
    "65_4": {
      dn_mm: 65,
      beams_count: 4,
      price_1_6_mpa: 1969992,
      price_6_3_mpa: 2331334,
      price_10_0_mpa: 2577530,
      price_16_0_mpa: 3223023,
      price_25_0_mpa: 6022468
    },
    "80_4": {
      dn_mm: 80,
      beams_count: 4,
      price_1_6_mpa: 2042717,
      price_6_3_mpa: 2506378,
      price_10_0_mpa: 2750499,
      price_16_0_mpa: 3480534,
      price_25_0_mpa: 6371181
    },
    "100_4": {
      dn_mm: 100,
      beams_count: 4,
      price_1_6_mpa: 2313635,
      price_6_3_mpa: 2768525,
      price_10_0_mpa: 3025582,
      price_16_0_mpa: 4081684,
      price_25_0_mpa: 6409746
    },
    "125_4": {
      dn_mm: 125,
      beams_count: 4,
      price_1_6_mpa: 2426454,
      price_6_3_mpa: 2854097,
      price_10_0_mpa: 3130741,
      price_16_0_mpa: 4253239,
      price_25_0_mpa: 6473843
    },
    "150_4": {
      dn_mm: 150,
      beams_count: 4,
      price_1_6_mpa: 2555625,
      price_6_3_mpa: 3032680,
      price_10_0_mpa: 3227056,
      price_16_0_mpa: 4326895,
      price_25_0_mpa: 6538582
    },
    "200_4": {
      dn_mm: 200,
      beams_count: 4,
      price_1_6_mpa: 2791354,
      price_6_3_mpa: 3514819,
      price_10_0_mpa: 3984894,
      price_16_0_mpa: 4639019,
      price_25_0_mpa: 8635070
    },
    "250_6": {
      dn_mm: 250,
      beams_count: 6,
      price_1_6_mpa: 4822455,
      price_6_3_mpa: 4870680,
      price_10_0_mpa: 5805682,
      price_16_0_mpa: 7575574,
      price_25_0_mpa: 9092737
    },
    "300_6": {
      dn_mm: 300,
      beams_count: 6,
      price_1_6_mpa: 6744848,
      price_6_3_mpa: 7476239,
      price_10_0_mpa: 7770675,
      price_16_0_mpa: 8123285,
      price_25_0_mpa: 10154106
    },
    "350_6": {
      dn_mm: 350,
      beams_count: 6,
      price_1_6_mpa: 7113491,
      price_6_3_mpa: 7513620,
      price_10_0_mpa: 7865896,
      price_16_0_mpa: 8163901,
      price_25_0_mpa: 10204877
    },
    "400_8": {
      dn_mm: 400,
      beams_count: 8,
      price_1_6_mpa: 7482133,
      price_6_3_mpa: 7551001,
      price_10_0_mpa: 7961118,
      price_16_0_mpa: 8204518,
      price_25_0_mpa: 10255647
    },
    "450_8": {
      dn_mm: 450,
      beams_count: 8,
      price_1_6_mpa: 8317494,
      price_6_3_mpa: 8397692,
      price_10_0_mpa: 8648973,
      price_16_0_mpa: 8817357,
      price_25_0_mpa: 14558019
    },
    "500_8": {
      dn_mm: 500,
      beams_count: 8,
      price_1_6_mpa: 9152855,
      price_6_3_mpa: 9244383,
      price_10_0_mpa: 9336828,
      price_16_0_mpa: 9430195,
      price_25_0_mpa: 18860391
    },
    "600_8": {
      dn_mm: 600,
      beams_count: 8,
      price_1_6_mpa: 9610497,
      price_6_3_mpa: 9706602,
      price_10_0_mpa: 9803669,
      price_16_0_mpa: 9901705,
      price_25_0_mpa: "по запросу"
    },
    "700_8": {
      dn_mm: 700,
      beams_count: 8,
      price_1_6_mpa: 10091022,
      price_6_3_mpa: 10191932,
      price_10_0_mpa: 10293853,
      price_16_0_mpa: 10396790,
      price_25_0_mpa: "по запросу"
    },
    "800_8": {
      dn_mm: 800,
      beams_count: 8,
      price_1_6_mpa: 10595573,
      price_6_3_mpa: 10701529,
      price_10_0_mpa: 10930524,
      price_16_0_mpa: 14595713,
      price_25_0_mpa: "по запросу"
    }
  },
  partial_duplication_dB: {
    "50_4": {
      dn_mm: 50,
      beams_count: 4,
      price_1_6_mpa: 1662843,
      price_6_3_mpa: 1980425,
      price_10_0_mpa: 2153478,
      price_16_0_mpa: 2608692,
      price_25_0_mpa: 5047222
    },
    "65_4": {
      dn_mm: 65,
      beams_count: 4,
      price_1_6_mpa: 1724910,
      price_6_3_mpa: 2021156,
      price_10_0_mpa: 2236289,
      price_16_0_mpa: 2798684,
      price_25_0_mpa: 5246376
    },
    "80_4": {
      dn_mm: 80,
      beams_count: 4,
      price_1_6_mpa: 1788027,
      price_6_3_mpa: 2174592,
      price_10_0_mpa: 2385182,
      price_16_0_mpa: 3026295,
      price_25_0_mpa: 5543030
    },
    "100_4": {
      dn_mm: 100,
      beams_count: 4,
      price_1_6_mpa: 2025378,
      price_6_3_mpa: 2392583,
      price_10_0_mpa: 2612326,
      price_16_0_mpa: 3538717,
      price_25_0_mpa: 5598461
    },
    "125_4": {
      dn_mm: 125,
      beams_count: 4,
      price_1_6_mpa: 2106113,
      price_6_3_mpa: 2437409,
      price_10_0_mpa: 2672446,
      price_16_0_mpa: 3659098,
      price_25_0_mpa: 5654445
    },
    "150_4": {
      dn_mm: 150,
      beams_count: 4,
      price_1_6_mpa: 2203200,
      price_6_3_mpa: 2575247,
      price_10_0_mpa: 2723722,
      price_16_0_mpa: 3681581,
      price_25_0_mpa: 5710990
    },
    "200_4": {
      dn_mm: 200,
      beams_count: 4,
      price_1_6_mpa: 2485074,
      price_6_3_mpa: 3062857,
      price_10_0_mpa: 3440960,
      price_16_0_mpa: 4003466,
      price_25_0_mpa: 7356185
    },
    "250_6": {
      dn_mm: 250,
      beams_count: 6,
      price_1_6_mpa: 4299537,
      price_6_3_mpa: 4342532,
      price_10_0_mpa: 5035046,
      price_16_0_mpa: 6635172,
      price_25_0_mpa: 7579867
    },
    "300_6": {
      dn_mm: 300,
      beams_count: 6,
      price_1_6_mpa: 5997844,
      price_6_3_mpa: 6509382,
      price_10_0_mpa: 6804501,
      price_16_0_mpa: 6934881,
      price_25_0_mpa: 8668601
    },
    "350_6": {
      dn_mm: 350,
      beams_count: 6,
      price_1_6_mpa: 6477267,
      price_6_3_mpa: 6767819,
      price_10_0_mpa: 7262376,
      price_16_0_mpa: 7366168,
      price_25_0_mpa: 8711944
    },
    "400_8": {
      dn_mm: 400,
      beams_count: 8,
      price_1_6_mpa: 6956689,
      price_6_3_mpa: 7026256,
      price_10_0_mpa: 7720251,
      price_16_0_mpa: 7797454,
      price_25_0_mpa: 8755287
    },
    "450_8": {
      dn_mm: 450,
      beams_count: 8,
      price_1_6_mpa: 7532825,
      price_6_3_mpa: 7608153,
      price_10_0_mpa: 7996101,
      price_16_0_mpa: 8076062,
      price_25_0_mpa: 12732313
    },
    "500_8": {
      dn_mm: 500,
      beams_count: 8,
      price_1_6_mpa: 8108961,
      price_6_3_mpa: 8190050,
      price_10_0_mpa: 8271951,
      price_16_0_mpa: 8354670,
      price_25_0_mpa: 16709339
    },
    "600_8": {
      dn_mm: 600,
      beams_count: 8,
      price_1_6_mpa: 8514409,
      price_6_3_mpa: 8599553,
      price_10_0_mpa: 8685549,
      price_16_0_mpa: 8772403,
      price_25_0_mpa: "по запросу"
    },
    "700_8": {
      dn_mm: 700,
      beams_count: 8,
      price_1_6_mpa: 8940129,
      price_6_3_mpa: 9029531,
      price_10_0_mpa: 9119826,
      price_16_0_mpa: 9211023,
      price_25_0_mpa: "по запросу"
    },
    "800_8": {
      dn_mm: 800,
      beams_count: 8,
      price_1_6_mpa: 9387136,
      price_6_3_mpa: 9481007,
      price_10_0_mpa: 9573170,
      price_16_0_mpa: 13048848,
      price_25_0_mpa: "по запросу"
    }
  }
};








// -------------------------------------------------------------------------------------------------------------------------------------









// ============================================================================
// Прайс-лист на Участок прямой до/после УЗПР Turbo Flow UFG-F-V, TFG-SF, TFG-HF
// Материал изделия: 3 - низкотемпературная углеродистая сталь
// Цены указаны в рублях с НДС 22%
// Возможна скидка до 30%
// Стандартная гарантия: 24 месяца эксплуатации, но не более чем 36 месяцев с даты отгрузки.
// Иные условия гарантии просчитываются отдельно.
// 
// Коэффициенты модификаций (применяются к базовой цене, если применимо):
//   - Класс точности 1% → ×1,0 (без изменения)
//   - Класс точности 0,5% → ×1,2 (ДУ 50–300), ×1,1 (ДУ 350–800)
//   - Фланцы ANSI при давлении 1,6–16 МПа → ×1,4  ← предположительно, так как не указано явно
//   - Цвет окраски корпуса и изменение толщины стенки — по запросу
// 
// Объект содержит 3 подобъекта по длине участка:
//   length_20Dn       — длина 20Dn
//   length_7to10Dn    — длина 7–10Dn
//   length_2to6Dn     — длина 2–6Dn
// 
// В каждом подобъекте:
//   Ключи: ДУ (number)
//   Значения: объект {
//     dn_mm: number,                  // Диаметр условного прохода, мм
//     price_1_6_mpa: number | "по запросу",  // Цена при 1,6 МПа
//     price_6_3_mpa: number | "по запросу",  // Цена при 6,3 МПа
//     price_10_0_mpa: number | "по запросу", // Цена при 10,0 МПа
//     price_16_0_mpa: number | "по запросу", // Цена при 16,0 МПа
//     price_25_0_mpa: number | "по запросу"  // Цена при 25,0 МПа
//   }
// ============================================================================

const ufgFVStraightSectionsCarbonSteel = {
  length_20Dn: {
    50: {
      dn_mm: 50,
      price_1_6_mpa: 137823,
      price_6_3_mpa: 181479,
      price_10_0_mpa: 196277,
      price_16_0_mpa: 223053,
      price_25_0_mpa: 296045
    },
    65: {
      dn_mm: 65,
      price_1_6_mpa: 144926,
      price_6_3_mpa: 199890,
      price_10_0_mpa: 212600,
      price_16_0_mpa: 239806,
      price_25_0_mpa: 491433
    },
    80: {
      dn_mm: 80,
      price_1_6_mpa: 150414,
      price_6_3_mpa: 226121,
      price_10_0_mpa: 257355,
      price_16_0_mpa: 272498,
      price_25_0_mpa: 517872
    },
    100: {
      dn_mm: 100,
      price_1_6_mpa: 214785,
      price_6_3_mpa: 311573,
      price_10_0_mpa: 379166,
      price_16_0_mpa: 392225,
      price_25_0_mpa: 588931
    },
    125: {
      dn_mm: 125,
      price_1_6_mpa: 222121,
      price_6_3_mpa: 368971,
      price_10_0_mpa: 391393,
      price_16_0_mpa: 457654,
      price_25_0_mpa: 886960
    },
    150: {
      dn_mm: 150,
      price_1_6_mpa: 318813,
      price_6_3_mpa: 461511,
      price_10_0_mpa: 504854,
      price_16_0_mpa: 576841,
      price_25_0_mpa: 1443905
    },
    200: {
      dn_mm: 200,
      price_1_6_mpa: 405462,
      price_6_3_mpa: 554051,
      price_10_0_mpa: 764280,
      price_16_0_mpa: 790615,
      price_25_0_mpa: 1841110
    },
    250: {
      dn_mm: 250,
      price_1_6_mpa: 484155,
      price_6_3_mpa: 872822,
      price_10_0_mpa: 953989,
      price_16_0_mpa: 1004388,
      price_25_0_mpa: 2737851
    },
    300: {
      dn_mm: 300,
      price_1_6_mpa: 838671,
      price_6_3_mpa: 1364485,
      price_10_0_mpa: 1665448,
      price_16_0_mpa: 1709511,
      price_25_0_mpa: 4141384
    },
    350: {
      dn_mm: 350,
      price_1_6_mpa: 1151197,
      price_6_3_mpa: 1866743,
      price_10_0_mpa: 2234103,
      price_16_0_mpa: 2819015,
      price_25_0_mpa: 6307167
    },
    400: {
      dn_mm: 400,
      price_1_6_mpa: 1528340,
      price_6_3_mpa: 2369002,
      price_10_0_mpa: 2580388,
      price_16_0_mpa: 4463421,
      price_25_0_mpa: 6375450
    },
    450: {
      dn_mm: 450,
      price_1_6_mpa: 1560842,
      price_6_3_mpa: 5036762,
      price_10_0_mpa: 9081414,
      price_16_0_mpa: 10190660,
      price_25_0_mpa: 13033065
    },
    500: {
      dn_mm: 500,
      price_1_6_mpa: 1661438,
      price_6_3_mpa: 5301855,
      price_10_0_mpa: 9559383,
      price_16_0_mpa: 10727011,
      price_25_0_mpa: 13719016
    },
    600: {
      dn_mm: 600,
      price_1_6_mpa: 4180946,
      price_6_3_mpa: 6315521,
      price_10_0_mpa: 9610606,
      price_16_0_mpa: 10834281,
      price_25_0_mpa: "по запросу"
    },
    700: {
      dn_mm: 700,
      price_1_6_mpa: 4389993,
      price_6_3_mpa: 8493168,
      price_10_0_mpa: 9661830,
      price_16_0_mpa: 10942624,
      price_25_0_mpa: "по запросу"
    },
    800: {
      dn_mm: 800,
      price_1_6_mpa: 5579323,
      price_6_3_mpa: 10450635,
      price_10_0_mpa: 17053730,
      price_16_0_mpa: 17906417,
      price_25_0_mpa: "по запросу"
    }
  },
  length_7to10Dn: {
    50: {
      dn_mm: 50,
      price_1_6_mpa: 123133,
      price_6_3_mpa: 200985,
      price_10_0_mpa: 203110,
      price_16_0_mpa: 212430,
      price_25_0_mpa: 320786
    },
    65: {
      dn_mm: 65,
      price_1_6_mpa: 132948,
      price_6_3_mpa: 206156,
      price_10_0_mpa: 214352,
      price_16_0_mpa: 228386,
      price_25_0_mpa: 347804
    },
    80: {
      dn_mm: 80,
      price_1_6_mpa: 142764,
      price_6_3_mpa: 211327,
      price_10_0_mpa: 225594,
      price_16_0_mpa: 256843,
      price_25_0_mpa: 427993
    },
    100: {
      dn_mm: 100,
      price_1_6_mpa: 165708,
      price_6_3_mpa: 236843,
      price_10_0_mpa: 252953,
      price_16_0_mpa: 285298,
      price_25_0_mpa: 548840
    },
    125: {
      dn_mm: 125,
      price_1_6_mpa: 257766,
      price_6_3_mpa: 347382,
      price_10_0_mpa: 373162,
      price_16_0_mpa: 398942,
      price_25_0_mpa: 821057
    },
    150: {
      dn_mm: 150,
      price_1_6_mpa: 289830,
      price_6_3_mpa: 425914,
      price_10_0_mpa: 458958,
      price_16_0_mpa: 524401,
      price_25_0_mpa: 1232941
    },
    200: {
      dn_mm: 200,
      price_1_6_mpa: 322716,
      price_6_3_mpa: 477592,
      price_10_0_mpa: 591239,
      price_16_0_mpa: 740211,
      price_25_0_mpa: 1573183
    },
    250: {
      dn_mm: 250,
      price_1_6_mpa: 428648,
      price_6_3_mpa: 728613,
      price_10_0_mpa: 816385,
      price_16_0_mpa: 855215,
      price_25_0_mpa: 2337992
    },
    300: {
      dn_mm: 300,
      price_1_6_mpa: 473607,
      price_6_3_mpa: 945058,
      price_10_0_mpa: 1069361,
      price_16_0_mpa: 1158750,
      price_25_0_mpa: 3387754
    },
    350: {
      dn_mm: 350,
      price_1_6_mpa: 754332,
      price_6_3_mpa: 1037221,
      price_10_0_mpa: 1361166,
      price_16_0_mpa: 1609276,
      price_25_0_mpa: 4800717
    },
    400: {
      dn_mm: 400,
      price_1_6_mpa: 911775,
      price_6_3_mpa: 1283992,
      price_10_0_mpa: 1767040,
      price_16_0_mpa: 2458183,
      price_25_0_mpa: 5566568
    },
    450: {
      dn_mm: 450,
      price_1_6_mpa: 1002952,
      price_6_3_mpa: 2522151,
      price_10_0_mpa: 4467806,
      price_16_0_mpa: 4998276,
      price_25_0_mpa: 6516533
    },
    500: {
      dn_mm: 500,
      price_1_6_mpa: 1103247,
      price_6_3_mpa: 3157761,
      price_10_0_mpa: 4702954,
      price_16_0_mpa: 5261344,
      price_25_0_mpa: 6859508
    },
    600: {
      dn_mm: 600,
      price_1_6_mpa: 2779726,
      price_6_3_mpa: 3228652,
      price_10_0_mpa: 4749983,
      price_16_0_mpa: 8488176,
      price_25_0_mpa: "по запросу"
    },
    700: {
      dn_mm: 700,
      price_1_6_mpa: 2835321,
      price_6_3_mpa: 3270437,
      price_10_0_mpa: 4830915,
      price_16_0_mpa: 8573058,
      price_25_0_mpa: "по запросу"
    },
    800: {
      dn_mm: 800,
      price_1_6_mpa: 2863674,
      price_6_3_mpa: 3824583,
      price_10_0_mpa: 8526866,
      price_16_0_mpa: 9001711,
      price_25_0_mpa: "по запросу"
    }
  },
  length_2to6Dn: {
    50: {
      dn_mm: 50,
      price_1_6_mpa: 98979,
      price_6_3_mpa: 150093,
      price_10_0_mpa: 198270,
      price_16_0_mpa: 212430,
      price_25_0_mpa: 249322
    },
    65: {
      dn_mm: 65,
      price_1_6_mpa: 101256,
      price_6_3_mpa: 181309,
      price_10_0_mpa: 216595,
      price_16_0_mpa: 220391,
      price_25_0_mpa: 293643
    },
    80: {
      dn_mm: 80,
      price_1_6_mpa: 103823,
      price_6_3_mpa: 185260,
      price_10_0_mpa: 236923,
      price_16_0_mpa: 244359,
      price_25_0_mpa: 390101
    },
    100: {
      dn_mm: 100,
      price_1_6_mpa: 140535,
      price_6_3_mpa: 215311,
      price_10_0_mpa: 309102,
      price_16_0_mpa: 311061,
      price_25_0_mpa: 523914
    },
    125: {
      dn_mm: 125,
      price_1_6_mpa: 177247,
      price_6_3_mpa: 336603,
      price_10_0_mpa: 361195,
      price_16_0_mpa: 377764,
      price_25_0_mpa: 746415
    },
    150: {
      dn_mm: 150,
      price_1_6_mpa: 210671,
      price_6_3_mpa: 381084,
      price_10_0_mpa: 572059,
      price_16_0_mpa: 592590,
      price_25_0_mpa: 1135195
    },
    200: {
      dn_mm: 200,
      price_1_6_mpa: 260205,
      price_6_3_mpa: 425564,
      price_10_0_mpa: 580843,
      price_16_0_mpa: 609886,
      price_25_0_mpa: 1411838
    },
    250: {
      dn_mm: 250,
      price_1_6_mpa: 324542,
      price_6_3_mpa: 596892,
      price_10_0_mpa: 886948,
      price_16_0_mpa: 956389,
      price_25_0_mpa: 2086665
    },
    300: {
      dn_mm: 300,
      price_1_6_mpa: 420932,
      price_6_3_mpa: 770926,
      price_10_0_mpa: 1108976,
      price_16_0_mpa: 1114059,
      price_25_0_mpa: 2823931
    },
    350: {
      dn_mm: 350,
      price_1_6_mpa: 710127,
      price_6_3_mpa: 852109,
      price_10_0_mpa: 1190190,
      price_16_0_mpa: 1319195,
      price_25_0_mpa: 3719269
    },
    400: {
      dn_mm: 400,
      price_1_6_mpa: 718244,
      price_6_3_mpa: 1046445,
      price_10_0_mpa: 1501748,
      price_16_0_mpa: 1940640,
      price_25_0_mpa: 4996003
    },
    450: {
      dn_mm: 450,
      price_1_6_mpa: 718455,
      price_6_3_mpa: 1672592,
      price_10_0_mpa: 1973531,
      price_16_0_mpa: 3146292,
      price_25_0_mpa: 5748046
    },
    500: {
      dn_mm: 500,
      price_1_6_mpa: 752868,
      price_6_3_mpa: 2135605,
      price_10_0_mpa: 3453691,
      price_16_0_mpa: 3643075,
      price_25_0_mpa: 8939631
    },
    600: {
      dn_mm: 600,
      price_1_6_mpa: 1298565,
      price_6_3_mpa: 2252103,
      price_10_0_mpa: 3487867,
      price_16_0_mpa: 6592942,
      price_25_0_mpa: "по запросу"
    },
    700: {
      dn_mm: 700,
      price_1_6_mpa: 1336367,
      price_6_3_mpa: 2315611,
      price_10_0_mpa: 3699318,
      price_16_0_mpa: 7409680,
      price_25_0_mpa: "по запросу"
    },
    800: {
      dn_mm: 800,
      price_1_6_mpa: 1828080,
      price_6_3_mpa: 2379119,
      price_10_0_mpa: 6513817,
      price_16_0_mpa: 7767145,
      price_25_0_mpa: "по запросу"
    }
  }
};








// -------------------------------------------------------------------------------------------------------------------------------------









// ============================================================================
// Прайс-лист на комплект монтажных частей ПУ УЗПР Turbo Flow UFG-F-V, TFG-SF, TFG-HF
// Материал изделия: 3 - низкотемпературная углеродистая сталь, стандарт качества ОСТ
// Цены указаны в рублях с НДС 22%
// Возможна скидка до 30%
// Стандартная гарантия: 24 месяца эксплуатации, но не более чем 36 месяцев с даты отгрузки.
// Иные условия гарантии просчитываются отдельно.
// 
// Объект содержит 2 подобъекта по наличию струевыпрямителя:
//   without_flow_straightener — исполнение без струевыпрямителя
//   with_flow_straightener    — исполнение со струевыпрямителем
// 
// В каждом подобъекте:
//   Ключи: ДУ (number)
//   Значения: объект {
//     dn_mm: number,                  // Диаметр условного прохода, мм
//     price_1_6_mpa: number | "по запросу",  // Цена при 1,6 МПа
//     price_6_3_mpa: number | "по запросу",  // Цена при 6,3 МПа
//     price_10_0_mpa: number | "по запросу", // Цена при 10,0 МПа
//     price_16_0_mpa: number | "по запросу", // Цена при 16,0 МПа
//     price_25_0_mpa: number | "по запросу"  // Цена при 25,0 МПа
//   }
// ============================================================================

const ufgMountingKitsCarbonSteelOST = {
  without_flow_straightener: {
    50: {
      dn_mm: 50,
      price_1_6_mpa: 5666,
      price_6_3_mpa: 12320,
      price_10_0_mpa: 23902,
      price_16_0_mpa: 24141,
      price_25_0_mpa: 34046
    },
    65: {
      dn_mm: 65,
      price_1_6_mpa: 5691,
      price_6_3_mpa: 23764,
      price_10_0_mpa: 26242,
      price_16_0_mpa: 34182,
      price_25_0_mpa: 77101
    },
    80: {
      dn_mm: 80,
      price_1_6_mpa: 6354,
      price_6_3_mpa: 24622,
      price_10_0_mpa: 48172,
      price_16_0_mpa: 48653,
      price_25_0_mpa: 77872
    },
    100: {
      dn_mm: 100,
      price_1_6_mpa: 11327,
      price_6_3_mpa: 47626,
      price_10_0_mpa: 56439,
      price_16_0_mpa: 57004,
      price_25_0_mpa: 78651
    },
    125: {
      dn_mm: 125,
      price_1_6_mpa: 15701,
      price_6_3_mpa: 59928,
      price_10_0_mpa: 60528,
      price_16_0_mpa: 83039,
      price_25_0_mpa: 87764
    },
    150: {
      dn_mm: 150,
      price_1_6_mpa: 22462,
      price_6_3_mpa: 85692,
      price_10_0_mpa: 139123,
      price_16_0_mpa: 154382,
      price_25_0_mpa: 216881
    },
    200: {
      dn_mm: 200,
      price_1_6_mpa: 34277,
      price_6_3_mpa: 139886,
      price_10_0_mpa: 195234,
      price_16_0_mpa: 197186,
      price_25_0_mpa: 328415
    },
    250: {
      dn_mm: 250,
      price_1_6_mpa: 69847,
      price_6_3_mpa: 219461,
      price_10_0_mpa: 221655,
      price_16_0_mpa: 260705,
      price_25_0_mpa: 358965
    },
    300: {
      dn_mm: 300,
      price_1_6_mpa: 70546,
      price_6_3_mpa: 391348,
      price_10_0_mpa: 395261,
      price_16_0_mpa: 685599,
      price_25_0_mpa: 785487
    },
    350: {
      dn_mm: 350,
      price_1_6_mpa: 99972,
      price_6_3_mpa: 395261,
      price_10_0_mpa: 399214,
      price_16_0_mpa: 717819,
      price_25_0_mpa: 1330385
    },
    400: {
      dn_mm: 400,
      price_1_6_mpa: 127928,
      price_6_3_mpa: 654485,
      price_10_0_mpa: 661030,
      price_16_0_mpa: 724997,
      price_25_0_mpa: 3275244
    },
    450: {
      dn_mm: 450,
      price_1_6_mpa: 129207,
      price_6_3_mpa: 661030,
      price_10_0_mpa: 667640,
      price_16_0_mpa: 732247,
      price_25_0_mpa: 3307996
    },
    500: {
      dn_mm: 500,
      price_1_6_mpa: 238145,
      price_6_3_mpa: 757074,
      price_10_0_mpa: 764645,
      price_16_0_mpa: 915357,
      price_25_0_mpa: 4209620
    },
    600: {
      dn_mm: 600,
      price_1_6_mpa: 311869,
      price_6_3_mpa: 1017683,
      price_10_0_mpa: 1027860,
      price_16_0_mpa: 1292890,
      price_25_0_mpa: "по запросу"
    },
    700: {
      dn_mm: 700,
      price_1_6_mpa: 314987,
      price_6_3_mpa: 1038037,
      price_10_0_mpa: 1048417,
      price_16_0_mpa: 2234762,
      price_25_0_mpa: "по запросу"
    },
    800: {
      dn_mm: 800,
      price_1_6_mpa: 318137,
      price_6_3_mpa: 1058798,
      price_10_0_mpa: 1510465,
      price_16_0_mpa: 2257110,
      price_25_0_mpa: "по запросу"
    }
  },
  with_flow_straightener: {
    50: {
      dn_mm: 50,
      price_1_6_mpa: 10797,
      price_6_3_mpa: 24742,
      price_10_0_mpa: 25841,
      price_16_0_mpa: 31056,
      price_25_0_mpa: 47665
    },
    65: {
      dn_mm: 65,
      price_1_6_mpa: 11131,
      price_6_3_mpa: 36904,
      price_10_0_mpa: 41227,
      price_16_0_mpa: 59073,
      price_25_0_mpa: 113530
    },
    80: {
      dn_mm: 80,
      price_1_6_mpa: 12066,
      price_6_3_mpa: 37914,
      price_10_0_mpa: 67440,
      price_16_0_mpa: 73558,
      price_25_0_mpa: 114665
    },
    100: {
      dn_mm: 100,
      price_1_6_mpa: 17220,
      price_6_3_mpa: 70552,
      price_10_0_mpa: 71257,
      price_16_0_mpa: 90524,
      price_25_0_mpa: 122340
    },
    125: {
      dn_mm: 125,
      price_1_6_mpa: 17393,
      price_6_3_mpa: 71257,
      price_10_0_mpa: 71970,
      price_16_0_mpa: 139297,
      price_25_0_mpa: 140690
    },
    150: {
      dn_mm: 150,
      price_1_6_mpa: 35280,
      price_6_3_mpa: 133987,
      price_10_0_mpa: 235957,
      price_16_0_mpa: 238317,
      price_25_0_mpa: 311399
    },
    200: {
      dn_mm: 200,
      price_1_6_mpa: 55064,
      price_6_3_mpa: 227524,
      price_10_0_mpa: 238317,
      price_16_0_mpa: 295598,
      price_25_0_mpa: 521058
    },
    250: {
      dn_mm: 250,
      price_1_6_mpa: 110312,
      price_6_3_mpa: 350371,
      price_10_0_mpa: 353874,
      price_16_0_mpa: 433672,
      price_25_0_mpa: 702341
    },
    300: {
      dn_mm: 300,
      price_1_6_mpa: 111416,
      price_6_3_mpa: 411770,
      price_10_0_mpa: 553365,
      price_16_0_mpa: 782205,
      price_25_0_mpa: 790027
    },
    350: {
      dn_mm: 350,
      price_1_6_mpa: 112530,
      price_6_3_mpa: 415888,
      price_10_0_mpa: 558899,
      price_16_0_mpa: 1004946,
      price_25_0_mpa: 1862538
    },
    400: {
      dn_mm: 400,
      price_1_6_mpa: 129207,
      price_6_3_mpa: 682197,
      price_10_0_mpa: 863576,
      price_16_0_mpa: 1046654,
      price_25_0_mpa: 3307996
    },
    450: {
      dn_mm: 450,
      price_1_6_mpa: 180890,
      price_6_3_mpa: 723421,
      price_10_0_mpa: 934697,
      price_16_0_mpa: 1132852,
      price_25_0_mpa: 3341076
    },
    500: {
      dn_mm: 500,
      price_1_6_mpa: 240526,
      price_6_3_mpa: 764645,
      price_10_0_mpa: 1105730,
      price_16_0_mpa: 1228466,
      price_25_0_mpa: 4537677
    },
    600: {
      dn_mm: 600,
      price_1_6_mpa: 314987,
      price_6_3_mpa: 1027860,
      price_10_0_mpa: "по запросу",
      price_16_0_mpa: "по запросу",
      price_25_0_mpa: "по запросу"
    },
    700: {
      dn_mm: 700,
      price_1_6_mpa: 318137,
      price_6_3_mpa: 1048417,
      price_10_0_mpa: "по запросу",
      price_16_0_mpa: "по запросу",
      price_25_0_mpa: "по запросу"
    },
    800: {
      dn_mm: 800,
      price_1_6_mpa: 321319,
      price_6_3_mpa: 1069386,
      price_10_0_mpa: "по запросу",
      price_16_0_mpa: "по запросу",
      price_25_0_mpa: "по запросу"
    }
  }
};








// -------------------------------------------------------------------------------------------------------------------------------------








// ============================================================================
// Прайс-лист на комплект монтажных частей УЗПР Turbo Flow UFG-F-V, TFG-SF, TFG-HF
// Материал изделия: 3 - низкотемпературная углеродистая сталь, стандарт качества ОСТ
// Исполнение: базовое (без струевыпрямителя)
// Цены указаны в рублях с НДС 22%
// Возможна скидка до 30%
// Стандартная гарантия: 24 месяца эксплуатации, но не более чем 36 месяцев с даты отгрузки.
// Иные условия гарантии просчитываются отдельно.
// 
// Ключи объекта: ДУ (number)
// Значения: объект {
//   dn_mm: number,                  // Диаметр условного прохода, мм
//   price_1_6_mpa: number | "по запросу",  // Цена при 1,6 МПа
//   price_6_3_mpa: number | "по запросу",  // Цена при 6,3 МПа
//   price_10_0_mpa: number | "по запросу", // Цена при 10,0 МПа
//   price_16_0_mpa: number | "по запросу", // Цена при 16,0 МПа
//   price_25_0_mpa: number | "по запросу"  // Цена при 25,0 МПа
// }
// ============================================================================

const ufgMountingKitsCarbonSteelOSTBasic = {
  50: {
    dn_mm: 50,
    price_1_6_mpa: 4697,
    price_6_3_mpa: 12452,
    price_10_0_mpa: 24034,
    price_16_0_mpa: 24274,
    price_25_0_mpa: 34177
  },
  65: {
    dn_mm: 65,
    price_1_6_mpa: 5796,
    price_6_3_mpa: 23921,
    price_10_0_mpa: 26415,
    price_16_0_mpa: 29551,
    price_25_0_mpa: 83702
  },
  80: {
    dn_mm: 80,
    price_1_6_mpa: 6901,
    price_6_3_mpa: 27753,
    price_10_0_mpa: 51106,
    price_16_0_mpa: 57766,
    price_25_0_mpa: 84539
  },
  100: {
    dn_mm: 100,
    price_1_6_mpa: 13717,
    price_6_3_mpa: 47783,
    price_10_0_mpa: 60612,
    price_16_0_mpa: 71329,
    price_25_0_mpa: 85385
  },
  125: {
    dn_mm: 125,
    price_1_6_mpa: 13854,
    price_6_3_mpa: 60086,
    price_10_0_mpa: 70562,
    price_16_0_mpa: 83039,
    price_25_0_mpa: 97517
  },
  150: {
    dn_mm: 150,
    price_1_6_mpa: 22567,
    price_6_3_mpa: 85854,
    price_10_0_mpa: 139285,
    price_16_0_mpa: 154545,
    price_25_0_mpa: 230217
  },
  200: {
    dn_mm: 200,
    price_1_6_mpa: 34387,
    price_6_3_mpa: 147652,
    price_10_0_mpa: 203197,
    price_16_0_mpa: 229721,
    price_25_0_mpa: 369622
  },
  250: {
    dn_mm: 250,
    price_1_6_mpa: 68317,
    price_6_3_mpa: 230812,
    price_10_0_mpa: 263110,
    price_16_0_mpa: 270075,
    price_25_0_mpa: 373319
  },
  300: {
    dn_mm: 300,
    price_1_6_mpa: 68426,
    price_6_3_mpa: 261061,
    price_10_0_mpa: 263671,
    price_16_0_mpa: 457229,
    price_25_0_mpa: 1245088
  },
  350: {
    dn_mm: 350,
    price_1_6_mpa: 93708,
    price_6_3_mpa: 271023,
    price_10_0_mpa: 309355,
    price_16_0_mpa: 461801,
    price_25_0_mpa: 1566412
  },
  400: {
    dn_mm: 400,
    price_1_6_mpa: 106896,
    price_6_3_mpa: 436487,
    price_10_0_mpa: 573065,
    price_16_0_mpa: 578795,
    price_25_0_mpa: 1605122
  },
  450: {
    dn_mm: 450,
    price_1_6_mpa: 166318,
    price_6_3_mpa: 596162,
    price_10_0_mpa: 668231,
    price_16_0_mpa: 674913,
    price_25_0_mpa: 2236530
  },
  500: {
    dn_mm: 500,
    price_1_6_mpa: 268213,
    price_6_3_mpa: 755838,
    price_10_0_mpa: 763396,
    price_16_0_mpa: 771030,
    price_25_0_mpa: 2867938
  },
  600: {
    dn_mm: 600,
    price_1_6_mpa: 364408,
    price_6_3_mpa: 763396,
    price_10_0_mpa: 824571,
    price_16_0_mpa: 882911,
    price_25_0_mpa: "по запросу"
  },
  700: {
    dn_mm: 700,
    price_1_6_mpa: 368052,
    price_6_3_mpa: 882918,
    price_10_0_mpa: 891747,
    price_16_0_mpa: 2219723,
    price_25_0_mpa: "по запросу"
  },
  800: {
    dn_mm: 800,
    price_1_6_mpa: 371732,
    price_6_3_mpa: 891747,
    price_10_0_mpa: 2299163,
    price_16_0_mpa: 2914515,
    price_25_0_mpa: "по запросу"
  }
};






// -------------------------------------------------------------------------------------------------------------------------------------









// ============================================================================
// Прайс-лист на Устройство формирования потока (УФП) UFG-F-V
// Материал изделия: 3 - низкотемпературная углеродистая сталь, ГОСТ
// Цены указаны в рублях с НДС 22%
// Возможна скидка до 30%
// Стандартная гарантия: 24 месяца эксплуатации, но не более чем 36 месяцев с даты отгрузки.
// Иные условия гарантии просчитываются отдельно.
// 
// Ключи объекта: ДУ (number)
// Значения: объект {
//   dn_mm: number,                          // Диаметр условного прохода, мм
//   price_1_6_6_3_10_mpa_E: number | "по запросу",  // Цена при 1,6/6,3/10 МПа, исп. E
//   price_6_3_mpa_J: number | "по запросу",         // Цена при 6,3 МПа, исп. J
//   price_10_mpa_J: number | "по запросу",          // Цена при 10 МПа, исп. J
//   price_16_mpa_J: number | "по запросу"           // Цена при 16 МПа, исп. J
// }
// ============================================================================

const ufgFlowStraightenersCarbonSteelGOST = {
  50: {
    dn_mm: 50,
    price_1_6_6_3_10_mpa_E: 29724,
    price_6_3_mpa_J: 30675,
    price_10_mpa_J: "по запросу",
    price_16_mpa_J: 32344
  },
  65: {
    dn_mm: 65,
    price_1_6_6_3_10_mpa_E: 60634,
    price_6_3_mpa_J: "по запросу",
    price_10_mpa_J: "по запросу",
    price_16_mpa_J: "по запросу"
  },
  80: {
    dn_mm: 80,
    price_1_6_6_3_10_mpa_E: 61465,
    price_6_3_mpa_J: 69275,
    price_10_mpa_J: 69979,
    price_16_mpa_J: 70679
  },
  100: {
    dn_mm: 100,
    price_1_6_6_3_10_mpa_E: 72025,
    price_6_3_mpa_J: 81989,
    price_10_mpa_J: 83023,
    price_16_mpa_J: 83591
  },
  125: {
    dn_mm: 125,
    price_1_6_6_3_10_mpa_E: 106986,
    price_6_3_mpa_J: "по запросу",
    price_10_mpa_J: "по запросу",
    price_16_mpa_J: "по запросу"
  },
  150: {
    dn_mm: 150,
    price_1_6_6_3_10_mpa_E: 109304,
    price_6_3_mpa_J: 113592,
    price_10_mpa_J: 116074,
    price_16_mpa_J: 118556
  },
  200: {
    dn_mm: 200,
    price_1_6_6_3_10_mpa_E: 156514,
    price_6_3_mpa_J: 200347,
    price_10_mpa_J: "по запросу",
    price_16_mpa_J: 204905
  },
  250: {
    dn_mm: 250,
    price_1_6_6_3_10_mpa_E: 157351,
    price_6_3_mpa_J: 202351,
    price_10_mpa_J: "по запросу",
    price_16_mpa_J: 338664
  },
  300: {
    dn_mm: 300,
    price_1_6_6_3_10_mpa_E: 224433,
    price_6_3_mpa_J: 232774,
    price_10_mpa_J: "по запросу",
    price_16_mpa_J: 511422
  },
  400: {
    dn_mm: 400,
    price_1_6_6_3_10_mpa_E: 327311,
    price_6_3_mpa_J: "по запросу",
    price_10_mpa_J: 628922,
    price_16_mpa_J: 906682
  },
  500: {
    dn_mm: 500,
    price_1_6_6_3_10_mpa_E: 600463,
    price_6_3_mpa_J: 624875,
    price_10_mpa_J: 629591,
    price_16_mpa_J: "по запросу"
  }
};








// -------------------------------------------------------------------------------------------------------------------------------------








// ============================================================================
// Прайс-лист на катушки-имитаторы UFG-F-V
// Материал изделия: 3 - низкотемпературная углеродистая сталь,
//                   без дублирования, исполнение фланца E, J
// Цены указаны в рублях с НДС 22%
// Возможна скидка до 30%
// Стандартная гарантия: 24 месяца эксплуатации, но не более чем 36 месяцев с даты отгрузки.
// Иные условия гарантии просчитываются отдельно.
// 
// Коэффициент модификации:
//   - Фланцы ANSI при давлении 1,6–16 МПа → ×1,4
// 
// Ключи объекта: ДУ (number)
// Значения: объект {
//   dn_mm: number,                  // Диаметр условного прохода, мм
//   price_1_6_mpa: number | "по запросу",  // Цена при 1,6 МПа
//   price_6_3_mpa: number | "по запросу",  // Цена при 6,3 МПа
//   price_10_0_mpa: number | "по запросу", // Цена при 10,0 МПа
//   price_16_0_mpa: number | "по запросу", // Цена при 16,0 МПа
//   price_25_0_mpa: number | "по запросу"  // Цена при 25,0 МПа
// }
// ============================================================================

const ufgFVSimulatorCoilsCarbonSteelNoDuplication = {
  50: {
    dn_mm: 50,
    price_1_6_mpa: 63549,
    price_6_3_mpa: 121618,
    price_10_0_mpa: 134889,
    price_16_0_mpa: 142079,
    price_25_0_mpa: 257771
  },
  65: {
    dn_mm: 65,
    price_1_6_mpa: 187594,
    price_6_3_mpa: 193623,
    price_10_0_mpa: 195667,
    price_16_0_mpa: "по запросу",
    price_25_0_mpa: "по запросу"
  },
  80: {
    dn_mm: 80,
    price_1_6_mpa: 107088,
    price_6_3_mpa: 171959,
    price_10_0_mpa: 181185,
    price_16_0_mpa: 240913,
    price_25_0_mpa: 386376
  },
  100: {
    dn_mm: 100,
    price_1_6_mpa: 137552,
    price_6_3_mpa: 172811,
    price_10_0_mpa: 231376,
    price_16_0_mpa: 267117,
    price_25_0_mpa: 547914
  },
  125: {
    dn_mm: 125,
    price_1_6_mpa: 152743,
    price_6_3_mpa: 325454,
    price_10_0_mpa: 403995,
    price_16_0_mpa: "по запросу",
    price_25_0_mpa: 602705
  },
  150: {
    dn_mm: 150,
    price_1_6_mpa: 227380,
    price_6_3_mpa: 335914,
    price_10_0_mpa: 446239,
    price_16_0_mpa: 476587,
    price_25_0_mpa: 972677
  },
  200: {
    dn_mm: 200,
    price_1_6_mpa: 334093,
    price_6_3_mpa: 349291,
    price_10_0_mpa: 488483,
    price_16_0_mpa: 502624,
    price_25_0_mpa: 1402538
  },
  250: {
    dn_mm: 250,
    price_1_6_mpa: 361961,
    price_6_3_mpa: 550573,
    price_10_0_mpa: 629885,
    price_16_0_mpa: 911335,
    price_25_0_mpa: 1951821
  },
  300: {
    dn_mm: 300,
    price_1_6_mpa: 389829,
    price_6_3_mpa: 748762,
    price_10_0_mpa: 826732,
    price_16_0_mpa: 973179,
    price_25_0_mpa: 2790028
  },
  400: {
    dn_mm: 400,
    price_1_6_mpa: 550344,
    price_6_3_mpa: 1096995,
    price_10_0_mpa: 1256048,
    price_16_0_mpa: 1541364,
    price_25_0_mpa: 4139087
  },
  500: {
    dn_mm: 500,
    price_1_6_mpa: 690636,
    price_6_3_mpa: 1635509,
    price_10_0_mpa: 2223702,
    price_16_0_mpa: 4906389,
    price_25_0_mpa: 6436035
  }
};










// -------------------------------------------------------------------------------------------------------------------------------------











// ============================================================================
// Прайс-лист на катушки-имитаторы UFG-F-V dA
// Материал изделия: 3 - низкотемпературная углеродистая сталь,
//                   полное дублирование, исполнение фланца
// Цены указаны в рублях с НДС 22%
// Возможна скидка до 30%
// Стандартная гарантия: 24 месяца эксплуатации, но не более чем 36 месяцев с даты отгрузки.
// Иные условия гарантии просчитываются отдельно.
// 
// Коэффициент модификации:
//   - Фланцы ANSI при давлении 1,6–16 МПа → ×1,4
// 
// Ключи объекта: ДУ (number)
// Значения: объект {
//   dn_mm: number,                  // Диаметр условного прохода, мм
//   price_1_6_mpa: number | "по запросу",  // Цена при 1,6 МПа
//   price_6_3_mpa: number | "по запросу",  // Цена при 6,3 МПа
//   price_10_0_mpa: number | "по запросу", // Цена при 10,0 МПа
//   price_16_0_mpa: number | "по запросу", // Цена при 16,0 МПа
//   price_25_0_mpa: number | "по запросу"  // Цена при 25,0 МПа
// }
// ============================================================================

const ufgFVSimulatorCoilsCarbonSteelFullDuplicationDA = {
  50: {
    dn_mm: 50,
    price_1_6_mpa: 73081,
    price_6_3_mpa: 139860,
    price_10_0_mpa: 155123,
    price_16_0_mpa: 163391,
    price_25_0_mpa: 176431
  },
  65: {
    dn_mm: 65,
    price_1_6_mpa: 215734,
    price_6_3_mpa: 222667,
    price_10_0_mpa: 225017,
    price_16_0_mpa: "по запросу",
    price_25_0_mpa: "по запросу"
  },
  80: {
    dn_mm: 80,
    price_1_6_mpa: 97878,
    price_6_3_mpa: 197753,
    price_10_0_mpa: 208362,
    price_16_0_mpa: 209751,
    price_25_0_mpa: 211139
  },
  100: {
    dn_mm: 100,
    price_1_6_mpa: 98155,
    price_6_3_mpa: 198731,
    price_10_0_mpa: 266082,
    price_16_0_mpa: 275158,
    price_25_0_mpa: 314775
  },
  125: {
    dn_mm: 125,
    price_1_6_mpa: 175654,
    price_6_3_mpa: 374273,
    price_10_0_mpa: 464594,
    price_16_0_mpa: "по запросу",
    price_25_0_mpa: 418411
  },
  150: {
    dn_mm: 150,
    price_1_6_mpa: 182717,
    price_6_3_mpa: 386301,
    price_10_0_mpa: 542582,
    price_16_0_mpa: 561316,
    price_25_0_mpa: 1118578
  },
  200: {
    dn_mm: 200,
    price_1_6_mpa: 248408,
    price_6_3_mpa: 401685,
    price_10_0_mpa: 561756,
    price_16_0_mpa: 578018,
    price_25_0_mpa: 1378708
  },
  250: {
    dn_mm: 250,
    price_1_6_mpa: 314099,
    price_6_3_mpa: 633159,
    price_10_0_mpa: 724367,
    price_16_0_mpa: 1048035,
    price_25_0_mpa: 2244595
  },
  300: {
    dn_mm: 300,
    price_1_6_mpa: 373585,
    price_6_3_mpa: 861077,
    price_10_0_mpa: 950742,
    price_16_0_mpa: 1119155,
    price_25_0_mpa: 3208533
  },
  400: {
    dn_mm: 400,
    price_1_6_mpa: 632896,
    price_6_3_mpa: 1261544,
    price_10_0_mpa: 1444456,
    price_16_0_mpa: 1772569,
    price_25_0_mpa: 4759949
  },
  500: {
    dn_mm: 500,
    price_1_6_mpa: 794231,
    price_6_3_mpa: 1486035,
    price_10_0_mpa: 2189410,
    price_16_0_mpa: 5642346,
    price_25_0_mpa: 7401440
  }
};









// -------------------------------------------------------------------------------------------------------------------------------------










// ============================================================================
// Прайс-лист на кабель связи UFG-F-V, UFG-F-C и аксессуары
// Цены указаны в рублях с НДС 22%
// Срок действия: до 01.04.2026г.
// 
// Ключи объекта: код номенклатуры (string)
// Значения: объект {
//   name: string,                     // Полное наименование изделия
//   quantity: number,                 // Количество в упаковке/комплекте
//   unit: string,                     // Единица измерения (шт., м)
//   length_m?: number,                // Длина, м (если применимо)
//   price_rub: number,                // Цена с НДС 22%
//   max_discount_percent: number      // Максимальная возможная скидка (%)
// }
// ============================================================================

const ufgCablesAndAccessories = {
  "00-00065089": {
    name: "Кабель связи UFG/TFG/GFG,RS-485 UFG-050-16.05.10.000-10",
    quantity: 1,
    unit: "шт.",
    length_m: 15,
    price_rub: 36302,
    max_discount_percent: 30
  },
  "00-00065092": {
    name: "Клеммная коробка для кабеля связи (с КМЧ) UFG-050-16.05.10.000-11",
    quantity: 1,
    unit: "шт.",
    price_rub: 13433,
    max_discount_percent: 0
  },
  "00-00065104": {
    name: "Кабель МКЭКШВнг(А)-ХЛ 4 х 2 х 1",
    quantity: 1,
    unit: "м",
    price_rub: 1038,
    max_discount_percent: 0
  }
};









// -------------------------------------------------------------------------------------------------------------------------------------











// ============================================================================
// Прайс-лист на тару (ящики) UFG-F-V
// Цены указаны в рублях с НДС 22%
// Срок действия: до 01.04.2026г.
// 
// Ключи объекта: код номенклатуры (string)
// Значения: объект {
//   name: string,                     // Полное наименование ящика
//   dn_range: string | number,        // Диапазон ДУ или конкретный ДУ (мм)
//   pressure_mpa: string | number,    // Давление (МПа) или диапазон
//   price_rub: number                 // Цена с НДС 22%
// }
// ============================================================================

const ufgPackagingBoxes = {
  "77700047480": {
    name: "Ящик UFG-Y1-06.00.000",
    dn_range: "50-100",
    pressure_mpa: 1.6,
    price_rub: 11919
  },
  "00-00072391": {
    name: "Ящик UFG-Y1-16.00.000 (под контрольный манометр)",
    dn_range: "50-100",
    pressure_mpa: 1.6,
    price_rub: 12854
  },
  "77700047653": {
    name: "Ящик UFG-Y2-06.00.000",
    dn_range: "50-100",
    pressure_mpa: 6.3,
    price_rub: 15272
  },
  "77700047654": {
    name: "Ящик UFG-Y3-06.00.000",
    dn_range: "50-100",
    pressure_mpa: 6.3,
    price_rub: 13207
  },
  "77700047655": {
    name: "Ящик UFG-Y4-06.00.000",
    dn_range: "100-200",
    pressure_mpa: "6,3, 1,6",
    price_rub: 24239
  },
  "00-00072490": {
    name: "Ящик UFG-Y4-16.00.000",
    dn_range: "100-200",
    pressure_mpa: "6,3, 1,6",
    price_rub: 26487
  },
  "77700047656": {
    name: "Ящик UFG-Y5-06.00.000",
    dn_range: "50-300",
    pressure_mpa: "1,6 - 10",
    price_rub: 26422
  },
  "00-00072447": {
    name: "Ящик UFG-Y5-16.00.000 (под контрольный монометр)",
    dn_range: "50-300",
    pressure_mpa: "1,6 - 10",
    price_rub: 26686
  },
  "77700049135": {
    name: "Ящик UFG-Y6-06.00.000",
    dn_range: "200-400",
    pressure_mpa: 10.0,
    price_rub: 31708
  },
  "00-00062994": {
    name: "Ящик UFG-Y6-06.00.000-01",
    dn_range: "200-400",
    pressure_mpa: 10.0,
    price_rub: 48198
  },
  "00-00061108": {
    name: "Ящик UFG-Y6-06.00.000-02",
    dn_range: "200-400",
    pressure_mpa: 10.0,
    price_rub: 57838
  },
  "00-00061383": {
    name: "Ящик UFG-Y6-06.00.000-03",
    dn_range: "200-400",
    pressure_mpa: 10.0,
    price_rub: 58417
  },
  "00-00072445": {
    name: "Ящик UFG-Y6-16.00.000",
    dn_range: "200-400",
    pressure_mpa: 10.0,
    price_rub: 59001
  },
  "77700050117": {
    name: "Ящик UFG-Y7-06.00.000",
    dn_range: "300-500",
    pressure_mpa: 10.0,
    price_rub: 76870
  },
  "00-00061897": {
    name: "Ящик UFG-Y7-06.00.000-01",
    dn_range: "300-500",
    pressure_mpa: 10.0,
    price_rub: 60187
  },
  "00-00074815": {
    name: "Ящик UFG-Y7-06.00.000-02",
    dn_range: "300-500",
    pressure_mpa: 10.0,
    price_rub: 60788
  },
  "00-00051875": {
    name: "Ящик UFG-Y8-06.00.000",
    dn_range: 600,
    pressure_mpa: 1.6,
    price_rub: 76870
  },
  "00-00061896": {
    name: "Ящик UFG-Y8-06.00.000-01",
    dn_range: 600,
    pressure_mpa: 1.6,
    price_rub: 67106
  },
  "00-00058816": {
    name: "Ящик UFG-Y9-06.00.000-01",
    dn_range: 700,
    pressure_mpa: 10.0,
    price_rub: 89723
  },
  "00-00075791": {
    name: "Ящик UFG-Y9-06.00.000-02",
    dn_range: 700,
    pressure_mpa: 10.0,
    price_rub: 90620
  },
  "00-00058993": {
    name: "Ящик UFG-Y10-06.00.000-01",
    dn_range: 800,
    pressure_mpa: 1.6,
    price_rub: 91526
  }
};







// -------------------------------------------------------------------------------------------------------------------------------------








// ============================================================================
// Прайс-лист на Терминал выносной UFG-F-V
// Цены указаны в рублях с НДС 22%
// Возможна скидка до 30%
// Стандартная гарантия: 24 месяца эксплуатации, но не более чем 36 месяцев с даты отгрузки.
// Иные условия гарантии просчитываются отдельно.
// 
// Ключи объекта: код номенклатуры (string)
// Значения: объект {
//   name: string,                     // Полное наименование терминала
//   input_voltage_v: number,          // Входное напряжение, В (12 или 24)
//   channels_count: number,           // Количество каналов (1, 2, 3)
//   type: "BT" | "BTMob",             // Тип терминала: базовый или мобильный
//   price_rub: number                 // Цена с НДС 22%
// }
// ============================================================================

const ufgRemoteTerminals = {
  "77700045389": {
    name: "Терминал выносной BT.00.00.000",
    input_voltage_v: 12,
    channels_count: 1,
    type: "BT",
    price_rub: 91470
  },
  "00-00055135": {
    name: "Терминал выносной BT.00.00.000 24V",
    input_voltage_v: 24,
    channels_count: 1,
    type: "BT",
    price_rub: 106503
  },
  "77700045391": {
    name: "Терминал выносной BT.00.00.000-01",
    input_voltage_v: 12,
    channels_count: 2,
    type: "BT",
    price_rub: 100843
  },
  "77700045392": {
    name: "Терминал выносной BT.00.00.000-02",
    input_voltage_v: 12,
    channels_count: 3,
    type: "BT",
    price_rub: 110226
  },
  "00-00050019": {
    name: "Терминал выносной BT.00.00.000-03",
    input_voltage_v: 12,
    channels_count: 1,
    type: "BT",
    price_rub: 92905
  },
  "00-00050020": {
    name: "Терминал выносной BT.00.00.000-04",
    input_voltage_v: 12,
    channels_count: 2,
    type: "BT",
    price_rub: 99648
  },
  "00-00050021": {
    name: "Терминал выносной BT.00.00.000-05",
    input_voltage_v: 12,
    channels_count: 3,
    type: "BT",
    price_rub: 108384
  },
  "00-00057339": {
    name: "Терминал выносной BTMob.00.00.000",
    input_voltage_v: 12,
    channels_count: 1,
    type: "BTMob",
    price_rub: 114391
  },
  "00-00058677": {
    name: "Терминал выносной BTMob.00.00.000-01",
    input_voltage_v: 12,
    channels_count: 2,
    type: "BTMob",
    price_rub: 115162
  },
  "77700049107": {
    name: "Терминал выносной BTM.00.00.000",
    input_voltage_v: 12,
    channels_count: 2,
    type: "BTMob", // Примечание: в наименовании BTM, но по логике таблицы это мобильная версия
    price_rub: 204426
  },
  "00-00059881": {
    name: "Терминал выносной BTM.00.00.000 24V",
    input_voltage_v: 24,
    channels_count: 1,
    type: "BTMob",
    price_rub: 222413
  },
  "77700049108": {
    name: "Терминал выносной BTM.00.00.000-01",
    input_voltage_v: 12,
    channels_count: 2,
    type: "BTMob",
    price_rub: 183547
  },
  "00-00059934": {
    name: "Терминал выносной BTM.00.00.000-01 24V",
    input_voltage_v: 24,
    channels_count: 2,
    type: "BTMob",
    price_rub: 265357
  },
  "77700049109": {
    name: "Терминал выносной BTM.00.00.000-02",
    input_voltage_v: 12,
    channels_count: 3,
    type: "BTMob",
    price_rub: 192757
  },
  "00-00059961": {
    name: "Терминал выносной BTM.00.00.000-02 24V",
    input_voltage_v: 24,
    channels_count: 3,
    type: "BTMob",
    price_rub: 282616
  },
  "00-00048926": {
    name: "Терминал выносной BTM.00.00.000-03",
    input_voltage_v: 12,
    channels_count: 1,
    type: "BTMob",
    price_rub: 160794
  },
  "00-00048927": {
    name: "Терминал выносной BTM.00.00.000-04",
    input_voltage_v: 12,
    channels_count: 2,
    type: "BTMob",
    price_rub: 201920
  },
  "00-00048928": {
    name: "Терминал выносной BTM.00.00.000-05",
    input_voltage_v: 12,
    channels_count: 3,
    type: "BTMob",
    price_rub: 213759
  }
};










// -------------------------------------------------------------------------------------------------------------------------------------












// ============================================================================
// Прайс-лист на Блок питания UFG-F-V
// Цены указаны в рублях с НДС 22%
// Возможна скидка до 30%
// Стандартная гарантия: 24 месяца эксплуатации, но не более чем 36 месяцев с даты отгрузки.
// Иные условия гарантии просчитываются отдельно.
// 
// Ключи объекта: код номенклатуры (string)
// Значения: объект {
//   name: string,                     // Полное наименование блока питания
//   input_voltage_v: number,          // Входное напряжение, В (12 или 24)
//   output_voltage_v: number,         // Выходное напряжение, В (в данной таблице всегда 18)
//   channels_count: number,           // Количество каналов (1, 2, 3)
//   has_usb: boolean,                 // Наличие USB порта
//   has_explosion_protection: boolean,// Наличие искрозащиты
//   price_rub: number                 // Цена с НДС 22%
// }
// ============================================================================

const ufgPowerSupplies = {
  "00-00048955": {
    name: "Блок питания БПИ-12-18-1-NN - БПИ.00.00.000-11 без USB,1 ПП (без ИЗ)",
    input_voltage_v: 12,
    output_voltage_v: 18,
    channels_count: 1,
    has_usb: false,
    has_explosion_protection: false,
    price_rub: 50175
  },
  "77700036842": {
    name: "Блок питания БПИ-12-18-1-NY - БПИ.00.00.000-05 без USB,1 ПП",
    input_voltage_v: 12,
    output_voltage_v: 18,
    channels_count: 1,
    has_usb: false,
    has_explosion_protection: true,
    price_rub: 49800
  },
  "00-00048952": {
    name: "Блок питания БПИ-12-18-1-UN - БПИ.00.00.000-08 с USB,1 ПП (без ИЗ)",
    input_voltage_v: 12,
    output_voltage_v: 18,
    channels_count: 1,
    has_usb: true,
    has_explosion_protection: false,
    price_rub: 58663
  },
  "77700036839": {
    name: "Блок питания БПИ-12-18-1-UY - БПИ.00.00.000-02 с USB,1 ПП",
    input_voltage_v: 12,
    output_voltage_v: 18,
    channels_count: 1,
    has_usb: true,
    has_explosion_protection: true,
    price_rub: 56991
  },
  "00-00048954": {
    name: "Блок питания БПИ-12-18-2-NN - БПИ.00.00.000-10 без USB,2 ПП (без ИЗ)",
    input_voltage_v: 12,
    output_voltage_v: 18,
    channels_count: 2,
    has_usb: false,
    has_explosion_protection: false,
    price_rub: 58635
  },
  "77700036841": {
    name: "Блок питания БПИ-12-18-2-NY - БПИ.00.00.000-04 без USB,2 ПП",
    input_voltage_v: 12,
    output_voltage_v: 18,
    channels_count: 2,
    has_usb: false,
    has_explosion_protection: true,
    price_rub: 58877
  },
  "00-00048951": {
    name: "Блок питания БПИ-12-18-2-UN - БПИ.00.00.000-07 с USB,2 ПП (без ИЗ)",
    input_voltage_v: 12,
    output_voltage_v: 18,
    channels_count: 2,
    has_usb: true,
    has_explosion_protection: false,
    price_rub: 72935
  },
  "77700036838": {
    name: "Блок питания БПИ-12-18-2-UY - БПИ.00.00.000-01 с USB,2 ПП",
    input_voltage_v: 12,
    output_voltage_v: 18,
    channels_count: 2,
    has_usb: true,
    has_explosion_protection: true,
    price_rub: 72683
  },
  "00-00048953": {
    name: "Блок питания БПИ-12-18-3-NN - БПИ.00.00.000-09 без USB,3 ПП (без ИЗ)",
    input_voltage_v: 12,
    output_voltage_v: 18,
    channels_count: 3,
    has_usb: false,
    has_explosion_protection: false,
    price_rub: 67173
  },
  "77700036840": {
    name: "Блок питания БПИ-12-18-3-NY - БПИ.00.00.000-03 без USB,3 ПП",
    input_voltage_v: 12,
    output_voltage_v: 18,
    channels_count: 3,
    has_usb: false,
    has_explosion_protection: true,
    price_rub: 67951
  },
  "00-00048950": {
    name: "Блок питания БПИ-12-18-3-UN - БПИ.00.00.000-06 с USB,3 ПП (без ИЗ)",
    input_voltage_v: 12,
    output_voltage_v: 18,
    channels_count: 3,
    has_usb: true,
    has_explosion_protection: false,
    price_rub: 74552
  },
  "00-00076164": {
    name: "Блок питания БПИ-12-18-3-UY - БПИ.00.00.000 с USB,3 ПП",
    input_voltage_v: 12,
    output_voltage_v: 18,
    channels_count: 3,
    has_usb: true,
    has_explosion_protection: true,
    price_rub: 75129
  },
  "77700036837": {
    name: "Блок питания БПИ-12-18-3-UY - БПИ.00.00.000 24V (с USB,3 ПП)",
    input_voltage_v: 12,
    output_voltage_v: 18,
    channels_count: 3,
    has_usb: true,
    has_explosion_protection: true,
    price_rub: 75095
  },
  "00-00059340": {
    name: "Блок питания БПИ-24-18-1-NY - БПИ.00.00.000-05 24V (без USB,1 ПП)",
    input_voltage_v: 24,
    output_voltage_v: 18,
    channels_count: 1,
    has_usb: false,
    has_explosion_protection: true,
    price_rub: 58601
  },
  "00-00059320": {
    name: "Блок питания БПИ-24-18-1-UY - БПИ.00.00.000-02 24V (с USB,1 ПП)",
    input_voltage_v: 24,
    output_voltage_v: 18,
    channels_count: 1,
    has_usb: true,
    has_explosion_protection: true,
    price_rub: 65764
  },
  "00-00059339": {
    name: "Блок питания БПИ-24-18-2-NY - БПИ.00.00.000-04 24V (без USB,2 ПП)",
    input_voltage_v: 24,
    output_voltage_v: 18,
    channels_count: 2,
    has_usb: false,
    has_explosion_protection: true,
    price_rub: 75793
  },
  "00-00059337": {
    name: "Блок питания БПИ-24-18-2-UY - БПИ.00.00.000-01 24V (с USB,2 ПП)",
    input_voltage_v: 24,
    output_voltage_v: 18,
    channels_count: 2,
    has_usb: true,
    has_explosion_protection: true,
    price_rub: 82971
  },
  "00-00059338": {
    name: "Блок питания БПИ-24-18-3-NY - БПИ.00.00.000-03 24V (без USB,3 ПП)",
    input_voltage_v: 24,
    output_voltage_v: 18,
    channels_count: 3,
    has_usb: false,
    has_explosion_protection: true,
    price_rub: 68561
  },
  "00-00059333": {
    name: "Блок питания БПИ-24-18-3-UY - БПИ.00.00.000 24V (с USB,3 ПП)",
    input_voltage_v: 24,
    output_voltage_v: 18,
    channels_count: 3,
    has_usb: true,
    has_explosion_protection: true,
    price_rub: 100177
  }
};










// -------------------------------------------------------------------------------------------------------------------------------------











// ============================================================================
// Прайс-лист на комплект ответных фланцев UFG-F-V
// Материал изделия: 3 - низкотемпературная углеродистая сталь, без дублирования
// Цены указаны в рублях с НДС 22%
// Возможна скидка до 30%
// Стандартная гарантия: 24 месяца эксплуатации, но не более чем 36 месяцев с даты отгрузки.
// Иные условия гарантии просчитываются отдельно.
// 
// Ключи объекта: ДУ (number)
// Значения: объект {
//   dn_mm: number,                      // Диаметр условного прохода, мм
//   price_1_6_mpa: number | "по запросу",       // Цена при 1,6 МПа
//   price_1_6_mpa_gate: number | "по запросу",  // Цена при 1,6 МПа, исполнение "воротн."
//   price_6_3_mpa: number | "по запросу",       // Цена при 6,3 МПа
//   price_10_mpa: number | "по запросу",        // Цена при 10 МПа
//   price_16_mpa: number | "по запросу",        // Цена при 16 МПа
//   price_25_mpa: number | "по запросу"         // Цена при 25 МПа
// }
// ============================================================================

const ufgFlangeKitsCarbonSteelNoDuplication = {
  50: {
    dn_mm: 50,
    price_1_6_mpa: 3009,
    price_1_6_mpa_gate: 8443,
    price_6_3_mpa: 15243,
    price_10_mpa: 18456,
    price_16_mpa: 20053,
    price_25_mpa: 30661
  },
  65: {
    dn_mm: 65,
    price_1_6_mpa: 10756,
    price_1_6_mpa_gate: 20374,
    price_6_3_mpa: 44065,
    price_10_mpa: 49253,
    price_16_mpa: 26190,
    price_25_mpa: 55586
  },
  80: {
    dn_mm: 80,
    price_1_6_mpa: 8034,
    price_1_6_mpa_gate: 16281,
    price_6_3_mpa: 20796,
    price_10_mpa: 29259,
    price_16_mpa: 30965,
    price_25_mpa: 32378
  },
  100: {
    dn_mm: 100,
    price_1_6_mpa: 14319,
    price_1_6_mpa_gate: 28342,
    price_6_3_mpa: 40862,
    price_10_mpa: 43302,
    price_16_mpa: 45672,
    price_25_mpa: 217954
  },
  125: {
    dn_mm: 125,
    price_1_6_mpa: 19403,
    price_1_6_mpa_gate: "по запросу",
    price_6_3_mpa: 100458,
    price_10_mpa: 110588,
    price_16_mpa: 112672,
    price_25_mpa: 172902
  },
  150: {
    dn_mm: 150,
    price_1_6_mpa: 21980,
    price_1_6_mpa_gate: 31832,
    price_6_3_mpa: 63467,
    price_10_mpa: 79895,
    price_16_mpa: 89551,
    price_25_mpa: 407479
  },
  200: {
    dn_mm: 200,
    price_1_6_mpa: 28591,
    price_1_6_mpa_gate: 42999,
    price_6_3_mpa: 92276,
    price_10_mpa: 168203,
    price_16_mpa: 170573,
    price_25_mpa: 573314
  },
  250: {
    dn_mm: 250,
    price_1_6_mpa: 38261,
    price_1_6_mpa_gate: 140724,
    price_6_3_mpa: 133687,
    price_10_mpa: 224424,
    price_16_mpa: 234538,
    price_25_mpa: 969900
  },
  300: {
    dn_mm: 300,
    price_1_6_mpa: 42762,
    price_1_6_mpa_gate: 76758,
    price_6_3_mpa: 180050,
    price_10_mpa: 283577,
    price_16_mpa: 314636,
    price_25_mpa: 1328433
  },
  400: {
    dn_mm: 400,
    price_1_6_mpa: 93175,
    price_1_6_mpa_gate: "по запросу",
    price_6_3_mpa: 314186,
    price_10_mpa: 415913,
    price_16_mpa: 484237,
    price_25_mpa: 2032539
  },
  500: {
    dn_mm: 500,
    price_1_6_mpa: 148324,
    price_1_6_mpa_gate: "по запросу",
    price_6_3_mpa: 449802,
    price_10_mpa: 729899,
    price_16_mpa: 960828,
    price_25_mpa: 3064941
  }
};











// -------------------------------------------------------------------------------------------------------------------------------------











// ============================================================================
// Прайс-лист на Преобразователи температуры UFG-F-V
// Цены указаны в рублях с НДС 22%
// Возможна скидка до 30%
// Стандартная гарантия: 24 месяца эксплуатации, но не более чем 36 месяцев с даты отгрузки.
// Иные условия гарантии просчитываются отдельно.
// 
// Ключи объекта: код номенклатуры (string)
// Значения: объект {
//   name: string,                     // Полное наименование преобразователя
//   diameter_min_max_mm: string,      // Диапазон диаметров, мм (например, "50-100")
//   pressure_min_max_mpa: string,     // Диапазон давлений, МПа (например, "1,6 - 10")
//   price_rub: number                 // Цена с НДС 22%
// }
// ============================================================================

const ufgTemperatureTransducers = {
  "00-00063416": {
    name: "Преобразователь температуры UFG-050-16.05.20.000-03 (Dn15-100 кв/кр,ПУУ 5Dn)",
    diameter_min_max_mm: "50-100",
    pressure_min_max_mpa: "1,6 - 10",
    price_rub: 26383
  },
  "00-00063417": {
    name: "Преобразователь температуры UFG-050-16.05.20.000-04 (Dn200-250 кв/кр,ПУУ 5Dn)",
    diameter_min_max_mm: "200-200",
    pressure_min_max_mpa: "1,6 - 10",
    price_rub: 42182
  },
  "77700024378": {
    name: "Преобразователь температуры UFG-050-16.05.20.000-05 (Dn350-500 кв/кр,ПУУ 5Dn)",
    diameter_min_max_mm: "350-500",
    pressure_min_max_mpa: "1,6 - 10",
    price_rub: 40464
  },
  "00-00063490": {
    name: "Преобразователь температуры UFG-050-16.05.20.000-06 (Dn125-150 кв/кр,ПУУ 5Dn)",
    diameter_min_max_mm: "125-150",
    pressure_min_max_mpa: "1,6 - 10",
    price_rub: 30923
  },
  "77700024376": {
    name: "Преобразователь температуры UFG-050-16.05.20.000-07 (Dn300 кв/кр,ПУУ 5Dn)",
    diameter_min_max_mm: "300-300",
    pressure_min_max_mpa: "1,6 - 10",
    price_rub: 33312
  },
  "77700024363": {
    name: "Преобразователь температуры UFG-050-16.05.20.000-08 (Dn15-100 кр/кр,ПУУ 5Dn)",
    diameter_min_max_mm: "50-100",
    pressure_min_max_mpa: "1,6 - 10",
    price_rub: 30356
  },
  "00-00065649": {
    name: "Преобразователь температуры UFG-050-16.05.20.000-09 (Dn125-150 кр/кр,ПУУ 5Dn)",
    diameter_min_max_mm: "125-150",
    pressure_min_max_mpa: "1,6 - 10",
    price_rub: 35860
  },
  "00-00065650": {
    name: "Преобразователь температуры UFG-050-16.05.20.000-10 (Dn200-250 кр/кр,ПУУ 5Dn)",
    diameter_min_max_mm: "250-250",
    pressure_min_max_mpa: "1,6 - 10",
    price_rub: 36693
  },
  "00-00065765": {
    name: "Преобразователь температуры UFG-050-16.05.20.000-11 (Dn15-100 кв/кр,реверс,ПУУ 10Dn)",
    diameter_min_max_mm: "50-100",
    pressure_min_max_mpa: "1,6 - 10",
    price_rub: 36141
  },
  "00-00065766": {
    name: "Преобразователь температуры UFG-050-16.05.20.000-12 (Dn200-250 кв/кр,реверс,ПУУ 10Dn)",
    diameter_min_max_mm: "200-250",
    pressure_min_max_mpa: "1,6 - 10",
    price_rub: 43916
  },
  "00-00065767": {
    name: "Преобразователь температуры UFG-050-16.05.20.000-13 (Dn350-500 кв/кр,реверс,ПУУ 10Dn)",
    diameter_min_max_mm: "350-500",
    pressure_min_max_mpa: "1,6 - 10",
    price_rub: 58934
  },
  "00-00065768": {
    name: "Преобразователь температуры UFG-050-16.05.20.000-14 (Dn125-150 кв/кр,реверс,ПУУ 10Dn)",
    diameter_min_max_mm: "125-150",
    pressure_min_max_mpa: "1,6 - 10",
    price_rub: 31483
  },
  "00-00065769": {
    name: "Преобразователь температуры UFG-050-16.05.20.000-15 (Dn300 кв/кр,реверс,ПУУ 10Dn)",
    diameter_min_max_mm: "300-300",
    pressure_min_max_mpa: "1,6 - 10",
    price_rub: 33955
  },
  "00-00065770": {
    name: "Преобразователь температуры UFG-050-16.05.20.000-16 (Dn015-100 кр/кр,реверс,ПУУ 10Dn)",
    diameter_min_max_mm: "50-100",
    pressure_min_max_mpa: "1,6 - 10",
    price_rub: 31601
  },
  "00-00065771": {
    name: "Преобразователь температуры UFG-050-16.05.20.000-17 (Dn125-150 кр/кр,реверс,ПУУ 10Dn)",
    diameter_min_max_mm: "125-150",
    pressure_min_max_mpa: "1,6 - 10",
    price_rub: 36351
  },
  "00-00065773": {
    name: "Преобразователь температуры UFG-050-16.05.20.000-18 (Dn200-250 кр/кр,реверс,ПУУ 10Dn)",
    diameter_min_max_mm: "200-250",
    pressure_min_max_mpa: "1,6 - 10",
    price_rub: 37428
  },
  "00-00065774": {
    name: "Преобразователь температуры UFG-050-16.05.20.000-19 (Dn15-100 кв/кр,реверс,ПУУ 20Dn)",
    diameter_min_max_mm: "50-100",
    pressure_min_max_mpa: "1,6 - 10",
    price_rub: 37385
  },
  "00-00065775": {
    name: "Преобразователь температуры UFG-050-16.05.20.000-20 (Dn200-250 кв/кр,реверс,ПУУ 20Dn)",
    diameter_min_max_mm: "200-250",
    pressure_min_max_mpa: "1,6 - 10",
    price_rub: 44651
  },
  "00-00065776": {
    name: "Преобразователь температуры UFG-050-16.05.20.000-21 (Dn350-500 кв/кр,реверс,ПУУ 20Dn)",
    diameter_min_max_mm: "350-500",
    pressure_min_max_mpa: "1,6 - 10",
    price_rub: 54868
  },
  "00-00065778": {
    name: "Преобразователь температуры UFG-050-16.05.20.000-22 (Dn125-150 кв/кр,реверс,ПУУ 20Dn)",
    diameter_min_max_mm: "125-150",
    pressure_min_max_mpa: "1,6 - 10",
    price_rub: 31728
  },
  "00-00065779": {
    name: "Преобразователь температуры UFG-050-16.05.20.000-23 (Dn300 кв/кр,реверс,ПУУ 20Dn)",
    diameter_min_max_mm: "300-300",
    pressure_min_max_mpa: "1,6 - 10",
    price_rub: 36048
  },
  "00-00065780": {
    name: "Преобразователь температуры UFG-050-16.05.20.000-24 (Dn015-100 кр/кр,реверс,ПУУ 20Dn)",
    diameter_min_max_mm: "50-100",
    pressure_min_max_mpa: "1,6 - 10",
    price_rub: 31165
  },
  "00-00065777": {
    name: "Преобразователь температуры UFG-050-16.05.20.000-25 (Dn125-150 кр/кр,реверс,ПУУ 20Dn)",
    diameter_min_max_mm: "125-150",
    pressure_min_max_mpa: "1,6 - 10",
    price_rub: 36596
  },
  "00-00065781": {
    name: "Преобразователь температуры UFG-050-16.05.20.000-26 (Dn200-250 кр/кр,реверс,ПУУ 20Dn)",
    diameter_min_max_mm: "250-250",
    pressure_min_max_mpa: "1,6 - 10",
    price_rub: 38163
  },
  "00-00066686": {
    name: "Преобразователь температуры UFG-100-160.05.20.000(Dn50-Dn80_5Dn)кв/кр",
    diameter_min_max_mm: "50-80",
    pressure_min_max_mpa: "1,6 - 16",
    price_rub: 49478
  },
  "00-00064346": {
    name: "Преобразователь температуры UFG-100-160.05.20.000-01 (Dn050,реверс,10Dn)кв/кр",
    diameter_min_max_mm: "50-50",
    pressure_min_max_mpa: "1,6 - 16",
    price_rub: 56264
  },
  "00-00064342": {
    name: "Преобразователь температуры UFG-100-160.05.20.000-02(Dn65-080,реверс10Dn)кв/кр",
    diameter_min_max_mm: "65-100",
    pressure_min_max_mpa: "1,6 - 16",
    price_rub: 56509
  },
  "00-00064344": {
    name: "Преобразователь температуры UFG-100-160.05.20.000-03 (Dn50,Dn65 реверс 20Dn)",
    diameter_min_max_mm: "50-100",
    pressure_min_max_mpa: "1,6 - 16",
    price_rub: 49723
  },
  "00-00064347": {
    name: "Преобразователь температуры UFG-100-160.05.20.000-04 (Dn080,реверс,20Dn)кв/кр",
    diameter_min_max_mm: "80-100",
    pressure_min_max_mpa: "1,6 - 16",
    price_rub: 76375
  },
  "00-00064329": {
    name: "Преобразователь температуры UFG-100-160.05.20.000-05 (Dn100-150,ПУУ 5Dn)",
    diameter_min_max_mm: "100-150",
    pressure_min_max_mpa: "1,6 - 16",
    price_rub: 59576
  },
  "00-00067043": {
    name: "Преобразователь температуры UFG-100-160.05.20.000-07 (Dn100-150,рев.10Dn)кв/кр",
    diameter_min_max_mm: "100-150",
    pressure_min_max_mpa: "1,6 - 16",
    price_rub: 60067
  },
  "00-00067044": {
    name: "Преобразователь температуры UFG-100-160.05.20.000-09 (Dn100-150,рев.20Dn)кв/кр",
    diameter_min_max_mm: "100-150",
    pressure_min_max_mpa: "1,6 - 16",
    price_rub: 60312
  },
  "00-00064345": {
    name: "Преобразователь температуры UFG-100-160.05.20.000-10 (Dn200, ПУУ 5Dn)кв/кр",
    diameter_min_max_mm: "100-200",
    pressure_min_max_mpa: "1,6 - 16",
    price_rub: 60346
  },
  "00-00067045": {
    name: "Преобразователь температуры UFG-100-160.05.20.000-12 (Dn200,рев.10-20Dn)кв/кр",
    diameter_min_max_mm: "100-200",
    pressure_min_max_mpa: "1,6 - 16",
    price_rub: 61327
  },
  "00-00069765": {
    name: "Преобразователь температуры UFG-100-160.05.20.000-Sp (Dn300, ПУУ 5Dn)кв/кр",
    diameter_min_max_mm: "100-300",
    pressure_min_max_mpa: "1,6 - 16",
    price_rub: 56090
  },
  "00-00064343": {
    name: "Преобразователь температуры UFG-125-250.05.20.000",
    diameter_min_max_mm: "125-125",
    pressure_min_max_mpa: "1,6 - 10",
    price_rub: 80210
  },
  "00-00065372": {
    name: "Преобразователь температуры UFG-125-250.05.20.000-01",
    diameter_min_max_mm: "125-125",
    pressure_min_max_mpa: "1,6 - 10",
    price_rub: 75467
  },
  "00-00064099": {
    name: "Преобразователь температуры UFG-250-160.05.20.000-02(Dn050-080,ПУУ5-10Dn)",
    diameter_min_max_mm: "50-250",
    pressure_min_max_mpa: "1,6 - 16",
    price_rub: 63612
  },
  "00-00063567": {
    name: "Преобразователь температуры UFG-250-160.05.20.000-04 (Dn050-080,реверс 20Dn)",
    diameter_min_max_mm: "50-250",
    pressure_min_max_mpa: "1,6 - 16",
    price_rub: 63857
  },
  "00-00067258": {
    name: "Преобразователь температуры UFG-250-160.05.20.000-05 (Dn100-150,ПУУ 5Dn)",
    diameter_min_max_mm: "100-250",
    pressure_min_max_mpa: "1,6 - 16",
    price_rub: 64444
  },
  "00-00067259": {
    name: "Преобразователь температуры UFG-250-160.05.20.000-07(Dn100-150,реверс10Dn)кр/крыш",
    diameter_min_max_mm: "100-250",
    pressure_min_max_mpa: "1,6 - 16",
    price_rub: 64934
  },
  "00-00067260": {
    name: "Преобразователь температуры UFG-250-160.05.20.000-09(Dn100-150,реверс20Dn)кр/крыш",
    diameter_min_max_mm: "100-250",
    pressure_min_max_mpa: "1,6 - 16",
    price_rub: 65179
  },
  "00-00067261": {
    name: "Преобразователь температуры UFG-250-160.05.20.000-10 (Dn200-250,ПУУ 5Dn)кр/кр",
    diameter_min_max_mm: "200-250",
    pressure_min_max_mpa: "1,6 - 16",
    price_rub: 65214
  },
  "00-00067263": {
    name: "Преобразователь температуры UFG-250-160.05.20.000-13 (Dn200-250,реверс )кр/кр*",
    diameter_min_max_mm: "200-250",
    pressure_min_max_mpa: "1,6 - 16",
    price_rub: 65214
  },
  "00-00066206": {
    name: "Преобразователь температуры UFG-250-160.05.20.000-14 (Dn300 ПУУ5Dn)",
    diameter_min_max_mm: "250-300",
    pressure_min_max_mpa: "1,6 - 16",
    price_rub: 61140
  },
  "00-00067264": {
    name: "Преобразователь температуры UFG-250-160.05.20.000-16 (Dn300 реверс.)*",
    diameter_min_max_mm: "250-300",
    pressure_min_max_mpa: "1,6 - 16",
    price_rub: 62622
  },
  "00-00064103": {
    name: "Преобразователь температуры UFG-250-160.05.20.000-17 (Dn350-500, ПУУ 5Dn)",
    diameter_min_max_mm: "250-500",
    pressure_min_max_mpa: "1,6 - 16",
    price_rub: 83043
  },
  "00-00064110": {
    name: "Преобразователь температуры UFG-250-160.05.20.000-19 (Dn350-500,реверс 10Dn)",
    diameter_min_max_mm: "250-500",
    pressure_min_max_mpa: "1,6 - 16",
    price_rub: 85267
  },
  "00-00063565": {
    name: "Преобразователь температуры UFG-250-160.05.20.000-20 (Dn500 реверс,ПУУ 10Dn)",
    diameter_min_max_mm: "250-500",
    pressure_min_max_mpa: "1,6 - 16",
    price_rub: 85512
  },
  "00-00064096": {
    name: "Преобразователь температуры UFG-250-160.05.20.000-22 (Dn500-400,реверс 20Dn)",
    diameter_min_max_mm: "250-400",
    pressure_min_max_mpa: "1,6 - 16",
    price_rub: 86835
  },
  "00-00064116": {
    name: "Преобразователь температуры UFG-250-160.05.20.000-23 (Dn500 реверс,ПУУ20Dn)",
    diameter_min_max_mm: "250-500",
    pressure_min_max_mpa: "1,6 - 16",
    price_rub: 86982
  },
  "00-00066300": {
    name: "Преобразователь температуры UFG-250-160.05.20.000-24 (Dn600-800, ПУУ 5Dn)",
    diameter_min_max_mm: "250-800",
    pressure_min_max_mpa: "1,6 - 16",
    price_rub: 103772
  },
  "00-00064111": {
    name: "Преобразователь температуры UFG-250-160.05.20.000-25 (Dn600 реверс,ПУУ10Dn)",
    diameter_min_max_mm: "250-600",
    pressure_min_max_mpa: "1,6 - 16",
    price_rub: 106261
  },
  "00-00064104": {
    name: "Преобразователь температуры UFG-250-160.05.20.000-27 (Dn700-800,реверс 10Dn)",
    diameter_min_max_mm: "250-800",
    pressure_min_max_mpa: "1,6 - 16",
    price_rub: 105931
  },
  "00-00063569": {
    name: "Преобразователь температуры UFG-250-160.05.20.000-28 (Dn600 реверс,ПУУ20Dn)",
    diameter_min_max_mm: "250-600",
    pressure_min_max_mpa: "1,6 - 16",
    price_rub: 107989
  },
  "00-00063570": {
    name: "Преобразователь температуры UFG-250-160.05.20.000-29 (Dn700 реверс,ПУУ 20Dn)",
    diameter_min_max_mm: "250-700",
    pressure_min_max_mpa: "1,6 - 16",
    price_rub: 108978
  },
  "00-00063571": {
    name: "Преобразователь температуры UFG-800-160.05.20.000-30 (Dn 800 реверс,ПУУ 20Dn)",
    diameter_min_max_mm: "800-800",
    pressure_min_max_mpa: "1,6 - 16",
    price_rub: 109719
  },
  "00-00071607": {
    name: "Преобразователь температуры UFG-250-160.05.30.000 (Dn050-080 5Dn)",
    diameter_min_max_mm: "250",
    pressure_min_max_mpa: "1,6 - 16",
    price_rub: 50147
  },
  "00-00071320": {
    name: "Преобразователь температуры UFG-250-160.05.30.000-05 (Dn100-150/5Dn)",
    diameter_min_max_mm: "250",
    pressure_min_max_mpa: "1,6 - 16",
    price_rub: 60325
  },
  "00-00071283": {
    name: "Преобразователь температуры UFG-250-160.05.30.000-06 (Dn100-150 реверс 10Dn)",
    diameter_min_max_mm: "250",
    pressure_min_max_mpa: "1,6 - 16",
    price_rub: 59565
  },
  "00-00071284": {
    name: "Преобразователь температуры UFG-250-160.05.30.000-10 (Dn200-250 ПУУ5Dn)",
    diameter_min_max_mm: "200-250",
    pressure_min_max_mpa: "1,6 - 16",
    price_rub: 60094
  },
  "00-00071274": {
    name: "Преобразователь температуры UFG-250-160.05.30.000-14 (Dn300 ПУУ5Dn)",
    diameter_min_max_mm: "250-300",
    pressure_min_max_mpa: "1,6 - 16",
    price_rub: 55083
  },
  "00-00071275": {
    name: "Преобразователь температуры UFG-250-160.05.30.000-17 (Dn350-500/ПУУ5Dn)",
    diameter_min_max_mm: "250-500",
    pressure_min_max_mpa: "1,6 - 16",
    price_rub: 79072
  },
  "00-00075352": {
    name: "Преобразователь температуры UFG-200-250.05.20.000 (Dn200 ПУУ5Dn)",
    diameter_min_max_mm: "200",
    pressure_min_max_mpa: "1,6 - 25",
    price_rub: 91266
  }
};









// -------------------------------------------------------------------------------------------------------------------------------------









// ============================================================================
// Прайс-лист на Термочехлы UFG-F-V
// Цены указаны в рублях с НДС 22%
// Срок действия: до 01.04.2026г.
// 
// Объект содержит 3 подобъекта по типу исполнения: "XX", "dA", "dB"
// В каждом подобъекте — два раздела:
//   with_gauge_mount    — наличие места для установки контрольного манометра
//   without_gauge_mount — без места для установки контрольного манометра
// 
// В каждом разделе:
//   Ключи: ДУ (number)
//   Значения: объект {
//     dn_mm: number,                  // Диаметр условного прохода, мм
//     price_1_6_mpa: number,          // Цена при 1,6 МПа
//     price_6_3_mpa: number,          // Цена при 6,3 МПа
//     price_10_0_mpa: number,         // Цена при 10,0 МПа
//     price_16_0_mpa: number,         // Цена при 16,0 МПа
//     price_25_0_mpa: number          // Цена при 25,0 МПа
//   }
// ============================================================================

const ufgThermalInsulationCovers = {
  XX: {
    with_gauge_mount: {
      50: { dn_mm: 50, price_1_6_mpa: 77643, price_6_3_mpa: 90152, price_10_0_mpa: 90152, price_16_0_mpa: 90152, price_25_0_mpa: 90152 },
      65: { dn_mm: 65, price_1_6_mpa: 79568, price_6_3_mpa: 91503, price_10_0_mpa: 91503, price_16_0_mpa: 91503, price_25_0_mpa: 91503 },
      80: { dn_mm: 80, price_1_6_mpa: 82984, price_6_3_mpa: 111170, price_10_0_mpa: 114020, price_16_0_mpa: 114020, price_25_0_mpa: 114020 },
      100: { dn_mm: 100, price_1_6_mpa: 86975, price_6_3_mpa: 113937, price_10_0_mpa: 114372, price_16_0_mpa: 115773, price_25_0_mpa: 115773 },
      125: { dn_mm: 125, price_1_6_mpa: 120049, price_6_3_mpa: 120049, price_10_0_mpa: 120049, price_16_0_mpa: 120049, price_25_0_mpa: 121806 },
      150: { dn_mm: 150, price_1_6_mpa: 123600, price_6_3_mpa: 124148, price_10_0_mpa: 124148, price_16_0_mpa: 124148, price_25_0_mpa: 135752 },
      200: { dn_mm: 200, price_1_6_mpa: 149406, price_6_3_mpa: 153296, price_10_0_mpa: 153296, price_16_0_mpa: 153296, price_25_0_mpa: 153296 },
      250: { dn_mm: 250, price_1_6_mpa: 154766, price_6_3_mpa: 154766, price_10_0_mpa: 154766, price_16_0_mpa: 154766, price_25_0_mpa: 154766 },
      300: { dn_mm: 300, price_1_6_mpa: 172214, price_6_3_mpa: 172214, price_10_0_mpa: 172214, price_16_0_mpa: 200557, price_25_0_mpa: 200557 },
      350: { dn_mm: 350, price_1_6_mpa: 179931, price_6_3_mpa: 212399, price_10_0_mpa: 212399, price_16_0_mpa: 226571, price_25_0_mpa: 226670 },
      400: { dn_mm: 400, price_1_6_mpa: 252584, price_6_3_mpa: 252584, price_10_0_mpa: 252584, price_16_0_mpa: 252584, price_25_0_mpa: 252783 },
      450: { dn_mm: 450, price_1_6_mpa: 253156, price_6_3_mpa: 253156, price_10_0_mpa: 253156, price_16_0_mpa: 253156, price_25_0_mpa: 253156 },
      500: { dn_mm: 500, price_1_6_mpa: 253180, price_6_3_mpa: 253180, price_10_0_mpa: 253180, price_16_0_mpa: 253180, price_25_0_mpa: 253180 },
      600: { dn_mm: 600, price_1_6_mpa: 360191, price_6_3_mpa: 360191, price_10_0_mpa: 360191, price_16_0_mpa: 360191, price_25_0_mpa: 360191 },
      700: { dn_mm: 700, price_1_6_mpa: 364293, price_6_3_mpa: 364293, price_10_0_mpa: 510661, price_16_0_mpa: 510661, price_25_0_mpa: 510661 },
      800: { dn_mm: 800, price_1_6_mpa: 502389, price_6_3_mpa: 502389, price_10_0_mpa: 685870, price_16_0_mpa: 685870, price_25_0_mpa: 685870 }
    },
    without_gauge_mount: {
      50: { dn_mm: 50, price_1_6_mpa: 64933, price_6_3_mpa: 83341, price_10_0_mpa: 83341, price_16_0_mpa: 83341, price_25_0_mpa: 83341 },
      65: { dn_mm: 65, price_1_6_mpa: 72479, price_6_3_mpa: 84076, price_10_0_mpa: 84076, price_16_0_mpa: 84076, price_25_0_mpa: 84076 },
      80: { dn_mm: 80, price_1_6_mpa: 77543, price_6_3_mpa: 110208, price_10_0_mpa: 110208, price_16_0_mpa: 110208, price_25_0_mpa: 110208 },
      100: { dn_mm: 100, price_1_6_mpa: 78436, price_6_3_mpa: 113732, price_10_0_mpa: 113732, price_16_0_mpa: 115003, price_25_0_mpa: 115003 },
      125: { dn_mm: 125, price_1_6_mpa: 118746, price_6_3_mpa: 118746, price_10_0_mpa: 118746, price_16_0_mpa: 118746, price_25_0_mpa: 121449 },
      150: { dn_mm: 150, price_1_6_mpa: 122192, price_6_3_mpa: 122670, price_10_0_mpa: 122670, price_16_0_mpa: 122670, price_25_0_mpa: 124148 },
      200: { dn_mm: 200, price_1_6_mpa: 147738, price_6_3_mpa: 149454, price_10_0_mpa: 149454, price_16_0_mpa: 149454, price_25_0_mpa: 149454 },
      250: { dn_mm: 250, price_1_6_mpa: 153595, price_6_3_mpa: 153595, price_10_0_mpa: 153595, price_16_0_mpa: 153595, price_25_0_mpa: 153595 },
      300: { dn_mm: 300, price_1_6_mpa: 171666, price_6_3_mpa: 171666, price_10_0_mpa: 171666, price_16_0_mpa: 176332, price_25_0_mpa: 176332 },
      350: { dn_mm: 350, price_1_6_mpa: 177847, price_6_3_mpa: 204977, price_10_0_mpa: 204977, price_16_0_mpa: 207310, price_25_0_mpa: 212771 },
      400: { dn_mm: 400, price_1_6_mpa: 238287, price_6_3_mpa: 238287, price_10_0_mpa: 238287, price_16_0_mpa: 238287, price_25_0_mpa: 249210 },
      450: { dn_mm: 450, price_1_6_mpa: 238645, price_6_3_mpa: 238645, price_10_0_mpa: 238645, price_16_0_mpa: 238645, price_25_0_mpa: 250577 },
      500: { dn_mm: 500, price_1_6_mpa: 253180, price_6_3_mpa: 253180, price_10_0_mpa: 253180, price_16_0_mpa: 253180, price_25_0_mpa: 253180 },
      600: { dn_mm: 600, price_1_6_mpa: 286343, price_6_3_mpa: 286343, price_10_0_mpa: 286343, price_16_0_mpa: 286343, price_25_0_mpa: 286343 },
      700: { dn_mm: 700, price_1_6_mpa: 323675, price_6_3_mpa: 323675, price_10_0_mpa: 323675, price_16_0_mpa: 323675, price_25_0_mpa: 323675 },
      800: { dn_mm: 800, price_1_6_mpa: 486082, price_6_3_mpa: 486082, price_10_0_mpa: 486082, price_16_0_mpa: 486082, price_25_0_mpa: 486082 }
    }
  },
  dA: {
    with_gauge_mount: {
      50: { dn_mm: 50, price_1_6_mpa: 115650, price_6_3_mpa: 115650, price_10_0_mpa: 115650, price_16_0_mpa: 118656, price_25_0_mpa: 118656 },
      65: { dn_mm: 65, price_1_6_mpa: 122821, price_6_3_mpa: 122821, price_10_0_mpa: 122821, price_16_0_mpa: 122821, price_25_0_mpa: 122821 },
      80: { dn_mm: 80, price_1_6_mpa: 127265, price_6_3_mpa: 127265, price_10_0_mpa: 127265, price_16_0_mpa: 127265, price_25_0_mpa: 127265 },
      100: { dn_mm: 100, price_1_6_mpa: 139160, price_6_3_mpa: 139160, price_10_0_mpa: 139160, price_16_0_mpa: 139160, price_25_0_mpa: 139160 },
      125: { dn_mm: 125, price_1_6_mpa: 140377, price_6_3_mpa: 140377, price_10_0_mpa: 140377, price_16_0_mpa: 140377, price_25_0_mpa: 140377 },
      150: { dn_mm: 150, price_1_6_mpa: 141781, price_6_3_mpa: 141781, price_10_0_mpa: 141781, price_16_0_mpa: 141781, price_25_0_mpa: 141781 },
      200: { dn_mm: 200, price_1_6_mpa: 144879, price_6_3_mpa: 146328, price_10_0_mpa: 146328, price_16_0_mpa: 146328, price_25_0_mpa: 146328 },
      250: { dn_mm: 250, price_1_6_mpa: 202506, price_6_3_mpa: 202506, price_10_0_mpa: 203323, price_16_0_mpa: 203323, price_25_0_mpa: 203323 },
      300: { dn_mm: 300, price_1_6_mpa: 204531, price_6_3_mpa: 204531, price_10_0_mpa: 205356, price_16_0_mpa: 205356, price_25_0_mpa: 205356 },
      350: { dn_mm: 350, price_1_6_mpa: 250084, price_6_3_mpa: 250084, price_10_0_mpa: 250084, price_16_0_mpa: 250084, price_25_0_mpa: 250280 },
      400: { dn_mm: 400, price_1_6_mpa: 252584, price_6_3_mpa: 252584, price_10_0_mpa: 252584, price_16_0_mpa: 252584, price_25_0_mpa: 252783 },
      450: { dn_mm: 450, price_1_6_mpa: 252675, price_6_3_mpa: 252675, price_10_0_mpa: 252675, price_16_0_mpa: 252675, price_25_0_mpa: 252927 },
      500: { dn_mm: 500, price_1_6_mpa: 253180, price_6_3_mpa: 253180, price_10_0_mpa: 253180, price_16_0_mpa: 253180, price_25_0_mpa: 253180 },
      600: { dn_mm: 600, price_1_6_mpa: 360191, price_6_3_mpa: 360191, price_10_0_mpa: 360191, price_16_0_mpa: 360191, price_25_0_mpa: 360191 },
      700: { dn_mm: 700, price_1_6_mpa: 374051, price_6_3_mpa: 374051, price_10_0_mpa: 374051, price_16_0_mpa: 374051, price_25_0_mpa: 374051 },
      800: { dn_mm: 800, price_1_6_mpa: 502389, price_6_3_mpa: 502389, price_10_0_mpa: 502389, price_16_0_mpa: 502389, price_25_0_mpa: 502389 }
    },
    without_gauge_mount: {
      50: { dn_mm: 50, price_1_6_mpa: 83659, price_6_3_mpa: 83659, price_10_0_mpa: 83659, price_16_0_mpa: 106038, price_25_0_mpa: 106038 },
      65: { dn_mm: 65, price_1_6_mpa: 90748, price_6_3_mpa: 90748, price_10_0_mpa: 90748, price_16_0_mpa: 106447, price_25_0_mpa: 106447 },
      80: { dn_mm: 80, price_1_6_mpa: 91046, price_6_3_mpa: 91046, price_10_0_mpa: 91046, price_16_0_mpa: 106796, price_25_0_mpa: 106796 },
      100: { dn_mm: 100, price_1_6_mpa: 139001, price_6_3_mpa: 139001, price_10_0_mpa: 139001, price_16_0_mpa: 139001, price_25_0_mpa: 139001 },
      125: { dn_mm: 125, price_1_6_mpa: 139345, price_6_3_mpa: 139345, price_10_0_mpa: 139345, price_16_0_mpa: 139345, price_25_0_mpa: 139345 },
      150: { dn_mm: 150, price_1_6_mpa: 140738, price_6_3_mpa: 140738, price_10_0_mpa: 140738, price_16_0_mpa: 140738, price_25_0_mpa: 140738 },
      200: { dn_mm: 200, price_1_6_mpa: 141165, price_6_3_mpa: 141447, price_10_0_mpa: 141447, price_16_0_mpa: 141447, price_25_0_mpa: 141447 },
      250: { dn_mm: 250, price_1_6_mpa: 141242, price_6_3_mpa: 146892, price_10_0_mpa: 147202, price_16_0_mpa: 147202, price_25_0_mpa: 147202 },
      300: { dn_mm: 300, price_1_6_mpa: 141384, price_6_3_mpa: 147039, price_10_0_mpa: 147938, price_16_0_mpa: 147938, price_25_0_mpa: 147938 },
      350: { dn_mm: 350, price_1_6_mpa: 235928, price_6_3_mpa: 235928, price_10_0_mpa: 235928, price_16_0_mpa: 235928, price_25_0_mpa: 246743 },
      400: { dn_mm: 400, price_1_6_mpa: 238287, price_6_3_mpa: 238287, price_10_0_mpa: 238287, price_16_0_mpa: 238287, price_25_0_mpa: 249210 },
      450: { dn_mm: 450, price_1_6_mpa: 250673, price_6_3_mpa: 250673, price_10_0_mpa: 250673, price_16_0_mpa: 250673, price_25_0_mpa: 250673 },
      500: { dn_mm: 500, price_1_6_mpa: 253180, price_6_3_mpa: 253180, price_10_0_mpa: 253180, price_16_0_mpa: 253180, price_25_0_mpa: 253180 },
      600: { dn_mm: 600, price_1_6_mpa: 286343, price_6_3_mpa: 286343, price_10_0_mpa: 286343, price_16_0_mpa: 286343, price_25_0_mpa: 286343 },
      700: { dn_mm: 700, price_1_6_mpa: 323675, price_6_3_mpa: 323675, price_10_0_mpa: 323675, price_16_0_mpa: 323675, price_25_0_mpa: 323675 },
      800: { dn_mm: 800, price_1_6_mpa: 486082, price_6_3_mpa: 486082, price_10_0_mpa: 486082, price_16_0_mpa: 486082, price_25_0_mpa: 486082 }
    }
  },
  dB: {
    with_gauge_mount: {
      50: { dn_mm: 50, price_1_6_mpa: 77643, price_6_3_mpa: 90152, price_10_0_mpa: 90152, price_16_0_mpa: 90152, price_25_0_mpa: 90152 },
      65: { dn_mm: 65, price_1_6_mpa: 79568, price_6_3_mpa: 91503, price_10_0_mpa: 91503, price_16_0_mpa: 91503, price_25_0_mpa: 91503 },
      80: { dn_mm: 80, price_1_6_mpa: 79823, price_6_3_mpa: 114020, price_10_0_mpa: 114020, price_16_0_mpa: 114020, price_25_0_mpa: 114020 },
      100: { dn_mm: 100, price_1_6_mpa: 86975, price_6_3_mpa: 118286, price_10_0_mpa: 118286, price_16_0_mpa: 119035, price_25_0_mpa: 119035 },
      125: { dn_mm: 125, price_1_6_mpa: 120049, price_6_3_mpa: 120049, price_10_0_mpa: 120049, price_16_0_mpa: 120049, price_25_0_mpa: 127102 },
      150: { dn_mm: 150, price_1_6_mpa: 126769, price_6_3_mpa: 129320, price_10_0_mpa: 129320, price_16_0_mpa: 129320, price_25_0_mpa: 135752 },
      200: { dn_mm: 200, price_1_6_mpa: 135824, price_6_3_mpa: 139360, price_10_0_mpa: 139360, price_16_0_mpa: 139360, price_25_0_mpa: 139360 },
      250: { dn_mm: 250, price_1_6_mpa: 168453, price_6_3_mpa: 168453, price_10_0_mpa: 168453, price_16_0_mpa: 168453, price_25_0_mpa: 168453 },
      300: { dn_mm: 300, price_1_6_mpa: 175558, price_6_3_mpa: 175558, price_10_0_mpa: 175558, price_16_0_mpa: 200557, price_25_0_mpa: 200557 },
      350: { dn_mm: 350, price_1_6_mpa: 178265, price_6_3_mpa: 252080, price_10_0_mpa: 252080, price_16_0_mpa: 252080, price_25_0_mpa: 252278 },
      400: { dn_mm: 400, price_1_6_mpa: 252584, price_6_3_mpa: 252584, price_10_0_mpa: 252584, price_16_0_mpa: 252584, price_25_0_mpa: 252783 },
      450: { dn_mm: 450, price_1_6_mpa: 252941, price_6_3_mpa: 252941, price_10_0_mpa: 252941, price_16_0_mpa: 252941, price_25_0_mpa: 252941 },
      500: { dn_mm: 500, price_1_6_mpa: 253180, price_6_3_mpa: 253180, price_10_0_mpa: 253180, price_16_0_mpa: 253180, price_25_0_mpa: 253180 },
      600: { dn_mm: 600, price_1_6_mpa: 360191, price_6_3_mpa: 360191, price_10_0_mpa: 360191, price_16_0_mpa: 360191, price_25_0_mpa: 360191 },
      700: { dn_mm: 700, price_1_6_mpa: 364293, price_6_3_mpa: 364293, price_10_0_mpa: 364293, price_16_0_mpa: 364293, price_25_0_mpa: 364293 },
      800: { dn_mm: 800, price_1_6_mpa: 502389, price_6_3_mpa: 502389, price_10_0_mpa: 502389, price_16_0_mpa: 502389, price_25_0_mpa: 502389 }
    },
    without_gauge_mount: {
      50: { dn_mm: 50, price_1_6_mpa: 64933, price_6_3_mpa: 83341, price_10_0_mpa: 83341, price_16_0_mpa: 83341, price_25_0_mpa: 83341 },
      65: { dn_mm: 65, price_1_6_mpa: 72479, price_6_3_mpa: 84076, price_10_0_mpa: 84076, price_16_0_mpa: 84076, price_25_0_mpa: 84076 },
      80: { dn_mm: 80, price_1_6_mpa: 77543, price_6_3_mpa: 110208, price_10_0_mpa: 110208, price_16_0_mpa: 110208, price_25_0_mpa: 110208 },
      100: { dn_mm: 100, price_1_6_mpa: 78436, price_6_3_mpa: 117654, price_10_0_mpa: 117654, price_16_0_mpa: 118140, price_25_0_mpa: 118140 },
      125: { dn_mm: 125, price_1_6_mpa: 118746, price_6_3_mpa: 118746, price_10_0_mpa: 118746, price_16_0_mpa: 118746, price_25_0_mpa: 124761 },
      150: { dn_mm: 150, price_1_6_mpa: 126133, price_6_3_mpa: 127131, price_10_0_mpa: 127131, price_16_0_mpa: 127131, price_25_0_mpa: 129320 },
      200: { dn_mm: 200, price_1_6_mpa: 133441, price_6_3_mpa: 133441, price_10_0_mpa: 133441, price_16_0_mpa: 133441, price_25_0_mpa: 133441 },
      250: { dn_mm: 250, price_1_6_mpa: 153595, price_6_3_mpa: 153595, price_10_0_mpa: 153595, price_16_0_mpa: 153595, price_25_0_mpa: 153595 },
      300: { dn_mm: 300, price_1_6_mpa: 171666, price_6_3_mpa: 171666, price_10_0_mpa: 171666, price_16_0_mpa: 176332, price_25_0_mpa: 176332 },
      350: { dn_mm: 350, price_1_6_mpa: 177847, price_6_3_mpa: 237812, price_10_0_mpa: 237812, price_16_0_mpa: 237812, price_25_0_mpa: 248713 },
      400: { dn_mm: 400, price_1_6_mpa: 238287, price_6_3_mpa: 238287, price_10_0_mpa: 238287, price_16_0_mpa: 238287, price_25_0_mpa: 249210 },
      450: { dn_mm: 450, price_1_6_mpa: 238645, price_6_3_mpa: 238645, price_10_0_mpa: 238645, price_16_0_mpa: 238645, price_25_0_mpa: 250577 },
      500: { dn_mm: 500, price_1_6_mpa: 253180, price_6_3_mpa: 253180, price_10_0_mpa: 253180, price_16_0_mpa: 253180, price_25_0_mpa: 253180 },
      600: { dn_mm: 600, price_1_6_mpa: 286343, price_6_3_mpa: 286343, price_10_0_mpa: 286343, price_16_0_mpa: 286343, price_25_0_mpa: 286343 },
      700: { dn_mm: 700, price_1_6_mpa: 323675, price_6_3_mpa: 323675, price_10_0_mpa: 323675, price_16_0_mpa: 323675, price_25_0_mpa: 323675 },
      800: { dn_mm: 800, price_1_6_mpa: 486082, price_6_3_mpa: 486082, price_10_0_mpa: 486082, price_16_0_mpa: 486082, price_25_0_mpa: 486082 }
    }
  }
};









// -------------------------------------------------------------------------------------------------------------------------------------










// ============================================================================
// Прайс-лист на Теплоизоляцию ПУ UFG-F-V
// Цены указаны в рублях с НДС 22%
// Срок действия: до 01.04.2026г.
// 
// Ключи объекта: код номенклатуры (string)
// Значения: объект {
//   name: string,                     // Полное наименование теплоизоляции
//   dn_external_mm: number,           // Диаметр условный проход (внешний), мм
//   dn_internal_mm: number,           // Диаметр внутренний, мм
//   insulation_thickness_mm: number,  // Толщина изоляции, мм
//   price_rub: number                 // Цена с НДС 22%
// }
// ============================================================================

const ufgPipeInsulation = {
  "00-00051484": {
    name: "Теплоизоляция прямолинейных участков Dn050 Скорлупа ППУ 57/40",
    dn_external_mm: 50,
    dn_internal_mm: 57,
    insulation_thickness_mm: 40,
    price_rub: 833
  },
  "00-00051485": {
    name: "Теплоизоляция прямолинейных участков Dn050 Скорлупа ППУ 57/50",
    dn_external_mm: 50,
    dn_internal_mm: 57,
    insulation_thickness_mm: 50,
    price_rub: 669
  },
  "00-00053679": {
    name: "Теплоизоляция прямолинейных участков Dn065 Скорлупа ППУ 76/40",
    dn_external_mm: 65,
    dn_internal_mm: 76,
    insulation_thickness_mm: 40,
    price_rub: 1331
  },
  "00-00053680": {
    name: "Теплоизоляция прямолинейных участков Dn065 Скорлупа ППУ 76/50",
    dn_external_mm: 65,
    dn_internal_mm: 76,
    insulation_thickness_mm: 50,
    price_rub: 984
  },
  "00-00051486": {
    name: "Теплоизоляция прямолинейных участков Dn080 Скорлупа ППУ 89/40",
    dn_external_mm: 80,
    dn_internal_mm: 89,
    insulation_thickness_mm: 40,
    price_rub: 1098
  },
  "00-00051487": {
    name: "Теплоизоляция прямолинейных участков Dn080 Скорлупа ППУ 89/50",
    dn_external_mm: 80,
    dn_internal_mm: 89,
    insulation_thickness_mm: 50,
    price_rub: 1010
  },
  "00-00051488": {
    name: "Теплоизоляция прямолинейных участков Dn100 Скорлупа ППУ 108/40",
    dn_external_mm: 100,
    dn_internal_mm: 108,
    insulation_thickness_mm: 40,
    price_rub: 1255
  },
  "00-00051489": {
    name: "Теплоизоляция прямолинейных участков Dn100 Скорлупа ППУ 108/50",
    dn_external_mm: 100,
    dn_internal_mm: 108,
    insulation_thickness_mm: 50,
    price_rub: 1147
  },
  "00-00057694": {
    name: "Теплоизоляция прямолинейных участков Dn125 Скорлупа ППУ 133/40",
    dn_external_mm: 125,
    dn_internal_mm: 133,
    insulation_thickness_mm: 40,
    price_rub: 1462
  },
  "00-00051490": {
    name: "Теплоизоляция прямолинейных участков Dn150 Скорлупа ППУ 159/40",
    dn_external_mm: 150,
    dn_internal_mm: 159,
    insulation_thickness_mm: 40,
    price_rub: 1716
  },
  "00-00051491": {
    name: "Теплоизоляция прямолинейных участков Dn150 Скорлупа ППУ 159/50",
    dn_external_mm: 150,
    dn_internal_mm: 159,
    insulation_thickness_mm: 50,
    price_rub: 1533
  },
  "00-00051492": {
    name: "Теплоизоляция прямолинейных участков Dn200 Скорлупа ППУ 219/40",
    dn_external_mm: 200,
    dn_internal_mm: 219,
    insulation_thickness_mm: 40,
    price_rub: 2219
  },
  "00-00051493": {
    name: "Теплоизоляция прямолинейных участков Dn200 Скорлупа ППУ 219/50",
    dn_external_mm: 200,
    dn_internal_mm: 219,
    insulation_thickness_mm: 50,
    price_rub: 2171
  },
  "00-00051494": {
    name: "Теплоизоляция прямолинейных участков Dn250 Скорлупа ППУ 273/40",
    dn_external_mm: 250,
    dn_internal_mm: 273,
    insulation_thickness_mm: 40,
    price_rub: 2619
  },
  "00-00051495": {
    name: "Теплоизоляция прямолинейных участков Dn250 Скорлупа ППУ 273/50",
    dn_external_mm: 250,
    dn_internal_mm: 273,
    insulation_thickness_mm: 50,
    price_rub: 2619
  },
  "00-00051500": {
    name: "Теплоизоляция прямолинейных участков Dn300 Скорлупа ППУ 325/40",
    dn_external_mm: 300,
    dn_internal_mm: 325,
    insulation_thickness_mm: 40,
    price_rub: 3048
  },
  "00-00051501": {
    name: "Теплоизоляция прямолинейных участков Dn300 Скорлупа ППУ 325/50",
    dn_external_mm: 300,
    dn_internal_mm: 325,
    insulation_thickness_mm: 50,
    price_rub: 2728
  },
  "00-00056929": {
    name: "Теплоизоляция прямолинейных участков Dn350 Скорлупа ППУ 377/50",
    dn_external_mm: 350,
    dn_internal_mm: 377,
    insulation_thickness_mm: 50,
    price_rub: 4369
  },
  "00-00051502": {
    name: "Теплоизоляция прямолинейных участков Dn400 Скорлупа ППУ 426/50",
    dn_external_mm: 400,
    dn_internal_mm: 426,
    insulation_thickness_mm: 50,
    price_rub: 4866
  },
  "00-00065053": {
    name: "Теплоизоляция прямолинейных участков Dn450 Скорлупа ППУ 480/50",
    dn_external_mm: 450,
    dn_internal_mm: 480,
    insulation_thickness_mm: 50,
    price_rub: 4892
  },
  "00-00051503": {
    name: "Теплоизоляция прямолинейных участков Dn500 Скорлупа ППУ 530/50",
    dn_external_mm: 500,
    dn_internal_mm: 530,
    insulation_thickness_mm: 50,
    price_rub: 5920
  },
  "00-00051504": {
    name: "Теплоизоляция прямолинейных участков Dn600 Скорлупа ППУ 630/50",
    dn_external_mm: 600,
    dn_internal_mm: 630,
    insulation_thickness_mm: 50,
    price_rub: 6801
  },
  "00-00051505": {
    name: "Теплоизоляция прямолинейных участков Dn600 Скорлупа ППУ 630/60",
    dn_external_mm: 600,
    dn_internal_mm: 630,
    insulation_thickness_mm: 60,
    price_rub: 5922
  },
  "00-00058890": {
    name: "Теплоизоляция прямолинейных участков Dn700 Скорлупа ППУ 720/60",
    dn_external_mm: 700,
    dn_internal_mm: 720,
    insulation_thickness_mm: 60,
    price_rub: 11744
  },
  "00-00060621": {
    name: "Теплоизоляция прямолинейных участков Dn800 Скорлупа ППУ 820/60",
    dn_external_mm: 800,
    dn_internal_mm: 820,
    insulation_thickness_mm: 60,
    price_rub: 11046
  }
};










// -------------------------------------------------------------------------------------------------------------------------------------










// ============================================================================
// Прайс-лист на калибровку, поверку
// Цены указаны в рублях с НДС 22%
// Срок действия: до 01.04.2026г.
// 
// Примечание: При реверсивном исполнении прибора или полном дублировании — цена умножается на 2.
// 
// Ключи объекта: уникальный ключ вида "тип_прибора_класс_точности_давление_ду" (string)
// Значения: объект {
//   name: string,                     // Полное наименование услуги
//   accuracy_class: string,           // Класс точности (например, "2,0% - 1,0%", "1,00%", "0,5%")
//   dn_mm: number | string,           // Диаметр условного прохода, мм (может быть диапазоном, например "25-1400")
//   pressure_mpa: string,             // Давление, МПа (диапазон или значение)
//   instrument_type: string,          // Тип прибора: "МГС", "ВННИР", "ТFG", "имитационная"
//   location: string,                 // Место проведения: "на заводе изготовителе", "во ВНИИР", "на ГРП"
//   price_rub: number                 // Цена с НДС 22%
// }
// ============================================================================

const calibrationServices = {
  // ========================
  // КАЛИБРОВКА НА ЗАВОДЕ ИЗГОТОВИТЕЛЕ (МГС)
  // ========================
  "MGS_2.0-1.0_1.6_50": {
    name: "Калибровка на воздухе, атмосферном давлении (МГС) Dn050, 1,6МПа , 2,0% - 1,0% (Г)",
    accuracy_class: "2,0% - 1,0%",
    dn_mm: 50,
    pressure_mpa: "1,6",
    instrument_type: "МГС",
    location: "на заводе изготовителе",
    price_rub: 17561
  },
  "MGS_2.0-1.0_1.6_65": {
    name: "Калибровка на воздухе, атмосферном давлении (МГС) Dn065, 1,6МПа , 2,0% - 1,0% (Г)",
    accuracy_class: "2,0% - 1,0%",
    dn_mm: 65,
    pressure_mpa: "1,6",
    instrument_type: "МГС",
    location: "на заводе изготовителе",
    price_rub: 17561
  },
  "MGS_2.0-1.0_1.6_80": {
    name: "Калибровка на воздухе, атмосферном давлении (МГС) Dn080, 1,6МПа , 2,0% - 1,0% (Г)",
    accuracy_class: "2,0% - 1,0%",
    dn_mm: 80,
    pressure_mpa: "1,6",
    instrument_type: "МГС",
    location: "на заводе изготовителе",
    price_rub: 17561
  },
  "MGS_2.0-1.0_1.6_100": {
    name: "Калибровка на воздухе, атмосферном давлении (МГС) Dn100, 1,6МПа , 2,0% - 1,0% (Г)",
    accuracy_class: "2,0% - 1,0%",
    dn_mm: 100,
    pressure_mpa: "1,6",
    instrument_type: "МГС",
    location: "на заводе изготовителе",
    price_rub: 17561
  },
  "MGS_2.0-1.0_1.6_125": {
    name: "Калибровка на воздухе, атмосферном давлении (МГС) Dn125, 1,6МПа , 2,0% - 1,0% (Г)",
    accuracy_class: "2,0% - 1,0%",
    dn_mm: 125,
    pressure_mpa: "1,6",
    instrument_type: "МГС",
    location: "на заводе изготовителе",
    price_rub: 17561
  },
  "MGS_2.0-1.0_1.6_150": {
    name: "Калибровка на воздухе, атмосферном давлении (МГС) Dn150, 1,6МПа , 2,0% - 1,0% (Г)",
    accuracy_class: "2,0% - 1,0%",
    dn_mm: 150,
    pressure_mpa: "1,6",
    instrument_type: "МГС",
    location: "на заводе изготовителе",
    price_rub: 17561
  },
  "MGS_2.0-1.0_6.3_50": {
    name: "Калибровка на воздухе, атмосферном давлении (МГС) Dn050, 6,3МПа , 2,0% - 1,0% (Г)",
    accuracy_class: "2,0% - 1,0%",
    dn_mm: 50,
    pressure_mpa: "6,3",
    instrument_type: "МГС",
    location: "на заводе изготовителе",
    price_rub: 17561
  },
  "MGS_2.0-1.0_6.3_65": {
    name: "Калибровка на воздухе, атмосферном давлении (МГС) Dn065, 6,3МПа , 2,0% - 1,0% (Г)",
    accuracy_class: "2,0% - 1,0%",
    dn_mm: 65,
    pressure_mpa: "6,3",
    instrument_type: "МГС",
    location: "на заводе изготовителе",
    price_rub: 17561
  },
  "MGS_2.0-1.0_6.3_80": {
    name: "Калибровка на воздухе, атмосферном давлении (МГС) Dn080, 6,3МПа , 2,0% - 1,0% (Г)",
    accuracy_class: "2,0% - 1,0%",
    dn_mm: 80,
    pressure_mpa: "6,3",
    instrument_type: "МГС",
    location: "на заводе изготовителе",
    price_rub: 17561
  },
  "MGS_2.0-1.0_6.3_100": {
    name: "Калибровка на воздухе, атмосферном давлении (МГС) Dn100, 6,3МПа , 2,0% - 1,0% (Г)",
    accuracy_class: "2,0% - 1,0%",
    dn_mm: 100,
    pressure_mpa: "6,3",
    instrument_type: "МГС",
    location: "на заводе изготовителе",
    price_rub: 17561
  },
  "MGS_2.0-1.0_6.3_125": {
    name: "Калибровка на воздухе, атмосферном давлении (МГС) Dn125, 6,3МПа , 2,0% - 1,0% (Г)",
    accuracy_class: "2,0% - 1,0%",
    dn_mm: 125,
    pressure_mpa: "6,3",
    instrument_type: "МГС",
    location: "на заводе изготовителе",
    price_rub: 17561
  },
  "MGS_2.0-1.0_6.3_150": {
    name: "Калибровка на воздухе, атмосферном давлении (МГС) Dn150, 6,3МПа , 2,0% - 1,0% (Г)",
    accuracy_class: "2,0% - 1,0%",
    dn_mm: 150,
    pressure_mpa: "6,3",
    instrument_type: "МГС",
    location: "на заводе изготовителе",
    price_rub: 17561
  },
  "MGS_2.0-1.0_10_50": {
    name: "Калибровка на воздухе, атмосферном давлении (МГС) Dn050, 10МПа , 2,0% - 1,0% (Г)",
    accuracy_class: "2,0% - 1,0%",
    dn_mm: 50,
    pressure_mpa: "10",
    instrument_type: "МГС",
    location: "на заводе изготовителе",
    price_rub: 17561
  },
  "MGS_2.0-1.0_10_65": {
    name: "Калибровка на воздухе, атмосферном давлении (МГС) Dn065, 10МПа , 2,0% - 1,0% (Г)",
    accuracy_class: "2,0% - 1,0%",
    dn_mm: 65,
    pressure_mpa: "10",
    instrument_type: "МГС",
    location: "на заводе изготовителе",
    price_rub: 17561
  },
  "MGS_2.0-1.0_10_80": {
    name: "Калибровка на воздухе, атмосферном давлении (МГС) Dn080, 10МПа , 2,0% - 1,0% (Г)",
    accuracy_class: "2,0% - 1,0%",
    dn_mm: 80,
    pressure_mpa: "10",
    instrument_type: "МГС",
    location: "на заводе изготовителе",
    price_rub: 17561
  },
  "MGS_2.0-1.0_10_100": {
    name: "Калибровка на воздухе, атмосферном давлении (МГС) Dn100, 10МПа , 2,0% - 1,0% (Г)",
    accuracy_class: "2,0% - 1,0%",
    dn_mm: 100,
    pressure_mpa: "10",
    instrument_type: "МГС",
    location: "на заводе изготовителе",
    price_rub: 17561
  },
  "MGS_2.0-1.0_10_125": {
    name: "Калибровка на воздухе, атмосферном давлении (МГС) Dn125, 10МПа , 2,0% - 1,0% (Г)",
    accuracy_class: "2,0% - 1,0%",
    dn_mm: 125,
    pressure_mpa: "10",
    instrument_type: "МГС",
    location: "на заводе изготовителе",
    price_rub: 17561
  },
  "MGS_2.0-1.0_10_150": {
    name: "Калибровка на воздухе, атмосферном давлении (МГС) Dn150, 10МПа , 2,0% - 1,0% (Г)",
    accuracy_class: "2,0% - 1,0%",
    dn_mm: 150,
    pressure_mpa: "10",
    instrument_type: "МГС",
    location: "на заводе изготовителе",
    price_rub: 17561
  },
  "MGS_2.0-1.0_16_50": {
    name: "Калибровка на воздухе, атмосферном давлении (МГС) Dn050, 16МПа , 2,0% - 1,0% (Г)",
    accuracy_class: "2,0% - 1,0%",
    dn_mm: 50,
    pressure_mpa: "16",
    instrument_type: "МГС",
    location: "на заводе изготовителе",
    price_rub: 17561
  },
  "MGS_2.0-1.0_16_65": {
    name: "Калибровка на воздухе, атмосферном давлении (МГС) Dn065, 16МПа , 2,0% - 1,0% (Г)",
    accuracy_class: "2,0% - 1,0%",
    dn_mm: 65,
    pressure_mpa: "16",
    instrument_type: "МГС",
    location: "на заводе изготовителе",
    price_rub: 17561
  },
  "MGS_2.0-1.0_16_80": {
    name: "Калибровка на воздухе, атмосферном давлении (МГС) Dn080, 16МПа , 2,0% - 1,0% (Г)",
    accuracy_class: "2,0% - 1,0%",
    dn_mm: 80,
    pressure_mpa: "16",
    instrument_type: "МГС",
    location: "на заводе изготовителе",
    price_rub: 17561
  },
  "MGS_2.0-1.0_16_100": {
    name: "Калибровка на воздухе, атмосферном давлении (МГС) Dn100, 16МПа , 2,0% - 1,0% (Г)",
    accuracy_class: "2,0% - 1,0%",
    dn_mm: 100,
    pressure_mpa: "16",
    instrument_type: "МГС",
    location: "на заводе изготовителе",
    price_rub: 17561
  },
  "MGS_2.0-1.0_16_125": {
    name: "Калибровка на воздухе, атмосферном давлении (МГС) Dn125, 16МПа , 2,0% - 1,0% (Г)",
    accuracy_class: "2,0% - 1,0%",
    dn_mm: 125,
    pressure_mpa: "16",
    instrument_type: "МГС",
    location: "на заводе изготовителе",
    price_rub: 17561
  },
  "MGS_2.0-1.0_16_150": {
    name: "Калибровка на воздухе, атмосферном давлении (МГС) Dn150, 16МПа , 2,0% - 1,0% (Г)",
    accuracy_class: "2,0% - 1,0%",
    dn_mm: 150,
    pressure_mpa: "16",
    instrument_type: "МГС",
    location: "на заводе изготовителе",
    price_rub: 17561
  },
  "MGS_2.0-1.0_25_50": {
    name: "Калибровка на воздухе, атмосферном давлении (МГС) Dn050, 25МПа , 2,0% - 1,0% (Г)",
    accuracy_class: "2,0% - 1,0%",
    dn_mm: 50,
    pressure_mpa: "25",
    instrument_type: "МГС",
    location: "на заводе изготовителе",
    price_rub: 17561
  },
  "MGS_2.0-1.0_25_65": {
    name: "Калибровка на воздухе, атмосферном давлении (МГС) Dn065, 25МПа , 2,0% - 1,0% (Г)",
    accuracy_class: "2,0% - 1,0%",
    dn_mm: 65,
    pressure_mpa: "25",
    instrument_type: "МГС",
    location: "на заводе изготовителе",
    price_rub: 17561
  },
  "MGS_2.0-1.0_25_80": {
    name: "Калибровка на воздухе, атмосферном давлении (МГС) Dn080, 25МПа , 2,0% - 1,0% (Г)",
    accuracy_class: "2,0% - 1,0%",
    dn_mm: 80,
    pressure_mpa: "25",
    instrument_type: "МГС",
    location: "на заводе изготовителе",
    price_rub: 17561
  },
  "MGS_2.0-1.0_25_100": {
    name: "Калибровка на воздухе, атмосферном давлении (МГС) Dn100, 25МПа , 2,0% - 1,0% (Г)",
    accuracy_class: "2,0% - 1,0%",
    dn_mm: 100,
    pressure_mpa: "25",
    instrument_type: "МГС",
    location: "на заводе изготовителе",
    price_rub: 17561
  },
  "MGS_2.0-1.0_25_125": {
    name: "Калибровка на воздухе, атмосферном давлении (МГС) Dn125, 25МПа , 2,0% - 1,0% (Г)",
    accuracy_class: "2,0% - 1,0%",
    dn_mm: 125,
    pressure_mpa: "25",
    instrument_type: "МГС",
    location: "на заводе изготовителе",
    price_rub: 17561
  },
  "MGS_2.0-1.0_25_150": {
    name: "Калибровка на воздухе, атмосферном давлении (МГС) Dn150, 25МПа , 2,0% - 1,0% (Г)",
    accuracy_class: "2,0% - 1,0%",
    dn_mm: 150,
    pressure_mpa: "25",
    instrument_type: "МГС",
    location: "на заводе изготовителе",
    price_rub: 17561
  },
  "MGS_1.0_1.6_50": {
    name: "Калибровка на воздухе, атмосферном давлении (МГС) Dn050, 1,6МПа , 1% (В)",
    accuracy_class: "1,00%",
    dn_mm: 50,
    pressure_mpa: "1,6",
    instrument_type: "МГС",
    location: "на заводе изготовителе",
    price_rub: 17561
  },
  "MGS_1.0_1.6_65": {
    name: "Калибровка на воздухе, атмосферном давлении (МГС) Dn065, 1,6МПа , 1% (В)",
    accuracy_class: "1,00%",
    dn_mm: 65,
    pressure_mpa: "1,6",
    instrument_type: "МГС",
    location: "на заводе изготовителе",
    price_rub: 17561
  },
  "MGS_1.0_1.6_80": {
    name: "Калибровка на воздухе, атмосферном давлении (МГС) Dn080, 1,6МПа , 1% (В)",
    accuracy_class: "1,00%",
    dn_mm: 80,
    pressure_mpa: "1,6",
    instrument_type: "МГС",
    location: "на заводе изготовителе",
    price_rub: 17561
  },
  "MGS_1.0_1.6_100": {
    name: "Калибровка на воздухе, атмосферном давлении (МГС) Dn100, 1,6МПа , 1% (В)",
    accuracy_class: "1,00%",
    dn_mm: 100,
    pressure_mpa: "1,6",
    instrument_type: "МГС",
    location: "на заводе изготовителе",
    price_rub: 17561
  },
  "MGS_1.0_1.6_125": {
    name: "Калибровка на воздухе, атмосферном давлении (МГС) Dn125, 1,6МПа , 1% (В)",
    accuracy_class: "1,00%",
    dn_mm: 125,
    pressure_mpa: "1,6",
    instrument_type: "МГС",
    location: "на заводе изготовителе",
    price_rub: 17561
  },
  "MGS_1.0_1.6_150": {
    name: "Калибровка на воздухе, атмосферном давлении (МГС) Dn150, 1,6МПа , 1% (В)",
    accuracy_class: "1,00%",
    dn_mm: 150,
    pressure_mpa: "1,6",
    instrument_type: "МГС",
    location: "на заводе изготовителе",
    price_rub: 17561
  },
  "MGS_1.0_6.3_50": {
    name: "Калибровка на воздухе, атмосферном давлении (МГС) Dn050, 6,3МПа , 1% (В)",
    accuracy_class: "1,00%",
    dn_mm: 50,
    pressure_mpa: "6,3",
    instrument_type: "МГС",
    location: "на заводе изготовителе",
    price_rub: 17561
  },
  "MGS_1.0_6.3_65": {
    name: "Калибровка на воздухе, атмосферном давлении (МГС) Dn065, 6,3МПа , 1% (В)",
    accuracy_class: "1,00%",
    dn_mm: 65,
    pressure_mpa: "6,3",
    instrument_type: "МГС",
    location: "на заводе изготовителе",
    price_rub: 17561
  },
  "MGS_1.0_6.3_80": {
    name: "Калибровка на воздухе, атмосферном давлении (МГС) Dn080, 6,3МПа , 1% (В)",
    accuracy_class: "1,00%",
    dn_mm: 80,
    pressure_mpa: "6,3",
    instrument_type: "МГС",
    location: "на заводе изготовителе",
    price_rub: 17561
  },
  "MGS_1.0_6.3_100": {
    name: "Калибровка на воздухе, атмосферном давлении (МГС) Dn100, 6,3МПа , 1% (В)",
    accuracy_class: "1,00%",
    dn_mm: 100,
    pressure_mpa: "6,3",
    instrument_type: "МГС",
    location: "на заводе изготовителе",
    price_rub: 17561
  },
  "MGS_1.0_6.3_125": {
    name: "Калибровка на воздухе, атмосферном давлении (МГС) Dn125, 6,3МПа , 1% (В)",
    accuracy_class: "1,00%",
    dn_mm: 125,
    pressure_mpa: "6,3",
    instrument_type: "МГС",
    location: "на заводе изготовителе",
    price_rub: 17561
  },
  "MGS_1.0_6.3_150": {
    name: "Калибровка на воздухе, атмосферном давлении (МГС) Dn150, 6,3МПа , 1% (В)",
    accuracy_class: "1,00%",
    dn_mm: 150,
    pressure_mpa: "6,3",
    instrument_type: "МГС",
    location: "на заводе изготовителе",
    price_rub: 17561
  },
  "MGS_1.0_10_50": {
    name: "Калибровка на воздухе, атмосферном давлении (МГС) Dn050, 10МПа , 1% (В)",
    accuracy_class: "1,00%",
    dn_mm: 50,
    pressure_mpa: "10",
    instrument_type: "МГС",
    location: "на заводе изготовителе",
    price_rub: 17561
  },
  "MGS_1.0_10_65": {
    name: "Калибровка на воздухе, атмосферном давлении (МГС) Dn065, 10МПа , 1% (В)",
    accuracy_class: "1,00%",
    dn_mm: 65,
    pressure_mpa: "10",
    instrument_type: "МГС",
    location: "на заводе изготовителе",
    price_rub: 17561
  },
  "MGS_1.0_10_80": {
    name: "Калибровка на воздухе, атмосферном давлении (МГС) Dn080, 10МПа , 1% (В)",
    accuracy_class: "1,00%",
    dn_mm: 80,
    pressure_mpa: "10",
    instrument_type: "МГС",
    location: "на заводе изготовителе",
    price_rub: 17561
  },
  "MGS_1.0_10_100": {
    name: "Калибровка на воздухе, атмосферном давлении (МГС) Dn100, 10МПа , 1% (В)",
    accuracy_class: "1,00%",
    dn_mm: 100,
    pressure_mpa: "10",
    instrument_type: "МГС",
    location: "на заводе изготовителе",
    price_rub: 17561
  },
  "MGS_1.0_10_125": {
    name: "Калибровка на воздухе, атмосферном давлении (МГС) Dn125, 10МПа , 1% (В)",
    accuracy_class: "1,00%",
    dn_mm: 125,
    pressure_mpa: "10",
    instrument_type: "МГС",
    location: "на заводе изготовителе",
    price_rub: 17561
  },
  "MGS_1.0_10_150": {
    name: "Калибровка на воздухе, атмосферном давлении (МГС) Dn150, 10МПа , 1% (В)",
    accuracy_class: "1,00%",
    dn_mm: 150,
    pressure_mpa: "10",
    instrument_type: "МГС",
    location: "на заводе изготовителе",
    price_rub: 17561
  },
  "MGS_1.0_16_50": {
    name: "Калибровка на воздухе, атмосферном давлении (МГС) Dn050, 16МПа , 1% (В)",
    accuracy_class: "1,00%",
    dn_mm: 50,
    pressure_mpa: "16",
    instrument_type: "МГС",
    location: "на заводе изготовителе",
    price_rub: 17561
  },
  "MGS_1.0_16_65": {
    name: "Калибровка на воздухе, атмосферном давлении (МГС) Dn065, 16МПа , 1% (В)",
    accuracy_class: "1,00%",
    dn_mm: 65,
    pressure_mpa: "16",
    instrument_type: "МГС",
    location: "на заводе изготовителе",
    price_rub: 17561
  },
  "MGS_1.0_16_80": {
    name: "Калибровка на воздухе, атмосферном давлении (МГС) Dn080, 16МПа , 1% (В)",
    accuracy_class: "1,00%",
    dn_mm: 80,
    pressure_mpa: "16",
    instrument_type: "МГС",
    location: "на заводе изготовителе",
    price_rub: 17561
  },
  "MGS_1.0_16_100": {
    name: "Калибровка на воздухе, атмосферном давлении (МГС) Dn100, 16МПа , 1% (В)",
    accuracy_class: "1,00%",
    dn_mm: 100,
    pressure_mpa: "16",
    instrument_type: "МГС",
    location: "на заводе изготовителе",
    price_rub: 17561
  },
  "MGS_1.0_16_125": {
    name: "Калибровка на воздухе, атмосферном давлении (МГС) Dn125, 16МПа , 1% (В)",
    accuracy_class: "1,00%",
    dn_mm: 125,
    pressure_mpa: "16",
    instrument_type: "МГС",
    location: "на заводе изготовителе",
    price_rub: 17561
  },
  "MGS_1.0_16_150": {
    name: "Калибровка на воздухе, атмосферном давлении (МГС) Dn150, 16МПа , 1% (В)",
    accuracy_class: "1,00%",
    dn_mm: 150,
    pressure_mpa: "16",
    instrument_type: "МГС",
    location: "на заводе изготовителе",
    price_rub: 17561
  },
  "MGS_1.0_25_50": {
    name: "Калибровка на воздухе, атмосферном давлении (МГС) Dn050, 25МПа , 1% (В)",
    accuracy_class: "1,00%",
    dn_mm: 50,
    pressure_mpa: "25",
    instrument_type: "МГС",
    location: "на заводе изготовителе",
    price_rub: 17561
  },
  "MGS_1.0_25_65": {
    name: "Калибровка на воздухе, атмосферном давлении (МГС) Dn065, 25МПа , 1% (В)",
    accuracy_class: "1,00%",
    dn_mm: 65,
    pressure_mpa: "25",
    instrument_type: "МГС",
    location: "на заводе изготовителе",
    price_rub: 17561
  },
  "MGS_1.0_25_80": {
    name: "Калибровка на воздухе, атмосферном давлении (МГС) Dn080, 25МПа , 1% (В)",
    accuracy_class: "1,00%",
    dn_mm: 80,
    pressure_mpa: "25",
    instrument_type: "МГС",
    location: "на заводе изготовителе",
    price_rub: 17561
  },
  "MGS_1.0_25_100": {
    name: "Калибровка на воздухе, атмосферном давлении (МГС) Dn100, 25МПа , 1% (В)",
    accuracy_class: "1,00%",
    dn_mm: 100,
    pressure_mpa: "25",
    instrument_type: "МГС",
    location: "на заводе изготовителе",
    price_rub: 17561
  },
  "MGS_1.0_25_125": {
    name: "Калибровка на воздухе, атмосферном давлении (МГС) Dn125, 25МПа , 1% (В)",
    accuracy_class: "1,00%",
    dn_mm: 125,
    pressure_mpa: "25",
    instrument_type: "МГС",
    location: "на заводе изготовителе",
    price_rub: 17561
  },
  "MGS_1.0_25_150": {
    name: "Калибровка на воздухе, атмосферном давлении (МГС) Dn150, 25МПа , 1% (В)",
    accuracy_class: "1,00%",
    dn_mm: 150,
    pressure_mpa: "25",
    instrument_type: "МГС",
    location: "на заводе изготовителе",
    price_rub: 17561
  },
  "MGS_0.5_1.6_50": {
    name: "Калибровка на воздухе, атмосферном давлении (МГС) Dn050, 1,6МПа , 0,5% (Б)",
    accuracy_class: "0,5%",
    dn_mm: 50,
    pressure_mpa: "1,6",
    instrument_type: "МГС",
    location: "на заводе изготовителе",
    price_rub: 32839
  },
  "MGS_0.5_1.6_65": {
    name: "Калибровка на воздухе, атмосферном давлении (МГС) Dn065, 1,6МПа , 0,5% (Б)",
    accuracy_class: "0,5%",
    dn_mm: 65,
    pressure_mpa: "1,6",
    instrument_type: "МГС",
    location: "на заводе изготовителе",
    price_rub: 32839
  },
  "MGS_0.5_1.6_80": {
    name: "Калибровка на воздухе, атмосферном давлении (МГС) Dn080, 1,6МПа , 0,5% (Б) и (А)",
    accuracy_class: "0,5%",
    dn_mm: 80,
    pressure_mpa: "1,6",
    instrument_type: "МГС",
    location: "на заводе изготовителе",
    price_rub: 32839
  },
  "MGS_0.5_1.6_100": {
    name: "Калибровка на воздухе, атмосферном давлении (МГС) Dn100, 1,6МПа , 0,5% (Б) и (А)",
    accuracy_class: "0,5%",
    dn_mm: 100,
    pressure_mpa: "1,6",
    instrument_type: "МГС",
    location: "на заводе изготовителе",
    price_rub: 32839
  },
  "MGS_0.5_1.6_125": {
    name: "Калибровка на воздухе, атмосферном давлении (МГС) Dn125, 1,6МПа , 0,5% (Б)",
    accuracy_class: "0,5%",
    dn_mm: 125,
    pressure_mpa: "1,6",
    instrument_type: "МГС",
    location: "на заводе изготовителе",
    price_rub: 32839
  },
  "MGS_0.5_1.6_150": {
    name: "Калибровка на воздухе, атмосферном давлении (МГС) Dn150, 1,6МПа , 0,5% (Б) и (А)",
    accuracy_class: "0,5%",
    dn_mm: 150,
    pressure_mpa: "1,6",
    instrument_type: "МГС",
    location: "на заводе изготовителе",
    price_rub: 32839
  },
  "MGS_0.5_6.3_50": {
    name: "Калибровка на воздухе, атмосферном давлении (МГС) Dn050, 6,3МПа , 0,5% (Б) и (А)",
    accuracy_class: "0,5%",
    dn_mm: 50,
    pressure_mpa: "6,3",
    instrument_type: "МГС",
    location: "на заводе изготовителе",
    price_rub: 32839
  },
  "MGS_0.5_6.3_65": {
    name: "Калибровка на воздухе, атмосферном давлении (МГС) Dn065, 6,3МПа , 0,5% (Б)",
    accuracy_class: "0,5%",
    dn_mm: 65,
    pressure_mpa: "6,3",
    instrument_type: "МГС",
    location: "на заводе изготовителе",
    price_rub: 32839
  },
  "MGS_0.5_6.3_80": {
    name: "Калибровка на воздухе, атмосферном давлении (МГС) Dn080, 6,3МПа , 0,5% (Б) и (А)",
    accuracy_class: "0,5%",
    dn_mm: 80,
    pressure_mpa: "6,3",
    instrument_type: "МГС",
    location: "на заводе изготовителе",
    price_rub: 32839
  },
  "MGS_0.5_6.3_100": {
    name: "Калибровка на воздухе, атмосферном давлении (МГС) Dn100, 6,3МПа , 0,5% (Б) и (А)",
    accuracy_class: "0,5%",
    dn_mm: 100,
    pressure_mpa: "6,3",
    instrument_type: "МГС",
    location: "на заводе изготовителе",
    price_rub: 32839
  },
  "MGS_0.5_6.3_125": {
    name: "Калибровка на воздухе, атмосферном давлении (МГС) Dn125, 6,3МПа , 0,5% (Б)",
    accuracy_class: "0,5%",
    dn_mm: 125,
    pressure_mpa: "6,3",
    instrument_type: "МГС",
    location: "на заводе изготовителе",
    price_rub: 32839
  },
  "MGS_0.5_6.3_150": {
    name: "Калибровка на воздухе, атмосферном давлении (МГС) Dn150, 6,3МПа , 0,5% (Б)",
    accuracy_class: "0,5%",
    dn_mm: 150,
    pressure_mpa: "6,3",
    instrument_type: "МГС",
    location: "на заводе изготовителе",
    price_rub: 32839
  },
  "MGS_0.5_10_50": {
    name: "Калибровка на воздухе, атмосферном давлении (МГС) Dn050, 10МПа , 0,5% (Б) и (А)",
    accuracy_class: "0,5%",
    dn_mm: 50,
    pressure_mpa: "10",
    instrument_type: "МГС",
    location: "на заводе изготовителе",
    price_rub: 32839
  },
  "MGS_0.5_10_65": {
    name: "Калибровка на воздухе, атмосферном давлении (МГС) Dn065, 10МПа , 0,5% (Б)",
    accuracy_class: "0,5%",
    dn_mm: 65,
    pressure_mpa: "10",
    instrument_type: "МГС",
    location: "на заводе изготовителе",
    price_rub: 32839
  },
  "MGS_0.5_10_80": {
    name: "Калибровка на воздухе, атмосферном давлении (МГС) Dn080, 10МПа , 0,5% (Б) и (А)",
    accuracy_class: "0,5%",
    dn_mm: 80,
    pressure_mpa: "10",
    instrument_type: "МГС",
    location: "на заводе изготовителе",
    price_rub: 32839
  },
  "MGS_0.5_10_100": {
    name: "Калибровка на воздухе, атмосферном давлении (МГС) Dn100, 10МПа , 0,5% (Б) и (А)",
    accuracy_class: "0,5%",
    dn_mm: 100,
    pressure_mpa: "10",
    instrument_type: "МГС",
    location: "на заводе изготовителе",
    price_rub: 32839
  },
  "MGS_0.5_10_125": {
    name: "Калибровка на воздухе, атмосферном давлении (МГС) Dn125, 10МПа , 0,5% (Б)",
    accuracy_class: "0,5%",
    dn_mm: 125,
    pressure_mpa: "10",
    instrument_type: "МГС",
    location: "на заводе изготовителе",
    price_rub: 32839
  },
  "MGS_0.5_10_150": {
    name: "Калибровка на воздухе, атмосферном давлении (МГС) Dn150, 10МПа , 0,5% (Б)",
    accuracy_class: "0,5%",
    dn_mm: 150,
    pressure_mpa: "10",
    instrument_type: "МГС",
    location: "на заводе изготовителе",
    price_rub: 32839
  },
  "MGS_0.5_16_50": {
    name: "Калибровка на воздухе, атмосферном давлении (МГС) Dn050, 16МПа , 0,5% (Б)",
    accuracy_class: "0,5%",
    dn_mm: 50,
    pressure_mpa: "16",
    instrument_type: "МГС",
    location: "на заводе изготовителе",
    price_rub: 32839
  },
  "MGS_0.5_16_65": {
    name: "Калибровка на воздухе, атмосферном давлении (МГС) Dn065, 16МПа , 0,5% (Б)",
    accuracy_class: "0,5%",
    dn_mm: 65,
    pressure_mpa: "16",
    instrument_type: "МГС",
    location: "на заводе изготовителе",
    price_rub: 32839
  },
  "MGS_0.5_16_80": {
    name: "Калибровка на воздухе, атмосферном давлении (МГС) Dn080, 16МПа , 0,5% (Б)",
    accuracy_class: "0,5%",
    dn_mm: 80,
    pressure_mpa: "16",
    instrument_type: "МГС",
    location: "на заводе изготовителе",
    price_rub: 32839
  },
  "MGS_0.5_16_100": {
    name: "Калибровка на воздухе, атмосферном давлении (МГС) Dn100, 16МПа , 0,5% (Б)",
    accuracy_class: "0,5%",
    dn_mm: 100,
    pressure_mpa: "16",
    instrument_type: "МГС",
    location: "на заводе изготовителе",
    price_rub: 32839
  },
  "MGS_0.5_16_125": {
    name: "Калибровка на воздухе, атмосферном давлении (МГС) Dn125, 16МПа , 0,5% (Б)",
    accuracy_class: "0,5%",
    dn_mm: 125,
    pressure_mpa: "16",
    instrument_type: "МГС",
    location: "на заводе изготовителе",
    price_rub: 32839
  },
  "MGS_0.5_16_150": {
    name: "Калибровка на воздухе, атмосферном давлении (МГС) Dn150, 16МПа , 0,5% (Б)",
    accuracy_class: "0,5%",
    dn_mm: 150,
    pressure_mpa: "16",
    instrument_type: "МГС",
    location: "на заводе изготовителе",
    price_rub: 32839
  },
  "MGS_0.5_25_50": {
    name: "Калибровка на воздухе, атмосферном давлении (МГС) Dn050, 25МПа , 0,5% (Б)",
    accuracy_class: "0,5%",
    dn_mm: 50,
    pressure_mpa: "25",
    instrument_type: "МГС",
    location: "на заводе изготовителе",
    price_rub: 32839
  },
  "MGS_0.5_25_65": {
    name: "Калибровка на воздухе, атмосферном давлении (МГС) Dn065, 25МПа , 0,5% (Б)",
    accuracy_class: "0,5%",
    dn_mm: 65,
    pressure_mpa: "25",
    instrument_type: "МГС",
    location: "на заводе изготовителе",
    price_rub: 32839
  },
  "MGS_0.5_25_80": {
    name: "Калибровка на воздухе, атмосферном давлении (МГС) Dn080, 25МПа , 0,5% (Б)",
    accuracy_class: "0,5%",
    dn_mm: 80,
    pressure_mpa: "25",
    instrument_type: "МГС",
    location: "на заводе изготовителе",
    price_rub: 32839
  },
  "MGS_0.5_25_100": {
    name: "Калибровка на воздухе, атмосферном давлении (МГС) Dn100, 25МПа , 0,5% (Б)",
    accuracy_class: "0,5%",
    dn_mm: 100,
    pressure_mpa: "25",
    instrument_type: "МГС",
    location: "на заводе изготовителе",
    price_rub: 32839
  },
  "MGS_0.5_25_125": {
    name: "Калибровка на воздухе, атмосферном давлении (МГС) Dn125, 25МПа , 0,5% (Б)",
    accuracy_class: "0,5%",
    dn_mm: 125,
    pressure_mpa: "25",
    instrument_type: "МГС",
    location: "на заводе изготовителе",
    price_rub: 32839
  },
  "MGS_0.5_25_150": {
    name: "Калибровка на воздухе, атмосферном давлении (МГС) Dn150, 25МПа , 0,5% (Б)",
    accuracy_class: "0,5%",
    dn_mm: 150,
    pressure_mpa: "25",
    instrument_type: "МГС",
    location: "на заводе изготовителе",
    price_rub: 32839
  },

  // ========================
  // КАЛИБРОВКА РАСХОДОМЕРОВ TFG (НА ПОВЕРОЧНОЙ УСТАНОВКЕ СПУ-6(Воздух))
  // ========================
  "TFG_1.0-2.5_1.6-32_25-1400": {
    name: "Калибровка расходомеров TFG проводится на поверочной установке СПУ-6(Воздух)",
    accuracy_class: "1,0% - 2,5%",
    dn_mm: "25-1400",
    pressure_mpa: "1,6-32",
    instrument_type: "ТFG",
    location: "на поверочной установке СПУ-6(Воздух)",
    price_rub: 17561
  },

  // ========================
  // КАЛИБРОВКА НА ГРП (ТFG)
  // ========================
  "TFG_GRP_2.0-1.0_1.6-25_50": {
    name: "Калибровка на газе (ГРП) (эксплуатац.давление 0,1МПа ≤Pраб≤50,6МПа) Dn 050, 1,6МПа-25МПа , 2,0% - 1,0% (Г)",
    accuracy_class: "2,0% - 1,0%",
    dn_mm: 50,
    pressure_mpa: "1,6-25",
    instrument_type: "ТFG",
    location: "на ГРП",
    price_rub: 17561
  },
  "TFG_GRP_2.0-1.0_1.6-25_65": {
    name: "Калибровка на газе (ГРП) (эксплуатац.давление 0,1МПа ≤Pраб≤50,6МПа) Dn 065, 1,6МПа-25МПа , 2,0% - 1,0% (Г)",
    accuracy_class: "2,0% - 1,0%",
    dn_mm: 65,
    pressure_mpa: "1,6-25",
    instrument_type: "ТFG",
    location: "на ГРП",
    price_rub: 17561
  },
  "TFG_GRP_2.0-1.0_1.6-25_80": {
    name: "Калибровка на газе (ГРП) (эксплуатац.давление 0,1МПа ≤Pраб≤50,6МПа) Dn 080, 1,6МПа-25МПа , 2,0% - 1,0% (Г)",
    accuracy_class: "2,0% - 1,0%",
    dn_mm: 80,
    pressure_mpa: "1,6-25",
    instrument_type: "ТFG",
    location: "на ГРП",
    price_rub: 17561
  },
  "TFG_GRP_2.0-1.0_1.6-25_100": {
    name: "Калибровка на газе (ГРП) (эксплуатац.давление 0,1МПа ≤Pраб≤50,6МПа) Dn 100, 1,6МПа-25МПа , 2,0% - 1,0% (Г)",
    accuracy_class: "2,0% - 1,0%",
    dn_mm: 100,
    pressure_mpa: "1,6-25",
    instrument_type: "ТFG",
    location: "на ГРП",
    price_rub: 17561
  },
  "TFG_GRP_2.0-1.0_1.6-25_125": {
    name: "Калибровка на газе (ГРП) (эксплуатац.давление 0,1МПа ≤Pраб≤50,6МПа) Dn 125, 1,6МПа-25МПа , 2,0% - 1,0% (Г)",
    accuracy_class: "2,0% - 1,0%",
    dn_mm: 125,
    pressure_mpa: "1,6-25",
    instrument_type: "ТFG",
    location: "на ГРП",
    price_rub: 17561
  },
  "TFG_GRP_2.0-1.0_1.6-25_150": {
    name: "Калибровка на газе (ГРП) (эксплуатац.давление 0,1МПа ≤Pраб≤50,6МПа) Dn 150, 1,6МПа-25МПа , 2,0% - 1,0% (Г)",
    accuracy_class: "2,0% - 1,0%",
    dn_mm: 150,
    pressure_mpa: "1,6-25",
    instrument_type: "ТFG",
    location: "на ГРП",
    price_rub: 17561
  },
  "TFG_GRP_2.0-1.0_1.6-25_200": {
    name: "Калибровка на газе (ГРП) (эксплуатац.давление 0,1МПа ≤Pраб≤50,6МПа) Dn 200, 1,6МПа-25МПа , 2,0% - 1,0% (Г)",
    accuracy_class: "2,0% - 1,0%",
    dn_mm: 200,
    pressure_mpa: "1,6-25",
    instrument_type: "ТFG",
    location: "на ГРП",
    price_rub: 17561
  },
  "TFG_GRP_1.0_1.6-25_50": {
    name: "Калибровка на газе (ГРП) (эксплуатац.давление 0,1МПа ≤Pраб≤50,6МПа) Dn 050, 1,6МПа-25МПа , 1% (В)",
    accuracy_class: "1,0%",
    dn_mm: 50,
    pressure_mpa: "1,6-25",
    instrument_type: "ТFG",
    location: "на ГРП",
    price_rub: 17561
  },
  "TFG_GRP_1.0_1.6-25_65": {
    name: "Калибровка на газе (ГРП) (эксплуатац.давление 0,1МПа ≤Pраб≤50,6МПа) Dn 065, 1,6МПа-25МПа , 1% (В)",
    accuracy_class: "1,0%",
    dn_mm: 65,
    pressure_mpa: "1,6-25",
    instrument_type: "ТFG",
    location: "на ГРП",
    price_rub: 17561
  },
  "TFG_GRP_1.0_1.6-25_80": {
    name: "Калибровка на газе (ГРП) (эксплуатац.давление 0,1МПа ≤Pраб≤50,6МПа) Dn 080, 1,6МПа-25МПа , 1% (В)",
    accuracy_class: "1,0%",
    dn_mm: 80,
    pressure_mpa: "1,6-25",
    instrument_type: "ТFG",
    location: "на ГРП",
    price_rub: 17561
  },
  "TFG_GRP_1.0_1.6-25_100": {
    name: "Калибровка на газе (ГРП) (эксплуатац.давление 0,1МПа ≤Pраб≤50,6МПа) Dn 100, 1,6МПа-25МПа , 1% (В)",
    accuracy_class: "1,0%",
    dn_mm: 100,
    pressure_mpa: "1,6-25",
    instrument_type: "ТFG",
    location: "на ГРП",
    price_rub: 17561
  },
  "TFG_GRP_1.0_1.6-25_125": {
    name: "Калибровка на газе (ГРП) (эксплуатац.давление 0,1МПа ≤Pраб≤50,6МПа) Dn 125, 1,6МПа-25МПа , 1% (В)",
    accuracy_class: "1,0%",
    dn_mm: 125,
    pressure_mpa: "1,6-25",
    instrument_type: "ТFG",
    location: "на ГРП",
    price_rub: 17561
  },
  "TFG_GRP_1.0_1.6-25_150": {
    name: "Калибровка на газе (ГРП) (эксплуатац.давление 0,1МПа ≤Pраб≤50,6МПа) Dn 150, 1,6МПа-25МПа , 1% (В)",
    accuracy_class: "1,0%",
    dn_mm: 150,
    pressure_mpa: "1,6-25",
    instrument_type: "ТFG",
    location: "на ГРП",
    price_rub: 17561
  },
  "TFG_GRP_1.0_1.6-25_200": {
    name: "Калибровка на газе (ГРП) (эксплуатац.давление 0,1МПа ≤Pраб≤50,6МПа) Dn 200, 1,6МПа-25МПа , 1% (В)",
    accuracy_class: "1,0%",
    dn_mm: 200,
    pressure_mpa: "1,6-25",
    instrument_type: "ТFG",
    location: "на ГРП",
    price_rub: 17561
  },
  "TFG_GRP_1.0-2.5_1.6-25_25-1400": {
    name: "Калибровка расходомеров TFG проводится на поверочной установке СПУ-ПГ-2М (природный газ)",
    accuracy_class: "1,0% - 2,5%",
    dn_mm: "25-1400",
    pressure_mpa: "1,6-25",
    instrument_type: "ТFG",
    location: "на поверочной установке СПУ-ПГ-2М (природный газ)",
    price_rub: 17561
  },

  // ========================
  // КАЛИБРОВКА ВО ВНИИР
  // ========================
  "VNIIR_2.0-1.0_1.6-25_50": {
    name: "Калибровка на воздухе, атмосферном давлении (ВНИИР) Dn050, 1,6МПа-25МПа , 2,0% - 1,0% (Г)",
    accuracy_class: "2,0% - 1,0%",
    dn_mm: 50,
    pressure_mpa: "1,6-25",
    instrument_type: "ВНИИР",
    location: "во ВНИИР",
    price_rub: 167553
  },
  "VNIIR_2.0-1.0_1.6-25_65": {
    name: "Калибровка на воздухе, атмосферном давлении (ВНИИР) Dn065, 1,6МПа-25МПа , 2,0% - 1,0% (Г)",
    accuracy_class: "2,0% - 1,0%",
    dn_mm: 65,
    pressure_mpa: "1,6-25",
    instrument_type: "ВНИИР",
    location: "во ВНИИР",
    price_rub: 167553
  },
  "VNIIR_2.0-1.0_1.6-25_80": {
    name: "Калибровка на воздухе, атмосферном давлении (ВНИИР) Dn080, 1,6МПа-25МПа , 2,0% - 1,0% (Г)",
    accuracy_class: "2,0% - 1,0%",
    dn_mm: 80,
    pressure_mpa: "1,6-25",
    instrument_type: "ВНИИР",
    location: "во ВНИИР",
    price_rub: 167553
  },
  "VNIIR_2.0-1.0_1.6-25_100": {
    name: "Калибровка на воздухе, атмосферном давлении (ВНИИР) Dn100, 1,6МПа-25МПа , 2,0% - 1,0% (Г)",
    accuracy_class: "2,0% - 1,0%",
    dn_mm: 100,
    pressure_mpa: "1,6-25",
    instrument_type: "ВНИИР",
    location: "во ВНИИР",
    price_rub: 177148
  },
  "VNIIR_2.0-1.0_1.6-25_125": {
    name: "Калибровка на воздухе, атмосферном давлении (ВНИИР) Dn125, 1,6МПа-25МПа , 2,0% - 1,0% (Г)",
    accuracy_class: "2,0% - 1,0%",
    dn_mm: 125,
    pressure_mpa: "1,6-25",
    instrument_type: "ВНИИР",
    location: "во ВНИИР",
    price_rub: 177148
  },
  "VNIIR_2.0-1.0_1.6-25_150": {
    name: "Калибровка на воздухе, атмосферном давлении (ВНИИР) Dn150, 1,6МПа-25МПа , 2,0% - 1,0% (Г)",
    accuracy_class: "2,0% - 1,0%",
    dn_mm: 150,
    pressure_mpa: "1,6-25",
    instrument_type: "ВНИИР",
    location: "во ВНИИР",
    price_rub: 177148
  },
  "VNIIR_2.0-1.0_1.6-25_200": {
    name: "Калибровка на воздухе, атмосферном давлении (ВНИИР) Dn200, 1,6МПа-25МПа , 2,0% - 1,0% (Г)",
    accuracy_class: "2,0% - 1,0%",
    dn_mm: 200,
    pressure_mpa: "1,6-25",
    instrument_type: "ВНИИР",
    location: "во ВНИИР",
    price_rub: 177148
  },
  "VNIIR_2.0-1.0_1.6-25_250": {
    name: "Калибровка на воздухе, атмосферном давлении (ВНИИР) Dn250, 1,6МПа-25МПа , 2,0% - 1,0% (Г)",
    accuracy_class: "2,0% - 1,0%",
    dn_mm: 250,
    pressure_mpa: "1,6-25",
    instrument_type: "ВНИИР",
    location: "во ВНИИР",
    price_rub: 235593
  },
  "VNIIR_2.0-1.0_1.6-25_300": {
    name: "Калибровка на воздухе, атмосферном давлении (ВНИИР) Dn300, 1,6МПа-25МПа , 2,0% - 1,0% (Г)",
    accuracy_class: "2,0% - 1,0%",
    dn_mm: 300,
    pressure_mpa: "1,6-25",
    instrument_type: "ВНИИР",
    location: "во ВНИИР",
    price_rub: 235593
  },
  "VNIIR_2.0-1.0_1.6-25_350": {
    name: "Калибровка на воздухе, атмосферном давлении (ВНИИР) Dn350, 1,6МПа-25МПа , 2,0% - 1,0% (Г)",
    accuracy_class: "2,0% - 1,0%",
    dn_mm: 350,
    pressure_mpa: "1,6-25",
    instrument_type: "ВНИИР",
    location: "во ВНИИР",
    price_rub: 289676
  },
  "VNIIR_2.0-1.0_1.6-25_400": {
    name: "Калибровка на воздухе, атмосферном давлении (ВНИИР) Dn400, 1,6МПа-25МПа , 2,0% - 1,0% (Г)",
    accuracy_class: "2,0% - 1,0%",
    dn_mm: 400,
    pressure_mpa: "1,6-25",
    instrument_type: "ВНИИР",
    location: "во ВНИИР",
    price_rub: 289676
  },
  "VNIIR_2.0-1.0_1.6-25_450": {
    name: "Калибровка на воздухе, атмосферном давлении (ВНИИР) Dn450, 1,6МПа-25МПа , 2,0% - 1,0% (Г)",
    accuracy_class: "2,0% - 1,0%",
    dn_mm: 450,
    pressure_mpa: "1,6-25",
    instrument_type: "ВНИИР",
    location: "во ВНИИР",
    price_rub: 345503
  },
  "VNIIR_2.0-1.0_1.6-25_500": {
    name: "Калибровка на воздухе, атмосферном давлении (ВНИИР) Dn500, 1,6МПа-25МПа , 2,0% - 1,0% (Г)",
    accuracy_class: "2,0% - 1,0%",
    dn_mm: 500,
    pressure_mpa: "1,6-25",
    instrument_type: "ВНИИР",
    location: "во ВНИИР",
    price_rub: 345503
  },
  "VNIIR_1.0_1.6-25_50": {
    name: "Калибровка на воздухе, атмосферном давлении (ВНИИР) Dn050, 1,6МПа-25МПа , 1% (В)",
    accuracy_class: "1%",
    dn_mm: 50,
    pressure_mpa: "1,6-25",
    instrument_type: "ВНИИР",
    location: "во ВНИИР",
    price_rub: 167553
  },
  "VNIIR_1.0_1.6-25_65": {
    name: "Калибровка на воздухе, атмосферном давлении (ВНИИР) Dn065, 1,6МПа-25МПа , 1% (В)",
    accuracy_class: "1%",
    dn_mm: 65,
    pressure_mpa: "1,6-25",
    instrument_type: "ВНИИР",
    location: "во ВНИИР",
    price_rub: 167553
  },
  "VNIIR_1.0_1.6-25_80": {
    name: "Калибровка на воздухе, атмосферном давлении (ВНИИР) Dn080, 1,6МПа-25МПа , 1% (В)",
    accuracy_class: "1%",
    dn_mm: 80,
    pressure_mpa: "1,6-25",
    instrument_type: "ВНИИР",
    location: "во ВНИИР",
    price_rub: 167553
  },
  "VNIIR_1.0_1.6-25_100": {
    name: "Калибровка на воздухе, атмосферном давлении (ВНИИР) Dn100, 1,6МПа-25МПа , 1% (В)",
    accuracy_class: "1%",
    dn_mm: 100,
    pressure_mpa: "1,6-25",
    instrument_type: "ВНИИР",
    location: "во ВНИИР",
    price_rub: 177148
  },
  "VNIIR_1.0_1.6-25_125": {
    name: "Калибровка на воздухе, атмосферном давлении (ВНИИР) Dn125, 1,6МПа-25МПа , 1% (В)",
    accuracy_class: "1%",
    dn_mm: 125,
    pressure_mpa: "1,6-25",
    instrument_type: "ВНИИР",
    location: "во ВНИИР",
    price_rub: 177148
  },
  "VNIIR_1.0_1.6-25_150": {
    name: "Калибровка на воздухе, атмосферном давлении (ВНИИР) Dn150, 1,6МПа-25МПа , 1% (В)",
    accuracy_class: "1%",
    dn_mm: 150,
    pressure_mpa: "1,6-25",
    instrument_type: "ВНИИР",
    location: "во ВНИИР",
    price_rub: 177148
  },
  "VNIIR_1.0_1.6-25_200": {
    name: "Калибровка на воздухе, атмосферном давлении (ВНИИР) Dn200, 1,6МПа-25МПа , 1% (В)",
    accuracy_class: "1%",
    dn_mm: 200,
    pressure_mpa: "1,6-25",
    instrument_type: "ВНИИР",
    location: "во ВНИИР",
    price_rub: 177148
  },
  "VNIIR_1.0_1.6-25_250": {
    name: "Калибровка на воздухе, атмосферном давлении (ВНИИР) Dn250, 1,6МПа-25МПа , 1% (В)",
    accuracy_class: "1%",
    dn_mm: 250,
    pressure_mpa: "1,6-25",
    instrument_type: "ВНИИР",
    location: "во ВНИИР",
    price_rub: 235593
  },
  "VNIIR_1.0_1.6-25_300": {
    name: "Калибровка на воздухе, атмосферном давлении (ВНИИР) Dn300, 1,6МПа-25МПа , 1% (В)",
    accuracy_class: "1%",
    dn_mm: 300,
    pressure_mpa: "1,6-25",
    instrument_type: "ВНИИР",
    location: "во ВНИИР",
    price_rub: 235593
  },
  "VNIIR_1.0_1.6-25_350": {
    name: "Калибровка на воздухе, атмосферном давлении (ВНИИР) Dn350, 1,6МПа-25МПа , 1% (В)",
    accuracy_class: "1%",
    dn_mm: 350,
    pressure_mpa: "1,6-25",
    instrument_type: "ВНИИР",
    location: "во ВНИИР",
    price_rub: 289676
  },
  "VNIIR_1.0_1.6-25_400": {
    name: "Калибровка на воздухе, атмосферном давлении (ВНИИР) Dn400, 1,6МПа-25МПа , 1% (В)",
    accuracy_class: "1%",
    dn_mm: 400,
    pressure_mpa: "1,6-25",
    instrument_type: "ВНИИР",
    location: "во ВНИИР",
    price_rub: 289676
  },
  "VNIIR_1.0_1.6-25_450": {
    name: "Калибровка на воздухе, атмосферном давлении (ВНИИР) Dn450, 1,6МПа-25МПа , 1% (В)",
    accuracy_class: "1%",
    dn_mm: 450,
    pressure_mpa: "1,6-25",
    instrument_type: "ВНИИР",
    location: "во ВНИИР",
    price_rub: 345503
  },
  "VNIIR_1.0_1.6-25_500": {
    name: "Калибровка на воздухе, атмосферном давлении (ВНИИР) Dn500, 1,6МПа-25МПа , 1% (В)",
    accuracy_class: "1%",
    dn_mm: 500,
    pressure_mpa: "1,6-25",
    instrument_type: "ВНИИР",
    location: "во ВНИИР",
    price_rub: 345503
  },
  "VNIIR_0.5_AB_1.6-25_50": {
    name: "Калибровка на воздухе, атмосферном давлении (ВНИИР) Dn050, 1,6МПа-25МПа , 0,5% (А) и (Б)",
    accuracy_class: "0,5% (А), (Б)",
    dn_mm: 50,
    pressure_mpa: "1,6-25",
    instrument_type: "ВНИИР",
    location: "во ВНИИР",
    price_rub: 167553
  },
  "VNIIR_0.5_AB_1.6-25_65": {
    name: "Калибровка на воздухе, атмосферном давлении (ВНИИР) Dn065, 1,6МПа-25МПа , 0,5% (А) и (Б)",
    accuracy_class: "0,5% (А), (Б)",
    dn_mm: 65,
    pressure_mpa: "1,6-25",
    instrument_type: "ВНИИР",
    location: "во ВНИИР",
    price_rub: 167553
  },
  "VNIIR_0.5_AB_1.6-25_80": {
    name: "Калибровка на воздухе, атмосферном давлении (ВНИИР) Dn080, 1,6МПа-25МПа , 0,5% (А) и (Б)",
    accuracy_class: "0,5% (А), (Б)",
    dn_mm: 80,
    pressure_mpa: "1,6-25",
    instrument_type: "ВНИИР",
    location: "во ВНИИР",
    price_rub: 167553
  },
  "VNIIR_0.5_AB_1.6-25_100": {
    name: "Калибровка на воздухе, атмосферном давлении (ВНИИР) Dn100, 1,6МПа-25МПа , 0,5% (А) и (Б)",
    accuracy_class: "0,5% (А), (Б)",
    dn_mm: 100,
    pressure_mpa: "1,6-25",
    instrument_type: "ВНИИР",
    location: "во ВНИИР",
    price_rub: 177148
  },
  "VNIIR_0.5_AB_1.6-25_125": {
    name: "Калибровка на воздухе, атмосферном давлении (ВНИИР) Dn125, 1,6МПа-25МПа , 0,5% (А) и (Б)",
    accuracy_class: "0,5% (А), (Б)",
    dn_mm: 125,
    pressure_mpa: "1,6-25",
    instrument_type: "ВНИИР",
    location: "во ВНИИР",
    price_rub: 177148
  },
  "VNIIR_0.5_AB_1.6-25_150": {
    name: "Калибровка на воздухе, атмосферном давлении (ВНИИР) Dn150, 1,6МПа-25МПа , 0,5% (А) и (Б)",
    accuracy_class: "0,5% (А), (Б)",
    dn_mm: 150,
    pressure_mpa: "1,6-25",
    instrument_type: "ВНИИР",
    location: "во ВНИИР",
    price_rub: 177148
  },
  "VNIIR_0.5_AB_1.6-25_200": {
    name: "Калибровка на воздухе, атмосферном давлении (ВНИИР) Dn200, 1,6МПа-25МПа , 0,5% (А) и (Б)",
    accuracy_class: "0,5% (А), (Б)",
    dn_mm: 200,
    pressure_mpa: "1,6-25",
    instrument_type: "ВНИИР",
    location: "во ВНИИР",
    price_rub: 177148
  },
  "VNIIR_0.5_AB_1.6-25_250": {
    name: "Калибровка на воздухе, атмосферном давлении (ВНИИР) Dn250, 1,6МПа-25МПа , 0,5% (А) и (Б)",
    accuracy_class: "0,5% (А), (Б)",
    dn_mm: 250,
    pressure_mpa: "1,6-25",
    instrument_type: "ВНИИР",
    location: "во ВНИИР",
    price_rub: 235593
  },
  "VNIIR_0.5_AB_1.6-25_300": {
    name: "Калибровка на воздухе, атмосферном давлении (ВНИИР) Dn300, 1,6МПа-25МПа , 0,5% (А) и (Б)",
    accuracy_class: "0,5% (А), (Б)",
    dn_mm: 300,
    pressure_mpa: "1,6-25",
    instrument_type: "ВНИИР",
    location: "во ВНИИР",
    price_rub: 235593
  },
  "VNIIR_0.5_AB_1.6-25_350": {
    name: "Калибровка на воздухе, атмосферном давлении (ВНИИР) Dn350, 1,6МПа-25МПа , 0,5% (А) и (Б)",
    accuracy_class: "0,5% (А), (Б)",
    dn_mm: 350,
    pressure_mpa: "1,6-25",
    instrument_type: "ВНИИР",
    location: "во ВНИИР",
    price_rub: 289676
  },
  "VNIIR_0.5_AB_1.6-25_400": {
    name: "Калибровка на воздухе, атмосферном давлении (ВНИИР) Dn400, 1,6МПа-25МПа , 0,5% (А) и (Б)",
    accuracy_class: "0,5% (А), (Б)",
    dn_mm: 400,
    pressure_mpa: "1,6-25",
    instrument_type: "ВНИИР",
    location: "во ВНИИР",
    price_rub: 289676
  },
  "VNIIR_0.5_AB_1.6-25_450": {
    name: "Калибровка на воздухе, атмосферном давлении (ВНИИР) Dn450, 1,6МПа-25МПа , 0,5% (А) и (Б)",
    accuracy_class: "0,5% (А), (Б)",
    dn_mm: 450,
    pressure_mpa: "1,6-25",
    instrument_type: "ВНИИР",
    location: "во ВНИИР",
    price_rub: 345503
  },
  "VNIIR_0.5_AB_1.6-25_500": {
    name: "Калибровка на воздухе, атмосферном давлении (ВНИИР) Dn500, 1,6МПа-25МПа , 0,5% (А) и (Б)",
    accuracy_class: "0,5% (А), (Б)",
    dn_mm: 500,
    pressure_mpa: "1,6-25",
    instrument_type: "ВНИИР",
    location: "во ВНИИР",
    price_rub: 345503
  },

  // ========================
  // ИМИТАЦИОННАЯ ПОВЕРКА НА ЗАВОДЕ-ИЗГОТОВИТЕЛЕ
  // ========================
  "IMIT_0.7_A_1.6-25_50": {
    name: "Имитационная поверка на заводе-изготовителе Dn 050, 1,6МПа-25МПа , 0,7% (А)",
    accuracy_class: "0,7% (А)",
    dn_mm: 50,
    pressure_mpa: "1,6-25",
    instrument_type: "имитационная",
    location: "на заводе-изготовителе",
    price_rub: 32839
  },
  "IMIT_0.7_A_1.6-25_65": {
    name: "Имитационная поверка на заводе-изготовителе Dn 065, 1,6МПа-25МПа , 0,7% (А)",
    accuracy_class: "0,7% (А)",
    dn_mm: 65,
    pressure_mpa: "1,6-25",
    instrument_type: "имитационная",
    location: "на заводе-изготовителе",
    price_rub: 32839
  },
  "IMIT_0.7_A_1.6-25_80": {
    name: "Имитационная поверка на заводе-изготовителе Dn 080, 1,6МПа-25МПа , 0,7% (А)",
    accuracy_class: "0,7% (А)",
    dn_mm: 80,
    pressure_mpa: "1,6-25",
    instrument_type: "имитационная",
    location: "на заводе-изготовителе",
    price_rub: 32839
  },
  "IMIT_0.7_A_1.6-25_100": {
    name: "Имитационная поверка на заводе-изготовителе Dn 100, 1,6МПа-25МПа , 0,7% (А)",
    accuracy_class: "0,7% (А)",
    dn_mm: 100,
    pressure_mpa: "1,6-25",
    instrument_type: "имитационная",
    location: "на заводе-изготовителе",
    price_rub: 32839
  },
  "IMIT_0.7_A_1.6-25_125": {
    name: "Имитационная поверка на заводе-изготовителе Dn 125, 1,6МПа-25МПа , 0,7% (А)",
    accuracy_class: "0,7% (А)",
    dn_mm: 125,
    pressure_mpa: "1,6-25",
    instrument_type: "имитационная",
    location: "на заводе-изготовителе",
    price_rub: 32839
  },
  "IMIT_0.7_A_1.6-25_150": {
    name: "Имитационная поверка на заводе-изготовителе Dn 150, 1,6МПа-25МПа , 0,7% (А)",
    accuracy_class: "0,7% (А)",
    dn_mm: 150,
    pressure_mpa: "1,6-25",
    instrument_type: "имитационная",
    location: "на заводе-изготовителе",
    price_rub: 32839
  },
  "IMIT_0.7_A_1.6-25_200": {
    name: "Имитационная поверка на заводе-изготовителе Dn 200, 1,6МПа-25МПа , 0,7% (А)",
    accuracy_class: "0,7% (А)",
    dn_mm: 200,
    pressure_mpa: "1,6-25",
    instrument_type: "имитационная",
    location: "на заводе-изготовителе",
    price_rub: 32839
  },
  "IMIT_0.7_A_1.6-25_250": {
    name: "Имитационная поверка на заводе-изготовителе Dn 250, 1,6МПа-25МПа , 0,7% (А)",
    accuracy_class: "0,7% (А)",
    dn_mm: 250,
    pressure_mpa: "1,6-25",
    instrument_type: "имитационная",
    location: "на заводе-изготовителе",
    price_rub: 32839
  },
  "IMIT_0.7_A_1.6-25_300": {
    name: "Имитационная поверка на заводе-изготовителе Dn 300, 1,6МПа-25МПа , 0,7% (А)",
    accuracy_class: "0,7% (А)",
    dn_mm: 300,
    pressure_mpa: "1,6-25",
    instrument_type: "имитационная",
    location: "на заводе-изготовителе",
    price_rub: 32839
  },
  "IMIT_0.7_A_1.6-25_350": {
    name: "Имитационная поверка на заводе-изготовителе Dn 350, 1,6МПа-25МПа , 0,7% (А)",
    accuracy_class: "0,7% (А)",
    dn_mm: 350,
    pressure_mpa: "1,6-25",
    instrument_type: "имитационная",
    location: "на заводе-изготовителе",
    price_rub: 32839
  },
  "IMIT_0.7_A_1.6-25_400": {
    name: "Имитационная поверка на заводе-изготовителе Dn 400, 1,6МПа-25МПа , 0,7% (А)",
    accuracy_class: "0,7% (А)",
    dn_mm: 400,
    pressure_mpa: "1,6-25",
    instrument_type: "имитационная",
    location: "на заводе-изготовителе",
    price_rub: 32839
  },
  "IMIT_0.7_A_1.6-25_450": {
    name: "Имитационная поверка на заводе-изготовителе Dn 450, 1,6МПа-25МПа , 0,7% (А)",
    accuracy_class: "0,7% (А)",
    dn_mm: 450,
    pressure_mpa: "1,6-25",
    instrument_type: "имитационная",
    location: "на заводе-изготовителе",
    price_rub: 32839
  },
  "IMIT_0.7_A_1.6-25_500": {
    name: "Имитационная поверка на заводе-изготовителе Dn 500, 1,6МПа-25МПа , 0,7% (А)",
    accuracy_class: "0,7% (А)",
    dn_mm: 500,
    pressure_mpa: "1,6-25",
    instrument_type: "имитационная",
    location: "на заводе-изготовителе",
    price_rub: 32839
  },
  "IMIT_0.7_B_1.6-25_50": {
    name: "Имитационная поверка на заводе-изготовителе Dn 050, 1,6МПа-25МПа , 0,7% (Б)",
    accuracy_class: "0,7% (Б)",
    dn_mm: 50,
    pressure_mpa: "1,6-25",
    instrument_type: "имитационная",
    location: "на заводе-изготовителе",
    price_rub: 32839
  },
  "IMIT_0.7_B_1.6-25_65": {
    name: "Имитационная поверка на заводе-изготовителе Dn 065, 1,6МПа-25МПа , 0,7% (Б)",
    accuracy_class: "0,7% (Б)",
    dn_mm: 65,
    pressure_mpa: "1,6-25",
    instrument_type: "имитационная",
    location: "на заводе-изготовителе",
    price_rub: 32839
  },
  "IMIT_0.7_B_1.6-25_80": {
    name: "Имитационная поверка на заводе-изготовителе Dn 080, 1,6МПа-25МПа , 0,7% (Б)",
    accuracy_class: "0,7% (Б)",
    dn_mm: 80,
    pressure_mpa: "1,6-25",
    instrument_type: "имитационная",
    location: "на заводе-изготовителе",
    price_rub: 32839
  },
  "IMIT_0.7_B_1.6-25_100": {
    name: "Имитационная поверка на заводе-изготовителе Dn 100, 1,6МПа-25МПа , 0,7% (Б)",
    accuracy_class: "0,7% (Б)",
    dn_mm: 100,
    pressure_mpa: "1,6-25",
    instrument_type: "имитационная",
    location: "на заводе-изготовителе",
    price_rub: 32839
  },
  "IMIT_0.7_B_1.6-25_125": {
    name: "Имитационная поверка на заводе-изготовителе Dn 125, 1,6МПа-25МПа , 0,7% (Б)",
    accuracy_class: "0,7% (Б)",
    dn_mm: 125,
    pressure_mpa: "1,6-25",
    instrument_type: "имитационная",
    location: "на заводе-изготовителе",
    price_rub: 32839
  },
  "IMIT_0.7_B_1.6-25_150": {
    name: "Имитационная поверка на заводе-изготовителе Dn 150, 1,6МПа-25МПа , 0,7% (Б)",
    accuracy_class: "0,7% (Б)",
    dn_mm: 150,
    pressure_mpa: "1,6-25",
    instrument_type: "имитационная",
    location: "на заводе-изготовителе",
    price_rub: 32839
  },
  "IMIT_0.7_B_1.6-25_200": {
    name: "Имитационная поверка на заводе-изготовителе Dn 200, 1,6МПа-25МПа , 0,7% (Б)",
    accuracy_class: "0,7% (Б)",
    dn_mm: 200,
    pressure_mpa: "1,6-25",
    instrument_type: "имитационная",
    location: "на заводе-изготовителе",
    price_rub: 32839
  },
  "IMIT_0.7_B_1.6-25_250": {
    name: "Имитационная поверка на заводе-изготовителе Dn 250, 1,6МПа-25МПа , 0,7% (Б)",
    accuracy_class: "0,7% (Б)",
    dn_mm: 250,
    pressure_mpa: "1,6-25",
    instrument_type: "имитационная",
    location: "на заводе-изготовителе",
    price_rub: 32839
  },
  "IMIT_0.7_B_1.6-25_300": {
    name: "Имитационная поверка на заводе-изготовителе Dn 300, 1,6МПа-25МПа , 0,7% (Б)",
    accuracy_class: "0,7% (Б)",
    dn_mm: 300,
    pressure_mpa: "1,6-25",
    instrument_type: "имитационная",
    location: "на заводе-изготовителе",
    price_rub: 32839
  },
  "IMIT_0.7_B_1.6-25_350": {
    name: "Имитационная поверка на заводе-изготовителе Dn 350, 1,6МПа-25МПа , 0,7% (Б)",
    accuracy_class: "0,7% (Б)",
    dn_mm: 350,
    pressure_mpa: "1,6-25",
    instrument_type: "имитационная",
    location: "на заводе-изготовителе",
    price_rub: 32839
  },
  "IMIT_0.7_B_1.6-25_400": {
    name: "Имитационная поверка на заводе-изготовителе Dn 400, 1,6МПа-25МПа , 0,7% (Б)",
    accuracy_class: "0,7% (Б)",
    dn_mm: 400,
    pressure_mpa: "1,6-25",
    instrument_type: "имитационная",
    location: "на заводе-изготовителе",
    price_rub: 32839
  },
  "IMIT_0.7_B_1.6-25_450": {
    name: "Имитационная поверка на заводе-изготовителе Dn 450, 1,6МПа-25МПа , 0,7% (Б)",
    accuracy_class: "0,7% (Б)",
    dn_mm: 450,
    pressure_mpa: "1,6-25",
    instrument_type: "имитационная",
    location: "на заводе-изготовителе",
    price_rub: 32839
  },
  "IMIT_0.7_B_1.6-25_500": {
    name: "Имитационная поверка на заводе-изготовителе Dn 500, 1,6МПа-25МПа , 0,7% (Б)",
    accuracy_class: "0,7% (Б)",
    dn_mm: 500,
    pressure_mpa: "1,6-25",
    instrument_type: "имитационная",
    location: "на заводе-изготовителе",
    price_rub: 32839
  },
  "IMIT_1.2_B_1.6-25_50": {
    name: "Имитационная поверка на заводе-изготовителе Dn 050, 1,6МПа-25МПа , 1,2% (Б)",
    accuracy_class: "1,2% (Б)",
    dn_mm: 50,
    pressure_mpa: "1,6-25",
    instrument_type: "имитационная",
    location: "на заводе-изготовителе",
    price_rub: 17562
  },
  "IMIT_1.2_B_1.6-25_65": {
    name: "Имитационная поверка на заводе-изготовителе Dn 065, 1,6МПа-25МПа , 1,2% (Б)",
    accuracy_class: "1,2% (Б)",
    dn_mm: 65,
    pressure_mpa: "1,6-25",
    instrument_type: "имитационная",
    location: "на заводе-изготовителе",
    price_rub: 17562
  },
  "IMIT_1.2_B_1.6-25_80": {
    name: "Имитационная поверка на заводе-изготовителе Dn 080, 1,6МПа-25МПа , 1,2% (Б)",
    accuracy_class: "1,2% (Б)",
    dn_mm: 80,
    pressure_mpa: "1,6-25",
    instrument_type: "имитационная",
    location: "на заводе-изготовителе",
    price_rub: 17562
  },
  "IMIT_1.2_B_1.6-25_100": {
    name: "Имитационная поверка на заводе-изготовителе Dn 100, 1,6МПа-25МПа , 1,2% (Б)",
    accuracy_class: "1,2% (Б)",
    dn_mm: 100,
    pressure_mpa: "1,6-25",
    instrument_type: "имитационная",
    location: "на заводе-изготовителе",
    price_rub: 17562
  },
  "IMIT_1.2_B_1.6-25_125": {
    name: "Имитационная поверка на заводе-изготовителе Dn 125, 1,6МПа-25МПа , 1,2% (Б)",
    accuracy_class: "1,2% (Б)",
    dn_mm: 125,
    pressure_mpa: "1,6-25",
    instrument_type: "имитационная",
    location: "на заводе-изготовителе",
    price_rub: 17562
  },
  "IMIT_1.2_B_1.6-25_150": {
    name: "Имитационная поверка на заводе-изготовителе Dn 150, 1,6МПа-25МПа , 1,2% (Б)",
    accuracy_class: "1,2% (Б)",
    dn_mm: 150,
    pressure_mpa: "1,6-25",
    instrument_type: "имитационная",
    location: "на заводе-изготовителе",
    price_rub: 17562
  },
  "IMIT_1.2_B_1.6-25_200": {
    name: "Имитационная поверка на заводе-изготовителе Dn 200, 1,6МПа-25МПа , 1,2% (Б)",
    accuracy_class: "1,2% (Б)",
    dn_mm: 200,
    pressure_mpa: "1,6-25",
    instrument_type: "имитационная",
    location: "на заводе-изготовителе",
    price_rub: 17562
  },
  "IMIT_1.2_B_1.6-25_250": {
    name: "Имитационная поверка на заводе-изготовителе Dn 250, 1,6МПа-25МПа , 1,2% (Б)",
    accuracy_class: "1,2% (Б)",
    dn_mm: 250,
    pressure_mpa: "1,6-25",
    instrument_type: "имитационная",
    location: "на заводе-изготовителе",
    price_rub: 17562
  },
  "IMIT_1.2_B_1.6-25_300": {
    name: "Имитационная поверка на заводе-изготовителе Dn 300, 1,6МПа-25МПа , 1,2% (Б)",
    accuracy_class: "1,2% (Б)",
    dn_mm: 300,
    pressure_mpa: "1,6-25",
    instrument_type: "имитационная",
    location: "на заводе-изготовителе",
    price_rub: 17562
  },
  "IMIT_1.2_B_1.6-25_350": {
    name: "Имитационная поверка на заводе-изготовителе Dn 350, 1,6МПа-25МПа , 1,2% (Б)",
    accuracy_class: "1,2% (Б)",
    dn_mm: 350,
    pressure_mpa: "1,6-25",
    instrument_type: "имитационная",
    location: "на заводе-изготовителе",
    price_rub: 17562
  },
  "IMIT_1.2_B_1.6-25_400": {
    name: "Имитационная поверка на заводе-изготовителе Dn 400, 1,6МПа-25МПа , 1,2% (Б)",
    accuracy_class: "1,2% (Б)",
    dn_mm: 400,
    pressure_mpa: "1,6-25",
    instrument_type: "имитационная",
    location: "на заводе-изготовителе",
    price_rub: 17562
  },
  "IMIT_1.2_B_1.6-25_450": {
    name: "Имитационная поверка на заводе-изготовителе Dn 450, 1,6МПа-25МПа , 1,2% (Б)",
    accuracy_class: "1,2% (Б)",
    dn_mm: 450,
    pressure_mpa: "1,6-25",
    instrument_type: "имитационная",
    location: "на заводе-изготовителе",
    price_rub: 17562
  },
  "IMIT_1.2_B_1.6-25_500": {
    name: "Имитационная поверка на заводе-изготовителе Dn 500, 1,6МПа-25МПа , 1,2% (Б)",
    accuracy_class: "1,2% (Б)",
    dn_mm: 500,
    pressure_mpa: "1,6-25",
    instrument_type: "имитационная",
    location: "на заводе-изготовителе",
    price_rub: 17562
  },
  "IMIT_2.2-1.2_G_1.6-25_50": {
    name: "Имитационная поверка на заводе-изготовителе Dn 050, 1,6МПа-25МПа , 2,2% - 1,2% (Г)*",
    accuracy_class: "2,2% - 1,2% (Г)*",
    dn_mm: 50,
    pressure_mpa: "1,6-25",
    instrument_type: "имитационная",
    location: "на заводе-изготовителе",
    price_rub: 17562
  },
  "IMIT_2.2-1.2_G_1.6-25_65": {
    name: "Имитационная поверка на заводе-изготовителе Dn 065, 1,6МПа-25МПа , 2,2% - 1,2% (Г)*",
    accuracy_class: "2,2% - 1,2% (Г)*",
    dn_mm: 65,
    pressure_mpa: "1,6-25",
    instrument_type: "имитационная",
    location: "на заводе-изготовителе",
    price_rub: 17562
  },
  "IMIT_2.2-1.2_G_1.6-25_80": {
    name: "Имитационная поверка на заводе-изготовителе Dn 080, 1,6МПа-25МПа , 2,2% - 1,2% (Г)*",
    accuracy_class: "2,2% - 1,2% (Г)*",
    dn_mm: 80,
    pressure_mpa: "1,6-25",
    instrument_type: "имитационная",
    location: "на заводе-изготовителе",
    price_rub: 17562
  },
  "IMIT_2.2-1.2_G_1.6-25_100": {
    name: "Имитационная поверка на заводе-изготовителе Dn 100, 1,6МПа-25МПа , 2,2% - 1,2% (Г)*",
    accuracy_class: "2,2% - 1,2% (Г)*",
    dn_mm: 100,
    pressure_mpa: "1,6-25",
    instrument_type: "имитационная",
    location: "на заводе-изготовителе",
    price_rub: 17562
  },
  "IMIT_2.2-1.2_G_1.6-25_125": {
    name: "Имитационная поверка на заводе-изготовителе Dn 125, 1,6МПа-25МПа , 2,2% - 1,2% (Г)*",
    accuracy_class: "2,2% - 1,2% (Г)*",
    dn_mm: 125,
    pressure_mpa: "1,6-25",
    instrument_type: "имитационная",
    location: "на заводе-изготовителе",
    price_rub: 17562
  },
  "IMIT_2.2-1.2_G_1.6-25_150": {
    name: "Имитационная поверка на заводе-изготовителе Dn 150, 1,6МПа-25МПа , 2,2% - 1,2% (Г)*",
    accuracy_class: "2,2% - 1,2% (Г)*",
    dn_mm: 150,
    pressure_mpa: "1,6-25",
    instrument_type: "имитационная",
    location: "на заводе-изготовителе",
    price_rub: 17562
  },
  "IMIT_2.2-1.2_G_1.6-25_200": {
    name: "Имитационная поверка на заводе-изготовителе Dn 200, 1,6МПа-25МПа , 2,2% - 1,2% (Г)*",
    accuracy_class: "2,2% - 1,2% (Г)*",
    dn_mm: 200,
    pressure_mpa: "1,6-25",
    instrument_type: "имитационная",
    location: "на заводе-изготовителе",
    price_rub: 17562
  },
  "IMIT_2.2-1.2_G_1.6-25_250": {
    name: "Имитационная поверка на заводе-изготовителе Dn 250, 1,6МПа-25МПа , 2,2% - 1,2% (Г)*",
    accuracy_class: "2,2% - 1,2% (Г)*",
    dn_mm: 250,
    pressure_mpa: "1,6-25",
    instrument_type: "имитационная",
    location: "на заводе-изготовителе",
    price_rub: 17562
  },
  "IMIT_2.2-1.2_G_1.6-25_300": {
    name: "Имитационная поверка на заводе-изготовителе Dn 300, 1,6МПа-25МПа , 2,2% - 1,2% (Г)*",
    accuracy_class: "2,2% - 1,2% (Г)*",
    dn_mm: 300,
    pressure_mpa: "1,6-25",
    instrument_type: "имитационная",
    location: "на заводе-изготовителе",
    price_rub: 17562
  },
  "IMIT_2.2-1.2_G_1.6-25_350": {
    name: "Имитационная поверка на заводе-изготовителе Dn 350, 1,6МПа-25МПа , 2,2% - 1,2% (Г)*",
    accuracy_class: "2,2% - 1,2% (Г)*",
    dn_mm: 350,
    pressure_mpa: "1,6-25",
    instrument_type: "имитационная",
    location: "на заводе-изготовителе",
    price_rub: 17562
  },
  "IMIT_2.2-1.2_G_1.6-25_400": {
    name: "Имитационная поверка на заводе-изготовителе Dn 400, 1,6МПа-25МПа , 2,2% - 1,2% (Г)*",
    accuracy_class: "2,2% - 1,2% (Г)*",
    dn_mm: 400,
    pressure_mpa: "1,6-25",
    instrument_type: "имитационная",
    location: "на заводе-изготовителе",
    price_rub: 17562
  },
  "IMIT_2.2-1.2_G_1.6-25_450": {
    name: "Имитационная поверка на заводе-изготовителе Dn 450, 1,6МПа-25МПа , 2,2% - 1,2% (Г)*",
    accuracy_class: "2,2% - 1,2% (Г)*",
    dn_mm: 450,
    pressure_mpa: "1,6-25",
    instrument_type: "имитационная",
    location: "на заводе-изготовителе",
    price_rub: 17562
  },
  "IMIT_2.2-1.2_G_1.6-25_500": {
    name: "Имитационная поверка на заводе-изготовителе Dn 500, 1,6МПа-25МПа , 2,2% - 1,2% (Г)*",
    accuracy_class: "2,2% - 1,2% (Г)*",
    dn_mm: 500,
    pressure_mpa: "1,6-25",
    instrument_type: "имитационная",
    location: "на заводе-изготовителе",
    price_rub: 17562
  }
};







// -------------------------------------------------------------------------------------------------------------------------------------








// ============================================================================
// Прайс-лист на Преобразователи давления UFG-F-V
// Цены указаны в рублях с НДС 22%
// Возможна скидка до 30%
// Стандартная гарантия: 24 месяца эксплуатации, но не более чем 36 месяцев с даты отгрузки.
// Иные условия гарантии просчитываются отдельно.
// 
// Ключи объекта: код номенклатуры (string) — генерируется как "type_upperLimit_exType_tempRange_power_signal_indicator"
// Значения: объект {
//   name: string,                     // Полное наименование преобразователя/датчика
//   modification: string,             // Модификация датчика: "ДА", "ДИ", "ДД"
//   upper_pressure_limit_kpa: number, // Верхний предел давления, кПа
//   explosion_protection: string,     // Вид взрывозащиты: "Exi", "Exd", "Exia"
//   temp_range: string,               // Диапазон температур окружающей среды
//   power_type: string,               // Тип напряжения питания: "В", "А", "Е"
//   output_signal_type: string,       // Тип выходного сигнала: "Т", "Ц", "П"
//   has_builtin_indicator: boolean,   // Наличие встроенного индикатора (0 = нет, И = да)
//   price_rub: number                 // Цена с НДС 22%
// }
// ============================================================================

const ufgPressureTransducers = {
  // ========================
  // ДАТЧИКИ ДАВЛЕНИЯ TURBO FLOW PS-BP...
  // ========================
  "DA_100_Exi_-50+70(X)_B_T_0": {
    name: "Датчик давления Turbo Flow PS-BP-10-ДА-100 кПа-0,075-Exi-X-B-O-T-G",
    modification: "ДА",
    upper_pressure_limit_kpa: 100,
    explosion_protection: "Exi",
    temp_range: "-50 + 70 (X)",
    power_type: "В",
    output_signal_type: "Т",
    has_builtin_indicator: false,
    price_rub: 45851
  },
  "DA_1600_Exi_-50+70(X)_B_C_I": {
    name: "Датчик давления Turbo Flow PS-BP-10-ДА-1600 кПа-0,075-Exi-M-B-И-Ц-G",
    modification: "ДА",
    upper_pressure_limit_kpa: 1600,
    explosion_protection: "Exi",
    temp_range: "-50 + 70 (X)",
    power_type: "В",
    output_signal_type: "Ц",
    has_builtin_indicator: true,
    price_rub: 45851
  },
  "DA_1600_Exi_-50+70(X)_B_T_I": {
    name: "Датчик давления Turbo Flow PS-BP-10-ДА-1600 кПа-0,25-Exi-M-B-И-Т-G",
    modification: "ДА",
    upper_pressure_limit_kpa: 1600,
    explosion_protection: "Exi",
    temp_range: "-50 + 70 (X)",
    power_type: "В",
    output_signal_type: "Т",
    has_builtin_indicator: true,
    price_rub: 45851
  },
  "DA_250_Exi_-50+70(X)_B_C_I": {
    name: "Датчик давления Turbo Flow PS-BP-10-ДА-250 кПа-0,15-Exi-M-B-И-Ц-G",
    modification: "ДА",
    upper_pressure_limit_kpa: 250,
    explosion_protection: "Exi",
    temp_range: "-50 + 70 (X)",
    power_type: "В",
    output_signal_type: "Ц",
    has_builtin_indicator: true,
    price_rub: 46616
  },
  "DA_6000_Exi_-50+70(X)_B_T_0": {
    name: "Датчик давления Turbo Flow PS-BP-10-ДА-6000 кПа-0,15-Exi-X-B-O-T-G",
    modification: "ДА",
    upper_pressure_limit_kpa: 6000,
    explosion_protection: "Exi",
    temp_range: "-50 + 70 (X)",
    power_type: "В",
    output_signal_type: "Т",
    has_builtin_indicator: false,
    price_rub: 46616
  },
  "DA_6000_Exi_-50+70(X)_B_T_0_2": {
    name: "Датчик давления Turbo Flow PS-BP-10-ДА-6000 кПа-0,25-Exi-X-B-O-T-G",
    modification: "ДА",
    upper_pressure_limit_kpa: 6000,
    explosion_protection: "Exi",
    temp_range: "-50 + 70 (X)",
    power_type: "В",
    output_signal_type: "Т",
    has_builtin_indicator: false,
    price_rub: 46616
  },
  "DA_6000_Exi_-50+70(X)_B_C_0": {
    name: "Датчик давления Turbo Flow PS-BP-10-ДА-6000 кПа-0,25-Exi-X-B-O-Ц-G",
    modification: "ДА",
    upper_pressure_limit_kpa: 6000,
    explosion_protection: "Exi",
    temp_range: "-50 + 70 (X)",
    power_type: "В",
    output_signal_type: "Ц",
    has_builtin_indicator: false,
    price_rub: 46616
  },
  "DA_6000_Exi_-50+70(X)_B_T_0_3": {
    name: "Датчик давления Turbo Flow-PS-BP-10-ДА-6000 кПа-0,075-Exi-X-B-O-T-G",
    modification: "ДА",
    upper_pressure_limit_kpa: 6000,
    explosion_protection: "Exi",
    temp_range: "-50 + 70 (X)",
    power_type: "В",
    output_signal_type: "Т",
    has_builtin_indicator: false,
    price_rub: 46616
  },
  "DA_1600_Exi_-50+70(X)_B_C_I_2": {
    name: "Датчик давления Turbo Flow-PS-BP-10-ДД-100/1600 кПа-0,25-Exi-M-B-И-Ц-G",
    modification: "ДА",
    upper_pressure_limit_kpa: 1600,
    explosion_protection: "Exi",
    temp_range: "-50 + 70 (X)",
    power_type: "В",
    output_signal_type: "Ц",
    has_builtin_indicator: true,
    price_rub: 100881
  },
  "DA_1600_Exi_-50+70(X)_B_C_I_3": {
    name: "Датчик давления Turbo Flow-PS-BP-10-ДД-25/1600 кПа-0,5-Exi-M-B-И-Ц-G",
    modification: "ДА",
    upper_pressure_limit_kpa: 1600,
    explosion_protection: "Exi",
    temp_range: "-50 + 70 (X)",
    power_type: "В",
    output_signal_type: "Ц",
    has_builtin_indicator: true,
    price_rub: 100881
  },
  "DA_1600_Exi_-50+70(X)_B_C_I_4": {
    name: "Датчик давления Turbo Flow-PS-BP-10-ДД-4/1600 кПа-0,15-Exi-M-B-И-Ц-G",
    modification: "ДА",
    upper_pressure_limit_kpa: 1600,
    explosion_protection: "Exi",
    temp_range: "-50 + 70 (X)",
    power_type: "В",
    output_signal_type: "Ц",
    has_builtin_indicator: true,
    price_rub: 100881
  },
  "DA_1600_Exi_-50+70(X)_B_C_I_5": {
    name: "Датчик давления Turbo Flow-PS-BP-10-ДД-4/1600 кПа-0,5-Exi-M-B-И-Ц-G",
    modification: "ДА",
    upper_pressure_limit_kpa: 1600,
    explosion_protection: "Exi",
    temp_range: "-50 + 70 (X)",
    power_type: "В",
    output_signal_type: "Ц",
    has_builtin_indicator: true,
    price_rub: 100881
  },
  "DI_100_Exi_-50+70(X)_B_T_0": {
    name: "Датчик давления Turbo Flow-PS-BP-10-ДИ-100 кПа-0,25-Exi-X-B-O-T-G",
    modification: "ДИ",
    upper_pressure_limit_kpa: 100,
    explosion_protection: "Exi",
    temp_range: "-50 + 70 (X)",
    power_type: "В",
    output_signal_type: "Т",
    has_builtin_indicator: false,
    price_rub: 46616
  },
  "DA_1600_Exi_-50+70(X)_B_T_I_2": {
    name: "Датчик давления Turbo Flow-PS-BP-10-ДИ-1600 кПа-0,15-Exi-M-B-И-Т-G",
    modification: "ДА",
    upper_pressure_limit_kpa: 1600,
    explosion_protection: "Exi",
    temp_range: "-50 + 70 (X)",
    power_type: "В",
    output_signal_type: "Т",
    has_builtin_indicator: true,
    price_rub: 46616
  },
  "DA_1600_Exi_-50+70(X)_B_T_I_3": {
    name: "Датчик давления Turbo Flow-PS-BP-10-ДИ-1600 кПа-0,25-Exi-M-B-И-Т-G",
    modification: "ДА",
    upper_pressure_limit_kpa: 1600,
    explosion_protection: "Exi",
    temp_range: "-50 + 70 (X)",
    power_type: "В",
    output_signal_type: "Т",
    has_builtin_indicator: true,
    price_rub: 46616
  },
  "DA_25_Exi_-50+70(X)_B_C_0": {
    name: "Датчик давления Turbo Flow-PS-BP-10-ДИ-25 кПа-0,25-Exi-X-B-O-Ц-G",
    modification: "ДА",
    upper_pressure_limit_kpa: 25,
    explosion_protection: "Exi",
    temp_range: "-50 + 70 (X)",
    power_type: "В",
    output_signal_type: "Ц",
    has_builtin_indicator: false,
    price_rub: 46616
  },
  "DA_25000_Exi_-50+70(X)_B_C_0": {
    name: "Датчик давления Turbo Flow-PS-BP-10-ДИ-25000 кПа-0,15-Exi-X-B-O-Ц-G",
    modification: "ДА",
    upper_pressure_limit_kpa: 25000,
    explosion_protection: "Exi",
    temp_range: "-50 + 70 (X)",
    power_type: "В",
    output_signal_type: "Ц",
    has_builtin_indicator: false,
    price_rub: 46616
  },
  "DA_600_Exi_-50+70(X)_B_T_0": {
    name: "Датчик давления Turbo Flow-PS-BP-10-ДИ-600 кПа-0,25-Exi-X-B-O-T-G",
    modification: "ДА",
    upper_pressure_limit_kpa: 600,
    explosion_protection: "Exi",
    temp_range: "-50 + 70 (X)",
    power_type: "В",
    output_signal_type: "Т",
    has_builtin_indicator: false,
    price_rub: 46616
  },
  "DA_6000_Exd_-50+70(X)_B_T_I": {
    name: "Датчик давления Turbo Flow PS-BP-20-ДА-6000-0,1-Exd-M-B-И-Т-G-0-0",
    modification: "ДА",
    upper_pressure_limit_kpa: 6000,
    explosion_protection: "Exd",
    temp_range: "-50 + 70 (X)",
    power_type: "В",
    output_signal_type: "Т",
    has_builtin_indicator: true,
    price_rub: 124786
  },
  "DA_25000_Exd_-50+70(X)_A_C_I": {
    name: "Датчик давления Turbo Flow PS-BP-20-ДА-25000 кПа-0,25-Exd-X-A-И-Ц-G-0-0",
    modification: "ДА",
    upper_pressure_limit_kpa: 25000,
    explosion_protection: "Exd",
    temp_range: "-50 + 70 (X)",
    power_type: "А",
    output_signal_type: "Ц",
    has_builtin_indicator: true,
    price_rub: 143462
  },
  "DA_40000_Exd_-50+70(X)_B_C_I": {
    name: "Датчик давления Turbo Flow PS-BP-20-ДА-40000кПа-0,15-Exd-X-B-И-Ц-G-0-0",
    modification: "ДА",
    upper_pressure_limit_kpa: 40000,
    explosion_protection: "Exd",
    temp_range: "-50 + 70 (X)",
    power_type: "В",
    output_signal_type: "Ц",
    has_builtin_indicator: true,
    price_rub: 123159
  },
  "DA_10000_Exi_-50+70(X)_B_T_I": {
    name: "Датчик давления Turbo Flow-PS-BP-10-ДА-10000 кПа-0,15-Exi-X-B-И-Т-G",
    modification: "ДА",
    upper_pressure_limit_kpa: 10000,
    explosion_protection: "Exi",
    temp_range: "-50 + 70 (X)",
    power_type: "В",
    output_signal_type: "Т",
    has_builtin_indicator: true,
    price_rub: 46616
  },
  "DA_100_Exi_-50+70(X)_B_T_0_2": {
    name: "Датчик давления Turbo Flow-PS-BP-10-ДА-100 кПа-0,075-Exi-X-B-O-T-G",
    modification: "ДА",
    upper_pressure_limit_kpa: 100,
    explosion_protection: "Exi",
    temp_range: "-50 + 70 (X)",
    power_type: "В",
    output_signal_type: "Т",
    has_builtin_indicator: false,
    price_rub: 41272
  },
  "DA_16000_Exi_-30+70(X)_B_T_I": {
    name: "Датчик давления Turbo Flow-PS-BP-10-ДА-16000 кПа-0,15-Exi-M-B-И-Т-G",
    modification: "ДА",
    upper_pressure_limit_kpa: 16000,
    explosion_protection: "Exi",
    temp_range: "-30 + 70 (X)",
    power_type: "В",
    output_signal_type: "Т",
    has_builtin_indicator: true,
    price_rub: 50466
  },
  "DA_10000_Exi_-30+70(M)_A_C_I": {
    name: "Датчик давления Turbo Flow-PS-BP-10-ДА-10000 кПа-0,075-Exi-M-A-И-Ц-G",
    modification: "ДА",
    upper_pressure_limit_kpa: 10000,
    explosion_protection: "Exi",
    temp_range: "-30 + 70 (M)",
    power_type: "А",
    output_signal_type: "Ц",
    has_builtin_indicator: true,
    price_rub: 41310
  },
  "DA_10000_Exi_-50+70(X)_B_C_0": {
    name: "Датчик давления Turbo Flow-PS-BP-10-ДА-10000 кПа-0,25-Exi-X-B-O-Ц-G",
    modification: "ДА",
    upper_pressure_limit_kpa: 10000,
    explosion_protection: "Exi",
    temp_range: "-50 + 70 (X)",
    power_type: "В",
    output_signal_type: "Ц",
    has_builtin_indicator: false,
    price_rub: 38230
  },
  "DA_40000_Exd_-30+70(X)_B_C_I": {
    name: "Датчик давления Turbo Flow-PS-BP-20-ДА-40000 кПа-0,15-Exd-X-B-И-Ц-G-0-0",
    modification: "ДА",
    upper_pressure_limit_kpa: 40000,
    explosion_protection: "Exd",
    temp_range: "-30 + 70 (X)",
    power_type: "В",
    output_signal_type: "Ц",
    has_builtin_indicator: true,
    price_rub: 123159
  },
  "DD_1600_Exi_-30+70(M)_B_C_I": {
    name: "Датчик давления Turbo Flow-PS-BP-10-ДД-4/1600 кПа-0,15-Exi-M-B-И-Ц-G",
    modification: "ДД",
    upper_pressure_limit_kpa: 1600,
    explosion_protection: "Exi",
    temp_range: "-30 + 70 (M)",
    power_type: "В",
    output_signal_type: "Ц",
    has_builtin_indicator: true,
    price_rub: 100881
  },
  "DD_1600_Exi_-30+70(M)_B_C_I_2": {
    name: "Датчик давления Turbo Flow-PS-BP-10-ДД-40/1600 кПа-0,25-Exi-M-B-И-Ц-G",
    modification: "ДД",
    upper_pressure_limit_kpa: 1600,
    explosion_protection: "Exi",
    temp_range: "-30 + 70 (M)",
    power_type: "В",
    output_signal_type: "Ц",
    has_builtin_indicator: true,
    price_rub: 86823
  },

  // ========================
  // ПРЕОБРАЗОВАТЕЛИ ДАВЛЕНИЯ АЛМАЗ ДА...
  // ========================
  "DA_1000_Exia_-50+70(X)_E_C_0": {
    name: "Преобразователь давления АЛМАЗ ДА-1000 кПа-0,25%-Exia-X-E-O-Ц-G",
    modification: "ДА",
    upper_pressure_limit_kpa: 1000,
    explosion_protection: "Exia",
    temp_range: "-50 + 70 (X)",
    power_type: "Е",
    output_signal_type: "Ц",
    has_builtin_indicator: false,
    price_rub: 35807
  },
  "DA_10000_Exia_-50+70(X)_E_C_0": {
    name: "Преобразователь давления АЛМАЗ ДА-10000 кПа-0,25%-Exia-X-E-O-Ц-G",
    modification: "ДА",
    upper_pressure_limit_kpa: 10000,
    explosion_protection: "Exia",
    temp_range: "-50 + 70 (X)",
    power_type: "Е",
    output_signal_type: "Ц",
    has_builtin_indicator: false,
    price_rub: 35807
  },
  "DA_160_Exia_-50+70(X)_E_C_0": {
    name: "Преобразователь давления АЛМАЗ ДА-160 кПа-0,25%-Exia-X-E-O-Ц-G",
    modification: "ДА",
    upper_pressure_limit_kpa: 160,
    explosion_protection: "Exia",
    temp_range: "-50 + 70 (X)",
    power_type: "Е",
    output_signal_type: "Ц",
    has_builtin_indicator: false,
    price_rub: 35807
  },
  "DA_1600_Exia_-50+70(X)_E_C_0": {
    name: "Преобразователь давления АЛМАЗ ДА-1600 кПа-0,25%-Exia-X-E-O-Ц-G",
    modification: "ДА",
    upper_pressure_limit_kpa: 1600,
    explosion_protection: "Exia",
    temp_range: "-50 + 70 (X)",
    power_type: "Е",
    output_signal_type: "Ц",
    has_builtin_indicator: false,
    price_rub: 35807
  },
  "DA_16000_Exia_-50+70(X)_E_C_0": {
    name: "Преобразователь давления АЛМАЗ ДА-16000 кПа-0,25%-Exia-X-E-O-Ц-G",
    modification: "ДА",
    upper_pressure_limit_kpa: 16000,
    explosion_protection: "Exia",
    temp_range: "-50 + 70 (X)",
    power_type: "Е",
    output_signal_type: "Ц",
    has_builtin_indicator: false,
    price_rub: 35807
  },
  "DA_250_Exia_-50+70(X)_E_C_0": {
    name: "Преобразователь давления АЛМАЗ ДА-250 кПа-0,25%-Exia-X-E-O-Ц-G",
    modification: "ДА",
    upper_pressure_limit_kpa: 250,
    explosion_protection: "Exia",
    temp_range: "-50 + 70 (X)",
    power_type: "Е",
    output_signal_type: "Ц",
    has_builtin_indicator: false,
    price_rub: 35807
  },
  "DA_2500_Exia_-50+70(X)_E_C_0": {
    name: "Преобразователь давления АЛМАЗ ДА-2500 кПа-0,25%-Exia-X-E-O-Ц-G",
    modification: "ДА",
    upper_pressure_limit_kpa: 2500,
    explosion_protection: "Exia",
    temp_range: "-50 + 70 (X)",
    power_type: "Е",
    output_signal_type: "Ц",
    has_builtin_indicator: false,
    price_rub: 35807
  },
  "DA_25000_Exia_-50+70(X)_B_C_0": {
    name: "Преобразователь давления АЛМАЗ ДА-25000 кПа-0,25%-Exia-X-E-O-Ц-G",
    modification: "ДА",
    upper_pressure_limit_kpa: 25000,
    explosion_protection: "Exia",
    temp_range: "-50 + 70 (X)",
    power_type: "В",
    output_signal_type: "Ц",
    has_builtin_indicator: false,
    price_rub: 35807
  },
  "DA_400_Exia_-30+70(X)_B_C_I": {
    name: "Преобразователь давления АЛМАЗ ДА-400 кПа-0,25%-Exia-X-E-O-Ц-G",
    modification: "ДА",
    upper_pressure_limit_kpa: 400,
    explosion_protection: "Exia",
    temp_range: "-30 + 70 (X)",
    power_type: "В",
    output_signal_type: "Ц",
    has_builtin_indicator: true,
    price_rub: 35807
  },
  "DA_4000_Exia_-50+70(X)_B_C_I": {
    name: "Преобразователь давления АЛМАЗ ДА-4000 кПа-0,25%-Exia-X-E-O-Ц-G",
    modification: "ДА",
    upper_pressure_limit_kpa: 4000,
    explosion_protection: "Exia",
    temp_range: "-50 + 70 (X)",
    power_type: "В",
    output_signal_type: "Ц",
    has_builtin_indicator: true,
    price_rub: 35807
  },
  "DA_600_Exia_-50+70(X)_B_C_I": {
    name: "Преобразователь давления АЛМАЗ ДА-600 кПа-0,25%-Exia-X-E-O-Ц-G",
    modification: "ДА",
    upper_pressure_limit_kpa: 600,
    explosion_protection: "Exia",
    temp_range: "-50 + 70 (X)",
    power_type: "В",
    output_signal_type: "Ц",
    has_builtin_indicator: true,
    price_rub: 35807
  },
  "DA_6000_Exia_-50+70(X)_B_C_0": {
    name: "Преобразователь давления АЛМАЗ ДА-6000 кПа-0,25%-Exia-X-E-O-Ц-G",
    modification: "ДА",
    upper_pressure_limit_kpa: 6000,
    explosion_protection: "Exia",
    temp_range: "-50 + 70 (X)",
    power_type: "В",
    output_signal_type: "Ц",
    has_builtin_indicator: false,
    price_rub: 35807
  },
  "DA_630_Exia_-50+70(X)_B_C_0": {
    name: "Преобразователь давления АЛМАЗ ДА-630 кПа-0,25%-Exia-X-E-O-Ц-G",
    modification: "ДА",
    upper_pressure_limit_kpa: 630,
    explosion_protection: "Exia",
    temp_range: "-50 + 70 (X)",
    power_type: "В",
    output_signal_type: "Ц",
    has_builtin_indicator: false,
    price_rub: 35807
  },
  "DA_6300_Exia_-50+70(X)_B_C_0": {
    name: "Преобразователь давления АЛМАЗ ДА-6300 кПа-0,25%-Exia-X-E-O-Ц-G",
    modification: "ДА",
    upper_pressure_limit_kpa: 6300,
    explosion_protection: "Exia",
    temp_range: "-50 + 70 (X)",
    power_type: "В",
    output_signal_type: "Ц",
    has_builtin_indicator: false,
    price_rub: 35807
  },
  "DI_2.5_Exia_-50+70(X)_B_C_0": {
    name: "Преобразователь давления АЛМАЗ ДИ-2,5 кПа-0,25%-Exia-X-E-O-Ц-G",
    modification: "ДИ",
    upper_pressure_limit_kpa: 2.5,
    explosion_protection: "Exia",
    temp_range: "-50 + 70 (X)",
    power_type: "В",
    output_signal_type: "Ц",
    has_builtin_indicator: false,
    price_rub: 35807
  },
  "DI_25000_Exia_-50+70(X)_B_C_I": {
    name: "Преобразователь давления АЛМАЗ ДИ-25000 кПа-0,25%-Exia-X-E-O-Ц-G",
    modification: "ДИ",
    upper_pressure_limit_kpa: 25000,
    explosion_protection: "Exia",
    temp_range: "-50 + 70 (X)",
    power_type: "В",
    output_signal_type: "Ц",
    has_builtin_indicator: true,
    price_rub: 35807
  },
  "DI_400_Exia_-50+70(X)_B_C_I": {
    name: "Преобразователь давления АЛМАЗ ДИ-400 кПа-0,25%-Exia-X-E-O-Ц-G",
    modification: "ДИ",
    upper_pressure_limit_kpa: 400,
    explosion_protection: "Exia",
    temp_range: "-50 + 70 (X)",
    power_type: "В",
    output_signal_type: "Ц",
    has_builtin_indicator: true,
    price_rub: 35807
  },
  "DI_6000_Exia_-50+70(X)_B_C_I": {
    name: "Преобразователь давления АЛМАЗ ДИ-6000 кПа-0,25%-Exia-X-E-O-Ц-G",
    modification: "ДИ",
    upper_pressure_limit_kpa: 6000,
    explosion_protection: "Exia",
    temp_range: "-50 + 70 (X)",
    power_type: "В",
    output_signal_type: "Ц",
    has_builtin_indicator: true,
    price_rub: 35807
  },
  "DA_6000_Exia_-50+70(X)_E_C_0": {
    name: "Преобразователь давления АЛМАЗ ДА-1000 кПа-0,25-Exia-X-E-O-Ц",
    modification: "ДА",
    upper_pressure_limit_kpa: 6000,
    explosion_protection: "Exia",
    temp_range: "-50 + 70 (X)",
    power_type: "Е",
    output_signal_type: "Ц",
    has_builtin_indicator: false,
    price_rub: 35807
  },
  "DA_1600_Exia_-50+70(X)_E_C_0_2": {
    name: "Преобразователь давления АЛМАЗ ДА-1000 кПа-0,1-Exia-X-E-O-Ц",
    modification: "ДА",
    upper_pressure_limit_kpa: 1600,
    explosion_protection: "Exia",
    temp_range: "-50 + 70 (X)",
    power_type: "Е",
    output_signal_type: "Ц",
    has_builtin_indicator: false,
    price_rub: 35807
  },
  "DA_25000_Exd_-50+70(X)_E_C_I": {
    name: "Преобразователь давления АЛМАЗ ВР20-ДА-25000 кПа-0,25-Exd-X-E-H-Ц",
    modification: "ДА",
    upper_pressure_limit_kpa: 25000,
    explosion_protection: "Exd",
    temp_range: "-50 + 70 (X)",
    power_type: "Е",
    output_signal_type: "Ц",
    has_builtin_indicator: true,
    price_rub: 99503
  }
};