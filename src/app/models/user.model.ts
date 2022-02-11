import { Role } from './role.model'

export interface User {
	id: number
	photo: string
	username: string
	fullname: string
	email: string
	password: string
	role: Role
}
