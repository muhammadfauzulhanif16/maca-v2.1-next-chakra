import {
  GridItem,
  Heading,
  Text,
  Box,
  Badge,
  useColorModeValue,
  Spinner,
  Grid,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { FC } from "react";
import { IconButton } from "../IconButton";
import { ArrowClockwise } from "@emotion-icons/fluentui-system-regular";

interface PageHeaderProps {
  pageHeaderTitle: string;
  description: string;
  buttonText: string;
  buttonIcon: any;
  amount?: number;
  isLoading?: boolean;
  buttonType?: any;
}

export const PageHeader: FC<PageHeaderProps> = ({
  pageHeaderTitle,
  description,
  buttonText,
  buttonIcon,
  amount = 0,
  isLoading,
  buttonType,
}): JSX.Element => {
  const router = useRouter(),
    cyan = {
      "300-600": useColorModeValue("cyan.300", "cyan.600"),
      "200-800": useColorModeValue("cyan.200", "cyan.800"),
    },
    gray = {
      "400-500": useColorModeValue("gray.400", "gray.500"),
    };

  return (
    <GridItem
      display="flex"
      justifyContent="space-between"
      gridTemplateColumns="repeat(1, 1fr)"
    >
      <Box>
        <Box pos="relative">
          <Heading fontWeight={500}>{pageHeaderTitle}</Heading>

          {pageHeaderTitle !== "Dashboard" ? (
            <Badge
              colorScheme="cyan"
              pos="absolute"
              top={0}
              right={0}
              fontSize={16}
              rounded={4}
            >
              {isLoading ? <Spinner size="xs" /> : amount}
            </Badge>
          ) : null}
        </Box>

        <Text color={gray["400-500"]}>{description}</Text>
      </Box>

      <IconButton
        as={buttonIcon}
        isLoading={isLoading}
        text={buttonText}
        buttonProps={{
          type: buttonType,
          disabled: isLoading,
          bgColor: cyan["300-600"],
          _hover: {
            bgColor: cyan["200-800"],
          },
          w: 40,
          onClick: () =>
            router.push(
              buttonText === "Add" ? `/${buttonText.toLowerCase()}` : ""
            ),
        }}
        textProps={{
          ml: 4,
        }}
        iconProps={{
          w: 6,
          h: 6,
        }}
      />
    </GridItem>
  );
};
