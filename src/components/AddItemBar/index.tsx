import { SubmitHandler, useForm } from 'react-hook-form'
import { AddItemBarContainer, AddIcon, ItemForm, ItemInput, SubmitButton } from "./styles";

interface FormProps {
  newItem: string;
}

interface NewItemBarProps {
  onAddItem: (item: string) => void;
  onEditItem: (item: string, id: number | null,) => void;
  resetInputValue: () => void;
  actualItem: number | null;
  inputValue: string;
}

export function AddItemBar({ onAddItem, onEditItem, actualItem, inputValue, resetInputValue }: NewItemBarProps) {
  const { register, handleSubmit, setValue } = useForm<FormProps>();

  const handleAddItem: SubmitHandler<FormProps> = (data) => {
    if (data.newItem.trim() !== "" && actualItem === null) {
      onAddItem(data.newItem);
    } else if (data.newItem.trim() !== "") {
      onEditItem(data.newItem, actualItem)
    }
    setValue("newItem", "");
    resetInputValue()
  };

  return (
    <AddItemBarContainer>
      <ItemForm onSubmit={handleSubmit(handleAddItem)}>
        <ItemInput type="text" placeholder={inputValue || "Add new item..."} {...register("newItem")}/>

        <SubmitButton>
          <AddIcon />
        </SubmitButton>
      </ItemForm>
    </AddItemBarContainer>
  )
}