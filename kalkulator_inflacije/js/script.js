function inflationCalculator(){
    let inflationRate = document.getElementById("inflationRate");
    let money = document.getElementById("money");
    let years = document.getElementById("years");
    let messageDiv = document.getElementById("message");

    inflationRate = parseFloat(inflationRate.value);
    money = parseFloat(money.value);
    years = parseFloat(years.value);

    let worth = money + (money * (inflationRate / 100));

    for (let i = 1; i < years; i++){
        worth += worth * (inflationRate / 100);
    }
    
    messageDiv.innerHTML = `Todays <span class="mark">${money} €</span> worths same as
    <span class="mark">${worth.toFixed(2)}€</span> in <span class="mark">${years} years</span> 
    by inflation rate of <span class="mark">${inflationRate}%</span>.`;
}