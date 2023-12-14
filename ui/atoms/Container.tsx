import { PropsWithChildren } from "react"

type PropsWithChildrenAndClassName = PropsWithChildren & {
    className?: string
}

const Container = ({children, className}: PropsWithChildrenAndClassName) => (
    <div className={`max-w-7xl mx-auto sm:px-4 md:px-6 lg:px-8 ${className || ''}`}>
        {children}
    </div>
)

export default Container