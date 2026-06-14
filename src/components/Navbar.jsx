import { Button } from "@base-ui/react"
import { Link } from "react-router-dom"
import { Badge } from "./ui/badge"
import { useState } from "react"

const Navbar = () => {
    const [search, setSearch] = useState("")
// console.log(search)
    return (


        <div className="flex items-center justify-between p-4 border-b max-w-6xl mx-auto">

            <Link to="/" className="text-xl font-bold">
                SHopEasy
            </Link>

            <input
                type="text"
                placeholder="Search Products...."
                value={search}
                onChange={(e)=> setSearch(e.target.value)}
                className="w-1/3 border p-2"
            />

            <Link to="/cart">
                <Button>
                    Cart    <Badge variant="secondary" className="ml-2">0</Badge>
                </Button>
            </Link>

        </div>



    )
}

export default Navbar
