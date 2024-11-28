import Link from "next/link";
import {Button} from "@/components/ui/button";

export default function PublicationPage() {
    return (
        <div className={"mt-28"}>
            <h1 className={"text-center text-3xl font-semibold pt-10"}>Conference Publication</h1>
            <ul className={"max-w-md mx-auto mt-20 sm:mt-24 flex"}>
                <li>
                    <Link href={'/program/committee'}>
                        <Button variant={"link"} className={" text-lg"}>Committee</Button>
                    </Link>
                </li>
                <li>
                    <Link href={'/program/cfp'}>
                        <Button variant={"link"} className={" text-lg"}>Call For Paper</Button>
                    </Link>
                </li>
                <li>
                    <Link href={'/program/keynote'}>
                        <Button variant={"link"} className={" text-lg"}>Keynote Speakers</Button>
                    </Link>
                </li>
            </ul>

        </div>
    );
}
