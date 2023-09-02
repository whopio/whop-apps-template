import preset from "@whop/frosted-ui/preset";

const frostedPreset = preset({
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
});

/** @type {import('tailwindcss').Config} */
export const presets = [frostedPreset];

export const plugins = [];
