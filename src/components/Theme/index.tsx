import { useColorMode, useColorModeValue } from "@chakra-ui/react";
import {
  WeatherMoon,
  WeatherSunny,
} from "@emotion-icons/fluentui-system-regular";
import { IconButton, IconButtonProps } from "../IconButton";
import { FC } from "react";

type ThemeProps = Omit<IconButtonProps, "aria-label">;

export const Theme: FC<ThemeProps> = () => {
  const { toggleColorMode } = useColorMode(),
    { colorMode } = useColorMode(),
    SwitchIcon = useColorModeValue(WeatherMoon, WeatherSunny);

  const cyan = {
    "300-600": useColorModeValue("cyan.300", "cyan.600"),
  };

  return (
    <IconButton
      tooltipProps={{
        placement: "right",
        label: `Change theme : ${colorMode === "light" ? "dark" : "light"}`,
        children: null,
      }}
      as={SwitchIcon}
      iconProps={{
        w: 6,
        h: 6,
      }}
      buttonProps={{
        variant: "none",
        _hover: {
          bgColor: cyan["300-600"],
        },
        p: 0,
        onClick: toggleColorMode,
      }}
    />
  );
};