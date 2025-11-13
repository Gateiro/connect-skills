
import { useAuth } from '@/contexts/authContext';
import { supabase } from '@/lib/supabase';
import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import {
    ActivityIndicator,
    Alert,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';

export default function ProfileScreen() {
  const { user } = useAuth(); 


  const [nome, setNome] = useState(user?.user_metadata?.full_name || '');
  const [email, setEmail] = useState(user?.email || '');
  const [novaSenha, setNovaSenha] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  // Estados para o SelectList
  const [selectedSkill, setSelectedSkill] = useState('');
  const data = [ 
    { key: '1', value: 'Programação' },
    { key: '2', value: 'Música' },
    { key: '3', value: 'Culinária' },
    { key: '4', value: 'Ciências Exatas' },
    { key: '5', value: 'Ciências Humanas' },
    { key: '6', value: 'Edição de imagem e vídeo' },
    { key: '7', value: 'Pintura e Desenho' },
    { key: '8', value: 'Manutenção de Computadores' },
  ];

  const handleSave = async () => {
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500)); 
    setLoading(false);
    Alert.alert("Sucesso!", "Perfil atualizado (simulado)."); 
  };
  
  
  const handleLogout = async () => {
    setLoading(true);
    await supabase.auth.signOut();
    
    setLoading(false);
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Cabeçalho */}
        <View style={styles.header}>
          <Text style={styles.title}>Seu Perfil</Text>
          <Text style={styles.subtitle}>Gerencie suas informações pessoais</Text>
        </View>

        {/* Formulário */}
        <View style={styles.form}>
          {/* Campo Nome */}
          <View style={styles.field}>
            <Text style={styles.label}>Nome</Text>
            <TextInput
              style={styles.input}
              placeholder="Seu nome completo" 
              value={nome}
              onChangeText={setNome}
            />
          </View>

          {/* Campo E-mail */}
          <View style={styles.field}>
            <Text style={styles.label}>E-mail</Text>
            <TextInput
              style={styles.input}
              placeholder="voce@exemplo.com"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address" 
              autoCapitalize="none"
            />
            <Text style={styles.helpText}>
              Alterar e-mail pode exigir confirmação.
            </Text>
          </View>

          {/* Campo Nova Senha */}
          <View style={styles.field}>
            <Text style={styles.label}>Nova Senha</Text>
            <View style={styles.passwordContainer}>
              <TextInput
                style={styles.passwordInput}
                placeholder="*********" 
                value={novaSenha}
                onChangeText={setNovaSenha}
                secureTextEntry={!showPassword}
              />
              <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.eyeIcon}>
                <Ionicons
                  name={showPassword ? 'eye-off-outline' : 'eye-outline'}
                  size={24}
                  color="#6B7280"
                />
              </TouchableOpacity>
            </View>
          </View>
          
          {/* Campo Habilidade (Dropdown) */}
          <View style={styles.field}>
            <Text style={styles.label}>O que deseja ensinar?</Text>
            <SelectList
              setSelected={setSelectedSkill}
              data={data}
              save="value"
              placeholder="Selecione uma habilidade"
              boxStyles={styles.selectListBox} 
              dropdownStyles={styles.selectListDropdown}
            />
          </View>
          
          {/* Botão Salvar */}
          <TouchableOpacity
            style={styles.button}
            onPress={handleSave}
            disabled={loading} 
          >
            {loading ? (
              <ActivityIndicator color="#FFF" /> 
            ) : (
              <Text style={styles.buttonText}>Salvar alterações</Text> // [cite: 1118]
            )}
          </TouchableOpacity>
          
          {/* Botão Logout */}
          <TouchableOpacity
            style={[styles.button, styles.logoutButton]}
            onPress={handleLogout}
            disabled={loading}
          >
            <Text style={styles.buttonText}>Sair (Logout)</Text>
          </TouchableOpacity>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F9FAFB', 
  },
  container: {
    flexGrow: 1,
    padding: 24, 
  },
  header: {
    marginBottom: 24,
  },
  title: {
    fontSize: 24, 
    fontWeight: '700', 
    color: '#111', 
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 16,
    color: '#6B7280',
  },
  form: {
    gap: 16,
  },
  field: {
    width: '100%',
  },
  label: {
    fontSize: 16,
    color: '#111',
    fontWeight: '600', 
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#FFF', 
    borderWidth: 1,
    borderColor: '#DDD', 
    borderRadius: 8, 
    padding: 12,
    fontSize: 16,
    width: '100%',
  },
  helpText: {
    fontSize: 12,
    color: '#6B7280', 
    marginTop: 4,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 8,
  },
  passwordInput: {
    flex: 1,
    padding: 12,
    fontSize: 16,
  },
  eyeIcon: {
    padding: 12,
  },
  selectListBox: {
    backgroundColor: '#FFF',
    borderColor: '#DDD',
    borderRadius: 8, 
  },
  selectListDropdown: {
    backgroundColor: '#FFF',
    borderColor: '#DDD',
  },
  button: {
    width: '100%', 
    backgroundColor: '#111',
    padding: 16,
    borderRadius: 10, 
    alignItems: 'center',
    marginTop: 16,
  },
  buttonText: {
    color: '#FFF', 
    fontSize: 16,
    fontWeight: 'bold',
  },
  logoutButton: {
    backgroundColor: '#B91C1C'
  }
});