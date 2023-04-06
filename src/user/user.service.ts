import UserModel from './user.schema'
import { UserType } from './types/user.types'

export class UserService {
    constructor() {}

    public async create(user: UserType) {
        await UserModel.create(user)
    }
}
