import { DimensionValue } from "react-native";

export interface ShortcutProps {
    w?: DimensionValue;
    h?: DimensionValue;
    gap?: number;

    ml?: number | "auto";
    mr?: number | "auto";
    mt?: number | "auto";
    mb?: number | "auto";
    mx?: number | "auto";
    my?: number | "auto";
    p?: number | "auto";
    pt?: number | "auto";
    pr?: number | "auto";
    pb?: number | "auto";
    pl?: number | "auto";
    px?: number | "auto";
    py?: number | "auto";
}

export const defaultShortcuts = (props: ShortcutProps) => ({
    padding: props.p ,
    paddingLeft: props.pl,
    paddingRight: props.pr,
    paddingTop: props.pt,
    paddingBottom: props.pb,
    marginLeft: props.ml,
    marginRight: props.mr,
    marginTop: props.mt,
    marginBottom: props.mb,
    marginHorizontal: props.mx, 
    marginVertical: props.my,

    width: props.w,
    height: props.h

})