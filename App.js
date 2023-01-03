import { useState, useEffect} from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

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
      <Button onPress={fetchMemes} title="Get Meme"></Button>
      <Text>{myMemes}</Text>

          {img ? (
            <Image source={{ uri: img }} style={{height: "70%", width:"100%",marginTop:100,marginLeft:5,transform:[{scale:0.5}]}} />
          ) : (
            <></>
          )}
          
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#fff',
    width:"100%",
    height:400,
    marginTop: 100,
  }
});