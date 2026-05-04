"use client"

import { motion } from "framer-motion"

// SVG Logo components for proper brand representation
const logos = {
  salesforce: (
    <svg viewBox="0 0 100 70" className="w-full h-full">
      <path d="M41.6 13.7c3.2-3.3 7.6-5.4 12.5-5.4 6.1 0 11.5 3.2 14.5 8 2.8-1.2 5.8-1.9 9-1.9 12.8 0 23.2 10.4 23.2 23.2s-10.4 23.2-23.2 23.2c-1.6 0-3.2-.2-4.7-.5-2.6 4.8-7.7 8-13.5 8-2.3 0-4.5-.5-6.5-1.4-2.7 5.3-8.2 8.9-14.5 8.9-6.4 0-12-3.7-14.6-9.1-1.3.3-2.7.4-4.1.4-10.7 0-19.4-8.7-19.4-19.4 0-8.2 5.1-15.2 12.3-18-1-2.3-1.6-4.9-1.6-7.6C11 10.1 20.1 1 31.1 1c7.2 0 13.5 3.8 17 9.5" fill="#00A1E0"/>
    </svg>
  ),
  hubspot: (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <path d="M72.4 33.8v-8.5c3.3-1.6 5.6-5 5.6-8.9 0-5.5-4.5-10-10-10s-10 4.5-10 10c0 3.9 2.3 7.3 5.6 8.9v8.5c-4.2.9-8.1 2.7-11.4 5.3L26.7 19.8c.2-.8.3-1.6.3-2.5 0-6.1-4.9-11-11-11s-11 4.9-11 11 4.9 11 11 11c2.5 0 4.9-.9 6.8-2.3l25.1 19c-3.4 4.7-5.4 10.4-5.4 16.6 0 6.2 2 12 5.4 16.7l-8.4 8.4c-1-.4-2-.6-3.1-.6-5.1 0-9.2 4.1-9.2 9.2s4.1 9.2 9.2 9.2 9.2-4.1 9.2-9.2c0-1.1-.2-2.1-.6-3.1l8.3-8.3c5.1 4 11.5 6.4 18.4 6.4 16.5 0 29.9-13.4 29.9-29.9.1-14.5-10.4-26.6-24.2-29.5zM68 78.3c-10.2 0-18.5-8.3-18.5-18.5S57.8 41.3 68 41.3s18.5 8.3 18.5 18.5S78.2 78.3 68 78.3z" fill="#FF7A59"/>
    </svg>
  ),
  slack: (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <path d="M21.3 63.2c0 5.8-4.7 10.5-10.5 10.5S.3 69 .3 63.2s4.7-10.5 10.5-10.5h10.5v10.5zm5.3 0c0-5.8 4.7-10.5 10.5-10.5s10.5 4.7 10.5 10.5v26.3c0 5.8-4.7 10.5-10.5 10.5s-10.5-4.7-10.5-10.5V63.2z" fill="#E01E5A"/>
      <path d="M37.1 21.3c-5.8 0-10.5-4.7-10.5-10.5S31.3.3 37.1.3s10.5 4.7 10.5 10.5v10.5H37.1zm0 5.2c5.8 0 10.5 4.7 10.5 10.5s-4.7 10.5-10.5 10.5H10.8C5 47.5.3 42.8.3 37s4.7-10.5 10.5-10.5h26.3z" fill="#36C5F0"/>
      <path d="M79.2 37c0-5.8 4.7-10.5 10.5-10.5s10.5 4.7 10.5 10.5-4.7 10.5-10.5 10.5H79.2V37zm-5.2 0c0 5.8-4.7 10.5-10.5 10.5S53 42.8 53 37V10.8C53 5 57.7.3 63.5.3S74 5 74 10.8V37z" fill="#2EB67D"/>
      <path d="M63.5 79c5.8 0 10.5 4.7 10.5 10.5s-4.7 10.5-10.5 10.5S53 95.3 53 89.5V79h10.5zm0-5.2c-5.8 0-10.5-4.7-10.5-10.5S57.7 52.8 63.5 52.8h26.3c5.8 0 10.5 4.7 10.5 10.5S95.6 73.8 89.8 73.8H63.5z" fill="#ECB22E"/>
    </svg>
  ),
  jira: (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <defs>
        <linearGradient id="jira1" x1="99.7%" y1="15.8%" x2="24.6%" y2="62.1%">
          <stop offset="18%" stopColor="#0052CC"/>
          <stop offset="100%" stopColor="#2684FF"/>
        </linearGradient>
        <linearGradient id="jira2" x1="0.6%" y1="84.5%" x2="71.2%" y2="37.6%">
          <stop offset="18%" stopColor="#0052CC"/>
          <stop offset="100%" stopColor="#2684FF"/>
        </linearGradient>
      </defs>
      <path d="M95.4 47.2L53.1 4.9 50 1.8l-31.5 31.5-16.7 16.7c-2.4 2.4-2.4 6.2 0 8.5l28.3 28.3L50 106.5l31.5-31.5.2-.2 13.7-13.7c2.4-2.3 2.4-6.1 0-8.5zM50 66.3L37.5 53.8 50 41.3l12.5 12.5L50 66.3z" fill="url(#jira1)"/>
      <path d="M50 41.3c-8.2-8.2-8.2-21.4-.1-29.5L18.5 43.2l19.3 19.3L50 50.1" fill="url(#jira2)"/>
    </svg>
  ),
  zendesk: (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <path d="M46.1 38.5v51.6H0L46.1 38.5zM46.1 9.9C46.1 22.7 35.8 33 23 33S0 22.7 0 9.9h46.1zM53.9 61.5V9.9H100L53.9 61.5zM53.9 90.1C53.9 77.3 64.2 67 77 67s23 10.3 23 23.1H53.9z" fill="#03363D"/>
    </svg>
  ),
  intercom: (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <path d="M50 0C22.4 0 0 22.4 0 50s22.4 50 50 50 50-22.4 50-50S77.6 0 50 0zm-25 62.5V37.5c0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5v25c0 1.4-1.1 2.5-2.5 2.5s-2.5-1.1-2.5-2.5zm15 7.5V30c0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5v40c0 1.4-1.1 2.5-2.5 2.5s-2.5-1.1-2.5-2.5zm15 0V30c0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5v40c0 1.4-1.1 2.5-2.5 2.5s-2.5-1.1-2.5-2.5zm15-7.5V37.5c0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5v25c0 1.4-1.1 2.5-2.5 2.5s-2.5-1.1-2.5-2.5zM21.9 77.5c-1.2-.7-1.6-2.3-.9-3.5.7-1.2 2.3-1.6 3.5-.9 0 0 10 6.4 25.5 6.4s25.5-6.4 25.5-6.4c1.2-.7 2.8-.3 3.5.9.7 1.2.3 2.8-.9 3.5 0 0-11.2 7.5-28.1 7.5s-28.1-7.5-28.1-7.5z" fill="#1F8DED"/>
    </svg>
  ),
  notion: (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <path d="M6.2 7.6c3.4 2.8 4.7 2.6 11.2 2.2l60.9-3.7c1.3 0 .2-1.3-.2-1.5L68.9.2C66.6-1.5 63.5-1.1 60.5-.9l-51.8 3.7C5.3 3.1 4.6 4.6 6.2 7.6zM17.5 20.3v64c0 3.5 1.7 4.8 5.7 4.6l66.5-3.9c3.9-.2 4.3-2.6 4.3-5.3V16.3c0-2.6-1.1-4.1-3.5-3.9l-69.3 4.1c-2.6.2-3.7 1.3-3.7 3.8zm65.4 2.8c.4 1.7 0 3.5-1.7 3.7l-3.3.7v47.2c-2.8 1.5-5.5 2.4-7.7 2.4-3.5 0-4.6-1.1-7.2-4.4L38.4 34.4v36.7l6.8 1.5c0 0 0 3.5-4.8 3.5L26.1 77c-.4-.9 0-3 1.5-3.5l4.1-1.1V29.5l-5.7-.4c-.4-1.7.7-4.3 3.7-4.6l15.5-.9L70.8 63v-34l-5.7-.6c-.4-2 1.1-3.5 2.8-3.7l15 -.8z" fill="#000"/>
    </svg>
  ),
  asana: (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <path d="M72.4 47.8c-15.2 0-27.6 12.3-27.6 27.6S57.2 103 72.4 103 100 90.7 100 75.4 87.6 47.8 72.4 47.8zm-44.8 0C12.3 47.8 0 60.1 0 75.4S12.3 103 27.6 103s27.6-12.3 27.6-27.6S42.9 47.8 27.6 47.8zM72.4 0c-15.2 0-27.6 12.3-27.6 27.6s12.3 27.6 27.6 27.6S100 42.8 100 27.6 87.6 0 72.4 0z" fill="#F06A6A"/>
    </svg>
  ),
  linear: (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <path d="M1.2 58.5a49.5 49.5 0 0 0 40.4 40.3L1.2 58.5zm-1-7.4a50 50 0 0 0 5.9 27.5l21.6-21.6a25 25 0 0 1 20.8-20.8L70 14.7A50 50 0 0 0 .2 51.1zm98.6-2.2a50 50 0 0 0-84.6-35l35 35h49.6zM50 0a50 50 0 0 0-35.8 85L85 14.2A49.8 49.8 0 0 0 50 0z" fill="#5E6AD2"/>
    </svg>
  ),
  github: (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <path d="M50 0C22.4 0 0 22.4 0 50c0 22.1 14.3 40.8 34.2 47.4 2.5.5 3.4-1.1 3.4-2.4 0-1.2 0-4.3-.1-8.5-13.9 3-16.8-6.7-16.8-6.7-2.3-5.8-5.6-7.3-5.6-7.3-4.5-3.1.3-3 .3-3 5 .4 7.6 5.1 7.6 5.1 4.5 7.7 11.7 5.5 14.6 4.2.5-3.3 1.8-5.5 3.2-6.7-11.1-1.3-22.8-5.6-22.8-24.7 0-5.5 1.9-9.9 5.1-13.4-.5-1.3-2.2-6.4.5-13.2 0 0 4.2-1.3 13.7 5.1 4-1.1 8.3-1.7 12.5-1.7 4.2 0 8.5.6 12.5 1.7 9.5-6.4 13.7-5.1 13.7-5.1 2.7 6.9 1 12 .5 13.2 3.2 3.5 5.1 7.9 5.1 13.4 0 19.2-11.7 23.4-22.8 24.6 1.8 1.5 3.4 4.6 3.4 9.2 0 6.7-.1 12-.1 13.7 0 1.3.9 2.9 3.4 2.4C85.7 90.8 100 72.1 100 50 100 22.4 77.6 0 50 0z" fill="#fff"/>
    </svg>
  ),
  stripe: (
    <svg viewBox="0 0 100 42" className="w-full h-full">
      <path d="M10.4 13.6c0-1.5 1.2-2.1 3.2-2.1 2.9 0 6.5.9 9.4 2.4V6.1C19.9 4.8 16.8 4 13.6 4 5.4 4 0 8.2 0 14.8c0 10.3 14.1 8.6 14.1 13 0 1.7-1.5 2.3-3.6 2.3-3.1 0-7.1-1.3-10.2-3v8c3.5 1.5 7 2.1 10.2 2.1 8.4 0 14.2-4.2 14.2-10.8-.1-11.1-14.3-9.1-14.3-12.8zM35 0l-8.3 1.8v28.6l8.3 1.8zm0 4.9L35 9h6.1v21.1h-6.1v4.1H52v-4.1h-8.6V9H52V4.9zM72.2 4c-2.9 0-4.8 1.4-5.8 2.3l-.4-1.8H58v33.8l8.3-1.8V32c1.1.8 2.6 1.9 5.2 1.9 5.2 0 10-4.2 10-13.5C81.5 11.5 77.2 4 72.2 4zm-1.8 23.1c-1.7 0-2.8-.6-3.5-1.4v-11c.7-.8 1.8-1.5 3.5-1.5 2.7 0 4.6 3 4.6 7s-1.8 6.9-4.6 6.9zM100 20.5c0-7.9-3.8-13.5-11.1-13.5s-11.8 5.6-11.8 13.4c0 8.9 5.3 13.4 12.8 13.4 3.7 0 6.5-.8 8.6-2V27c-2.1 1.1-4.6 1.7-7.7 1.7-3 0-5.7-1.1-6.1-4.7h15.3v-3.5zm-15.4-2.8c0-3.5 2.1-5 4.1-5 1.9 0 3.9 1.5 3.9 5h-8z" fill="#6772E5"/>
    </svg>
  ),
  segment: (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <path d="M58.1 24.3H6.4c-2.3 0-4.2-1.9-4.2-4.2s1.9-4.2 4.2-4.2h51.7c2.3 0 4.2 1.9 4.2 4.2s-1.9 4.2-4.2 4.2zM93.6 53.4H41.9c-2.3 0-4.2-1.9-4.2-4.2s1.9-4.2 4.2-4.2h51.7c2.3 0 4.2 1.9 4.2 4.2s-1.9 4.2-4.2 4.2zM58.1 82.5H6.4c-2.3 0-4.2-1.9-4.2-4.2s1.9-4.2 4.2-4.2h51.7c2.3 0 4.2 1.9 4.2 4.2s-1.9 4.2-4.2 4.2zM79.1 24.3c-2.3 0-4.2-1.9-4.2-4.2s1.9-4.2 4.2-4.2 4.2 1.9 4.2 4.2-1.9 4.2-4.2 4.2zM20.9 82.5c-2.3 0-4.2-1.9-4.2-4.2s1.9-4.2 4.2-4.2 4.2 1.9 4.2 4.2-1.9 4.2-4.2 4.2z" fill="#52BD94"/>
    </svg>
  ),
  google: (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <path d="M91.2 42.2H50v16.1h23.7c-2.4 12.8-13.3 18.4-23.6 18.4-14.3 0-26.3-11.5-26.3-26.2 0-14.4 11.7-26.2 26.3-26.2 9.5 0 15.4 4 18.9 7.4l11.4-11.5C72.5 12.7 62.4 7.3 50.1 7.3c-23.7 0-42.9 18.7-42.9 42.7s19.2 42.7 42.9 42.7c24.9 0 41.5-17.5 41.5-42.1 0-3.7-.5-6.4-.4-8.4z" fill="#4285F4"/>
      <path d="M13.3 31.4l13.3 9.8c3.6-10.6 13.4-18.4 25-18.4 9.5 0 15.4 4 18.9 7.4l11.4-11.5C74 11.2 63.9 5.8 51.6 5.8c-17.7 0-32.9 10.7-39.5 26h1.2z" fill="#EA4335"/>
      <path d="M51.6 94.7c12 0 22.2-4 29.7-10.9l-13.7-11.3c-4.5 3.5-10.5 5.5-16.1 5.5-10.2 0-21-6.7-23.6-18.4L13.5 70c6.8 13.5 20.7 24.7 38.1 24.7z" fill="#34A853"/>
      <path d="M91.2 42.2H50v16.1h23.7c-1.2 6.1-4.5 10.7-9.1 13.9l13.7 11.3c7.5-7.3 12.4-18.5 12.4-33 0-3.6-.5-6.3-.5-8.3z" fill="#4285F4"/>
    </svg>
  ),
  microsoft: (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <path fill="#F25022" d="M0 0h47.6v47.6H0z"/>
      <path fill="#7FBA00" d="M52.4 0H100v47.6H52.4z"/>
      <path fill="#00A4EF" d="M0 52.4h47.6V100H0z"/>
      <path fill="#FFB900" d="M52.4 52.4H100V100H52.4z"/>
    </svg>
  ),
  zoom: (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <circle cx="50" cy="50" r="50" fill="#2D8CFF"/>
      <path d="M73.5 62.5c1 .7 2.2.4 2.7-.5.3-.5.3-1 .3-1.5V39.5c0-1.2-1.3-2-2.3-1.3l-11.7 7.5v8.7l11 8.1zM23.5 37.5h32.3c2.4 0 4.2 1.9 4.2 4.3v16.4c0 2.4-1.9 4.3-4.2 4.3H23.5c-2.4 0-4.2-1.9-4.2-4.3V41.8c0-2.4 1.9-4.3 4.2-4.3z" fill="#fff"/>
    </svg>
  ),
  gong: (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <circle cx="50" cy="50" r="50" fill="#7C3AED"/>
      <path d="M50 25c-13.8 0-25 11.2-25 25s11.2 25 25 25 25-11.2 25-25-11.2-25-25-25zm0 40c-8.3 0-15-6.7-15-15s6.7-15 15-15 15 6.7 15 15-6.7 15-15 15z" fill="#fff"/>
      <circle cx="50" cy="50" r="8" fill="#fff"/>
    </svg>
  ),
  snowflake: (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <path d="M50 0L50 100M25 14.4L75 85.6M75 14.4L25 85.6M0 50L100 50M14.4 25L85.6 75M14.4 75L85.6 25" stroke="#29B5E8" strokeWidth="8" strokeLinecap="round" fill="none"/>
      <circle cx="50" cy="50" r="12" fill="#29B5E8"/>
      <circle cx="50" cy="8" r="6" fill="#29B5E8"/>
      <circle cx="50" cy="92" r="6" fill="#29B5E8"/>
      <circle cx="8" cy="50" r="6" fill="#29B5E8"/>
      <circle cx="92" cy="50" r="6" fill="#29B5E8"/>
      <circle cx="25" cy="14.4" r="5" fill="#29B5E8"/>
      <circle cx="75" cy="85.6" r="5" fill="#29B5E8"/>
      <circle cx="75" cy="14.4" r="5" fill="#29B5E8"/>
      <circle cx="25" cy="85.6" r="5" fill="#29B5E8"/>
    </svg>
  ),
  bigquery: (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <path d="M38 62.5l-16.5 16.5 4 4L42 66.5" fill="#4386FA"/>
      <path d="M50 20c-16.5 0-30 13.5-30 30 0 7.7 3 14.8 7.8 20.2L42 56c-3.7-2.6-6-6.9-6-11.7 0-7.7 6.3-14 14-14s14 6.3 14 14c0 4.8-2.4 9.1-6 11.7l14.2 14.2C77 64.8 80 57.7 80 50c0-16.5-13.5-30-30-30z" fill="#4386FA"/>
      <path d="M50 70c-10.5 0-19-8.5-19-19s8.5-19 19-19 19 8.5 19 19-8.5 19-19 19zm0-30c-6.1 0-11 4.9-11 11s4.9 11 11 11 11-4.9 11-11-4.9-11-11-11z" fill="#4386FA"/>
      <circle cx="50" cy="51" r="6" fill="#4386FA"/>
    </svg>
  ),
  postgresql: (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <path d="M80.5 44.2c-.8-5-3.6-9-7.9-11.5.5-2.1.8-4.4.8-6.8C73.4 11.7 62.3 0 48.6 0c-6.4 0-12.3 2.5-17.1 7-2.3-.5-4.7-.8-7.2-.8C10.8 6.2 0 18.2 0 33.1c0 5.6 1.3 10.9 3.7 15.6-2.4 4.1-3.7 8.8-3.7 13.7C0 81.1 15.5 96.6 34.2 96.6c5.1 0 10-1.1 14.5-3.1 4.5 4.1 10.4 6.5 16.7 6.5 13.9 0 25.3-11.4 25.3-25.4 0-3-.5-5.9-1.4-8.7 6-4.7 9.5-12 9.5-19.8 0-1.2-.1-2.4-.3-3.9z" fill="#336791"/>
      <path d="M48.6 8c9.8 0 16.8 8.7 16.8 18.1 0 3.7-.8 7.2-2.3 10.3-3.2-1.7-6.8-2.7-10.6-2.7h-1.2c-1.2-2.9-3.5-5.2-6.5-6.5-.4-5.8 1.3-11.8 3.8-19.2zm-24.3 6.2c1.3 0 2.5.1 3.7.3-2.7 8.2-4.3 15.1-3.5 21.6-5.5 2.5-9.5 7.6-10.5 13.6-1.2-3.1-1.8-6.5-1.8-10C12.2 27.3 21.1 14.2 34.3 14.2zm0 74.4c-14.3 0-26.1-11.8-26.1-26.2 0-2.9.5-5.7 1.4-8.3 2.9 5.5 8.5 9.4 15 10.2v.9c0 9.7 5.7 18.3 14.4 22.3-1.5.7-3.1 1.1-4.7 1.1zm31.1-4.4c-4.6 0-8.9-1.9-12-5.1 3.9-4.7 6.2-10.6 6.2-17.1 0-6.5-.3-10.5-1-14.7h.9c6.6 0 12.4 3.7 15.5 9.1-1.1 1.9-1.7 4.1-1.7 6.5 0 7.4 6 13.5 13.4 13.5h.2c-4.3 4.8-10.5 7.8-17.5 7.8z" fill="#fff"/>
    </svg>
  ),
  pipedrive: (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <circle cx="50" cy="50" r="50" fill="#1A1F36"/>
      <path d="M35 30h12c8.8 0 16 7.2 16 16s-7.2 16-16 16h-4v10c0 1.1-.9 2-2 2h-6c-1.1 0-2-.9-2-2V32c0-1.1.9-2 2-2zm12 22c3.3 0 6-2.7 6-6s-2.7-6-6-6h-4v12h4z" fill="#47B972"/>
    </svg>
  ),
  dynamics: (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <path d="M0 15l25-15v85L0 100V15z" fill="#002050"/>
      <path d="M25 0l50 30v55L25 55V0z" fill="#0078D4"/>
      <path d="M75 30l25 15v55l-25-15V30z" fill="#002050"/>
    </svg>
  ),
  gainsight: (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <circle cx="50" cy="50" r="50" fill="#FF5722"/>
      <path d="M50 20c-16.6 0-30 13.4-30 30s13.4 30 30 30 30-13.4 30-30-13.4-30-30-30zm0 50c-11 0-20-9-20-20s9-20 20-20 20 9 20 20-9 20-20 20z" fill="#fff"/>
      <circle cx="50" cy="50" r="10" fill="#fff"/>
    </svg>
  ),
  totango: (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <circle cx="50" cy="50" r="50" fill="#6366F1"/>
      <path d="M30 50h40M50 30v40" stroke="#fff" strokeWidth="8" strokeLinecap="round"/>
    </svg>
  ),
  freshdesk: (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <rect width="100" height="100" rx="20" fill="#2DC77D"/>
      <path d="M25 35h50v5H25zm0 15h50v5H25zm0 15h30v5H25z" fill="#fff"/>
    </svg>
  ),
  teams: (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <path d="M91.5 25.5c0-7.5-6-13.5-13.5-13.5-6 0-11 3.9-12.8 9.3H58c-2.9-4.6-8-7.8-13.8-7.8-9 0-16.2 7.3-16.2 16.2v2.6c-8.4 1.9-14.7 9.4-14.7 18.4v19c0 10.4 8.4 18.8 18.8 18.8h33.3c10.4 0 18.8-8.4 18.8-18.8V55.2c2.7-1.9 4.5-5 4.5-8.5V29c.5-.1.8-.4.8-.5v-3z" fill="#5059C9"/>
      <circle cx="78" cy="25" r="10" fill="#7B83EB"/>
      <circle cx="44" cy="22" r="14" fill="#5059C9"/>
      <path d="M72.8 35H23c-4.4 0-8 3.6-8 8v27c0 9 7.3 16.3 16.3 16.3h33.3c9 0 16.3-7.3 16.3-16.3V43c-.1-4.4-3.7-8-8.1-8z" fill="#7B83EB"/>
    </svg>
  ),
  discord: (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <circle cx="50" cy="50" r="50" fill="#5865F2"/>
      <path d="M73.5 30.3A58.9 58.9 0 0058.5 25c-.8 1.5-1.8 3.5-2.4 5.1-5.5-.8-10.9-.8-16.3 0-.7-1.6-1.6-3.6-2.5-5.1a58.6 58.6 0 00-15 5.3c-9.5 14.1-12 27.9-10.7 41.5a59.7 59.7 0 0018.2 9.2c1.5-2 2.8-4.1 3.9-6.3-2.1-.8-4.2-1.8-6.1-3 .5-.4 1-.8 1.5-1.2 11.8 5.4 24.6 5.4 36.2 0l1.5 1.2c-2 1.2-4 2.2-6.2 3 1.1 2.2 2.4 4.3 3.9 6.3a59.5 59.5 0 0018.2-9.2c1.6-16.2-2.6-30.2-11.2-42.5zM38.3 63.5c-3.6 0-6.6-3.3-6.6-7.4s2.9-7.4 6.6-7.4c3.7 0 6.7 3.3 6.6 7.4 0 4.1-2.9 7.4-6.6 7.4zm24.4 0c-3.6 0-6.6-3.3-6.6-7.4s2.9-7.4 6.6-7.4c3.7 0 6.7 3.3 6.6 7.4 0 4.1-2.9 7.4-6.6 7.4z" fill="#fff"/>
    </svg>
  ),
  mixpanel: (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <circle cx="50" cy="50" r="50" fill="#7856FF"/>
      <path d="M25 60L40 40l15 15 20-30" stroke="#fff" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </svg>
  ),
  amplitude: (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <circle cx="50" cy="50" r="50" fill="#1A75BC"/>
      <path d="M50 20l25 60H25l25-60z" fill="#fff"/>
    </svg>
  ),
  tableau: (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <path d="M50 10v30h-5V10h5zm0 50v30h-5V60h5zM35 25v50h-5V25h5zM70 25v50h-5V25h5zM20 35v30h-5V35h5zM85 35v30h-5V35h5z" fill="#E97627"/>
      <path d="M50 35v30h-5V35h5z" fill="#C72037"/>
    </svg>
  ),
  zuora: (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <rect width="100" height="100" rx="10" fill="#0F2C4C"/>
      <path d="M25 65l25-30 25 30H25z" fill="#FF6600"/>
    </svg>
  ),
  chargebee: (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <circle cx="50" cy="50" r="50" fill="#FF6C37"/>
      <path d="M35 65V35l30 15-30 15z" fill="#fff"/>
    </svg>
  ),
  netsuite: (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <rect width="100" height="100" rx="10" fill="#C74634"/>
      <path d="M30 70V30l40 20-40 20z" fill="#fff"/>
    </svg>
  ),
  redshift: (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <path d="M50 0L90 25v50L50 100 10 75V25L50 0z" fill="#205B97"/>
      <path d="M50 25L70 37.5v25L50 75 30 62.5v-25L50 25z" fill="#5193CE"/>
    </svg>
  ),
  monday: (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <rect width="100" height="100" rx="10" fill="#FF3D57"/>
      <circle cx="30" cy="50" r="12" fill="#fff"/>
      <circle cx="50" cy="50" r="12" fill="#00D647"/>
      <circle cx="70" cy="50" r="12" fill="#FDAB3D"/>
    </svg>
  ),
  mailchimp: (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <circle cx="50" cy="50" r="50" fill="#FFE01B"/>
      <path d="M65 45c-2-3-6-4-10-3-2-5-6-8-11-8-7 0-12 6-12 13 0 3 1 5 2 7-4 2-6 5-6 9 0 6 5 11 12 11 4 0 7-1 10-4 2 1 5 2 8 2 8 0 14-6 14-13 0-5-3-10-7-14z" fill="#1A1A1A"/>
    </svg>
  ),
  marketo: (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <path d="M0 0h100v100H0z" fill="#5C4C9F"/>
      <path d="M30 25l40 25-40 25V25z" fill="#fff"/>
    </svg>
  ),
  airtable: (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <path d="M46.5 8.3L10 22.5c-2.5 1-2.5 4.5 0 5.4l36.5 14.2c2.3.9 4.7.9 7 0L90 27.9c2.5-1 2.5-4.5 0-5.4L53.5 8.3c-2.3-.9-4.7-.9-7 0z" fill="#FFCC00"/>
      <path d="M52 46.2v41.5c0 2.1 2.2 3.5 4.1 2.7L95 72.9c1.2-.5 2-1.7 2-3V28.4c0-2.1-2.2-3.5-4.1-2.7l-39 17.5c-1.1.5-1.9 1.7-1.9 3z" fill="#31C5F0"/>
      <path d="M46 46.2v41.5c0 2.1-2.2 3.5-4.1 2.7L3 72.9c-1.2-.5-2-1.7-2-3V28.4c0-2.1 2.2-3.5 4.1-2.7l39 17.5c1.2.5 2 1.7 2 3z" fill="#ED3049"/>
    </svg>
  ),
  clickup: (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <path d="M13.3 63.6l16.2-12.3c6.9 9.1 17.8 14.6 29.5 13.9 8.6-.5 16.6-4.5 22.3-11.1l15.3 13.4c-9.1 10.4-22.4 16.6-36.7 17.2-18.5.8-35.8-7.6-46.6-21.1z" fill="#8930FD"/>
      <path d="M50.1 33.8c-5.7 0-11.1 2.7-14.5 7.3L17.9 27.5c8.3-11.3 21.6-18.2 35.9-18.2 12.7 0 24.7 5.5 33 15l-16.7 13.9c-3.6-4.9-9.3-7.7-15.3-7.7-1.5 0-3 .1-4.7.3z" fill="#00C8FF"/>
    </svg>
  ),
  trello: (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <rect width="100" height="100" rx="15" fill="#0079BF"/>
      <rect x="15" y="15" width="30" height="55" rx="5" fill="#fff"/>
      <rect x="55" y="15" width="30" height="35" rx="5" fill="#fff"/>
    </svg>
  ),
  confluence: (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <defs>
        <linearGradient id="conf1" x1="99%" y1="0%" x2="30%" y2="80%">
          <stop offset="0%" stopColor="#0052CC"/>
          <stop offset="100%" stopColor="#2684FF"/>
        </linearGradient>
      </defs>
      <path d="M8.8 67.5c-1.3 2.1-.5 4.8 1.8 5.9l23.7 12.8c2.2 1.2 4.9.4 6.1-1.7 0 0 10.2-17 20.3-17s20.8 17 20.8 17c1.2 2.1 3.9 2.9 6.1 1.7l23.7-12.8c2.3-1.2 3.1-4 1.8-6-3.2-5-13.3-20.2-31.8-20.2S12.1 62.5 8.8 67.5z" fill="url(#conf1)"/>
      <path d="M91.2 32.5c1.3-2.1.5-4.8-1.8-5.9L65.7 13.8c-2.2-1.2-4.9-.4-6.1 1.7 0 0-10.2 17-20.3 17s-20.8-17-20.8-17c-1.2-2.1-3.9-2.9-6.1-1.7L8.7 26.6c-2.3 1.2-3.1 4-1.8 6 3.2 5 13.3 20.2 31.8 20.2s30.4-15.2 33.7-20.2 18.8-.1 18.8-.1z" fill="#2684FF"/>
    </svg>
  ),
  figma: (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <path d="M35 100c8.3 0 15-6.7 15-15V70H35c-8.3 0-15 6.7-15 15s6.7 15 15 15z" fill="#0ACF83"/>
      <path d="M20 50c0-8.3 6.7-15 15-15h15v30H35c-8.3 0-15-6.7-15-15z" fill="#A259FF"/>
      <path d="M20 15c0-8.3 6.7-15 15-15h15v30H35c-8.3 0-15-6.7-15-15z" fill="#F24E1E"/>
      <path d="M50 0h15c8.3 0 15 6.7 15 15s-6.7 15-15 15H50V0z" fill="#FF7262"/>
      <circle cx="65" cy="50" r="15" fill="#1ABCFE"/>
    </svg>
  ),
  dropbox: (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <path d="M30 10L5 27.5l25 17.5 25-17.5L30 10zm40 0L45 27.5l25 17.5 25-17.5L70 10zM5 62.5L30 80l25-17.5-25-17.5L5 62.5zm65-17.5L45 62.5 70 80l25-17.5-25-17.5zM30 85l25 15 25-15-25-15-25 15z" fill="#0061FF"/>
    </svg>
  ),
  box: (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <path d="M87 27L50 5 13 27v46l37 22 37-22V27zM50 81L23 65V35l27 16v30zm0-34L23 31l27-16 27 16-27 16zm27 18L50 81V51l27-16v30z" fill="#0061D5"/>
    </svg>
  ),
  aws: (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <path d="M28.7 59.7c0 1.4.2 2.5.5 3.3.4.8.8 1.7 1.4 2.6.2.3.3.6.3.9 0 .4-.2.8-.7 1.1l-2.3 1.5c-.3.2-.7.3-1 .3-.4 0-.8-.2-1.2-.6-.5-.6-1-1.2-1.4-1.9-.4-.7-.8-1.5-1.2-2.5-3.1 3.6-7 5.5-11.6 5.5-3.3 0-6-.9-7.9-2.8-2-1.9-3-4.4-3-7.5 0-3.3 1.2-6 3.5-8.1 2.4-2.1 5.5-3.1 9.4-3.1 1.3 0 2.7.1 4.1.3 1.4.2 2.9.5 4.5.9v-2.9c0-3-.6-5.1-1.9-6.3-1.3-1.2-3.5-1.8-6.6-1.8-1.4 0-2.9.2-4.4.5-1.5.3-3 .8-4.4 1.4-.7.3-1.2.4-1.5.5-.3.1-.5.1-.7.1-.6 0-.9-.4-.9-1.3v-1.8c0-.7.1-1.2.3-1.5.2-.3.6-.6 1.2-.9 1.4-.7 3.1-1.3 5.1-1.8 2-.5 4.1-.7 6.3-.7 4.8 0 8.3 1.1 10.6 3.3 2.2 2.2 3.4 5.5 3.4 10v13.2zm-16 6c1.3 0 2.6-.2 4-.7 1.4-.5 2.7-1.3 3.8-2.5.7-.8 1.2-1.6 1.4-2.6.3-1 .4-2.2.4-3.6v-1.7c-1.2-.3-2.4-.5-3.7-.7-1.3-.2-2.5-.2-3.7-.2-2.6 0-4.4.5-5.7 1.5-1.3 1-1.9 2.5-1.9 4.4 0 1.8.5 3.1 1.4 4 1 1 2.3 1.5 4 1.5zm31.6 4.4c-.8 0-1.3-.1-1.7-.4-.4-.3-.7-.9-1-1.8l-11-36.2c-.3-1-.4-1.6-.4-2 0-.8.4-1.2 1.2-1.2h3.6c.8 0 1.4.1 1.7.4.4.3.6.9.9 1.8l7.8 30.9 7.3-30.9c.2-.9.5-1.5.9-1.8.4-.3 1-.4 1.8-.4h2.9c.8 0 1.4.1 1.8.4.4.3.7.9.9 1.8l7.4 31.3 8.1-31.3c.3-.9.6-1.5.9-1.8.4-.3 1-.4 1.7-.4h3.4c.8 0 1.2.4 1.2 1.2 0 .2 0 .5-.1.8-.1.3-.2.7-.4 1.2l-11.3 36.2c-.3.9-.6 1.5-1 1.8-.4.3-1 .4-1.7.4h-3.2c-.8 0-1.4-.1-1.8-.4-.4-.3-.7-.9-.9-1.8l-7.2-30.2-7.2 30.1c-.2.9-.5 1.5-.9 1.8-.4.3-1 .4-1.8.4h-3.2zm50.5 1.1c-2 0-4-.2-5.9-.7-1.9-.5-3.4-1-4.5-1.6-.6-.4-1.1-.8-1.2-1.2-.2-.4-.2-.8-.2-1.2v-1.9c0-.9.3-1.3 1-1.3.3 0 .5 0 .8.1.3.1.7.3 1.1.5 1.5.7 3.1 1.2 4.9 1.6 1.7.4 3.5.5 5.2.5 2.8 0 4.9-.5 6.4-1.5 1.5-1 2.3-2.4 2.3-4.3 0-1.3-.4-2.3-1.2-3.2-.8-.9-2.4-1.6-4.6-2.4l-6.7-2.1c-3.3-1-5.8-2.6-7.3-4.5-1.5-1.9-2.3-4.1-2.3-6.4 0-1.9.4-3.5 1.2-5 .8-1.5 1.9-2.8 3.3-3.8 1.4-1.1 3-1.9 4.8-2.4 1.9-.6 3.8-.8 5.9-.8 1 0 2.1.1 3.1.2 1.1.1 2.1.3 3 .5 1 .2 1.8.5 2.7.8.8.3 1.5.6 2 .9.7.4 1.2.8 1.5 1.2.3.4.4.9.4 1.5v1.7c0 .9-.3 1.3-1 1.3-.3 0-.8-.2-1.4-.5-2.1-1-4.5-1.5-7.2-1.5-2.5 0-4.4.4-5.8 1.2-1.4.8-2.1 2.1-2.1 3.9 0 1.3.5 2.4 1.4 3.3.9.9 2.7 1.8 5.2 2.6l6.6 2.1c3.3 1 5.6 2.5 7.1 4.3 1.4 1.8 2.1 3.9 2.1 6.3 0 1.9-.4 3.7-1.2 5.2-.8 1.6-1.9 2.9-3.3 4-1.4 1.1-3.1 2-5.1 2.6-2.1.6-4.3.9-6.7.9z" fill="#252F3E"/>
      <path d="M89.7 78.4C79 85.3 63.8 89 50.6 89c-18.6 0-35.4-6.9-48-18.3-1-.9-.1-2.1 1.1-1.4 13.7 8 30.6 12.8 48.1 12.8 11.8 0 24.7-2.4 36.6-7.5 1.8-.8 3.3 1.2 1.3 2.8z" fill="#FF9900"/>
      <path d="M93.4 74.2c-1.4-1.7-9-1-12.5-.5-1 .1-1.2-.8-.3-1.5 6.1-4.3 16.1-3 17.3-1.6 1.2 1.5-.3 11.6-6 16.4-.9.8-1.7.4-1.3-.6 1.3-3.3 4.2-10.5 2.8-12.2z" fill="#FF9900"/>
    </svg>
  ),
  twilio: (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <circle cx="50" cy="50" r="50" fill="#F22F46"/>
      <circle cx="35" cy="35" r="8" fill="#fff"/>
      <circle cx="65" cy="35" r="8" fill="#fff"/>
      <circle cx="35" cy="65" r="8" fill="#fff"/>
      <circle cx="65" cy="65" r="8" fill="#fff"/>
    </svg>
  ),
  sendgrid: (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <rect width="100" height="100" fill="#1A82E2"/>
      <path d="M33.3 33.3h33.4v33.4H33.3z" fill="#fff"/>
      <path d="M33.3 33.3H50v16.7H33.3z" fill="#99E1F4"/>
      <path d="M50 50h16.7v16.7H50z" fill="#99E1F4"/>
    </svg>
  ),
  pagerduty: (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <rect width="100" height="100" rx="10" fill="#06AC38"/>
      <path d="M35 25h20c11 0 20 9 20 20s-9 20-20 20H45v15H35V25zm20 30c5.5 0 10-4.5 10-10s-4.5-10-10-10H45v20h10z" fill="#fff"/>
    </svg>
  ),
  datadog: (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <rect width="100" height="100" rx="10" fill="#632CA6"/>
      <path d="M72 40c-2-3-5-5-9-5-2 0-4 0-5 1l-8-8c-1-1-2-3-4-4-2-1-4-1-6 0l-10 5c-3 2-5 5-5 9v22c0 4 3 7 7 7h5c4 0 7-3 7-7V50l10 10c1 1 3 2 5 2 4 0 8-2 10-5 2-3 2-7 0-10l-2-2c2-2 5-5 5-5z" fill="#fff"/>
    </svg>
  ),
  looker: (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <rect width="100" height="100" rx="10" fill="#4285F4"/>
      <circle cx="50" cy="50" r="25" fill="none" stroke="#fff" strokeWidth="8"/>
      <circle cx="50" cy="50" r="10" fill="#fff"/>
    </svg>
  ),
  calendly: (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <circle cx="50" cy="50" r="50" fill="#006BFF"/>
      <rect x="25" y="30" width="50" height="45" rx="8" fill="#fff"/>
      <rect x="35" y="22" width="6" height="16" rx="2" fill="#fff"/>
      <rect x="59" y="22" width="6" height="16" rx="2" fill="#fff"/>
      <path d="M35 50h30M35 60h30M35 70h20" stroke="#006BFF" strokeWidth="4" strokeLinecap="round"/>
    </svg>
  ),
  okta: (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <rect width="100" height="100" fill="#007DC1"/>
      <circle cx="50" cy="50" r="25" fill="none" stroke="#fff" strokeWidth="10"/>
    </svg>
  ),
  auth0: (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <path d="M77.5 70L50 100l-27.5-30L50 20l27.5 50z" fill="#EB5424"/>
      <path d="M50 0L22.5 30 50 80l27.5-50L50 0z" fill="#EB5424"/>
    </svg>
  ),
  shopify: (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <path d="M85.1 21.8c-.1-.6-.6-1-1.1-1-.5 0-10.3-.4-10.3-.4s-6.8-6.7-7.6-7.4c-.8-.7-2.3-.5-2.9-.3-.1 0-1.5.5-4 1.2-2.4-6.8-6.5-13-13.8-13h-.6C42.6.2 40.5 0 38.6 0 24.4 0 17.5 17.6 15.3 26.5c-5.8 1.8-9.9 3.1-10.4 3.2-3.2 1-3.3 1.1-3.7 4.1C.9 36.3 0 91.9 0 91.9l63.2 11.9 34.2-7.4s-12.2-73.5-12.3-74.6zM57.5 15.5c-1.9.6-4 1.2-6.3 2V16c0-4.6-.6-8.3-1.7-11.1 4.2.5 7 5.2 8 10.6zm-12.1-9c1.3 2.5 2.1 6.2 2.1 11.2v.8c-4.1 1.3-8.6 2.7-12.9 4 2.5-9.5 7.1-14.1 10.8-16zm-5.6-4.3c.7 0 1.4.2 2 .6-5.1 2.4-10.6 8.4-12.9 20.4-3.5 1.1-6.9 2.1-10 3.1C21.5 17.5 28.3 2.2 39.8 2.2z" fill="#95BF47"/>
      <path d="M84 20.8c-.5 0-10.3-.4-10.3-.4s-6.8-6.7-7.6-7.4c-.3-.3-.7-.4-1.1-.5v88.3l34.2-7.4S87 22 86.9 21c-.1-.7-.6-1.1-1.1-1.1-.5 0-.9-.1-.8-.1z" fill="#5E8E3E"/>
      <path d="M47.4 35.2l-4.8 14.4s-4.2-2.2-9.4-2.2c-7.6 0-8 4.8-8 6 0 6.5 17 9 17 24.3 0 12-7.6 19.8-17.9 19.8-12.3 0-18.6-7.7-18.6-7.7l3.3-10.9s6.5 5.6 12 5.6c3.6 0 5.1-2.8 5.1-4.9 0-8.5-14-8.9-14-22.9C12.1 43.3 22 30 38.5 30c6.4 0 9.6 1.8 9.6 1.8l-.7 3.4z" fill="#fff"/>
    </svg>
  ),
  quickbooks: (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <circle cx="50" cy="50" r="50" fill="#2CA01C"/>
      <path d="M30 35c-5.5 0-10 4.5-10 10v10c0 5.5 4.5 10 10 10h5v-7h-5c-1.7 0-3-1.3-3-3V45c0-1.7 1.3-3 3-3h5V35h-5zm40 0v7h5c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3h-5v7h5c5.5 0 10-4.5 10-10V45c0-5.5-4.5-10-10-10h-5zM45 40v20h10V40H45z" fill="#fff"/>
    </svg>
  ),
  xero: (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <circle cx="50" cy="50" r="50" fill="#13B5EA"/>
      <path d="M35 35l15 15-15 15M65 35L50 50l15 15" stroke="#fff" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </svg>
  ),
  plaid: (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <rect width="100" height="100" fill="#111111"/>
      <path d="M25 20h15v15H25zm17.5 0H58v15H42.5zm17.5 0h15v15H60zM25 37.5h15v15H25zm17.5 0H58v15H42.5zM25 55h15v15H25zm35 0h15v15H60zM42.5 72.5H58v7.5H42.5zm17.5 0h15v7.5H60z" fill="#fff"/>
    </svg>
  ),
  docusign: (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <rect width="100" height="100" rx="10" fill="#FFC829"/>
      <path d="M25 65l20-30 15 15 15-20" stroke="#1A1A1A" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </svg>
  ),
  webflow: (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <rect width="100" height="100" rx="10" fill="#4353FF"/>
      <path d="M75 35c-5 15-10 30-15 30s-10-15-15-30c0 0 0 30-15 30V35c5 0 10 15 15 15s10-15 15-15v30c5 0 10-15 15-30z" fill="#fff"/>
    </svg>
  ),
  vercel: (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <rect width="100" height="100" fill="#000"/>
      <path d="M50 20L80 70H20L50 20z" fill="#fff"/>
    </svg>
  ),
  mysql: (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <path d="M50 5C25.1 5 5 25.1 5 50s20.1 45 45 45 45-20.1 45-45S74.9 5 50 5z" fill="#00758F"/>
      <path d="M72 72c-2.3 0-4.1-.6-5.4-1.8-1.3-1.2-2.2-2.9-2.6-5.2h-.1c-.6 2.3-1.7 4.1-3.2 5.3-1.5 1.2-3.5 1.8-5.9 1.8-3.3 0-5.8-1-7.6-3-1.8-2-2.7-4.8-2.7-8.4 0-3.7 1.1-6.7 3.4-8.8 2.3-2.1 5.4-3.2 9.5-3.2h5.8v-3c0-2.3-.5-4-1.6-5.2-1.1-1.2-2.8-1.7-5.1-1.7-1.8 0-3.8.3-5.8.9-2.1.6-3.8 1.3-5.3 2.2l-2.6-5.4c1.8-1.2 4-2.1 6.4-2.8 2.5-.7 4.9-1 7.3-1 4.5 0 7.9 1.1 10.2 3.2 2.3 2.1 3.5 5.3 3.5 9.5v10.9c0 1.9.3 3.3.8 4.1.5.8 1.4 1.2 2.7 1.2.8 0 1.6-.1 2.4-.3v5.5c-.9.4-1.9.6-2.9.8-1.1.2-2.1.3-3.2.4zm-18-8.5c1.5 0 2.9-.5 4-1.4 1.1-.9 1.9-2.2 2.3-3.7v-4h-5c-4.4 0-6.6 1.9-6.6 5.6 0 1.2.4 2.1 1.1 2.8.8.5 2.1.7 4.2.7zM35 32L25 60l-5-15-5 15-10-28h7l5 15 5-15h6z" fill="#F29111"/>
    </svg>
  ),
  mongodb: (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <path d="M50 0C22.4 0 0 22.4 0 50s22.4 50 50 50 50-22.4 50-50S77.6 0 50 0z" fill="#13AA52"/>
      <path d="M52.4 77.8c-.8-.2-1.3-.5-1.8-.9V63.6c5.6-2.3 9.4-8.8 9.4-16 0-5.4-3.2-11.8-6.3-16.3-1.7-2.5-3.5-4.7-3.6-4.8l-.1-.2-.1.2c-.1.1-1.9 2.3-3.6 4.8-3.1 4.5-6.3 10.9-6.3 16.3 0 7.2 3.8 13.7 9.4 16v13.3c-.5.4-1 .7-1.8.9l-1.8.4V81h8v-3l-1.4-.2z" fill="#fff"/>
    </svg>
  ),
  elasticsearch: (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <rect width="100" height="100" rx="10" fill="#005571"/>
      <circle cx="55" cy="45" r="20" fill="#FEC514" stroke="#343741" strokeWidth="3"/>
      <rect x="20" y="42" width="25" height="6" fill="#00BFB3"/>
      <rect x="20" y="52" width="35" height="6" fill="#F04E98"/>
      <rect x="20" y="32" width="30" height="6" fill="#1BA9F5"/>
    </svg>
  ),
  redis: (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <path d="M95 53.5c0 5.7-20.1 10.4-45 10.4S5 59.2 5 53.5 25.1 43.1 50 43.1s45 4.7 45 10.4z" fill="#912626"/>
      <path d="M50 53.5c24.9 0 45-4.7 45-10.4 0-5.7-20.1-10.4-45-10.4S5 37.4 5 43.1c0 5.7 20.1 10.4 45 10.4z" fill="#C6302B"/>
      <ellipse cx="50" cy="33" rx="20" ry="8" fill="#912626"/>
      <ellipse cx="50" cy="30" rx="20" ry="8" fill="#C6302B"/>
      <path d="M40 28l10 5 10-5-10-5-10 5z" fill="#fff"/>
      <ellipse cx="68" cy="38" rx="8" ry="4" fill="#FFF"/>
    </svg>
  ),
  kafka: (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <circle cx="50" cy="50" r="50" fill="#231F20"/>
      <circle cx="50" cy="30" r="8" fill="#fff"/>
      <circle cx="30" cy="55" r="8" fill="#fff"/>
      <circle cx="70" cy="55" r="8" fill="#fff"/>
      <circle cx="50" cy="75" r="6" fill="#fff"/>
      <path d="M50 38v12M38 52l8-5M62 52l-8-5M50 63v6" stroke="#fff" strokeWidth="3"/>
    </svg>
  ),
  sap: (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <rect width="100" height="100" fill="#0070C0"/>
      <path d="M20 60V40h10c6 0 10 3 10 10s-4 10-10 10H20zm10-6c2.5 0 4-1.5 4-4s-1.5-4-4-4h-4v8h4zM55 60l-3-6h-4v6h-6V40h12c5 0 8 3 8 7 0 3-1.5 5-4 6l4 7h-7zm-7-12h5c1.5 0 2.5-1 2.5-2.5S54.5 43 53 43h-5v5zM68 40h7l9 20h-7l-1.5-4h-8l-1.5 4h-7l9-20zm3.5 6l-2.5 6h5l-2.5-6z" fill="#fff"/>
    </svg>
  ),
  oracle: (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <rect width="100" height="100" fill="#C74634"/>
      <path d="M25 35c-8.3 0-15 6.7-15 15s6.7 15 15 15h50c8.3 0 15-6.7 15-15s-6.7-15-15-15H25zm0 6h50c5 0 9 4 9 9s-4 9-9 9H25c-5 0-9-4-9-9s4-9 9-9z" fill="#fff"/>
    </svg>
  ),
}

