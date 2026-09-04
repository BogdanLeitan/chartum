import type InstrumentDto from "./InstrumentDto";
import type { WalletImpactDto } from "./WalletImpactDto";

export interface HoldingDto {
    instrument: InstrumentDto;
    quantity: number;
    currentPrice: number;
    averagePricePaid: number;
    walletImpact: WalletImpactDto;
}