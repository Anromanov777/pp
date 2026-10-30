console.log('document')
document.getElementById('rasch').addEventListener('click', e => {
    console.log('click')
    const select = document.getElementById('course');
    console.log(select.value)
    const count = document.getElementById('count');
    console.log(count.value)
    const tariff = document.querySelector('input[name="tariff"]:checked')
    console.log(tariff.value)
    const data = [[500, 550, 650], [700, 760, 820], [650, 820, 800], [600, 700, 780]]
    const cena = data[select.value][tariff.value] * parseInt(count.value)
    console.log(cena)
    document.getElementById('result').textContent = cena + ' руб.'
});
