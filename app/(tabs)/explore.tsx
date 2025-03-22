import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function Onboarding() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.imagePlaceholder}>
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Smart Shop{"\n"}Healthy Living</Text>
        <Text style={styles.subtitle}>
          Modern shopping solution focused on a healthy,{"\n"}
          balanced lifestyle. We provide a variety of quality{"\n"}
          support for your health needs.
        </Text>
\
        <TouchableOpacity style={styles.button} >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>

        <Text style={styles.signupText}>
          Don’t have an account?{" "}
          <Text style={styles.signupLink} onPress={() => alert("Navigate to Sign Up")}>
            Sign Up
          </Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  imagePlaceholder: {
    width: "100%",
    height: "40%",
    backgroundColor: "#d3d3d3",
    borderRadius: 10,
  },
  content: {
    width: "100%",
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#4d7c47",
    textAlign: "center",
    marginTop: 20,
  },
  subtitle: {
    fontSize: 14,
    color: "gray",
    textAlign: "center",
    marginVertical: 10,
  },
  button: {
    backgroundColor: "#7DA36A",
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  signupText: {
    marginTop: 15,
    fontSize: 14,
    color: "gray",
  },
  signupLink: {
    color: "#4d7c47",
    fontWeight: "bold",
  },
});
