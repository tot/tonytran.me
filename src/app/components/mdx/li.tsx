import { HTMLProps } from "react"

const li = (props: HTMLProps<HTMLLIElement>) => {
   return (
      <li className="list-item text-neutral-300 marker:text-neutral-500">
         {props.children}
      </li>
   )
}

export default li
