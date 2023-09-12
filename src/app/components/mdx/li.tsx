import { HTMLProps } from "react"

const li = (props: HTMLProps<HTMLLIElement>) => {
   return <li className="list-item text-neutral-300">{props.children}</li>
}

export default li
