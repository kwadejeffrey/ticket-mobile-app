import { PropsWithChildren } from "react";
import { View, ViewProps } from "react-native";
import { defaultShortcuts, ShortcutProps } from "@/styles/shortcuts";

export interface StackProps extends PropsWithChildren, ShortcutProps, ViewProps {
    flex?: number,
    direction?: "row" | "column",
    gap?: number,
    alignItems?: "flex-start" | "flex-end" | "center" | "stretch",
    justify?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly",
    justifyContent?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly",

}

export function Stack({
    flex,
    children,
    direction,
    gap,
    alignItems,
    justify,
    justifyContent,
    style,
    ...restProps
}: StackProps) {
    return (
        // <View
        //     flex={flex}
        //     direction={direction}
        //     gap={gap}
        //     alignItems={alignItems}
        //     justify={justify}
        //     style={style}
        //     {...restProps}
        // >
        //     {children}
        // </View>
        <View style={[defaultShortcuts(restProps),
            {flex,
            flexDirection: direction,
            gap,
            alignItems,
            justifyContent,}, style
        ]} {...restProps}>
            {children}
        </View>
    );
}