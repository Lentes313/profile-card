// Profile Card — practical task (React Native basics)
// Follow the steps in README.md and build your solution in this file.
import {
  View,
  Text,
  Image,
  StyleSheet,
  Platform,
  useWindowDimensions,
} from 'react-native';

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

// STEP 5: every color used in the styles comes from here.
const COLORS = {
  background: '#EEF1F6',
  card: '#FFFFFF',
  text: '#1F2430',
  muted: '#6B7280',
  primary: '#2F6FEB',
  primaryLight: '#E8EFFD',
  border: '#E5E7EB',
  online: '#22C55E',
  shadow: '#000000',
};

const CARD_RADIUS = 20;
const WIDE_SCREEN = 600;

// BONUS: reusable components with props.
function StatItem({ label, value, divider }) {
  return (
    <View style={[styles.stat, divider && styles.statDivider]}>
      <Text style={styles.statValue}>{value}</Text>
      <Text style={styles.statLabel}>{label}</Text>
    </View>
  );
}

function Tag({ label }) {
  return (
    <View style={styles.tag}>
      <Text style={styles.tagText}>{label}</Text>
    </View>
  );
}

export default function App() {
  // BONUS: on wide screens (tablets, web) the card keeps a max width.
  const { width } = useWindowDimensions();
  const isWide = width > WIDE_SCREEN;

  return (
    <View style={styles.screen}>
      {/* STEP 1: card with View and Text (name, role, location, bio) */}
      <View style={[styles.card, isWide && styles.cardWide]}>
        {/* STEP 2: banner and avatar with Image */}
        <Image
          source={require('./assets/banner.png')}
          style={styles.banner}
          resizeMode="cover"
        />
        <View style={styles.body}>
          {/* STEP 3: header row (avatar + texts side by side) */}
          <View style={styles.header}>
            {/* STEP 4: the wrapper lets the badge sit on the avatar's corner */}
            <View>
              <Image source={require('./assets/avatar.png')} style={styles.avatar} />
              <View style={styles.badge} />
            </View>
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
            {STATS.map((stat, index) => (
              <StatItem
                key={stat.label}
                label={stat.label}
                value={stat.value}
                divider={index > 0}
              />
            ))}
          </View>

          {/* STEP 4: skill tags that wrap to the next line */}
          {/* BONUS: section with a title above the tags */}
          <View style={styles.skills}>
            <Text style={styles.sectionTitle}>Habilidades</Text>
            <View style={styles.tags}>
              {SKILLS.map((skill) => (
                <Tag key={skill} label={skill} />
              ))}
            </View>
          </View>

          {/* STEP 4: action buttons with equal width */}
          <View style={styles.actions}>
            <View style={[styles.button, styles.buttonPrimary]}>
              <Text style={[styles.buttonText, styles.buttonTextPrimary]}>Seguir</Text>
            </View>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Mensaje</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: COLORS.background,
  },
  // No overflow: 'hidden' here, because on iOS it would also clip the shadow.
  card: {
    backgroundColor: COLORS.card,
    borderRadius: CARD_RADIUS,
    ...Platform.select({
      ios: {
        shadowColor: COLORS.shadow,
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.12,
        shadowRadius: 16,
      },
      android: {
        elevation: 6,
      },
    }),
  },
  cardWide: {
    width: '100%',
    maxWidth: 420,
    alignSelf: 'center',
  },
  // The banner rounds its own top corners to follow the card.
  banner: {
    width: '100%',
    height: 120,
    borderTopLeftRadius: CARD_RADIUS,
    borderTopRightRadius: CARD_RADIUS,
  },
  // The padding lives here so the banner can span the full card width.
  body: {
    padding: 20,
    paddingTop: 0,
  },
  // flex-start keeps the avatar wrapper at 96 high, so the badge stays on its corner.
  header: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: -48,
  },
  avatar: {
    width: 96,
    height: 96,
    borderRadius: 48,
    borderWidth: 4,
    borderColor: COLORS.card,
  },
  badge: {
    position: 'absolute',
    right: 6,
    bottom: 6,
    width: 18,
    height: 18,
    borderRadius: 9,
    borderWidth: 2,
    borderColor: COLORS.card,
    backgroundColor: COLORS.online,
  },
  // Pushes the texts below the banner (the avatar overlaps it by 48).
  info: {
    flex: 1,
    marginLeft: 12,
    paddingTop: 56,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: COLORS.text,
  },
  role: {
    fontSize: 15,
    fontWeight: '600',
    color: COLORS.primary,
    marginTop: 2,
  },
  location: {
    fontSize: 14,
    color: COLORS.muted,
    marginTop: 2,
  },
  bio: {
    fontSize: 15,
    lineHeight: 22,
    color: COLORS.text,
    marginTop: 16,
  },
  stats: {
    flexDirection: 'row',
    marginTop: 16,
    paddingVertical: 12,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: COLORS.border,
  },
  stat: {
    flex: 1,
    alignItems: 'center',
  },
  statDivider: {
    borderLeftWidth: 1,
    borderColor: COLORS.border,
  },
  statValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.text,
  },
  statLabel: {
    fontSize: 13,
    color: COLORS.muted,
    marginTop: 2,
  },
  skills: {
    marginTop: 16,
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: '700',
    color: COLORS.muted,
    textTransform: 'uppercase',
    letterSpacing: 1.2,
  },
  tags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginTop: 8,
  },
  tag: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 999,
    backgroundColor: COLORS.primaryLight,
  },
  tagText: {
    fontSize: 13,
    fontWeight: '600',
    color: COLORS.primary,
  },
  actions: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 20,
  },
  button: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: COLORS.primary,
  },
  buttonPrimary: {
    backgroundColor: COLORS.primary,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.primary,
  },
  buttonTextPrimary: {
    color: COLORS.card,
  },
});
