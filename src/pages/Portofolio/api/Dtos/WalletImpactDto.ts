export interface WalletImpactDto {
    currency: string;
    totalCost: number;
    currentValue: number;
    unrealizedProfitLoss: number;
    fxImpact: number;
    portfolioPercentage: number;
    profitPercentage: number;
}