import { Text, View, StyleSheet } from "react-native";
import { Image } from "expo-image";
import {Link} from "expo-router";
import ImageViewer from "@/components/ImageViewer";
import Button from "@/components/Button";
import * as ImagePicker from "expo-image-picker"
import {useState} from "react";

const PlaceholderImg = require("../../assets/images/background-image.png");

export default function Index() {

    const [selectedImg, setSelectedImg] = useState<string | undefined>(undefined);
    const pickImageAsync = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            quality: 1,
        });

        if(result.canceled)
        {
            alert("did not select");
        }
        else
        {
            setSelectedImg(result.assets[0].uri);
            console.log(result);
        }
    }

    return (
        <>
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <ImageViewer imgSource={selectedImg || PlaceholderImg} />
                </View>
                {/*<Text style={styles.text}>Hello</Text>*/}
                {/*<Link href={"/about"} style={styles.button}>About</Link>*/}
                <View style={styles.footerContainer}>
                    <Button label="Choose a photo" theme="primary" onPress={pickImageAsync} />
                    <Button label="Use this photo" />
                </View>
            </View>
        </>);
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#25292e",
    },
    text:{
        color: "white",
    },
    button: {
        fontSize: 20,
        textDecorationLine: "underline",
        color: "white",
    },
    imageContainer: {
        flex: 1,
        paddingTop: 28,},
    footerContainer: {
        flex: 1 / 3,
        alignItems: "center",
    }
})
