import { useState, useEffect} from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native-web';

export default function App() {

  const [myMemes,setMyMemes] = useState('')
  const [img, setImg] = useState("")
  useEffect(() => {
    fetchMemes()
  
  }, [])
  const fetchMemes = () => {
    fetch ('https://eager-meitner-f8adb8.netlify.app/.netlify/functions/random')
      .then(res => res.json())
      .then(json => {
        const {title, url} = json;
        setMyMemes(title)
        setImg(url)
        console.log(json);
        console.log(url)
      })
      .catch((error) => console.error(error))
  }
  return (
    <View style={styles.container}>
      <Text>{myMemes}</Text>
      <Button onPress={fetchMemes} title="Get Meme"></Button>

          {img ? (
            <Image source={{ uri: img }} style={{height: 1600, width:1600,transform:[{scale:0.5}]}} />
          ) : (
            <></>
          )}
          
    </View>
  );
}