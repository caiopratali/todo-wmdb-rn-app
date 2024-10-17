import { z } from 'zod';
import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from 'react-hook-form';

import { Container, Form } from './styles'
import { Input } from '../../components/Input';
import { Header } from '../../components/Header'
import { Button } from '../../components/Button';
import { UseSafeArea } from '../../hooks/UseSafeArea';
import { Error } from '../../components/Input/styles';

const schema = z.object({
  name: z.string().min(1, { message: 'Campo obrigatório' }),
});

export function AddTask() {

  const { top, bottom } = UseSafeArea();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
    },
  })

  const onSubmit = (data) => {
    console.log(data);
  }

  return (
    <Container paddingTop={top} paddingBottom={bottom}>
        <Header title='Criar' />

        <Form>
          <Controller
            name="name"
            control={control}
            render={({ field: { onChange, value } }) => (
              <Input 
                value={value}
                onChangeText={onChange} 
              />
            )}
          />
          { errors.name && <Error>{errors.name.message}</Error> }
        </Form>

        <Button title='Adicionar' onPress={handleSubmit(onSubmit)} />
    </Container>
  )
}
