import BaseForm from "@/elements/inputs/BaseForm.vue"; //vscode intellisense with *.vue doesn't work
import TextInput from "../elements/inputs/TextInput.vue"; //intellisense works only with *.jsx files

export default {
  render() {
    return (
      <BaseForm>
        <TextInput label="Test label" name="testName" />
      </BaseForm>
    );
  }
};
