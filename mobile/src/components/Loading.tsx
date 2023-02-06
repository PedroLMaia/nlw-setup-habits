import { ActivityIndicator, View } from "react-native";

export function Loading() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#010203' }}>
            <ActivityIndicator color="#006064" />
        </View>
    )
}