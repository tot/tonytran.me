import { HTMLProps } from "react"

const li = ({ children }: HTMLProps<HTMLLIElement>) => {
   return (
      <li className="list-item text-neutral-300 marker:text-neutral-500">
         {children}
      </li>
   )
}

export default li
