interface Intinvoice {
    amount: number;
    invoiceNumber: number;
    client: string;
    discount: number;
    mode: "CIB" | "EDAHABIA";
    webhookUrl: string;
    backUrl: string;
}
export declare const create_payement: (invoice: Intinvoice) => Promise<void>;
export {};
