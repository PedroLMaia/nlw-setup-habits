import { ScrollView, View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { useState } from "react";
import { BackButton } from "../components/BackButton";
import { CheckBox } from "../components/CheckBox";
import { Feather } from '@expo/vector-icons';
import colors from "tailwindcss/colors";
import api from "../lib/axios";
import { useNavigation } from "@react-navigation/native";

const availableWeekDays = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-ferira', 'Sabado'];

export function New() {
    const { goBack } = useNavigation();
    const [title, setTitle] = useState('');
    const [weekDays, setWeekDays] = useState<number[]>([]);

    function handleToggleWeekDays(weekDayIndex: number) {
        if (weekDays.includes(weekDayIndex)) {
            setWeekDays(prevState => prevState.filter(weekDay => weekDay !== weekDayIndex));
        } else {
            setWeekDays(prevState => [...prevState, weekDayIndex])
        }
    }

    const functionCombined = () => {
        handleCreateNewHabit();
        goBack();
    }  

    async function handleCreateNewHabit() {
        try {
            if (!title.trim() || weekDays.length === 0) {
                return Alert.alert('Novo Hábito', 'Informe o nome do hábito e escolha os dias em que se repete.')
            }

            await api.post('/habits', { title, weekDays })

            setTitle('');
            setWeekDays([]);

            Alert.alert('Novo hábito', 'Hábito criado com sucesso!') 
        } catch (error) {
            console.log(error)
            Alert.alert('Ops', 'Nao foi possivel criar o novo hábito.')
        }
    }

    return (
        <View className="flex-1 bg-background px-8 pt-16">

            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 350 }}
            >
                <BackButton />

                <Text className="mt-6 text-white font-extrabold text-3xl">
                    Criar hábito
                </Text>

                <Text className="mt-6 text-white font-semibold text-base">
                    Qual o seu comprometimento?
                </Text>

                <TextInput
                    className="h-12 pl-4 rounded-lg mt-3 bg-zinc-900 text-white border-2 border-zinc-800 focus:border-cyan-600"
                    placeholder="Ex.: Exercícios, dormir bem, etc..."
                    placeholderTextColor={colors.zinc[400]}
                    onChangeText={setTitle}
                    value={title}
                />

                <Text className="font-semibold mt-4 mb-3 text-white text-base">
                    Qual a recorrência?
                </Text>

                {
                    availableWeekDays.map((weekDay, index) => (
                        <CheckBox
                            key={weekDay}
                            title={weekDay}
                            checked={weekDays.includes(index)}
                            onPress={() => handleToggleWeekDays(index)}
                        />

                    ))
                }

                <TouchableOpacity
                    className="w-full h-14 flex-row items-center justify-center bg-cyan-500 rounded-md mt-6"
                    activeOpacity={0.7}
                    onPress={functionCombined}
                >
                    <Feather
                        name="check"
                        size={20}
                        color={colors.white}
                    />

                    <Text className="font-semibold text-base text-white ml-2">
                        Confirmar
                    </Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}