import type { ICoaching, IInvesting, IMortgage, INotSure, IContact } from "../Utils/FormInterfaces";
import { connectDb } from "../db/db";

connectDb();

const requiredFields: Record<string, string[]> = {
    notSure: ['name', 'email', 'leadDescription', 'message'],
    coaching: ['exam', 'name', 'email', 'targetTimeline', 'location'],
    investing: ['name', 'email', 'province', 'accreditedInvestor', 'investmentRange', 'timeline'],
    mortgage: ['name', 'email', 'phone', 'lookingFor', 'propertyValue', 'downPayment'],
    contact: ['name', 'email', 'subject', 'message'],
};

function validateFields(body: Record<string, unknown>, fields: string[]): string[] {
    return fields.filter((field) => body[field] === undefined || body[field] === null || body[field] === '');
}

export async function POST(request: Request) {
    try {
        const body = await request.json();

        if (!body.whichForm || typeof body.whichForm !== 'string') {
            return new Response(
                JSON.stringify({ message: 'Missing or invalid "whichForm" field' }),
                { status: 400 }
            );
        }

        const whichForm = body.whichForm.toLowerCase();
        const fields = requiredFields[whichForm];

        if (!fields) {
            return new Response(
                JSON.stringify({ message: `Unknown form type: "${whichForm}". Expected one of: ${Object.keys(requiredFields).join(', ')}` }),
                { status: 400 }
            );
        }

        const missing = validateFields(body, fields);
        if (missing.length > 0) {
            return new Response(
                JSON.stringify({ message: `Missing required fields for "${whichForm}": ${missing.join(', ')}` }),
                { status: 400 }
            );
        }

        let successMessage = '';
        if (whichForm === 'coaching') {
            const { exam, name, email, targetTimeline, location }: ICoaching = body;
            successMessage = `data submitted successfully for ${whichForm} with values ${exam}, ${name}, ${email}, ${targetTimeline}, ${location}`;
        }
        else if (whichForm === 'investing') {
            const { name, email, province, accreditedInvestor, investmentRange, timeline }: IInvesting = body;
            successMessage = `data submitted successfully for ${whichForm} with values ${name}, ${email}, ${province}, ${accreditedInvestor}, ${investmentRange}, ${timeline}`;
        }
        else if (whichForm === 'mortgage') {
            const { name, email, phone, lookingFor, propertyValue, downPayment, creditRange }: IMortgage = body;
            successMessage = `data submitted successfully for ${whichForm} with values ${name}, ${email}, ${phone}, ${lookingFor}, ${propertyValue}, ${downPayment}, ${creditRange}`;
        }
        else if (whichForm === 'notSure') {
            const { name, email, leadDescription, message }: INotSure = body;
            successMessage = `data submitted successfully for ${whichForm} with values ${name}, ${email}, ${leadDescription}, ${message}`;
        }else if(whichForm === 'contact'){
            const { name, email, subject, message }: IContact = body;
            successMessage = `data submitted successfully for ${whichForm} with values ${name}, ${email}, ${subject}, ${message}`;
        }

        console.log(successMessage);
        return new Response(JSON.stringify({ message: successMessage }), { status: 200 });
    } catch (e) {
        console.log(e);
        return new Response(JSON.stringify({ message: `error: ${e}` }), { status: 500 });
    }
}

