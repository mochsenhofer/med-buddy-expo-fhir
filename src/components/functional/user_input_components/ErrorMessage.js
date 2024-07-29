import { Text } from "react-native-paper";

export default function ErrorMessage({ message }) {
  return (
    <Text style={{ color: "red", margin: 2 }} variant="bodyMedium">
      {message}
    </Text>
  );
}
