import React, { useState } from 'react';
import { Text, TextInput, View, TouchableOpacity } from 'react-native';
import tw from 'twrnc';  

export default function LoginDetails() {
    const [loginDetails, setLoginDetails] = useState({ name: '', email: '', password: '' });
    const [isFocused, setIsFocused] = useState(false);

    const loginDetailsHandler = (name, value) => {
        setLoginDetails((prevValue) => ({ ...prevValue, [name]: value }));
    };

    return (
        <View style={tw`flex-1 justify-center items-center bg-blue-400`}>
            <View style={tw`w-full max-w-md px-4`}>
                <View style={tw`bg-white rounded-lg px-10 py-14 w-full shadow-xl`}>
                    <View>
                        <Text style={tw`text-lg font-semibold text-gray-400 mb-6 text-center`}>Welcome to React Native</Text>
                        {/* Name Input */}
                        <TextInput
                            value={loginDetails.name}
                            onFocus={() => setIsFocused(true)}
                            onBlur={() => setIsFocused(false)}
                            onChangeText={(text) => loginDetailsHandler('name', text)}
                            placeholder="Enter your name"
                            style={tw.style(`h-14 pl-4 border-2 rounded-lg mb-6 placeholder:text-sm`,
                                isFocused? border-blue-500 : border-gray-400)}
                        />

                        {/* Email Input */}
                        <TextInput
                            value={loginDetails.email}
                            onFocus={() => setIsFocused(true)}
                            onBlur={() => setIsFocused(false)}
                            onChangeText={(text) => loginDetailsHandler('email', text)}
                            placeholder="Enter your email"
                            style={tw.style(`h-14 pl-4 border-2 rounded-lg mb-6 placeholder:text-sm`,
                                isFocused? border-blue-500 : border-gray-400
                            )}
                        />

                        {/* Password Input */}
                        <TextInput
                            value={loginDetails.password}
                            onFocus={() => setIsFocused(true)}
                            onBlur={() => setIsFocused(false)}
                            onChangeText={(text) => loginDetailsHandler('password', text)}
                            placeholder="Enter your password"
                            secureTextEntry
                            style={tw.style(`h-14 pl-4 border-2 rounded-lg mb-6 placeholder:text-sm`,
                                isFocused? border-blue-500 : border-gray-400
                            )}
                        />

                        {/* Forgot Password */}
                        <Text style={tw`text-cyan-700 mb-6`}>Forgot password?</Text>

                        {/* Login Button */}
                        <TouchableOpacity style={tw`items-center justify-center w-full py-6 bg-cyan-700 rounded-md`}>
                            <Text style={tw`text-white font-semibold`}>Login</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
}
