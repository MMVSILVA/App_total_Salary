import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from './styles'

type Props = {
  id:string;
  name: string;
  occupation:string;
  salary:number;

  onRemove: () => void;
}

export function Participant({id, name, occupation, salary, onRemove }: Props) {

  function formatValues(value: number) {
    return (value)
      .toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      })
  }
  return (
    
    <View>
       <View style={styles.container}>

        <Text style={styles.id}>
          {id}
        </Text>
        <Text style={styles.name}>
          {name}
        </Text>
        <Text style={styles.occupation}>
          {occupation}
        </Text>
        <Text style={styles.salary}>
          {formatValues((salary))}
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={onRemove}
        >
          <Text style={styles.buttonText}>
            -
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}