import { HStack } from "@/components/HStack";
import { VStack } from "@/components/VStack";
import { KeyboardAvoidingView, ScrollView } from "react-native";
import { Text } from "@/components/Text";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Input } from "@/components/Input";
import { useState } from "react";
import { Button } from "@/components/Button";
import { Divider } from "@/components/Divider";
// import { ScrollView } from "react-native-gesture-handler";

export default function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [authMode, setAuthMode] = useState<"login" | "register">("login")

    function toggleAuthMode(){
        {authMode === "login" ? "register" : "login"}
    }
    return (
        <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
            <ScrollView contentContainerStyle={{ flex: 1 }}>
                <VStack flex={1} justifyContent="center" alignItems="center" gap={40} p={40}>
                    <HStack gap={40}>
                        <Text fontSize={20} bold mb={20}>
                            Ticket Booking
                        </Text>
                        <TabBarIcon name="ticket" size={30} />
                    </HStack>
                    <VStack w={"100%"} gap={30}>
                        <VStack gap={5}>
                            <Text ml={10} fontSize={14} color="blue">
                                Email
                            </Text>
                            <Input value={email} onChangeText={setEmail} placeholder="Please enter email" placeholderTextColor="gray"
                                autoCapitalize="none"
                                autoCorrect={false}
                                h={48} p={14}
                            />
                        </VStack>
                        {/* Password */}
                        <VStack gap={5}>
                            <Text ml={10} fontSize={14} color="blue">
                                Password
                            </Text>
                            <Input value={password} onChangeText={setPassword} placeholder="Please enter password" placeholderTextColor="gray"
                                autoCapitalize="none"
                                autoCorrect={false}
                                h={48} p={14} secureTextEntry
                            />
                        </VStack>
                        {/* Botton */}
                        <Button isLoading={false} //TODO: Finish after respone
                            onPress={() => { }}
                        >
                            {authMode === "login" ? "Login" : "Register"}
                        </Button>
                    </VStack>
                    <Divider w={"90%"} />
                    <Text onPress={toggleAuthMode} fontSize={15}>
                        {authMode === "login" ? "Register an account" : "Login into account"}
                    </Text>
                </VStack>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}