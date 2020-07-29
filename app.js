document.getElementById('loan-form').addEventListener('submit', calculateResults);

function calculateResults(e) {

    console.log('calculation is loading...');

    const amount = document.getElementById('amount');
    const interest = document.getElementById('interest');
    const years = document.getElementById('years');

    const monthlyPayments = document.getElementById('monthly-payments');
    const totalPayments = document.getElementById('total-payments');
    const totalInterest = document.getElementById('total-interest');

    const principal = parseFloat(amount.value);
    const calculatedInterest = parseFloat(interest.value) / 100 / 12;
    const calculatedPayments = parseFloat(years.value) * 12;



    const x = Math.pow((1 + calculatedInterest), calculatedPayments);
    const monthly = (principal * (calculatedInterest * x)) / (x - 1);
    


    console.log(totalInterest);


    if (isFinite) {
        monthlyPayments.value = monthly.toFixed(2);
        totalPayments.value = (monthly * calculatedPayments).toFixed(2);
        totalInterest.value = ((monthly * calculatedPayments) - principal).toFixed(2);
        
    } else {
        // error message
        Showerror();
    }


    e.preventDefault();
};


function Showerror() {
    console.log('Please check your numbers...');
}