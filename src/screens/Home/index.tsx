import { View, Text, TextInput, TouchableOpacity, ScrollView, FlatList, SafeAreaView } from 'react-native'
import { Participant } from '../../components/Participant'
import { styles } from './styles'
import React from 'react';


export function Home() {
  const participants = [
    
    { id: '202301', name: 'Ana',occupation:'Dev Junior', salary: 2500.00 },
    { id: '202302', name: 'Maria',occupation:'Dev Pleno', salary: 4500.00 },
    { id: '202303', name: 'Rosa',occupation:'Dev Senior', salary: 6500.00 },
    { id: '202304', name: 'Jose',occupation:'Dev Pleno', salary: 4500.00 },
    { id: '202305', name: 'Mateus',occupation:'Dev Junior', salary: 2500.00 },
    { id: '202306', name: 'Ricardo',occupation:'Dev Senior', salary: 6500.00 },
    { id: '202307', name: 'Márcio',occupation:'Dev Junior', salary: 2500.00 },
    
  ]
  
  function handleAddParticipant() {
    console.log('Você pressionou o botão Adicionar')
  }

  function handleRemoveParticipant() {
    console.log('Você pressionou o botão remover participante')
  }

  function totalSalaryJunior() {
    const total = participants
      .filter(part => part.occupation === "Dev Junior")
      .reduce((total, value) => total + value.salary, 0);
    
    return total;
  }
  function totalSalaryPleno() {
    const total = participants
      .filter(part => part.occupation === "Dev Pleno")
      .reduce((total, value) => total + value.salary, 0);
    
    return total;
  }
  function totalSalarySenior() {
    const total = participants
      .filter(part => part.occupation === "Dev Junior")
      .reduce((total, value) => total + value.salary, 0);
    
    return total;
  }
  
  function formatValues(value: number) {
    return (value)
      .toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      })
  }

  return (
    
    <View style={styles.container}>
      <Text style={styles.TitleName}>
        Ocupações - Salários
        
      </Text>
      <Text style={styles.eventDate}>
        Sexta-feira, 01 de Maio de 2023
      </Text>
         
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder='Nome do colaborador'
          placeholderTextColor='#6B6B6B'
          autoCapitalize='characters'
        />

        <TouchableOpacity
          style={styles.button}
          onPress={handleAddParticipant}        
        >
          <Text style={styles.buttonText}>
            +
          </Text>

          
        </TouchableOpacity>
        
      </View>
      <Text style={styles.Title}>
         TOTAIS DE SALÁRIOS
      </Text>

      <Text style={styles.itemText}>Total do Valor DEV JUNIOR: {formatValues(totalSalaryJunior())}</Text>
      <Text style={styles.itemText}>Total do Valor DEV PLENO: {formatValues(totalSalaryPleno())}</Text>
      <Text style={styles.itemText}>Total do Valor DEV SÊNIOR: {formatValues(totalSalarySenior())}</Text>
      <View>

      <Text style={styles.eventName}>
        Itens cadastrados
      </Text>
      
      </View>
     
      <FlatList
        data={participants}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Participant
            id={item.id}
            name={item.name}
            occupation={item.occupation}
            salary={item.salary}
            onRemove={handleRemoveParticipant}
          />
        )}
      />

    </View>
    
  )
}

