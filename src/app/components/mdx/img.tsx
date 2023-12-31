import { cn } from "@/app/utils/utils"
import Image from "next/image"
import { HTMLProps } from "react"

const img = ({ src, alt }: HTMLProps<HTMLImageElement>) => {
   const _alt = (alt?.split("{")[0].trim() ?? alt) || ""
   const props = alt?.split("{")[1]
   const width = parseInt(props?.match(/w:\s*(\d+)/)?.[1] ?? "700")
   const height = parseInt(props?.match(/h:\s*(\d+)/)?.[1] ?? "400")
   const caption = props?.match(/cap:\s*"(.*?)"/)?.[1]

   return (
      <figure className="py-8">
         <div className="mx-auto flex h-fit w-fit flex-col" aria-label={_alt}>
            <Image src={src || ""} alt={_alt} width={width} height={height} />
         </div>
         {caption ? (
            <div
               className="mx-auto mt-4 text-center font-sans text-sm text-neutral-400"
               style={{
                  maxWidth: width,
               }}
            >
               {caption}
            </div>
         ) : null}
      </figure>
   )
}

export default img
