# Google Calendar API Setup Guide

This guide will help you set up the Google Calendar API for your Life OC website.

## Step 1: Create a Google Cloud Project

1. Go to the [Google Cloud Console](https://console.cloud.google.com/)
2. Click on the project dropdown at the top
3. Click "New Project"
4. Enter a project name (e.g., "Life OC Website")
5. Click "Create"

## Step 2: Enable the Google Calendar API

1. In the Google Cloud Console, make sure your new project is selected
2. Go to "APIs & Services" > "Library"
3. Search for "Google Calendar API"
4. Click on it and then click "Enable"

## Step 3: Create API Credentials

1. Go to "APIs & Services" > "Credentials"
2. Click "Create Credentials" > "API Key"
3. Your API key will be created and displayed
4. Click the "Edit" (pencil) icon next to your new API key

## Step 4: Restrict the API Key (Important for Security!)

### Set Application Restrictions:

1. Under "Application restrictions", select "HTTP referrers (web sites)"
2. Click "Add an item" under "Website restrictions"
3. Add your website domains:
   - For local development: `http://localhost:3000/*`
   - For production: `https://lifeoc.org/*` (or your domain)
   - You can add multiple referrers
4. Click "Done"

### Set API Restrictions:

1. Under "API restrictions", select "Restrict key"
2. From the dropdown, select only "Google Calendar API"
3. Click "Save"

## Step 5: Set Up Your Google Calendar

### Make Your Calendar Public:

1. Open [Google Calendar](https://calendar.google.com/)
2. Find the calendar you want to use in the left sidebar
3. Click the three dots next to it > "Settings and sharing"
4. Scroll to "Access permissions for events"
5. Check "Make available to public"
6. You can choose to show only "See only free/busy (hide details)" or "See all event details"

### Get Your Calendar ID:

1. In the same settings page, scroll down to "Integrate calendar"
2. Copy the "Calendar ID" (it looks like `abc123@group.calendar.google.com` or your email)

## Step 6: Configure Your Application

1. Create a `.env` file in the root of your project (copy from `.env.example`):

   ```bash
   cp .env.example .env
   ```

2. Add your credentials to `.env`:

   ```env
   NUXT_PUBLIC_GOOGLE_CALENDAR_API_KEY=your_actual_api_key_here
   NUXT_PUBLIC_GOOGLE_CALENDAR_ID=your_calendar_id@group.calendar.google.com
   ```

3. **Important:** Make sure `.env` is in your `.gitignore` to keep your API key secure!

## Step 7: Test Your Setup

1. Start your development server:

   ```bash
   pnpm dev
   ```

2. Navigate to your homepage and scroll to the "Upcoming Events" section
3. If configured correctly, you should see your calendar events displayed
4. Check the browser console for any errors

## Troubleshooting

### "API key not valid" Error

- Make sure you've enabled the Google Calendar API in your project
- Check that your API key is correctly copied to the `.env` file
- Verify the API restrictions allow the Google Calendar API

### "The caller does not have permission" Error

- Make sure your calendar is set to public
- Verify the calendar ID is correct
- Check that the calendar exists and you have access to it

### Events Not Showing Up

- Verify your calendar has events in the future
- Check the browser console for any error messages
- Make sure the calendar is set to public (or at least publicly readable)

### "Requests from referer blocked" Error

- Make sure you've added your website domain to the HTTP referrers
- For local development, make sure you've added `http://localhost:3000/*`
- Check that the referrer restrictions are properly saved in Google Cloud Console

## API Usage Limits

The Google Calendar API has the following quota limits:

- **Queries per day:** 1,000,000
- **Queries per 100 seconds per user:** 50,000

For a typical church website, these limits are more than sufficient. Your frontend is fetching up to 3 events per page load, so even with 10,000 visitors per day, you'd only use about 30,000 queries.

## Security Best Practices

1. ✅ **API Key Restrictions:** Always restrict your API key to specific HTTP referrers and APIs
2. ✅ **Public Calendar:** Only make the calendar public if you're comfortable with all events being visible
3. ✅ **Environment Variables:** Never commit your `.env` file to version control
4. ✅ **Monitor Usage:** Regularly check your API usage in Google Cloud Console

## What Changed from WordPress?

### Before (WordPress):

- Used The Events Calendar plugin on WordPress
- Made API calls to `https://cms.lifeoc.org/wp-json/tribe/events/v1/events`
- Required maintaining a separate WordPress installation

### After (Google Calendar):

- Uses Google Calendar API directly
- No need for WordPress backend
- Events managed through familiar Google Calendar interface
- Better for church staff - most people already know how to use Google Calendar!

## Managing Events

To add new events:

1. Go to [Google Calendar](https://calendar.google.com/)
2. Click on your calendar
3. Click "Create" to add a new event
4. Fill in the details (title, date, time, location, description)
5. Click "Save"
6. The event will automatically appear on your website!

---

For more information, visit the [Google Calendar API Documentation](https://developers.google.com/calendar/api/v3/reference)
