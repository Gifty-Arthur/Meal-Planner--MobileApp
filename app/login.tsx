import { colors } from "@/global";
import { FontAwesome } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

const login = () => {
  return (
    <SafeAreaView style={styles.container} edges={['right', 'bottom', 'left']}>
      <StatusBar hidden={true} />
      <Image
        style={styles.image}
        source={require("../assets/images/l1.png")}

      />
      <LinearGradient colors={['transparent', colors.background]} style={styles.gradient}>

      </LinearGradient>

      <TouchableOpacity 
        style={styles.emailBtn}
        onPress={() => router.push("/components/Onboarding")}
      >
        <Text style={styles.emailbtnText}> Sign up with email</Text>
      </TouchableOpacity>

      {/* Divider with lines */}
      <View style={styles.dividerContainer}>
        <View style={styles.line} />
        <Text style={styles.dividerText}>or use social sign up</Text>
        <View style={styles.line} />
      </View>

      <TouchableOpacity style={styles.socialBtn}>
        <FontAwesome name="google" size={16} color="black" />
        <Text style={styles.socialBtnText}>Continue with Google</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.socialBtn}>
        <FontAwesome name="facebook" size={16} color="#1877F2" />
        <Text style={styles.socialBtnText}>Continue with Facebook</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.socialBtn}>
        <FontAwesome name="apple" size={16} color="black" />
        <Text style={styles.socialBtnText}>Continue with Apple</Text>
      </TouchableOpacity>

      <View style={styles.footerContainer}>
        <Text style={styles.footerText}>Already have an account? </Text>
        <TouchableOpacity>
          <Text style={styles.footerLoginText}>Log In</Text>
        </TouchableOpacity>
      </View>




    </SafeAreaView>
  );
};

export default login;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    flex: 1,
  },

  image: {
    width: '100%',
    height: '50%',
    resizeMode: "cover",
  },
  gradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    height: '50%',
  },

  emailBtn: {
    backgroundColor: 'black',
    borderRadius: 8,
    marginTop: 20,
    padding: 15,
    marginHorizontal: 20,
    alignItems: 'center',
  },

  emailbtnText: {
    color: 'white',
    fontSize: 10,
    fontWeight: "bold",


  },
  dividerText: {
    textAlign: 'center',
    marginHorizontal: 20,
    marginTop: 5,
    color: colors.text,
  },
  dividerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginHorizontal: 20,

  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: colors.textSecondary,
    marginTop: 10,
  },
  socialBtn: {
    backgroundColor: colors.text,
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 8,
    marginTop: 20,
    padding: 15,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  socialBtnText: {
    marginLeft: 10,
    fontSize: 10,
    fontWeight: "bold",
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 30,
  },
  footerText: {
    color: colors.text,
    fontSize: 14,
  },
  footerLoginText: {
    color: colors.text,
    fontSize: 14,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  }
});
