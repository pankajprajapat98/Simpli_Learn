import Airtable from 'airtable';

if (!process.env.AIRTABLE_API_KEY) {
  throw new Error('AIRTABLE_API_KEY is not defined');
}

if (!process.env.AIRTABLE_BASE_ID) {
  // Warn or throw, depending on preference. For now, let's throw to ensure explicit config.
  // We can also allow it to be undefined and fail at runtime if not provided during call, but cleaner to fail early.
  // However, since we are waiting for user input, maybe just a console warning?
  console.warn('AIRTABLE_BASE_ID is not defined in environment variables.');
}

export const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
  process.env.AIRTABLE_BASE_ID!
);

export const TABLE_NAME = process.env.AIRTABLE_TABLE_NAME || 'RSVPs';
