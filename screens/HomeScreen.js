import { View, Text, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native';
import {
    UserIcon,
    ChevronDownIcon,
    MagnifyingGlassIcon,
    AdjustmentsVerticalIcon,
    StarIcon,
    MapPinIcon,

} from "react-native-heroicons/solid";

const HomeScreen = () => {
    const navigation = useNavigation();
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, []);
    return (
        <>
            <SafeAreaView className="bg-white">
                {/* Header */}
                <View className="flex-row pb-3 items-center mx-4 space-x-2">
                    <Image
                        source={require('./b.png')}
                        className="h-7 w-7 bg-gray-300 p-4 rounded-full"
                    />
                    <View className="flex-1">
                        <Text className="font-bold text-gray-400 text-xs">
                            Welcome!
                        </Text>
                        <Text className="font-bold text-xl">
                            Current Location
                            <ChevronDownIcon size={20} color="#7393B3" />
                        </Text>
                    </View>
                    <UserIcon size={33} color="#7393B3" />
                    {/* <UserIcon size={35} color="#00CCBB" /> */}
                </View>
                {/* Search */}
                <View className="flex-row items-center pb-2">
                    <View className="flex-row pb-2 mx-3 space-x-2 bg-gray-200 items-center pl-2 pt-1 flex-1">
                        <MagnifyingGlassIcon color="#7393B3" size={20} />
                        <TextInput placeholder="Look for a specific case" keyboardType="default"></TextInput>
                    </View>
                    <View className="pr-4">
                        <AdjustmentsVerticalIcon color="#3fa2a7" />
                    </View>
                </View>

                <ScrollView className="bg-gray-100 "
                    contentContainerStyle={{
                        paddingBottom: 100,
                    }}>
                    <TouchableOpacity 
                    onPress={()=> navigation.navigate("Delivery")}
                    className="p-2 rounded-md bg-gray-200 m-2">
                        <View className="flex-row">
                            <View>
                                <Image
                                    source={require("./1934505cirjw20230019.jpg")}
                                    className="h-24 w-24 rounded-md"
                                />
                            </View>
                            <View className="flex-1">
                                <Text className="font-bold text-lg px-2 ">SUMAN PAYRA</Text>
                                <Text className="px-2 text-s text-gray-500">Age : 15</Text>
                                <Text className="px-2 text-s text-gray-500">Gender : Male</Text>
                                <View className="items-center flex-row px-1 space-x-1">
                                    <MapPinIcon color="#7393B3" opacity={0.4} size={22} />
                                    <Text className=" text-s text-gray-500">Purba Medinipur CWC,WEST BENGAL</Text>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    onPress={()=> navigation.navigate("Delivery")}
                    className="p-2 rounded-md bg-gray-200 m-2">
                        <View className="flex-row">
                            <View>
                                <Image
                                    source={require('./3298802mpw20230288.jpg')}
                                    className="h-24 w-24 rounded-md"
                                />
                            </View>
                            <View className="flex-1">
                                <Text className="font-bold text-lg px-2 ">KANKANA PAUL</Text>
                                <Text className="px-2 text-s text-gray-500">Age : 15</Text>
                                <Text className="px-2 text-s text-gray-500">Gender : Female</Text>
                                <View className="items-center flex-row px-1 space-x-1">
                                    <MapPinIcon color="#7393B3" opacity={0.4} size={22} />
                                    <Text className=" text-s text-gray-500">House</Text>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    onPress={()=> navigation.navigate("Delivery")}
                    className="p-2 rounded-md bg-gray-200 m-2">
                        <View className="flex-row">
                            <View>
                                <Image
                                    source={require('./ankur.jpg')}
                                    className="h-24 w-24 rounded-md"
                                />
                            </View>
                            <View className="flex-1">
                                <Text className="font-bold text-lg px-2 ">ANKUR SARSWAT</Text>
                                <Text className="px-2 text-s text-gray-500">Age : 10</Text>
                                <Text className="px-2 text-s text-gray-500">Gender : Male</Text>
                                <View className="items-center flex-row px-1 space-x-1">
                                    <MapPinIcon color="#7393B3" opacity={0.4} size={22} />
                                    <Text className=" text-s text-gray-500">PALADI</Text>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    onPress={()=> navigation.navigate("Delivery")}
                    className="p-2 rounded-md bg-gray-200 m-2">
                        <View className="flex-row">
                            <View>
                                <Image
                                    source={require('./JG.jpg')}
                                    className="h-24 w-24 rounded-md"
                                />
                            </View>
                            <View className="flex-1">
                                <Text className="font-bold text-lg px-2 ">JAYDIPBHAI ALPESHBHAI</Text>
                                <Text className="px-2 text-s text-gray-500">Age : 11</Text>
                                <Text className="px-2 text-s text-gray-500">Gender : Male</Text>
                                <View className="items-center flex-row px-1 space-x-1">
                                    <MapPinIcon color="#7393B3" opacity={0.4} size={22} />
                                    <Text className=" text-s text-gray-500">GUGDICHOK</Text>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    onPress={()=> navigation.navigate("Delivery")}
                    className="p-2 rounded-md bg-gray-200 m-2">
                        <View className="flex-row">
                            <View>
                                <Image
                                    source={require('./dsa.jpg')}
                                    className="h-24 w-24 rounded-md"
                                />
                            </View>
                            <View className="flex-1">
                                <Text className="font-bold text-lg px-2 ">RANJUKTA SAHU</Text>
                                <Text className="px-2 text-s text-gray-500">Age : 17</Text>
                                <Text className="px-2 text-s text-gray-500">Gender : Female</Text>
                                <View className="items-center flex-row px-1 space-x-1">
                                    <MapPinIcon color="#7393B3" opacity={0.4} size={22} />
                                    <Text className=" text-s text-gray-500">SUBHADRA PALI</Text>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    onPress={()=> navigation.navigate("Delivery")}
                    className="p-2 rounded-md bg-gray-200 m-2">
                        <View className="flex-row">
                            <View>
                                <Image
                                    source={require('./Sag.jpg')}
                                    className="h-24 w-24 rounded-md"
                                />
                            </View>
                            <View className="flex-1">
                                <Text className="font-bold text-lg px-2 ">ABEL SHIJU</Text>
                                <Text className="px-2 text-s text-gray-500">Age : 15</Text>
                                <Text className="px-2 text-s text-gray-500">Gender : Male</Text>
                                <View className="items-center flex-row px-1 space-x-1">
                                    <MapPinIcon color="#7393B3" opacity={0.4} size={22} />
                                    <Text className=" text-s text-gray-500">BRM SCHOOL CHENGAMANAD</Text>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    onPress={()=> navigation.navigate("Delivery")}
                    className="p-2 rounded-md bg-gray-200 m-2">
                        <View className="flex-row">
                            <View>
                                <Image
                                    source={require('./Joy.jpg')}
                                    className="h-24 w-24 rounded-md"
                                />
                            </View>
                            <View className="flex-1">
                                <Text className="font-bold text-lg px-2 ">JOY RAIDAS</Text>
                                <Text className="px-2 text-s text-gray-500">Age : 7</Text>
                                <Text className="px-2 text-s text-gray-500">Gender : Male</Text>
                                <View className="items-center flex-row px-1 space-x-1">
                                    <MapPinIcon color="#7393B3" opacity={0.4} size={22} />
                                    <Text className=" text-s text-gray-500">NALIKUL</Text>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    onPress={()=> navigation.navigate("Delivery")}
                    className="p-2 rounded-md bg-gray-200 m-2 mb-36">
                        <View className="flex-row">
                            <View>
                                <Image
                                    source={require('./nig.jpg')}
                                    className="h-24 w-24 rounded-md"
                                />
                            </View>
                            <View className="flex-1">
                                <Text className="font-bold text-lg px-2 ">NISHA NASKAR</Text>
                                <Text className="px-2 text-s text-gray-500">Age : 17</Text>
                                <Text className="px-2 text-s text-gray-500">Gender : Female</Text>
                                <View className="items-center flex-row px-1 space-x-1">
                                    <MapPinIcon color="#7393B3" opacity={0.4} size={22} />
                                    <Text className=" text-s text-gray-500">GOUR MAHAN SACHIN MANDAL MAHA BIDYALAYA</Text>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                </ScrollView>
            </SafeAreaView >
            <View className="absolute bottom-10 z-50 w-full">
                <TouchableOpacity className="mx-5 bg-[#7393B3] p-4 rounded-lg flex-row items-center space-x-1">
                    <Text className="flex-1 text-white font-extrabold text-lg text-center">
                        Add/Scan A Face
                    </Text>
                </TouchableOpacity>
            </View>
        </>
    )
}

export default HomeScreen