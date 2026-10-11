import { useState } from 'react';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function DadosAluno() {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [turma, setTurma] = useState('');
  const [nota1, setNota1] = useState('');
  const [nota2, setNota2] = useState('');
  function mostrarDados() {
    if (![nome, idade, turma, nota1, nota2].every(v => v.trim())) return Alert.alert('Atenção', 'Preencha todos os campos do aluno.');
    const n1 = Number(nota1.replace(',', '.'));
    const n2 = Number(nota2.replace(',', '.'));
    if (!Number.isFinite(n1) || !Number.isFinite(n2)) return Alert.alert('Atenção', 'Digite notas válidas.');
    Alert.alert('Dados do aluno', `Nome: ${nome}\nIdade: ${idade}\nTurma: ${turma}\nNota 1: ${n1}\nNota 2: ${n2}\nMédia: ${((n1 + n2) / 2).toFixed(1)}`);
  }
  return <View style={styles.card}>
    <Text style={styles.titulo}>2. Dados do aluno</Text>
    <TextInput style={styles.input} placeholder="Nome do aluno" value={nome} onChangeText={setNome} />
    <TextInput style={styles.input} placeholder="Idade" value={idade} onChangeText={setIdade} keyboardType="numeric" />
    <TextInput style={styles.input} placeholder="Turma" value={turma} onChangeText={setTurma} />
    <TextInput style={styles.input} placeholder="Nota 1" value={nota1} onChangeText={setNota1} keyboardType="decimal-pad" />
    <TextInput style={styles.input} placeholder="Nota 2" value={nota2} onChangeText={setNota2} keyboardType="decimal-pad" />
    <TouchableOpacity style={styles.botao} onPress={mostrarDados}><Text style={styles.textoBotao}>Mostrar dados e média</Text></TouchableOpacity>
  </View>;
}
const styles = StyleSheet.create({
  card: { backgroundColor: '#fff', padding: 16, borderRadius: 12, marginBottom: 16 },
  titulo: { fontSize: 18, fontWeight: 'bold', marginBottom: 12, color: '#111827' },
  input: { borderWidth: 1, borderColor: '#d1d5db', borderRadius: 8, padding: 11, marginBottom: 10 },
  botao: { backgroundColor: '#2563eb', padding: 12, borderRadius: 8, alignItems: 'center' },
  textoBotao: { color: '#fff', fontWeight: 'bold' },
});
