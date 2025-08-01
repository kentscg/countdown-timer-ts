# 🕒 Countdown Timer Challenge (TypeScript)

A take-home coding challenge to build a countdown timer using **React + TypeScript** with functional components, `useState`, and `useEffect`.

## 🎯 Challenge Requirements

### Core Requirements

- [ ] **Input Duration**: Users can input a duration in seconds
- [ ] **Start Countdown**: Click "Start" to begin countdown with real-time updates every second
- [ ] **Time's Up Alert**: Show "Time's up!" when countdown reaches zero
- [ ] **Reset Functionality**: Reset button returns timer to original input value
- [ ] **useState & useEffect**: Use these hooks with proper TypeScript typing

### Bonus Features (Optional)

- [ ] **Disabled Input**: Disable input field while timer is running
- [ ] **Interval Prevention**: Prevent multiple intervals from stacking
- [ ] **Time Formatting**: Format time display as `mm:ss`
- [ ] **Responsive Design**: Make it work on mobile and desktop

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm, yarn, or bun

### Installation & Setup

```bash
# Clone the repository
git clone <repository-url>
cd countdown-timer-ts

# Install dependencies
npm install
# or
yarn install
# or
bun install

# Start the development server
npm start
# or
yarn start
# or
bun start
```

The app will open in your browser at `http://localhost:5173` (or another available port)

## 📁 Project Structure

```
src/
├── components/
│   └── CountdownTimer.tsx    # TODO: Implement timer logic here
├── App.tsx                   # Root component
├── index.tsx                 # Entry point
└── styles.css               # Styling (already implemented)
```

## 🎨 UI Components Available

The UI is already implemented with:

- ✅ Beautiful gradient design
- ✅ Input field for duration
- ✅ Start and Reset buttons
- ✅ Time display area
- ✅ Responsive design
- ✅ Modern styling with animations

## 🔧 Implementation Guide

### What's Already Done

- ✅ Project setup with React + TypeScript + Vite
- ✅ UI components and styling
- ✅ Button click handlers (empty functions)
- ✅ Input field with change handler
- ✅ Time display area

### What You Need to Implement

1. **State Management**: Use `useState` to manage:

   - Input value
   - Current time remaining
   - Timer running status
   - Original time for reset

2. **Timer Logic**: Use `useEffect` to:

   - Start countdown when "Start" is clicked
   - Update time every second
   - Stop timer when it reaches zero
   - Clean up intervals to prevent memory leaks

3. **Event Handlers**: Implement:

   - `handleInputChange`: Update input state
   - `handleStart`: Start the countdown
   - `handleReset`: Reset to original time

4. **Time Formatting**: Create a function to format seconds as `mm:ss`

## 💡 Hints

- Use `setInterval` for the countdown, but remember to clean it up
- Store the original time separately for the reset functionality
- Consider using `useCallback` for event handlers if needed
- Test edge cases like starting multiple timers or resetting while running

## 🎯 Evaluation Criteria

- **Functionality**: All core requirements working
- **Code Quality**: Clean, readable TypeScript code
- **State Management**: Proper use of useState and useEffect
- **Performance**: No memory leaks from intervals
- **User Experience**: Smooth interactions and proper disabled states

## 🚀 Running Your Solution

After implementing the timer logic:

```bash
npm start
```

Visit `http://localhost:5173` to test your countdown timer!

## 📝 Notes

- The UI is fully implemented and ready to use
- Focus on the timer logic in `CountdownTimer.tsx`
- All styling and responsive design is already complete
- TypeScript types are already set up

Good luck! 🍀
