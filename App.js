// IMPORTAÇÃO
import {useState} from 'react';
import {Text,View,TextInput,TouchableOpacity,StyleSheet} from 'react-native';

export default function Aplicacao(){

  const [n1,setN1] = useState()
  const [n2,setN2] = useState()
  const [resultado,setResultado] = useState([])

  // função anonima function()
  const somar = ()=>{
    const r = parseInt(n1) + parseInt(n2)
    setResultado([r])
  }
  
  const multiplicar = () => {
    const r = parseInt(n1) * parseInt(n2)
    setResultado([r])
  }

  const realizarOperacoes = () => {
    const r1 = parseInt(n1) + parseInt(n2)
    const r2 = parseInt(n1) - parseInt(n2)
    const r3 = parseInt(n1) * parseInt(n2)
    const r4 = parseInt(n1) / parseInt(n2)

    setResultado([r1, r2, r3, r4])
  }

  return(
    <View style={styles.tudo}>

      <View>
        <Text style={styles.titulo}> Somando dois Valores </Text>
      </View>

      <View style={{margin:15}}>
        <Text> Primeiro número: </Text>          
        <TextInput              
          style={styles.caixaDeTexto}
          placeholder='Digite aqui o primeiro número'
          placeholderTextColor='#6f6f6f'
          autoFocus={true}
          keyboardType={'numeric'}

          onChangeText = {text =>setN1(text)}
        />            
      </View>           

      <View style={{margin:15}}>
        <Text> Segundo número:  </Text>          
        <TextInput
          style={styles.caixaDeTexto}
          placeholder='Digite aqui o segundo número'
          placeholderTextColor='#6f6f6f'              
          keyboardType={'numeric'}
          // evento para mudar o estado da caixa de texto
          onChangeText = {text =>setN2(text)}
        />            
      </View>           

      <View style={{margin:15}}>           

        <TouchableOpacity 
          style={styles.botao} 
          onPress={()=>realizarOperacoes()}
          activeOpacity={0.5}
        >
          <Text style={styles.textoBotao}> Realizar operações </Text>
        </TouchableOpacity>
      </View>

      <View style={{margin:15}}>
        <Text style={styles.resposta}> Total da soma: {resultado[0]}  </Text>
        <Text style={styles.resposta}> Total da subtração: {resultado[1]}  </Text>
        <Text style={styles.resposta}> Total da multiplicação: {resultado[2]}  </Text>
        <Text style={styles.resposta}> Total da divisão: {resultado[3]}  </Text>
      </View>
      
    </View>
);
}

const styles = StyleSheet.create({
  tudo:{
    backgroundColor:'#000',
    height:'100%',
    width:'100%'
  },

  titulo:{
    color:'#d30f59',
    fontSize:25,
    textAlign:'center',
    marginTop:25,
    marginBottom:10    
  },

  caixaDeTexto:{
    borderWidth:1,
    borderColor:'#2f2f2f',
    color:'#f2f2f2',
    borderRadius:40,
    paddingLeft: 25,
    height:60    
  },

  botao:{
    backgroundColor: '#d30f33ff',    
    borderRadius: 25, 
    paddingVertical: 15,
    alignItems: 'center'    
  },

  textoBotao:{
    color:'#fff',
    fontSize:18
  },

  resposta:{
    color:'#d30f59',
    fontSize:25,
    textAlign:'center',
    marginTop:30
  }
});