interface ICoaching {
    exam: string;
    name: string;
    email: string;
    targetTimeline: string;
    location: string;
}

interface IInvesting {
    name: string;
    email: string;
    province: string;
    accreditedInvestor: boolean;
    investmentRange: string;
    timeline: string;
}

interface IMortgage {
    name: string;
    email: string;
    phone: number;
    lookingFor: string;
    propertyValue: string;
    downPayment: string;
    creditRange?: string;
}

interface INotSure{
    name: string;
    email: string;
    leadDescription: string;
    message: string;
}

interface IContact{
    name: string;
    email: string;
    subject: string;
    message: string;
}

export type { ICoaching, IInvesting, IMortgage, INotSure, IContact };