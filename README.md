# Smooth Loading with Framer Motion

## Description

This project implements a smooth loading screen using Framer Motion, ensuring a seamless transition between the loading animation and the main content. The animation leverages LayoutGroup, AnimatePresence, and motion components to handle layout animations efficiently.

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)]()
[![FramerMotion](https://img.shields.io/badge/Framer_Motion-black?style=for-the-badge&logo=framer&logoColor=white)]()
[![SASS](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)]()

![Project Screenshot](./public/screenshot1.webp)

##Motivation

This project was developed to explore Framer Motion 5 and its optimized animation handling. It replaces the deprecated AnimateSharedLayout with LayoutGroup, ensuring smoother and more performant layout animations. The goal was to achieve an elegant transition from the loading screen to the main content without layout thrashing.

## Project Structure

The project is structured as follows:

### Components

- **Loader**: Handles the initial loading animation and automatically transitions to the main content upon completion.
- **Header**: Displays the main navigation of the website.
- **Banner**: Contains the hero section of the site.

### Styles (SASS)

The styles are modularized into different SASS files:

- `abstracts/`: Contains global variables and mixins.
- `base/`: Defines resets, typography, and base styles.
- `components/`: Manages styles for UI components like buttons and loaders.
- `layouts/`: Styles specific sections such as `header` and `banner`.

### Framer Motion Animations

This project utilizes **Framer Motion** to manage animations efficiently:

- **LayoutGroup**: Groups layout animations for smoother transitions.
- **AnimatePresence**: Ensures proper exit animations for components.
- **motion.div & motion.img**: Used for individual animations.

## Key Features

- **Seamless Loader Animation**: Uses `motion.div` and `onAnimationComplete` to transition automatically.
- **Smooth Image Transitions**: Implements `layoutId` to animate shared elements between states.
- **Optimized Performance**: Avoids unnecessary re-renders by grouping layout changes efficiently.
