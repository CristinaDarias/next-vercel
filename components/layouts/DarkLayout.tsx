import { FC, ReactNode } from 'react'

type DarkLayoutProps = {
  children: ReactNode;
};

export const DarkLayout: FC<DarkLayoutProps> = ({children}) => {
  return (
    <div style={{
      backgroundColor: 'gray',
      borderRadius: '5px',
      padding: '10px',
    }}>
      <h3>Dark Layout</h3>
      <div>
        {children}
      </div>
    </div>
  )
}
