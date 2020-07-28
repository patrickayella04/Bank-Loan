document.getElementById('loan-form').addEventListener('submit', calculateResults);

function calculateResults(e) {

    console.log('calculation is loading...');

    const amount = document.getElementById('amount');
    const interest = document.getElementById('interest');
    const years = document.getElementById('years');

    const monthlyPayments = document.getElementById('monthly-payments');
    const totalPayments = document.getElementById('total-payments');
    const totalInterest = document.getElementById('total-interest');

    const p = amount.value;
    const n = years.value;
    const r = (interest.value) / 100 / 12;

    const x = Math.pow((1 + r), (n * 12));

    

    const monthlyPayments = (p * (r * x)) / (x - 1);


    


    const totalPayments = (monthlyPayments * (n * 12));

   


    const totalInterest = totalPayments - p;


    


    console.log(totalInterest);


    if (isFinite) {
    monthlyPayments.value
    totalPayments.value
    totalInterest.value
        
    } else {
        // error message
        setTimeout(Showerror(error), 3000);
    }


    e.preventDefault();
};


function Showerror() {
    console.log('Please check your numbers...');
}