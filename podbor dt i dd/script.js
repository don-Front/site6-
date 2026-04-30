// База данных датчиков с их характеристиками
const sensorsDatabase = [
    {
        id: 1,
        modification: "ДА",
        pressureRange: "0-40000",
        maxPressure: 40000,
        accuracy: [0.075, 0.1, 0.15, 0.25, 0.5],
        explosionProtection: ["Exi", "Exd"],
        temperatureRange: ["M", "X"],
        powerType: ["A", "B"],
        indicator: ["И", "0"],
        outputSignal: ["Т", "П", "Ц", "М"],
        measuredMedium: ["G", "Н", "S"],
        description: "Датчик абсолютного давления"
    },
    {
        id: 2,
        modification: "ДИ",
        pressureRange: "-100-40000",
        maxPressure: 40000,
        accuracy: [0.075, 0.1, 0.15, 0.25, 0.5],
        explosionProtection: ["Exi", "Exd"],
        temperatureRange: ["M", "X"],
        powerType: ["A", "B"],
        indicator: ["И", "0"],
        outputSignal: ["Т", "П", "Ц", "М"],
        measuredMedium: ["G", "Н", "S"],
        description: "Датчик избыточного давления"
    },
    {
        id: 3,
        modification: "ДД",
        pressureRange: "0-14000",
        maxPressure: 21000,
        accuracy: [0.075, 0.1, 0.15, 0.25, 0.5],
        explosionProtection: ["Exi", "Exd"],
        temperatureRange: ["M", "X"],
        powerType: ["A", "B"],
        indicator: ["И", "0"],
        outputSignal: ["Т", "П", "Ц", "М"],
        measuredMedium: ["G", "Н", "S"],
        description: "Датчик давления"
    }
];

// Стандартные ряды давления в кПа
const standardPressureSeries = [1600, 2500, 4000, 6300, 10000, 16000, 25000, 40000];

// Функция для поиска ближайшего наибольшего значения из стандартного ряда
function getNextPressureFromSeries(inputPressure) {
    // Находим первое значение в ряду, которое больше или равно введенному пользователем
    for (let pressure of standardPressureSeries) {
        if (pressure >= inputPressure) {
            return pressure;
        }
    }
    // Если введенное значение больше максимального в ряду, возвращаем максимальное
    return standardPressureSeries[standardPressureSeries.length - 1];
}

// Маппинг значений для генерации маски
const maskMapping = {
    modification: {
        "ДА": "ДА",
        "ДИ": "ДИ", 
        "ДД": "ДД"
    },
    pressureRange: {
        "0-40000": "4.0",
        "-100-40000": "4.0",
        "0-14000": "1.4"
    },
    accuracy: {
        "0.075": "0.075",
        "0.1": "0.1",
        "0.15": "0.15",
        "0.25": "0.25",
        "0.5": "0.5"
    },
    explosionProtection: {
        "Exi": "Exi",
        "Exd": "Exd"
    },
    temperatureRange: {
        "M": "M",
        "X": "X"
    },
    powerType: {
        "A": "A",
        "B": "B"
    },
    indicator: {
        "И": "И",
        "0": "0"
    },
    outputSignal: {
        "Т": "Т",
        "П": "П",
        "Ц": "Ц",
        "М": "М"
    },
    measuredMedium: {
        "G": "G",
        "Н": "Н",
        "S": "S"
    }
};

// Инициализация приложения
document.addEventListener('DOMContentLoaded', function() {
    initializeEventListeners();
    // Убираем вызов updateMaskDisplay так как маска теперь статична
    initializeTabs();
});

// Универсальный парсер числового ввода с поддержкой запятой
function readNum(id) {
    const el = document.getElementById(id);
    if (!el) return NaN;
    const raw = (el.value || '').replace(/\s+/g, '').replace(/,/g, '.');
    const num = parseFloat(raw);
    return Number.isFinite(num) ? num : NaN;
}

function initializeEventListeners() {
    // Кнопка поиска датчиков
    document.getElementById('find-sensors').addEventListener('click', findSensors);
    
    // Кнопка очистки формы
    document.getElementById('clear-form').addEventListener('click', clearForm);
    
    // Убираем автоматическое обновление маски - маска должна показываться только при нажатии кнопки "подбор и расчёт"
    
    // Event listener для обновления ограничений полей ввода при изменении типа преобразователя
    document.getElementById('pressure-range').addEventListener('change', updatePressureInputLimits);
    
    // Инициализация ограничений при загрузке страницы
    updatePressureInputLimits();
    
    // Event listeners для валидации в реальном времени
    document.getElementById('min-pressure').addEventListener('input', validatePressureInputs);
    document.getElementById('max-pressure').addEventListener('input', validatePressureInputs);
    document.getElementById('pressure-range').addEventListener('change', function() {
        // Очищаем ошибки при смене типа преобразователя
        clearValidationErrors();
        // Запускаем валидацию если поля заполнены
        if (document.getElementById('min-pressure').value || document.getElementById('max-pressure').value) {
            validatePressureInputs();
        }
    });
    
    // Убираем обновление маски так как она теперь статична
    // const formElements = document.querySelectorAll('select, input');
    // formElements.forEach(element => {
    //     element.addEventListener('change', updateMaskDisplay);
    // });
}

function initializeTabs() {
    const btnPs = document.getElementById('tab-btn-ps');
    const btnOther = document.getElementById('tab-btn-other');
    const btnTs = document.getElementById('tab-btn-ts');
    const panelPs = document.getElementById('tab-ps');
    const panelPsResults = document.getElementById('tab-ps-results');
    const panelOther = document.getElementById('tab-other');
    const panelTs = document.getElementById('tab-ts');
    const panelTsResults = document.getElementById('tab-ts-results');

    // Минимальные требования: вкладки PS и Other и их панели
    if (!btnPs || !btnOther || !panelPs || !panelOther || !panelPsResults) return;

    const setActive = (active) => {
        const tabs = [btnPs, btnOther, btnTs].filter(Boolean);
        tabs.forEach(t => t.classList.remove('active'));
        active.classList.add('active');

        const showPs = active === btnPs;
        const showOther = active === btnOther;
        const showTs = btnTs ? active === btnTs : false;

        if (panelPs) panelPs.hidden = !showPs;
        if (panelPsResults) panelPsResults.hidden = !showPs;
        if (panelOther) panelOther.hidden = !showOther;
        if (panelTs) panelTs.hidden = !showTs;
        if (panelTsResults) panelTsResults.hidden = !showTs;
    };

    btnPs.addEventListener('click', () => setActive(btnPs));
    btnOther.addEventListener('click', () => setActive(btnOther));
    if (btnTs) btnTs.addEventListener('click', () => setActive(btnTs));

    // Инициализация: активна вкладка PS
    setActive(btnPs);
}

