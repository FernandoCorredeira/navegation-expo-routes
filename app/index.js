import { StyleSheet, Text, View, TextInput } from "react-native";
import style from "../style";
import { Link } from "expo-router";

export default function Page() {
  return ( 
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Cadastro</Text>
        <TextInput placeholder="Digite seu nome" ></TextInput>
        <Link href={'/cadastro'}>Cadastre-se aqui!</Link>
      </View>
    </View>
  );
}



