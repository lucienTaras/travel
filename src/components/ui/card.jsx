export function Card({ className = '', children }) { return <div className={['rounded-2xl border bg-white shadow-sm', className].join(' ')}>{children}</div> }
export function CardHeader({ className = '', children }) { return <div className={['p-5 pb-3', className].join(' ')}>{children}</div> }
export function CardTitle({ className = '', children }) { return <h3 className={['font-semibold', className].join(' ')}>{children}</h3> }
export function CardDescription({ className = '', children }) { return <p className={['text-sm text-slate-500', className].join(' ')}>{children}</p> }
export function CardContent({ className = '', children }) { return <div className={['p-5 pt-3', className].join(' ')}>{children}</div> }
