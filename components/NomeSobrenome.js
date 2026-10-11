import { useState } from 'react';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function NomeSobrenome() {
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  function mostrarNome() {
    if (!nome.trim() || !sobrenome.trim()) return Alert.alert('Atenção', 'Preencha o nome e o sobrenome.');
    Alert.alert('Nome completo', `${nome.trim()} ${sobrenome.trim()}`);
  }
  return <View style={styles.card}>
    <Text style={styles.titulo}>1. Nome e sobrenome</Text>
    <TextInput style={styles.input} placeholder="Nome" value={nome} onChangeText={setNome} />
    <TextInput style={styles.input} placeholder="Sobrenome" value={sobrenome} onChangeText={setSobrenome} />
    <TouchableOpacity style={styles.botao} onPress={mostrarNome}><Text style={styles.textoBotao}>Mostrar nome</Text></TouchableOpacity>
  </View>;
}
const styles = StyleSheet.create({
  card: { backgroundColor: '#fff', padding: 16, borderRadius: 12, marginBottom: 16 },
  titulo: { fontSize: 18, fontWeight: 'bold', marginBottom: 12, color: '#111827' },
  input: { borderWidth: 1, borderColor: '#d1d5db', borderRadius: 8, padding: 11, marginBottom: 10 },
  botao: { backgroundColor: '#2563eb', padding: 12, borderRadius: 8, alignItems: 'center' },
  textoBotao: { color: '#fff', fontWeight: 'bold' },
});
