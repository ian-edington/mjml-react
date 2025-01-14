/*
 * This file is generated. Don't edit it directly.
 * Modify `scripts/generate-mjml-react.ts` to make changes to these files
 */
import React from "react";

import {
  convertPropsToMjmlAttributes,
  Matrix,
  Pixel,
  Percentage,
  Ephemeral,
} from "../utils";

export interface IMjmlTextProps {
  /** MJML default value: left */
  align?: "left" | "right" | "center" | "justify";
  backgroundColor?: React.CSSProperties["backgroundColor"];
  /** MJML default value: #000000 */
  color?: React.CSSProperties["color"];
  containerBackgroundColor?: string;
  fontFamily?: string;
  fontSize?: Pixel;
  fontStyle?: string;
  fontWeight?: string;
  height?: Pixel | Percentage;
  letterSpacing?: Pixel | Ephemeral;
  lineHeight?: Pixel | Percentage;
  paddingBottom?: Pixel | Percentage;
  paddingLeft?: Pixel | Percentage;
  paddingRight?: Pixel | Percentage;
  paddingTop?: Pixel | Percentage;
  /** MJML default value: 10px 25px */
  padding?: Matrix<Pixel | Percentage>;
  textDecoration?: React.CSSProperties["textDecoration"];
  textTransform?: React.CSSProperties["textTransform"];
  verticalAlign?: React.CSSProperties["verticalAlign"];
  className?: string;
  cssClass?: string;
  mjmlClass?: string;
  children?: React.ReactNode;
  dangerouslySetInnerHTML?: { __html: string };
}

export function MjmlText({ children, ...props }: IMjmlTextProps): JSX.Element {
  return React.createElement(
    "mj-text",
    convertPropsToMjmlAttributes(props),
    children
  );
}
