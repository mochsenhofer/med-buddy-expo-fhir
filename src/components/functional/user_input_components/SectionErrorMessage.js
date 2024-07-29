import { Text } from "react-native-paper";

export default function SectionErrorMessage({ message }) {
  return (
    <Text style={{ color: "red", margin: 10 }} variant="bodyLarge">
      {message}
    </Text>
  );
}
