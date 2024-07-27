import { Text } from "react-native-paper";

export default function ErrorMessage({ message }) {
  return (
    <Text style={{ color: "red" }} variant="bodySmall">
      {message}
    </Text>
  );
}
