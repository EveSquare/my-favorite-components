import React, { createContext, useContext, useState } from "react";
import { Box, Flex } from "@chakra-ui/react";
import MotionBox from "@/components/MotionBox";
import MotionText from "@/components/MotionText";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

type MenuContextType = {
  activeItem: string | null;
  setActiveItem: (item: string) => void;
};

const MenuContext = createContext<MenuContextType>({
  activeItem: null,
  setActiveItem: () => {},
});

const useMenu = () => useContext(MenuContext);

type Props = {
  children: React.ReactNode;
};

export const Menu: React.FC<Props> = ({ children }) => {
  const [activeItem, setActiveItem] = useState<string>("");

  return (
    <MenuContext.Provider value={{ activeItem, setActiveItem }}>
      <Flex
        as="nav"
        display="inline-flex"
        p={8}
        gap={8}
        onMouseLeave={() => setActiveItem("")}
      >
        {children}
      </Flex>
    </MenuContext.Provider>
  );
};

type MenuItemProps = {
  item: string;
  children: React.ReactNode;
};

export const MenuItem: React.FC<MenuItemProps> = ({ item, children }) => {
  const menu = useMenu();
  return (
    <Box
      pos="relative"
      color="white"
      onMouseEnter={() => {
        menu.setActiveItem(item);
      }}
    >
      <MotionText
        color="rgba(0,0,0, 0.5)"
        animate={{
          color:
            menu.activeItem === item ? "rgba(0,0,0, 1)" : "rgba(0,0,0, 0.5)",
        }}
        transition={{ duration: 0.25 }}
        cursor="pointer"
      >
        {item}
      </MotionText>
      {menu?.activeItem !== null && (
        <MotionBox
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={transition}
        >
          {menu.activeItem === item && (
            <Box
              pos="absolute"
              top="calc(100% + 1rem)"
              left="50%"
              transform="translateX(-50%)"
            >
              <MotionBox
                layoutId="active"
                bg="gray.200"
                rounded="2xl"
                overflow="hidden"
                borderWidth="1px"
                borderColor="whiteAlpha.200"
                transition={transition}
              >
                <MotionBox layout w="max-content" h="100%" p={4}>
                  {children}
                </MotionBox>
              </MotionBox>
            </Box>
          )}
        </MotionBox>
      )}
    </Box>
  );
};
