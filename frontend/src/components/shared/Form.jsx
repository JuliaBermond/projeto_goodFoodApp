import useMealsStore from "@/stores/mealsStore_.js";
import { validateField } from "@/utils/validation.js";
import { Button, Field, Fieldset, Flex, Input, Stack } from "@chakra-ui/react";
import { useState } from "react";
import { firstLetterCap } from "../../utils/toUpperCase.js";

const Form = ({ formFields, onClickFunc }) => {
  const clearMessage = useMealsStore((state) => state.clearMessage);
  const initialFormState = formFields.reduce((acc, group) => {
    group.fields.forEach((field) => {
      acc[field.fieldName] = "";
    });
    return acc;
  }, {});

  const [formData, setFormData] = useState(initialFormState);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (fieldName, value) => {
    setFormData({ ...formData, [fieldName]: value });
  };

  function handleSubmit() {
    setSubmitted(true);

    // verifica se existe algum erro antes de mandar o formulário para o backend;
    const hasError = formFields.some((group) =>
      group.fields.some(
        (field) => !validateField(field.fieldName, formData[field.fieldName])
      )
    );

    if (hasError) return;

    onClickFunc(formData);
    setFormData(initialFormState);
    setSubmitted(false);
  }

  return (
    <>
      {formFields.map((group, groupIndex) => (
        <Fieldset.Root size="lg" maxW="lg" mb={6} key={groupIndex}>
          <Stack spacing={3}>
            <Fieldset.Legend color={"orange.400"}>
              {group.formFieldLegendAndHelperText.legend}
            </Fieldset.Legend>

            <Fieldset.HelperText>
              {group.formFieldLegendAndHelperText.helperText}
            </Fieldset.HelperText>

            <Fieldset.Content>
              {group.fields.map((field) => {
                const isInvalid =
                  submitted &&
                  !validateField(field.fieldName, formData[field.fieldName]);

                return (
                  <Field.Root
                    key={field.fieldName}
                    mb={3}
                    required
                    invalid={isInvalid}
                  >
                    <Field.Label>{firstLetterCap(field.fieldName)}</Field.Label>

                    <Input
                      name={field.fieldName}
                      type={field.type}
                      placeholder={field.placeholder}
                      value={formData[field.fieldName]}
                      onChange={(e) =>
                        handleChange(field.fieldName, e.target.value)
                      }
                    />

                    {isInvalid && (
                      <Field.ErrorText>
                        {Array.isArray(field.errorMessage) ? (
                          <ul>
                            {field.errorMessage.map((msg, i) => (
                              <li key={i}>{msg}</li>
                            ))}
                          </ul>
                        ) : (
                          field.errorMessage || "Campo obrigatório"
                        )}
                      </Field.ErrorText>
                    )}
                  </Field.Root>
                );
              })}
            </Fieldset.Content>
          </Stack>
        </Fieldset.Root>
      ))}

      <Flex pb={10}>
        <Button
          type="button"
          alignSelf="flex-start"
          variant={"outline"}
          mt={4}
          ml={2}
          onClick={() => {
            clearMessage();
            handleSubmit();
          }}
        >
          Salvar
        </Button>
      </Flex>
    </>
  );
};

export default Form;
