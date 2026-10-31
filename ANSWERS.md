# Respuestas — Profile Card

**1. ¿Cuál es el valor por defecto de `flexDirection` en React Native? ¿En qué se diferencia de CSS en la web?**

En React Native el valor por defecto es `column`, así que los elementos se acomodan de arriba hacia abajo. En CSS para la web el valor por defecto es `row` (de izquierda a derecha). Además, en React Native todos los `View` ya usan Flexbox sin tener que escribir `display: 'flex'`.

**2. ¿Cuál es la diferencia entre `justifyContent` y `alignItems`?**

`justifyContent` acomoda a los hijos sobre el eje principal (vertical en `column`, horizontal en `row`). `alignItems` los acomoda sobre el eje cruzado, que es el perpendicular al principal. Por ejemplo, en una fila, `justifyContent` reparte el espacio a lo ancho y `alignItems` alinea los elementos a lo alto.

**3. ¿Qué hace `flex: 1` dentro de una fila? ¿Y en el `View` más externo de una pantalla?**

Dentro de una fila, `flex: 1` hace que el elemento ocupe el espacio que sobra; si varios hermanos lo tienen, se reparten el espacio en partes iguales (como las tres columnas de stats o los dos botones). En el `View` más externo hace que ocupe toda la pantalla, lo que permite, por ejemplo, centrar la tarjeta verticalmente con `justifyContent: 'center'`.

**4. ¿Cuál es la diferencia entre `resizeMode="cover"` y `resizeMode="contain"`?**

`cover` escala la imagen para llenar todo el espacio manteniendo su proporción, aunque se recorten algunas partes (por eso lo usamos en el banner). `contain` escala la imagen para que se vea completa dentro del espacio, también sin deformarla, pero pueden quedar espacios vacíos a los lados o arriba y abajo.

**5. ¿Por qué usamos `StyleSheet.create` en lugar de objetos dentro del JSX?**

Porque los estilos se crean una sola vez fuera del componente y no se vuelven a crear en cada render, lo que es mejor para el rendimiento. También deja el JSX más limpio, permite reutilizar estilos con nombre y, en desarrollo, ayuda a detectar propiedades de estilo inválidas.

**6. ¿Por qué una sombra escrita con `shadowColor` no aparece en Android?**

Porque las propiedades `shadowColor`, `shadowOffset`, `shadowOpacity` y `shadowRadius` son de iOS y Android las ignora. En Android la sombra se hace con `elevation`, que usa el sistema de sombras de Material Design. Por eso usamos `Platform.select` para aplicar unas en iOS y la otra en Android.
