"use client";

import type { themeAccentColorsOrdered } from "frosted-ui";
import { Button, useThemeContext } from "frosted-ui";
import { useCallback } from "react";

export function ThemeSwitcherButton({
  color,
}: {
  color: (typeof themeAccentColorsOrdered)[number];
}) {
  const { onAccentColorChange } = useThemeContext();

  const onClick = useCallback(
    () => onAccentColorChange(color),
    [color, onAccentColorChange]
  );

  return (
    <Button onClick={onClick} size="1" variant="classic" color={color}>
      {color[0].toUpperCase() + color.slice(1)}
    </Button>
  );
}
