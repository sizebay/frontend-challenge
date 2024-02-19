import { SubmitHandler, useForm } from 'react-hook-form'
import { AddItemBarContainer, AddIcon, ItemForm, ItemInput, SubmitButton } from "./styles";

interface FormProps {
  newItem: string;
}

interface NewItemBarProps {
  onAddItem: (item: string) => void;
}

export function AddItemBar({ onAddItem }: NewItemBarProps) {
  const { register, handleSubmit, setValue } = useForm<FormProps>();

  const handleAddItem: SubmitHandler<FormProps> = (data) => {
    if (data.newItem.trim() !== "") {
      onAddItem(data.newItem);
      setValue("newItem", "");
    }
  };

  return (
    <AddItemBarContainer>
      <ItemForm onSubmit={handleSubmit(handleAddItem)}>
        <ItemInput type="text" placeholder="Add new item..." {...register("newItem")}/>

        <SubmitButton>
          <AddIcon />
        </SubmitButton>
      </ItemForm>
    </AddItemBarContainer>
  )
}