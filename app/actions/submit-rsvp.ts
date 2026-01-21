'use server';

import { base, TABLE_NAME } from '@/lib/airtable';

export async function submitRSVP(prevState: any, formData: FormData) {
    const email = formData.get('email') as string;

    if (!email || !email.includes('@')) {
        return { error: 'Please enter a valid email address.' };
    }

    if (!process.env.AIRTABLE_BASE_ID) {
        return { error: 'System configuration error: Missing Base ID.' };
    }

    try {
        await base(TABLE_NAME).create([
            {
                fields: {
                    Email: email,
                    'Submitted At': new Date().toISOString().split('T')[0], // Sending YYYY-MM-DD
                    Status: 'Pending', // Must be 'Pending', 'Confirmed', or 'Error'
                },
            },
        ]);

        return { success: true, message: 'Thank you! Your RSVP has been confirmed.' };
    } catch (error: any) {
        console.error('Airtable Error:', error);
        return {
            error: 'Failed to submit RSVP. Please try again later.',
        };
    }
}
