import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function App() {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");

  function CalculadoraIMC() {
    const alt = altura / 100;
    const imc = peso / (alt * alt);

    if (imc < 18.6) {
      alert("Voçê está abaixo do peso! Seu IMC é: " + imc.toFixed(2));
    } else if (imc >= 18.6 && imc < 24.9) {
      alert("Peso ideal! Seu IMC é: " + imc.toFixed(2));
    } else if (imc >= 24.9 && imc < 34.9) {
      alert("Levemente acima do peso! Seu IMC é: " + imc.toFixed(2));
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora de IMC</Text>
      <TextInput
        style={styles.input}
        value={peso}
        onChangeText={(peso) => setPeso(peso)}
        placeholder="Peso (kg)"
        keyboardType="numeric"
        returnKeyType="done"
      />

      <TextInput
        style={styles.input}
        value={altura}
        onChangeText={(altura) => setAltura(altura)}
        placeholder="Altura (cm)"
        keyboardType="numeric"
        returnKeyType="done"
      />

      <TouchableOpacity style={styles.button} onPress={CalculadoraIMC}>
        <Text style={styles.buttonText}>Calcular</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ADD8E6",
    justifyContent: "center",
  },
  title: {
    textAlign: "center",
    marginTop: 70,
    fontSize: 30,
    color: "#050517",
    shadowColor: "#FFF",
  },
  input: {
    backgroundColor: "#F4E3B2",
    borderRadius: 10,
    margin: 15,
    padding: 15,
    color: "#000000",
    fontSize: 23,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    margin: 15,
    backgroundColor: "#41AEF4",
    padding: 10,
    borderRadius: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 25,
  },
});