// Заглушка: обработчики для формы датчиков температуры
document.addEventListener('DOMContentLoaded', function() {
    const tsScheme = [
        { dn: 50, pnMin: 1.6, pnMax: 25, sensor: 'Термопреобразователь TP02 01 A J XX XX A 1G, (-50…+200) подвижный штуцер M20x1,5; шейка 60 мм', sleeve: 'UFG-050-250.05.20.100' },
        { dn: 65, pnMin: 1.6, pnMax: 25, sensor: 'Термопреобразователь TP02 01 A J XX XX A 1G, (-50…+200) подвижный штуцер M20x1,5; шейка 60 мм', sleeve: 'UFG-050-250.05.20.100' },
        { dn: 80, pnMin: 1.6, pnMax: 10, sensor: 'Термометр сопротивления ТС-20/14/Exd/100П/−50…+150/6/А/Н4/Г7-22xx/ШК01/Н13-01-100-M20x1,5-Н10', sleeve: 'Гильза в комплекте с термометром' },
        { dn: 100, pnMin: 1.6, pnMax: 10, sensor: 'Термометр сопротивления ТС-20/14/Exd/100П/−50…+150/6/А/Н4/Г7-22xx/ШК01/Н13-01-100-M20x1,5-Н10', sleeve: 'Гильза в комплекте с термометром' },
        { dn: 125, pnMin: 1.6, pnMax: 10, sensor: 'Термометр сопротивления ТС-20/14/Exd/100П/−50…+150/6/А/Н4/Г7-22xx/ШК01/Н13-01-160-M20x1,5-Н10', sleeve: 'Гильза в комплекте с термометром' },
        { dn: 150, pnMin: 1.6, pnMax: 10, sensor: 'Термометр сопротивления ТС-20/14/Exd/100П/−50…+160/6/А/Н4/Г7-22xx/ШК01/Н13-01-160-M20x1,5-Н10', sleeve: 'Гильза в комплекте с термометром' },
        { dn: 200, pnMin: 1.6, pnMax: 10, sensor: 'Термометр сопротивления ТС-20/14/Exd/100П/−50…+160/6/А/Н4/Г7-22xx/ШК01/Н13-01-160-M20x1,5-Н10', sleeve: 'Гильза в комплекте с термометром' },
        { dn: 250, pnMin: 1.6, pnMax: 10, sensor: 'Термометр сопротивления ТС-20/14/Exd/100П/−50…+160/6/А/Н4/Г7-22xx/ШК01/Н13-01-160-M20x1,5-Н10', sleeve: 'Гильза в комплекте с термометром' },
        { dn: 300, pnMin: 1.6, pnMax: 10, sensor: 'Термометр сопротивления ТС-20/14/Exd/100П/−50…+160/6/А/Н4/Г7-22xx/ШК01/Н13-01-160-M20x1,5-Н10', sleeve: 'Гильза в комплекте с термометром' },
        { dn: 350, pnMin: 1.6, pnMax: 10, sensor: 'Термометр сопротивления ТС-20/14/Exd/100П/−50…+160/6/А/Н4/Г7-22xx/ШК01/Н13-01-160-M20x1,5-Н10', sleeve: 'Гильза в комплекте с термометром' },
        { dn: 400, pnMin: 1.6, pnMax: 10, sensor: 'Термометр сопротивления ТС-20/14/Exd/100П/−50…+160/6/А/Н4/Г7-22xx/ШК01/Н13-01-160-M20x1,5-Н10', sleeve: 'Гильза в комплекте с термометром' },
        { dn: 450, pnMin: 1.6, pnMax: 10, sensor: 'Термометр сопротивления ТС-20/14/Exd/100П/−50…+270/6/А/Н4/Г7-22xx/ШК01/Н13-01-270-M20x1,5-Н10', sleeve: 'Гильза в комплекте с термометром' },
        { dn: 500, pnMin: 1.6, pnMax: 10, sensor: 'Термометр сопротивления ТС-20/14/Exd/100П/−50…+270/6/А/Н4/Г7-22xx/ШК01/Н13-01-270-M20x1,5-Н10', sleeve: 'Гильза в комплекте с термометром' },
        { dn: 600, pnMin: 1.6, pnMax: 25, sensor: 'Термометр сопротивления ТС-20/14/Exd/100П/−50…+282/6/А/Н4/Г7-22xx (резьба M20x1,5)', sleeve: 'UFG-050.250.05.20.001' },
        { dn: 700, pnMin: 1.6, pnMax: 25, sensor: 'Термометр сопротивления ТС-20/14/Exd/100П/−50…+282/6/А/Н4/Г7-22xx (резьба M20x1,5)', sleeve: 'UFG-250.250.05.20.004' },
        { dn: 800, pnMin: 1.6, pnMax: 25, sensor: 'Термометр сопротивления ТС-20/14/Exd/100П/−50…+282/6/А/Н4/Г7-22xx (резьба M20x1,5)', sleeve: 'UFG-250.250.05.20.005' }
    ];

    function buildTsResultsTable(dn, pressure) {
        const item = tsScheme.find(x => x.dn === dn);
        if (!item) {
            return '<p class="no-results">Dn не поддерживается данной схемой.</p>';
        }
        const ok = Number.isFinite(pressure) && pressure >= item.pnMin && pressure <= item.pnMax;
        const statusBadge = ok
            ? '<span class="status-badge ok">в пределах Pn</span>'
            : '<span class="status-badge bad">вне диапазона Pn</span>';
        const note = ok
            ? ''
            : '<div class="ts-note">Введённое давление (' + (Number.isFinite(pressure) ? pressure : '—') + ' МПа) вне диапазона Pn (' + item.pnMin + '…' + item.pnMax + ' МПа).</div>';

        return (
            '<div class="sensor-card ts-card">'
            +   '<div class="sensor-model">'
            +       '<span class="badge">Dn ' + item.dn + '</span>'
            +       '<span class="ts-range">Pn: ' + item.pnMin + '–' + item.pnMax + ' МПа</span>'
            +   '</div>'
            +   '<div class="sensor-specs">'
            +       '<div class="spec-item"><span class="spec-label">Подобранный термометр:</span> ' + item.sensor + '</div>'
            +       '<div class="spec-item"><span class="spec-label">Гильза:</span> ' + item.sleeve + '</div>'
            +       '<div class="spec-item"><span class="spec-label">Введённое давление:</span> ' + (Number.isFinite(pressure) ? pressure + ' МПа ' : '— ') + statusBadge + '</div>'
            +   '</div>'
            +   note
            + '</div>'
        );
    }

    const tsFindBtn = document.getElementById('ts-find-sensors');
    const tsClearBtn = document.getElementById('ts-clear-form');
    if (tsFindBtn) {
        tsFindBtn.addEventListener('click', () => {
            const dn = readNum('ts-dn');
            const pressure = readNum('ts-pressure');

            const container = document.getElementById('ts-results-container');
            if (!container) return;

            // Простая проверка ввода
            if (!Number.isFinite(dn) || !Number.isFinite(pressure)) {
                container.innerHTML = '<p class="no-results">Заполните диаметр (Dn) и давление (МПа).</p>';
                return;
            }
            container.innerHTML = buildTsResultsTable(dn, pressure);
        });
    }

    if (tsClearBtn) {
        tsClearBtn.addEventListener('click', () => {
            ['ts-dn','ts-pressure'].forEach(id => {
                const el = document.getElementById(id);
                if (!el) return;
                if (el.tagName === 'INPUT') el.value = '';
                else el.value = '';
            });
            const container = document.getElementById('ts-results-container');
            if (container) container.innerHTML = '<p class="no-results">Выберите параметры и нажмите "Подобрать ДТ"</p>';
        });
    }
});

