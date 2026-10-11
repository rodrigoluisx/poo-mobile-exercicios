import { useState } from 'react';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function Multiplicacao() {
  const [valor1, setValor1] = useState('');
  const [valor2, setValor2] = useState('');
  const [valor3, setValor3] = useState('');
  function mostrarMultiplicacao() {
    if (![valor1, valor2, valor3].every(v => v.trim())) return Alert.alert('Atenção', 'Preencha os três valores.');
    const v1 = Number(valor1.replace(',', '.'));
    const v2 = Number(valor2.replace(',', '.'));
    const v3 = Number(valor3.replace(',', '.'));
    if (![v1, v2, v3].every(Number.isFinite)) return Alert.alert('Atenção', 'Digite três valores válidos.');
    Alert.alert('Multiplicação', `Valor 1: ${v1}\nValor 2: ${v2}\nValor 3: ${v3}\n\n${v1} × ${v2} × ${v3} = ${v1 * v2 * v3}`);
  }
  return <View style={styles.card}>
    <Text style={styles.titulo}>3. Multiplicação de valores</Text>
    <TextInput style={styles.input} placeholder="Valor 1" value={valor1} onChangeText={setValor1} keyboardType="decimal-pad" />
    <TextInput style={styles.input} placeholder="Valor 2" value={valor2} onChangeText={setValor2} keyboardType="decimal-pad" />
    <TextInput style={styles.input} placeholder="Valor 3" value={valor3} onChangeText={setValor3} keyboardType="decimal-pad" />
    <TouchableOpacity style={styles.botao} onPress={mostrarMultiplicacao}><Text style={styles.textoBotao}>Multiplicar valores</Text></TouchableOpacity>
  </View>;
}
const styles = StyleSheet.create({
  card: { backgroundColor: '#fff', padding: 16, borderRadius: 12, marginBottom: 16 },
  titulo: { fontSize: 18, fontWeight: 'bold', marginBottom: 12, color: '#111827' },
  input: { borderWidth: 1, borderColor: '#d1d5db', borderRadius: 8, padding: 11, marginBottom: 10 },
  botao: { backgroundColor: '#2563eb', padding: 12, borderRadius: 8, alignItems: 'center' },
  textoBotao: { color: '#fff', fontWeight: 'bold' },
});
