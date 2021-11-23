// import React, { Component } from 'react';
// import { View, Text, StatusBar, TextInput, StyleSheet, FlatList } from 'react-native';

// let data = [
//   {todo: 'Meeting Dengan Client', check: false},
//   {todo: 'Santunan Anak Yatim', check: false},
//   {todo: 'Shoping dengan istri', check: false},
//   {todo: 'Dinner dengan selingkuhan', check: false},
//   {todo: 'Beli Jas Hujan di Mall', check: false},
//   {todo: 'Liburan ke singapur', check: false},
//   {todo: 'Belikan mobil untuk orang tua', check: false},
//   {todo: 'Beli apartemen untuk pacar', check: false},
//   {todo: 'Ajang lomba layangan', check: false},
//   {todo: 'Beli baju baru', check: false},
//   {todo: 'Ngajak warga main kelereng', check: false},
//   {todo: 'Beli Paket Internet 100GB', check: false},
// ]

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { 
//       todoBaru: '',
//     };
//   }  
//   render() {
//     return (
//       <View style={{flex: 1}}>
//         <StatusBar backgroundColor="#805acb" barStyle="light-content" />
//         <View style={{ backgroundColor: '#b388ff', paddingVertical: 15, elevation: 10}}>
//           <Text style={{color: '#FFFFFF', textAlign: 'center', fontWeight: 'bold', fontSize: 18}}>TODOLIST </Text>
//         </View>
      
//         <FlatList
//         data={data}
//         renderItem={({ item }) => 
//         <View style={styles.todo}>
//           <Text style={styles.teks}>{item.todo}</Text>
//         </View>
      
//          }
//           keyExtractor={item => item.todo}
//           style={{flex: 1, backgroundColor: '#ede7f6'}}
//         />


//         <TextInput style={styles.input} value={this.state.todoBaru} 
//         onChangeText={(text) => this.setState({todoBaru: text}) }
//         placeholder={'Masukkan Todo Baru Disini'}  />
        
//         <TextInput style={styles.input} value={this.state.todoBaru} 
//         onChangeText={(text) => this.setState({todoBaru: text}) }
//         placeholder={'Masukkan Todo Baru Disini'}  />

        

//       </View>
      
//     );
//   }
// }

// export default App

//  const styles = StyleSheet.create({
//    input:{
//     borderColor: '#212121',
//     height: 65,
//     padding: 15,
//     borderBottomWidth: 3,
//    },
//    todo:{
//      borderColor: '#e7b9ff',
//      backgroundColor: '#FFFFFF',
//      marginHorizontal: 20,
//      marginVertical: 7,
//      elevation: 1,
//      borderWidth: 1,
//      paddingVertical: 15,
//      borderRadius: 10,
//      elevation: 5,
//    },
//    teks:{
//     marginLeft: 10,
//    },
//  })
 

import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput, Button } from 'react-native'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      
    };
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <View style={styles.kotak}>
          <Text style={styles.teks1}> JADWAL SISKAMLING  </Text>
          <Text style={styles.teks1}> DESA GULUK-GULUK </Text>
        </View>
        <View style={styles.panji}>
          <Text style={{backgroundColor: 'wheat',textAlign:'center',}}>SENIN</Text>
         <TextInput
          style={{
            height: 40,
            borderColor: 'blue',
            borderWidth: 1,
            paddingLeft: 20,
            marginVertical: 20,
            borderRadius: 4,
            
          }}
          onChangeText={text => this.setState({text: text})}
          value={this.state.text}
          placeholder="ANHAR"
          />
        <TextInput
          style={{
            height: 40,
            borderColor: 'blue',
            borderWidth: 1,
            paddingLeft: 20,
            marginVertical: 20,
            borderRadius: 4,
          }}
          onChangeText={text => this.setState({text: text})}
          value={this.state.text}
          placeholder="ANWAR"
          />
        </View>

        <View style={styles.panji}>
          <Text style={{backgroundColor: 'wheat',textAlign:'center',}}>SELASA</Text>
         <TextInput
          style={{
            height: 40,
            borderColor: 'blue',
            borderWidth: 1,
            paddingLeft: 20,
            marginVertical: 20,
            borderRadius: 4,
            
          }}
          onChangeText={text => this.setState({text: text})}
          value={this.state.text}
          placeholder="HALIM"
          />
        <TextInput
          style={{
            height: 40,
            borderColor: 'blue',
            borderWidth: 1,
            paddingLeft: 20,
            marginVertical: 20,
            borderRadius: 4,
          }}
          onChangeText={text => this.setState({text: text})}
          value={this.state.text}
          placeholder="EFENDI"
          />
        </View>
        <View style={styles.panji}>
          <Text style={{backgroundColor: 'wheat',textAlign:'center',}}>RABU</Text>
         <TextInput
          style={{
            height: 40,
            borderColor: 'blue',
            borderWidth: 1,
            paddingLeft: 20,
            marginVertical: 20,
            borderRadius: 4,
            
          }}
          onChangeText={text => this.setState({text: text})}
          value={this.state.text}
          placeholder="READI"
          />
        <TextInput
          style={{
            height: 40,
            borderColor: 'blue',
            borderWidth: 1,
            paddingLeft: 20,
            marginVertical: 20,
            borderRadius: 4,
          }}
          onChangeText={text => this.setState({text: text})}
          value={this.state.text}
          placeholder="MAKSUM"
          />
        </View>
                <View style={styles.panji}>
          <Text style={{backgroundColor: 'wheat',textAlign:'center',}}></Text>
         <TextInput
          style={{
            height: 40,
            borderColor: 'blue',
            borderWidth: 1,
            paddingLeft: 20,
            marginVertical: 20,
            borderRadius: 4,
            
          }}
          onChangeText={text => this.setState({text: text})}
          value={this.state.text}
          placeholder="DIAN ANGGARA"
          />
        <TextInput
          style={{
            height: 40,
            borderColor: 'blue',
            borderWidth: 1,
            paddingLeft: 20,
            marginVertical: 20,
            borderRadius: 4,
          }}
          onChangeText={text => this.setState({text: text})}
          value={this.state.text}
          placeholder="EFENDI"
          />
        </View>

      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  kotak:{
    borderWidth: 1,
    padding: 20,
    backgroundColor: "dimgrey"
  },
  panji:{
    borderWidth: 1,
    padding: 10,
    borderColor: 'gainsboro',
    backgroundColor: 'gray',
    borderRadius: 20,
    marginVertical: 5,
    marginHorizontal: 4,
  },
  olar:{
    marginTop: 10,
    marginBottom: 10,
    padding: 5,
  },
  teks1:{
    textAlign: 'center',
    color: '#FFF8DC'
  }
})
