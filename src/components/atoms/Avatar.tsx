import Image from "next/image"

type Props = {
    src: string
    alt?: string
}

export default function Avatar({ src, alt }: Props) {
    return (
        <div className="w-10 h-[40px] relative">
            <Image
                src={src}
                alt={alt || ""}
                fill
                className="rounded-full object-cover border"
            />
        </div>
    )
}