// Поддержка ввода десятичных значений: разрешаем запятые, убираем пробелы
document.addEventListener('DOMContentLoaded', function() {
    const decimalInputs = Array.from(document.querySelectorAll('input[inputmode="decimal"]'));
    decimalInputs.forEach((input) => {
        input.addEventListener('input', () => {
            input.value = input.value.replace(/\s+/g, '');
        });
    });
});

// Функция для расчета подбора датчика перепада давления
function calculateSensorSelection() {
    const dn = readNum('dp-dn'); // мм
    const xi = readNum('dp-xi');
    const qmax_h = readNum('dp-qmax'); // м³/ч
    const rho_c = readNum('dp-rho'); // кг/м³ при с.у.
    const pmax = readNum('dp-pmax'); // МПа (изб.)
    const tmin = readNum('dp-tmin'); // °C

    if ([dn, xi, pmax, tmin, qmax_h].some(v => isNaN(v))) {
        return; // Не все поля заполнены
    }

    // Переводы единиц
    const D = dn * 1e-3; // м
    const denom = Math.pow(Math.PI, 2) * Math.pow(D, 4);
    const area = Math.PI * Math.pow(D, 2) / 4; // м²

    const formatDigitsMap = {
        'dp-wmax': 8,
        'dp-domega-max-pa': 6,
        'dp-domega-max-kpa': 3,
        'dp-domega-max-mpa': 6,
        'dp-required-pa': 5,
        'dp-required-kpa': 3,
        'dp-required-mpa': 6,
        'dp-dpmax': 6,
        'dp-dpmin': 6,
        'dp-dpmin-pa': 5,
        'dp-dpmin-kpa': 3,
        'dp-qmax-out': 3,
        'dp-qmin-out': 3,
        'dp-rho-work-max': 6,
        'dp-rho-work-min': 6,
    };

    const out = (id, val) => {
        const el = document.getElementById(id);
        if (!el) return;
        if (!Number.isFinite(val)) { el.textContent = '—'; return; }
        const digits = formatDigitsMap[id] ?? 3;
        el.textContent = new Intl.NumberFormat('ru-RU', {
            minimumFractionDigits: digits,
            maximumFractionDigits: digits,
        }).format(val);
    };

    // Рабочая плотность: рассчитываем из ρс, P и T с учётом сверхсжимаемости K
    const K_COMP = 0.857977285; // Константа сжимаемости
    const T_STD_K = 293.15;
    const P_STD_MPA = 0.101325;
    const toKelvin = (tc) => (tc != null && !isNaN(tc)) ? (tc + 273.15) : NaN;
    const toAbsPressureMPa = (pg) => (pg != null && !isNaN(pg)) ? (pg + P_STD_MPA) : NaN;
    const computeWorkingRho = (rhoStd, pGaugeMPa, tC) => {
        const T = toKelvin(tC);
        const Pabs = toAbsPressureMPa(pGaugeMPa);
        if ([rhoStd, T, Pabs].some(v => v == null || isNaN(v))) return NaN;
        return rhoStd * (Pabs / P_STD_MPA) * (T_STD_K / T) * (1 / K_COMP);
    };

    const rhoForQmax = computeWorkingRho(rho_c, pmax, tmin);
    out('dp-rho-work-max', rhoForQmax);

    // Рассчёт Δp для qmax
    if (!isNaN(qmax_h)) {
        const Qv_max = qmax_h / 3600; // м³/с
        const Wmax = (4 * Qv_max) / (3.141592654 * Math.pow(dn / 1000, 2)); // м/с
        const dpMaxPa = xi * 8 * rhoForQmax * Math.pow(Qv_max, 2) / (Math.pow(Math.PI, 2) * Math.pow(Math.pow(10, -3) * dn, 4)); // Па
        const dpMaxMPa = dpMaxPa / 1e6; // МПа
        const pvpiPa = dpMaxPa * 1.5; // Па
        
        // Выводим основные результаты
        out('dp-rho-work-max', rhoForQmax);
        out('dp-wmax', Wmax);
        out('dp-domega-max-pa', dpMaxPa);
        out('dp-domega-max-kpa', dpMaxPa / 1000);
        out('dp-domega-max-mpa', dpMaxMPa);
        out('dp-pvpi-pa', pvpiPa);
        
        // Подбор датчика перепада давления
        const gamma = readNum('dp-gamma');
        
        if (!isNaN(gamma)) {
            // Ряды ВПИ в кПа и МПа
            const vpiRangeKPa = [1.6, 2.5, 4.0, 6.0, 6.3, 10, 16, 25, 40, 60, 63, 100, 160, 250, 400, 600, 630];
            const vpiRangeMPa = [1.0, 1.6, 2.5, 4.0, 6.0, 6.3, 10, 16];
            
            const minVpiKPa = 1.5 * (dpMaxPa / 1000); // кПа
            
            // Поиск подходящего ВПИ из ряда кПа
            let selectedVpiKPa = null;
            for (let vpi of vpiRangeKPa) {
                if (vpi >= minVpiKPa) {
                    selectedVpiKPa = vpi;
                    break;
                }
            }
            
            // Если не найден в кПа, ищем в МПа
            let selectedVpiMPa = null;
            if (!selectedVpiKPa) {
                const minVpiMPa = minVpiKPa / 1000; // МПа
                for (let vpi of vpiRangeMPa) {
                    if (vpi >= minVpiMPa) {
                        selectedVpiMPa = vpi;
                        selectedVpiKPa = vpi * 1000; // Переводим в кПа для расчётов
                        break;
                    }
                }
            }
            
            const workingPressureKPa = (pmax + 0.101325) * 1000; // кПа
            const pressureFromSeries = getNextPressureFromSeries(workingPressureKPa); // кПа
            const workingPressure = pressureFromSeries / 1000; // МПа
            
            // Проверка точности: U = 2 × 0,5 × γ × (РВПИ / Δωmax)
            let accuracyU = NaN;
            let accuracyCheck = "—";
            
            if (selectedVpiKPa) {
                const rvpi = selectedVpiKPa; // кПа
                const deltaOmegaMaxKPa = dpMaxPa / 1000; // кПа
                accuracyU = 2 * 0.5 * gamma * (rvpi / deltaOmegaMaxKPa); // %
                accuracyCheck = accuracyU <= 5 ? "✓ Соответствует (U ≤ 5%)" : "✗ Не соответствует (U > 5%)";
            }
            
            // Вывод результатов подбора датчика
            out('dp-min-vpi-kpa', minVpiKPa);
            out('dp-selected-vpi-kpa', selectedVpiKPa || "Не найден");
            out('dp-working-pressure', workingPressure);
            out('dp-accuracy-u', accuracyU);
            
            // Применяем цветовую подсветку к результату проверки точности
            const accuracyCheckElement = document.getElementById('dp-accuracy-check');
            accuracyCheckElement.textContent = accuracyCheck;
            
            // Удаляем все предыдущие классы подсветки
            accuracyCheckElement.classList.remove('accuracy-check-success', 'accuracy-check-error', 'accuracy-check-neutral');
            
            // Применяем соответствующий класс
            if (accuracyCheck.includes('✓ Соответствует')) {
                accuracyCheckElement.classList.add('accuracy-check-success');
            } else if (accuracyCheck.includes('✗ Не соответствует')) {
                accuracyCheckElement.classList.add('accuracy-check-error');
            } else {
                accuracyCheckElement.classList.add('accuracy-check-neutral');
            }
            
            // Маска датчика убрана по требованию пользователя
        } else {
            // Если γ не выбрано, выводим только минимальный ВПИ
            const minVpiKPa = 1.5 * (dpMaxPa / 1000); // кПа
            out('dp-min-vpi-kpa', minVpiKPa);
            out('dp-selected-vpi-kpa', "—");
            const workingPressureKPaElse = (pmax + 0.101325) * 1000; // кПа
            const pressureFromSeriesElse = getNextPressureFromSeries(workingPressureKPaElse); // кПа
            const workingPressureElse = pressureFromSeriesElse / 1000; // МПа
            out('dp-working-pressure', workingPressureElse);
            out('dp-accuracy-u', "—");
            
            // Применяем нейтральную подсветку для случая, когда γ не выбрано
            const accuracyCheckElement = document.getElementById('dp-accuracy-check');
            accuracyCheckElement.textContent = "Выберите γ для проверки точности";
            accuracyCheckElement.classList.remove('accuracy-check-success', 'accuracy-check-error', 'accuracy-check-neutral');
            accuracyCheckElement.classList.add('accuracy-check-neutral');
        }
    }
    
    // Обновляем сформированную маску после расчётов
    updateGeneratedMask();
}

