import styles from './Login.module.css'
import Headling from '../../components/Headling/Headling'
import Input from '../../components/Input/Input'
import { type FormEvent, useState } from 'react'
import Button from '../../components/Button/Button'
import { Link, useNavigate } from 'react-router-dom'
import axios, { AxiosError } from 'axios'
import Where from '../../components/Where/Where'
import { PREFIX } from '../../helpers/API'
import { type LoginResponse } from '../../interfaces/auth.interface'

export interface LoginForm {
  email: {
    value: string
  }
  password: {
    value: string
  }
}

const Login = () => {
  const [error, setError] = useState<string | null>(null)
  const navigate = useNavigate()

  const submit = async (e: FormEvent) => {
    e.preventDefault()
    setError(null)
    const target = e.target as typeof e.target & LoginForm
    const {
      email,
      password
    } = target
    await sendLogin(email.value, password.value)
  }

  const sendLogin = async (email: string, password: string) => {
    try {
      const { data } = await axios.post<LoginResponse>(`${PREFIX}/auth/login`, {
        email,
        password
      })
      navigate('/')
      console.log(data)
    } catch (e) {
      if (e instanceof AxiosError) {
        setError(e.response?.data.message)
      }
    }
  }

  return <div className={styles.login}>
    <Headling>Вход</Headling>

    <Where condition={error != null}>
        <div className={styles.error}>
            {error}
        </div>
    </Where>

    <form className={styles.form}
      /* eslint-disable-next-line @typescript-eslint/no-misused-promises */
          onSubmit={submit}
    >
      <div className={styles.field}>
        <label htmlFor="email">Ваш email</label>
        <Input id="email"
               name="email"
               placeholder={'Email'}
        />
      </div>

      <div className={styles.field}>
        <label htmlFor="password">Ваш пароль</label>
        <Input id="password"
               name="password"
               type="password"
               placeholder={' Password'}/>
      </div>

      <Button appearance="big">Submit</Button>

      <div className={styles.links}>
        Нет аккаунта?
        <Link to="/auth/register">Зарегистрироваться</Link>
      </div>
    </form>

  </div>
}

export default Login
