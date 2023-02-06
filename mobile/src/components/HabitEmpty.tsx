import { useNavigation } from "@react-navigation/native";
import { useCallback } from "react";
import { Text } from "react-native";

export function HabitsEmpty() {
    const { navigate } = useNavigation();
    return (
        <Text className="text-zinc-400 text-base">

            Você ainda não está monitorando nenhum hábito. {' '}

            <Text
            className="text-cyan-400 text-base underline active:text-cyan-500"
            onPress={()=> navigate('new')}
            >
                Comece criando um hábito.
            </Text>

        </Text>
    );
}