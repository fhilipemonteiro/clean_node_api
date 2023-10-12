import { SignUpController } from './signup'

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
  })
})
