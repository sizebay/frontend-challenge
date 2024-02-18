import React, { useState, useRef } from 'react';
import { CheckCircle, MinusCircle } from "@phosphor-icons/react";
import { Button } from "../../Button/Button";
import { TaskProps } from "../../Modal/Modal";
import { ItemText, TaskItemContainer, ButtonContainer, Input, TaskItemContainerEdit } from "./TaskItem.styles";
import { deleteTheme, saveTheme } from "../../Button/Button.styles";
import { Tooltip } from '@mui/material';

interface TaskItemProps {
    task: TaskProps;
    onDelete: (taskId: number) => void;
    onToggleDone: (taskId: number) => void;
    onTextEdit: (taskId: number, newText: string) => void;
}

export function TaskItemComponent({ task, onDelete, onToggleDone, onTextEdit }: TaskItemProps) {
    const [isEditing, setIsEditing] = useState(false);
    const [editedText, setEditedText] = useState(task.taskText);
    const containerRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const blurTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const handleDelete = () => {
        onDelete(task.id);
    };

    const handleToggleDone = () => {
        onToggleDone(task.id);
    };

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEditedText(e.target.value);
    };

    const handleSaveChanges = () => {
        if (editedText !== task.taskText) {
            onTextEdit(task.id, editedText);
        }
        setIsEditing(false);
        if (blurTimeoutRef.current) {
            clearTimeout(blurTimeoutRef.current);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleSaveChanges();
        }
    };

    const handleContainerBlur = () => {
        blurTimeoutRef.current = setTimeout(() => {
            if (!containerRef.current?.contains(document.activeElement)) {
                handleSaveChanges();
            }
        }, 0);
    };

    return (
        <>
            {
                isEditing ? (
                    <TaskItemContainerEdit ref={containerRef} onClick={handleEditClick} onBlur={handleContainerBlur} >
                        <Input
                            ref={inputRef}
                            type="text"
                            value={editedText}
                            onChange={handleInputChange}
                            onKeyDown={handleKeyDown}
                            autoFocus
                        />
                        <ButtonContainer>
                            <Button
                                theme={deleteTheme}
                                onButtonClick={handleDelete}>
                                <MinusCircle size={25} weight="fill" />
                            </Button>
                            <Button
                                theme={saveTheme}
                                onButtonClick={handleToggleDone}>
                                <CheckCircle size={25} weight="fill" />
                            </Button>
                        </ButtonContainer>
                    </TaskItemContainerEdit>
                ) : (
                    <Tooltip title="Edit" arrow>
                        <TaskItemContainer ref={containerRef} onClick={handleEditClick} onBlur={handleContainerBlur}>
                            <ItemText>{task.taskText}</ItemText>
                        </TaskItemContainer>
                    </Tooltip>
                )
            }
        </>
    );
}
