import React from "react";
import { LinearGradient } from 'expo-linear-gradient';
import { View, Text, Image } from "react-native";

import { styles } from "./styles";
import { theme } from "../../global/styles/theme";

type Props = {
    urlImage: string;
}

export function Avatar({ urlImage }: Props) {
    const { primary , secondary30 } = theme.colors;
    return (
        <LinearGradient
            style={styles.container}
            colors={[primary, secondary30]}
        >
            <Image
                source={{ uri: urlImage }}
                style={styles.avatar}
            />
        </LinearGradient>
    )
}