// All 70+ integrations data
const integrations = [
  // CRM & Sales (10)
  { name: "Salesforce", logo: logos.salesforce, category: "crm" },
  { name: "HubSpot", logo: logos.hubspot, category: "crm" },
  { name: "Pipedrive", logo: logos.pipedrive, category: "crm" },
  { name: "Microsoft Dynamics", logo: logos.dynamics, category: "crm" },
  { name: "Zoho CRM", logo: logos.zoom, category: "crm" },
  { name: "Freshsales", logo: logos.freshdesk, category: "crm" },
  { name: "Close", logo: logos.intercom, category: "crm" },
  { name: "Copper", logo: logos.salesforce, category: "crm" },
  { name: "Monday Sales", logo: logos.monday, category: "crm" },
  { name: "Insightly", logo: logos.hubspot, category: "crm" },

  // Customer Success (5)
  { name: "Gainsight", logo: logos.gainsight, category: "success" },
  { name: "Totango", logo: logos.totango, category: "success" },
  { name: "ChurnZero", logo: logos.intercom, category: "success" },
  { name: "Planhat", logo: logos.gainsight, category: "success" },
  { name: "Vitally", logo: logos.totango, category: "success" },

  // Support & Ticketing (8)
  { name: "Zendesk", logo: logos.zendesk, category: "support" },
  { name: "Intercom", logo: logos.intercom, category: "support" },
  { name: "Freshdesk", logo: logos.freshdesk, category: "support" },
  { name: "Jira Service", logo: logos.jira, category: "support" },
  { name: "Help Scout", logo: logos.intercom, category: "support" },
  { name: "Front", logo: logos.slack, category: "support" },
  { name: "Crisp", logo: logos.intercom, category: "support" },
  { name: "Kustomer", logo: logos.zendesk, category: "support" },

  // Communication (6)
  { name: "Slack", logo: logos.slack, category: "communication" },
  { name: "Microsoft Teams", logo: logos.teams, category: "communication" },
  { name: "Discord", logo: logos.discord, category: "communication" },
  { name: "Zoom", logo: logos.zoom, category: "communication" },
  { name: "Google Meet", logo: logos.google, category: "communication" },
  { name: "Gong", logo: logos.gong, category: "communication" },

  // Project Management (8)
  { name: "Jira", logo: logos.jira, category: "project" },
  { name: "Linear", logo: logos.linear, category: "project" },
  { name: "Asana", logo: logos.asana, category: "project" },
  { name: "Monday.com", logo: logos.monday, category: "project" },
  { name: "Notion", logo: logos.notion, category: "project" },
  { name: "ClickUp", logo: logos.clickup, category: "project" },
  { name: "Trello", logo: logos.trello, category: "project" },
  { name: "Basecamp", logo: logos.asana, category: "project" },

  // Developer Tools (6)
  { name: "GitHub", logo: logos.github, category: "dev" },
  { name: "GitLab", logo: logos.github, category: "dev" },
  { name: "Bitbucket", logo: logos.jira, category: "dev" },
  { name: "Confluence", logo: logos.confluence, category: "dev" },
  { name: "Vercel", logo: logos.vercel, category: "dev" },
  { name: "PagerDuty", logo: logos.pagerduty, category: "dev" },

  // Analytics & BI (7)
  { name: "Mixpanel", logo: logos.mixpanel, category: "analytics" },
  { name: "Segment", logo: logos.segment, category: "analytics" },
  { name: "Amplitude", logo: logos.amplitude, category: "analytics" },
  { name: "Tableau", logo: logos.tableau, category: "analytics" },
  { name: "Looker", logo: logos.looker, category: "analytics" },
  { name: "Google Analytics", logo: logos.google, category: "analytics" },
  { name: "Datadog", logo: logos.datadog, category: "analytics" },

  // Billing & Finance (8)
  { name: "Stripe", logo: logos.stripe, category: "billing" },
  { name: "Chargebee", logo: logos.chargebee, category: "billing" },
  { name: "Zuora", logo: logos.zuora, category: "billing" },
  { name: "NetSuite", logo: logos.netsuite, category: "billing" },
  { name: "QuickBooks", logo: logos.quickbooks, category: "billing" },
  { name: "Xero", logo: logos.xero, category: "billing" },
  { name: "Plaid", logo: logos.plaid, category: "billing" },
  { name: "Recurly", logo: logos.chargebee, category: "billing" },

  // Data Warehouses (6)
  { name: "Snowflake", logo: logos.snowflake, category: "data" },
  { name: "BigQuery", logo: logos.bigquery, category: "data" },
  { name: "Redshift", logo: logos.redshift, category: "data" },
  { name: "PostgreSQL", logo: logos.postgresql, category: "data" },
  { name: "MySQL", logo: logos.mysql, category: "data" },
  { name: "MongoDB", logo: logos.mongodb, category: "data" },

  // Marketing (6)
  { name: "Mailchimp", logo: logos.mailchimp, category: "marketing" },
  { name: "Marketo", logo: logos.marketo, category: "marketing" },
  { name: "HubSpot Marketing", logo: logos.hubspot, category: "marketing" },
  { name: "Sendgrid", logo: logos.sendgrid, category: "marketing" },
  { name: "Klaviyo", logo: logos.mailchimp, category: "marketing" },
  { name: "Braze", logo: logos.marketo, category: "marketing" },

  // Design & Productivity (6)
  { name: "Figma", logo: logos.figma, category: "design" },
  { name: "Airtable", logo: logos.airtable, category: "design" },
  { name: "Dropbox", logo: logos.dropbox, category: "design" },
  { name: "Box", logo: logos.box, category: "design" },
  { name: "Google Workspace", logo: logos.google, category: "design" },
  { name: "Microsoft 365", logo: logos.microsoft, category: "design" },

  // Identity & Auth (4)
  { name: "Okta", logo: logos.okta, category: "auth" },
  { name: "Auth0", logo: logos.auth0, category: "auth" },
  { name: "OneLogin", logo: logos.okta, category: "auth" },
  { name: "Azure AD", logo: logos.microsoft, category: "auth" },

  // Other (6)
  { name: "Shopify", logo: logos.shopify, category: "ecommerce" },
  { name: "Webflow", logo: logos.webflow, category: "ecommerce" },
  { name: "DocuSign", logo: logos.docusign, category: "other" },
  { name: "Calendly", logo: logos.calendly, category: "other" },
  { name: "Twilio", logo: logos.twilio, category: "other" },
  { name: "AWS", logo: logos.aws, category: "other" },
]

