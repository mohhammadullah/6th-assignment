# 🏋️‍♂️ FitLog — Modern Fitness & Workout Tracker

A clean, responsive, and performance-focused workout management web application built with Next.js 14, React Context, and Tailwind CSS. **FitLog** helps users explore workouts, build their daily exercise routines, save favorite sessions, and dynamically track total duration and estimated calorie burn in real-time.

---

## 🛠️ Technologies Used

- **Framework:** Next.js 14 (App Router)
- **Library:** React 18
- **Language:** TypeScript
- **State Management:** React Context API (`LibraryContext`)
- **Styling:** Tailwind CSS
- **Notifications:** React Toastify
- **Icons & Assets:** Lucide React / Custom SVG Assets

---

## ✨ Key Features

1. **Dynamic Daily Plan Builder (`Today's Plan`)**
   Allows users to add workouts from the library into their daily schedule with live status tracking. Prevents duplicate entries and updates button states automatically (`✓ Added to plan`).

2. **Personalized Saved Library (`Save for Later`)**
   Users can bookmark workouts to their saved library and seamlessly move saved exercises into their daily workout plan with a single click.

3. **Real-Time Stats Dashboard**
   Calculates total exercise count, total duration (in minutes), and cumulative calorie burn dynamically across both Today's Plan and Saved workouts with built-in data type safety.

4. **Interactive UI & Instant Feedback**
   Provides interactive action states—such as marking workouts as completed ("Mark as Done"), removing exercises, and instantly receiving stylish notifications via integrated toast alerts.

5. **Fully Responsive Dark Mode Interface**
   Designed with a modern dark theme inspired by modern fitness apps, featuring tab switching, empty state placeholders, and a responsive navigation/footer layout across desktop and mobile devices.

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone [https://github.com/your-username/fitlog.git](https://github.com/your-username/fitlog.git)
cd fitlog