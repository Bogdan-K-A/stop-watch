import s from './Container.module.css'

export const Container = ({ children }) => (
  <div className={s.container}>{children}</div>
)
