import React, { useState } from'react';
import { View, Text } from'react-native';
import { Router, Route, Link, useRouter } from 'expo-router';
import { TextInput } from'react-native-web';
import { NativeWindStyleSheet } from "nativewind";

NativeWindStyleSheet.setOutput({
  default: "native",
});

export default function Page() {
  const [pin, setPin] = useState('');
  const router = useRouter(); // Initialize the router

  return (
    <View className="flex-1 justify-center items-center bg-gray-100">
      <Text className="text-2xl font-bold text-gray-600 mb-4">Your Pin Is : {pin}</Text>
      <TextInput
        className="w-3/4 p-4 text-center bg-white border border-gray-300 rounded-lg shadow-md text-lg text-gray-600"
        placeholder="Enter your Code To Show..."
        value={pin}
        onChangeText={(text) => setPin(text)}
        onSubmitEditing={() => {
          console.log('Login True!');
          // You can't return JSX from the onSubmitEditing event handler.
          // If you want to display a message, you can use the useState hook to update the state and conditionally render the message.
        }}
      />
      {pin!== '' && (
        <Text className="text-lg text-green-500 mt-4">Login True!</Text>
      )}
    </View>
  );
}