export function IntegrationsLogoSection() {
  // First row - 12 items
  const row1 = integrations.slice(0, 12)
  // Second row - 12 items  
  const row2 = integrations.slice(12, 24)
  // Third row - 12 items
  const row3 = integrations.slice(24, 36)

  return (
    <section className="py-32 px-6 relative overflow-hidden">
      {/* Nexify-style background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg-main via-bg-secondary/50 to-bg-main pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-radial from-gold/5 via-transparent to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/20 rounded-full px-5 py-2.5 mb-8 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-gold"></span>
            </span>
            <span className="text-gold text-sm font-medium tracking-wide">Integrations</span>
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            Relevant Tools for
            <br />
            <span className="bg-gradient-to-r from-gold via-gold-light to-gold bg-clip-text text-transparent">
              Integration
            </span>
          </h2>
          
          <p className="text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
            Connect your entire stack with 70+ pre-built connectors. Your data flows seamlessly into the Spine.
          </p>
        </motion.div>

        {/* Infinite scroll logo rows */}
        <div className="space-y-6">
          {/* Row 1 - Scroll Left */}
          <div className="relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-bg-main to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-bg-main to-transparent z-10 pointer-events-none" />
            
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="flex gap-6"
            >
              {[...row1, ...row1].map((integration, i) => (
                <div
                  key={`row1-${i}`}
                  className="flex-shrink-0 w-48 h-24 glass-card rounded-2xl p-6 flex items-center justify-center gap-4 group hover:border-gold/30 transition-all duration-300 hover:bg-bg-elevated/80"
                >
                  <div className="w-10 h-10 flex-shrink-0 opacity-80 group-hover:opacity-100 transition-opacity">
                    {integration.logo}
                  </div>
                  <span className="text-sm font-medium text-text-secondary group-hover:text-text-primary transition-colors truncate">
                    {integration.name}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Row 2 - Scroll Right */}
          <div className="relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-bg-main to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-bg-main to-transparent z-10 pointer-events-none" />
            
            <motion.div
              animate={{ x: ["-50%", "0%"] }}
              transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
              className="flex gap-6"
            >
              {[...row2, ...row2].map((integration, i) => (
                <div
                  key={`row2-${i}`}
                  className="flex-shrink-0 w-48 h-24 glass-card rounded-2xl p-6 flex items-center justify-center gap-4 group hover:border-gold/30 transition-all duration-300 hover:bg-bg-elevated/80"
                >
                  <div className="w-10 h-10 flex-shrink-0 opacity-80 group-hover:opacity-100 transition-opacity">
                    {integration.logo}
                  </div>
                  <span className="text-sm font-medium text-text-secondary group-hover:text-text-primary transition-colors truncate">
                    {integration.name}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Row 3 - Scroll Left (slower) */}
          <div className="relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-bg-main to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-bg-main to-transparent z-10 pointer-events-none" />
            
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
              className="flex gap-6"
            >
              {[...row3, ...row3].map((integration, i) => (
                <div
                  key={`row3-${i}`}
                  className="flex-shrink-0 w-48 h-24 glass-card rounded-2xl p-6 flex items-center justify-center gap-4 group hover:border-gold/30 transition-all duration-300 hover:bg-bg-elevated/80"
                >
                  <div className="w-10 h-10 flex-shrink-0 opacity-80 group-hover:opacity-100 transition-opacity">
                    {integration.logo}
                  </div>
                  <span className="text-sm font-medium text-text-secondary group-hover:text-text-primary transition-colors truncate">
                    {integration.name}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-8 mt-20"
        >
          <div className="glass-card rounded-2xl px-8 py-6 text-center min-w-[180px] hover:border-gold/30 transition-all">
            <div className="text-4xl font-bold text-gold mb-2">70+</div>
            <div className="text-sm text-text-secondary">Pre-built Connectors</div>
          </div>
          <div className="glass-card rounded-2xl px-8 py-6 text-center min-w-[180px] hover:border-blue-500/30 transition-all">
            <div className="text-4xl font-bold text-blue-400 mb-2">1000+</div>
            <div className="text-sm text-text-secondary">Data Sources</div>
          </div>
          <div className="glass-card rounded-2xl px-8 py-6 text-center min-w-[180px] hover:border-purple-500/30 transition-all">
            <div className="text-4xl font-bold text-purple-400 mb-2">5min</div>
            <div className="text-sm text-text-secondary">Average Setup</div>
          </div>
          <div className="glass-card rounded-2xl px-8 py-6 text-center min-w-[180px] hover:border-green-500/30 transition-all">
            <div className="text-4xl font-bold text-green-400 mb-2">99.9%</div>
            <div className="text-sm text-text-secondary">Uptime SLA</div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a
            href="/integrations"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-gold to-gold-light text-bg-main px-8 py-4 rounded-xl font-semibold text-lg transition-all shadow-[0_0_30px_rgba(212,175,55,0.3)] hover:shadow-[0_0_50px_rgba(212,175,55,0.4)] transform hover:scale-105"
          >
            View All Integrations
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
