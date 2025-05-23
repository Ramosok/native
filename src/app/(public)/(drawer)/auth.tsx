import { useLocalSearchParams, useRouter } from 'expo-router';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function AuthDrawer() {
  const { type } = useLocalSearchParams();
  const router = useRouter();

  const isRegister = type === 'register';
  const title = isRegister ? 'Create Account' : 'Login';

  return (
    <View style={styles.drawerContent}>
      <Text style={styles.title}>{title}</Text>

      {/* Здесь будет форма регистрации/входа */}

      <TouchableOpacity style={styles.closeButton} onPress={() => router.back()}>
        <Text style={styles.closeButtonText}>Close</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: 24,
    marginBottom: 30,
  },
  closeButton: {
    marginTop: 20,
    padding: 10,
  },
  closeButtonText: {
    color: 'white',
    fontSize: 16,
  },
});
