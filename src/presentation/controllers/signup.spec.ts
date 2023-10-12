import { SignUpController } from './signup'
import { MissingParamError } from '../errors/missing-param-error'

describe('SignUp Controller', () => {
  test('Shold return 400 if no name is provided', () => {
    const sut = new SignUpController()

    const httpRequest = {
      body: {
        email: 'any_email',
        password: 'any_password',
        passwordConfirmation: 'any_password'
      }
    }

    const httpResponde = sut.handle(httpRequest)

    expect(httpResponde.statusCode).toBe(400)
    expect(httpResponde.body).toEqual(new MissingParamError('name'))
  })

  test('Shold return 400 if no email is provided', () => {
    const sut = new SignUpController()

    const httpRequest = {
      body: {
        name: 'any_name',
        password: 'any_password',
        passwordConfirmation: 'any_password'
      }
    }

    const httpResponde = sut.handle(httpRequest)

    expect(httpResponde.statusCode).toBe(400)
    expect(httpResponde.body).toEqual(new MissingParamError('email'))
  })
})
