<template>
  <Form :validation-schema="schema">
    <Field name="email" type="email" />
    <ErrorMessage name="email" />
    <Field name="password" type="password" />
    <ErrorMessage name="password" />
    <button type="Submit">Submit</button>
    <button type="reset">Reset</button>
  </Form>
</template>
<script>
import { Form, Field } from "vee-validate";
import * as yup from "yup";
export default {
  components: {
    Form,
    Field,
  },
  data() {
    const schema = yup.object({
      email: yup.string().required().email(),
      password: yup.string().required().min(8),
    });
    return {
      schema,
    };
  },
};
</script>
