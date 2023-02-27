import type { InjectionKey } from 'vue'
const todoList = Symbol() as InjectionKey<Object>

export default todoList