document.getElementById('loan-form').addEventListener('submit', calculateResults);

function calculateResults(e) {

    console.log('calculation is loading...');

    const amount = document.getElementById('amount');
    const interest = document.getElementById('interest');
    const years = document.getElementById('years');

    const p = amount.value;
    const n = years.value;
    const r = (interest.value) / 100 / 12;

    const x = Math.pow((1 + r), (n * 12));

    const monthlyPayments = (p * (r * x)) / (x - 1);


    document.getElementById('monthly-payments').value = monthlyPayments;


    const totalPayments = (monthlyPayments * (n * 12));

    document.getElementById('total-payments').value = totalPayments;


    const totalInterest = totalPayments - p;


    document.getElementById('total-interest').value = totalInterest;


    console.log(totalInterest);



    


    e.preventDefault();
};