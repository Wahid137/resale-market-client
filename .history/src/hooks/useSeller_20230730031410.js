import { useEffect, useState } from "react"

const useSeller = email => {
    const [isSeller, setIsSeller] = useState(false)
    const [isSellerLoading, setIsSellerLoading] = useState(true)
    useEffect(() => {
        if (email) {
            fetch(`https://resale-market-server-wahid137.vercel.app/users/admin/${email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    setIsSeller(data.isAdmin)
                    setIsSellerLoading(false)
                })
        }
    }, [email])
    return [isAdmin, isAdminLoading]
}
export default useAdmin;