// Расчёт расхода по перепаду давления (упрощённая формула для демонстрации)
document.addEventListener('DOMContentLoaded', function() {
    const calcBtn = document.getElementById('dp-calc');
    if (!calcBtn) return;
    calcBtn.addEventListener('click', () => {
        calculateSensorSelection();
    });
    
    // Добавляем обработчик события для автоматического пересчета при изменении γ
    const gammaSelect = document.getElementById('dp-gamma');
    if (gammaSelect) {
        gammaSelect.addEventListener('change', () => {
            calculateSensorSelection();
        });
    }
});

function findSensors() {
    const criteria = getSearchCriteria();
    const results = filterSensors(criteria);
    displayResults(results, criteria);
    
    // Обновляем маску только при нажатии кнопки поиска
    updateGeneratedMask();
}

function getSearchCriteria() {
    const criteria = {
        pressureRange: document.getElementById('pressure-range').value,
        maxPressure: readNum('max-pressure') || null,
        accuracy: readNum('accuracy') || null,
        explosionProtection: document.getElementById('explosion-protection').value,
        temperatureRange: document.getElementById('temperature-range').value,
        powerType: document.getElementById('power-type').value,
        indicator: document.getElementById('indicator').value,
        outputSignal: document.getElementById('output-signal').value,
        measuredMedium: document.getElementById('measured-medium').value
    };
    return criteria;
}

function filterSensors(criteria) {
    return sensorsDatabase.filter(sensor => {
        // Проверка типа преобразователя давления (absolute/excess) через модификацию датчика
        if (criteria.pressureRange) {
            const typeToModification = { absolute: "ДА", excess: "ДИ" };
            const requiredModification = typeToModification[criteria.pressureRange];
            if (requiredModification && sensor.modification !== requiredModification) {
                return false;
            }
        }
        
        // Проверка максимального рабочего давления
        if (criteria.maxPressure && sensor.maxPressure < criteria.maxPressure) {
            return false;
        }
        
        // Проверка точности
        if (criteria.accuracy && !sensor.accuracy.includes(criteria.accuracy)) {
            return false;
        }
        
        // Проверка взрывозащиты
        if (criteria.explosionProtection && !sensor.explosionProtection.includes(criteria.explosionProtection)) {
            return false;
        }
        
        // Проверка температурного диапазона
        if (criteria.temperatureRange && !sensor.temperatureRange.includes(criteria.temperatureRange)) {
            return false;
        }
        
        // Проверка типа питания
        if (criteria.powerType && !sensor.powerType.includes(criteria.powerType)) {
            return false;
        }
        
        // Проверка индикатора
        if (criteria.indicator && !sensor.indicator.includes(criteria.indicator)) {
            return false;
        }
        
        // Проверка выходного сигнала
        if (criteria.outputSignal && !sensor.outputSignal.includes(criteria.outputSignal)) {
            return false;
        }
        
        // Проверка измеряемой среды
        if (criteria.measuredMedium && !sensor.measuredMedium.includes(criteria.measuredMedium)) {
            return false;
        }
        
        return true;
    });
}

