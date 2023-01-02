import { StatusBar } from 'expo-status-bar';
import { useState, useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function App() {

  const [myMemes,setMyMemes] = useState('')

  useEffect(() => {
    fetchMemes()
  
  }, [])
  
  const fetchMemes = () => {
    fetch ('https://ronreiter-meme-generator.p.rapidapi.com/meme?top=Top%20Text&bottom=Bottom%20Text&meme=Condescending-Wonka&font_size=50&font=Impact')
      .then(response => response.json())
      .then(json => {
        const {myMemes} = json
        setMyMemes(myMemes)
      })
      .catch((error) => console.error(error))
  }
  return (
    <View style={styles.container}>
      <Text style = {{Color:'black',
                      justifyContent:'center'}}>
        {myMemes}
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
