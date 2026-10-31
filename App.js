// Profile Card — practical task (React Native basics)
// Follow the steps in README.md and build your solution in this file.
import { View, Text, Image, StyleSheet } from 'react-native';

// Data to display.
const NAME = 'Emmanuel Alejandro';
const ROLE = 'Estudiante de Ingeniería en Sistemas Computacionales';
const LOCATION = 'Guadalajara, Jalisco, México';
const BIO =
  'Soy estudiante del TSJ en mis últimos semestres de carrera, especializándome en el desarrollo web.';

const STATS = [
  { label: 'Proyectos', value: '3' },
  { label: 'Seguidores', value: '120' },
  { label: 'Siguiendo', value: '85' },
];

const SKILLS = [
  'Pensamiento crítico',
  'Trabajo en equipo',
  'Buena comunicación',
  'Bases de datos',
  'Desarrollo web',
];

export default function App() {
  return (
    <View style={styles.screen}>
      {/* STEP 1: card with View and Text (name, role, location, bio) */}
      <View style={styles.card}>
        <Text style={styles.name}>{NAME}</Text>
        <Text style={styles.role}>{ROLE}</Text>
        <Text style={styles.location}>{LOCATION}</Text>
        <Text style={styles.bio} numberOfLines={3}>
          {BIO}
        </Text>
      </View>
      {/* TODO STEP 2: add the banner and the avatar with Image */}
      {/* TODO STEP 3: header row and stats row with Flexbox */}
      {/* TODO STEP 4: online badge, skill tags and action buttons (layout) */}
      {/* TODO STEP 5: polish the styles (colors, typography, shadow) */}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: 64,
    paddingHorizontal: 20,
    backgroundColor: '#EEF1F6',
  },
  card: {
    backgroundColor: '#FFFFFF',
    padding: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  role: {
    fontSize: 16,
  },
  location: {
    fontSize: 14,
    color: '#6B7280',
  },
  bio: {
    fontSize: 15,
  },
});