function displayResults(results, criteria) {
    const container = document.getElementById('results-container');
    
    if (results.length === 0) {
        container.innerHTML = '<p class="no-results">По заданным критериям датчики не найдены. Попробуйте изменить параметры поиска.</p>';
        return;
    }
    
    let html = `<div class="success-message">Найдено подходящих датчиков: ${results.length}</div>`;
    
    results.forEach(sensor => {
        const generatedMask = generateSensorMask(sensor, criteria);
        // Определяем тип датчика в зависимости от взрывозащиты
        const sensorType = criteria.explosionProtection === "Exd" ? "20" : "10";
        // Вычисляем стандартное давление из маски
        const standardPressure = criteria.maxPressure ? getNextPressureFromSeries(criteria.maxPressure) : sensor.maxPressure;
        html += `
            <div class="sensor-card">
                <div class="sensor-model">Turbo Flow-PS–BP-${sensorType}-${generatedMask}</div>
                <div class="sensor-specs">
                    <div class="spec-item">
                        <span class="spec-label">Модификация:</span> ${sensor.modification} (${sensor.description})
                    </div>
                    <div class="spec-item">
                        <span class="spec-label">Диапазон давления:</span> ${formatPressureRange(sensor.pressureRange)} кПа
                    </div>
                    <div class="spec-item">
                        <span class="spec-label">Макс. рабочее давление:</span> ${standardPressure} кПа
                    </div>
                    <div class="spec-item">
                        <span class="spec-label">Точность:</span> ±${criteria.accuracy || sensor.accuracy.join(', ±')}%
                    </div>
                    <div class="spec-item">
                        <span class="spec-label">Взрывозащита:</span> ${formatExplosionProtection(criteria.explosionProtection)}
                    </div>
                    <div class="spec-item">
                        <span class="spec-label">Температура:</span> ${formatTemperatureRange(criteria.temperatureRange)}
                    </div>
                    <div class="spec-item">
                        <span class="spec-label">Питание:</span> ${formatPowerType(criteria.powerType)}
                    </div>
                    <div class="spec-item">
                        <span class="spec-label">Индикатор:</span> ${formatIndicator(criteria.indicator)}
                    </div>
                    <div class="spec-item">
                        <span class="spec-label">Выходной сигнал:</span> ${formatOutputSignal(criteria.outputSignal)}
                    </div>
                    <div class="spec-item">
                        <span class="spec-label">Измеряемая среда:</span> ${formatMeasuredMedium(criteria.measuredMedium)}
                    </div>
                </div>
            </div>
        `;
    });
    
    container.innerHTML = html;
}

function generateSensorMask(sensor, criteria) {
    const parts = [];
    
    // 1. Модификация
    parts.push(maskMapping.modification[sensor.modification] || "XXX");
    
    // 2. Верхний предел измеряемых давлений (используем ближайшее наибольшее значение из стандартного ряда)
    const standardPressure = criteria.maxPressure ? getNextPressureFromSeries(criteria.maxPressure) : null;
    parts.push(standardPressure ? standardPressure.toString() : "XXXXX");
    
    // 4. Предел допускаемой основной погрешности
    parts.push(criteria.accuracy ? criteria.accuracy.toString().replace('.', ',') : "XXX");
    
    // 5. Исполнение взрывозащиты
    parts.push(criteria.explosionProtection ? maskMapping.explosionProtection[criteria.explosionProtection] : "X");
    
    // 6. Диапазон температур окружающей среды
    parts.push(criteria.temperatureRange ? maskMapping.temperatureRange[criteria.temperatureRange] : "X");
    
    // 7. Тип напряжения питания
    parts.push(criteria.powerType ? maskMapping.powerType[criteria.powerType] : "X");
    
    // 8. Встроенный индикатор
    parts.push(criteria.indicator ? maskMapping.indicator[criteria.indicator] : "X");
    
    // 9. Тип выходного сигнала
    parts.push(criteria.outputSignal ? maskMapping.outputSignal[criteria.outputSignal] : "X");
    
    // 10. Измеряемая среда
    parts.push(criteria.measuredMedium ? maskMapping.measuredMedium[criteria.measuredMedium] : "X");
    
    return parts.join("-");
}

// Функция для интерактивного формирования маски датчика
function initializeMaskBuilder() {
    // Обработчики событий для всех элементов выбора характеристик
    const maskInputs = [
        'mask-explosion-protection',
        'mask-temperature-range',
        'mask-power-type',
        'mask-indicator',
        'mask-output-signal',
        'mask-measured-medium'
    ];

    // Добавляем автоматические обработчики для обновления маски при изменении параметров
    maskInputs.forEach(inputId => {
        const element = document.getElementById(inputId);
        if (element) {
            element.addEventListener('change', updateGeneratedMask);
        }
    });
}

// Функция для валидации введенных значений
function validateMaskInputs() {
    let isValid = true;
    let errorMessages = [];

    // Проверяем наличие взрывозащиты
    const explosionProtection = document.getElementById('mask-explosion-protection')?.value;
    if (!explosionProtection) {
        isValid = false;
        errorMessages.push('Необходимо выбрать исполнение взрывозащиты');
    }

    // Проверяем наличие температурного диапазона
    const temperatureRange = document.getElementById('mask-temperature-range')?.value;
    if (!temperatureRange) {
        isValid = false;
        errorMessages.push('Необходимо выбрать диапазон температур');
    }

    // Проверяем наличие типа питания
    const powerType = document.getElementById('mask-power-type')?.value;
    if (!powerType) {
        isValid = false;
        errorMessages.push('Необходимо выбрать тип напряжения питания');
    }

    // Проверяем наличие индикатора
    const indicator = document.getElementById('mask-indicator')?.value;
    if (!indicator) {
        isValid = false;
        errorMessages.push('Необходимо выбрать встроенный индикатор');
    }

    // Проверяем наличие выходного сигнала
    const outputSignal = document.getElementById('mask-output-signal')?.value;
    if (!outputSignal) {
        isValid = false;
        errorMessages.push('Необходимо выбрать тип выходного сигнала');
    }

    // Проверяем наличие измеряемой среды
    const measuredMedium = document.getElementById('mask-measured-medium')?.value;
    if (!measuredMedium) {
        isValid = false;
        errorMessages.push('Необходимо выбрать измеряемую среду');
    }

    // Отображение ошибок валидации
    displayValidationErrors(errorMessages);
    
    return isValid;
}

// Функция для отображения ошибок валидации
function displayValidationErrors(errors) {
    let errorContainer = document.getElementById('mask-validation-errors');
    
    // Создаем контейнер для ошибок, если его нет
    if (!errorContainer) {
        errorContainer = document.createElement('div');
        errorContainer.id = 'mask-validation-errors';
        errorContainer.className = 'validation-errors';
        
        const maskSection = document.querySelector('.mask-section');
        if (maskSection) {
            maskSection.insertBefore(errorContainer, maskSection.firstChild);
        }
    }

    // Очищаем предыдущие ошибки
    errorContainer.innerHTML = '';

    if (errors.length > 0) {
        errorContainer.style.display = 'block';
        errorContainer.classList.add('show');
        const errorList = document.createElement('ul');
        
        errors.forEach(error => {
            const errorItem = document.createElement('li');
            errorItem.textContent = error;
            errorList.appendChild(errorItem);
        });
        
        const errorTitle = document.createElement('h4');
        errorTitle.textContent = 'Ошибки валидации:';
        
        errorContainer.appendChild(errorTitle);
        errorContainer.appendChild(errorList);
    } else {
        errorContainer.style.display = 'none';
        errorContainer.classList.remove('show');
    }
}

