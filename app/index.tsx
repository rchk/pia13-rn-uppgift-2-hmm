import { useState } from "react";
import { Alert, Button, Text, View } from "react-native";

export default function Index() {
  const [counter, setCounter] = useState(0);
  
  const onPressPlus = () => setCounter(counter + 1);
  const onPressMinus = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };
  const onPressReset = () => setCounter(0);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 20,
      }}
    >
      <Text style={{ fontSize: 50 }}>{counter}</Text>

      <View style={{ flexDirection: "row", marginBottom: 20 }}>
        <Button title="PLUS" onPress={onPressPlus} />
        <View style={{ width: 10 }} />
        <Button title="MINUS" onPress={onPressMinus} />
      </View>
    
      <View style={{ height: 50 }}>
        { counter > 0 ? (
          <Button title="RESET" onPress={onPressReset} />
        ) : (
          <View style={{ height: 50 }} />
        )}
      </View>
        
    </View>
  );
}
