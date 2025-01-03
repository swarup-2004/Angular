import { Injectable } from "@angular/core";
import { InvestmentInput } from "../user-input/user-input.model";
import { InvestmentResults } from "./investment-results.model";

@Injectable({
    providedIn: 'root'
})
export class InvestmentService {
    

    private resultsData?: InvestmentResults[];

    calculateInvestmentResults(data: InvestmentInput) {
        const {initialInvestment, annualInvestment, expectedReturn, duration} = data;
        const annualData = [];
        let investmentValue = initialInvestment;
    
        for (let i = 0; i < duration; i++) {
        const year = i + 1;
        const interestEarnedInYear = investmentValue * (expectedReturn / 100);
        investmentValue += interestEarnedInYear + annualInvestment;
        const totalInterest =
            investmentValue - annualInvestment * year - initialInvestment;
        annualData.push({
            year: year,
            interest: interestEarnedInYear,
            valueEndOfYear: investmentValue,
            annualInvestment: annualInvestment,
            totalInterest: totalInterest,
            totalAmountInvested: initialInvestment + annualInvestment * year,
        });
        }
    
        this.resultsData = annualData;
    }

    get investmentResults() {
        return this.resultsData;
    }
      
}