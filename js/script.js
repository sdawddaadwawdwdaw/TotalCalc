document.getElementById('currency-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Получаем значения в долларах
    const dollar1 = parseFloat(document.getElementById('BBRodion').value) || 0;
    const dollar2 = parseFloat(document.getElementById('BBRuslan').value) || 0;
    const dollar3 = parseFloat(document.getElementById('OKXSmall').value) || 0;
    const dollar4 = parseFloat(document.getElementById('OKXBig').value) || 0;

    // Получаем значения в рублях
    let rub1 = parseFloat(document.getElementById('SmallPool1').value) || 0;
    let rub2 = parseFloat(document.getElementById('BigPool1').value) || 0;
    let rub3 = parseFloat(document.getElementById('SmallPool2').value) || 0;
    let rub4 = parseFloat(document.getElementById('BigPool2').value) || 0;
    let rub5 = parseFloat(document.getElementById('LK').value) || 0;
    let rub6 = parseFloat(document.getElementById('Cash').value) || 0;
    let rub7 = parseFloat(document.getElementById('Tradex1').value) || 0;
    let rub8 = parseFloat(document.getElementById('Tradex2').value) || 0;
    let rub9 = parseFloat(document.getElementById('Payscrow').value) || 0;

    rub1 *= -1;
    rub2 *= -1;
    rub3 *= -1;
    rub4 *= -1;

    const exchangeRate = parseFloat(document.getElementById('exchangeRate').value) || 1;

    const rubTotal = rub1 + rub2 + rub3 + rub4 + rub5 + rub6 + rub7 + rub8 + rub9;

    const usdTotal = dollar1 + dollar2 + dollar3 + dollar4;

    const rubToDollar = rubTotal / exchangeRate;

    const total = usdTotal + rubToDollar;

    if (rub1<0){
        rub1=`${rub1} долг`
    }
    if (rub2<0){
        rub2=`${rub2} долг`
    }
    if (rub3<0){
        rub3=`${rub3} долг`
    }
    if (rub4<0){
        rub4=`${rub4} долг`
    }
    // Выводим результат
    document.getElementById('result1').textContent = `USDT: ${dollar1}(ББ Родион) + ${dollar2}(ББ Руслан) + ${dollar3}(OKX мал.) + ${dollar4}(OKX бол.) = ${usdTotal.toFixed(2)} USDT `;
    document.getElementById('result2').textContent = `Котлы: (${rub1} мал.1) + (${rub2} бол.1) + (${rub3} мал.2) + (${rub4} бол.2) `;
    document.getElementById('result3').textContent = `Балансы и нал: ${rub5}(сумма ЛК) + ${rub6}(Наличка) + ${rub7}(Tradex1) + ${rub8}(Tradex2) + ${rub9}(Payscrow) `;
    document.getElementById('result4').textContent = `RUB: ${rubTotal.toFixed(2)} рублей `;
    document.getElementById('result5').textContent = `Общая сумма:  $${total.toFixed(2)} по курсу ${exchangeRate}`;
});