// Функция для форматирования значений при вводе
function formatInputValue(inputId, value) {
    switch(inputId) {
        case 'mask-accuracy':
            // Форматируем точность с запятой
            if (value && !isNaN(parseFloat(value.replace(',', '.')))) {
                return value.replace('.', ',');
            }
            break;
        case 'mask-pressure-range':
        case 'mask-max-pressure':
            // Форматируем давление как число
            if (value && !isNaN(parseFloat(value))) {
                return parseFloat(value).toString();
            }
            break;
    }
    return value;
}

// Обновленная функция для обновления сгенерированной маски с валидацией
function updateGeneratedMask() {
    // Сначала проводим валидацию
    const isValid = validateMaskInputs();
    
    // Получаем ВПИ из расчёта
    const vpiElement = document.getElementById('dp-selected-vpi-kpa');
    const vpiFromCalculation = vpiElement ? vpiElement.textContent : null;
    const vpiKPa = (vpiFromCalculation && vpiFromCalculation !== '—' && vpiFromCalculation !== 'Не найден') 
        ? parseFloat(vpiFromCalculation.replace(',', '.').replace(/\s/g, '')) 
        : null;
    
    // Получаем максимальное рабочее давление из расчёта
    const workingPressureElement = document.getElementById('dp-working-pressure');
    const workingPressureFromCalculation = workingPressureElement ? workingPressureElement.textContent : null;
    const workingPressureMPa = (workingPressureFromCalculation && workingPressureFromCalculation !== '—') 
        ? parseFloat(workingPressureFromCalculation.replace(',', '.').replace(/\s/g, '')) 
        : null;
    
    // Получаем погрешность из выбранного γ
    const gammaElement = document.getElementById('dp-gamma');
    const gammaFromCalculation = gammaElement ? gammaElement.value : null;
    const accuracy = (gammaFromCalculation && gammaFromCalculation !== '') 
        ? gammaFromCalculation 
        : 'X,XXX';
    
    // Получаем значения из формы маски
    const explosionProtection = document.getElementById('mask-explosion-protection')?.value || 'X';
    const temperatureRange = document.getElementById('mask-temperature-range')?.value || 'X';
    const powerType = document.getElementById('mask-power-type')?.value || 'X';
    const indicator = document.getElementById('mask-indicator')?.value || 'X';
    const outputSignal = document.getElementById('mask-output-signal')?.value || 'X';
    const measuredMedium = document.getElementById('mask-measured-medium')?.value || 'X';

    // Определяем тип датчика на основе взрывозащиты
    const sensorType = explosionProtection === "Exd" ? "20" : "10";
    
    // Определяем модификацию датчика (всегда ДД для датчика перепада давления)
    const modification = "ДД";
    
    // Формируем диапазон давления в формате ВПИ/Максимальное рабочее давление
    let pressureRange = "X,X";
    if (vpiKPa && workingPressureMPa) {
        // Форматируем ВПИ в кПа (убираем лишние нули после запятой)
        const vpiFormatted = vpiKPa.toString().replace('.', ',');
        // Конвертируем рабочее давление из МПа в кПа
        const workingPressureKPa = Math.round(workingPressureMPa * 1000);
        // Находим следующее значение из стандартного ряда давлений
        const nextPressureFromSeries = getNextPressureFromSeries(workingPressureKPa);
        pressureRange = `${vpiFormatted}/${nextPressureFromSeries}`;
    }
    
    // Форматируем точность с запятой
    const accuracyFormatted = accuracy ? accuracy.toString().replace('.', ',') : 'X,XXX';

    // Формирование полной маски в формате:
    // Turbo Flow-PS–BP-10–ДД–0,6/25000 кПа–0,075–X–X–X–X–X–X
    const generatedMask = `Turbo Flow-PS–BP-${sensorType}–${modification}–${pressureRange} кПа–${accuracyFormatted}–${explosionProtection}–${temperatureRange}–${powerType}–${indicator}–${outputSignal}–${measuredMedium}`;

    // Обновление отображения маски
    const maskDisplay = document.getElementById('generated-mask-display');
    if (maskDisplay) {
        maskDisplay.textContent = generatedMask;
        
        // Добавляем визуальную индикацию валидности
        const maskSection = document.querySelector('.mask-section');
        if (maskSection) {
            if (isValid) {
                maskSection.classList.remove('invalid-mask');
                maskSection.classList.add('valid-mask');
            } else {
                maskSection.classList.remove('valid-mask');
                maskSection.classList.add('invalid-mask');
            }
        }
    }
}

// Добавляем обработчик для взрывозащиты
document.addEventListener('DOMContentLoaded', function() {
    initializeMaskBuilder();
});

// Функция для генерации маски датчика перепада давления в упрощенном формате
function generateDifferentialPressureMask(selectedVpiKPa, workingPressure, gamma, explosionProtection = "Exi") {
    const parts = [];
    
    // 1. Тип датчика
    const sensorType = explosionProtection === "Exd" ? "20" : "10";
    parts.push(sensorType);
    
    // 2. ДД - для датчиков перепада давления всегда ДД
    parts.push("ДД");
    
    // 3. ВПИ/рабочее давление в кПа (например: 0,6/16000)
    const vpiFormatted = selectedVpiKPa ? selectedVpiKPa.toString().replace('.', ',') : "X,XXX";
    const workingPressureFormatted = workingPressure ? workingPressure.toString() : "XXXXX";
    parts.push(`${vpiFormatted}/${workingPressureFormatted} кПа`);
    
    // 4. Точность с запятой (например: 0,075)
    const accuracyFormatted = gamma ? gamma.toString().replace('.', ',') : "X,XXX";
    parts.push(accuracyFormatted);
    
    return "Turbo Flow-PS–BP-" + parts.join("–");
}

// Функция updateMaskDisplay удалена, так как маска теперь статична в HTML

