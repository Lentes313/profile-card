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
        {/* STEP 2: banner and avatar with Image */}
        <Image
          source={require('./assets/banner.png')}
          style={styles.banner}
          resizeMode="cover"
        />
        <View style={styles.body}>
          {/* STEP 3: header row (avatar + texts side by side) */}
          <View style={styles.header}>
            <Image source={require('./assets/avatar.png')} style={styles.avatar} />
            <View style={styles.info}>
              <Text style={styles.name}>{NAME}</Text>
              <Text style={styles.role}>{ROLE}</Text>
              <Text style={styles.location}>{LOCATION}</Text>
            </View>
          </View>
          <Text style={styles.bio} numberOfLines={3}>
            {BIO}
          </Text>

          {/* STEP 3: stats row with three equal columns */}
          <View style={styles.stats}>
            {STATS.map((stat) => (
              <View key={stat.label} style={styles.stat}>
                <Text style={styles.statValue}>{stat.value}</Text>
                <Text style={styles.statLabel}>{stat.label}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>
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
    overflow: 'hidden',
  },
  banner: {
    width: '100%',
    height: 120,
  },
  // The padding lives here so the banner can span the full card width.
  body: {
    padding: 20,
    paddingTop: 0,
  },
  avatar: {
    width: 96,
    height: 96,
    borderRadius: 48,
    borderWidth: 4,
    borderColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    marginTop: -48,
  },
  // Pushes the texts below the banner (the avatar overlaps it by 48).
  info: {
    flex: 1,
    marginLeft: 12,
    paddingTop: 52,
  },
  stats: {
    flexDirection: 'row',
    marginTop: 16,
    paddingVertical: 12,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#E5E7EB',
  },
  stat: {
    flex: 1,
    alignItems: 'center',
  },
  statValue: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  statLabel: {
    fontSize: 13,
    color: '#6B7280',
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
