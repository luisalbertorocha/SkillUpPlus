import { StyleSheet } from "react-native";

export const colors = {
  background: "#111827",
  backgroundCard: "#1f2937",
  primary: "#3b82f6",
  primaryDark: "#2563eb",
  text: "#ffffff",
  textMuted: "#9ca3af",
  inputBackground: "#374151",
  border: "#4b5563",
  danger: "#ef4444",
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
};

export const radius = {
  sm: 6,
  md: 10,
  lg: 14,
};

export const globalStyles = StyleSheet.create({
  /** CONTAINERS GERAIS */
  screenContainer: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.xl,
  },

  centeredContainer: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: spacing.lg,
  },

  card: {
    width: "100%",
    backgroundColor: colors.backgroundCard,
    padding: spacing.lg,
    borderRadius: radius.lg,
    elevation: 5,
  },

  /** TEXTOS PADRÃO */
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.text,
    marginBottom: spacing.lg,
    textAlign: "center",
  },

  subtitle: {
    fontSize: 16,
    color: colors.textMuted,
    marginBottom: spacing.md,
    textAlign: "center",
  },

  text: {
    fontSize: 14,
    color: colors.text,
  },

  /** INPUT GENÉRICO */
  input: {
    width: "100%",
    backgroundColor: colors.inputBackground,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    borderRadius: radius.md,
    marginBottom: spacing.md,
    color: colors.text,
    fontSize: 16,
  },

  inputError: {
    borderWidth: 1,
    borderColor: colors.danger,
  },

  inputLabel: {
    fontSize: 14,
    color: colors.textMuted,
    marginBottom: spacing.xs,
  },

  /** BOTÃO PRIMÁRIO */
  button: {
    backgroundColor: colors.primary,
    paddingVertical: spacing.sm + 2,
    borderRadius: radius.md,
    alignItems: "center",
    justifyContent: "center",
    marginTop: spacing.sm,
  },

  buttonText: {
    color: colors.text,
    fontSize: 16,
    fontWeight: "600",
  },

  buttonSecondary: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: colors.border,
  },

  buttonSecondaryText: {
    color: colors.textMuted,
  },
});