// Функция для обновления маски на основе выбранного типа взрывозащиты и типа преобразователя
function updateMaskBasedOnExplosionProtection() {
    const explosionProtectionSelect = document.getElementById('explosion-protection');
    const pressureRangeSelect = document.getElementById('pressure-range');
    const accuracySelect = document.getElementById('accuracy');
    const temperatureRangeSelect = document.getElementById('temperature-range');
    const powerTypeSelect = document.getElementById('power-type');
    const indicatorSelect = document.getElementById('indicator');
    const outputSignalSelect = document.getElementById('output-signal');
    const measuredMediumSelect = document.getElementById('measured-medium');
    const maskPatternElement = document.querySelector('.mask-pattern');
    
    if (!explosionProtectionSelect || !maskPatternElement || !pressureRangeSelect) return;
    
    const explosionProtectionValue = explosionProtectionSelect.value;
    const pressureRangeValue = pressureRangeSelect.value;
    const accuracyValue = accuracySelect ? accuracySelect.value : '';
    const temperatureRangeValue = temperatureRangeSelect ? temperatureRangeSelect.value : '';
    const powerTypeValue = powerTypeSelect ? powerTypeSelect.value : '';
    const indicatorValue = indicatorSelect ? indicatorSelect.value : '';
    const outputSignalValue = outputSignalSelect ? outputSignalSelect.value : '';
    const measuredMediumValue = measuredMediumSelect ? measuredMediumSelect.value : '';
    
    // Определяем тип преобразователя для маски
    let pressureType = 'XX';
    if (pressureRangeValue === 'excess') {
        pressureType = 'ДИ';
    } else if (pressureRangeValue === 'absolute') {
        pressureType = 'ДА';
    }
    
    // Определяем диапазон давления для маски
    let pressureRange = 'XX';
    if (pressureRangeValue === 'excess' || pressureRangeValue === 'absolute') {
        pressureRange = '4,0';
    }
    
    // Определяем погрешность для маски
    let accuracy = 'X,XXX';
    if (accuracyValue) {
        accuracy = accuracyValue.replace('.', ',');
    }
    
    // Определяем исполнение по взрывозащите для маски
    let explosionProtection = 'XXX';
    if (explosionProtectionValue) {
        explosionProtection = explosionProtectionValue;
    }
    
    // Определяем исполнение по температуре для маски
    let temperatureExecution = 'X';
    if (temperatureRangeValue) {
        temperatureExecution = temperatureRangeValue; // M или X
    }
    
    // Определяем тип напряжения питания для маски
    let powerType = 'X';
    if (powerTypeValue) {
        powerType = powerTypeValue; // A или B
    }
    
    // Определяем встроенный индикатор для маски
    let indicator = 'X';
    if (indicatorValue) {
        indicator = indicatorValue; // И или 0
    }
    
    // Определяем тип выходного сигнала для маски
    let outputSignal = 'X';
    if (outputSignalValue) {
        outputSignal = outputSignalValue; // Т, П, Ц, М
    }
    
    // Определяем измеряемую среду для маски
    let measuredMedium = 'Х';
    if (measuredMediumValue) {
        measuredMedium = measuredMediumValue; // G, Н, S
    }
    
    let maskText = '';
    
    if (explosionProtectionValue === 'Exd') {
        maskText = `Turbo Flow-PS–BP-20–${pressureType}–${pressureRange}–${accuracy}–${explosionProtection}–${temperatureExecution}–${powerType}–${indicator}–${outputSignal}–${measuredMedium}`;
    } else if (explosionProtectionValue === 'Exi') {
        maskText = `Turbo Flow-PS–BP-10–${pressureType}–${pressureRange}–${accuracy}–${explosionProtection}–${temperatureExecution}–${powerType}–${indicator}–${outputSignal}–${measuredMedium}`;
    } else {
        maskText = `Turbo Flow-PS–BP-XX–${pressureType}–${pressureRange}–${accuracy}–${explosionProtection}–${temperatureExecution}–${powerType}–${indicator}–${outputSignal}–${measuredMedium}`;
    }
    
    maskPatternElement.textContent = maskText;
}

function getModificationFromRange(pressureRange) {
    switch(pressureRange) {
        case "0-40000": return "ДА";
        case "-100-40000": return "ДИ";
        case "0-14000": return "ДД";
        default: return "XXX";
    }
}

function clearForm() {
    const formElements = document.querySelectorAll('select, input');
    formElements.forEach(element => {
        element.value = '';
    });
    
    document.getElementById('results-container').innerHTML = '<p class="no-results">Выберите параметры и нажмите "Найти подходящие датчики"</p>';
    // Убираем вызов updateMaskDisplay так как маска теперь статична
    // updateMaskDisplay();
}

// Функции форматирования для отображения
function formatPressureRange(range) {
    const ranges = {
        "0-40000": "0...40000",
        "-100-40000": "-100...40000", 
        "0-14000": "0...14000"
    };
    return ranges[range] || range;
}

function formatExplosionProtection(protection) {
    if (!protection) return "Не указано";
    return protection === "Exi" ? "Взрывозащищенное исполнение с искробезопасной цепью" : "Без взрывозащиты";
}

function formatTemperatureRange(range) {
    if (!range) return "Не указано";
    const ranges = {
        "M": "от -30°C до +80°C",
        "X": "от -50°C до +85°C"
    };
    return ranges[range] || range;
}

function formatPowerType(type) {
    if (!type) return "Не указано";
    const types = {
        "A": "Автономное",
        "B": "Внешнее"
    };
    return types[type] || type;
}

function formatIndicator(indicator) {
    if (!indicator) return "Не указано";
    return indicator === "И" ? "С индикатором" : "Без индикатора";
}

function formatOutputSignal(signal) {
    if (!signal) return "Не указано";
    const signals = {
        "Т": "4-20 мА (токовый)",
        "П": "0.4-2.0 В (потенциальный)",
        "Ц": "RS-485 (цифровой)",
        "М": "4-20 мА с HART-модемом"
    };
    return signals[signal] || signal;
}

function formatMeasuredMedium(medium) {
    if (!medium) return "Не указано";
    const mediums = {
        "G": "Газ",
        "Н": "Жидкость",
        "S": "Пар"
    };
    return mediums[medium] || medium;
}

// Валидация формы
function validateForm() {
    const requiredFields = ['pressure-range'];
    let isValid = true;
    
    requiredFields.forEach(fieldId => {
        const field = document.getElementById(fieldId);
        if (!field.value) {
            field.style.borderColor = '#e74c3c';
            isValid = false;
        } else {
            field.style.borderColor = '#27ae60';
        }
    });
    
    return isValid;
}

