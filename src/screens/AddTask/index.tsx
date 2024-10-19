import { z } from 'zod';
import { useTranslation } from 'react-i18next';
import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { Container, Form } from './styles'
import { Input } from '../../components/Input';
import { Header } from '../../components/Header'
import { Button } from '../../components/Button';
import { UseSafeArea } from '../../hooks/UseSafeArea';
import { Error } from '../../components/Input/styles';
import { createTask } from '../../services/createTask';

const taskSchema = z.object({
  name: z.string().min(1, { message: 'Campo obrigatório' }),
});

type taskFormData = z.infer<typeof taskSchema>;

export function AddTask({ navigation }) {

  const queryClient = useQueryClient();

  const { t } = useTranslation();
  const { top, bottom } = UseSafeArea();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<taskFormData>({
    resolver: zodResolver(taskSchema)
  })

  const { mutate } = useMutation({
    mutationFn: createTask,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] });

      navigation.navigate('Home');
    }
  });

  const onSubmit = (data: taskFormData) => mutate(data.name);

  return (
    <Container paddingTop={top} paddingBottom={bottom}>
        <Header title={t("create")} />

        <Form>
          <Controller
            name="name"
            control={control}
            render={({ field: { onChange, value } }) => (
              <Input 
                value={value}
                label={t("name")}
                onChangeText={onChange} 
                placeholder={t("enterTheNameTask")}
              />
            )}
          />
          { errors.name && <Error>{errors.name.message}</Error> }
        </Form>

        <Button title={t("add")} onPress={handleSubmit(onSubmit)} />
    </Container>
  )
}
