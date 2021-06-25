import { Router } from 'express'
import { CreateUserController } from './controllers/CreateUserController'
import { CreateTagController } from './controllers/CreateTagController'
import { ensureAdmin } from './middlewares/ensureAdmin'
import { AuthenticateUserController } from './controllers/AuthenticateUserController'
import { CreateComplimentController } from './controllers/CreateComplimentController'
import { ensureAuthenticated } from './middlewares/ensureAuthenticated'
import { ListUserReceiverComplementsController } from './controllers/ListUserReceiverComplementsController'
import { ListUserSenderComplementsController } from './controllers/ListUserSenderComplementsController'
import { ListTagsController } from './controllers/ListTagsController'
import { ListUsersControllers } from './controllers/ListUsersControllers'

const router = Router()

const createUserController = new CreateUserController()
const createTagController = new CreateTagController()
const creteComplimentController = new CreateComplimentController()
const authenticateUserController = new AuthenticateUserController()

const listUserReceiverComplementsController = new ListUserReceiverComplementsController()
const listUserSenderComplementsController = new ListUserSenderComplementsController()
const listTagsController = new ListTagsController()
const listUsersController = new ListUsersControllers()

router.post('/users', createUserController.handle)
router.post('/tags',  ensureAuthenticated, ensureAdmin, createTagController.handle)
router.post('/login', ensureAdmin, authenticateUserController.handle)
router.post('/compliments', ensureAuthenticated, creteComplimentController.handle)

router.get("/user/compliments/send", ensureAuthenticated, listUserSenderComplementsController.handle)
router.get("/user/compliments/receiver", ensureAuthenticated, listUserReceiverComplementsController.handle)
router.get("/tags", ensureAuthenticated, listTagsController.handle)
router.get("/users", ensureAuthenticated, listUsersController.handle)

export { router }