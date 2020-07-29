document.getElementById('loan-form').addEventListener('submit', function (e) {

    document.getElementById('loading').style.display = 'block';

    

    e.preventDefault()

    setTimeout(loaderRemove, 2000)
});

function loaderRemove() {
    document.getElementById('loading').style.display = 'none';
    calculateResults();
    
}



function calculateResults() {

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
    

    if (isFinite(monthly)) {
        monthlyPayments.value = monthly.toFixed(2);
        totalPayments.value = (monthly * calculatedPayments).toFixed(2);
        totalInterest.value = ((monthly * calculatedPayments) - principal).toFixed(2);

        document.querySelector('.results').style.display = 'block';
        
    } else {
        // error message
        Showerror('Please check your numbers');
    }


    ;
};


function Showerror(error) {
    const errorDiv = document.createElement('div');

    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');


    errorDiv.className = 'alert alert-danger';

    errorDiv.appendChild(document.createTextNode(error));

    
    card.insertBefore(errorDiv, heading);


    setTimeout(clearError, 3000);

}

function clearError() {
    document.querySelector('.alert').remove();
}