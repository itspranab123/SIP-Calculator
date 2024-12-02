function calculate() {
    const monthlyInvestment = parseFloat(document.getElementById('monthly-investment').value);
    const annualReturn = parseFloat(document.getElementById('annual-return').value) / 100;
    const investmentPeriod = parseFloat(document.getElementById('investment-period').value);

    const monthlyInterestRate = annualReturn / 12;
    const totalMonths = investmentPeriod * 12;

    const futureValue = monthlyInvestment * (((Math.pow(1 + monthlyInterestRate, totalMonths) - 1) / monthlyInterestRate) * (1 + monthlyInterestRate));

    document.getElementById('result').textContent = `Future estimated value is: ₹${futureValue.toFixed(2)} Total Investement is:  ₹${totalMonths * monthlyInvestment} Total Gain Value is:  ₹${futureValue.toFixed(2) - totalMonths * monthlyInvestment}`;

}