// Функция валидации полей ввода давления
function validatePressureInputs() {
    const pressureRangeSelect = document.getElementById('pressure-range');
    const minPressureInput = document.getElementById('min-pressure');
    const maxPressureInput = document.getElementById('max-pressure');
    
    const errors = [];
    let isValid = true;
    
    // Очищаем предыдущие ошибки
    clearValidationErrors();
    
    const selectedType = pressureRangeSelect.value;
    const minValue = readNum('min-pressure');
    const maxValue = readNum('max-pressure');
    
    // Проверка выбора типа преобразователя
    if (!selectedType) {
        showFieldError('pressure-range', 'Необходимо выбрать тип преобразователя давления');
        errors.push('Не выбран тип преобразователя давления');
        isValid = false;
    }
    
    // Проверка заполнения полей
    if (isNaN(minValue) && minPressureInput.value !== '') {
        showFieldError('min-pressure', 'Введите корректное числовое значение');
        errors.push('Некорректное значение минимального давления');
        isValid = false;
    }
    
    if (isNaN(maxValue) && maxPressureInput.value !== '') {
        showFieldError('max-pressure', 'Введите корректное числовое значение');
        errors.push('Некорректное значение максимального давления');
        isValid = false;
    }
    
    // Проверка технических характеристик для выбранного типа
    if (selectedType && !isNaN(minValue)) {
        if (selectedType === 'absolute') {
            if (minValue < 0 || minValue > 40000) {
                showFieldError('min-pressure', 'Для абсолютного типа допустимый диапазон: 0-40000 кПа');
                errors.push('Минимальное давление выходит за пределы технических характеристик');
                isValid = false;
            }
        } else if (selectedType === 'excess') {
            if (minValue < -100 || minValue > 40000) {
                showFieldError('min-pressure', 'Для избыточного типа допустимый диапазон: -100-40000 кПа');
                errors.push('Минимальное давление выходит за пределы технических характеристик');
                isValid = false;
            }
        }
    }
    
    if (selectedType && !isNaN(maxValue)) {
        if (selectedType === 'absolute') {
            if (maxValue < 0 || maxValue > 40000) {
                showFieldError('max-pressure', 'Для абсолютного типа допустимый диапазон: 0-40000 кПа');
                errors.push('Максимальное давление выходит за пределы технических характеристик');
                isValid = false;
            }
        } else if (selectedType === 'excess') {
            if (maxValue < -100 || maxValue > 40000) {
                showFieldError('max-pressure', 'Для избыточного типа допустимый диапазон: -100-40000 кПа');
                errors.push('Максимальное давление выходит за пределы технических характеристик');
                isValid = false;
            }
        }
    }
    
    // Проверка логической корректности диапазона
    if (!isNaN(minValue) && !isNaN(maxValue)) {
        if (minValue >= maxValue) {
            showFieldError('max-pressure', 'Максимальное значение должно быть больше минимального');
            errors.push('Максимальное давление должно быть больше минимального');
            isValid = false;
        }
    }
    
    // Отображение общего списка ошибок
    if (errors.length > 0) {
        showValidationSummary(errors);
    }
    
    return isValid;
}

// Функция отображения ошибки для конкретного поля
function showFieldError(fieldId, message) {
    const field = document.getElementById(fieldId);
    const errorElement = document.getElementById(fieldId + '-error');
    
    if (field) {
        field.classList.add('error');
    }
    
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.classList.remove('hidden');
    }
}

// Функция очистки всех ошибок валидации
function clearValidationErrors() {
    // Очищаем классы ошибок с полей
    const fields = ['pressure-range', 'min-pressure', 'max-pressure'];
    fields.forEach(fieldId => {
        const field = document.getElementById(fieldId);
        const errorElement = document.getElementById(fieldId + '-error');
        
        if (field) {
            field.classList.remove('error');
        }
        
        if (errorElement) {
            errorElement.classList.add('hidden');
            errorElement.textContent = '';
        }
    });
    
    // Скрываем общий блок ошибок
    const validationSummary = document.getElementById('validation-summary');
    if (validationSummary) {
        validationSummary.classList.remove('show');
    }
}

// Функция отображения общего списка ошибок
function showValidationSummary(errors) {
    const validationSummary = document.getElementById('validation-summary');
    const errorsList = document.getElementById('validation-errors');
    
    if (validationSummary && errorsList) {
        errorsList.innerHTML = '';
        errors.forEach(error => {
            const li = document.createElement('li');
            li.textContent = error;
            errorsList.appendChild(li);
        });
        
        validationSummary.classList.add('show');
    }
}

// Экспорт результатов (дополнительная функция)
// Функция для установки ограничений полей ввода давления в зависимости от типа преобразователя
function updatePressureInputLimits() {
    const pressureRangeSelect = document.getElementById('pressure-range');
    const minPressureInput = document.getElementById('min-pressure');
    const maxPressureInput = document.getElementById('max-pressure');
    
    if (!pressureRangeSelect || !minPressureInput || !maxPressureInput) return;
    
    const selectedType = pressureRangeSelect.value;
    
    if (selectedType === 'absolute') {
        // Абсолютный: от 0 до 40000 кПа
        minPressureInput.min = '0';
        minPressureInput.max = '40000';
        maxPressureInput.min = '0';
        maxPressureInput.max = '40000';
        
        // Очищаем значения, если они выходят за новые пределы
        if (minPressureInput.value && (readNum('min-pressure') < 0 || readNum('min-pressure') > 40000)) {
            minPressureInput.value = '';
        }
        if (maxPressureInput.value && (readNum('max-pressure') < 0 || readNum('max-pressure') > 40000)) {
            maxPressureInput.value = '';
        }
        
    } else if (selectedType === 'excess') {
        // Избыточный: от -100 до 40000 кПа
        minPressureInput.min = '-100';
        minPressureInput.max = '40000';
        maxPressureInput.min = '-100';
        maxPressureInput.max = '40000';
        
        // Очищаем значения, если они выходят за новые пределы
        if (minPressureInput.value && (readNum('min-pressure') < -100 || readNum('min-pressure') > 40000)) {
            minPressureInput.value = '';
        }
        if (maxPressureInput.value && (readNum('max-pressure') < -100 || readNum('max-pressure') > 40000)) {
            maxPressureInput.value = '';
        }
        
    } else {
        // Сброс ограничений при отсутствии выбора
        minPressureInput.removeAttribute('min');
        minPressureInput.removeAttribute('max');
        maxPressureInput.removeAttribute('min');
        maxPressureInput.removeAttribute('max');
    }
}

function exportResults() {
    const results = document.querySelectorAll('.sensor-card');
    if (results.length === 0) {
        alert('Нет результатов для экспорта');
        return;
    }
    
    let exportData = 'Результаты подбора датчиков давления\n\n';
    results.forEach((card, index) => {
        const model = card.querySelector('.sensor-model').textContent;
        exportData += `${index + 1}. ${model}\n`;
    });
    
    const blob = new Blob([exportData], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'sensors_selection.txt';
    a.click();
    URL.revokeObjectURL(url);
}