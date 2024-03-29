import Image from "next/image";
import Link from "next/link";

type Props = {
  flag: string;
  altFlag: string;
  name: string;
  population: number;
  region: string;
  capital: string[] | null;
  cca: string;
}

export const Country = ({ flag, altFlag, name, population, region, capital, cca }: Props) => {

  return (
    <li className="w-[min(100%,20rem)] mx-auto bg-el-color dark:bg-dark-el-color rounded overflow-hidden cursor-pointer shadow-md">
      <Link href={`/code/${cca}`}>
        <div className="w-full h-[45%]">
          <Image
            src={flag}
            alt={`${altFlag}`}
            width={0}
            height={0}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative p-6 pb-[5rem] text-[0.875rem] h-[55%]">
          <h2 className="font-bold text-[1.1rem] mb-3">{name}</h2>
          <p className="mb-1"><span className="font-semibold">Population: </span>
            <span className="opacity-90">{new Intl.NumberFormat("en-US").format(population)}</span></p>
          <p className="mb-1"><span className="font-semibold">Region:</span> <span className="opacity-90">{region}</span></p>
          <p><span className="font-semibold">Capital:</span> <span className="opacity-90">{capital && capital.join(', ')} {!capital && "doesn't exist"}</span></p>
        </div>
      </Link>
    </li>
  )
}