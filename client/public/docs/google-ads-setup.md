# Guide: Google Ads Offline Conversion Tracking (Zapier)

Since the Google Calendar booking scheduler runs in a secure cross-origin iframe, standard client-side conversion tracking (like button clicks) is not 100% reliable. The recommended way to track bookings is via **Google Ads Offline Conversions** triggered by calendar events.

Here is the step-by-step setup guide to connect your embedded Google Calendar to Google Ads using Zapier.

---

## Step 1: Prepare Google Ads for Offline Conversions
1. Log in to your **Google Ads Account**.
2. Navigate to **Tools and Settings** (wrench icon) > **Measurement** > **Conversions**.
3. Click the **+ New Conversion Action** button.
4. Select **Import** as the conversion type.
5. Choose **Other data sources or CRMs** > **Track conversions from clicks**.
6. Set the conversion details:
   * **Goal Category**: Book Appointment.
   * **Conversion Name**: `Google Calendar Booking` (keep note of this exact name).
   * **Value**: Set a flat value (e.g. $50) or choose not to assign a value.
   * **Count**: Select **One** (so duplicate submissions from the same user aren't double-counted).
7. Save and select **Finish**.

---

## Step 2: Configure Zapier Integration
1. Log in to **Zapier** and click **Create Zap**.
2. Set up the **Trigger**:
   * **App**: Google Calendar.
   * **Event**: `New Event` or `New Appointment` (choose the calendar associated with your IntegrateWise booking scheduler).
   * **Account**: Connect your Google Workspace / Google Calendar account.
   * **Test**: Run a test to pull a sample booked event.
3. Set up the **Action**:
   * **App**: Google Ads.
   * **Event**: `Send Offline Conversion (from Click)`.
   * **Account**: Link your Google Ads Account.
4. Map the Google Ads conversion fields:
   * **Customer ID**: Select your active Google Ads Customer ID.
   * **Conversion Action**: Select `Google Calendar Booking` (created in Step 1).
   * **Google Click ID (GCLID)**: Extract this from the event description or select the attendee's query parameters if captured, OR choose **Email Address** / **Phone Number** if setting up **Enhanced Conversions**.
   * **Conversion Time**: Select the Event `Created` timestamp.
5. **Test and Publish** the Zap.

---

## Step 3: (Optional but recommended) Capture GCLID
To improve matching accuracy:
If you are running Google Ads campaigns, enable **Auto-tagging** in your Google Ads account settings. Google Calendar booking page will automatically receive the `gclid` query parameter if clicked from an ad, which can be configured to map to Google Ads.
