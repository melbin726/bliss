# Bliss Spa & BTM Layout
### A Relaxing Wellness Destination in Bengaluru

The official, luxury web application for **Bliss Spa & BTM Layout**, located at **BTM 1st Stage near Udupi Garden**, Bengaluru.

---

## 📍 Location & Contact Details

- **Address**: No. 63, 1st Floor, B-Block, 16th Main, 8th Cross Road, near Udupi Garden, BTM 1st Stage, Bengaluru 560029
- **Phone Numbers**:
  - `099452 64342`
  - `080 9526 6198`
- **WhatsApp Receiving Number**: `916282696352` (Configurable in `js/app.js`)
- **Google Maps Location**:
  - [Google Maps Link](https://www.google.com/maps?ll=12.919884,77.610654&z=17&t=m&hl=en&gl=US&mapclient=embed&q=12%C2%B055%2711.7%22N+77%C2%B036%2738.4%22E+12.919902,+77.610656@12.919902,77.61065599999999)
  - Coordinates: `12°55'11.7"N 77°36'38.4"E` (`12.919902, 77.610656`)
- **Hours**: Open 7 Days: 10:00 AM – 10:00 PM

---

## 💬 Instant WhatsApp Booking System (Method 1)

When a client fills out the appointment form and taps **"Confirm Reservation Instantly"**:
1. The app compiles a pre-filled, emoji-styled WhatsApp booking message with reference code, client name, mobile, therapy, date, time slot, therapist gender, pressure, notes, and total price.
2. The browser automatically opens WhatsApp via the official Click-to-Chat URL targeting **`916282696352`**.
3. A confirmation modal provides a 1-tap fallback button: **"Send / Open on WhatsApp (6282696352)"**.

### How to change the WhatsApp number later:
Open [app.js](file:///Users/macbook/.gemini/antigravity-ide/scratch/bliss-spa/js/app.js) and edit line 7:
```javascript
const WHATSAPP_RECEIVING_NUMBER = '916282696352'; // Replace with new country code + 10 digits
```

---

## 🌿 Featured Therapies & Detailed Copy

### 1. Swedish Massage
A gentle-to-moderate full-body massage designed for relaxation and relieving muscle tension.

### 2. Aroma Massage
A relaxing massage that combines massage techniques with essential oils. The oils are diluted in carrier oil and applied to the skin, while their fragrance is inhaled during the session.
- 🌿 Relaxation and stress reduction
- 💆 Reduced muscle tension
- 😴 Feeling calmer and potentially sleeping better
- 🧘 A soothing, spa-like experience

### 3. Deep Tissue Massage
A more intensive massage that uses slow, firm pressure to work deeper into muscles and connective tissues.
- 💪 Deep muscle tension and stiffness
- 🏋️ Post-exercise soreness
- 🪑 Chronic tightness from sitting or physical work
- 🧍 Areas such as back, shoulders, neck, and legs

### 4. * Thai Massage *
*Ancient healing. Deep stretching. Real energy balance.*
A 2000-year-old traditional therapy from Thailand. No oil, no soft touch — it is yoga-like stretching done for you.
- **What we do**: Done on a floor mat in comfortable clothes. Our therapist uses hands, thumbs, elbows and gentle body weight to stretch your body, press your energy lines and release blocked stiffness.
- **Benefits**:
  - Improves full body flexibility and movement
  - Releases deep stiffness from back, legs and shoulders
  - Corrects posture and improves energy flow
  - Reduces stress and tiredness without oil
  - You feel active, open and energized — not sleepy

### 5. AYURVEDA SPA MASSAGE
*Ayurvedic Massage 🌿*
An ancient Indian healing tradition that brings balance to your body, mind and energy. Not just a massage — it is natural therapy.
- **What we do**: We use warm, medicated herbal oils selected as per your body type. With slow, rhythmic and deep strokes, we work on your energy points (marmas) to release blocked stress and toxins.
- **Benefits**:
  - Deeply relaxes muscles and removes tiredness
  - Improves blood circulation and sleep quality
  - Reduces stress, anxiety and body stiffness
  - Helps in joint pain, back pain and body heaviness
  - Rejuvenates skin and brings natural glow
  - Restores inner balance and peace

---

## 🚀 Live Local Server

The website is running live at:
```bash
http://localhost:8080
```
