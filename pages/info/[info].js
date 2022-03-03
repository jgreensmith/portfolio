import { useRouter } from "next/router";


export default function InfoPage() {
    const router = useRouter();
    const {info} = router.query;
        
    return (
        <h1>Butt</h1>
    )
}