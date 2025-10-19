# WordPress to Google Calendar Migration Summary

## ✅ Changes Implemented

### 1. **Configuration (`nuxt.config.ts`)**

- ❌ Removed: `cmsUrl: 'https://cms.lifeoc.org'`
- ✅ Added: `googleCalendarApiKey` and `googleCalendarId` configuration
- Uses environment variables for security

### 2. **Composable (`composables/useUpcomingEvents.ts`)**

- **API Endpoint Changed:**

  - Before: `${config.public.cmsUrl}/wp-json/tribe/events/v1/events`
  - After: `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events`

- **Data Structure Changed:**

  - Before (WordPress): `title`, `start_date`, `end_date`
  - After (Google Calendar): `summary`, `start.dateTime/date`, `end.dateTime/date`

- **Query Parameters:**
  - Before: `per_page: 3`, `start_date`
  - After: `maxResults: 3`, `timeMin`, `orderBy: 'startTime'`, `singleEvents: true`

### 3. **Component (`components/UpcomingEvents.vue`)**

- Updated to use `event.summary` instead of `event.title`
- Added `getEventStartDate()` helper function to handle both `dateTime` and `date` formats
- Added optional link to view event in Google Calendar
- Made description display conditional (only if it exists)

### 4. **New Files Created**

- ✅ `.env.example` - Template for environment variables
- ✅ `GOOGLE_CALENDAR_SETUP.md` - Complete setup guide

## 🎯 Next Steps

1. **Set up Google Calendar API:**

   - Follow the instructions in `GOOGLE_CALENDAR_SETUP.md`
   - Create a Google Cloud project
   - Enable Google Calendar API
   - Create and restrict API key

2. **Configure your calendar:**

   - Make your church calendar public
   - Get the Calendar ID

3. **Add environment variables:**

   - Create a `.env` file (copy from `.env.example`)
   - Add your API key and Calendar ID

4. **Test the implementation:**
   - Run `pnpm dev`
   - Check the Upcoming Events section
   - Verify events are loading correctly

## 🔒 Security Features

✅ **API Key Restrictions:**

- Restricted to specific HTTP referrers (your website domain)
- Restricted to only Google Calendar API
- No other APIs can use this key

✅ **Environment Variables:**

- API key stored in `.env` (git-ignored)
- Not exposed in frontend code
- Can be different for dev/staging/production

✅ **Public Calendar:**

- Only event data that's already public is accessed
- No write permissions needed
- Read-only access

## 📊 Benefits of This Migration

### For End Users:

- ✅ Same visual experience
- ✅ Potentially faster loading (Google's CDN vs WordPress)
- ✅ More reliable uptime (Google's infrastructure)

### For Church Staff:

- ✅ Familiar interface (Google Calendar)
- ✅ No need to learn WordPress
- ✅ Can manage events from mobile app
- ✅ Easy event sharing and collaboration

### For Developers:

- ✅ One less service to maintain (no WordPress backend needed)
- ✅ No WordPress security updates to worry about
- ✅ Simpler deployment (just frontend)
- ✅ Better TypeScript support

### For Infrastructure:

- ✅ Reduced hosting costs (no WordPress server needed)
- ✅ Better scalability (Google's infrastructure)
- ✅ Automatic backups (Google Calendar)

## 🧪 Testing Checklist

- [ ] API key created and restricted
- [ ] Calendar made public
- [ ] Environment variables configured
- [ ] Development server runs without errors
- [ ] Events display correctly on homepage
- [ ] Event dates format correctly
- [ ] Event times display in correct timezone
- [ ] "View in Calendar" links work
- [ ] No console errors
- [ ] Works on mobile devices

## 📝 Notes

- The API has generous free tier limits (1M queries/day)
- Events are cached on the client side
- Only fetches 3 upcoming events
- Filters to only show future events
- Handles both all-day events (`date`) and timed events (`dateTime`)

## 🆘 Support

If you encounter any issues:

1. Check `GOOGLE_CALENDAR_SETUP.md` troubleshooting section
2. Verify all environment variables are set correctly
3. Check browser console for error messages
4. Verify calendar is public and has future events
