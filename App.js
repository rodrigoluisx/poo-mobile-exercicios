import { ScrollView, StyleSheet, Text } from 'react-native';
import NomeSobrenome from './components/NomeSobrenome';
import DadosAluno from './components/DadosAluno';
import Multiplicacao from './components/Multiplicacao';

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>Exercícios - POO Mobile</Text>
      <NomeSobrenome />
      <DadosAluno />
      <Multiplicacao />
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: { flexGrow: 1, padding: 20, paddingTop: 55, paddingBottom: 40, backgroundColor: '#f3f4f6' },
  titulo: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 20, color: '#111827' },
});
