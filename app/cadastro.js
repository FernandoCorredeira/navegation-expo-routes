import{ React, useState, useEffect} from "react";
import {View, Text, TextInput, TouchableOpacity, Pressable} from 'react-native';
import { Link } from "expo-router";
import styles from "../style";

export default function Cadastro(){
    return(
        <View style={styles.container}>
            <View style={styles.main}>
                <Text style={styles.subtitle}>Cadastro de Endereço</Text>
                <View style={styles.boxForm}>
                    <View style={styles.form}>
                        <Text styles={styles.textForm}>Digite seu cep:</Text>
                        <TextInput placeholder="00000-000" keyboardType="numeric" style={styles.input}></TextInput>
                    </View>
                    <View style={styles.form}>
                        <Text styles={styles.textForm}>Digite seu logradouro:</Text>
                        <TextInput placeholder="Digite aqui" keyboardType="default" style={styles.input}></TextInput>
                    </View>
                </View>
                <TouchableOpacity style={styles.btnCadastro}>
                    <Text style={styles.btnText}>Buscar Dados</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}