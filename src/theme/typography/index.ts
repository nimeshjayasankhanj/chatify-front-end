declare module "@mui/material/styles" {
  interface TypographyVariants {
    gridheadder: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    gridheadder?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    gridheadder: true;
  }
}

export const typography = {
  gridheadder: {
    fontSize: "24px",
    padding: "4px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontWeight: "600",
    lineHeight: "32.02px",
    fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
  },
};
