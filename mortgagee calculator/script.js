function calculateMortgage() {
    const principal = parseFloat(document.getElementById("principal").value);
    const annualRate = parseFloat(document.getElementById("rate").value);
    const years = parseFloat(document.getElementById("years").value);
    const paymentFrequency = document.getElementById("payment-frequency").value;

    if (isNaN(principal) || isNaN(annualRate) || isNaN(years) || principal <= 0 || annualRate <= 0 || years <= 0) {
        alert("Please enter valid values for Loan Amount, Interest Rate, and Loan Term.");
        return;
    }

    // Determine the number of payments per year based on payment frequency
    let paymentsPerYear;
    switch (paymentFrequency) {
        case "annual": paymentsPerYear = 1; break;
        case "semi-annual": paymentsPerYear = 2; break;
        case "monthly": paymentsPerYear = 12; break;
        case "biweekly": paymentsPerYear = 26; break;
        case "weekly": paymentsPerYear = 52; break;
        case "access-2weeks": paymentsPerYear = 26; break;
        case "access-week": paymentsPerYear = 52; break;
        default: paymentsPerYear = 12;
    }

    // Calculate periodic interest rate and total number of payments
    const periodicRate = annualRate / 100 / paymentsPerYear;
    const numberOfPayments = years * paymentsPerYear;

    // Monthly Payment Calculation
    const basePayment = (principal * periodicRate) / (1 - Math.pow(1 + periodicRate, -numberOfPayments));
    const totalPayment = basePayment * numberOfPayments;
    const totalInterest = totalPayment - principal;

    // Display results
    document.getElementById("monthly-payment").textContent = `$${basePayment.toFixed(2)}`;
    document.getElementById("total-interest").textContent = `$${totalInterest.toFixed(2)}`;
}
