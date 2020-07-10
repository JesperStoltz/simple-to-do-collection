import { BehaviorSubject } from 'rxjs';

export const todos$ = new BehaviorSubject(JSON.parse(window.localStorage.getItem('todos') || "[]"));

export function updateToDos(newTodos) {
    if (!newTodos) {
        window.localStorage.removeItem('todos');
    }
    else {
        window.localStorage.setItem('todos', JSON.stringify(newTodos));
    }
    todos$.next(newTodos);
}
