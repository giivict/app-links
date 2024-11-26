import { colors } from "@/styles/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flexDirection: "row",
        alignItems: "center",
        gap: 5,
    },
    primaryTittle: {
        color: colors.green[300],
        fontSize: 16,
        fontWeight: "600"
    },
    secondaryTittle:{
        color: colors.gray[400],
        fontSize: 16,

    },
})