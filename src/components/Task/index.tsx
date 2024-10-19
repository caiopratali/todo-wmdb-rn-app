import { useMutation, useQueryClient } from '@tanstack/react-query';

import { Checkbox, Container, Icon, Title } from './styles';
import { updateTask } from '../../services/updateTask';

interface TaskProps {
    id: string;
    name: string;
    isCompleted: boolean;
}

export function Task({ id, name, isCompleted }: TaskProps) {

  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: updateTask,
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] });

      queryClient.setQueryData(['tasks'], (oldTasks: any) => {
        const updatedTasks = oldTasks.map((task) => {
          if (task.id === id) {
            return { ...task, done: variables.isCompleted }
          }

          return task;
        })

        return updatedTasks;
      });
    }
  });

  const handleCompleted = () => {
    mutate({ id, isCompleted: !isCompleted });
  }

  return (
    <Container onPress={handleCompleted}>
        <Checkbox>
            { isCompleted && <Icon /> }
        </Checkbox>

        <Title>{name}</Title>
    </Container>
  )
}
